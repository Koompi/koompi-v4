(ns koompi.components.feature)

(defn feature []
  [:div
   [:div.backgroundColorBanner
    [:div.featureBanner
     [:div.featureKoompi.mobile.hidden
      [:img {:src "img/feature-koompi-banner1.png" :class "bannerImageFeature"}]
      [:div.featureBannerContent
       [:h2   "Everything You Need " [:br] " Available Here"]
       [:p "Koompi handpicked software for everyday computing,  net browsing, " [:br] " office suites   
                for productivity, entertainment and more. We believe " [:br] " that the computer should be 
                simple and free; free in terms of freedom. " [:br] " This is a tool which helps the user 
                achieve more and learn more."]
       [:p [:i {:class "fas fa-angle-right featureIcon"}] [:i {:class "fas fa-angle-right featureIcon"}] [:a {:href "https://goo.gl/jHSZRL" :target "_blank"} "Learn More"]]]]
     [:div.mobile.only.mobileFeature
      [:h2   "Everything You Need " [:br] " Available Here"]
      [:p "Koompi handpicked software for everyday computing,  net browsing, " [:br] " office suites   
                for productivity, entertainment and more. We believe " [:br] " that the computer should be 
                simple and free; free in terms of freedom. " [:br] " This is a tool which helps the user 
                achieve more and learn more."]
                [:p [:i {:class "fas fa-angle-right featureIcon"}] [:i {:class "fas fa-angle-right featureIcon"}] [:a.linkColor {:href "https://goo.gl/jHSZRL" :target "_blank"} "Learn More"]]]]]
   [:div.ui.container
    [:div {:class "ui stackable divided grid beautyDetail"}
     [:div {:class "two column row feature-padding"}
      [:div.column.feature-padding-text
       [:img {:src "img/wps.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Office Applications"]
       [:p "Koompi comes with pre-installed WPS Office Suite, 
                                     which is the open source for office work developed by Kingsoft."]]
      [:div.column.mobile.only
       [:center [:img {:src "img/WPS.png" :class "ui fluid image"}]]]
      [:div.column.mobile.hidden
       [:center [:img {:src "img/WPS.png" :class "ui fluid image"}]]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.mobile.hidden
       [:img {:src "img/App-Store.png" :class "ui fluid image"}]]

      [:div.column.feature-padding-text-right
       [:img {:src "img/store.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Software Center"]
       [:p "Koompi uses GNOME Software utility for easy software installation and updates. 
                                    It is the GNOME front-end to the PackageKit daemon, which itself is a front-end 
                                    to several package management systems."]]
      [:div.column.mobile.only
       [:center [:img {:src "img/App-Store.png" :class "ui fluid image"}]]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.feature-padding-text
       [:img {:src "img/browser-icon.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Browser"]
       [:p "Koompi uses Brave as a default web browser and DuckDuckGo as default search engine.
                                    DuckDuckGo is a search engine which care for your privacy. Chrome and Firefox are 
                                    also pre-installed, in case users prefer them over Brave."]]
      [:div.column
       [:center [:img {:src "img/Browers.png" :class "ui fluid image"}]]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.mobile.hidden
       [:center [:img {:src "img/VLC.png" :class "ui fluid image"}]]]

      [:div.column.feature-padding-text-right
       [:img {:src "img/video-player.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Video Player"]
       [:p "Both powerful video player Gnome MPV and VLC are available with Koompi 
                                    pre-installed. They are more than just an alternative video player since the 
                                    internet radio streams, video streams, apply various audio and video filters, 
                                    quality adjustment, framerate, color management and frame timing."]]
      [:div.column.mobile.only
       [:img {:src "img/VLC.png" :class "ui fluid image"}]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.feature-padding-text
       [:img {:src "img/koompi-gimp-icon.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Gimp"]
       [:p "GIMP is a free and open-source raster graphics editor used for image 
                                retouching and editing, free-form drawing, 
                                converting between different image formats, and more specialized tasks."]]
      [:div.column
       [:img {:src "img/GIMP.png" :class "ui fluid image"}]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.mobile.hidden
       [:center [:img {:src "img/Code.png" :class "ui fluid image"}]]]

      [:div.column.feature-padding-text-right
       [:img {:src "img/koompi-visual-icon.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Visual Studio Code"]
       [:p "A source code editor with intelligent code completion, snippets, 
                                syntax highlighting, debugging and Git control that developed by Microsoft 
                                re available in Koompi."]]
      [:div.column.mobile.only
       [:center [:img {:src "img/Code.png" :class "ui fluid image"}]]]]]]])