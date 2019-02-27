(ns koompi.components.banner)

(defn banner []
  [:div.bannerPage
   [:div.bannerBackground
    [:div.bannerText
     [:h1.bannerTitle "Koompi Kosmos"]
     [:p.bannerDesc "beautiful, high performance, affordable"]
     [:span.leanMoreBanner [:a {:href "/order"} [:i {:class "fas fa-angle-right"}] " GET KOOMPI"]]
     [:p "KOOMPI is a practical, affordable and effective entry level laptop. It can perform daily tasks for working and schooling. We customized..." [:a {:href "/about-us"} "Read More"]]]]])