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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45051_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45051_SHARP_));
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
var seq__45052 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45053 = null;
var count__45054 = (0);
var i__45055 = (0);
while(true){
if((i__45055 < count__45054)){
var n = cljs.core._nth.call(null,chunk__45053,i__45055);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45056 = seq__45052;
var G__45057 = chunk__45053;
var G__45058 = count__45054;
var G__45059 = (i__45055 + (1));
seq__45052 = G__45056;
chunk__45053 = G__45057;
count__45054 = G__45058;
i__45055 = G__45059;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45052);
if(temp__5457__auto__){
var seq__45052__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45052__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__45052__$1);
var G__45060 = cljs.core.chunk_rest.call(null,seq__45052__$1);
var G__45061 = c__4351__auto__;
var G__45062 = cljs.core.count.call(null,c__4351__auto__);
var G__45063 = (0);
seq__45052 = G__45060;
chunk__45053 = G__45061;
count__45054 = G__45062;
i__45055 = G__45063;
continue;
} else {
var n = cljs.core.first.call(null,seq__45052__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45064 = cljs.core.next.call(null,seq__45052__$1);
var G__45065 = null;
var G__45066 = (0);
var G__45067 = (0);
seq__45052 = G__45064;
chunk__45053 = G__45065;
count__45054 = G__45066;
i__45055 = G__45067;
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
return cljs.core.some.call(null,(function (p__45068){
var vec__45069 = p__45068;
var _ = cljs.core.nth.call(null,vec__45069,(0),null);
var v = cljs.core.nth.call(null,vec__45069,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__45072){
var vec__45073 = p__45072;
var k = cljs.core.nth.call(null,vec__45073,(0),null);
var v = cljs.core.nth.call(null,vec__45073,(1),null);
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

var seq__45085_45093 = cljs.core.seq.call(null,deps);
var chunk__45086_45094 = null;
var count__45087_45095 = (0);
var i__45088_45096 = (0);
while(true){
if((i__45088_45096 < count__45087_45095)){
var dep_45097 = cljs.core._nth.call(null,chunk__45086_45094,i__45088_45096);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_45097;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45097));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45097,(depth + (1)),state);
} else {
}


var G__45098 = seq__45085_45093;
var G__45099 = chunk__45086_45094;
var G__45100 = count__45087_45095;
var G__45101 = (i__45088_45096 + (1));
seq__45085_45093 = G__45098;
chunk__45086_45094 = G__45099;
count__45087_45095 = G__45100;
i__45088_45096 = G__45101;
continue;
} else {
var temp__5457__auto___45102 = cljs.core.seq.call(null,seq__45085_45093);
if(temp__5457__auto___45102){
var seq__45085_45103__$1 = temp__5457__auto___45102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45085_45103__$1)){
var c__4351__auto___45104 = cljs.core.chunk_first.call(null,seq__45085_45103__$1);
var G__45105 = cljs.core.chunk_rest.call(null,seq__45085_45103__$1);
var G__45106 = c__4351__auto___45104;
var G__45107 = cljs.core.count.call(null,c__4351__auto___45104);
var G__45108 = (0);
seq__45085_45093 = G__45105;
chunk__45086_45094 = G__45106;
count__45087_45095 = G__45107;
i__45088_45096 = G__45108;
continue;
} else {
var dep_45109 = cljs.core.first.call(null,seq__45085_45103__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_45109;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45109));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45109,(depth + (1)),state);
} else {
}


var G__45110 = cljs.core.next.call(null,seq__45085_45103__$1);
var G__45111 = null;
var G__45112 = (0);
var G__45113 = (0);
seq__45085_45093 = G__45110;
chunk__45086_45094 = G__45111;
count__45087_45095 = G__45112;
i__45088_45096 = G__45113;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45089){
var vec__45090 = p__45089;
var seq__45091 = cljs.core.seq.call(null,vec__45090);
var first__45092 = cljs.core.first.call(null,seq__45091);
var seq__45091__$1 = cljs.core.next.call(null,seq__45091);
var x = first__45092;
var xs = seq__45091__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45090,seq__45091,first__45092,seq__45091__$1,x,xs,get_deps__$1){
return (function (p1__45076_SHARP_){
return clojure.set.difference.call(null,p1__45076_SHARP_,x);
});})(vec__45090,seq__45091,first__45092,seq__45091__$1,x,xs,get_deps__$1))
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
var seq__45114 = cljs.core.seq.call(null,provides);
var chunk__45115 = null;
var count__45116 = (0);
var i__45117 = (0);
while(true){
if((i__45117 < count__45116)){
var prov = cljs.core._nth.call(null,chunk__45115,i__45117);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45118_45126 = cljs.core.seq.call(null,requires);
var chunk__45119_45127 = null;
var count__45120_45128 = (0);
var i__45121_45129 = (0);
while(true){
if((i__45121_45129 < count__45120_45128)){
var req_45130 = cljs.core._nth.call(null,chunk__45119_45127,i__45121_45129);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45130,prov);


var G__45131 = seq__45118_45126;
var G__45132 = chunk__45119_45127;
var G__45133 = count__45120_45128;
var G__45134 = (i__45121_45129 + (1));
seq__45118_45126 = G__45131;
chunk__45119_45127 = G__45132;
count__45120_45128 = G__45133;
i__45121_45129 = G__45134;
continue;
} else {
var temp__5457__auto___45135 = cljs.core.seq.call(null,seq__45118_45126);
if(temp__5457__auto___45135){
var seq__45118_45136__$1 = temp__5457__auto___45135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45118_45136__$1)){
var c__4351__auto___45137 = cljs.core.chunk_first.call(null,seq__45118_45136__$1);
var G__45138 = cljs.core.chunk_rest.call(null,seq__45118_45136__$1);
var G__45139 = c__4351__auto___45137;
var G__45140 = cljs.core.count.call(null,c__4351__auto___45137);
var G__45141 = (0);
seq__45118_45126 = G__45138;
chunk__45119_45127 = G__45139;
count__45120_45128 = G__45140;
i__45121_45129 = G__45141;
continue;
} else {
var req_45142 = cljs.core.first.call(null,seq__45118_45136__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45142,prov);


var G__45143 = cljs.core.next.call(null,seq__45118_45136__$1);
var G__45144 = null;
var G__45145 = (0);
var G__45146 = (0);
seq__45118_45126 = G__45143;
chunk__45119_45127 = G__45144;
count__45120_45128 = G__45145;
i__45121_45129 = G__45146;
continue;
}
} else {
}
}
break;
}


