(ns lt.plugins.mermaid
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.util.load :as load]
            [lt.objs.plugins :as plugins]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui chart-panel [this]
  [:div.mermaid (bound this :user-input)])

(object/object* ::mermaid.chart
                :behaviors [::on-close-destroy]
                :name "mermaid"
                :user-input ""
                :init (fn [this filename]
                        (object/update! this [:name] (constantly (str filename " - Live Mermaid")))
                        (chart-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :desc "mermaid: Close tab and tabset as well if last tab"
          :reaction (fn [this]
                      (object/raise this :destroy)))

(behavior ::read-editor
          :triggers [:change ::read-editor]
          :debounce 350
          :desc "Mermaid: Read the content inside an editor"
          :reaction (fn [ed]
                      (object/assoc-in! (:mermaid @ed) [:user-input] (editor/->val ed))
                      (try
                        (js/mermaid.init)
                        (catch :default e
                          (println (.-message e))))))

(defn ensure-and-focus-second-tabset []
  (when (< (-> @tabs/multi :tabsets count) 2)
      (cmd/exec! :tabset.new))
  (cmd/exec! :tabset.next))

(cmd/command {:command :mermaid.watch-editor
              :desc "Mermaid: Watch this editor for changes"
              :exec (fn []
                      ;; Load hefty dependency dynamically
                      (when-not js/window.mermaid
                        (load/js (str plugins/user-plugins-dir "/mermaid/mermaid.full.min.js") true))
                      (let [ed (pool/last-active)
                            filename (get-in @ed [:info :name])
                            mermaid (object/create ::mermaid.chart filename)]
                        (ensure-and-focus-second-tabset)
                        (tabs/add-or-focus! mermaid)
                        (cmd/exec! :tabset.prev)
                        (object/assoc-in! ed [:mermaid] mermaid)
                        (object/add-behavior! ed ::read-editor)
                        (object/raise ed ::read-editor)))})

(comment
  (-> js/mermaid))
