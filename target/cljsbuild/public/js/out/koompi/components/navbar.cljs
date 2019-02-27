(ns koompi.components.navbar
  (:require [reagent.core :as r :refer [atom]]))

(def menu (r/atom {:menu true}))

(defn menuToggle []
  (swap! menu assoc :menu (not (get-in @menu [:menu]))))

(defn menuToggleIcon []
  (if (get-in @menu [:menu])
    [:div.menu.right
     [:a {:class "item navbarTop menuFadeIn" :href "/feature"}  "Feature"]
     [:a {:class "item navbarTop menuFadeIn" :href "/about-us"}  "About"]
    ;  [:a {:class "item navbarTop menuFadeIn" :href "http://localhost:3449/"} "KRAMAOS"]
    ;  [:a {:class "item navbarTop menuFadeIn" :href "/koompi-press-release"} "Press Release"]
     [:div.item [:i {:class "fas fa-times btnAnimationClose" :on-click #(menuToggle)}]]]
    [:div.menu.right
     [:div.item [:i {:class "fas fa-bars btnAnimation" :on-click #(menuToggle)}]]]))

(defn navbar []
  (let [menu (if (get-in @menu [:menu]) "navShow item navbarTop" "navHidden")]
    [:div {:class "ui secondary  menu"}
     [:div.ui.container
      [:center
       [:a {:href "/"}
        [:img.mobile.hidden {:src "img/koompi-logo-w-01.svg" :height "35px"}]
        [:img.mobile.only {:src "img/koompi-logo-w-02.svg" :height "35px"}]]]
      (menuToggleIcon)]]))

