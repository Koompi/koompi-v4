(ns ^:figwheel-no-load koompi.dev
  (:require
    [koompi.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
