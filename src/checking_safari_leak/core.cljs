(ns checking-safari-leak.core
  (:require
   [cljs.core.async :as async
    :refer [<! map< put! chan]])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt! go-loop]]))

(defn dev-null [in]
  (go-loop [v (<! in)]
           (if (nil? v) :closed (recur (<! in)))))

(defn memory-leak-check [input-chan]
  (->> input-chan
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)       
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)
      (map< identity)      
      dev-null)
  )

(defn data []
  (mapv identity (range 1000)))


(def output-data (atom []))

(defn doit []
  (let [output-data (atom [])
        start-time (.getTime (js/Date.))]
    (add-watch output-data :output-change (fn [_ _ _ n]
                                            (set! (.-innerHTML (.getElementById js/document "main-area"))
                                                  (apply str
                                                         (map (fn [x] (str "<div><em>" (:iter x) "</em> time: " (:time x) "ms </div>"))
                                                              n)))))
    (let [input (chan)
          output (memory-leak-check input)]
      (mapv (fn [x]
              (swap! output-data conj { :iter x :time (- (.getTime (js/Date.)) start-time) })
              (put! input (data)))
            (range 12)))))



(enable-console-print!)

(doit)
