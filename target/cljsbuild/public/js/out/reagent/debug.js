// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30993__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30994__i = 0, G__30994__a = new Array(arguments.length -  0);
while (G__30994__i < G__30994__a.length) {G__30994__a[G__30994__i] = arguments[G__30994__i + 0]; ++G__30994__i;}
  args = new cljs.core.IndexedSeq(G__30994__a,0,null);
} 
return G__30993__delegate.call(this,args);};
G__30993.cljs$lang$maxFixedArity = 0;
G__30993.cljs$lang$applyTo = (function (arglist__30995){
var args = cljs.core.seq(arglist__30995);
return G__30993__delegate(args);
});
G__30993.cljs$core$IFn$_invoke$arity$variadic = G__30993__delegate;
return G__30993;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30996__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30997__i = 0, G__30997__a = new Array(arguments.length -  0);
while (G__30997__i < G__30997__a.length) {G__30997__a[G__30997__i] = arguments[G__30997__i + 0]; ++G__30997__i;}
  args = new cljs.core.IndexedSeq(G__30997__a,0,null);
} 
return G__30996__delegate.call(this,args);};
G__30996.cljs$lang$maxFixedArity = 0;
G__30996.cljs$lang$applyTo = (function (arglist__30998){
var args = cljs.core.seq(arglist__30998);
return G__30996__delegate(args);
});
G__30996.cljs$core$IFn$_invoke$arity$variadic = G__30996__delegate;
return G__30996;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1551586169560
