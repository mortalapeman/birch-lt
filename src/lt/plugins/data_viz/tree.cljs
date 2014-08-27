(ns lt.plugins.data-viz.tree
  (:require [goog.object :as gobj]
            [clojure.zip :as zip]
            [lt.plugins.data-viz.core :refer [type-key]]
            [lt.plugins.data-viz.tree.protocols :as p]))

(def ^{:dynamic true} *branchable-type-keys*
  "Contains all known branchable type keys determined by
  lt.plugins.data-viz.core/type-key."
  #{:map :set :atom :vector :list :seq :jsobject :array})


(defmulti children
  "Returns a sequence of [k v] pairs given a tree node."
  (fn [[k v]] (type-key v)))

(defmethod children :map [[k v]]
  (seq v))

(defmethod children :atom [[k v]]
  [[::atom @v]])

(defmethod children :jsobject [[k v]]
  ;; Pretty much everything should match :jsobject
  ;; so check for protocol implementation here.
  (if (satisfies? p/TreeNodeChildren v)
    (p/children v)
    (map vector (gobj/getKeys v) (gobj/getValues v))))

(defmethod children :default [[k v]]
  (if (satisfies? p/TreeNodeChildren v)
    (p/children v)
    (map-indexed vector v)))


(defmulti branchable?
  "Returns true if the given node can have branches."
  type-key)

(defmethod branchable? :default [v]
  (if (satisfies? p/TreeNodeBranchable v)
    (p/branchable? v)
    (*branchable-type-keys* (type-key v))))


(defmulti make-node
  "Returns a new node given an existing node and a collection of children."
  (fn [[_ v] _] (type-key v)))

(defmethod make-node :map [[k v] children]
  [k (into v children)])

(defmethod make-node :jsobject [[k v] c]
  (let [o (js-obj)]
    (doseq [[n d] (concat (children v) c)]
      (aset o n d))
    [k o]))

(defmethod make-node :default [[k v :as node] children]
  (if (satisfies? p/TreeNodeMake v)
    (p/make-node v k children)
    [k (into v (map second children))]))


(defprotocol TreeNode
  (branches [this] "Returns breadth first sequence of TreeNodes.")
  (unwrap [this] "Returns a vector of the form [key value]."))

(defn make [obj]
  "Returns a TreeNode structure for traversing the given object."
  (letfn [(reify-zipper [node]
           (reify TreeNode
             (branches  [_]
              (letfn [(go-right [z]
                       (cons (reify-zipper z)
                             (lazy-seq
                              (when-let [r (zip/right z)]
                                (go-right r)))))]
                (when-let [d (zip/down node)]
                  (go-right d))))
             (unwrap [_] (zip/node node))))]
    (reify-zipper (zip/zipper (fn [[_ v]] (branchable? v))
                              children
                              make-node
                              [::root obj]))))

(defn ->value [node]
  "Returns the value of the current node."
  (second (unwrap node)))

(defn ->key [node]
  "Returns the key of the current node."
  (first (unwrap node)))


(defn root? [node]
  (= ::root (->key node)))

(defn atom? [node]
  (= ::atom (->key node)))

(comment
  (do
    ;; children
    (assert (= (children [:key ['a 'b]])
               [[0 'a] [1 'b]]))
    (assert (= (children [:key {:foo "bar"}])
               [[:foo "bar"]]))
    (assert (= (children [:key #js {:foo "bar"}])
               [["foo" "bar"]]))

    ;; branchable?
    (assert (branchable? {}))
    (assert (branchable? []))
    (assert (branchable? #{}))
    (assert (branchable? '()))
    (assert (branchable? (js-obj)))
    (assert (branchable? #js []))
    (assert (branchable? (seq "asdf")))

    ;; make branches
    (let [map-data {:woot "asdf" :blergs [1 2]}
          vec-data ["asdf" :blergs]
          tree-children (fn [x] (-> x make branches))]
      (assert (= ["asdf" [1 2]] (map ->value (tree-children map-data))))
      (assert (= [:woot :blergs] (map ->key (tree-children map-data))))
      (assert (= ["asdf" :blergs] (map ->value (tree-children vec-data))))
      (assert (= [0 1] (map ->key (tree-children vec-data))))
      )
    ))
