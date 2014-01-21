(ns checking-safari-leak.core
  (:require
   [cljs.core.async :as async
    :refer [<! map< put! chan]])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt! go-loop]]))

(defn dev-null [in]
  (go-loop [v (<! in)]
           (if (nil? v) :closed (recur (<! in)))))

(defn has-memory-leak [input-chan]
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
      )
  )

(defn has-memory-leak-as-well [input]
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
(map< identity
      input))))))))))))))))))

(def no-memory-leak
  (comp
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)    
   
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)
   (partial map< identity)))

(defn data []
  (mapv identity (range 1000)))

(def output-data (atom []))

(defn doit []
  (let [output-data (atom [])]
    (add-watch output-data :output-change (fn [_ _ _ n]
                                            (set! (.-innerHTML (.getElementById js/document "main-area"))
                                                  (apply str
                                                         (map (fn [x] (str "<div> time: " (:time x) "ms </div>"))
                                                              n)))))
    (let [input (chan)
          output (no-memory-leak input)
          start-time (.getTime (js/Date.))]
      (mapv (fn [x]
              (put! input (data)))
            (range 12))
      (go-loop []
               (<! output)
               (swap! output-data conj { :time (- (.getTime (js/Date.)) start-time) })
               (recur)))))

(enable-console-print!)

(doit)
