// Compiled by ClojureScript 1.10.339 {}
goog.provide('koompi.reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
koompi.reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
koompi.reagent.session.cursor = (function koompi$reagent$session$cursor(ks){
return reagent.core.cursor.call(null,koompi.reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
koompi.reagent.session.get = (function koompi$reagent$session$get(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32849 = arguments.length;
var i__4532__auto___32850 = (0);
while(true){
if((i__4532__auto___32850 < len__4531__auto___32849)){
args__4534__auto__.push((arguments[i__4532__auto___32850]));

var G__32851 = (i__4532__auto___32850 + (1));
i__4532__auto___32850 = G__32851;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32845){
var vec__32846 = p__32845;
var default$ = cljs.core.nth.call(null,vec__32846,(0),null);
var temp_a = koompi.reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

koompi.reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get.cljs$lang$applyTo = (function (seq32843){
var G__32844 = cljs.core.first.call(null,seq32843);
var seq32843__$1 = cljs.core.next.call(null,seq32843);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32844,seq32843__$1);
});

koompi.reagent.session.put_BANG_ = (function koompi$reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,koompi.reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
koompi.reagent.session.get_in = (function koompi$reagent$session$get_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32858 = arguments.length;
var i__4532__auto___32859 = (0);
while(true){
if((i__4532__auto___32859 < len__4531__auto___32858)){
args__4534__auto__.push((arguments[i__4532__auto___32859]));

var G__32860 = (i__4532__auto___32859 + (1));
i__4532__auto___32859 = G__32860;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32854){
var vec__32855 = p__32854;
var default$ = cljs.core.nth.call(null,vec__32855,(0),null);
var or__3949__auto__ = cljs.core.deref.call(null,koompi.reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

koompi.reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get_in.cljs$lang$applyTo = (function (seq32852){
var G__32853 = cljs.core.first.call(null,seq32852);
var seq32852__$1 = cljs.core.next.call(null,seq32852);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32853,seq32852__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
koompi.reagent.session.swap_BANG_ = (function koompi$reagent$session$swap_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32863 = arguments.length;
var i__4532__auto___32864 = (0);
while(true){
if((i__4532__auto___32864 < len__4531__auto___32863)){
args__4534__auto__.push((arguments[i__4532__auto___32864]));

var G__32865 = (i__4532__auto___32864 + (1));
i__4532__auto___32864 = G__32865;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,koompi.reagent.session.state,f,args);
});

koompi.reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq32861){
var G__32862 = cljs.core.first.call(null,seq32861);
var seq32861__$1 = cljs.core.next.call(null,seq32861);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32862,seq32861__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
koompi.reagent.session.clear_BANG_ = (function koompi$reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,koompi.reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
koompi.reagent.session.reset_BANG_ = (function koompi$reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,koompi.reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
koompi.reagent.session.remove_BANG_ = (function koompi$reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,koompi.reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
koompi.reagent.session.assoc_in_BANG_ = (function koompi$reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,koompi.reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
koompi.reagent.session.get_BANG_ = (function koompi$reagent$session$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32872 = arguments.length;
var i__4532__auto___32873 = (0);
while(true){
if((i__4532__auto___32873 < len__4531__auto___32872)){
args__4534__auto__.push((arguments[i__4532__auto___32873]));

var G__32874 = (i__4532__auto___32873 + (1));
i__4532__auto___32873 = G__32874;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32868){
var vec__32869 = p__32868;
var default$ = cljs.core.nth.call(null,vec__32869,(0),null);
var cur = koompi.reagent.session.get.call(null,k,default$);
koompi.reagent.session.remove_BANG_.call(null,k);

return cur;
});

koompi.reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq32866){
var G__32867 = cljs.core.first.call(null,seq32866);
var seq32866__$1 = cljs.core.next.call(null,seq32866);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32867,seq32866__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
koompi.reagent.session.get_in_BANG_ = (function koompi$reagent$session$get_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32881 = arguments.length;
var i__4532__auto___32882 = (0);
while(true){
if((i__4532__auto___32882 < len__4531__auto___32881)){
args__4534__auto__.push((arguments[i__4532__auto___32882]));

var G__32883 = (i__4532__auto___32882 + (1));
i__4532__auto___32882 = G__32883;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32877){
var vec__32878 = p__32877;
var default$ = cljs.core.nth.call(null,vec__32878,(0),null);
var cur = koompi.reagent.session.get_in.call(null,ks,default$);
koompi.reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

koompi.reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq32875){
var G__32876 = cljs.core.first.call(null,seq32875);
var seq32875__$1 = cljs.core.next.call(null,seq32875);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32876,seq32875__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
koompi.reagent.session.update_BANG_ = (function koompi$reagent$session$update_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32888 = arguments.length;
var i__4532__auto___32889 = (0);
while(true){
if((i__4532__auto___32889 < len__4531__auto___32888)){
args__4534__auto__.push((arguments[i__4532__auto___32889]));

var G__32890 = (i__4532__auto___32889 + (1));
i__4532__auto___32889 = G__32890;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return koompi.reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

koompi.reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,koompi.reagent.session.state,(function (p1__32884_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__32884_SHARP_,k,f),args);
}));
});

koompi.reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
koompi.reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq32885){
var G__32886 = cljs.core.first.call(null,seq32885);
var seq32885__$1 = cljs.core.next.call(null,seq32885);
var G__32887 = cljs.core.first.call(null,seq32885__$1);
var seq32885__$2 = cljs.core.next.call(null,seq32885__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32886,G__32887,seq32885__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
koompi.reagent.session.update_in_BANG_ = (function koompi$reagent$session$update_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32895 = arguments.length;
var i__4532__auto___32896 = (0);
while(true){
if((i__4532__auto___32896 < len__4531__auto___32895)){
args__4534__auto__.push((arguments[i__4532__auto___32896]));

var G__32897 = (i__4532__auto___32896 + (1));
i__4532__auto___32896 = G__32897;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return koompi.reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

koompi.reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,koompi.reagent.session.state,(function (p1__32891_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__32891_SHARP_,ks,f),args);
}));
});

koompi.reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
koompi.reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq32892){
var G__32893 = cljs.core.first.call(null,seq32892);
var seq32892__$1 = cljs.core.next.call(null,seq32892);
var G__32894 = cljs.core.first.call(null,seq32892__$1);
var seq32892__$2 = cljs.core.next.call(null,seq32892__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32893,G__32894,seq32892__$2);
});


//# sourceMappingURL=session.js.map?rel=1551586181340
