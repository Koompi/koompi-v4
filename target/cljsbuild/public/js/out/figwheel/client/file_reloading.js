// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36480_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36480_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36481 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36482 = null;
var count__36483 = (0);
var i__36484 = (0);
while(true){
if((i__36484 < count__36483)){
var n = cljs.core._nth.call(null,chunk__36482,i__36484);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36485 = seq__36481;
var G__36486 = chunk__36482;
var G__36487 = count__36483;
var G__36488 = (i__36484 + (1));
seq__36481 = G__36485;
chunk__36482 = G__36486;
count__36483 = G__36487;
i__36484 = G__36488;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36481);
if(temp__5457__auto__){
var seq__36481__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36481__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36481__$1);
var G__36489 = cljs.core.chunk_rest.call(null,seq__36481__$1);
var G__36490 = c__4351__auto__;
var G__36491 = cljs.core.count.call(null,c__4351__auto__);
var G__36492 = (0);
seq__36481 = G__36489;
chunk__36482 = G__36490;
count__36483 = G__36491;
i__36484 = G__36492;
continue;
} else {
var n = cljs.core.first.call(null,seq__36481__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36493 = cljs.core.next.call(null,seq__36481__$1);
var G__36494 = null;
var G__36495 = (0);
var G__36496 = (0);
seq__36481 = G__36493;
chunk__36482 = G__36494;
count__36483 = G__36495;
i__36484 = G__36496;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36497){
var vec__36498 = p__36497;
var _ = cljs.core.nth.call(null,vec__36498,(0),null);
var v = cljs.core.nth.call(null,vec__36498,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__36501){
var vec__36502 = p__36501;
var k = cljs.core.nth.call(null,vec__36502,(0),null);
var v = cljs.core.nth.call(null,vec__36502,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36514_36522 = cljs.core.seq.call(null,deps);
var chunk__36515_36523 = null;
var count__36516_36524 = (0);
var i__36517_36525 = (0);
while(true){
if((i__36517_36525 < count__36516_36524)){
var dep_36526 = cljs.core._nth.call(null,chunk__36515_36523,i__36517_36525);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_36526;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36526));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36526,(depth + (1)),state);
} else {
}


var G__36527 = seq__36514_36522;
var G__36528 = chunk__36515_36523;
var G__36529 = count__36516_36524;
var G__36530 = (i__36517_36525 + (1));
seq__36514_36522 = G__36527;
chunk__36515_36523 = G__36528;
count__36516_36524 = G__36529;
i__36517_36525 = G__36530;
continue;
} else {
var temp__5457__auto___36531 = cljs.core.seq.call(null,seq__36514_36522);
if(temp__5457__auto___36531){
var seq__36514_36532__$1 = temp__5457__auto___36531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36514_36532__$1)){
var c__4351__auto___36533 = cljs.core.chunk_first.call(null,seq__36514_36532__$1);
var G__36534 = cljs.core.chunk_rest.call(null,seq__36514_36532__$1);
var G__36535 = c__4351__auto___36533;
var G__36536 = cljs.core.count.call(null,c__4351__auto___36533);
var G__36537 = (0);
seq__36514_36522 = G__36534;
chunk__36515_36523 = G__36535;
count__36516_36524 = G__36536;
i__36517_36525 = G__36537;
continue;
} else {
var dep_36538 = cljs.core.first.call(null,seq__36514_36532__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_36538;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36538));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36538,(depth + (1)),state);
} else {
}


var G__36539 = cljs.core.next.call(null,seq__36514_36532__$1);
var G__36540 = null;
var G__36541 = (0);
var G__36542 = (0);
seq__36514_36522 = G__36539;
chunk__36515_36523 = G__36540;
count__36516_36524 = G__36541;
i__36517_36525 = G__36542;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36518){
var vec__36519 = p__36518;
var seq__36520 = cljs.core.seq.call(null,vec__36519);
var first__36521 = cljs.core.first.call(null,seq__36520);
var seq__36520__$1 = cljs.core.next.call(null,seq__36520);
var x = first__36521;
var xs = seq__36520__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36519,seq__36520,first__36521,seq__36520__$1,x,xs,get_deps__$1){
return (function (p1__36505_SHARP_){
return clojure.set.difference.call(null,p1__36505_SHARP_,x);
});})(vec__36519,seq__36520,first__36521,seq__36520__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36543 = cljs.core.seq.call(null,provides);
var chunk__36544 = null;
var count__36545 = (0);
var i__36546 = (0);
while(true){
if((i__36546 < count__36545)){
var prov = cljs.core._nth.call(null,chunk__36544,i__36546);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36547_36555 = cljs.core.seq.call(null,requires);
var chunk__36548_36556 = null;
var count__36549_36557 = (0);
var i__36550_36558 = (0);
while(true){
if((i__36550_36558 < count__36549_36557)){
var req_36559 = cljs.core._nth.call(null,chunk__36548_36556,i__36550_36558);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36559,prov);


var G__36560 = seq__36547_36555;
var G__36561 = chunk__36548_36556;
var G__36562 = count__36549_36557;
var G__36563 = (i__36550_36558 + (1));
seq__36547_36555 = G__36560;
chunk__36548_36556 = G__36561;
count__36549_36557 = G__36562;
i__36550_36558 = G__36563;
continue;
} else {
var temp__5457__auto___36564 = cljs.core.seq.call(null,seq__36547_36555);
if(temp__5457__auto___36564){
var seq__36547_36565__$1 = temp__5457__auto___36564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36547_36565__$1)){
var c__4351__auto___36566 = cljs.core.chunk_first.call(null,seq__36547_36565__$1);
var G__36567 = cljs.core.chunk_rest.call(null,seq__36547_36565__$1);
var G__36568 = c__4351__auto___36566;
var G__36569 = cljs.core.count.call(null,c__4351__auto___36566);
var G__36570 = (0);
seq__36547_36555 = G__36567;
chunk__36548_36556 = G__36568;
count__36549_36557 = G__36569;
i__36550_36558 = G__36570;
continue;
} else {
var req_36571 = cljs.core.first.call(null,seq__36547_36565__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36571,prov);


var G__36572 = cljs.core.next.call(null,seq__36547_36565__$1);
var G__36573 = null;
var G__36574 = (0);
var G__36575 = (0);
seq__36547_36555 = G__36572;
chunk__36548_36556 = G__36573;
count__36549_36557 = G__36574;
i__36550_36558 = G__36575;
continue;
}
} else {
}
}
break;
}


