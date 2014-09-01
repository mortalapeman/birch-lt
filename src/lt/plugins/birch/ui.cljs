(ns lt.plugins.birch.ui
  (:require [lt.object :as object :refer [raise raise-reduce]]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.birch.core :refer [type-key dom->str atom? type-name]]
            [lt.plugins.birch.tree :as tree]
            [crate.core :as crate]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn add-class [el klass]
  (when (and el klass)
    (dom/add-class el klass))
  el)

(defprotocol CssClass
  "Protocol for extending a type to support syntax
  highlighting in the tree-node ui."
  (css-class [this]
    "Returns a string to be used as the syntax css class
    for this object type"))

(def ^{:dynamic true} *type-key->class*
  {:keyword "cm-atom"
   :number "cm-number"
   :string "cm-string"
   :symbol "cm-symbol"})

(defn type-class [obj]
  (if (satisfies? CssClass obj)
    (css-class obj)
    (get *type-key->class* (type-key obj))))

(defui key-ui [this value]
  [:span.br-tree-node.key value]
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
  [:span.br-tree-node.value value]
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
   (for [c (sort-by (comp tree/->key :node deref) children)]
     (object/->content c))])

(behavior ::tree-node.open
          :triggers #{:open}
          :reaction (fn [this & [depth]]
                      (let [node (:node @this)
                            children (->> (tree/branches node)
                                          (map  #(object/create ::tree-node node %)))]
                        (when (< 1 (or depth 0))
                          (doseq [c children]
                            (raise c :open (dec depth))))
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
          :reaction (fn [this & [depth]]
                      (if (:open @this)
                        (raise this :close)
                        (raise this :open (or depth 0)))))

(defn create-display-node! [this k parent node]
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
      (object/merge! this {::key (create-display-node! this ::tree-node-key parent node)})
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
                        (object/merge! this {::value (create-display-node! this ::tree-node-value parent node)
                                             :node node})
                        [:li.br-tree-node.cm-s-default
                         (display-ui this parent node)]))

(defn make-tree-node [parent node]
  "Returns a LT tree-node object.

  parent is a object implementiong lt.plugins.birch.tree.TreeNode or nil.

  node is a object implementiong lt.plugins.birch.tree.TreeNode."
  (object/create ::tree-node parent node))

(behavior ::tree-node.make
          :triggers #{:make+}
          :desc "Provides a hook to switch out the of the tree-node
          creation function."
          :reaction (fn [this other]
                      make-tree-node))

(behavior ::simple-viewer.set!
          :triggers #{:set!}
          :reaction (fn [this obj & [depth]]
                      (when-let [old (:object @this)]
                        (object/destroy! old))
                      (let [make-tree-node (object/raise-reduce this :make+ make-tree-node)]
                        (object/merge! this {:object (make-tree-node nil (tree/make obj))}))
                      (object/raise (:object @this) :toggle (or depth 1))
                      (tabs/add-or-focus! this)))

(behavior ::simple-viewer.close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(object/object* ::birch.simple-viewer
                :tags #{:birch.simple-viewer}
                :name "Birch"
                :object nil
                :init (fn [this & [name]]
                        (when name
                          (object/merge! this {:name name}))
                        [:div.br-tree-node.root
                         (bound this
                                (fn [_]
                                   (if-let [data (:object @this)]
                                     (object/->content data)
                                     "No data to display")))]))

(defn make-simple-viewer
  ([]
   (make-simple-viewer "Birch"))
  ([name]
   (object/create ::birch.simple-viewer name)))

(comment
  (let [parent (tree/make {:asdf [1 2] :foo "bar"})
        child (first (tree/branches parent))
        key-node (object/create ::tree-node-key parent child)
        value-node (object/create ::tree-node-value parent child)
        dom->str lt.plugins.birch.core/dom->str]

    (try
      (assert (= "<span class=\"tree-node-value cm-builtin\">Vector</span>"
                 (dom->str (object/->content value-node))))
      (assert (= "<span class=\"tree-node-key cm-atom\">:asdf</span>"
                 (dom->str (object/->content key-node))))
      (finally
       (object/destroy! key-node)
       (object/destroy! value-node)))
    ))

(comment ;; UI testing
  (def root (tree/make {:asdf [1 (atom '(1 2 a b))] :foo "bar" :blergs #js {:fruity 42}}))
  (def node (object/create ::tree-node nil root)
  (cmd/exec! :playground.set-object node)))
