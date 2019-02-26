(ns koompi.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [koompi.components.navbar :refer [navbar]]
            [koompi.components.banner :refer [banner]]
            [koompi.components.beautiful :refer [beautiful]]
            [koompi.components.screen :refer [screen]]
            [koompi.components.performance :refer [performance]]
            [koompi.components.battery :refer [battery]]
            [koompi.components.feature :refer [feature]]
            [koompi.components.footer :refer [footer]]
            [koompi.components.order :refer [order]]
            [koompi.components.privacy :refer [koompi-privacy]]
            [koompi.components.about-us :refer [about-us]]
            [koompi.components.koompi-press-release :refer [pressRelease]]

            ; Backend
))

;; -------------------------
;; Views


(defn home-page []
  [:div
  ;  [:div.pressRelease "SAN Vuthy"]
   [navbar]
   [banner]
   [beautiful]
   [screen]
   [performance]
   [battery]
   [footer]])

(defn feature-page []
  [:div
   [navbar]
   [feature]
   [footer]])

(defn order-page []
  [:div
   [navbar]
   [order]
   [footer]])

(defn koompi-press-release []
  [:div
   [navbar]
   [pressRelease]
   [footer]])

(defn privacy []
  [:div
   [navbar]
   [koompi-privacy]
   [footer]])

(defn about []
  [:div
   [navbar]
   [about-us]
   [footer]])

;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div [@page]])

(secretary/defroute "/" []
  (reset! page #'home-page))

(secretary/defroute "/feature" []
  (reset! page #'feature-page))

(secretary/defroute "/order" []
  (reset! page #'order-page))

(secretary/defroute "/koompi-press-release" []
  (reset! page #'koompi-press-release))

(secretary/defroute "/privacy" []
  (reset! page #'privacy))

(secretary/defroute "/about-us" []
  (reset! page #'about))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
