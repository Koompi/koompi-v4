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
var G__32651__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32652__i = 0, G__32652__a = new Array(arguments.length -  0);
while (G__32652__i < G__32652__a.length) {G__32652__a[G__32652__i] = arguments[G__32652__i + 0]; ++G__32652__i;}
  args = new cljs.core.IndexedSeq(G__32652__a,0,null);
} 
return G__32651__delegate.call(this,args);};
G__32651.cljs$lang$maxFixedArity = 0;
G__32651.cljs$lang$applyTo = (function (arglist__32653){
var args = cljs.core.seq(arglist__32653);
return G__32651__delegate(args);
});
G__32651.cljs$core$IFn$_invoke$arity$variadic = G__32651__delegate;
return G__32651;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32654__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32655__i = 0, G__32655__a = new Array(arguments.length -  0);
while (G__32655__i < G__32655__a.length) {G__32655__a[G__32655__i] = arguments[G__32655__i + 0]; ++G__32655__i;}
  args = new cljs.core.IndexedSeq(G__32655__a,0,null);
} 
return G__32654__delegate.call(this,args);};
G__32654.cljs$lang$maxFixedArity = 0;
G__32654.cljs$lang$applyTo = (function (arglist__32656){
var args = cljs.core.seq(arglist__32656);
return G__32654__delegate(args);
});
G__32654.cljs$core$IFn$_invoke$arity$variadic = G__32654__delegate;
return G__32654;
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

//# sourceMappingURL=debug.js.map?rel=1551156893731
