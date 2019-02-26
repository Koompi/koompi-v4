// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.cookies');
goog.require('cljs.core');
goog.require('goog.net.cookies');
goog.require('cljs.reader');
/**
 * sets a cookie, the max-age for session cookie
 * following optional parameters may be passed in as a map:
 * :max-age - defaults to -1
 * :path - path of the cookie, defaults to the full request path
 * :domain - domain of the cookie, when null the browser will use the full request host name
 * :secure? - boolean specifying whether the cookie should only be sent over a secure channel
 * :raw? - boolean specifying whether content should be stored raw, or as EDN
 *   
 */
reagent.cookies.set_BANG_ = (function reagent$cookies$set_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36048 = arguments.length;
var i__4532__auto___36049 = (0);
while(true){
if((i__4532__auto___36049 < len__4531__auto___36048)){
args__4534__auto__.push((arguments[i__4532__auto___36049]));

var G__36050 = (i__4532__auto___36049 + (1));
i__4532__auto___36049 = G__36050;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,content,p__36042){
var vec__36043 = p__36042;
var map__36046 = cljs.core.nth.call(null,vec__36043,(0),null);
var map__36046__$1 = ((((!((map__36046 == null)))?(((((map__36046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36046):map__36046);
var max_age = cljs.core.get.call(null,map__36046__$1,new cljs.core.Keyword(null,"max-age","max-age",-270129271));
var path = cljs.core.get.call(null,map__36046__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var domain = cljs.core.get.call(null,map__36046__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var secure_QMARK_ = cljs.core.get.call(null,map__36046__$1,new cljs.core.Keyword(null,"secure?","secure?",-368029718));
var raw_QMARK_ = cljs.core.get.call(null,map__36046__$1,new cljs.core.Keyword(null,"raw?","raw?",394379982));
var opts = vec__36043;
var k__$1 = cljs.core.name.call(null,k);
var content__$1 = (cljs.core.truth_(raw_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''):cljs.core.pr_str.call(null,content));
if(cljs.core.not.call(null,opts)){
return goog.net.cookies.set(k__$1,content__$1);
} else {
return goog.net.cookies.set(k__$1,content__$1,(function (){var or__3949__auto__ = max_age;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (-1);
}
})(),path,domain,cljs.core.boolean$.call(null,secure_QMARK_));
}
});

reagent.cookies.set_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.cookies.set_BANG_.cljs$lang$applyTo = (function (seq36039){
var G__36040 = cljs.core.first.call(null,seq36039);
var seq36039__$1 = cljs.core.next.call(null,seq36039);
var G__36041 = cljs.core.first.call(null,seq36039__$1);
var seq36039__$2 = cljs.core.next.call(null,seq36039__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36040,G__36041,seq36039__$2);
});

reagent.cookies.read_edn_value = (function reagent$cookies$read_edn_value(v){
if(cljs.core.truth_(v)){
return cljs.reader.read_string.call(null,v);
} else {
return null;
}
});
reagent.cookies.read_raw_value = (function reagent$cookies$read_raw_value(v){
return v;
});
reagent.cookies.get_value = (function reagent$cookies$get_value(k,r,default$){
var or__3949__auto__ = r.call(null,goog.net.cookies.get(cljs.core.name.call(null,k)));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});
/**
 * gets the value at the key (as edn), optional default when value is not found
 */
reagent.cookies.get = (function reagent$cookies$get(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36057 = arguments.length;
var i__4532__auto___36058 = (0);
while(true){
if((i__4532__auto___36058 < len__4531__auto___36057)){
args__4534__auto__.push((arguments[i__4532__auto___36058]));

var G__36059 = (i__4532__auto___36058 + (1));
i__4532__auto___36058 = G__36059;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__36053){
var vec__36054 = p__36053;
var default$ = cljs.core.nth.call(null,vec__36054,(0),null);
return reagent.cookies.get_value.call(null,k,reagent.cookies.read_edn_value,default$);
});

reagent.cookies.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get.cljs$lang$applyTo = (function (seq36051){
var G__36052 = cljs.core.first.call(null,seq36051);
var seq36051__$1 = cljs.core.next.call(null,seq36051);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36052,seq36051__$1);
});

/**
 * gets the value at the key (as string), optional default when value is not found
 */
reagent.cookies.get_raw = (function reagent$cookies$get_raw(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36066 = arguments.length;
var i__4532__auto___36067 = (0);
while(true){
if((i__4532__auto___36067 < len__4531__auto___36066)){
args__4534__auto__.push((arguments[i__4532__auto___36067]));

var G__36068 = (i__4532__auto___36067 + (1));
i__4532__auto___36067 = G__36068;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__36062){
var vec__36063 = p__36062;
var default$ = cljs.core.nth.call(null,vec__36063,(0),null);
return reagent.cookies.get_value.call(null,k,reagent.cookies.read_raw_value,default$);
});

reagent.cookies.get_raw.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get_raw.cljs$lang$applyTo = (function (seq36060){
var G__36061 = cljs.core.first.call(null,seq36060);
var seq36060__$1 = cljs.core.next.call(null,seq36060);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36061,seq36060__$1);
});

/**
 * is the key present in the cookies
 */
reagent.cookies.contains_key_QMARK_ = (function reagent$cookies$contains_key_QMARK_(k){
return goog.net.cookies.containsKey(cljs.core.name.call(null,k));
});
/**
 * is the value present in the cookies (as string)
 */
reagent.cookies.contains_val_QMARK_ = (function reagent$cookies$contains_val_QMARK_(v){
return goog.net.cookies.containsValue(v);
});
/**
 * returns the number of cookies
 */
reagent.cookies.count = (function reagent$cookies$count(){
return goog.net.cookies.getCount();
});
/**
 * returns all the keys for the cookies
 */
reagent.cookies.keys = (function reagent$cookies$keys(){
return cljs.core.map.call(null,cljs.core.keyword,goog.net.cookies.getKeys());
});
/**
 * returns cookie values (as edn)
 */
reagent.cookies.vals = (function reagent$cookies$vals(){
return cljs.core.map.call(null,reagent.cookies.read_edn_value,goog.net.cookies.getValues());
});
/**
 * returns cookie values (as strings)
 */
reagent.cookies.raw_vals = (function reagent$cookies$raw_vals(){
return cljs.core.map.call(null,reagent.cookies.read_raw_value,goog.net.cookies.getValues());
});
/**
 * true if no cookies are set
 */
reagent.cookies.empty_QMARK_ = (function reagent$cookies$empty_QMARK_(){
return goog.net.cookies.isEmpty();
});
/**
 * removes a cookie, optionally for a specific path and/or domain
 */
reagent.cookies.remove_BANG_ = (function reagent$cookies$remove_BANG_(var_args){
var G__36070 = arguments.length;
switch (G__36070) {
case 1:
return reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (k){
return goog.net.cookies.remove(cljs.core.name.call(null,k));
});

reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (k,path,domain){
return goog.net.cookies.remove(cljs.core.name.call(null,k),path,domain);
});

reagent.cookies.remove_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * removes all cookies
 */
reagent.cookies.clear_BANG_ = (function reagent$cookies$clear_BANG_(){
return goog.net.cookies.clear();
});

//# sourceMappingURL=cookies.js.map?rel=1551156912366
