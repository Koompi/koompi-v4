(ns koompi.components.about-us
  (:require [koompi.states.members :as state]))

(defn about-us []
  [:div
   [:div.backgroundAbout
    [:div.ui.container
     [:div {:class "ui divided grid"}
      [:div.row
       [:div.column {:class "aboutPadding"}
        [:h1 "About Us"]
        [:p "Koompi is a practical, affordable and effective entry level laptop. It can perform daily tasks for working and schooling. We customized our own operating system called KramaOS, based on well-known open source Linux. Both philosophy and design to fit specifically with Koompi’s hardware. "]
        [:p "Our mission is to build and provide an affordable and high performance tools to the young generation of ASEAN region and quite possibly the bottom of the pyramid population. "]
        [:p "We create better everyday user experience to engage more people into computer and digital. It’s is not about the laptop that we sell, it’s about building next generation of engineers, problem solvers and discoverers."]]]]]]
   [:div.ui.container
    [:h1.memberTitle "Team Members"]
    [:div {:class "ui grid"}
     [:div {:class "doubling five column row"}

      (map (fn [mem]
             [:div.column {:key (:id mem)}
              [:div
               [:center
                [:img {:src (:photo mem) :class "ui fluid image teamImage"}]
                [:h3.memberName (:name mem)]
                [:p.memberPosition (:position mem)]]]])
           (sort-by :id (vals @state/members)))]]]])