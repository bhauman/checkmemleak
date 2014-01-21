(defproject checking-safari-leak "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "checking-safari-leak"
              :source-paths ["src"]
              :compiler {
                :output-to "checking_safari_leak.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
