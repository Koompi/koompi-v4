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
var len__4531__auto___35790 = arguments.length;
var i__4532__auto___35791 = (0);
while(true){
if((i__4532__auto___35791 < len__4531__auto___35790)){
args__4534__auto__.push((arguments[i__4532__auto___35791]));

var G__35792 = (i__4532__auto___35791 + (1));
i__4532__auto___35791 = G__35792;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__35786){
var vec__35787 = p__35786;
var default$ = cljs.core.nth.call(null,vec__35787,(0),null);
var temp_a = koompi.reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

koompi.reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get.cljs$lang$applyTo = (function (seq35784){
var G__35785 = cljs.core.first.call(null,seq35784);
var seq35784__$1 = cljs.core.next.call(null,seq35784);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35785,seq35784__$1);
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
var len__4531__auto___35799 = arguments.length;
var i__4532__auto___35800 = (0);
while(true){
if((i__4532__auto___35800 < len__4531__auto___35799)){
args__4534__auto__.push((arguments[i__4532__auto___35800]));

var G__35801 = (i__4532__auto___35800 + (1));
i__4532__auto___35800 = G__35801;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__35795){
var vec__35796 = p__35795;
var default$ = cljs.core.nth.call(null,vec__35796,(0),null);
var or__3949__auto__ = cljs.core.deref.call(null,koompi.reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

koompi.reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get_in.cljs$lang$applyTo = (function (seq35793){
var G__35794 = cljs.core.first.call(null,seq35793);
var seq35793__$1 = cljs.core.next.call(null,seq35793);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35794,seq35793__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
koompi.reagent.session.swap_BANG_ = (function koompi$reagent$session$swap_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35804 = arguments.length;
var i__4532__auto___35805 = (0);
while(true){
if((i__4532__auto___35805 < len__4531__auto___35804)){
args__4534__auto__.push((arguments[i__4532__auto___35805]));

var G__35806 = (i__4532__auto___35805 + (1));
i__4532__auto___35805 = G__35806;
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
koompi.reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq35802){
var G__35803 = cljs.core.first.call(null,seq35802);
var seq35802__$1 = cljs.core.next.call(null,seq35802);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35803,seq35802__$1);
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
var len__4531__auto___35813 = arguments.length;
var i__4532__auto___35814 = (0);
while(true){
if((i__4532__auto___35814 < len__4531__auto___35813)){
args__4534__auto__.push((arguments[i__4532__auto___35814]));

var G__35815 = (i__4532__auto___35814 + (1));
i__4532__auto___35814 = G__35815;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__35809){
var vec__35810 = p__35809;
var default$ = cljs.core.nth.call(null,vec__35810,(0),null);
var cur = koompi.reagent.session.get.call(null,k,default$);
koompi.reagent.session.remove_BANG_.call(null,k);

return cur;
});

koompi.reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq35807){
var G__35808 = cljs.core.first.call(null,seq35807);
var seq35807__$1 = cljs.core.next.call(null,seq35807);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35808,seq35807__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
koompi.reagent.session.get_in_BANG_ = (function koompi$reagent$session$get_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35822 = arguments.length;
var i__4532__auto___35823 = (0);
while(true){
if((i__4532__auto___35823 < len__4531__auto___35822)){
args__4534__auto__.push((arguments[i__4532__auto___35823]));

var G__35824 = (i__4532__auto___35823 + (1));
i__4532__auto___35823 = G__35824;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return koompi.reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

koompi.reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__35818){
var vec__35819 = p__35818;
var default$ = cljs.core.nth.call(null,vec__35819,(0),null);
var cur = koompi.reagent.session.get_in.call(null,ks,default$);
koompi.reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

koompi.reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
koompi.reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq35816){
var G__35817 = cljs.core.first.call(null,seq35816);
var seq35816__$1 = cljs.core.next.call(null,seq35816);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35817,seq35816__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
koompi.reagent.session.update_BANG_ = (function koompi$reagent$session$update_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35829 = arguments.length;
var i__4532__auto___35830 = (0);
while(true){
if((i__4532__auto___35830 < len__4531__auto___35829)){
args__4534__auto__.push((arguments[i__4532__auto___35830]));

var G__35831 = (i__4532__auto___35830 + (1));
i__4532__auto___35830 = G__35831;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return koompi.reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

koompi.reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,koompi.reagent.session.state,(function (p1__35825_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__35825_SHARP_,k,f),args);
}));
});

koompi.reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
koompi.reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq35826){
var G__35827 = cljs.core.first.call(null,seq35826);
var seq35826__$1 = cljs.core.next.call(null,seq35826);
var G__35828 = cljs.core.first.call(null,seq35826__$1);
var seq35826__$2 = cljs.core.next.call(null,seq35826__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35827,G__35828,seq35826__$2);
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
var len__4531__auto___35836 = arguments.length;
var i__4532__auto___35837 = (0);
while(true){
if((i__4532__auto___35837 < len__4531__auto___35836)){
args__4534__auto__.push((arguments[i__4532__auto___35837]));

var G__35838 = (i__4532__auto___35837 + (1));
i__4532__auto___35837 = G__35838;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return koompi.reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

koompi.reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,koompi.reagent.session.state,(function (p1__35832_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__35832_SHARP_,ks,f),args);
}));
});

koompi.reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
koompi.reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq35833){
var G__35834 = cljs.core.first.call(null,seq35833);
var seq35833__$1 = cljs.core.next.call(null,seq35833);
var G__35835 = cljs.core.first.call(null,seq35833__$1);
var seq35833__$2 = cljs.core.next.call(null,seq35833__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35834,G__35835,seq35833__$2);
});


//# sourceMappingURL=session.js.map?rel=1551156911612
