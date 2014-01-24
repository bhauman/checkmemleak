(ns checking-safari-leak.core
  (:require
   [clojure.string :as s]
   [cljs.core.async :as async
    :refer [<! map< map> put! chan]])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt! go-loop]]))

(defn dev-null [in]
  (go-loop [v (<! in)]
           (if (nil? v) :closed (recur (<! in)))))

(defn mymap [f in]
  (let [out (chan)]
    (go-loop []
             (put! out (f (<! in)))
             (recur))
    out))

(def routes {
      :map<-chain
      (fn has-memory-leak-as-well [input]
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
      
      :map< (fn [input-chan]
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
                   
                                        ;      (map< identity)
                                        ;      (map< identity)
                   
                                        ;      (map< identity)
                                        ;      (map< identity)      
                   
                   )) 
      :map> (fn [input-chan]
              (->> input-chan
                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)

                   (map> identity)
                   (map> identity)
                   (map> identity)
                   (map> identity)

                                        ;      (map> identity)
                                        ;      (map> identity)

                                        ;      (map> identity)
                                        ;      (map> identity)      
                   
                   ))

      :custom-map (defn has-memory-leak-mymap [input-chan]
                    (->> input-chan
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)

                         (mymap identity)
                         (mymap identity)
                         (mymap identity)
                         (mymap identity)

                                        ;      (mymap identity)
                                        ;      (mymap identity)

                                        ;      (mymap identity)
                                        ;      (mymap identity)      
                         )
                    )

      :let-based (fn [input-chan]
                   (let [a (map< identity input-chan)]
                     (let [a (map< identity a)]
                       (let [a (map< identity a)]
                         (let [a (map< identity a)]
                           (let [a (map< identity a)]
                             (let [a (map< identity a)]
                               (let [a (map< identity a)]
                                 (let [a (map< identity a)]
                                   (let [a (map< identity a)]
                                     (let [a (map< identity a)]
                                       (let [a (map< identity a)]
                                         (let [a (map< identity a)]
                                           (let [a (map< identity a)]
                                             (let [a (map< identity a)]
                                               (let [a (map< identity a)]
                                                 (let [a (map< identity a)]
                                                   (let [a (map< identity a)]
                                                     a))))))))))))))))))

      :comp-partial (comp
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
                     (partial map< identity))
      
      }

  )









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

(let [leak (last (s/split (.-href js/location) #"#"))
      nav (s/join "" (map (fn [k] (str " <a href=\"#" k "\">" k "</a> ")) (map name (keys routes))))]
  (set! (.-innerHTML (.getElementById js/document "nav"))
        nav)
  
  (if-let [f ((keyword leak) routes)] 
    (do (set! (.-innerHTML (.getElementById js/document "leaky")) leak)
        (doit f))
    (set! (.-innerHTML (.getElementById js/document "leaky") ) "no operation for that route")
    ))
