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
var len__4531__auto___32685 = arguments.length;
var i__4532__auto___32686 = (0);
while(true){
if((i__4532__auto___32686 < len__4531__auto___32685)){
args__4534__auto__.push((arguments[i__4532__auto___32686]));

var G__32687 = (i__4532__auto___32686 + (1));
i__4532__auto___32686 = G__32687;
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
reagent.format.format.cljs$lang$applyTo = (function (seq32683){
var G__32684 = cljs.core.first.call(null,seq32683);
var seq32683__$1 = cljs.core.next.call(null,seq32683);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32684,seq32683__$1);
});

/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32690 = arguments.length;
var i__4532__auto___32691 = (0);
while(true){
if((i__4532__auto___32691 < len__4531__auto___32690)){
args__4534__auto__.push((arguments[i__4532__auto___32691]));

var G__32692 = (i__4532__auto___32691 + (1));
i__4532__auto___32691 = G__32692;
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
reagent.format.printf.cljs$lang$applyTo = (function (seq32688){
var G__32689 = cljs.core.first.call(null,seq32688);
var seq32688__$1 = cljs.core.next.call(null,seq32688);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32689,seq32688__$1);
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
var len__4531__auto___32700 = arguments.length;
var i__4532__auto___32701 = (0);
while(true){
if((i__4532__auto___32701 < len__4531__auto___32700)){
args__4534__auto__.push((arguments[i__4532__auto___32701]));

var G__32702 = (i__4532__auto___32701 + (1));
i__4532__auto___32701 = G__32702;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__32696){
var vec__32697 = p__32696;
var tz = cljs.core.nth.call(null,vec__32697,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.format.date_format.cljs$lang$applyTo = (function (seq32693){
var G__32694 = cljs.core.first.call(null,seq32693);
var seq32693__$1 = cljs.core.next.call(null,seq32693);
var G__32695 = cljs.core.first.call(null,seq32693__$1);
var seq32693__$2 = cljs.core.next.call(null,seq32693__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32694,G__32695,seq32693__$2);
});

reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
return clojure.string.join.call(null,"\n",cljs.core.map_indexed.call(null,((function (s__$1){
return (function (p1__32703_SHARP_,p2__32704_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__32703_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32704_SHARP_)].join('');
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
var len__4531__auto___32713 = arguments.length;
var i__4532__auto___32714 = (0);
while(true){
if((i__4532__auto___32714 < len__4531__auto___32713)){
args__4534__auto__.push((arguments[i__4532__auto___32714]));

var G__32715 = (i__4532__auto___32714 + (1));
i__4532__auto___32714 = G__32715;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__32707){
var vec__32708 = p__32707;
var word = cljs.core.nth.call(null,vec__32708,(0),null);
var ending1 = cljs.core.nth.call(null,vec__32708,(1),null);
var ending2 = cljs.core.nth.call(null,vec__32708,(2),null);
var opts = vec__32708;
var n = cljs.core.count.call(null,items);
var plural = (function (){var G__32711 = cljs.core.count.call(null,opts);
switch (G__32711) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32711)].join('')));

}
})();
var singular = (function (){var G__32712 = cljs.core.count.call(null,opts);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"list","list",-1889078086,null),G__32712)){
return "";
} else {
if(cljs.core._EQ_.call(null,(1),G__32712)){
return "";
} else {
if(cljs.core._EQ_.call(null,(2),G__32712)){
return "";
} else {
if(cljs.core._EQ_.call(null,(3),G__32712)){
return ending1;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32712)].join('')));

}
}
}
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.format.pluralize.cljs$lang$applyTo = (function (seq32705){
var G__32706 = cljs.core.first.call(null,seq32705);
var seq32705__$1 = cljs.core.next.call(null,seq32705);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32706,seq32705__$1);
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
var len__4531__auto___32719 = arguments.length;
var i__4532__auto___32720 = (0);
while(true){
if((i__4532__auto___32720 < len__4531__auto___32719)){
args__4534__auto__.push((arguments[i__4532__auto___32720]));

var G__32721 = (i__4532__auto___32720 + (1));
i__4532__auto___32720 = G__32721;
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
reagent.format.remove_tags.cljs$lang$applyTo = (function (seq32717){
var G__32718 = cljs.core.first.call(null,seq32717);
var seq32717__$1 = cljs.core.next.call(null,seq32717);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32718,seq32717__$1);
});

reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});

//# sourceMappingURL=format.js.map?rel=1551156894414
