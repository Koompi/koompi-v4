(ns koompi.components.screen)

(defn screen []
  ; [:div.ui.container
  ;  [:div.containerScreen
  ;   [:center
  ;    [:p.smallTitle "Screen"]
  ;    [:h2.fontWidth "FHD IPS Panel with Anti-glare glasses"]
  ;   ;  [:a {:href "/order"} [:i {:class "fas fa-angle-right"}] " Buy now"]
  ;    [:p.websiteContent "Koompi works out-of-the-box with handpicked software that is needed in everyday computing." [:br] [:a {:href "/feature"} "Check out"] " ourfeatures for more details."]]
  ;   [:div {:class "ui vertically divided grid beautyDetail"}
  ;    [:div {:class "four column row"}
  ;     [:div {:class "eight wide mobile eight wide tablet four wide computer column"}
  ;      [:h3.beautyDetailDesc (str "13.3\" ")]
  ;      [:h5.beautyDetailTitle "IPS display"]]
  ;     [:div {:class "eight wide mobile eight wide tablet four wide computer column"}
  ;      [:h3.beautyDetailDesc "16 : 9"]
  ;      [:h5.beautyDetailTitle "Widescreen"]]
  ;     [:div {:class "eight wide mobile eight wide tablet four wide computer column"}
  ;      [:h3.beautyDetailDesc "1920 x 1080"]
  ;      [:h5.beautyDetailTitle "FHD Resolution"]]
  ;     [:div {:class "eight wide mobile eight wide tablet four wide computer column"}
  ;      [:h3.beautyDetailDesc "73.44%"]
  ;      [:h5.beautyDetailTitle "Screen to body ratio"]]]]]])

  [:div
   [:div.ui.container
    [:div.beautyPadding
     [:div {:class "ui vertically divided grid"}
      [:div {:class "ui stackable two column grid"}
       [:div {:class "column controlColor"}
        [:h4.smallTitle "Screen"]
        [:h2.fontWidth "FHD IPS Panel with Anti-glare Glasses"]
        [:p.websiteContent "KOOMPI works out-of-the-box with handpicked software that is needed in everyday computing. Check out ourfeatures for more details."]
        [:div {:class "ui grid beautyDetail"}
         [:div {:class "two column row"}
          [:div.column
           [:h5.beautyDetailTitle "IPS display"]
           [:h3.beautyDetailDesc "13.3"]]
          [:div.column
           [:h5.beautyDetailTitle "Widescreen"]
           [:h3.beautyDetailDesc "16 : 9"]]
          [:div.column
           [:h5.beautyDetailTitle "FHD Resolution"]
           [:h3.beautyDetailDesc (str "1920 x 1080 ")]]
          [:div.column
           [:h5.beautyDetailTitle "Screen to body ratio"]
           [:h3.beautyDetailDesc (str "73.44%")]]]]]
         [:div {:class  "column"}
          [:img {:src "img/screen.png" :class "koompiBeautyImg"}]]
       ]]]]])