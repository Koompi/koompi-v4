(ns koompi.states.members
  (:require [reagent.core :as r]))

(def members (r/atom {:member-04 {:id :member-04
                                  :photo "img/team/vuthy.png"
                                  :name "Vuthy SAN"
                                  :position "Full Stack Developer"}
                      :member-02 {:id :member-02
                                  :photo "img/team/sela.png"
                                  :name "Sela THUL"
                                  :position "Linux Developer"}
                      :member-03 {:id :member-03
                                  :photo "img/team/saing.png"
                                  :name "Saing SAB"
                                  :position "Kernel Developer"}
                      :member-01 {:id :member-01
                                  :photo "img/team/rithy.png"
                                  :name "Rithy THUL"
                                  :position "PR and Partnership"}
                      :member-10 {:id :member-10
                                  :photo "img/team/dara.png"
                                  :name "Chandara VIREAK"
                                  :position "Head of Design"}
                      :member-06 {:id :member-06
                                  :photo "img/team/panha.png"
                                  :name "Panha SOK"
                                  :position "Graphic Designer"}
                      :member-07 {:id :member-07
                                  :photo "img/team/khunthy.png"
                                  :name "Sokunthy CHAN"
                                  :position "Accountant"}
                      :member-30 {:id :member-30
                                  :photo "img/team/sofy.jpg"
                                  :name "Sofy THY"
                                  :position "Marketing Officer"}
                      :member-31 {:id :member-31
                                  :photo "img/team/reaksmie.jpg"
                                  :name "Raksme VEN"
                                  :position "Accountant"}
                      :member-32 {:id :member-31
                                  :photo "img/team/sreysor.jpg"
                                  :name "Sreysor KHEM"
                                  :position "Customer Services"}
                      :member-09 {:id :member-09
                                  :photo "img/team/leap.jpg"
                                  :name " Sreyleap SUN"
                                  :position "Customer service"}
                      :member-05 {:id :member-05
                                  :photo "img/team/panha_you.jpg"
                                  :name "Panha YOU"
                                  :position "Sale & Marketing Manager"}
                      :member-08 {:id :member-08
                                  :photo "img/team/brillaint.jpg"
                                  :name "Brilliant PHAL"
                                  :position "Linux Administator"}}))