var G__36576 = seq__36543;
var G__36577 = chunk__36544;
var G__36578 = count__36545;
var G__36579 = (i__36546 + (1));
seq__36543 = G__36576;
chunk__36544 = G__36577;
count__36545 = G__36578;
i__36546 = G__36579;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36543);
if(temp__5457__auto__){
var seq__36543__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36543__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36543__$1);
var G__36580 = cljs.core.chunk_rest.call(null,seq__36543__$1);
var G__36581 = c__4351__auto__;
var G__36582 = cljs.core.count.call(null,c__4351__auto__);
var G__36583 = (0);
seq__36543 = G__36580;
chunk__36544 = G__36581;
count__36545 = G__36582;
i__36546 = G__36583;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36543__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36551_36584 = cljs.core.seq.call(null,requires);
var chunk__36552_36585 = null;
var count__36553_36586 = (0);
var i__36554_36587 = (0);
while(true){
if((i__36554_36587 < count__36553_36586)){
var req_36588 = cljs.core._nth.call(null,chunk__36552_36585,i__36554_36587);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36588,prov);


var G__36589 = seq__36551_36584;
var G__36590 = chunk__36552_36585;
var G__36591 = count__36553_36586;
var G__36592 = (i__36554_36587 + (1));
seq__36551_36584 = G__36589;
chunk__36552_36585 = G__36590;
count__36553_36586 = G__36591;
i__36554_36587 = G__36592;
continue;
} else {
var temp__5457__auto___36593__$1 = cljs.core.seq.call(null,seq__36551_36584);
if(temp__5457__auto___36593__$1){
var seq__36551_36594__$1 = temp__5457__auto___36593__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36551_36594__$1)){
var c__4351__auto___36595 = cljs.core.chunk_first.call(null,seq__36551_36594__$1);
var G__36596 = cljs.core.chunk_rest.call(null,seq__36551_36594__$1);
var G__36597 = c__4351__auto___36595;
var G__36598 = cljs.core.count.call(null,c__4351__auto___36595);
var G__36599 = (0);
seq__36551_36584 = G__36596;
chunk__36552_36585 = G__36597;
count__36553_36586 = G__36598;
i__36554_36587 = G__36599;
continue;
} else {
var req_36600 = cljs.core.first.call(null,seq__36551_36594__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36600,prov);


var G__36601 = cljs.core.next.call(null,seq__36551_36594__$1);
var G__36602 = null;
var G__36603 = (0);
var G__36604 = (0);
seq__36551_36584 = G__36601;
chunk__36552_36585 = G__36602;
count__36553_36586 = G__36603;
i__36554_36587 = G__36604;
continue;
}
} else {
}
}
break;
}