var G__45147 = seq__45114;
var G__45148 = chunk__45115;
var G__45149 = count__45116;
var G__45150 = (i__45117 + (1));
seq__45114 = G__45147;
chunk__45115 = G__45148;
count__45116 = G__45149;
i__45117 = G__45150;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45114);
if(temp__5457__auto__){
var seq__45114__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45114__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__45114__$1);
var G__45151 = cljs.core.chunk_rest.call(null,seq__45114__$1);
var G__45152 = c__4351__auto__;
var G__45153 = cljs.core.count.call(null,c__4351__auto__);
var G__45154 = (0);
seq__45114 = G__45151;
chunk__45115 = G__45152;
count__45116 = G__45153;
i__45117 = G__45154;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45114__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45122_45155 = cljs.core.seq.call(null,requires);
var chunk__45123_45156 = null;
var count__45124_45157 = (0);
var i__45125_45158 = (0);
while(true){
if((i__45125_45158 < count__45124_45157)){
var req_45159 = cljs.core._nth.call(null,chunk__45123_45156,i__45125_45158);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45159,prov);


var G__45160 = seq__45122_45155;
var G__45161 = chunk__45123_45156;
var G__45162 = count__45124_45157;
var G__45163 = (i__45125_45158 + (1));
seq__45122_45155 = G__45160;
chunk__45123_45156 = G__45161;
count__45124_45157 = G__45162;
i__45125_45158 = G__45163;
continue;
} else {
var temp__5457__auto___45164__$1 = cljs.core.seq.call(null,seq__45122_45155);
if(temp__5457__auto___45164__$1){
var seq__45122_45165__$1 = temp__5457__auto___45164__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45122_45165__$1)){
var c__4351__auto___45166 = cljs.core.chunk_first.call(null,seq__45122_45165__$1);
var G__45167 = cljs.core.chunk_rest.call(null,seq__45122_45165__$1);
var G__45168 = c__4351__auto___45166;
var G__45169 = cljs.core.count.call(null,c__4351__auto___45166);
var G__45170 = (0);
seq__45122_45155 = G__45167;
chunk__45123_45156 = G__45168;
count__45124_45157 = G__45169;
i__45125_45158 = G__45170;
continue;
} else {
var req_45171 = cljs.core.first.call(null,seq__45122_45165__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45171,prov);


var G__45172 = cljs.core.next.call(null,seq__45122_45165__$1);
var G__45173 = null;
var G__45174 = (0);
var G__45175 = (0);
seq__45122_45155 = G__45172;
chunk__45123_45156 = G__45173;
count__45124_45157 = G__45174;
i__45125_45158 = G__45175;
continue;
}
} else {
}
}
break;
}


