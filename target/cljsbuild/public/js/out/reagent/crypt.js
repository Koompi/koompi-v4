// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.crypt');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('goog.crypt.Sha1');
goog.require('goog.crypt.Sha2');
goog.require('goog.crypt.Sha256');
goog.require('goog.crypt.Sha384');
goog.require('goog.crypt.Sha512');
reagent.crypt.string__GT_bytes = (function reagent$crypt$string__GT_bytes(s){
return goog.crypt.stringToUtf8ByteArray(s);
});
/**
 * convert bytes to hex
 */
reagent.crypt.bytes__GT_hex = (function reagent$crypt$bytes__GT_hex(bytes_in){
return goog.crypt.byteArrayToHex(bytes_in);
});
reagent.crypt.digest = (function reagent$crypt$digest(hasher,bytes){
hasher.update(bytes);

return hasher.digest();
});
reagent.crypt.hash_bytes = (function reagent$crypt$hash_bytes(s,hash_type){
return reagent.crypt.digest.call(null,(function (){var G__32900 = hash_type;
var G__32900__$1 = (((G__32900 instanceof cljs.core.Keyword))?G__32900.fqn:null);
switch (G__32900__$1) {
case "md5":
return (new goog.crypt.Md5());

break;
case "sha1":
return (new goog.crypt.Sha1());

break;
case "sha2":
return (new goog.crypt.Sha2());

break;
case "sha256":
return (new goog.crypt.Sha256());

break;
case "sha384":
return (new goog.crypt.Sha384());

break;
case "sha512":
return (new goog.crypt.Sha512());

break;
default:
throw (new Error(["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash_type),"' is not a valid hash algorithm."].join('')));

}
})(),reagent.crypt.string__GT_bytes.call(null,s));
});
reagent.crypt.hash = (function reagent$crypt$hash(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32909 = arguments.length;
var i__4532__auto___32910 = (0);
while(true){
if((i__4532__auto___32910 < len__4531__auto___32909)){
args__4534__auto__.push((arguments[i__4532__auto___32910]));

var G__32911 = (i__4532__auto___32910 + (1));
i__4532__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.crypt.hash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.crypt.hash.cljs$core$IFn$_invoke$arity$variadic = (function (s,hash_type,p__32905){
var vec__32906 = p__32905;
var hex_QMARK_ = cljs.core.nth.call(null,vec__32906,(0),null);
var hashed = reagent.crypt.hash_bytes.call(null,s,hash_type);
if(cljs.core.truth_(hex_QMARK_)){
return reagent.crypt.bytes__GT_hex.call(null,hashed);
} else {
return hashed;
}
});

reagent.crypt.hash.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.crypt.hash.cljs$lang$applyTo = (function (seq32902){
var G__32903 = cljs.core.first.call(null,seq32902);
var seq32902__$1 = cljs.core.next.call(null,seq32902);
var G__32904 = cljs.core.first.call(null,seq32902__$1);
var seq32902__$2 = cljs.core.next.call(null,seq32902__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32903,G__32904,seq32902__$2);
});


//# sourceMappingURL=crypt.js.map?rel=1551586181418