var G__36605 = cljs.core.next.call(null,seq__36543__$1);
var G__36606 = null;
var G__36607 = (0);
var G__36608 = (0);
seq__36543 = G__36605;
chunk__36544 = G__36606;
count__36545 = G__36607;
i__36546 = G__36608;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36609_36613 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36610_36614 = null;
var count__36611_36615 = (0);
var i__36612_36616 = (0);
while(true){
if((i__36612_36616 < count__36611_36615)){
var ns_36617 = cljs.core._nth.call(null,chunk__36610_36614,i__36612_36616);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36617);


var G__36618 = seq__36609_36613;
var G__36619 = chunk__36610_36614;
var G__36620 = count__36611_36615;
var G__36621 = (i__36612_36616 + (1));
seq__36609_36613 = G__36618;
chunk__36610_36614 = G__36619;
count__36611_36615 = G__36620;
i__36612_36616 = G__36621;
continue;
} else {
var temp__5457__auto___36622 = cljs.core.seq.call(null,seq__36609_36613);
if(temp__5457__auto___36622){
var seq__36609_36623__$1 = temp__5457__auto___36622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36609_36623__$1)){
var c__4351__auto___36624 = cljs.core.chunk_first.call(null,seq__36609_36623__$1);
var G__36625 = cljs.core.chunk_rest.call(null,seq__36609_36623__$1);
var G__36626 = c__4351__auto___36624;
var G__36627 = cljs.core.count.call(null,c__4351__auto___36624);
var G__36628 = (0);
seq__36609_36613 = G__36625;
chunk__36610_36614 = G__36626;
count__36611_36615 = G__36627;
i__36612_36616 = G__36628;
continue;
} else {
var ns_36629 = cljs.core.first.call(null,seq__36609_36623__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36629);


var G__36630 = cljs.core.next.call(null,seq__36609_36623__$1);
var G__36631 = null;
var G__36632 = (0);
var G__36633 = (0);
seq__36609_36613 = G__36630;
chunk__36610_36614 = G__36631;
count__36611_36615 = G__36632;
i__36612_36616 = G__36633;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36634__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36635__i = 0, G__36635__a = new Array(arguments.length -  0);
while (G__36635__i < G__36635__a.length) {G__36635__a[G__36635__i] = arguments[G__36635__i + 0]; ++G__36635__i;}
  args = new cljs.core.IndexedSeq(G__36635__a,0,null);
} 
return G__36634__delegate.call(this,args);};
G__36634.cljs$lang$maxFixedArity = 0;
G__36634.cljs$lang$applyTo = (function (arglist__36636){
var args = cljs.core.seq(arglist__36636);
return G__36634__delegate(args);
});
G__36634.cljs$core$IFn$_invoke$arity$variadic = G__36634__delegate;
return G__36634;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36637_SHARP_,p2__36638_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36637_SHARP_)].join('')),p2__36638_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36639_SHARP_,p2__36640_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36639_SHARP_)].join(''),p2__36640_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36641 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36641.addCallback(((function (G__36641){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36641))
);

G__36641.addErrback(((function (G__36641){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36641))
);

return G__36641;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36642){if((e36642 instanceof Error)){
var e = e36642;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36642;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36643){if((e36643 instanceof Error)){
var e = e36643;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36643;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36644 = cljs.core._EQ_;
var expr__36645 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36644.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36645))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36644.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36645))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36644.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36645))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36644,expr__36645){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36644,expr__36645))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36647,callback){
var map__36648 = p__36647;
var map__36648__$1 = ((((!((map__36648 == null)))?(((((map__36648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36648):map__36648);
var file_msg = map__36648__$1;
var request_url = cljs.core.get.call(null,map__36648__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36648,map__36648__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36648,map__36648__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__){
return (function (state_36686){
var state_val_36687 = (state_36686[(1)]);
if((state_val_36687 === (7))){
var inst_36682 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36688_36714 = state_36686__$1;
(statearr_36688_36714[(2)] = inst_36682);

(statearr_36688_36714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (1))){
var state_36686__$1 = state_36686;
var statearr_36689_36715 = state_36686__$1;
(statearr_36689_36715[(2)] = null);

(statearr_36689_36715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (4))){
var inst_36652 = (state_36686[(7)]);
var inst_36652__$1 = (state_36686[(2)]);
var state_36686__$1 = (function (){var statearr_36690 = state_36686;
(statearr_36690[(7)] = inst_36652__$1);

return statearr_36690;
})();
if(cljs.core.truth_(inst_36652__$1)){
var statearr_36691_36716 = state_36686__$1;
(statearr_36691_36716[(1)] = (5));

} else {
var statearr_36692_36717 = state_36686__$1;
(statearr_36692_36717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (15))){
var inst_36667 = (state_36686[(8)]);
var inst_36665 = (state_36686[(9)]);
var inst_36669 = inst_36667.call(null,inst_36665);
var state_36686__$1 = state_36686;
var statearr_36693_36718 = state_36686__$1;
(statearr_36693_36718[(2)] = inst_36669);

(statearr_36693_36718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (13))){
var inst_36676 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36694_36719 = state_36686__$1;
(statearr_36694_36719[(2)] = inst_36676);

(statearr_36694_36719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (6))){
var state_36686__$1 = state_36686;
var statearr_36695_36720 = state_36686__$1;
(statearr_36695_36720[(2)] = null);

(statearr_36695_36720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (17))){
var inst_36673 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36696_36721 = state_36686__$1;
(statearr_36696_36721[(2)] = inst_36673);

(statearr_36696_36721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (3))){
var inst_36684 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36686__$1,inst_36684);
} else {
if((state_val_36687 === (12))){
var state_36686__$1 = state_36686;
var statearr_36697_36722 = state_36686__$1;
(statearr_36697_36722[(2)] = null);

(statearr_36697_36722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (2))){
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36687 === (11))){
var inst_36657 = (state_36686[(10)]);
var inst_36663 = figwheel.client.file_reloading.blocking_load.call(null,inst_36657);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(14),inst_36663);
} else {
if((state_val_36687 === (9))){
var inst_36657 = (state_36686[(10)]);
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36657)){
var statearr_36698_36723 = state_36686__$1;
(statearr_36698_36723[(1)] = (11));

} else {
var statearr_36699_36724 = state_36686__$1;
(statearr_36699_36724[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (5))){
var inst_36652 = (state_36686[(7)]);
var inst_36658 = (state_36686[(11)]);
var inst_36657 = cljs.core.nth.call(null,inst_36652,(0),null);
var inst_36658__$1 = cljs.core.nth.call(null,inst_36652,(1),null);
var state_36686__$1 = (function (){var statearr_36700 = state_36686;
(statearr_36700[(10)] = inst_36657);

(statearr_36700[(11)] = inst_36658__$1);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36658__$1)){
var statearr_36701_36725 = state_36686__$1;
(statearr_36701_36725[(1)] = (8));

} else {
var statearr_36702_36726 = state_36686__$1;
(statearr_36702_36726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (14))){
var inst_36657 = (state_36686[(10)]);
var inst_36667 = (state_36686[(8)]);
var inst_36665 = (state_36686[(2)]);
var inst_36666 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36667__$1 = cljs.core.get.call(null,inst_36666,inst_36657);
var state_36686__$1 = (function (){var statearr_36703 = state_36686;
(statearr_36703[(8)] = inst_36667__$1);

(statearr_36703[(9)] = inst_36665);

return statearr_36703;
})();
if(cljs.core.truth_(inst_36667__$1)){
var statearr_36704_36727 = state_36686__$1;
(statearr_36704_36727[(1)] = (15));

} else {
var statearr_36705_36728 = state_36686__$1;
(statearr_36705_36728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (16))){
var inst_36665 = (state_36686[(9)]);
var inst_36671 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36665);
var state_36686__$1 = state_36686;
var statearr_36706_36729 = state_36686__$1;
(statearr_36706_36729[(2)] = inst_36671);

(statearr_36706_36729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (10))){
var inst_36678 = (state_36686[(2)]);
var state_36686__$1 = (function (){var statearr_36707 = state_36686;
(statearr_36707[(12)] = inst_36678);

return statearr_36707;
})();
var statearr_36708_36730 = state_36686__$1;
(statearr_36708_36730[(2)] = null);

(statearr_36708_36730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (8))){
var inst_36658 = (state_36686[(11)]);
var inst_36660 = eval(inst_36658);
var state_36686__$1 = state_36686;
var statearr_36709_36731 = state_36686__$1;
(statearr_36709_36731[(2)] = inst_36660);

(statearr_36709_36731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34473__auto__))
;
return ((function (switch__34382__auto__,c__34473__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34383__auto__ = null;
var figwheel$client$file_reloading$state_machine__34383__auto____0 = (function (){
var statearr_36710 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36710[(0)] = figwheel$client$file_reloading$state_machine__34383__auto__);

(statearr_36710[(1)] = (1));

return statearr_36710;
});
var figwheel$client$file_reloading$state_machine__34383__auto____1 = (function (state_36686){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_36686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e36711){if((e36711 instanceof Object)){
var ex__34386__auto__ = e36711;
var statearr_36712_36732 = state_36686;
(statearr_36712_36732[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36733 = state_36686;
state_36686 = G__36733;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34383__auto__ = function(state_36686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34383__auto____1.call(this,state_36686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34383__auto____0;
figwheel$client$file_reloading$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34383__auto____1;
return figwheel$client$file_reloading$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__))
})();
var state__34475__auto__ = (function (){var statearr_36713 = f__34474__auto__.call(null);
(statearr_36713[(6)] = c__34473__auto__);

return statearr_36713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__))
);

return c__34473__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36735 = arguments.length;
switch (G__36735) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36737,callback){
var map__36738 = p__36737;
var map__36738__$1 = ((((!((map__36738 == null)))?(((((map__36738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36738):map__36738);
var file_msg = map__36738__$1;
var namespace = cljs.core.get.call(null,map__36738__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36738,map__36738__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36738,map__36738__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36740){
var map__36741 = p__36740;
var map__36741__$1 = ((((!((map__36741 == null)))?(((((map__36741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36741):map__36741);
var file_msg = map__36741__$1;
var namespace = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36743){
var map__36744 = p__36743;
var map__36744__$1 = ((((!((map__36744 == null)))?(((((map__36744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36744):map__36744);
var file_msg = map__36744__$1;
var namespace = cljs.core.get.call(null,map__36744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36746,callback){
var map__36747 = p__36746;
var map__36747__$1 = ((((!((map__36747 == null)))?(((((map__36747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36747):map__36747);
var file_msg = map__36747__$1;
var request_url = cljs.core.get.call(null,map__36747__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34473__auto___36797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___36797,out){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___36797,out){
return (function (state_36782){
var state_val_36783 = (state_36782[(1)]);
if((state_val_36783 === (1))){
var inst_36756 = cljs.core.seq.call(null,files);
var inst_36757 = cljs.core.first.call(null,inst_36756);
var inst_36758 = cljs.core.next.call(null,inst_36756);
var inst_36759 = files;
var state_36782__$1 = (function (){var statearr_36784 = state_36782;
(statearr_36784[(7)] = inst_36757);

(statearr_36784[(8)] = inst_36759);

(statearr_36784[(9)] = inst_36758);

return statearr_36784;
})();
var statearr_36785_36798 = state_36782__$1;
(statearr_36785_36798[(2)] = null);

(statearr_36785_36798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (2))){
var inst_36759 = (state_36782[(8)]);
var inst_36765 = (state_36782[(10)]);
var inst_36764 = cljs.core.seq.call(null,inst_36759);
var inst_36765__$1 = cljs.core.first.call(null,inst_36764);
var inst_36766 = cljs.core.next.call(null,inst_36764);
var inst_36767 = (inst_36765__$1 == null);
var inst_36768 = cljs.core.not.call(null,inst_36767);
var state_36782__$1 = (function (){var statearr_36786 = state_36782;
(statearr_36786[(10)] = inst_36765__$1);

(statearr_36786[(11)] = inst_36766);

return statearr_36786;
})();
if(inst_36768){
var statearr_36787_36799 = state_36782__$1;
(statearr_36787_36799[(1)] = (4));

} else {
var statearr_36788_36800 = state_36782__$1;
(statearr_36788_36800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (3))){
var inst_36780 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36782__$1,inst_36780);
} else {
if((state_val_36783 === (4))){
var inst_36765 = (state_36782[(10)]);
var inst_36770 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36765);
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36782__$1,(7),inst_36770);
} else {
if((state_val_36783 === (5))){
var inst_36776 = cljs.core.async.close_BANG_.call(null,out);
var state_36782__$1 = state_36782;
var statearr_36789_36801 = state_36782__$1;
(statearr_36789_36801[(2)] = inst_36776);

(statearr_36789_36801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (6))){
var inst_36778 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
var statearr_36790_36802 = state_36782__$1;
(statearr_36790_36802[(2)] = inst_36778);

(statearr_36790_36802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (7))){
var inst_36766 = (state_36782[(11)]);
var inst_36772 = (state_36782[(2)]);
var inst_36773 = cljs.core.async.put_BANG_.call(null,out,inst_36772);
var inst_36759 = inst_36766;
var state_36782__$1 = (function (){var statearr_36791 = state_36782;
(statearr_36791[(8)] = inst_36759);

(statearr_36791[(12)] = inst_36773);

return statearr_36791;
})();
var statearr_36792_36803 = state_36782__$1;
(statearr_36792_36803[(2)] = null);

(statearr_36792_36803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__34473__auto___36797,out))
;
return ((function (switch__34382__auto__,c__34473__auto___36797,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto____0 = (function (){
var statearr_36793 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36793[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto__);

(statearr_36793[(1)] = (1));

return statearr_36793;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto____1 = (function (state_36782){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_36782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e36794){if((e36794 instanceof Object)){
var ex__34386__auto__ = e36794;
var statearr_36795_36804 = state_36782;
(statearr_36795_36804[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36805 = state_36782;
state_36782 = G__36805;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto__ = function(state_36782){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto____1.call(this,state_36782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___36797,out))
})();
var state__34475__auto__ = (function (){var statearr_36796 = f__34474__auto__.call(null);
(statearr_36796[(6)] = c__34473__auto___36797);

return statearr_36796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___36797,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36806,opts){
var map__36807 = p__36806;
var map__36807__$1 = ((((!((map__36807 == null)))?(((((map__36807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36807):map__36807);
var eval_body = cljs.core.get.call(null,map__36807__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36809){var e = e36809;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36810_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36810_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36811){
var vec__36812 = p__36811;
var k = cljs.core.nth.call(null,vec__36812,(0),null);
var v = cljs.core.nth.call(null,vec__36812,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36815){
var vec__36816 = p__36815;
var k = cljs.core.nth.call(null,vec__36816,(0),null);
var v = cljs.core.nth.call(null,vec__36816,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36822,p__36823){
var map__36824 = p__36822;
var map__36824__$1 = ((((!((map__36824 == null)))?(((((map__36824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36824):map__36824);
var opts = map__36824__$1;
var before_jsload = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36825 = p__36823;
var map__36825__$1 = ((((!((map__36825 == null)))?(((((map__36825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36825):map__36825);
var msg = map__36825__$1;
var files = cljs.core.get.call(null,map__36825__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36825__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36825__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36979){
var state_val_36980 = (state_36979[(1)]);
if((state_val_36980 === (7))){
var inst_36842 = (state_36979[(7)]);
var inst_36840 = (state_36979[(8)]);
var inst_36839 = (state_36979[(9)]);
var inst_36841 = (state_36979[(10)]);
var inst_36847 = cljs.core._nth.call(null,inst_36840,inst_36842);
var inst_36848 = figwheel.client.file_reloading.eval_body.call(null,inst_36847,opts);
var inst_36849 = (inst_36842 + (1));
var tmp36981 = inst_36840;
var tmp36982 = inst_36839;
var tmp36983 = inst_36841;
var inst_36839__$1 = tmp36982;
var inst_36840__$1 = tmp36981;
var inst_36841__$1 = tmp36983;
var inst_36842__$1 = inst_36849;
var state_36979__$1 = (function (){var statearr_36984 = state_36979;
(statearr_36984[(7)] = inst_36842__$1);

(statearr_36984[(8)] = inst_36840__$1);

(statearr_36984[(11)] = inst_36848);

(statearr_36984[(9)] = inst_36839__$1);

(statearr_36984[(10)] = inst_36841__$1);

return statearr_36984;
})();
var statearr_36985_37068 = state_36979__$1;
(statearr_36985_37068[(2)] = null);

(statearr_36985_37068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (20))){
var inst_36882 = (state_36979[(12)]);
var inst_36890 = figwheel.client.file_reloading.sort_files.call(null,inst_36882);
var state_36979__$1 = state_36979;
var statearr_36986_37069 = state_36979__$1;
(statearr_36986_37069[(2)] = inst_36890);

(statearr_36986_37069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (27))){
var state_36979__$1 = state_36979;
var statearr_36987_37070 = state_36979__$1;
(statearr_36987_37070[(2)] = null);

(statearr_36987_37070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (1))){
var inst_36831 = (state_36979[(13)]);
var inst_36828 = before_jsload.call(null,files);
var inst_36829 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36830 = (function (){return ((function (inst_36831,inst_36828,inst_36829,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36819_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36819_SHARP_);
});
;})(inst_36831,inst_36828,inst_36829,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36831__$1 = cljs.core.filter.call(null,inst_36830,files);
var inst_36832 = cljs.core.not_empty.call(null,inst_36831__$1);
var state_36979__$1 = (function (){var statearr_36988 = state_36979;
(statearr_36988[(14)] = inst_36829);

(statearr_36988[(15)] = inst_36828);

(statearr_36988[(13)] = inst_36831__$1);

return statearr_36988;
})();
if(cljs.core.truth_(inst_36832)){
var statearr_36989_37071 = state_36979__$1;
(statearr_36989_37071[(1)] = (2));

} else {
var statearr_36990_37072 = state_36979__$1;
(statearr_36990_37072[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (24))){
var state_36979__$1 = state_36979;
var statearr_36991_37073 = state_36979__$1;
(statearr_36991_37073[(2)] = null);

(statearr_36991_37073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (39))){
var inst_36932 = (state_36979[(16)]);
var state_36979__$1 = state_36979;
var statearr_36992_37074 = state_36979__$1;
(statearr_36992_37074[(2)] = inst_36932);

(statearr_36992_37074[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (46))){
var inst_36974 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_36993_37075 = state_36979__$1;
(statearr_36993_37075[(2)] = inst_36974);

(statearr_36993_37075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (4))){
var inst_36876 = (state_36979[(2)]);
var inst_36877 = cljs.core.List.EMPTY;
var inst_36878 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36877);
var inst_36879 = (function (){return ((function (inst_36876,inst_36877,inst_36878,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36820_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36820_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36820_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36820_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_36876,inst_36877,inst_36878,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36880 = cljs.core.filter.call(null,inst_36879,files);
var inst_36881 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36882 = cljs.core.concat.call(null,inst_36880,inst_36881);
var state_36979__$1 = (function (){var statearr_36994 = state_36979;
(statearr_36994[(17)] = inst_36876);

(statearr_36994[(18)] = inst_36878);

(statearr_36994[(12)] = inst_36882);

return statearr_36994;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36995_37076 = state_36979__$1;
(statearr_36995_37076[(1)] = (16));

} else {
var statearr_36996_37077 = state_36979__$1;
(statearr_36996_37077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (15))){
var inst_36866 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_36997_37078 = state_36979__$1;
(statearr_36997_37078[(2)] = inst_36866);

(statearr_36997_37078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (21))){
var inst_36892 = (state_36979[(19)]);
var inst_36892__$1 = (state_36979[(2)]);
var inst_36893 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36892__$1);
var state_36979__$1 = (function (){var statearr_36998 = state_36979;
(statearr_36998[(19)] = inst_36892__$1);

return statearr_36998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36979__$1,(22),inst_36893);
} else {
if((state_val_36980 === (31))){
var inst_36977 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36979__$1,inst_36977);
} else {
if((state_val_36980 === (32))){
var inst_36932 = (state_36979[(16)]);
var inst_36937 = inst_36932.cljs$lang$protocol_mask$partition0$;
var inst_36938 = (inst_36937 & (64));
var inst_36939 = inst_36932.cljs$core$ISeq$;
var inst_36940 = (cljs.core.PROTOCOL_SENTINEL === inst_36939);
var inst_36941 = ((inst_36938) || (inst_36940));
var state_36979__$1 = state_36979;
if(cljs.core.truth_(inst_36941)){
var statearr_36999_37079 = state_36979__$1;
(statearr_36999_37079[(1)] = (35));

} else {
var statearr_37000_37080 = state_36979__$1;
(statearr_37000_37080[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (40))){
var inst_36954 = (state_36979[(20)]);
var inst_36953 = (state_36979[(2)]);
var inst_36954__$1 = cljs.core.get.call(null,inst_36953,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36955 = cljs.core.get.call(null,inst_36953,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36956 = cljs.core.not_empty.call(null,inst_36954__$1);
var state_36979__$1 = (function (){var statearr_37001 = state_36979;
(statearr_37001[(20)] = inst_36954__$1);

(statearr_37001[(21)] = inst_36955);

return statearr_37001;
})();
if(cljs.core.truth_(inst_36956)){
var statearr_37002_37081 = state_36979__$1;
(statearr_37002_37081[(1)] = (41));

} else {
var statearr_37003_37082 = state_36979__$1;
(statearr_37003_37082[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (33))){
var state_36979__$1 = state_36979;
var statearr_37004_37083 = state_36979__$1;
(statearr_37004_37083[(2)] = false);

(statearr_37004_37083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (13))){
var inst_36852 = (state_36979[(22)]);
var inst_36856 = cljs.core.chunk_first.call(null,inst_36852);
var inst_36857 = cljs.core.chunk_rest.call(null,inst_36852);
var inst_36858 = cljs.core.count.call(null,inst_36856);
var inst_36839 = inst_36857;
var inst_36840 = inst_36856;
var inst_36841 = inst_36858;
var inst_36842 = (0);
var state_36979__$1 = (function (){var statearr_37005 = state_36979;
(statearr_37005[(7)] = inst_36842);

(statearr_37005[(8)] = inst_36840);

(statearr_37005[(9)] = inst_36839);

(statearr_37005[(10)] = inst_36841);

return statearr_37005;
})();
var statearr_37006_37084 = state_36979__$1;
(statearr_37006_37084[(2)] = null);

(statearr_37006_37084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (22))){
var inst_36900 = (state_36979[(23)]);
var inst_36895 = (state_36979[(24)]);
var inst_36892 = (state_36979[(19)]);
var inst_36896 = (state_36979[(25)]);
var inst_36895__$1 = (state_36979[(2)]);
var inst_36896__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36895__$1);
var inst_36897 = (function (){var all_files = inst_36892;
var res_SINGLEQUOTE_ = inst_36895__$1;
var res = inst_36896__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36900,inst_36895,inst_36892,inst_36896,inst_36895__$1,inst_36896__$1,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36821_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36821_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36900,inst_36895,inst_36892,inst_36896,inst_36895__$1,inst_36896__$1,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36898 = cljs.core.filter.call(null,inst_36897,inst_36895__$1);
var inst_36899 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36900__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36899);
var inst_36901 = cljs.core.not_empty.call(null,inst_36900__$1);
var state_36979__$1 = (function (){var statearr_37007 = state_36979;
(statearr_37007[(26)] = inst_36898);

(statearr_37007[(23)] = inst_36900__$1);

(statearr_37007[(24)] = inst_36895__$1);

(statearr_37007[(25)] = inst_36896__$1);

return statearr_37007;
})();
if(cljs.core.truth_(inst_36901)){
var statearr_37008_37085 = state_36979__$1;
(statearr_37008_37085[(1)] = (23));

} else {
var statearr_37009_37086 = state_36979__$1;
(statearr_37009_37086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (36))){
var state_36979__$1 = state_36979;
var statearr_37010_37087 = state_36979__$1;
(statearr_37010_37087[(2)] = false);

(statearr_37010_37087[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (41))){
var inst_36954 = (state_36979[(20)]);
var inst_36958 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36959 = cljs.core.map.call(null,inst_36958,inst_36954);
var inst_36960 = cljs.core.pr_str.call(null,inst_36959);
var inst_36961 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36960)].join('');
var inst_36962 = figwheel.client.utils.log.call(null,inst_36961);
var state_36979__$1 = state_36979;
var statearr_37011_37088 = state_36979__$1;
(statearr_37011_37088[(2)] = inst_36962);

(statearr_37011_37088[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (43))){
var inst_36955 = (state_36979[(21)]);
var inst_36965 = (state_36979[(2)]);
var inst_36966 = cljs.core.not_empty.call(null,inst_36955);
var state_36979__$1 = (function (){var statearr_37012 = state_36979;
(statearr_37012[(27)] = inst_36965);

return statearr_37012;
})();
if(cljs.core.truth_(inst_36966)){
var statearr_37013_37089 = state_36979__$1;
(statearr_37013_37089[(1)] = (44));

} else {
var statearr_37014_37090 = state_36979__$1;
(statearr_37014_37090[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (29))){
var inst_36898 = (state_36979[(26)]);
var inst_36900 = (state_36979[(23)]);
var inst_36895 = (state_36979[(24)]);
var inst_36932 = (state_36979[(16)]);
var inst_36892 = (state_36979[(19)]);
var inst_36896 = (state_36979[(25)]);
var inst_36928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36931 = (function (){var all_files = inst_36892;
var res_SINGLEQUOTE_ = inst_36895;
var res = inst_36896;
var files_not_loaded = inst_36898;
var dependencies_that_loaded = inst_36900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36932,inst_36892,inst_36896,inst_36928,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36930){
var map__37015 = p__36930;
var map__37015__$1 = ((((!((map__37015 == null)))?(((((map__37015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37015):map__37015);
var namespace = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36932,inst_36892,inst_36896,inst_36928,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36932__$1 = cljs.core.group_by.call(null,inst_36931,inst_36898);
var inst_36934 = (inst_36932__$1 == null);
var inst_36935 = cljs.core.not.call(null,inst_36934);
var state_36979__$1 = (function (){var statearr_37017 = state_36979;
(statearr_37017[(16)] = inst_36932__$1);

(statearr_37017[(28)] = inst_36928);

return statearr_37017;
})();
if(inst_36935){
var statearr_37018_37091 = state_36979__$1;
(statearr_37018_37091[(1)] = (32));

} else {
var statearr_37019_37092 = state_36979__$1;
(statearr_37019_37092[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (44))){
var inst_36955 = (state_36979[(21)]);
var inst_36968 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36955);
var inst_36969 = cljs.core.pr_str.call(null,inst_36968);
var inst_36970 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36969)].join('');
var inst_36971 = figwheel.client.utils.log.call(null,inst_36970);
var state_36979__$1 = state_36979;
var statearr_37020_37093 = state_36979__$1;
(statearr_37020_37093[(2)] = inst_36971);

(statearr_37020_37093[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (6))){
var inst_36873 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_37021_37094 = state_36979__$1;
(statearr_37021_37094[(2)] = inst_36873);

(statearr_37021_37094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (28))){
var inst_36898 = (state_36979[(26)]);
var inst_36925 = (state_36979[(2)]);
var inst_36926 = cljs.core.not_empty.call(null,inst_36898);
var state_36979__$1 = (function (){var statearr_37022 = state_36979;
(statearr_37022[(29)] = inst_36925);

return statearr_37022;
})();
if(cljs.core.truth_(inst_36926)){
var statearr_37023_37095 = state_36979__$1;
(statearr_37023_37095[(1)] = (29));

} else {
var statearr_37024_37096 = state_36979__$1;
(statearr_37024_37096[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (25))){
var inst_36896 = (state_36979[(25)]);
var inst_36912 = (state_36979[(2)]);
var inst_36913 = cljs.core.not_empty.call(null,inst_36896);
var state_36979__$1 = (function (){var statearr_37025 = state_36979;
(statearr_37025[(30)] = inst_36912);

return statearr_37025;
})();
if(cljs.core.truth_(inst_36913)){
var statearr_37026_37097 = state_36979__$1;
(statearr_37026_37097[(1)] = (26));

} else {
var statearr_37027_37098 = state_36979__$1;
(statearr_37027_37098[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (34))){
var inst_36948 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
if(cljs.core.truth_(inst_36948)){
var statearr_37028_37099 = state_36979__$1;
(statearr_37028_37099[(1)] = (38));

} else {
var statearr_37029_37100 = state_36979__$1;
(statearr_37029_37100[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (17))){
var state_36979__$1 = state_36979;
var statearr_37030_37101 = state_36979__$1;
(statearr_37030_37101[(2)] = recompile_dependents);

(statearr_37030_37101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (3))){
var state_36979__$1 = state_36979;
var statearr_37031_37102 = state_36979__$1;
(statearr_37031_37102[(2)] = null);

(statearr_37031_37102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (12))){
var inst_36869 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_37032_37103 = state_36979__$1;
(statearr_37032_37103[(2)] = inst_36869);

(statearr_37032_37103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (2))){
var inst_36831 = (state_36979[(13)]);
var inst_36838 = cljs.core.seq.call(null,inst_36831);
var inst_36839 = inst_36838;
var inst_36840 = null;
var inst_36841 = (0);
var inst_36842 = (0);
var state_36979__$1 = (function (){var statearr_37033 = state_36979;
(statearr_37033[(7)] = inst_36842);

(statearr_37033[(8)] = inst_36840);

(statearr_37033[(9)] = inst_36839);

(statearr_37033[(10)] = inst_36841);

return statearr_37033;
})();
var statearr_37034_37104 = state_36979__$1;
(statearr_37034_37104[(2)] = null);

(statearr_37034_37104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (23))){
var inst_36898 = (state_36979[(26)]);
var inst_36900 = (state_36979[(23)]);
var inst_36895 = (state_36979[(24)]);
var inst_36892 = (state_36979[(19)]);
var inst_36896 = (state_36979[(25)]);
var inst_36903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36905 = (function (){var all_files = inst_36892;
var res_SINGLEQUOTE_ = inst_36895;
var res = inst_36896;
var files_not_loaded = inst_36898;
var dependencies_that_loaded = inst_36900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36892,inst_36896,inst_36903,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36904){
var map__37035 = p__36904;
var map__37035__$1 = ((((!((map__37035 == null)))?(((((map__37035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37035):map__37035);
var request_url = cljs.core.get.call(null,map__37035__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36892,inst_36896,inst_36903,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36906 = cljs.core.reverse.call(null,inst_36900);
var inst_36907 = cljs.core.map.call(null,inst_36905,inst_36906);
var inst_36908 = cljs.core.pr_str.call(null,inst_36907);
var inst_36909 = figwheel.client.utils.log.call(null,inst_36908);
var state_36979__$1 = (function (){var statearr_37037 = state_36979;
(statearr_37037[(31)] = inst_36903);

return statearr_37037;
})();
var statearr_37038_37105 = state_36979__$1;
(statearr_37038_37105[(2)] = inst_36909);

(statearr_37038_37105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (35))){
var state_36979__$1 = state_36979;
var statearr_37039_37106 = state_36979__$1;
(statearr_37039_37106[(2)] = true);

(statearr_37039_37106[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (19))){
var inst_36882 = (state_36979[(12)]);
var inst_36888 = figwheel.client.file_reloading.expand_files.call(null,inst_36882);
var state_36979__$1 = state_36979;
var statearr_37040_37107 = state_36979__$1;
(statearr_37040_37107[(2)] = inst_36888);

(statearr_37040_37107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (11))){
var state_36979__$1 = state_36979;
var statearr_37041_37108 = state_36979__$1;
(statearr_37041_37108[(2)] = null);

(statearr_37041_37108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (9))){
var inst_36871 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_37042_37109 = state_36979__$1;
(statearr_37042_37109[(2)] = inst_36871);

(statearr_37042_37109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (5))){
var inst_36842 = (state_36979[(7)]);
var inst_36841 = (state_36979[(10)]);
var inst_36844 = (inst_36842 < inst_36841);
var inst_36845 = inst_36844;
var state_36979__$1 = state_36979;
if(cljs.core.truth_(inst_36845)){
var statearr_37043_37110 = state_36979__$1;
(statearr_37043_37110[(1)] = (7));

} else {
var statearr_37044_37111 = state_36979__$1;
(statearr_37044_37111[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (14))){
var inst_36852 = (state_36979[(22)]);
var inst_36861 = cljs.core.first.call(null,inst_36852);
var inst_36862 = figwheel.client.file_reloading.eval_body.call(null,inst_36861,opts);
var inst_36863 = cljs.core.next.call(null,inst_36852);
var inst_36839 = inst_36863;
var inst_36840 = null;
var inst_36841 = (0);
var inst_36842 = (0);
var state_36979__$1 = (function (){var statearr_37045 = state_36979;
(statearr_37045[(7)] = inst_36842);

(statearr_37045[(8)] = inst_36840);

(statearr_37045[(9)] = inst_36839);

(statearr_37045[(10)] = inst_36841);

(statearr_37045[(32)] = inst_36862);

return statearr_37045;
})();
var statearr_37046_37112 = state_36979__$1;
(statearr_37046_37112[(2)] = null);

(statearr_37046_37112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (45))){
var state_36979__$1 = state_36979;
var statearr_37047_37113 = state_36979__$1;
(statearr_37047_37113[(2)] = null);

(statearr_37047_37113[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (26))){
var inst_36898 = (state_36979[(26)]);
var inst_36900 = (state_36979[(23)]);
var inst_36895 = (state_36979[(24)]);
var inst_36892 = (state_36979[(19)]);
var inst_36896 = (state_36979[(25)]);
var inst_36915 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36917 = (function (){var all_files = inst_36892;
var res_SINGLEQUOTE_ = inst_36895;
var res = inst_36896;
var files_not_loaded = inst_36898;
var dependencies_that_loaded = inst_36900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36892,inst_36896,inst_36915,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36916){
var map__37048 = p__36916;
var map__37048__$1 = ((((!((map__37048 == null)))?(((((map__37048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37048):map__37048);
var namespace = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36892,inst_36896,inst_36915,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36918 = cljs.core.map.call(null,inst_36917,inst_36896);
var inst_36919 = cljs.core.pr_str.call(null,inst_36918);
var inst_36920 = figwheel.client.utils.log.call(null,inst_36919);
var inst_36921 = (function (){var all_files = inst_36892;
var res_SINGLEQUOTE_ = inst_36895;
var res = inst_36896;
var files_not_loaded = inst_36898;
var dependencies_that_loaded = inst_36900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36892,inst_36896,inst_36915,inst_36917,inst_36918,inst_36919,inst_36920,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36898,inst_36900,inst_36895,inst_36892,inst_36896,inst_36915,inst_36917,inst_36918,inst_36919,inst_36920,state_val_36980,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36922 = setTimeout(inst_36921,(10));
var state_36979__$1 = (function (){var statearr_37050 = state_36979;
(statearr_37050[(33)] = inst_36915);

(statearr_37050[(34)] = inst_36920);

return statearr_37050;
})();
var statearr_37051_37114 = state_36979__$1;
(statearr_37051_37114[(2)] = inst_36922);

(statearr_37051_37114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (16))){
var state_36979__$1 = state_36979;
var statearr_37052_37115 = state_36979__$1;
(statearr_37052_37115[(2)] = reload_dependents);

(statearr_37052_37115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (38))){
var inst_36932 = (state_36979[(16)]);
var inst_36950 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36932);
var state_36979__$1 = state_36979;
var statearr_37053_37116 = state_36979__$1;
(statearr_37053_37116[(2)] = inst_36950);

(statearr_37053_37116[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (30))){
var state_36979__$1 = state_36979;
var statearr_37054_37117 = state_36979__$1;
(statearr_37054_37117[(2)] = null);

(statearr_37054_37117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (10))){
var inst_36852 = (state_36979[(22)]);
var inst_36854 = cljs.core.chunked_seq_QMARK_.call(null,inst_36852);
var state_36979__$1 = state_36979;
if(inst_36854){
var statearr_37055_37118 = state_36979__$1;
(statearr_37055_37118[(1)] = (13));

} else {
var statearr_37056_37119 = state_36979__$1;
(statearr_37056_37119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (18))){
var inst_36886 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
if(cljs.core.truth_(inst_36886)){
var statearr_37057_37120 = state_36979__$1;
(statearr_37057_37120[(1)] = (19));

} else {
var statearr_37058_37121 = state_36979__$1;
(statearr_37058_37121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (42))){
var state_36979__$1 = state_36979;
var statearr_37059_37122 = state_36979__$1;
(statearr_37059_37122[(2)] = null);

(statearr_37059_37122[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (37))){
var inst_36945 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_37060_37123 = state_36979__$1;
(statearr_37060_37123[(2)] = inst_36945);

(statearr_37060_37123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (8))){
var inst_36852 = (state_36979[(22)]);
var inst_36839 = (state_36979[(9)]);
var inst_36852__$1 = cljs.core.seq.call(null,inst_36839);
var state_36979__$1 = (function (){var statearr_37061 = state_36979;
(statearr_37061[(22)] = inst_36852__$1);

return statearr_37061;
})();
if(inst_36852__$1){
var statearr_37062_37124 = state_36979__$1;
(statearr_37062_37124[(1)] = (10));

} else {
var statearr_37063_37125 = state_36979__$1;
(statearr_37063_37125[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34382__auto__,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto____0 = (function (){
var statearr_37064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37064[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto__);

(statearr_37064[(1)] = (1));

return statearr_37064;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto____1 = (function (state_36979){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_36979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e37065){if((e37065 instanceof Object)){
var ex__34386__auto__ = e37065;
var statearr_37066_37126 = state_36979;
(statearr_37066_37126[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37127 = state_36979;
state_36979 = G__37127;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto__ = function(state_36979){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto____1.call(this,state_36979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34475__auto__ = (function (){var statearr_37067 = f__34474__auto__.call(null);
(statearr_37067[(6)] = c__34473__auto__);

return statearr_37067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__,map__36824,map__36824__$1,opts,before_jsload,on_jsload,reload_dependents,map__36825,map__36825__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34473__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37130,link){
var map__37131 = p__37130;
var map__37131__$1 = ((((!((map__37131 == null)))?(((((map__37131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37131):map__37131);
var file = cljs.core.get.call(null,map__37131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37131,map__37131__$1,file){
return (function (p1__37128_SHARP_,p2__37129_SHARP_){
if(cljs.core._EQ_.call(null,p1__37128_SHARP_,p2__37129_SHARP_)){
return p1__37128_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37131,map__37131__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37134){
var map__37135 = p__37134;
var map__37135__$1 = ((((!((map__37135 == null)))?(((((map__37135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37135):map__37135);
var match_length = cljs.core.get.call(null,map__37135__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37135__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37133_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37133_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37137_SHARP_,p2__37138_SHARP_){
return cljs.core.assoc.call(null,p1__37137_SHARP_,cljs.core.get.call(null,p2__37138_SHARP_,key),p2__37138_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37139 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37139);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37139);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37140,p__37141){
var map__37142 = p__37140;
var map__37142__$1 = ((((!((map__37142 == null)))?(((((map__37142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37142):map__37142);
var on_cssload = cljs.core.get.call(null,map__37142__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37143 = p__37141;
var map__37143__$1 = ((((!((map__37143 == null)))?(((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37143):map__37143);
var files_msg = map__37143__$1;
var files = cljs.core.get.call(null,map__37143__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1551586189206
