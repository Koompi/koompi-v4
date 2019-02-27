(ns koompi.components.footer)

(defn footer []
  [:div.footerBack
   [:center
    [:a {:href "http://smallworldcambodia.com"} [:img {:src "img/smallworld-logo.png" :class "smallworldLogo"}]]
    [:p "Copyright © 2018 Koompi. All rights reserved"]
    [:p.brainchild "A brainchild of SmallWorld Venture"]
    [:p.privacy [:a {:href "/privacy"} "Privacy "]
     [:a {:href "/feature"} " Feature"]
     [:a {:href "/about-us"} " About Us"]]
    [:a {:href "https://www.facebook.com/koompi/" :target "_blank" :data-tooltip "Follow us on Facebook"} [:i {:class "fab fa-facebook-f"}]]
    [:a {:href "https://t.me/koompi" :target "_blank" :data-tooltip "Follow us on Telegram"} [:i {:class "fab fa-telegram-plane socailMedia"}]]
    [:a {:href "https://twitter.com/koompi_official" :target "_blank" :data-tooltip "Follow us on Twitter"} [:i {:class "fab fa-twitter socailMedia"}]]
    [:a {:href " https://medium.com/@koompi" :target "_blank" :data-tooltip "Follow us on Medium"} [:i {:class "fab fa-medium-m socailMedia"}]]]])