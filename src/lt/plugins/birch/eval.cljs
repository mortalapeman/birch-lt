(ns lt.plugins.birch.eval
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.birch.reader :as reader]
            [lt.plugins.birch.ui :as ui])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn ir->result [this]
  (or (:result @this)
      (:last-result @this)))

(def viewer (ui/make-simple-viewer "Eval Viewer"))

(behavior ::inline-watch.store-last-result
          :triggers #{:update!}
          :reaction (fn [this res]
                      (object/merge! this {:last-result res})))

;; Remove behavior when pull request #1616 is accepted into Light Table
(behavior ::inline-result.menu-compat+
          :triggers #{:menu+}
          :reaction (fn [this items]
                      (conj items
                            {:label "Remove result"
                             :order 1
                             :click (fn [] (object/raise this :clear!))}
                            {:label "Copy result"
                             :order 2
                             :click (fn [] (object/raise this :copy))})))

(behavior ::inline-result.menu+
          :triggers #{:menu+}
          :reaction (fn [this items]
                      (conj items
                            {:label "Open in viewer"
                             :order 3
                             :click (fn []
                                      (when-let [data (reader/read-string! (ir->result this))]
                                        (object/raise viewer :set! data)))})))
