// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38745__delegate = function (x__38729__auto__){
if(cljs.core.truth_(koompi.core.mount_root)){
return cljs.core.apply.call(null,koompi.core.mount_root,x__38729__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("koompi.core/mount-root"),"' is missing"].join(''));
}
};
var G__38745 = function (var_args){
var x__38729__auto__ = null;
if (arguments.length > 0) {
var G__38746__i = 0, G__38746__a = new Array(arguments.length -  0);
while (G__38746__i < G__38746__a.length) {G__38746__a[G__38746__i] = arguments[G__38746__i + 0]; ++G__38746__i;}
  x__38729__auto__ = new cljs.core.IndexedSeq(G__38746__a,0,null);
} 
return G__38745__delegate.call(this,x__38729__auto__);};
G__38745.cljs$lang$maxFixedArity = 0;
G__38745.cljs$lang$applyTo = (function (arglist__38747){
var x__38729__auto__ = cljs.core.seq(arglist__38747);
return G__38745__delegate(x__38729__auto__);
});
G__38745.cljs$core$IFn$_invoke$arity$variadic = G__38745__delegate;
return G__38745;
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

//# sourceMappingURL=connect.js.map?rel=1551586195475
