// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47185){
var map__47186 = p__47185;
var map__47186__$1 = ((((!((map__47186 == null)))?(((((map__47186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47186):map__47186);
var m = map__47186__$1;
var n = cljs.core.get.call(null,map__47186__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47186__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47188_47210 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47189_47211 = null;
var count__47190_47212 = (0);
var i__47191_47213 = (0);
while(true){
if((i__47191_47213 < count__47190_47212)){
var f_47214 = cljs.core._nth.call(null,chunk__47189_47211,i__47191_47213);
cljs.core.println.call(null,"  ",f_47214);


var G__47215 = seq__47188_47210;
var G__47216 = chunk__47189_47211;
var G__47217 = count__47190_47212;
var G__47218 = (i__47191_47213 + (1));
seq__47188_47210 = G__47215;
chunk__47189_47211 = G__47216;
count__47190_47212 = G__47217;
i__47191_47213 = G__47218;
continue;
} else {
var temp__5457__auto___47219 = cljs.core.seq.call(null,seq__47188_47210);
if(temp__5457__auto___47219){
var seq__47188_47220__$1 = temp__5457__auto___47219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47188_47220__$1)){
var c__4351__auto___47221 = cljs.core.chunk_first.call(null,seq__47188_47220__$1);
var G__47222 = cljs.core.chunk_rest.call(null,seq__47188_47220__$1);
var G__47223 = c__4351__auto___47221;
var G__47224 = cljs.core.count.call(null,c__4351__auto___47221);
var G__47225 = (0);
seq__47188_47210 = G__47222;
chunk__47189_47211 = G__47223;
count__47190_47212 = G__47224;
i__47191_47213 = G__47225;
continue;
} else {
var f_47226 = cljs.core.first.call(null,seq__47188_47220__$1);
cljs.core.println.call(null,"  ",f_47226);


var G__47227 = cljs.core.next.call(null,seq__47188_47220__$1);
var G__47228 = null;
var G__47229 = (0);
var G__47230 = (0);
seq__47188_47210 = G__47227;
chunk__47189_47211 = G__47228;
count__47190_47212 = G__47229;
i__47191_47213 = G__47230;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47231 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47231);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47231)))?cljs.core.second.call(null,arglists_47231):arglists_47231));
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
var seq__47192_47232 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47193_47233 = null;
var count__47194_47234 = (0);
var i__47195_47235 = (0);
while(true){
if((i__47195_47235 < count__47194_47234)){
var vec__47196_47236 = cljs.core._nth.call(null,chunk__47193_47233,i__47195_47235);
var name_47237 = cljs.core.nth.call(null,vec__47196_47236,(0),null);
var map__47199_47238 = cljs.core.nth.call(null,vec__47196_47236,(1),null);
var map__47199_47239__$1 = ((((!((map__47199_47238 == null)))?(((((map__47199_47238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47199_47238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47199_47238):map__47199_47238);
var doc_47240 = cljs.core.get.call(null,map__47199_47239__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47241 = cljs.core.get.call(null,map__47199_47239__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47237);

cljs.core.println.call(null," ",arglists_47241);

if(cljs.core.truth_(doc_47240)){
cljs.core.println.call(null," ",doc_47240);
} else {
}


var G__47242 = seq__47192_47232;
var G__47243 = chunk__47193_47233;
var G__47244 = count__47194_47234;
var G__47245 = (i__47195_47235 + (1));
seq__47192_47232 = G__47242;
chunk__47193_47233 = G__47243;
count__47194_47234 = G__47244;
i__47195_47235 = G__47245;
continue;
} else {
var temp__5457__auto___47246 = cljs.core.seq.call(null,seq__47192_47232);
if(temp__5457__auto___47246){
var seq__47192_47247__$1 = temp__5457__auto___47246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47192_47247__$1)){
var c__4351__auto___47248 = cljs.core.chunk_first.call(null,seq__47192_47247__$1);
var G__47249 = cljs.core.chunk_rest.call(null,seq__47192_47247__$1);
var G__47250 = c__4351__auto___47248;
var G__47251 = cljs.core.count.call(null,c__4351__auto___47248);
var G__47252 = (0);
seq__47192_47232 = G__47249;
chunk__47193_47233 = G__47250;
count__47194_47234 = G__47251;
i__47195_47235 = G__47252;
continue;
} else {
var vec__47201_47253 = cljs.core.first.call(null,seq__47192_47247__$1);
var name_47254 = cljs.core.nth.call(null,vec__47201_47253,(0),null);
var map__47204_47255 = cljs.core.nth.call(null,vec__47201_47253,(1),null);
var map__47204_47256__$1 = ((((!((map__47204_47255 == null)))?(((((map__47204_47255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47204_47255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47204_47255):map__47204_47255);
var doc_47257 = cljs.core.get.call(null,map__47204_47256__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47258 = cljs.core.get.call(null,map__47204_47256__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47254);

cljs.core.println.call(null," ",arglists_47258);

if(cljs.core.truth_(doc_47257)){
cljs.core.println.call(null," ",doc_47257);
} else {
}


var G__47259 = cljs.core.next.call(null,seq__47192_47247__$1);
var G__47260 = null;
var G__47261 = (0);
var G__47262 = (0);
seq__47192_47232 = G__47259;
chunk__47193_47233 = G__47260;
count__47194_47234 = G__47261;
i__47195_47235 = G__47262;
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

var seq__47206 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47207 = null;
var count__47208 = (0);
var i__47209 = (0);
while(true){
if((i__47209 < count__47208)){
var role = cljs.core._nth.call(null,chunk__47207,i__47209);
var temp__5457__auto___47263__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___47263__$1)){
var spec_47264 = temp__5457__auto___47263__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47264));
} else {
}


var G__47265 = seq__47206;
var G__47266 = chunk__47207;
var G__47267 = count__47208;
var G__47268 = (i__47209 + (1));
seq__47206 = G__47265;
chunk__47207 = G__47266;
count__47208 = G__47267;
i__47209 = G__47268;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__47206);
if(temp__5457__auto____$1){
var seq__47206__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47206__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__47206__$1);
var G__47269 = cljs.core.chunk_rest.call(null,seq__47206__$1);
var G__47270 = c__4351__auto__;
var G__47271 = cljs.core.count.call(null,c__4351__auto__);
var G__47272 = (0);
seq__47206 = G__47269;
chunk__47207 = G__47270;
count__47208 = G__47271;
i__47209 = G__47272;
continue;
} else {
var role = cljs.core.first.call(null,seq__47206__$1);
var temp__5457__auto___47273__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___47273__$2)){
var spec_47274 = temp__5457__auto___47273__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47274));
} else {
}


var G__47275 = cljs.core.next.call(null,seq__47206__$1);
var G__47276 = null;
var G__47277 = (0);
var G__47278 = (0);
seq__47206 = G__47275;
chunk__47207 = G__47276;
count__47208 = G__47277;
i__47209 = G__47278;
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

//# sourceMappingURL=repl.js.map?rel=1551156948210
