(ns koompi.components.order
  (:require
   [reagent.core :as r]
   [ajax.core :refer [GET POST]]
   [clojure.tools.reader.edn :as edn]
   [goog.string :as gstring]
   [goog.string.format]
   [cljs.pprint :refer [cl-format]]
   [cljs.pprint :as pprint]
   [koompi.reagent.validation :as v]
   [koompi.sendMail.sendMail :refer [order_koompi send_mail showAler showAler]]
   [koompi.states.state :refer [atom-order-koompi
                                atom-fname
                                atom-lname
                                atom-phone-number
                                atom-email
                                atom-order-number
                                atom-province
                                atom-gray-color
                                atom-rose-gold atom-money
                                atom-payment
                                atom-ngos
                                atom-message
                                atom-laptop-color
                                atom-order
                                gray-num-order
                                rose-gold-num-order
                                alertSMS
                                rose-gold
                                grayColor]]))

(defn order []

  (defn order-more-than-one []
    [:div
     [:h3 "Koompi Color*"]

     [:div {:class "two fields"}

      [:div {:class "field"}
       [:input {:type "number"
                :value (cond (> @rose-gold-num-order (int @atom-order-number)) "0"
                             (< @rose-gold-num-order 0) "0"
                             :else @rose-gold-num-order)
                :class "roseGold"
                :on-change #(reset! rose-gold-num-order (-> % .-target .-value))}]]
      [:div {:class "field"}
       [:input {:type "number"
                :readOnly true
                :class "grayColor"
                :value (cond
                         (> @rose-gold-num-order (int @atom-order-number)) "0"
                         (< @rose-gold-num-order 0) "0"
                         :else (if (> (int @atom-order-number) 0) (- (int @atom-order-number) (int @rose-gold-num-order)) "0"))
                :min "0"}]]]

     [:div {:class "three fields"}

      [:div {:class "field"}
       [:label "Total: " @atom-order-number]]

      [:div {:class "field"}
       [:label "Rose Gold Color: " (cond (> @rose-gold-num-order (int @atom-order-number)) "0" (< @rose-gold-num-order 0) "0" :else @rose-gold-num-order)]]

      [:div {:class "field"}
       [:label "Gray Color: " (cond
                                (> @rose-gold-num-order (int @atom-order-number)) "0"
                                (< @rose-gold-num-order 0) "0"
                                :else (if (> (int @atom-order-number) 0) (- (int @atom-order-number) (int @rose-gold-num-order)) "0"))]]]])



  (defn order-only-one []
    [:div
     [:h4 "Which color do you preferred?"]
     [:div {:class "inline fields"}
      [:div {:class "field"}
       [:div {:class "ui radio checkbox"}
        [:input {:type "radio"
                 :name "koompiColor"
                 :checked (= @atom-laptop-color :gray-color)
                 :on-change #(reset! atom-laptop-color :gray-color)}]
        [:label.orderLatopColor "Gray Color"]]]

      [:div {:class "field"}
       [:div {:class "ui radio checkbox"}
        [:input {:type "radio"
                 :name "koompiColor"
                 :checked (= @atom-laptop-color :rose-gold-color)
                 :on-change #(reset! atom-laptop-color  :rose-gold-color)}]
        [:label.orderLatopColor "Rose Gold Color"]]]]])

  ; (defn alertTest []
  ;   (swap! orderAlert assoc :alert true))


  ; (defn koompiModalAlert []
  ;   [:div {:class "ui basic koompiModal"}
  ;    [:div {:class "ui icon header"}
  ;     "Your order, successfully completed"]
  ;    [:div {:class "content"}
  ;     [:p "Thank you so much for your support. Please feel free to check your email to complete the order proccess."]]])

  [:div.ui.container.containerOrder
   [:div.orderPadding




    (if (get-in @alertSMS [:alertsms])
      (cond
        (= (str "Order Successfully Completed") @atom-order-koompi)
        [:div.modalSuccess {:class "animated bounceIn fast"}
         [:div {:class "ui icon header"} "Your order was successfully completed"]
         [:div {:class "content"}
          [:p "Thank you so much for your support. Please check your email to complete the order proccess."]]]
        (= @atom-order-koompi "") ""
        :else [:div {:class "modalError animated bounceIn fast"} "Order failed"]))




    [:center
     [:h2.orderKoompi "Order Koompi" @atom-order-koompi]
     [:p.orderDesc "We are grateful for our partners that believe in our mission."]] [:div {:class "ui negative message OrderKoompiSMS"}
                                                                                      [:div {:class "header"} "Note* All the fields are require"]]

    [:div {:class "ui large form"}
     [:div {:class "two fields"}

      [:div {:class "field"}
       [:label "First Name* "]
       [:input {:type "text"
                :value @atom-fname
                :on-change #(reset! atom-fname (-> % .-target .-value))}]]

      [:div {:class "field"}
       [:label "Last Name* "]
       [:input {:type "text"
                :value @atom-lname
                :on-change #(reset! atom-lname (-> % .-target .-value))}]]]

     [:div {:class "field"}
      [:label "E-mail* "]
      [:input {:type "email"
               :value @atom-email
               :placeholder @atom-email
               :on-change #(reset! atom-email (-> % .-target .-value))}]]

     [:div {:class "two fields"}

      [:div {:class "field"}
       [:label "Phone Number* "]
       [:input {:type "number"
                :value @atom-phone-number
                :on-change #(reset! atom-phone-number (-> % .-target .-value))}]]

      [:div {:class "field"}
       [:label "Province* "]
       [:input {:type "text"
                :value @atom-province
                :on-change #(reset! atom-province (-> % .-target .-value))}]]]

     [:div {:class "field"}
      [:label "Number of laptop*"]
      [:input {:type "number"
               :value @atom-order-number
               :on-change #(reset! atom-order-number (-> % .-target .-value))}]]

     (if (= (int @atom-order-number) 1) (order-only-one) (order-more-than-one)) [:h4 "Payment Option*"]
     [:div {:class "inline fields"}

      ; [:div {:class "field"}
      ;  [:div {:class "ui radio checkbox"}
      ;   [:input {:type "radio"
      ;            :name "payment"
      ;            :checked (= @atom-payment :pi-pay)
      ;            :on-change #(reset! atom-payment :pi-pay)}]
      ;   [:label.orderLatopColor "Pi Pay 15% OFF - $313.65 (Save $55.35)"]]]

      [:div {:class "field"}
       [:div {:class "ui radio checkbox"}
        [:input {:type "radio"
                 :name "payment"
                 :checked (= @atom-payment :cash)
                 :on-change #(reset! atom-payment :cash)}]
        [:label.orderLatopColor "Cash - $339"]]]

      [:div {:class "field"}
       [:div {:class "ui radio checkbox"}
        [:input {:type "radio"
                 :name "payment"
                 :checked (= @atom-payment :special-financing)
                 :on-change #(reset! atom-payment :special-financing)}]
        [:label.orderLatopColor "6 Months of special financing - $369 (0% Interest)"]]]]

      ; [:button {:onClick  (fn []   )} "Fuck you"]

     [:div {:class "field"}
      [:label "What else do you want to advise us?"]
      [:textarea {:rows "5"
                  :value @atom-message
                  :on-change #(reset! atom-message (-> % .-target .-value))}]]
     [:center
      [:div.ui.submit.button.positive  (cond (empty? @atom-fname) {:class "disabled negative"}
                                             (empty? @atom-lname) {:class "disabled negative loading"}
                                             (if (= (v/is-email? @atom-email) false) {:class "disabled negative loading"}) {:class "disabled negative loading"}
                                             (if (v/max-length? @atom-phone-number 8) {:class "disabled negative loading"}) {:class "disabled negative loading"}
                                      ; (empty? @atom-phone-number) {:class "disabled negative loading"}
                                             (empty? @atom-province) {:class "disabled negative loading"}
                                             (empty? @atom-order-number) {:class "disabled negative loading"}
                                             (= @atom-payment "") {:class "disabled negative"}
                                             :else {:on-click #(and (do
                                                                      (order_koompi)
                                                                      (send_mail)
                                                                      (reset! atom-fname "")
                                                                      (reset! atom-lname "")
                                                                      (reset! atom-email "")
                                                                      (reset! atom-phone-number "")
                                                                      (reset! atom-province "")
                                                                      (reset! atom-order-number "")
                                                                      (and (reset! gray-num-order "") (reset! rose-gold-num-order ""))
                                                                      (reset! atom-payment "")
                                                                      (reset! atom-message "")))}) "Submit"]]]]])
