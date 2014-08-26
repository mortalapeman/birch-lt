(ns lt.plugins.data-viz.core
  (:require [goog :as goog]))

(defn atom? [obj]
  "Returns true if the current object 'obj' is an atom."
  (boolean
   (when obj
     (instance? Atom obj))))

(defn zipper? [obj]
  "Returns true if the given object 'obj' is a zipper."
  (contains? (meta obj) :zip/make-node))

(defn js-obj? [obj]
  "Returns true if 'obj' is a javascript object."
  (goog/isObject obj))

(defn dom? [obj]
  "Returns true if 'obj' is a DOM object."
  (and obj (.-nodeType obj) (= 1 (.-nodeType obj))))

(defrecord type-info [classification fn name])

(def ^{:dynamic true} *known-type-info*
  "Known mappings of determinable types and their names."
  [(->type-info :concrete zipper? "Zipper")
   (->type-info :concrete atom? "Atom")
   (->type-info :concrete dom? "DOMNode")
   (->type-info :concrete map? "Map")
   (->type-info :concrete vector? "Vector")
   (->type-info :concrete list? "List")
   (->type-info :concrete set? "Set")
   (->type-info :primitive string? "String")
   (->type-info :primitive keyword? "Keyword")
   (->type-info :primitive nil? "nil")
   (->type-info :primitive number? "Number")
   (->type-info :concrete fn? "Function")
   (->type-info :concrete array? "Array")
   (->type-info :primitive symbol? "Symbol")
   (->type-info :abstract seq? "Seq")
   (->type-info :primitive js-obj? "JSObject")])


(defn type-name [obj]
  "Returns a string name for the object type if 'obj' has known type information."
  (let [order {:concrete 1 :abstract 2 :primitive 3}]
    (-> (filter (comp #(% obj) :fn)
                (sort-by (comp order :classification) *known-type-info*))
        first
        (get :name))))

(defn type-key [obj]
  "Returns a keyword for the object type if 'obj' has known type information."
  (when-let [n (type-name obj)]
    (-> n (.toLowerCase) keyword)))

(defn dom->str [d]
  "Returns the html representation of the dom node 'd'."
  (let [result (transient [])
        temp (.createElement js/document "div")]
    (.appendChild temp d)
    (aset result 0 (.-innerHTML temp))
    (set! (.-innerHTML temp) "")
    (aget result 0)))


(comment
  (do
    (assert (zipper? (clojure.zip/seq-zip [1 2])))
    (assert (js-obj? (js-obj)))
    (assert (atom? (atom nil)))
    (assert (dom? (first (lt.util.dom/make "<div></div>"))))
    (assert (= "String" (type-name "asdf")))
    (assert (= :string (type-key "asdf")))
    (assert (= :seq (type-key (seq "asdf"))))
    (assert (= "<div><p>1</p></div>" (dom->str (first (lt.util.dom/make "<div><p>1</p></div>")))))))
