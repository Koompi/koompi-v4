// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.format');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormatSymbols');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('goog.crypt.Sha1');
goog.require('goog.crypt.Sha2');
goog.require('goog.crypt.Sha256');
goog.require('goog.crypt.Sha384');
goog.require('goog.crypt.Sha512');
reagent.format.add_slashes = (function reagent$format$add_slashes(s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (c){
if(((cljs.core._EQ_.call(null,"\"",c)) || (cljs.core._EQ_.call(null,"'",c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\",c], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
}
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
});
reagent.format.center = (function reagent$format$center(text,w){
var c = cljs.core.count.call(null,text);
var l = Math.ceil(((w - c) / (2)));
var r = Math.floor(((w - c) / (2)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,l," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,r," ")))].join('');
});
/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
reagent.format.format = (function reagent$format$format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31015 = arguments.length;
var i__4532__auto___31016 = (0);
while(true){
if((i__4532__auto___31016 < len__4531__auto___31015)){
args__4534__auto__.push((arguments[i__4532__auto___31016]));

var G__31017 = (i__4532__auto___31016 + (1));
i__4532__auto___31016 = G__31017;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.format.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

reagent.format.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.format.cljs$lang$applyTo = (function (seq31013){
var G__31014 = cljs.core.first.call(null,seq31013);
var seq31013__$1 = cljs.core.next.call(null,seq31013);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31014,seq31013__$1);
});

/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31020 = arguments.length;
var i__4532__auto___31021 = (0);
while(true){
if((i__4532__auto___31021 < len__4531__auto___31020)){
args__4534__auto__.push((arguments[i__4532__auto___31021]));

var G__31022 = (i__4532__auto___31021 + (1));
i__4532__auto___31021 = G__31022;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,reagent.format.format,fmt,args));
});

reagent.format.printf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.printf.cljs$lang$applyTo = (function (seq31018){
var G__31019 = cljs.core.first.call(null,seq31018);
var seq31018__$1 = cljs.core.next.call(null,seq31018);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31019,seq31018__$1);
});

/**
 * formats currency using the current locale
 * to change locale set goog.i18n.NumberFormatSymbols eg:
 * (set! goog.i18n.NumberFormatSymbols goog.i18n.NumberFormatSymbols_it_IT)
 * see here for supported locales
 * https://github.com/google/closure-library/blob/master/closure/goog/i18n/numberformatsymbols.js
 *   
 */
reagent.format.currency_format = (function reagent$format$currency_format(n){
return (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY)).format(n);
});
reagent.format.date_format = (function reagent$format$date_format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31030 = arguments.length;
var i__4532__auto___31031 = (0);
while(true){
if((i__4532__auto___31031 < len__4531__auto___31030)){
args__4534__auto__.push((arguments[i__4532__auto___31031]));

var G__31032 = (i__4532__auto___31031 + (1));
i__4532__auto___31031 = G__31032;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__31026){
var vec__31027 = p__31026;
var tz = cljs.core.nth.call(null,vec__31027,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.format.date_format.cljs$lang$applyTo = (function (seq31023){
var G__31024 = cljs.core.first.call(null,seq31023);
var seq31023__$1 = cljs.core.next.call(null,seq31023);
var G__31025 = cljs.core.first.call(null,seq31023__$1);
var seq31023__$2 = cljs.core.next.call(null,seq31023__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31024,G__31025,seq31023__$2);
});

reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
return clojure.string.join.call(null,"\n",cljs.core.map_indexed.call(null,((function (s__$1){
return (function (p1__31033_SHARP_,p2__31034_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__31033_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31034_SHARP_)].join('');
});})(s__$1))
,clojure.string.split.call(null,s__$1,/\n/)));
});
/**
 * pluralizes the word based on the number of items
 * (util/pluralize ["John"] "lad")
 * (util/pluralize ["John" "James"] "lad")
 * (util/pluralize ["Alice"] "lad" "y" "ies")
 */
reagent.format.pluralize = (function reagent$format$pluralize(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31043 = arguments.length;
var i__4532__auto___31044 = (0);
while(true){
if((i__4532__auto___31044 < len__4531__auto___31043)){
args__4534__auto__.push((arguments[i__4532__auto___31044]));

var G__31045 = (i__4532__auto___31044 + (1));
i__4532__auto___31044 = G__31045;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__31037){
var vec__31038 = p__31037;
var word = cljs.core.nth.call(null,vec__31038,(0),null);
var ending1 = cljs.core.nth.call(null,vec__31038,(1),null);
var ending2 = cljs.core.nth.call(null,vec__31038,(2),null);
var opts = vec__31038;
var n = cljs.core.count.call(null,items);
var plural = (function (){var G__31041 = cljs.core.count.call(null,opts);
switch (G__31041) {
case (1):
return "s";

break;
case (2):
return ending1;

break;
case (3):
return ending2;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31041)].join('')));

}
})();
var singular = (function (){var G__31042 = cljs.core.count.call(null,opts);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"list","list",-1889078086,null),G__31042)){
return "";
} else {
if(cljs.core._EQ_.call(null,(1),G__31042)){
return "";
} else {
if(cljs.core._EQ_.call(null,(2),G__31042)){
return "";
} else {
if(cljs.core._EQ_.call(null,(3),G__31042)){
return ending1;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31042)].join('')));

}
}
}
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.pluralize.cljs$lang$applyTo = (function (seq31035){
var G__31036 = cljs.core.first.call(null,seq31035);
var seq31035__$1 = cljs.core.next.call(null,seq31035);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31036,seq31035__$1);
});

reagent.format.capitalize_words = (function reagent$format$capitalize_words(s){
return clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/ /)));
});
/**
 * removes specified tags, eg:
 * (remove-tags "<p>foo bar</p>" "p")
 */
reagent.format.remove_tags = (function reagent$format$remove_tags(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31049 = arguments.length;
var i__4532__auto___31050 = (0);
while(true){
if((i__4532__auto___31050 < len__4531__auto___31049)){
args__4534__auto__.push((arguments[i__4532__auto___31050]));

var G__31051 = (i__4532__auto___31050 + (1));
i__4532__auto___31050 = G__31051;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic = (function (s,tags){
if(cljs.core.not.call(null,tags)){
return s;
} else {
var s__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var tags__$1 = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",tags)),")"].join('');
var opening = cljs.core.re_pattern.call(null,["(?i)<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags__$1),"(/?>|(\\s+[^>]*>))"].join(''));
var closing = cljs.core.re_pattern.call(null,["(?i)</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags__$1),">"].join(''));
return clojure.string.replace.call(null,clojure.string.replace.call(null,s__$1,opening,""),closing,"");
}
});

reagent.format.remove_tags.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.remove_tags.cljs$lang$applyTo = (function (seq31047){
var G__31048 = cljs.core.first.call(null,seq31047);
var seq31047__$1 = cljs.core.next.call(null,seq31047);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31048,seq31047__$1);
});

reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});

//# sourceMappingURL=format.js.map?rel=1551586170157
