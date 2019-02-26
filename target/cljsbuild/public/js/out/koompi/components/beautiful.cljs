(ns koompi.components.beautiful)

(defn beautiful []
  [:div
   [:div.ui.container
    [:div.beautyPadding
     [:div {:class "ui vertically divided grid"}
      [:div {:class "ui stackable two column grid"}
       [:div {:class "column controlColor"}
        [:h4.smallTitle "Shapeliness"]
        [:h2.fontWidth "The 13.3-inch laptop with " [:br] " a Full HD display"]
        [:p.websiteContent "Sleek and lightweight combining modest hardware with powerful open-source software."]
        [:div {:class "ui grid beautyDetail"}
         [:div {:class "two column row"}
          [:div.column
           [:h5.beautyDetailTitle "Thin"]
           [:h3.beautyDetailDesc "13.5 " [:span.tourDetailSize " mm"]]]
          [:div.column
           [:h5.beautyDetailTitle "Light"]
           [:h3.beautyDetailDesc "1.3 " [:span.tourDetailSize " kgs"]]]
          [:div.column
           [:h5.beautyDetailTitle "Compact design"]
           [:h3.beautyDetailDesc (str "13.3\" ") [:span.tourDetailSize " size"]]]
          [:div.column
           [:h5.beautyDetailTitle "Slim"]
           [:h3.beautyDetailDesc (str "13.5 ") [:span.tourDetailSize "mm size"]]]]]]
       [:div {:class  "column"}
        [:img {:src "img/koompi-beauty-1.jpg" :class "koompiBeautyImg"}]]]]]]
   [:div.backgroundKoompiGallery
    [:img {:src "img/Presentation-Price.jpg" :class "koompi-gallery"}]]])