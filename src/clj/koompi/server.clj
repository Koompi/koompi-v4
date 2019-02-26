(ns koompi.server
  (:require [koompi.handler :refer [app]]
            [config.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(defn -main [& args]
  (let [port (or (env :port) 6081)]
    (run-jetty app {:port port :join? false})))
