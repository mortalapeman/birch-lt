(ns lt.plugins.data-viz.tree.protocols)

(defprotocol TreeNodeChildren
  (children [this] "Returns a sequence of [key value] pairs."))

(defprotocol TreeNodeBranchable
  (branchable? [this] "Returns true if the value can have children."))

(defprotocol TreeNodeMake
  (make-node [this key children]
   "Returns a new node of the form [key value]

    node is a vector of the form [key value].

    children is a sequence of child nodes of the form [key value]."))
