(ns lt.plugins.data-viz.ui
  (:require [lt.object :as object :refer [raise raise-reduce]]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.data-viz.core :refer [type-key dom->string atom? type-name]]
            [lt.plugins.data-viz.tree :as tree]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn add-class [el klass]
  (when (and el klass)
    (dom/add-class el klass))
  el)

(def type-key->class (atom {:keyword "cm-atom"
                            :number "cm-number"
                            :string "cm-string"
                            :symbol "cm-symbol"}))

(defn type-class [obj]
  (get @type-key->class (type-key obj)))

(defui key-ui [this value]
  [:span.tree-node-key value]
  :click (fn [e] (raise this :click! e))
  :contextmenu (fn [e] (raise this :menu! e))
  :mouseover (fn [e] (raise this :mouseover! e)))


(object/object* ::tree-node-key
                :tags #{:tree-node-key}
                :init (fn [this parent node]
                        (let [k (tree/->key node)
                              display-str (cond
                                           (= :set (type-key (tree/->value parent))) nil
                                           (number? k) (str "[" k "]")
                                           :else (str k))]
                          (when display-str
                            (-> (key-ui this display-str)
                                (add-class (type-class k)))))))

(def simple-types #{:string :number :keyword :symbol :nil})

(defn simple-display [v cnt]
  (let [s (pr-str v)
        f (apply str (take cnt s))
        r (drop cnt s)]
    (if (seq r)
      (str f " ..")
      f)))

(defmulti value-display type-key)
(defmethod value-display :default [v]
  (cond
   (atom? v) (str "#<" (type-name v) ": " (type-name @v) ">")
   (tree/branchable? v) (type-name v)
   (simple-types (type-key v)) (pr-str v)
   :else (simple-display v 80)))


(defui value-ui [this value]
  [:span.tree-node-value value]
  :click (fn [e] (raise this :click! e))
  :contextmenu (fn [e] (raise this :menu! e))
  :mouseover (fn [e] (raise this :mouseover! e)))

(object/object* ::tree-node-value
                :tags #{:tree-node-value}
                :init (fn [this _ node]
                        (let [v (tree/->value node)]
                          (-> (value-ui this (value-display v))
                              (add-class (or (type-class v) "cm-builtin"))))))


(behavior ::tree-node.on-destroy
          :triggers #{:destroy}
          :reaction (fn [this]
                      (when-let [children (:children @this)]
                        (doseq [c children]
                          (object/destroy! c)))
                      (when-let [kobj (::key @this)]
                        (object/destroy! kobj))
                      (object/destroy! (::value @this))))

(defui children-ui [children]
  [:ul.children
   (for [c children]
     (object/->content c))])

(behavior ::tree-node.open
          :triggers #{:open}
          :reaction (fn [this]
                      (let [node (:node @this)
                            children (->> (tree/branches node)
                                          (map  #(object/create ::tree-node node %)))]
                        (dom/append (object/->content this)
                                    (children-ui children))
                        (object/merge! this {:children children
                                             :open true}))))

(behavior ::tree-node.close
          :triggers #{:close}
          :reaction (fn [this]
                      (dom/remove (dom/$ :ul.children (object/->content this)))
                      (doseq [c (:children @this)]
                        (object/destroy! c))
                      (object/merge! this {:open false
                                           :children nil})))

(behavior ::tree-node.toggle
          :triggers #{:toggle}
          :reaction (fn [this]
                      (if (:open @this)
                        (raise this :close)
                        (raise this :open))))

(defn create-display-node [this k parent node]
  (let [obj (object/create k parent node)]
    (object/merge! obj {:parent-id (object/->id this)})
    obj))

(defn display-key? [parent node]
  (let [[pk pv] (tree/unwrap parent)]
    (not (or (= :set (type-key pv))
             (tree/root? node)
             (tree/atom? node)))))

(defui display-ui [this parent node]
  (if (display-key? (or parent node) node)
    (do
      (object/merge! this {::key (create-display-node this ::tree-node-key parent node)})
      [:span.display (object/->content (::key @this)) " " (object/->content (::value @this))])
    [:span.display (object/->content (::value @this))])
  :click (fn [e]
           (dom/prevent e)
           (raise this :toggle)))

(object/object* ::tree-node
                :tags #{:tree-node}
                :node nil
                :open false
                :children nil
                :init (fn [this parent node]
                        (object/merge! this {::value (create-display-node this ::tree-node-value parent node)
                                             :node node})
                        [:li.tree-node.cm-s-default
                         (display-ui this parent node)]))

(defn make-tree-node [parent node]
  "Returns a LT tree-node object."
  (object/create ::tree-node parent node))


(comment
  (let [parent (tree/->tree {:asdf [1 2] :foo "bar"})
        child (first (tree/branches parent))
        key-node (object/create ::tree-node-key parent child)
        value-node (object/create ::tree-node-value parent child)
        dom->string lt.plugins.data-viz.core/dom->string]

    (try
      (assert (= "<span class=\"tree-node-value cm-builtin\">Vector</span>"
                 (dom->string (object/->content value-node))))
      (assert (= "<span class=\"tree-node-key cm-atom\">:asdf</span>"
                 (dom->string (object/->content key-node))))
      (finally
       (object/destroy! key-node)
       (object/destroy! value-node)))
    ))

(comment ;; UI testing
  (def root (tree/->tree {:asdf [1 (atom '(1 2 a b))] :foo "bar" :blergs #js {:fruity 42}}))
  (def node (object/create ::tree-node nil root)
  (cmd/exec! :playground.set-object node)))
