(ns koompi.components.feature)

(defn feature []
  [:div
   [:div.backgroundColorBanner
    [:div.featureBanner
     [:div.featureKoompi.mobile.hidden
      [:img {:src "img/feature-koompi-banner1.png" :class "bannerImageFeature"}]
      [:div.featureBannerContent
       [:h2   "Everything You Need " [:br] " Available Here"]
       [:p "KOOMPI handpicked software for everyday computing,  net browsing, " [:br] " office suites   
                for productivity, entertainment and more. We believe " [:br] " that the computer should be 
                simple and free; free in terms of freedom. " [:br] " This is a tool which helps the user 
                achieve more and learn more."]
       [:p [:i {:class "fas fa-angle-right featureIcon"}] [:i {:class "fas fa-angle-right featureIcon"}] [:a {:href "https://goo.gl/jHSZRL" :target "_blank"} "Learn More"]]]]
     [:div.mobile.only.mobileFeature
      [:h2   "Everything You Need " [:br] " Available Here"]
      [:p "KOOMPI handpicked software for everyday computing,  net browsing, " [:br] " office suites   
                for productivity, entertainment and more. We believe " [:br] " that the computer should be 
                simple and free; free in terms of freedom. " [:br] " This is a tool which helps the user 
                achieve more and learn more."]
                [:p [:i {:class "fas fa-angle-right featureIcon"}] [:i {:class "fas fa-angle-right featureIcon"}] [:a.linkColor {:href "https://goo.gl/jHSZRL" :target "_blank"} "Learn More"]]]]]
   [:div.ui.container.containerFeature
    [:div {:class "ui stackable divided grid beautyDetail"}
     [:div {:class "two column row feature-padding"}
      [:div.column.feature-padding-text
       [:img {:src "img/Apps/icons/New-Office.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Office Applications"]
       [:p "KOOMPI come with pre-installed LibreOffice, which is the open source office suite developed by The Document Foundation. Available in 115 languages, the suite comprises program for work processing, spreadsheets, slideshows, diagram and drawings, working with databases, and composing mathematical formulae."]]
      [:div.column.mobile.only
       [:center [:img {:src "img/Apps/Office.jpg" :class "ui fluid image"}]]]
      [:div.column.mobile.hidden
       [:center [:img {:src "img/Apps/Office.jpg" :class "ui fluid image"}]]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.mobile.hidden
       [:img {:src "img/Apps/App-Store.jpg" :class "ui fluid image"}]]

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
       [:img {:src "img/Apps/icons/firefox.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Browser"]
       [:p "A powerful web browser developed by Mozilla Foundation and its subsidiary,  Mozilla Corporation, is a free and open source that available for variety of OS. Already pre-installed with KOOMPI to support for better users experience and familiar friendly approach for the general use."]]
      [:div.column
       [:center [:img {:src "img/Apps/Firefox.jpg" :class "ui fluid image"}]]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.mobile.hidden
       [:center [:img {:src "img/Apps/VLC.jpg" :class "ui fluid image"}]]]

      [:div.column.feature-padding-text-right
       [:img {:src "img/video-player.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Video Player"]
       [:p "Both powerful video player Gnome MPV and VLC are available with Koompi 
                                    pre-installed. They are more than just an alternative video player since the 
                                    internet radio streams, video streams, apply various audio and video filters, 
                                    quality adjustment, framerate, color management and frame timing."]]
      [:div.column.mobile.only
       [:img {:src "img/Apps/VLC.jpg" :class "ui fluid image"}]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.feature-padding-text
       [:img {:src "img/Apps/icons/Krita.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Krita"]
       [:p "Krita is under open source software license and offers many features comparable to commercial solution. Krita has a lot of cool features that assist your whole processing of painting. With an intuitive user interface, you can customize your own specific workflow. KOOMPI seeks for a helping tools that can guide the user to freely create anything that they want."]]
      [:div.column
       [:img {:src "img/Apps/Krita.jpg" :class "ui fluid image"}]]]

     [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.mobile.hidden
       [:center [:img {:src "img/Apps/VsCode.jpg" :class "ui fluid image"}]]]

      [:div.column.feature-padding-text-right
       [:img {:src "img/koompi-visual-icon.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Visual Studio Code"]
       [:p "A source code editor with intelligent code completion, snippets, 
                                syntax highlighting, debugging and Git control that developed by Microsoft 
                                re available in Koompi."]]
      [:div.column.mobile.only
       [:center [:img {:src "img/Apps/VsCode.jpg" :class "ui fluid image"}]]]]

    [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.feature-padding-text
      [:img {:src "img/Apps/icons/Popcorn_Time.png" :class "smallFeatureImg"}]
      [:p.contentTitle "Popcorn Time"]
      [:p "Popcorn Time is a multi-platform, free software client that includes an integrated media player. A newly application feature in KOOMPI pre-installed to satisfied entertainment needed for all users."]]
      [:div.column
      [:img {:src "img/Apps/PopCornTime.jpg" :class "ui fluid image"}]]]

    [:div {:class "two column row feature-padding feature-margin"}
      [:div.column.mobile.hidden
       [:center [:img {:src "img/Apps/Office365.jpg" :class "ui fluid image"}]]]

      [:div.column.feature-padding-text-right
       [:img {:src "img/Apps/icons/microsoft-365.png" :class "smallFeatureImg"}]
       [:p.contentTitle "Office 365"]
       [:p "KOOMPI come along with the online MS office suite for desktop, evernote client and other. Accessible to current version desktop application of MS. This feature aim to generate better daily users experience for computing and digital."]]
      [:div.column.mobile.only
       [:center [:img {:src "img/Apps/Office365.jpg" :class "ui fluid image"}]]]]
       ]]])