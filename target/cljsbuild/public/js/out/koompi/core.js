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
koompi.core.page = reagent.core.atom.call(null,new cljs.core.Var(function(){return koompi.core.home_page;},new cljs.core.Symbol("koompi.core","home-page","koompi.core/home-page",-1275683493,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/koompi/projects/koompi/koompi-v4/src/cljs/koompi/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.home_page)?koompi.core.home_page.cljs$lang$test:null)])));
}
koompi.core.current_page = (function koompi$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,koompi.core.page)], null)], null);
});
var action__28293__auto___55614 = (function (params__28294__auto__){
if(cljs.core.map_QMARK_.call(null,params__28294__auto__)){
var map__55609 = params__28294__auto__;
var map__55609__$1 = ((((!((map__55609 == null)))?(((((map__55609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55609):map__55609);
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core.Var(function(){return koompi.core.home_page;},new cljs.core.Symbol("koompi.core","home-page","koompi.core/home-page",-1275683493,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"koompi.core","koompi.core",-1400641539,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/koompi/projects/koompi/koompi-v4/src/cljs/koompi/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(koompi.core.home_page)?koompi.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28294__auto__)){
var vec__55611 = params__28294__auto__;
return cljs.core.reset_BANG_.call(null,koompi.core.page,new cljs.core