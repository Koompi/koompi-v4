(ns koompi.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [koompi.core-test]))

(doo-tests 'koompi.core-test)
