// Compiled by ClojureScript 1.10.339 {}
goog.provide('koompi.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('koompi.components.navbar');
goog.require('koompi.components.banner');
goog.require('koompi.components.beautiful');
goog.require('koompi.components.screen');
goog.require('koompi.components.performance');
goog.require('koompi.components.battery');
goog.require('koompi.components.feature');
goog.require('koompi.components.footer');
goog.require('koompi.components.order');
goog.require('koompi.components.privacy');
goog.require('koompi.components.about_us');
goog.require('koompi.components.koompi_press_release');
koompi.core.home_page = (function koompi$core$home_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.banner.banner], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.beautiful.beautiful], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.screen.screen], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.performance.performance], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.battery.battery], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.footer.footer], null)], null);
});
koompi.core.feature_page = (function koompi$core$feature_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.feature.feature], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.footer.footer], null)], null);
});
koompi.core.order_page = (function koompi$core$order_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.order.order], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.footer.footer], null)], null);
});
koompi.core.koompi_press_release = (function koompi$core$koompi_press_release(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.koompi_press_release.pressRelease], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.footer.footer], null)], null);
});
koompi.core.privacy = (function koompi$core$privacy(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.privacy.koompi_privacy], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.footer.footer], null)], null);
});
koompi.core.about = (function koompi$core$about(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.about_us.about_us], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.components.footer.footer], null)], null);
});
if((typeof koompi !== 'undefined') && (typeof koompi.core !== 'undefined') && (typeof koompi.core.page !== 'undefined')){
} else {
koompi.core.page = reagent.core.atom.call(null,new cljs.core.Var(function(){return koompi.core.home_page;},new cljs.core.Symbol("koompi.core","home-page","koompi.core/home-page",-1275683493,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.home_page)?koompi.core.home_page.cljs$lang$test:null)])));
}
koompi.core.current_page = (function koompi$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,koompi.core.page)], null)], null);
});
var action__28294__auto___28581 = (function (params__28295__auto__){
if(cljs.core.map_QMARK_.call(null,params__28295__auto__)){
var map__28576 = params__28295__auto__;
var map__28576__$1 = ((((!((map__28576 == null)))?(((((map__28576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28576):map__28576);
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.home_page;},new cljs.core.Symbol("koompi.core","home-page","koompi.core/home-page",-1275683493,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.home_page)?koompi.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28295__auto__)){
var vec__28578 = params__28295__auto__;
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.home_page;},new cljs.core.Symbol("koompi.core","home-page","koompi.core/home-page",-1275683493,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.home_page)?koompi.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__28294__auto___28581);

var action__28294__auto___28587 = (function (params__28295__auto__){
if(cljs.core.map_QMARK_.call(null,params__28295__auto__)){
var map__28582 = params__28295__auto__;
var map__28582__$1 = ((((!((map__28582 == null)))?(((((map__28582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28582):map__28582);
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.feature_page;},new cljs.core.Symbol("koompi.core","feature-page","koompi.core/feature-page",-650865120,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"feature-page","feature-page",1401766942,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",19,1,36,36,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.feature_page)?koompi.core.feature_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28295__auto__)){
var vec__28584 = params__28295__auto__;
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.feature_page;},new cljs.core.Symbol("koompi.core","feature-page","koompi.core/feature-page",-650865120,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"feature-page","feature-page",1401766942,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",19,1,36,36,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.feature_page)?koompi.core.feature_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/feature",action__28294__auto___28587);

var action__28294__auto___28593 = (function (params__28295__auto__){
if(cljs.core.map_QMARK_.call(null,params__28295__auto__)){
var map__28588 = params__28295__auto__;
var map__28588__$1 = ((((!((map__28588 == null)))?(((((map__28588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28588):map__28588);
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.order_page;},new cljs.core.Symbol("koompi.core","order-page","koompi.core/order-page",-1427765037,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"order-page","order-page",612293345,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.order_page)?koompi.core.order_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28295__auto__)){
var vec__28590 = params__28295__auto__;
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.order_page;},new cljs.core.Symbol("koompi.core","order-page","koompi.core/order-page",-1427765037,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"order-page","order-page",612293345,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",17,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.order_page)?koompi.core.order_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/order",action__28294__auto___28593);

var action__28294__auto___28599 = (function (params__28295__auto__){
if(cljs.core.map_QMARK_.call(null,params__28295__auto__)){
var map__28594 = params__28295__auto__;
var map__28594__$1 = ((((!((map__28594 == null)))?(((((map__28594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28594):map__28594);
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.koompi_press_release;},new cljs.core.Symbol("koompi.core","koompi-press-release","koompi.core/koompi-press-release",2013351944,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"koompi-press-release","koompi-press-release",-157800930,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",27,1,48,48,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.koompi_press_release)?koompi.core.koompi_press_release.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28295__auto__)){
var vec__28596 = params__28295__auto__;
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.koompi_press_release;},new cljs.core.Symbol("koompi.core","koompi-press-release","koompi.core/koompi-press-release",2013351944,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"koompi-press-release","koompi-press-release",-157800930,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",27,1,48,48,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.koompi_press_release)?koompi.core.koompi_press_release.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/koompi-press-release",action__28294__auto___28599);

var action__28294__auto___28605 = (function (params__28295__auto__){
if(cljs.core.map_QMARK_.call(null,params__28295__auto__)){
var map__28600 = params__28295__auto__;
var map__28600__$1 = ((((!((map__28600 == null)))?(((((map__28600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28600):map__28600);
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.privacy;},new cljs.core.Symbol("koompi.core","privacy","koompi.core/privacy",142219022,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"privacy","privacy",-2099136144,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",14,1,54,54,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.privacy)?koompi.core.privacy.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28295__auto__)){
var vec__28602 = params__28295__auto__;
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.privacy;},new cljs.core.Symbol("koompi.core","privacy","koompi.core/privacy",142219022,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"privacy","privacy",-2099136144,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",14,1,54,54,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.privacy)?koompi.core.privacy.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/privacy",action__28294__auto___28605);

var action__28294__auto___28611 = (function (params__28295__auto__){
if(cljs.core.map_QMARK_.call(null,params__28295__auto__)){
var map__28606 = params__28295__auto__;
var map__28606__$1 = ((((!((map__28606 == null)))?(((((map__28606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28606):map__28606);
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.about;},new cljs.core.Symbol("koompi.core","about","koompi.core/about",769142932,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"about","about",-1230543226,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",12,1,60,60,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.about)?koompi.core.about.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28295__auto__)){
var vec__28608 = params__28295__auto__;
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.about;},new cljs.core.Symbol("koompi.core","about","koompi.core/about",769142932,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"about","about",-1230543226,null),"/home/koompi/projects/koompi-v4/src/cljs/koompi/core.cljs",12,1,60,60,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.about)?koompi.core.about.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about-us",action__28294__auto___28611);

koompi.core.mount_root = (function koompi$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [koompi.core.current_page], null),document.getElementById("app"));
});
koompi.core.init_BANG_ = (function koompi$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return koompi.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1551349708797
