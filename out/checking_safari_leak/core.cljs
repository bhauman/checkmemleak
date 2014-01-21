(ns checking-safari-leak.core
  (:require
   [clojure.string :as s]
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

(defn doit [f]
  (let [output-data (atom [])]
    (add-watch output-data :output-change (fn [_ _ _ n]
                                            (set! (.-innerHTML (.getElementById js/document "main-area"))
                                                  (apply str
                                                         (map (fn [x] (str "<div> timer: " (:time x) "ms </div>"))
                                                              n)))))
    (let [input (chan)
          output (f input)
          start-time (.getTime (js/Date.))]
      (mapv (fn [x]
              (put! input (data)))
            (range 12))
      (go-loop []
               (<! output)
               (swap! output-data conj { :time (- (.getTime (js/Date.)) start-time) })
               (recur)))))

(enable-console-print!)

(let [leak (= "true" (last (s/split (.-href js/location) #"leak=")))]
  (if leak
    (do (set! (.-innerHTML (.getElementById js/document "leaky")) "Leaking now")
      (doit has-memory-leak))
    (doit no-memory-leak)
    ))


