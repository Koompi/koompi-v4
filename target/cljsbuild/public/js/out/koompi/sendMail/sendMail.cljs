(ns koompi.sendMail.sendMail
  (:require
   [reagent.core :as r]
   [ajax.core :refer [GET POST]]
   [clojure.tools.reader.edn :as edn]
   [goog.string :as gstring]
   [goog.string.format]
   [cljs.pprint :refer [cl-format]]
   [cljs.pprint :as pprint]
   [koompi.reagent.validation :as v]
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

(defn int-comma [n] (cl-format nil "~:d" n))

(defn showAler []
  (swap! alertSMS assoc :alertsms true))

(defn hideAlert []
  (js/setTimeout #(swap! alertSMS assoc :alertsms false) 7000))

(defn handler [response]
  (do
    (reset! atom-order-koompi (get-in response [:data :message]))
    (showAler)
    (hideAlert)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn order_koompi []
  (POST "https://api.koompi.com/order"
    {:params {:first_name @atom-fname
              :last_name @atom-lname
              :phone_no @atom-phone-number
              :email @atom-email
              :order_amount @atom-order-number
              :province @atom-province
              :gray_color (cond (> @atom-order-number 1) @gray-num-order  :else (if (= @atom-laptop-color :gray-color) "1" "0"))
              :rose_gold_color (cond (> @atom-order-number 1) rose-gold :else (if (= @atom-laptop-color :rose-gold-color) "1" "0"))
              :money_order (if (empty? @atom-money) "null" @atom-money)
              :payment_option @atom-payment
              :organization "None"
              :messages @atom-message}
                ;  :handler (fn [response]
                ;             (js/console.log @order-koompi))
     :handler handler
     :error-handler error-handler
     :response-format :json
     :format :json
     :keywords? true}))

(defn send_mail []
  (POST "https://api.koompi.com/send-mail"
    {:params {:mail-to @atom-email
              :mail-body (str
                          "<!doctype html>
                          <html>
                          
                          <head>
                              <meta name='viewport' content='width=device-width'>
                              <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
                              <link href='https://fonts.googleapis.com/css?family=Quicksand:400,500,700' rel='stylesheet'>
                              <style>
                                  @media only screen and (max-width: 620px) {
                                      table[class=body] h1 {
                                          font-size: 28px !important;
                                          margin-bottom: 10px !important;
                                      }
                          
                                      table[class=body] p,
                                      table[class=body] ul,
                                      table[class=body] ol,
                                      table[class=body] td,
                                      table[class=body] span,
                                      table[class=body] a {
                                          font-size: 16px !important;
                                      }
                          
                                      table[class=body] .wrapper,
                                      table[class=body] .article {
                                          padding: 10px !important;
                                      }
                          
                                      table[class=body] .content {
                                          padding: 0 !important;
                                      }
                          
                                      table[class=body] .container {
                                          padding: 0 !important;
                                          width: 100% !important;
                                      }
                          
                                      table[class=body] .main {
                                          border-left-width: 0 !important;
                                          border-radius: 0 !important;
                                          border-right-width: 0 !important;
                                      }
                          
                                      table[class=body] .btn table {
                                          width: 100% !important;
                                      }
                          
                                      table[class=body] .btn a {
                                          width: 100% !important;
                                      }
                          
                                      table[class=body] .img-responsive {
                                          height: auto !important;
                                          max-width: 100% !important;
                                          width: auto !important;
                                      }
                                  }
                          
                                  @media all {
                                      .ExternalClass {
                                          width: 100%;
                                      }
                          
                                      .ExternalClass,
                                      .ExternalClass p,
                                      .ExternalClass span,
                                      .ExternalClass font,
                                      .ExternalClass td,
                                      .ExternalClass div {
                                          line-height: 100%;
                                      }
                          
                                      .apple-link a {
                                          color: inherit !important;
                                          font-family: inherit !important;
                                          font-size: inherit !important;
                                          font-weight: inherit !important;
                                          line-height: inherit !important;
                                          text-decoration: none !important;
                                      }
                          
                                      .btn-primary table td:hover {
                                          background-color: #34495e !important;
                                      }
                          
                                      .btn-primary a:hover {
                                          background-color: #34495e !important;
                                          border-color: #34495e !important;
                                      }
                                  }
                              </style>
                          </head>
                          
                          <body style='background-color: #f6f6f6; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: Quicksand;'>
                              <table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;'
                                  width='100%' bgcolor='#f6f6f6'>
                                  <tr>
                                      <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'>&nbsp;</td>
                                      <td class='container' style='font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 650px; padding: 10px; width: 650px; Margin: 0 auto;'
                                          width='650' valign='top'>
                                          <div class='content' style='box-sizing: border-box; display: block; Margin: 0 auto; max-width: 650px; padding: 10px;'>
                                              <!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;'>This
                                                  is preheader text. Some clients will show this text as a preview.</span>
                                              <table class='main' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;'
                                                  width='100%'>
                                                  <!-- START MAIN CONTENT AREA -->
                                                  <tr>
                                                      <td class='wrapper' style='font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;'
                                                          valign='top'>
                                                          <table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'
                                                              width='100%'>
                                                              <tr>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;'
                                                                      valign='top'>
                                                                      <h3 style='font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0; Margin-bottom: 10px; color: #333;'>
                                                                          THANKS FOR YOUR PRE-ORDER, <b> " (str @atom-fname " " @atom-lname) "
                                                                          </b> </h3>
                                                                      <p style='font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;'>Below
                                                                          is a summary of your item.</p>
                                                                      <h4 style='color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0; Margin-bottom: 10px;'>YOUR
                                                                          ORDER:</h4>
                                                                      <table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'
                                                                          width='100%'>
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td align='left' style='font-family: sans-serif; font-size: 14px; vertical-align: top;'
                                                                                      valign='top'>
                                                                                      <table border='0' cellpadding='0' cellspacing='0' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; padding: 10px 0px; border-collapse: collapse; border-top: 1px solid #333; border-style: dashed none none none;'
                                                                                          width='100%'>
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'><b>Laptop</b> </td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'><b>Color</b> </td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'><b>Price</b> </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px; padding-top: 5px;'
                                                                                                      valign='top'>KOOMPI X " @atom-order-number
                          "</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px; padding-top: 5px;'
                                                                                                      valign='top'> " (cond (= @atom-laptop-color
                                                                                                                               :gray-color) "Gray" (= @atom-laptop-color
                                                                                                                                                      :rose-gold-color) "Rose Gold " :else (str
                                                                                                                                                                                            grayColor " Gray, " @rose-gold-num-order "
                                                                                                      Rose Gold")) " </td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px; padding-top: 5px;'
                                                                                                      valign='top'>$369.00/pc</td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                          <tbody>
                                                                                              <tr style='border-top: 1px solid #333; border-style: dashed none none none; '>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'>Preferred Payment Method:</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'> " (cond (= @atom-payment
                                                                                                                               :pi-pay) "Pi Pay 15% OFF" (= @atom-payment
                                                                                                                                                            :cash) "Cash - $339 (Save $30)" :else "6
                                                                                                      Months of special financing - $369 (0%
                                                                                                      Interest)") "</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;'
                                                                                                      valign='top'></td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px; padding-top: 5px;'
                                                                                                      valign='top'>Delivery:</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px; padding-top: 5px;'
                                                                                                      valign='top'>From 27 October to 2 November</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;'
                                                                                                      valign='top'></td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                          <tbody>
                                                                                              <tr style='border-top: 1px solid #333; border-style: dashed none none none;'>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'>Your Contact Details:</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'>" @atom-phone-number "</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;'
                                                                                                      valign='top'></td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 5px;'
                                                                                                      valign='top'>Your Email Address:</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 5px;'
                                                                                                      valign='top'>" @atom-email "</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;'
                                                                                                      valign='top'></td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px; padding-top: 5px;'
                                                                                                      valign='top'>Quanity:</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px; padding-top: 5px;'
                                                                                                      valign='top'>" @atom-order-number "</td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;'
                                                                                                      valign='top'></td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                          <tbody>
                                                                                              <tr style='border-top: 1px solid #333; border-style: dashed none none none;'>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px;'
                                                                                                      valign='top'></td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px;'
                                                                                                      valign='top'>Sub total: </td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px;'
                                                                                                      valign='top'>" (str "$") (pprint/cl-format
                                                                                                                                nil "~,2f" (int-comma (def subtotal (* (int
                                                                                                                                                                        369) @atom-order-number)))) "</td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                          <tbody> " (if (= @atom-payment :pi-pay) (do (str " <tr>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                                                      valign='top'></td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                                                      valign='top'>Discount: </td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px; padding-bottom: 20px;'
                                                                                                      valign='top'>$" (pprint/cl-format nil
                                                                                                                                        "~,2f" (int-comma (def discount (* subtotal
                                                                                                                                                                           0.15)))) " </td>
                                                                                              </tr>
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                                      valign='top'></td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px; border-top: 1px solid #333; border-style: dashed none none none;'
                                                                                                      valign='top'>Total: </td>
                                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px; border-top: 1px solid #333; border-style: dashed none none none;'
                                                                                                      valign='top'>$" (pprint/cl-format nil
                                                                                                                                        "~,2f" (int-comma (- subtotal discount))) "</td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                      <table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'
                                                                                          width='100%'>
                                                                                          <tr>
                                                                                              <td class='content-block' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 10px; padding-top: 10px;'
                                                                                                  valign='top'>
                                                                                                  <p class='apple-link'> For payment via PI PAY,
                                                                                                      please scan our QR code below and our team
                                                                                                      will call you soon to assist with the
                                                                                                      payment. </p> <img src='https://drive.google.com/uc?id=1vTQgm5NzS0OtPVb97mF9Q-1qwSGU3NOu'
                                                                                                      height='100px' />
                                                                                              </td>
                                                                                          </tr>
                                                                                      </table> "))) (if (= @atom-payment :cash) (do (str " 
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                                      valign='top'></td>
                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px; border-top: 1px solid #333; border-style: dashed none none none;'
                                                                                      valign='top'>Total: </td>
                                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px; border-top: 1px solid #333; border-style: dashed none none none;'
                                                                                      valign='top'>$" (int-comma (- subtotal 0)) (str
                                                                                                                                  ".00") "</td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'
                                                                          width='100%'>
                                                                          <tr>
                                                                              <td class='content-block' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 10px; padding-top: 10px;'
                                                                                  valign='top'>
                                                                                  <p class='apple-link' style='margin-top:10px; margin-bottom: 0px;'>
                                                                                      Our team will call you soon to procceed with making the
                                                                                      payment. </p>
                                                                              </td>
                                                                          </tr>
                                                                      </table> "))) (if (= @atom-payment :special-financing) (do (str " <tr>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'></td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'>Down Payment: </td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px; padding-bottom: 5px;'
                                                                      valign='top'>$69.00/pc</td>
                                                              </tr>
                                                              <tr>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'></td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'>Interest: </td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px; padding-bottom: 5px;'
                                                                      valign='top'>0%</td>
                                                              </tr>
                                                              <tr>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'></td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'>Payment: </td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px; padding-bottom: 5px;'
                                                                      valign='top'>$50/month</td>
                                                              </tr>
                                                              <tr>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'></td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px;'
                                                                      valign='top'>Term: </td>
                                                                  <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 0px; padding-bottom: 20px;'
                                                                      valign='top'>6 months</td>
                                                              </tr>
                                                              <tbody>
                                                                  <tr>
                                                                      <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px;'
                                                                          valign='top'></td>
                                                                      <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px; border-top: 1px solid #333; border-style: dashed none none none;'
                                                                          valign='top'>Total down payment: </td>
                                                                      <td style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 15px; border-top: 1px solid #333; border-style: dashed none none none;'
                                                                          valign='top'>$" (pprint/cl-format nil "~,2f" (int-comma (*
                                                                                                                                   @atom-order-number (int 69)))) "</td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'
                                                              width='100%'>
                                                              <tr>
                                                                  <td class='content-block' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 10px; padding-top: 10px;'
                                                                      valign='top'>
                                                                      <p class='apple-link'> Our team will call you soon to apply the application
                                                                          for financial loan. </p>
                                                                  </td>
                                                              </tr>
                                                          </table> "))) "
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                                      </td>
                                  </tr>
                              </table>
                              <table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'
                                  width='100%'>
                                  <tr>
                                      <td class='content-block' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 10px; padding-top: 0px;'
                                          valign='top'> <span class='apple-link' style='margin:0px'>For more information about KOOMPI, Please
                                              visit our official website <a href='https://koompi.com/' style='color: #3498db; text-decoration: underline;'>www.koompi.com</a>
                                              or join our telegram community at <a href='https://t.me/koompi' style='color: #3498db; text-decoration: underline;'>https://t.me/koompi</a>
                                              or call us at 086 669 424. </td>
                                  </tr>
                                  <tr>
                                      <td class='content-block powered-by' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 10px; padding-top: 10px;'
                                          valign='top'> Sincerely,<br> <b>KOOMPI Team</b>. </td>
                                  </tr>
                              </table>
                              </td>
                              </tr> <!-- END MAIN CONTENT AREA -->
                              </table> <!-- START FOOTER -->
                              <div class='footer' style='clear: both; Margin-top: 10px; width: 100%;'> </div> <!-- END FOOTER -->
                              <!-- END CENTERED WHITE CONTAINER -->
                              </div>
                              </td>
                              <td style='font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'>&nbsp;</td>
                              </tr>
                              </table>
                          </body>
                          
                          </html>")}
     :response-format :json
     :format :json
     :keywords? true}))