var G__45176 = cljs.core.next.call(null,seq__45114__$1);
var G__45177 = null;
var G__45178 = (0);
var G__45179 = (0);
seq__45114 = G__45176;
chunk__45115 = G__45177;
count__45116 = G__45178;
i__45117 = G__45179;
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
var seq__45180_45184 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45181_45185 = null;
var count__45182_45186 = (0);
var i__45183_45187 = (0);
while(true){
if((i__45183_45187 < count__45182_45186)){
var ns_45188 = cljs.core._nth.call(null,chunk__45181_45185,i__45183_45187);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45188);


var G__45189 = seq__45180_45184;
var G__45190 = chunk__45181_45185;
var G__45191 = count__45182_45186;
var G__45192 = (i__45183_45187 + (1));
seq__45180_45184 = G__45189;
chunk__45181_45185 = G__45190;
count__45182_45186 = G__45191;
i__45183_45187 = G__45192;
continue;
} else {
var temp__5457__auto___45193 = cljs.core.seq.call(null,seq__45180_45184);
if(temp__5457__auto___45193){
var seq__45180_45194__$1 = temp__5457__auto___45193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45180_45194__$1)){
var c__4351__auto___45195 = cljs.core.chunk_first.call(null,seq__45180_45194__$1);
var G__45196 = cljs.core.chunk_rest.call(null,seq__45180_45194__$1);
var G__45197 = c__4351__auto___45195;
var G__45198 = cljs.core.count.call(null,c__4351__auto___45195);
var G__45199 = (0);
seq__45180_45184 = G__45196;
chunk__45181_45185 = G__45197;
count__45182_45186 = G__45198;
i__45183_45187 = G__45199;
continue;
} else {
var ns_45200 = cljs.core.first.call(null,seq__45180_45194__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45200);


var G__45201 = cljs.core.next.call(null,seq__45180_45194__$1);
var G__45202 = null;
var G__45203 = (0);
var G__45204 = (0);
seq__45180_45184 = G__45201;
chunk__45181_45185 = G__45202;
count__45182_45186 = G__45203;
i__45183_45187 = G__45204;
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
var G__45205__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45206__i = 0, G__45206__a = new Array(arguments.length -  0);
while (G__45206__i < G__45206__a.length) {G__45206__a[G__45206__i] = arguments[G__45206__i + 0]; ++G__45206__i;}
  args = new cljs.core.IndexedSeq(G__45206__a,0,null);
} 
return G__45205__delegate.call(this,args);};
G__45205.cljs$lang$maxFixedArity = 0;
G__45205.cljs$lang$applyTo = (function (arglist__45207){
var args = cljs.core.seq(arglist__45207);
return G__45205__delegate(args);
});
G__45205.cljs$core$IFn$_invoke$arity$variadic = G__45205__delegate;
return G__45205;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__45208_SHARP_,p2__45209_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45208_SHARP_)].join('')),p2__45209_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__45210_SHARP_,p2__45211_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45210_SHARP_)].join(''),p2__45211_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45212 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45212.addCallback(((function (G__45212){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45212))
);

G__45212.addErrback(((function (G__45212){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45212))
);

return G__45212;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45213){if((e45213 instanceof Error)){
var e = e45213;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45213;

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
}catch (e45214){if((e45214 instanceof Error)){
var e = e45214;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45214;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45215 = cljs.core._EQ_;
var expr__45216 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45215.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45216))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__45215.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45216))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__45215.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45216))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__45215,expr__45216){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45215,expr__45216))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45218,callback){
var map__45219 = p__45218;
var map__45219__$1 = ((((!((map__45219 == null)))?(((((map__45219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45219):map__45219);
var file_msg = map__45219__$1;
var request_url = cljs.core.get.call(null,map__45219__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__45219,map__45219__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45219,map__45219__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__){
return (function (state_45257){
var state_val_45258 = (state_45257[(1)]);
if((state_val_45258 === (7))){
var inst_45253 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45259_45285 = state_45257__$1;
(statearr_45259_45285[(2)] = inst_45253);

(statearr_45259_45285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (1))){
var state_45257__$1 = state_45257;
var statearr_45260_45286 = state_45257__$1;
(statearr_45260_45286[(2)] = null);

(statearr_45260_45286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (4))){
var inst_45223 = (state_45257[(7)]);
var inst_45223__$1 = (state_45257[(2)]);
var state_45257__$1 = (function (){var statearr_45261 = state_45257;
(statearr_45261[(7)] = inst_45223__$1);

return statearr_45261;
})();
if(cljs.core.truth_(inst_45223__$1)){
var statearr_45262_45287 = state_45257__$1;
(statearr_45262_45287[(1)] = (5));

} else {
var statearr_45263_45288 = state_45257__$1;
(statearr_45263_45288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (15))){
var inst_45238 = (state_45257[(8)]);
var inst_45236 = (state_45257[(9)]);
var inst_45240 = inst_45238.call(null,inst_45236);
var state_45257__$1 = state_45257;
var statearr_45264_45289 = state_45257__$1;
(statearr_45264_45289[(2)] = inst_45240);

(statearr_45264_45289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (13))){
var inst_45247 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45265_45290 = state_45257__$1;
(statearr_45265_45290[(2)] = inst_45247);

(statearr_45265_45290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (6))){
var state_45257__$1 = state_45257;
var statearr_45266_45291 = state_45257__$1;
(statearr_45266_45291[(2)] = null);

(statearr_45266_45291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (17))){
var inst_45244 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45267_45292 = state_45257__$1;
(statearr_45267_45292[(2)] = inst_45244);

(statearr_45267_45292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (3))){
var inst_45255 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45257__$1,inst_45255);
} else {
if((state_val_45258 === (12))){
var state_45257__$1 = state_45257;
var statearr_45268_45293 = state_45257__$1;
(statearr_45268_45293[(2)] = null);

(statearr_45268_45293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (2))){
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45257__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45258 === (11))){
var inst_45228 = (state_45257[(10)]);
var inst_45234 = figwheel.client.file_reloading.blocking_load.call(null,inst_45228);
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45257__$1,(14),inst_45234);
} else {
if((state_val_45258 === (9))){
var inst_45228 = (state_45257[(10)]);
var state_45257__$1 = state_45257;
if(cljs.core.truth_(inst_45228)){
var statearr_45269_45294 = state_45257__$1;
(statearr_45269_45294[(1)] = (11));

} else {
var statearr_45270_45295 = state_45257__$1;
(statearr_45270_45295[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (5))){
var inst_45223 = (state_45257[(7)]);
var inst_45229 = (state_45257[(11)]);
var inst_45228 = cljs.core.nth.call(null,inst_45223,(0),null);
var inst_45229__$1 = cljs.core.nth.call(null,inst_45223,(1),null);
var state_45257__$1 = (function (){var statearr_45271 = state_45257;
(statearr_45271[(10)] = inst_45228);

(statearr_45271[(11)] = inst_45229__$1);

return statearr_45271;
})();
if(cljs.core.truth_(inst_45229__$1)){
var statearr_45272_45296 = state_45257__$1;
(statearr_45272_45296[(1)] = (8));

} else {
var statearr_45273_45297 = state_45257__$1;
(statearr_45273_45297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (14))){
var inst_45238 = (state_45257[(8)]);
var inst_45228 = (state_45257[(10)]);
var inst_45236 = (state_45257[(2)]);
var inst_45237 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45238__$1 = cljs.core.get.call(null,inst_45237,inst_45228);
var state_45257__$1 = (function (){var statearr_45274 = state_45257;
(statearr_45274[(8)] = inst_45238__$1);

(statearr_45274[(9)] = inst_45236);

return statearr_45274;
})();
if(cljs.core.truth_(inst_45238__$1)){
var statearr_45275_45298 = state_45257__$1;
(statearr_45275_45298[(1)] = (15));

} else {
var statearr_45276_45299 = state_45257__$1;
(statearr_45276_45299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (16))){
var inst_45236 = (state_45257[(9)]);
var inst_45242 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45236);
var state_45257__$1 = state_45257;
var statearr_45277_45300 = state_45257__$1;
(statearr_45277_45300[(2)] = inst_45242);

(statearr_45277_45300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (10))){
var inst_45249 = (state_45257[(2)]);
var state_45257__$1 = (function (){var statearr_45278 = state_45257;
(statearr_45278[(12)] = inst_45249);

return statearr_45278;
})();
var statearr_45279_45301 = state_45257__$1;
(statearr_45279_45301[(2)] = null);

(statearr_45279_45301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (8))){
var inst_45229 = (state_45257[(11)]);
var inst_45231 = eval(inst_45229);
var state_45257__$1 = state_45257;
var statearr_45280_45302 = state_45257__$1;
(statearr_45280_45302[(2)] = inst_45231);

(statearr_45280_45302[(1)] = (10));


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
});})(c__38236__auto__))
;
return ((function (switch__38077__auto__,c__38236__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38078__auto__ = null;
var figwheel$client$file_reloading$state_machine__38078__auto____0 = (function (){
var statearr_45281 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45281[(0)] = figwheel$client$file_reloading$state_machine__38078__auto__);

(statearr_45281[(1)] = (1));

return statearr_45281;
});
var figwheel$client$file_reloading$state_machine__38078__auto____1 = (function (state_45257){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_45257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e45282){if((e45282 instanceof Object)){
var ex__38081__auto__ = e45282;
var statearr_45283_45303 = state_45257;
(statearr_45283_45303[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45304 = state_45257;
state_45257 = G__45304;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38078__auto__ = function(state_45257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38078__auto____1.call(this,state_45257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38078__auto____0;
figwheel$client$file_reloading$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38078__auto____1;
return figwheel$client$file_reloading$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__))
})();
var state__38238__auto__ = (function (){var statearr_45284 = f__38237__auto__.call(null);
(statearr_45284[(6)] = c__38236__auto__);

return statearr_45284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__))
);

return c__38236__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__45306 = arguments.length;
switch (G__45306) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45308,callback){
var map__45309 = p__45308;
var map__45309__$1 = ((((!((map__45309 == null)))?(((((map__45309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45309):map__45309);
var file_msg = map__45309__$1;
var namespace = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45309,map__45309__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45309,map__45309__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45311){
var map__45312 = p__45311;
var map__45312__$1 = ((((!((map__45312 == null)))?(((((map__45312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45312):map__45312);
var file_msg = map__45312__$1;
var namespace = cljs.core.get.call(null,map__45312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45314){
var map__45315 = p__45314;
var map__45315__$1 = ((((!((map__45315 == null)))?(((((map__45315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45315):map__45315);
var file_msg = map__45315__$1;
var namespace = cljs.core.get.call(null,map__45315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45317,callback){
var map__45318 = p__45317;
var map__45318__$1 = ((((!((map__45318 == null)))?(((((map__45318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45318):map__45318);
var file_msg = map__45318__$1;
var request_url = cljs.core.get.call(null,map__45318__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45318__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__38236__auto___45368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___45368,out){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___45368,out){
return (function (state_45353){
var state_val_45354 = (state_45353[(1)]);
if((state_val_45354 === (1))){
var inst_45327 = cljs.core.seq.call(null,files);
var inst_45328 = cljs.core.first.call(null,inst_45327);
var inst_45329 = cljs.core.next.call(null,inst_45327);
var inst_45330 = files;
var state_45353__$1 = (function (){var statearr_45355 = state_45353;
(statearr_45355[(7)] = inst_45328);

(statearr_45355[(8)] = inst_45329);

(statearr_45355[(9)] = inst_45330);

return statearr_45355;
})();
var statearr_45356_45369 = state_45353__$1;
(statearr_45356_45369[(2)] = null);

(statearr_45356_45369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (2))){
var inst_45336 = (state_45353[(10)]);
var inst_45330 = (state_45353[(9)]);
var inst_45335 = cljs.core.seq.call(null,inst_45330);
var inst_45336__$1 = cljs.core.first.call(null,inst_45335);
var inst_45337 = cljs.core.next.call(null,inst_45335);
var inst_45338 = (inst_45336__$1 == null);
var inst_45339 = cljs.core.not.call(null,inst_45338);
var state_45353__$1 = (function (){var statearr_45357 = state_45353;
(statearr_45357[(11)] = inst_45337);

(statearr_45357[(10)] = inst_45336__$1);

return statearr_45357;
})();
if(inst_45339){
var statearr_45358_45370 = state_45353__$1;
(statearr_45358_45370[(1)] = (4));

} else {
var statearr_45359_45371 = state_45353__$1;
(statearr_45359_45371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (3))){
var inst_45351 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45353__$1,inst_45351);
} else {
if((state_val_45354 === (4))){
var inst_45336 = (state_45353[(10)]);
var inst_45341 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45336);
var state_45353__$1 = state_45353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45353__$1,(7),inst_45341);
} else {
if((state_val_45354 === (5))){
var inst_45347 = cljs.core.async.close_BANG_.call(null,out);
var state_45353__$1 = state_45353;
var statearr_45360_45372 = state_45353__$1;
(statearr_45360_45372[(2)] = inst_45347);

(statearr_45360_45372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (6))){
var inst_45349 = (state_45353[(2)]);
var state_45353__$1 = state_45353;
var statearr_45361_45373 = state_45353__$1;
(statearr_45361_45373[(2)] = inst_45349);

(statearr_45361_45373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45354 === (7))){
var inst_45337 = (state_45353[(11)]);
var inst_45343 = (state_45353[(2)]);
var inst_45344 = cljs.core.async.put_BANG_.call(null,out,inst_45343);
var inst_45330 = inst_45337;
var state_45353__$1 = (function (){var statearr_45362 = state_45353;
(statearr_45362[(12)] = inst_45344);

(statearr_45362[(9)] = inst_45330);

return statearr_45362;
})();
var statearr_45363_45374 = state_45353__$1;
(statearr_45363_45374[(2)] = null);

(statearr_45363_45374[(1)] = (2));


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
});})(c__38236__auto___45368,out))
;
return ((function (switch__38077__auto__,c__38236__auto___45368,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto____0 = (function (){
var statearr_45364 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45364[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto__);

(statearr_45364[(1)] = (1));

return statearr_45364;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto____1 = (function (state_45353){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_45353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e45365){if((e45365 instanceof Object)){
var ex__38081__auto__ = e45365;
var statearr_45366_45375 = state_45353;
(statearr_45366_45375[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45376 = state_45353;
state_45353 = G__45376;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto__ = function(state_45353){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto____1.call(this,state_45353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___45368,out))
})();
var state__38238__auto__ = (function (){var statearr_45367 = f__38237__auto__.call(null);
(statearr_45367[(6)] = c__38236__auto___45368);

return statearr_45367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___45368,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45377,opts){
var map__45378 = p__45377;
var map__45378__$1 = ((((!((map__45378 == null)))?(((((map__45378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45378):map__45378);
var eval_body = cljs.core.get.call(null,map__45378__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45378__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e45380){var e = e45380;
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
return (function (p1__45381_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45381_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__45382){
var vec__45383 = p__45382;
var k = cljs.core.nth.call(null,vec__45383,(0),null);
var v = cljs.core.nth.call(null,vec__45383,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45386){
var vec__45387 = p__45386;
var k = cljs.core.nth.call(null,vec__45387,(0),null);
var v = cljs.core.nth.call(null,vec__45387,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45393,p__45394){
var map__45395 = p__45393;
var map__45395__$1 = ((((!((map__45395 == null)))?(((((map__45395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45395):map__45395);
var opts = map__45395__$1;
var before_jsload = cljs.core.get.call(null,map__45395__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45395__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45395__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45396 = p__45394;
var map__45396__$1 = ((((!((map__45396 == null)))?(((((map__45396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45396):map__45396);
var msg = map__45396__$1;
var files = cljs.core.get.call(null,map__45396__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45396__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45396__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45550){
var state_val_45551 = (state_45550[(1)]);
if((state_val_45551 === (7))){
var inst_45413 = (state_45550[(7)]);
var inst_45411 = (state_45550[(8)]);
var inst_45410 = (state_45550[(9)]);
var inst_45412 = (state_45550[(10)]);
var inst_45418 = cljs.core._nth.call(null,inst_45411,inst_45413);
var inst_45419 = figwheel.client.file_reloading.eval_body.call(null,inst_45418,opts);
var inst_45420 = (inst_45413 + (1));
var tmp45552 = inst_45411;
var tmp45553 = inst_45410;
var tmp45554 = inst_45412;
var inst_45410__$1 = tmp45553;
var inst_45411__$1 = tmp45552;
var inst_45412__$1 = tmp45554;
var inst_45413__$1 = inst_45420;
var state_45550__$1 = (function (){var statearr_45555 = state_45550;
(statearr_45555[(11)] = inst_45419);

(statearr_45555[(7)] = inst_45413__$1);

(statearr_45555[(8)] = inst_45411__$1);

(statearr_45555[(9)] = inst_45410__$1);

(statearr_45555[(10)] = inst_45412__$1);

return statearr_45555;
})();
var statearr_45556_45639 = state_45550__$1;
(statearr_45556_45639[(2)] = null);

(statearr_45556_45639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (20))){
var inst_45453 = (state_45550[(12)]);
var inst_45461 = figwheel.client.file_reloading.sort_files.call(null,inst_45453);
var state_45550__$1 = state_45550;
var statearr_45557_45640 = state_45550__$1;
(statearr_45557_45640[(2)] = inst_45461);

(statearr_45557_45640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (27))){
var state_45550__$1 = state_45550;
var statearr_45558_45641 = state_45550__$1;
(statearr_45558_45641[(2)] = null);

(statearr_45558_45641[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (1))){
var inst_45402 = (state_45550[(13)]);
var inst_45399 = before_jsload.call(null,files);
var inst_45400 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45401 = (function (){return ((function (inst_45402,inst_45399,inst_45400,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45390_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45390_SHARP_);
});
;})(inst_45402,inst_45399,inst_45400,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45402__$1 = cljs.core.filter.call(null,inst_45401,files);
var inst_45403 = cljs.core.not_empty.call(null,inst_45402__$1);
var state_45550__$1 = (function (){var statearr_45559 = state_45550;
(statearr_45559[(14)] = inst_45400);

(statearr_45559[(13)] = inst_45402__$1);

(statearr_45559[(15)] = inst_45399);

return statearr_45559;
})();
if(cljs.core.truth_(inst_45403)){
var statearr_45560_45642 = state_45550__$1;
(statearr_45560_45642[(1)] = (2));

} else {
var statearr_45561_45643 = state_45550__$1;
(statearr_45561_45643[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (24))){
var state_45550__$1 = state_45550;
var statearr_45562_45644 = state_45550__$1;
(statearr_45562_45644[(2)] = null);

(statearr_45562_45644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (39))){
var inst_45503 = (state_45550[(16)]);
var state_45550__$1 = state_45550;
var statearr_45563_45645 = state_45550__$1;
(statearr_45563_45645[(2)] = inst_45503);

(statearr_45563_45645[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (46))){
var inst_45545 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45564_45646 = state_45550__$1;
(statearr_45564_45646[(2)] = inst_45545);

(statearr_45564_45646[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (4))){
var inst_45447 = (state_45550[(2)]);
var inst_45448 = cljs.core.List.EMPTY;
var inst_45449 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45448);
var inst_45450 = (function (){return ((function (inst_45447,inst_45448,inst_45449,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45391_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45391_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45391_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45391_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_45447,inst_45448,inst_45449,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45451 = cljs.core.filter.call(null,inst_45450,files);
var inst_45452 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45453 = cljs.core.concat.call(null,inst_45451,inst_45452);
var state_45550__$1 = (function (){var statearr_45565 = state_45550;
(statearr_45565[(12)] = inst_45453);

(statearr_45565[(17)] = inst_45447);

(statearr_45565[(18)] = inst_45449);

return statearr_45565;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45566_45647 = state_45550__$1;
(statearr_45566_45647[(1)] = (16));

} else {
var statearr_45567_45648 = state_45550__$1;
(statearr_45567_45648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (15))){
var inst_45437 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45568_45649 = state_45550__$1;
(statearr_45568_45649[(2)] = inst_45437);

(statearr_45568_45649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (21))){
var inst_45463 = (state_45550[(19)]);
var inst_45463__$1 = (state_45550[(2)]);
var inst_45464 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45463__$1);
var state_45550__$1 = (function (){var statearr_45569 = state_45550;
(statearr_45569[(19)] = inst_45463__$1);

return statearr_45569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45550__$1,(22),inst_45464);
} else {
if((state_val_45551 === (31))){
var inst_45548 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45550__$1,inst_45548);
} else {
if((state_val_45551 === (32))){
var inst_45503 = (state_45550[(16)]);
var inst_45508 = inst_45503.cljs$lang$protocol_mask$partition0$;
var inst_45509 = (inst_45508 & (64));
var inst_45510 = inst_45503.cljs$core$ISeq$;
var inst_45511 = (cljs.core.PROTOCOL_SENTINEL === inst_45510);
var inst_45512 = ((inst_45509) || (inst_45511));
var state_45550__$1 = state_45550;
if(cljs.core.truth_(inst_45512)){
var statearr_45570_45650 = state_45550__$1;
(statearr_45570_45650[(1)] = (35));

} else {
var statearr_45571_45651 = state_45550__$1;
(statearr_45571_45651[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (40))){
var inst_45525 = (state_45550[(20)]);
var inst_45524 = (state_45550[(2)]);
var inst_45525__$1 = cljs.core.get.call(null,inst_45524,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45526 = cljs.core.get.call(null,inst_45524,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45527 = cljs.core.not_empty.call(null,inst_45525__$1);
var state_45550__$1 = (function (){var statearr_45572 = state_45550;
(statearr_45572[(20)] = inst_45525__$1);

(statearr_45572[(21)] = inst_45526);

return statearr_45572;
})();
if(cljs.core.truth_(inst_45527)){
var statearr_45573_45652 = state_45550__$1;
(statearr_45573_45652[(1)] = (41));

} else {
var statearr_45574_45653 = state_45550__$1;
(statearr_45574_45653[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (33))){
var state_45550__$1 = state_45550;
var statearr_45575_45654 = state_45550__$1;
(statearr_45575_45654[(2)] = false);

(statearr_45575_45654[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (13))){
var inst_45423 = (state_45550[(22)]);
var inst_45427 = cljs.core.chunk_first.call(null,inst_45423);
var inst_45428 = cljs.core.chunk_rest.call(null,inst_45423);
var inst_45429 = cljs.core.count.call(null,inst_45427);
var inst_45410 = inst_45428;
var inst_45411 = inst_45427;
var inst_45412 = inst_45429;
var inst_45413 = (0);
var state_45550__$1 = (function (){var statearr_45576 = state_45550;
(statearr_45576[(7)] = inst_45413);

(statearr_45576[(8)] = inst_45411);

(statearr_45576[(9)] = inst_45410);

(statearr_45576[(10)] = inst_45412);

return statearr_45576;
})();
var statearr_45577_45655 = state_45550__$1;
(statearr_45577_45655[(2)] = null);

(statearr_45577_45655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (22))){
var inst_45467 = (state_45550[(23)]);
var inst_45466 = (state_45550[(24)]);
var inst_45463 = (state_45550[(19)]);
var inst_45471 = (state_45550[(25)]);
var inst_45466__$1 = (state_45550[(2)]);
var inst_45467__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45466__$1);
var inst_45468 = (function (){var all_files = inst_45463;
var res_SINGLEQUOTE_ = inst_45466__$1;
var res = inst_45467__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45467,inst_45466,inst_45463,inst_45471,inst_45466__$1,inst_45467__$1,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45392_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45392_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45467,inst_45466,inst_45463,inst_45471,inst_45466__$1,inst_45467__$1,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45469 = cljs.core.filter.call(null,inst_45468,inst_45466__$1);
var inst_45470 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45471__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45470);
var inst_45472 = cljs.core.not_empty.call(null,inst_45471__$1);
var state_45550__$1 = (function (){var statearr_45578 = state_45550;
(statearr_45578[(26)] = inst_45469);

(statearr_45578[(23)] = inst_45467__$1);

(statearr_45578[(24)] = inst_45466__$1);

(statearr_45578[(25)] = inst_45471__$1);

return statearr_45578;
})();
if(cljs.core.truth_(inst_45472)){
var statearr_45579_45656 = state_45550__$1;
(statearr_45579_45656[(1)] = (23));

} else {
var statearr_45580_45657 = state_45550__$1;
(statearr_45580_45657[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (36))){
var state_45550__$1 = state_45550;
var statearr_45581_45658 = state_45550__$1;
(statearr_45581_45658[(2)] = false);

(statearr_45581_45658[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (41))){
var inst_45525 = (state_45550[(20)]);
var inst_45529 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45530 = cljs.core.map.call(null,inst_45529,inst_45525);
var inst_45531 = cljs.core.pr_str.call(null,inst_45530);
var inst_45532 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45531)].join('');
var inst_45533 = figwheel.client.utils.log.call(null,inst_45532);
var state_45550__$1 = state_45550;
var statearr_45582_45659 = state_45550__$1;
(statearr_45582_45659[(2)] = inst_45533);

(statearr_45582_45659[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (43))){
var inst_45526 = (state_45550[(21)]);
var inst_45536 = (state_45550[(2)]);
var inst_45537 = cljs.core.not_empty.call(null,inst_45526);
var state_45550__$1 = (function (){var statearr_45583 = state_45550;
(statearr_45583[(27)] = inst_45536);

return statearr_45583;
})();
if(cljs.core.truth_(inst_45537)){
var statearr_45584_45660 = state_45550__$1;
(statearr_45584_45660[(1)] = (44));

} else {
var statearr_45585_45661 = state_45550__$1;
(statearr_45585_45661[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (29))){
var inst_45469 = (state_45550[(26)]);
var inst_45467 = (state_45550[(23)]);
var inst_45503 = (state_45550[(16)]);
var inst_45466 = (state_45550[(24)]);
var inst_45463 = (state_45550[(19)]);
var inst_45471 = (state_45550[(25)]);
var inst_45499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45502 = (function (){var all_files = inst_45463;
var res_SINGLEQUOTE_ = inst_45466;
var res = inst_45467;
var files_not_loaded = inst_45469;
var dependencies_that_loaded = inst_45471;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45503,inst_45466,inst_45463,inst_45471,inst_45499,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45501){
var map__45586 = p__45501;
var map__45586__$1 = ((((!((map__45586 == null)))?(((((map__45586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45586):map__45586);
var namespace = cljs.core.get.call(null,map__45586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45503,inst_45466,inst_45463,inst_45471,inst_45499,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45503__$1 = cljs.core.group_by.call(null,inst_45502,inst_45469);
var inst_45505 = (inst_45503__$1 == null);
var inst_45506 = cljs.core.not.call(null,inst_45505);
var state_45550__$1 = (function (){var statearr_45588 = state_45550;
(statearr_45588[(16)] = inst_45503__$1);

(statearr_45588[(28)] = inst_45499);

return statearr_45588;
})();
if(inst_45506){
var statearr_45589_45662 = state_45550__$1;
(statearr_45589_45662[(1)] = (32));

} else {
var statearr_45590_45663 = state_45550__$1;
(statearr_45590_45663[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (44))){
var inst_45526 = (state_45550[(21)]);
var inst_45539 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45526);
var inst_45540 = cljs.core.pr_str.call(null,inst_45539);
var inst_45541 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45540)].join('');
var inst_45542 = figwheel.client.utils.log.call(null,inst_45541);
var state_45550__$1 = state_45550;
var statearr_45591_45664 = state_45550__$1;
(statearr_45591_45664[(2)] = inst_45542);

(statearr_45591_45664[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (6))){
var inst_45444 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45592_45665 = state_45550__$1;
(statearr_45592_45665[(2)] = inst_45444);

(statearr_45592_45665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (28))){
var inst_45469 = (state_45550[(26)]);
var inst_45496 = (state_45550[(2)]);
var inst_45497 = cljs.core.not_empty.call(null,inst_45469);
var state_45550__$1 = (function (){var statearr_45593 = state_45550;
(statearr_45593[(29)] = inst_45496);

return statearr_45593;
})();
if(cljs.core.truth_(inst_45497)){
var statearr_45594_45666 = state_45550__$1;
(statearr_45594_45666[(1)] = (29));

} else {
var statearr_45595_45667 = state_45550__$1;
(statearr_45595_45667[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (25))){
var inst_45467 = (state_45550[(23)]);
var inst_45483 = (state_45550[(2)]);
var inst_45484 = cljs.core.not_empty.call(null,inst_45467);
var state_45550__$1 = (function (){var statearr_45596 = state_45550;
(statearr_45596[(30)] = inst_45483);

return statearr_45596;
})();
if(cljs.core.truth_(inst_45484)){
var statearr_45597_45668 = state_45550__$1;
(statearr_45597_45668[(1)] = (26));

} else {
var statearr_45598_45669 = state_45550__$1;
(statearr_45598_45669[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (34))){
var inst_45519 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
if(cljs.core.truth_(inst_45519)){
var statearr_45599_45670 = state_45550__$1;
(statearr_45599_45670[(1)] = (38));

} else {
var statearr_45600_45671 = state_45550__$1;
(statearr_45600_45671[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (17))){
var state_45550__$1 = state_45550;
var statearr_45601_45672 = state_45550__$1;
(statearr_45601_45672[(2)] = recompile_dependents);

(statearr_45601_45672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (3))){
var state_45550__$1 = state_45550;
var statearr_45602_45673 = state_45550__$1;
(statearr_45602_45673[(2)] = null);

(statearr_45602_45673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (12))){
var inst_45440 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45603_45674 = state_45550__$1;
(statearr_45603_45674[(2)] = inst_45440);

(statearr_45603_45674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (2))){
var inst_45402 = (state_45550[(13)]);
var inst_45409 = cljs.core.seq.call(null,inst_45402);
var inst_45410 = inst_45409;
var inst_45411 = null;
var inst_45412 = (0);
var inst_45413 = (0);
var state_45550__$1 = (function (){var statearr_45604 = state_45550;
(statearr_45604[(7)] = inst_45413);

(statearr_45604[(8)] = inst_45411);

(statearr_45604[(9)] = inst_45410);

(statearr_45604[(10)] = inst_45412);

return statearr_45604;
})();
var statearr_45605_45675 = state_45550__$1;
(statearr_45605_45675[(2)] = null);

(statearr_45605_45675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (23))){
var inst_45469 = (state_45550[(26)]);
var inst_45467 = (state_45550[(23)]);
var inst_45466 = (state_45550[(24)]);
var inst_45463 = (state_45550[(19)]);
var inst_45471 = (state_45550[(25)]);
var inst_45474 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45476 = (function (){var all_files = inst_45463;
var res_SINGLEQUOTE_ = inst_45466;
var res = inst_45467;
var files_not_loaded = inst_45469;
var dependencies_that_loaded = inst_45471;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45466,inst_45463,inst_45471,inst_45474,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45475){
var map__45606 = p__45475;
var map__45606__$1 = ((((!((map__45606 == null)))?(((((map__45606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45606):map__45606);
var request_url = cljs.core.get.call(null,map__45606__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45466,inst_45463,inst_45471,inst_45474,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45477 = cljs.core.reverse.call(null,inst_45471);
var inst_45478 = cljs.core.map.call(null,inst_45476,inst_45477);
var inst_45479 = cljs.core.pr_str.call(null,inst_45478);
var inst_45480 = figwheel.client.utils.log.call(null,inst_45479);
var state_45550__$1 = (function (){var statearr_45608 = state_45550;
(statearr_45608[(31)] = inst_45474);

return statearr_45608;
})();
var statearr_45609_45676 = state_45550__$1;
(statearr_45609_45676[(2)] = inst_45480);

(statearr_45609_45676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (35))){
var state_45550__$1 = state_45550;
var statearr_45610_45677 = state_45550__$1;
(statearr_45610_45677[(2)] = true);

(statearr_45610_45677[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (19))){
var inst_45453 = (state_45550[(12)]);
var inst_45459 = figwheel.client.file_reloading.expand_files.call(null,inst_45453);
var state_45550__$1 = state_45550;
var statearr_45611_45678 = state_45550__$1;
(statearr_45611_45678[(2)] = inst_45459);

(statearr_45611_45678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (11))){
var state_45550__$1 = state_45550;
var statearr_45612_45679 = state_45550__$1;
(statearr_45612_45679[(2)] = null);

(statearr_45612_45679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (9))){
var inst_45442 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45613_45680 = state_45550__$1;
(statearr_45613_45680[(2)] = inst_45442);

(statearr_45613_45680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (5))){
var inst_45413 = (state_45550[(7)]);
var inst_45412 = (state_45550[(10)]);
var inst_45415 = (inst_45413 < inst_45412);
var inst_45416 = inst_45415;
var state_45550__$1 = state_45550;
if(cljs.core.truth_(inst_45416)){
var statearr_45614_45681 = state_45550__$1;
(statearr_45614_45681[(1)] = (7));

} else {
var statearr_45615_45682 = state_45550__$1;
(statearr_45615_45682[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (14))){
var inst_45423 = (state_45550[(22)]);
var inst_45432 = cljs.core.first.call(null,inst_45423);
var inst_45433 = figwheel.client.file_reloading.eval_body.call(null,inst_45432,opts);
var inst_45434 = cljs.core.next.call(null,inst_45423);
var inst_45410 = inst_45434;
var inst_45411 = null;
var inst_45412 = (0);
var inst_45413 = (0);
var state_45550__$1 = (function (){var statearr_45616 = state_45550;
(statearr_45616[(32)] = inst_45433);

(statearr_45616[(7)] = inst_45413);

(statearr_45616[(8)] = inst_45411);

(statearr_45616[(9)] = inst_45410);

(statearr_45616[(10)] = inst_45412);

return statearr_45616;
})();
var statearr_45617_45683 = state_45550__$1;
(statearr_45617_45683[(2)] = null);

(statearr_45617_45683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (45))){
var state_45550__$1 = state_45550;
var statearr_45618_45684 = state_45550__$1;
(statearr_45618_45684[(2)] = null);

(statearr_45618_45684[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (26))){
var inst_45469 = (state_45550[(26)]);
var inst_45467 = (state_45550[(23)]);
var inst_45466 = (state_45550[(24)]);
var inst_45463 = (state_45550[(19)]);
var inst_45471 = (state_45550[(25)]);
var inst_45486 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45488 = (function (){var all_files = inst_45463;
var res_SINGLEQUOTE_ = inst_45466;
var res = inst_45467;
var files_not_loaded = inst_45469;
var dependencies_that_loaded = inst_45471;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45466,inst_45463,inst_45471,inst_45486,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45487){
var map__45619 = p__45487;
var map__45619__$1 = ((((!((map__45619 == null)))?(((((map__45619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45619):map__45619);
var namespace = cljs.core.get.call(null,map__45619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45619__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45466,inst_45463,inst_45471,inst_45486,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45489 = cljs.core.map.call(null,inst_45488,inst_45467);
var inst_45490 = cljs.core.pr_str.call(null,inst_45489);
var inst_45491 = figwheel.client.utils.log.call(null,inst_45490);
var inst_45492 = (function (){var all_files = inst_45463;
var res_SINGLEQUOTE_ = inst_45466;
var res = inst_45467;
var files_not_loaded = inst_45469;
var dependencies_that_loaded = inst_45471;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45466,inst_45463,inst_45471,inst_45486,inst_45488,inst_45489,inst_45490,inst_45491,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45469,inst_45467,inst_45466,inst_45463,inst_45471,inst_45486,inst_45488,inst_45489,inst_45490,inst_45491,state_val_45551,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45493 = setTimeout(inst_45492,(10));
var state_45550__$1 = (function (){var statearr_45621 = state_45550;
(statearr_45621[(33)] = inst_45486);

(statearr_45621[(34)] = inst_45491);

return statearr_45621;
})();
var statearr_45622_45685 = state_45550__$1;
(statearr_45622_45685[(2)] = inst_45493);

(statearr_45622_45685[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (16))){
var state_45550__$1 = state_45550;
var statearr_45623_45686 = state_45550__$1;
(statearr_45623_45686[(2)] = reload_dependents);

(statearr_45623_45686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (38))){
var inst_45503 = (state_45550[(16)]);
var inst_45521 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45503);
var state_45550__$1 = state_45550;
var statearr_45624_45687 = state_45550__$1;
(statearr_45624_45687[(2)] = inst_45521);

(statearr_45624_45687[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (30))){
var state_45550__$1 = state_45550;
var statearr_45625_45688 = state_45550__$1;
(statearr_45625_45688[(2)] = null);

(statearr_45625_45688[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (10))){
var inst_45423 = (state_45550[(22)]);
var inst_45425 = cljs.core.chunked_seq_QMARK_.call(null,inst_45423);
var state_45550__$1 = state_45550;
if(inst_45425){
var statearr_45626_45689 = state_45550__$1;
(statearr_45626_45689[(1)] = (13));

} else {
var statearr_45627_45690 = state_45550__$1;
(statearr_45627_45690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (18))){
var inst_45457 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
if(cljs.core.truth_(inst_45457)){
var statearr_45628_45691 = state_45550__$1;
(statearr_45628_45691[(1)] = (19));

} else {
var statearr_45629_45692 = state_45550__$1;
(statearr_45629_45692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (42))){
var state_45550__$1 = state_45550;
var statearr_45630_45693 = state_45550__$1;
(statearr_45630_45693[(2)] = null);

(statearr_45630_45693[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (37))){
var inst_45516 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45631_45694 = state_45550__$1;
(statearr_45631_45694[(2)] = inst_45516);

(statearr_45631_45694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (8))){
var inst_45423 = (state_45550[(22)]);
var inst_45410 = (state_45550[(9)]);
var inst_45423__$1 = cljs.core.seq.call(null,inst_45410);
var state_45550__$1 = (function (){var statearr_45632 = state_45550;
(statearr_45632[(22)] = inst_45423__$1);

return statearr_45632;
})();
if(inst_45423__$1){
var statearr_45633_45695 = state_45550__$1;
(statearr_45633_45695[(1)] = (10));

} else {
var statearr_45634_45696 = state_45550__$1;
(statearr_45634_45696[(1)] = (11));

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
});})(c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38077__auto__,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto____0 = (function (){
var statearr_45635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45635[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto__);

(statearr_45635[(1)] = (1));

return statearr_45635;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto____1 = (function (state_45550){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_45550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e45636){if((e45636 instanceof Object)){
var ex__38081__auto__ = e45636;
var statearr_45637_45697 = state_45550;
(statearr_45637_45697[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45698 = state_45550;
state_45550 = G__45698;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto__ = function(state_45550){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto____1.call(this,state_45550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38238__auto__ = (function (){var statearr_45638 = f__38237__auto__.call(null);
(statearr_45638[(6)] = c__38236__auto__);

return statearr_45638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__,map__45395,map__45395__$1,opts,before_jsload,on_jsload,reload_dependents,map__45396,map__45396__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38236__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45701,link){
var map__45702 = p__45701;
var map__45702__$1 = ((((!((map__45702 == null)))?(((((map__45702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45702):map__45702);
var file = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__45702,map__45702__$1,file){
return (function (p1__45699_SHARP_,p2__45700_SHARP_){
if(cljs.core._EQ_.call(null,p1__45699_SHARP_,p2__45700_SHARP_)){
return p1__45699_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__45702,map__45702__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45705){
var map__45706 = p__45705;
var map__45706__$1 = ((((!((map__45706 == null)))?(((((map__45706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45706):map__45706);
var match_length = cljs.core.get.call(null,map__45706__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45706__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45704_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45704_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45708_SHARP_,p2__45709_SHARP_){
return cljs.core.assoc.call(null,p1__45708_SHARP_,cljs.core.get.call(null,p2__45709_SHARP_,key),p2__45709_SHARP_);
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
var loaded_f_datas_45710 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_45710);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_45710);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45711,p__45712){
var map__45713 = p__45711;
var map__45713__$1 = ((((!((map__45713 == null)))?(((((map__45713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45713):map__45713);
var on_cssload = cljs.core.get.call(null,map__45713__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__45714 = p__45712;
var map__45714__$1 = ((((!((map__45714 == null)))?(((((map__45714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45714):map__45714);
var files_msg = map__45714__$1;
var files = cljs.core.get.call(null,map__45714__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1551156941115
