(ns koompi.components.performance)

(defn performance []
  [:div.performanceBack
   [:div
    [:div {:class "ui stackable two column grid"}
     [:div {:class "row removeShadow"}
      [:div {:class "six wide column performanceImage"}
       [:img {:src "img/koompi-performance.png" :heigh "400px" :class "mobile hidden"}]
       [:img {:src "img/koompi-performance1.png" :heigh "400px" :class "mobile only"}]]
      [:div {:class "eight wide column"}
       [:div.performancePadding
        [:h5 "Unprecedented Performance"]
        ; [:p "Unprecedented performance"]
        [:p "
                        KOOMPI, the sleek and lightweight next generation tool offers an experience that’s next to none, 
                        combining modest hardware with powerful open-source software. A multi-purpose enabler, 
                        Koompi seeks to empower Cambodian youth as the creators and innovators of tomorrow. 
                        A packaged functional environment that lets the user focus on the challenges and not on the tools. 
                        Powerful yet easy and light enough to carry almost anywhere."]
        ; [:h2.kramaOSPerformance "KOSMOS/KramaOS"]
        [:div {:class "ui two column divided grid"}
         [:div.row.performanceRemoveMargin
          [:div.column
           [:div.performanceTitle "Intel Celeron CPU"
            [:h2 "N4100"]]]
          [:div.column
           [:div.performanceTitle "Boost to"
            [:h2 "2.4" [:span.koompiSpeedMB "GHz"]]]]
          [:div.column
           [:div.performanceTitle "M.2 SATA3 SSD"
            [:h2 "128" [:span.koompiSpeedMB "GB"] " | 256" [:span.koompiSpeedMB "GB"]]]]
          [:div.column
           [:div.performanceTitle "Speed Read | Write"
            [:h2 "537 " [:span.koompiSpeedMB "MB/s"] " | 439 " [:span.koompiSpeedMB "MB/s"]]]]
          [:div.column
           [:div.performanceTitle "RAM DDR4"
            [:h2 "8" [:span.koompiSpeedMB "GB"]]]]
          [:div.column
           [:div.performanceTitle "USB-C Port"
            [:h2 "10" [:span.koompiSpeedMB "Gbps"]]]]]]]]]]]])