(ns lt.plugins.data-viz.aleph
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.plugins.data-viz.ui :as ui]
            [lt.plugins.data-viz.tree :as tree]
            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(behavior ::aleph-object-viewer.set!
          :triggers #{:set!}
          :reaction (fn [this obj]
                      (when-let [old (:object @this)]
                        (object/destroy! old))
                      (object/merge! this {:object (ui/make-tree-node nil (tree/->tree obj))})))

(object/object* ::aleph-object-viewer
                :tags #{:aleph-object-viewer}
                :name "LT Object Viewer"
                :object nil
                :init (fn [this]
                        [:div.tree-node.root
                         (bound this
                                (fn [_]
                                   (if-let [data (:object @this)]
                                     (object/->content data)
                                     "No Light Table object selected")))]))

(def viewer (object/create ::aleph-object-viewer))

;;(object/destroy! viewer)


(defn ltobj? [obj]
  (and obj @obj (map? @obj) (:lt.object/id @obj)) )

(behavior ::aleph.on-select
          :triggers #{:select}
          :reaction (fn [_ obj]
                      (when (ltobj? (atom obj))
                        (object/raise viewer :set! obj))
                      (tabs/add-or-focus! viewer)))
