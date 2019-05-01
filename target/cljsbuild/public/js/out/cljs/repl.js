// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37944){
var map__37945 = p__37944;
var map__37945__$1 = ((((!((map__37945 == null)))?(((((map__37945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37945):map__37945);
var m = map__37945__$1;
var n = cljs.core.get.call(null,map__37945__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37945__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37947_37969 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37948_37970 = null;
var count__37949_37971 = (0);
var i__37950_37972 = (0);
while(true){
if((i__37950_37972 < count__37949_37971)){
var f_37973 = cljs.core._nth.call(null,chunk__37948_37970,i__37950_37972);
cljs.core.println.call(null,"  ",f_37973);


var G__37974 = seq__37947_37969;
var G__37975 = chunk__37948_37970;
var G__37976 = count__37949_37971;
var G__37977 = (i__37950_37972 + (1));
seq__37947_37969 = G__37974;
chunk__37948_37970 = G__37975;
count__37949_37971 = G__37976;
i__37950_37972 = G__37977;
continue;
} else {
var temp__5457__auto___37978 = cljs.core.seq.call(null,seq__37947_37969);
if(temp__5457__auto___37978){
var seq__37947_37979__$1 = temp__5457__auto___37978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37947_37979__$1)){
var c__4351__auto___37980 = cljs.core.chunk_first.call(null,seq__37947_37979__$1);
var G__37981 = cljs.core.chunk_rest.call(null,seq__37947_37979__$1);
var G__37982 = c__4351__auto___37980;
var G__37983 = cljs.core.count.call(null,c__4351__auto___37980);
var G__37984 = (0);
seq__37947_37969 = G__37981;
chunk__37948_37970 = G__37982;
count__37949_37971 = G__37983;
i__37950_37972 = G__37984;
continue;
} else {
var f_37985 = cljs.core.first.call(null,seq__37947_37979__$1);
cljs.core.println.call(null,"  ",f_37985);


var G__37986 = cljs.core.next.call(null,seq__37947_37979__$1);
var G__37987 = null;
var G__37988 = (0);
var G__37989 = (0);
seq__37947_37969 = G__37986;
chunk__37948_37970 = G__37987;
count__37949_37971 = G__37988;
i__37950_37972 = G__37989;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37990 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37990);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37990)))?cljs.core.second.call(null,arglists_37990):arglists_37990));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37951_37991 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37952_37992 = null;
var count__37953_37993 = (0);
var i__37954_37994 = (0);
while(true){
if((i__37954_37994 < count__37953_37993)){
var vec__37955_37995 = cljs.core._nth.call(null,chunk__37952_37992,i__37954_37994);
var name_37996 = cljs.core.nth.call(null,vec__37955_37995,(0),null);
var map__37958_37997 = cljs.core.nth.call(null,vec__37955_37995,(1),null);
var map__37958_37998__$1 = ((((!((map__37958_37997 == null)))?(((((map__37958_37997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37958_37997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37958_37997):map__37958_37997);
var doc_37999 = cljs.core.get.call(null,map__37958_37998__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38000 = cljs.core.get.call(null,map__37958_37998__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37996);

cljs.core.println.call(null," ",arglists_38000);

if(cljs.core.truth_(doc_37999)){
cljs.core.println.call(null," ",doc_37999);
} else {
}


var G__38001 = seq__37951_37991;
var G__38002 = chunk__37952_37992;
var G__38003 = count__37953_37993;
var G__38004 = (i__37954_37994 + (1));
seq__37951_37991 = G__38001;
chunk__37952_37992 = G__38002;
count__37953_37993 = G__38003;
i__37954_37994 = G__38004;
continue;
} else {
var temp__5457__auto___38005 = cljs.core.seq.call(null,seq__37951_37991);
if(temp__5457__auto___38005){
var seq__37951_38006__$1 = temp__5457__auto___38005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37951_38006__$1)){
var c__4351__auto___38007 = cljs.core.chunk_first.call(null,seq__37951_38006__$1);
var G__38008 = cljs.core.chunk_rest.call(null,seq__37951_38006__$1);
var G__38009 = c__4351__auto___38007;
var G__38010 = cljs.core.count.call(null,c__4351__auto___38007);
var G__38011 = (0);
seq__37951_37991 = G__38008;
chunk__37952_37992 = G__38009;
count__37953_37993 = G__38010;
i__37954_37994 = G__38011;
continue;
} else {
var vec__37960_38012 = cljs.core.first.call(null,seq__37951_38006__$1);
var name_38013 = cljs.core.nth.call(null,vec__37960_38012,(0),null);
var map__37963_38014 = cljs.core.nth.call(null,vec__37960_38012,(1),null);
var map__37963_38015__$1 = ((((!((map__37963_38014 == null)))?(((((map__37963_38014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37963_38014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37963_38014):map__37963_38014);
var doc_38016 = cljs.core.get.call(null,map__37963_38015__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38017 = cljs.core.get.call(null,map__37963_38015__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38013);

cljs.core.println.call(null," ",arglists_38017);

if(cljs.core.truth_(doc_38016)){
cljs.core.println.call(null," ",doc_38016);
} else {
}


var G__38018 = cljs.core.next.call(null,seq__37951_38006__$1);
var G__38019 = null;
var G__38020 = (0);
var G__38021 = (0);
seq__37951_37991 = G__38018;
chunk__37952_37992 = G__38019;
count__37953_37993 = G__38020;
i__37954_37994 = G__38021;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__37965 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37966 = null;
var count__37967 = (0);
var i__37968 = (0);
while(true){
if((i__37968 < count__37967)){
var role = cljs.core._nth.call(null,chunk__37966,i__37968);
var temp__5457__auto___38022__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38022__$1)){
var spec_38023 = temp__5457__auto___38022__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38023));
} else {
}


var G__38024 = seq__37965;
var G__38025 = chunk__37966;
var G__38026 = count__37967;
var G__38027 = (i__37968 + (1));
seq__37965 = G__38024;
chunk__37966 = G__38025;
count__37967 = G__38026;
i__37968 = G__38027;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__37965);
if(temp__5457__auto____$1){
var seq__37965__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37965__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__37965__$1);
var G__38028 = cljs.core.chunk_rest.call(null,seq__37965__$1);
var G__38029 = c__4351__auto__;
var G__38030 = cljs.core.count.call(null,c__4351__auto__);
var G__38031 = (0);
seq__37965 = G__38028;
chunk__37966 = G__38029;
count__37967 = G__38030;
i__37968 = G__38031;
continue;
} else {
var role = cljs.core.first.call(null,seq__37965__$1);
var temp__5457__auto___38032__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38032__$2)){
var spec_38033 = temp__5457__auto___38032__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38033));
} else {
}


var G__38034 = cljs.core.next.call(null,seq__37965__$1);
var G__38035 = null;
var G__38036 = (0);
var G__38037 = (0);
seq__37965 = G__38034;
chunk__37966 = G__38035;
count__37967 = G__38036;
i__37968 = G__38037;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1551586193663
