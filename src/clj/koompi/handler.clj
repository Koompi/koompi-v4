(ns koompi.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [koompi.middleware :refer [wrap-middleware]]
            [config.core :refer [env]]
            [ring.util.response :as response]
            [clojure.data.json :as json]))

(def mount-target
  [:div#app
      ; [:h3 "ClojureScript has not been compiled!"]
      ; [:p "please run "
      ;  [:b "lein figwheel"]
      ;  " in order to start the compiler"]
   [:div.loadingBack
    [:img.koompiLogoAnimation {:src "/img/koompi-logo-w-02.svg" :height "100px"}]]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:title "Koompi | Our mission is build and provide tools for the next generation of engineers, problem solvers and discoverers."]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:meta {:name "author"
           :content "koompi"}]
        ; Twitter
   [:meta {:content "summary_large_image", :name "twitter:card"}]
   [:meta {:content "https://koompi.com/", :name "twitter:site"}]
   [:meta {:content "@koompi", :name "twitter:creator"}]
   [:meta
    {:content
     "Koompi | Our mission is build and provide tools for the next generation of engineers, problem solvers and discoverers. "
     :name "twitter:title"}]
   [:meta
    {:content
     "Koompi, the sleek and lightweight next generation tool offers an experience that’s next to none, combining modest hardware with powerful open-source software. A multi-purpose enabler, Koompi seeks to empower Cambodian youth as the creators and innovators of tomorrow. A packaged functional environment that lets the user focus on the challenges and not on the tools. Powerful yet easy and light enough to carry almost anywhere."
     :name "twitter:description"}]
   [:meta {:content "img/koompi-banner-1.png", :name "twitter:image"}]
        ; Facebook
   [:meta {:content "img/koompi-banner-1.png", :property "og:image"}]
   [:meta {:content "https://koompi.com/", :property "og:url"}]
   [:meta
    {:content
     "Koompi | Our mission is build and provide tools for the next generation of engineers, problem solvers and discoverers."
     :property "og:title"}]
   [:meta
    {:content
     "Koompi, the sleek and lightweight next generation tool offers an experience that’s next to none, combining modest hardware with powerful open-source software. A multi-purpose enabler, Koompi seeks to empower Cambodian youth as the creators and innovators of tomorrow. A packaged functional environment that lets the user focus on the challenges and not on the tools. Powerful yet easy and light enough to carry almost anywhere."
     :property "og:description"}]

   [:link {:rel "icon" :type "image/png" :href "img/koompi-fav-gray.png"}]
   [:meta {:name "description"
           :content "Koompi, the sleek and lightweight next generation tool offers an experience that’s next to none, combining modest hardware with powerful open-source software. A multi-purpose enabler, Koompi seeks to empower Cambodian youth as the creators and innovators of tomorrow. A packaged functional environment that lets the user focus on the challenges and not on the tools. Powerful yet easy and light enough to carry almost anywhere."}]
   [:meta {:name "keywords"
           :content "computer laptop price in cambodia,beautiful laptop,performance laptop, external hard disk in cambodia,next generation laptop, computer laptop price, khmer online shop, sell computer in cambodia, khmer shop,computer price in cambodia,sell computer in phnom penh, computer second hand shop in cambodia, koompi laptop phnom penh, koompi laptop, koompi computer shop, khmer laptop, laptop price in phnom penh, laptop shopping, sell laptop in cambodia, koompi shop in phnom penh, laptop shop in cambodia, shop sell computer in phnom penh, computer shop in cambodia phnom penh, computer cambodia, laptop computers"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))
   (include-css (if (env :dev) "/kpcss/style.css" "/css/site.min.css"))
   (include-css (if (env :dev) "https://use.fontawesome.com/releases/v5.7.2/css/all.css" "/css/site.min.css"))
   (include-css (if (env :dev) "/kpcss/semantic.min.css" "/css/site.min.css"))
   (include-css (if (env :dev) "https://use.fontawesome.com/releases/v5.3.1/css/all.css" "/css/site.min.css"))
   (include-css (if (env :dev) "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" "/css/site.min.css"))
   (include-js "/js/index.js")
;    Google Analize
   [:script
    {:src
     "https://www.googletagmanager.com/gtag/js?id=UA-121852068-1"}]])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    mount-target
    (include-js "/js/app.js")]))

(defroutes routes
  (GET "/" [] (loading-page))
  (GET "/feature" [] (loading-page))
  (GET "/order" [] (loading-page))
  (GET "/koompi-press-release" [] (loading-page))
  (GET "/privacy" [] (loading-page))
  (GET "/contact-us" [] (loading-page))
  (GET "/about-us" [] (loading-page))
  ; (GET "/admin/data" [] (loading-page))

  (resources "/")
  (not-found "Not Found"))

(def app (wrap-middleware #'routes))
