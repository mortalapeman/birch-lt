(ns lt.plugins.data-viz.reader
  (:require [clojure.string :as string]
            [cljs.reader :refer [read-string]]))

(def atom-re #"^#<Atom: (.+)>$")
(def other-re #"^#<.+>$")

(defn atom-str? [s]
  (and (string? s)
       (boolean (re-find atom-re s))))

(defn other-str? [s]
  (and (string? s)
       (boolean (re-find other-re s))))

(defn atom-str-value [s]
  (-> (re-find atom-re s)
      second))

(defn read-string-cljs-atom! [s]
  (-> (atom-str-value s)
      read-string
      atom))

(def ^{:dynamic true} *parsers*
  [{:can-parse? atom-str?
    :fun read-string-cljs-atom!}])


(defn process-string [s]
  (loop [state {:escape-next? false :capture [] :in-string false}
         c (first s)
         r (rest s)]
    (let [is-quote (= "\"" c)
          is-backslash (= "\\" c)
          next-c (first r)
          next-r (rest r)]
      state
      (cond

       ;; End of string
       (nil? c)
       state

       ;; Not in string and previous character was backslash, blindly skip next character
       (and (:escape-next? state) (not (:in-string state)))
       (recur (assoc-in state [:escape-next?] false) next-c next-r)

       ;; Found backslash and not in string
       (and is-backslash (not (:in-string state)))
       (recur (assoc-in state [:escape-next?] true) next-c next-r)

       ;; Found quote and not in string, start capture
       (and is-quote (not (:in-string state)))
       (recur (-> (assoc-in state [:in-string] true)
                  (update-in [:capture] conj "\""))
              next-c next-r)

       ;; Found quote and in string, end capture and return state
       (and is-quote (:in-string state) (not (:escape-next? state)))
       (-> (assoc-in state [:in-string] false)
           (update-in [:capture] conj "\"")
           (update-in [:capture] (comp vector #(apply str %)))
           (merge {:next next-c :more next-r}))

       (:in-string state)
       (recur (update-in state [:capture] conj c) next-c next-r)

       (not (:in-string state))
       (recur state next-c next-r)

       :else
       (merge state {:error "We missed a state"
                     :next c
                     :more r})
       ))))

(def asdf "asdf\"woot\"qwer")

(let [capture (comp first :capture process-string)]
  (assert (= "\"woot\"" (capture "a\"woot\"a")))
  (assert (= "\"wo\\\"ot\"" (capture "a\"wo\\\"ot\"a"))))

(process-string "a\"wo\\\"ot\"a")
(read-string "\"wo\\\"ot\"")


(defn find-unreadable-forms [s]
  (loop [state {:capture [] :final [] :#? false :level 0}
         c (first (seq s))
         r (rest (seq s))]
    (let [prevHash? (:#? state)
          c-is-hash (= "#" c)
          c-is-start (= "<" c)
          c-is-end (= ">" c)
          c-is-quote (= "\"" c)
          next-c (first r)
          next-r (rest r)]
      (cond

       ;; We have reached the end of the stream
       (nil? c)
       (:final state)

       ;; We have found a #
       (and c-is-hash  (not prevHash?))
       (recur (assoc state :#? true) next-c next-r)

       ;; The next character after a # was not a <
       (and (not c-is-start) prevHash?)
       (recur (assoc state :#? false) next-c next-r)

       ;; The next character after a # was a <, start capture.
       (and c-is-start prevHash?)
       (recur (-> (assoc state :#? false)
                  (update-in [:capture] conj "#<")
                  (update-in [:level] inc))
              next-c
              next-r)

       ;; We are still inside a #<...>
       (and (< 0 (:level state)) (not c-is-end))
       (recur (update-in state [:capture] conj c)
              next-c
              next-r)

       ;; We have reached the end of the first #<...>
       (and (= 1 (:level state)) c-is-end)
       (recur (-> (update-in state [:final] conj (apply str (conj (:capture state) c)))
                  (update-in [:level] dec)
                  (assoc :capture []))
              next-c
              next-r)

       ;; We have reached the end of a #<..>, but we are still inside the first #<...>
       (and (< 1 (:level state)) c-is-end)
       (recur (-> (update-in state [:capture] conj c)
                  (update-in [:level] dec))
              next-c
              next-r)

       ;; We are not inside a #<...>
       (and (= 0 (:level state )) (not prevHash?))
       (recur state next-c next-r)

       ;; We missed a state somewhere
       :else nil))))


(defn santize-pr-str [s]
  (let [bad-strs (find-unreadable-forms s)
        sanitize (fn [a n]
                  (string/replace a n (quote-string n)))]
    (reduce sanitize s bad-strs)))

(defn read-string! [s]
  (if-let [{:keys [fun]} (first (filter (comp #(% s) :can-parse?)
                                        *parsers*))]
    (fun s)
    (-> (santize-pr-str s)
        read-string)))


(comment
  (do
    ;; find-unreadable-forms
    (assert (= "#<asdf>" (first (find-unreadable-forms "{:woot #<asdf>}"))))
    (assert (= "#<#<asdf>>" (first (find-unreadable-forms "{:woot #<#<asdf>>"))))
    (assert (= "{:woot \"#<asdf>\"}" (santize-pr-str "{:woot #<asdf>}")))

    ;; read-string!
    (assert (= {:woot "#<Atom: 1>"}
               (read-string! "{:woot #<Atom: 1>}")))
    (assert (= 1 @(read-string-cljs-atom! "#<Atom: 1>")))

    ;; TODO: handle this edge case
    ;;(assert (= "#<#<\"#<\">>" (first (find-unreadable-forms "{:woot #<#<\"#<\">>}"))))
    ))
