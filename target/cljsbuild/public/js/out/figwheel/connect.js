// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__48669__delegate = function (x__48648__auto__){
if(cljs.core.truth_(koompi.core.mount_root)){
return cljs.core.apply.call(null,koompi.core.mount_root,x__48648__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("koompi.core/mount-root"),"' is missing"].join(''));
}
};
var G__48669 = function (var_args){
var x__48648__auto__ = null;
if (arguments.length > 0) {
var G__48670__i = 0, G__48670__a = new Array(arguments.length -  0);
while (G__48670__i < G__48670__a.length) {G__48670__a[G__48670__i] = arguments[G__48670__i + 0]; ++G__48670__i;}
  x__48648__auto__ = new cljs.core.IndexedSeq(G__48670__a,0,null);
} 
return G__48669__delegate.call(this,x__48648__auto__);};
G__48669.cljs$lang$maxFixedArity = 0;
G__48669.cljs$lang$applyTo = (function (arglist__48671){
var x__48648__auto__ = cljs.core.seq(arglist__48671);
return G__48669__delegate(x__48648__auto__);
});
G__48669.cljs$core$IFn$_invoke$arity$variadic = G__48669__delegate;
return G__48669;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:6080/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1551156951266
