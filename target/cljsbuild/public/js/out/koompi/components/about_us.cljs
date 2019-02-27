(ns koompi.components.about-us
  (:require [koompi.states.members :as state]))

(defn about-us []
  [:div
   [:div.backgroundAbout
    [:div.ui.container
     [:div {:class "ui divided grid"}
      [:div.row
       [:div.column {:class "aboutPadding"}
        [:h2 "Story"]
        [:p "Begin with an enthusiastic mastermind creator behind the KOOMPI. We come to think that laptop is the bridge to new skills and knowledge. Inspired by គម្ពីរ known as  BOOK OF KNOWLEDGE . KOOMPI also want to be a book full of knowledge to everyone too. So that way. WE ARE BORN."]
        [:h2 "About Us"]
        [:p "KOOMPI is a practical, affordable and effective entry level laptop. High-end perform daily tasks for working and schooling. Create with a customized operating system by our own called, KramaOS based on well-known open source Linux. Both philosophy and design fit specifically with KOOMPI’s hardware."]
        [:p "Generate better daily users experience to engage more people into computing and digital.  Because it here to create the functional environment to let user focus on challenge not a tool itself."]]]]]]
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