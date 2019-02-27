(ns koompi.components.battery)

(defn battery []
  ; [:div
  ;  [:div.ui.container
  ;   [:div.containerBattery
  ;    [:center
  ;     [:p.smallTitle "Battery"]
  ;     [:h2.fontWidth "Faster Charging, Longer living"]
  ;     [:p.websiteContent "We have designed the beautiful ultra thin of battery that last for 7-hour with special high-capacity as 5000mAh."]]
  ;    [:center
  ;     [:div {:class "ui vertically divided grid beautyDetail"}
  ;      [:div {:class "two column row batterPadding"}
  ;       [:div.column
  ;        [:h3.beautyDetailDesc "5000mAH"]
  ;        [:h5.beautyDetailTitle "Li-polymer battery"]]
  ;       [:div.column
  ;        [:h3.beautyDetailDesc "up to 7h"]
  ;        [:h5.beautyDetailTitle "Battery life"]]]]]]]
  ;  [:img {:src "img/koompi-battery.png" :class "imageBattery"}]])

  [:div
   [:div.ui.container
    [:div.beautyPadding
     [:div {:class "ui vertically divided grid"}
      [:div {:class "ui stackable two column grid"}
       [:div {:class "column controlColor"}
        [:h4.smallTitle "BATTERY"]
        [:h2.fontWidth "Faster Charging, Longer living"]
        [:p.websiteContent "We have designed the beautiful ultra thin of battery that last for 7-hour with special high-capacity as 5000mAh."]
        [:div {:class "ui grid beautyDetail"}
         [:div {:class "two column row"}
          [:div.column
           [:h5.beautyDetailTitle "Li-polymer battery"]
           [:h3.beautyDetailDesc "5000mAH"]]
          [:div.column
           [:h5.beautyDetailTitle "Battery life"]
           [:h3.beautyDetailDesc "Up to 7h"]]]]]
         [:div {:class  "column"}
          [:img {:src "img/koompi-battery.png" :class "koompiBattery"}]]
       ]]]]])