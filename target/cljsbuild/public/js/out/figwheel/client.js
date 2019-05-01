// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38232){if((e38232 instanceof Error)){
var e = e38232;
return "Error: Unable to stringify";
} else {
throw e38232;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38235 = arguments.length;
switch (G__38235) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38233_SHARP_){
if(typeof p1__38233_SHARP_ === 'string'){
return p1__38233_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38233_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38238 = arguments.length;
var i__4532__auto___38239 = (0);
while(true){
if((i__4532__auto___38239 < len__4531__auto___38238)){
args__4534__auto__.push((arguments[i__4532__auto___38239]));

var G__38240 = (i__4532__auto___38239 + (1));
i__4532__auto___38239 = G__38240;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38237){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38237));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38242 = arguments.length;
var i__4532__auto___38243 = (0);
while(true){
if((i__4532__auto___38243 < len__4531__auto___38242)){
args__4534__auto__.push((arguments[i__4532__auto___38243]));

var G__38244 = (i__4532__auto___38243 + (1));
i__4532__auto___38243 = G__38244;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38241){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38241));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38245){
var map__38246 = p__38245;
var map__38246__$1 = ((((!((map__38246 == null)))?(((((map__38246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38246):map__38246);
var message = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34473__auto___38325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___38325,ch){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___38325,ch){
return (function (state_38297){
var state_val_38298 = (state_38297[(1)]);
if((state_val_38298 === (7))){
var inst_38293 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
var statearr_38299_38326 = state_38297__$1;
(statearr_38299_38326[(2)] = inst_38293);

(statearr_38299_38326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (1))){
var state_38297__$1 = state_38297;
var statearr_38300_38327 = state_38297__$1;
(statearr_38300_38327[(2)] = null);

(statearr_38300_38327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (4))){
var inst_38250 = (state_38297[(7)]);
var inst_38250__$1 = (state_38297[(2)]);
var state_38297__$1 = (function (){var statearr_38301 = state_38297;
(statearr_38301[(7)] = inst_38250__$1);

return statearr_38301;
})();
if(cljs.core.truth_(inst_38250__$1)){
var statearr_38302_38328 = state_38297__$1;
(statearr_38302_38328[(1)] = (5));

} else {
var statearr_38303_38329 = state_38297__$1;
(statearr_38303_38329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (15))){
var inst_38257 = (state_38297[(8)]);
var inst_38272 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38257);
var inst_38273 = cljs.core.first.call(null,inst_38272);
var inst_38274 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38273);
var inst_38275 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38274)].join('');
var inst_38276 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38275);
var state_38297__$1 = state_38297;
var statearr_38304_38330 = state_38297__$1;
(statearr_38304_38330[(2)] = inst_38276);

(statearr_38304_38330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (13))){
var inst_38281 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
var statearr_38305_38331 = state_38297__$1;
(statearr_38305_38331[(2)] = inst_38281);

(statearr_38305_38331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (6))){
var state_38297__$1 = state_38297;
var statearr_38306_38332 = state_38297__$1;
(statearr_38306_38332[(2)] = null);

(statearr_38306_38332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (17))){
var inst_38279 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
var statearr_38307_38333 = state_38297__$1;
(statearr_38307_38333[(2)] = inst_38279);

(statearr_38307_38333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (3))){
var inst_38295 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38297__$1,inst_38295);
} else {
if((state_val_38298 === (12))){
var inst_38256 = (state_38297[(9)]);
var inst_38270 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38256,opts);
var state_38297__$1 = state_38297;
if(cljs.core.truth_(inst_38270)){
var statearr_38308_38334 = state_38297__$1;
(statearr_38308_38334[(1)] = (15));

} else {
var statearr_38309_38335 = state_38297__$1;
(statearr_38309_38335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (2))){
var state_38297__$1 = state_38297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38297__$1,(4),ch);
} else {
if((state_val_38298 === (11))){
var inst_38257 = (state_38297[(8)]);
var inst_38262 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38263 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38257);
var inst_38264 = cljs.core.async.timeout.call(null,(1000));
var inst_38265 = [inst_38263,inst_38264];
var inst_38266 = (new cljs.core.PersistentVector(null,2,(5),inst_38262,inst_38265,null));
var state_38297__$1 = state_38297;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38297__$1,(14),inst_38266);
} else {
if((state_val_38298 === (9))){
var inst_38257 = (state_38297[(8)]);
var inst_38283 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38284 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38257);
var inst_38285 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38284);
var inst_38286 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38285)].join('');
var inst_38287 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38286);
var state_38297__$1 = (function (){var statearr_38310 = state_38297;
(statearr_38310[(10)] = inst_38283);

return statearr_38310;
})();
var statearr_38311_38336 = state_38297__$1;
(statearr_38311_38336[(2)] = inst_38287);

(statearr_38311_38336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (5))){
var inst_38250 = (state_38297[(7)]);
var inst_38252 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38253 = (new cljs.core.PersistentArrayMap(null,2,inst_38252,null));
var inst_38254 = (new cljs.core.PersistentHashSet(null,inst_38253,null));
var inst_38255 = figwheel.client.focus_msgs.call(null,inst_38254,inst_38250);
var inst_38256 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38255);
var inst_38257 = cljs.core.first.call(null,inst_38255);
var inst_38258 = figwheel.client.autoload_QMARK_.call(null);
var state_38297__$1 = (function (){var statearr_38312 = state_38297;
(statearr_38312[(9)] = inst_38256);

(statearr_38312[(8)] = inst_38257);

return statearr_38312;
})();
if(cljs.core.truth_(inst_38258)){
var statearr_38313_38337 = state_38297__$1;
(statearr_38313_38337[(1)] = (8));

} else {
var statearr_38314_38338 = state_38297__$1;
(statearr_38314_38338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (14))){
var inst_38268 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
var statearr_38315_38339 = state_38297__$1;
(statearr_38315_38339[(2)] = inst_38268);

(statearr_38315_38339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (16))){
var state_38297__$1 = state_38297;
var statearr_38316_38340 = state_38297__$1;
(statearr_38316_38340[(2)] = null);

(statearr_38316_38340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (10))){
var inst_38289 = (state_38297[(2)]);
var state_38297__$1 = (function (){var statearr_38317 = state_38297;
(statearr_38317[(11)] = inst_38289);

return statearr_38317;
})();
var statearr_38318_38341 = state_38297__$1;
(statearr_38318_38341[(2)] = null);

(statearr_38318_38341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (8))){
var inst_38256 = (state_38297[(9)]);
var inst_38260 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38256,opts);
var state_38297__$1 = state_38297;
if(cljs.core.truth_(inst_38260)){
var statearr_38319_38342 = state_38297__$1;
(statearr_38319_38342[(1)] = (11));

} else {
var statearr_38320_38343 = state_38297__$1;
(statearr_38320_38343[(1)] = (12));

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
});})(c__34473__auto___38325,ch))
;
return ((function (switch__34382__auto__,c__34473__auto___38325,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34383__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34383__auto____0 = (function (){
var statearr_38321 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38321[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34383__auto__);

(statearr_38321[(1)] = (1));

return statearr_38321;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34383__auto____1 = (function (state_38297){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_38297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e38322){if((e38322 instanceof Object)){
var ex__34386__auto__ = e38322;
var statearr_38323_38344 = state_38297;
(statearr_38323_38344[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38345 = state_38297;
state_38297 = G__38345;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34383__auto__ = function(state_38297){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34383__auto____1.call(this,state_38297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34383__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34383__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___38325,ch))
})();
var state__34475__auto__ = (function (){var statearr_38324 = f__34474__auto__.call(null);
(statearr_38324[(6)] = c__34473__auto___38325);

return statearr_38324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___38325,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38346_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38346_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38350 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38350){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38348 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38349 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38348,_STAR_print_fn_STAR_38349,sb,base_path_38350){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_38348,_STAR_print_fn_STAR_38349,sb,base_path_38350))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38349;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38348;
}}catch (e38347){if((e38347 instanceof Error)){
var e = e38347;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38350], null));
} else {
var e = e38347;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38350))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38351){
var map__38352 = p__38351;
var map__38352__$1 = ((((!((map__38352 == null)))?(((((map__38352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38352):map__38352);
var opts = map__38352__$1;
var build_id = cljs.core.get.call(null,map__38352__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38352,map__38352__$1,opts,build_id){
return (function (p__38354){
var vec__38355 = p__38354;
var seq__38356 = cljs.core.seq.call(null,vec__38355);
var first__38357 = cljs.core.first.call(null,seq__38356);
var seq__38356__$1 = cljs.core.next.call(null,seq__38356);
var map__38358 = first__38357;
var map__38358__$1 = ((((!((map__38358 == null)))?(((((map__38358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38358):map__38358);
var msg = map__38358__$1;
var msg_name = cljs.core.get.call(null,map__38358__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38356__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38355,seq__38356,first__38357,seq__38356__$1,map__38358,map__38358__$1,msg,msg_name,_,map__38352,map__38352__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38355,seq__38356,first__38357,seq__38356__$1,map__38358,map__38358__$1,msg,msg_name,_,map__38352,map__38352__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38352,map__38352__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38360){
var vec__38361 = p__38360;
var seq__38362 = cljs.core.seq.call(null,vec__38361);
var first__38363 = cljs.core.first.call(null,seq__38362);
var seq__38362__$1 = cljs.core.next.call(null,seq__38362);
var map__38364 = first__38363;
var map__38364__$1 = ((((!((map__38364 == null)))?(((((map__38364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38364):map__38364);
var msg = map__38364__$1;
var msg_name = cljs.core.get.call(null,map__38364__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38362__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38366){
var map__38367 = p__38366;
var map__38367__$1 = ((((!((map__38367 == null)))?(((((map__38367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38367):map__38367);
var on_compile_warning = cljs.core.get.call(null,map__38367__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38367__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38367,map__38367__$1,on_compile_warning,on_compile_fail){
return (function (p__38369){
var vec__38370 = p__38369;
var seq__38371 = cljs.core.seq.call(null,vec__38370);
var first__38372 = cljs.core.first.call(null,seq__38371);
var seq__38371__$1 = cljs.core.next.call(null,seq__38371);
var map__38373 = first__38372;
var map__38373__$1 = ((((!((map__38373 == null)))?(((((map__38373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38373):map__38373);
var msg = map__38373__$1;
var msg_name = cljs.core.get.call(null,map__38373__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38371__$1;
var pred__38375 = cljs.core._EQ_;
var expr__38376 = msg_name;
if(cljs.core.truth_(pred__38375.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38376))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38375.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38376))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38367,map__38367__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__,msg_hist,msg_names,msg){
return (function (state_38465){
var state_val_38466 = (state_38465[(1)]);
if((state_val_38466 === (7))){
var inst_38385 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38385)){
var statearr_38467_38514 = state_38465__$1;
(statearr_38467_38514[(1)] = (8));

} else {
var statearr_38468_38515 = state_38465__$1;
(statearr_38468_38515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (20))){
var inst_38459 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38469_38516 = state_38465__$1;
(statearr_38469_38516[(2)] = inst_38459);

(statearr_38469_38516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (27))){
var inst_38455 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38470_38517 = state_38465__$1;
(statearr_38470_38517[(2)] = inst_38455);

(statearr_38470_38517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (1))){
var inst_38378 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38378)){
var statearr_38471_38518 = state_38465__$1;
(statearr_38471_38518[(1)] = (2));

} else {
var statearr_38472_38519 = state_38465__$1;
(statearr_38472_38519[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (24))){
var inst_38457 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38473_38520 = state_38465__$1;
(statearr_38473_38520[(2)] = inst_38457);

(statearr_38473_38520[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (4))){
var inst_38463 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38465__$1,inst_38463);
} else {
if((state_val_38466 === (15))){
var inst_38461 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38474_38521 = state_38465__$1;
(statearr_38474_38521[(2)] = inst_38461);

(statearr_38474_38521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (21))){
var inst_38414 = (state_38465[(2)]);
var inst_38415 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38416 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38415);
var state_38465__$1 = (function (){var statearr_38475 = state_38465;
(statearr_38475[(7)] = inst_38414);

return statearr_38475;
})();
var statearr_38476_38522 = state_38465__$1;
(statearr_38476_38522[(2)] = inst_38416);

(statearr_38476_38522[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (31))){
var inst_38444 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38444)){
var statearr_38477_38523 = state_38465__$1;
(statearr_38477_38523[(1)] = (34));

} else {
var statearr_38478_38524 = state_38465__$1;
(statearr_38478_38524[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (32))){
var inst_38453 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38479_38525 = state_38465__$1;
(statearr_38479_38525[(2)] = inst_38453);

(statearr_38479_38525[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (33))){
var inst_38440 = (state_38465[(2)]);
var inst_38441 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38442 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38441);
var state_38465__$1 = (function (){var statearr_38480 = state_38465;
(statearr_38480[(8)] = inst_38440);

return statearr_38480;
})();
var statearr_38481_38526 = state_38465__$1;
(statearr_38481_38526[(2)] = inst_38442);

(statearr_38481_38526[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (13))){
var inst_38399 = figwheel.client.heads_up.clear.call(null);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(16),inst_38399);
} else {
if((state_val_38466 === (22))){
var inst_38420 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38421 = figwheel.client.heads_up.append_warning_message.call(null,inst_38420);
var state_38465__$1 = state_38465;
var statearr_38482_38527 = state_38465__$1;
(statearr_38482_38527[(2)] = inst_38421);

(statearr_38482_38527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (36))){
var inst_38451 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38483_38528 = state_38465__$1;
(statearr_38483_38528[(2)] = inst_38451);

(statearr_38483_38528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (29))){
var inst_38431 = (state_38465[(2)]);
var inst_38432 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38433 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38432);
var state_38465__$1 = (function (){var statearr_38484 = state_38465;
(statearr_38484[(9)] = inst_38431);

return statearr_38484;
})();
var statearr_38485_38529 = state_38465__$1;
(statearr_38485_38529[(2)] = inst_38433);

(statearr_38485_38529[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (6))){
var inst_38380 = (state_38465[(10)]);
var state_38465__$1 = state_38465;
var statearr_38486_38530 = state_38465__$1;
(statearr_38486_38530[(2)] = inst_38380);

(statearr_38486_38530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (28))){
var inst_38427 = (state_38465[(2)]);
var inst_38428 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38429 = figwheel.client.heads_up.display_warning.call(null,inst_38428);
var state_38465__$1 = (function (){var statearr_38487 = state_38465;
(statearr_38487[(11)] = inst_38427);

return statearr_38487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(29),inst_38429);
} else {
if((state_val_38466 === (25))){
var inst_38425 = figwheel.client.heads_up.clear.call(null);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(28),inst_38425);
} else {
if((state_val_38466 === (34))){
var inst_38446 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(37),inst_38446);
} else {
if((state_val_38466 === (17))){
var inst_38405 = (state_38465[(2)]);
var inst_38406 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38407 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38406);
var state_38465__$1 = (function (){var statearr_38488 = state_38465;
(statearr_38488[(12)] = inst_38405);

return statearr_38488;
})();
var statearr_38489_38531 = state_38465__$1;
(statearr_38489_38531[(2)] = inst_38407);

(statearr_38489_38531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (3))){
var inst_38397 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38397)){
var statearr_38490_38532 = state_38465__$1;
(statearr_38490_38532[(1)] = (13));

} else {
var statearr_38491_38533 = state_38465__$1;
(statearr_38491_38533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (12))){
var inst_38393 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38492_38534 = state_38465__$1;
(statearr_38492_38534[(2)] = inst_38393);

(statearr_38492_38534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (2))){
var inst_38380 = (state_38465[(10)]);
var inst_38380__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38465__$1 = (function (){var statearr_38493 = state_38465;
(statearr_38493[(10)] = inst_38380__$1);

return statearr_38493;
})();
if(cljs.core.truth_(inst_38380__$1)){
var statearr_38494_38535 = state_38465__$1;
(statearr_38494_38535[(1)] = (5));

} else {
var statearr_38495_38536 = state_38465__$1;
(statearr_38495_38536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (23))){
var inst_38423 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38423)){
var statearr_38496_38537 = state_38465__$1;
(statearr_38496_38537[(1)] = (25));

} else {
var statearr_38497_38538 = state_38465__$1;
(statearr_38497_38538[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (35))){
var state_38465__$1 = state_38465;
var statearr_38498_38539 = state_38465__$1;
(statearr_38498_38539[(2)] = null);

(statearr_38498_38539[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (19))){
var inst_38418 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38418)){
var statearr_38499_38540 = state_38465__$1;
(statearr_38499_38540[(1)] = (22));

} else {
var statearr_38500_38541 = state_38465__$1;
(statearr_38500_38541[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (11))){
var inst_38389 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38501_38542 = state_38465__$1;
(statearr_38501_38542[(2)] = inst_38389);

(statearr_38501_38542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (9))){
var inst_38391 = figwheel.client.heads_up.clear.call(null);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(12),inst_38391);
} else {
if((state_val_38466 === (5))){
var inst_38382 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38465__$1 = state_38465;
var statearr_38502_38543 = state_38465__$1;
(statearr_38502_38543[(2)] = inst_38382);

(statearr_38502_38543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (14))){
var inst_38409 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38409)){
var statearr_38503_38544 = state_38465__$1;
(statearr_38503_38544[(1)] = (18));

} else {
var statearr_38504_38545 = state_38465__$1;
(statearr_38504_38545[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (26))){
var inst_38435 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38465__$1 = state_38465;
if(cljs.core.truth_(inst_38435)){
var statearr_38505_38546 = state_38465__$1;
(statearr_38505_38546[(1)] = (30));

} else {
var statearr_38506_38547 = state_38465__$1;
(statearr_38506_38547[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (16))){
var inst_38401 = (state_38465[(2)]);
var inst_38402 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38403 = figwheel.client.heads_up.display_exception.call(null,inst_38402);
var state_38465__$1 = (function (){var statearr_38507 = state_38465;
(statearr_38507[(13)] = inst_38401);

return statearr_38507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(17),inst_38403);
} else {
if((state_val_38466 === (30))){
var inst_38437 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38438 = figwheel.client.heads_up.display_warning.call(null,inst_38437);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(33),inst_38438);
} else {
if((state_val_38466 === (10))){
var inst_38395 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38508_38548 = state_38465__$1;
(statearr_38508_38548[(2)] = inst_38395);

(statearr_38508_38548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (18))){
var inst_38411 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38412 = figwheel.client.heads_up.display_exception.call(null,inst_38411);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(21),inst_38412);
} else {
if((state_val_38466 === (37))){
var inst_38448 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38509_38549 = state_38465__$1;
(statearr_38509_38549[(2)] = inst_38448);

(statearr_38509_38549[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (8))){
var inst_38387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(11),inst_38387);
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
});})(c__34473__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34382__auto__,c__34473__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto____0 = (function (){
var statearr_38510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38510[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto__);

(statearr_38510[(1)] = (1));

return statearr_38510;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto____1 = (function (state_38465){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_38465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e38511){if((e38511 instanceof Object)){
var ex__34386__auto__ = e38511;
var statearr_38512_38550 = state_38465;
(statearr_38512_38550[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38551 = state_38465;
state_38465 = G__38551;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto__ = function(state_38465){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto____1.call(this,state_38465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__,msg_hist,msg_names,msg))
})();
var state__34475__auto__ = (function (){var statearr_38513 = f__34474__auto__.call(null);
(statearr_38513[(6)] = c__34473__auto__);

return statearr_38513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__,msg_hist,msg_names,msg))
);

return c__34473__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34473__auto___38580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___38580,ch){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___38580,ch){
return (function (state_38566){
var state_val_38567 = (state_38566[(1)]);
if((state_val_38567 === (1))){
var state_38566__$1 = state_38566;
var statearr_38568_38581 = state_38566__$1;
(statearr_38568_38581[(2)] = null);

(statearr_38568_38581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (2))){
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38566__$1,(4),ch);
} else {
if((state_val_38567 === (3))){
var inst_38564 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38566__$1,inst_38564);
} else {
if((state_val_38567 === (4))){
var inst_38554 = (state_38566[(7)]);
var inst_38554__$1 = (state_38566[(2)]);
var state_38566__$1 = (function (){var statearr_38569 = state_38566;
(statearr_38569[(7)] = inst_38554__$1);

return statearr_38569;
})();
if(cljs.core.truth_(inst_38554__$1)){
var statearr_38570_38582 = state_38566__$1;
(statearr_38570_38582[(1)] = (5));

} else {
var statearr_38571_38583 = state_38566__$1;
(statearr_38571_38583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (5))){
var inst_38554 = (state_38566[(7)]);
var inst_38556 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38554);
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38566__$1,(8),inst_38556);
} else {
if((state_val_38567 === (6))){
var state_38566__$1 = state_38566;
var statearr_38572_38584 = state_38566__$1;
(statearr_38572_38584[(2)] = null);

(statearr_38572_38584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (7))){
var inst_38562 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38573_38585 = state_38566__$1;
(statearr_38573_38585[(2)] = inst_38562);

(statearr_38573_38585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (8))){
var inst_38558 = (state_38566[(2)]);
var state_38566__$1 = (function (){var statearr_38574 = state_38566;
(statearr_38574[(8)] = inst_38558);

return statearr_38574;
})();
var statearr_38575_38586 = state_38566__$1;
(statearr_38575_38586[(2)] = null);

(statearr_38575_38586[(1)] = (2));


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
});})(c__34473__auto___38580,ch))
;
return ((function (switch__34382__auto__,c__34473__auto___38580,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34383__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34383__auto____0 = (function (){
var statearr_38576 = [null,null,null,null,null,null,null,null,null];
(statearr_38576[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34383__auto__);

(statearr_38576[(1)] = (1));

return statearr_38576;
});
var figwheel$client$heads_up_plugin_$_state_machine__34383__auto____1 = (function (state_38566){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_38566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e38577){if((e38577 instanceof Object)){
var ex__34386__auto__ = e38577;
var statearr_38578_38587 = state_38566;
(statearr_38578_38587[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38588 = state_38566;
state_38566 = G__38588;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34383__auto__ = function(state_38566){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34383__auto____1.call(this,state_38566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34383__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34383__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___38580,ch))
})();
var state__34475__auto__ = (function (){var statearr_38579 = f__34474__auto__.call(null);
(statearr_38579[(6)] = c__34473__auto___38580);

return statearr_38579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___38580,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__){
return (function (state_38594){
var state_val_38595 = (state_38594[(1)]);
if((state_val_38595 === (1))){
var inst_38589 = cljs.core.async.timeout.call(null,(3000));
var state_38594__$1 = state_38594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38594__$1,(2),inst_38589);
} else {
if((state_val_38595 === (2))){
var inst_38591 = (state_38594[(2)]);
var inst_38592 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38594__$1 = (function (){var statearr_38596 = state_38594;
(statearr_38596[(7)] = inst_38591);

return statearr_38596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38594__$1,inst_38592);
} else {
return null;
}
}
});})(c__34473__auto__))
;
return ((function (switch__34382__auto__,c__34473__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34383__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34383__auto____0 = (function (){
var statearr_38597 = [null,null,null,null,null,null,null,null];
(statearr_38597[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34383__auto__);

(statearr_38597[(1)] = (1));

return statearr_38597;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34383__auto____1 = (function (state_38594){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_38594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e38598){if((e38598 instanceof Object)){
var ex__34386__auto__ = e38598;
var statearr_38599_38601 = state_38594;
(statearr_38599_38601[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38602 = state_38594;
state_38594 = G__38602;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34383__auto__ = function(state_38594){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34383__auto____1.call(this,state_38594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34383__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34383__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__))
})();
var state__34475__auto__ = (function (){var statearr_38600 = f__34474__auto__.call(null);
(statearr_38600[(6)] = c__34473__auto__);

return statearr_38600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__))
);

return c__34473__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__,figwheel_version,temp__5457__auto__){
return (function (state_38609){
var state_val_38610 = (state_38609[(1)]);
if((state_val_38610 === (1))){
var inst_38603 = cljs.core.async.timeout.call(null,(2000));
var state_38609__$1 = state_38609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38609__$1,(2),inst_38603);
} else {
if((state_val_38610 === (2))){
var inst_38605 = (state_38609[(2)]);
var inst_38606 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38607 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38606);
var state_38609__$1 = (function (){var statearr_38611 = state_38609;
(statearr_38611[(7)] = inst_38605);

return statearr_38611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38609__$1,inst_38607);
} else {
return null;
}
}
});})(c__34473__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34382__auto__,c__34473__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto____0 = (function (){
var statearr_38612 = [null,null,null,null,null,null,null,null];
(statearr_38612[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto__);

(statearr_38612[(1)] = (1));

return statearr_38612;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto____1 = (function (state_38609){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_38609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e38613){if((e38613 instanceof Object)){
var ex__34386__auto__ = e38613;
var statearr_38614_38616 = state_38609;
(statearr_38614_38616[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38617 = state_38609;
state_38609 = G__38617;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto__ = function(state_38609){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto____1.call(this,state_38609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34475__auto__ = (function (){var statearr_38615 = f__34474__auto__.call(null);
(statearr_38615[(6)] = c__34473__auto__);

return statearr_38615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__,figwheel_version,temp__5457__auto__))
);

return c__34473__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38618){
var map__38619 = p__38618;
var map__38619__$1 = ((((!((map__38619 == null)))?(((((map__38619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38619):map__38619);
var file = cljs.core.get.call(null,map__38619__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38619__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38619__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38621 = "";
var G__38621__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38621),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38621);
var G__38621__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38621__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38621__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38621__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38621__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38622){
var map__38623 = p__38622;
var map__38623__$1 = ((((!((map__38623 == null)))?(((((map__38623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38623):map__38623);
var ed = map__38623__$1;
var formatted_exception = cljs.core.get.call(null,map__38623__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38623__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38623__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38625_38629 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38626_38630 = null;
var count__38627_38631 = (0);
var i__38628_38632 = (0);
while(true){
if((i__38628_38632 < count__38627_38631)){
var msg_38633 = cljs.core._nth.call(null,chunk__38626_38630,i__38628_38632);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38633);


var G__38634 = seq__38625_38629;
var G__38635 = chunk__38626_38630;
var G__38636 = count__38627_38631;
var G__38637 = (i__38628_38632 + (1));
seq__38625_38629 = G__38634;
chunk__38626_38630 = G__38635;
count__38627_38631 = G__38636;
i__38628_38632 = G__38637;
continue;
} else {
var temp__5457__auto___38638 = cljs.core.seq.call(null,seq__38625_38629);
if(temp__5457__auto___38638){
var seq__38625_38639__$1 = temp__5457__auto___38638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38625_38639__$1)){
var c__4351__auto___38640 = cljs.core.chunk_first.call(null,seq__38625_38639__$1);
var G__38641 = cljs.core.chunk_rest.call(null,seq__38625_38639__$1);
var G__38642 = c__4351__auto___38640;
var G__38643 = cljs.core.count.call(null,c__4351__auto___38640);
var G__38644 = (0);
seq__38625_38629 = G__38641;
chunk__38626_38630 = G__38642;
count__38627_38631 = G__38643;
i__38628_38632 = G__38644;
continue;
} else {
var msg_38645 = cljs.core.first.call(null,seq__38625_38639__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38645);


var G__38646 = cljs.core.next.call(null,seq__38625_38639__$1);
var G__38647 = null;
var G__38648 = (0);
var G__38649 = (0);
seq__38625_38629 = G__38646;
chunk__38626_38630 = G__38647;
count__38627_38631 = G__38648;
i__38628_38632 = G__38649;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38650){
var map__38651 = p__38650;
var map__38651__$1 = ((((!((map__38651 == null)))?(((((map__38651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38651):map__38651);
var w = map__38651__$1;
var message = cljs.core.get.call(null,map__38651__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38653 = cljs.core.seq.call(null,plugins);
var chunk__38654 = null;
var count__38655 = (0);
var i__38656 = (0);
while(true){
if((i__38656 < count__38655)){
var vec__38657 = cljs.core._nth.call(null,chunk__38654,i__38656);
var k = cljs.core.nth.call(null,vec__38657,(0),null);
var plugin = cljs.core.nth.call(null,vec__38657,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38663 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38653,chunk__38654,count__38655,i__38656,pl_38663,vec__38657,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38663.call(null,msg_hist);
});})(seq__38653,chunk__38654,count__38655,i__38656,pl_38663,vec__38657,k,plugin))
);
} else {
}


var G__38664 = seq__38653;
var G__38665 = chunk__38654;
var G__38666 = count__38655;
var G__38667 = (i__38656 + (1));
seq__38653 = G__38664;
chunk__38654 = G__38665;
count__38655 = G__38666;
i__38656 = G__38667;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38653);
if(temp__5457__auto__){
var seq__38653__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38653__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__38653__$1);
var G__38668 = cljs.core.chunk_rest.call(null,seq__38653__$1);
var G__38669 = c__4351__auto__;
var G__38670 = cljs.core.count.call(null,c__4351__auto__);
var G__38671 = (0);
seq__38653 = G__38668;
chunk__38654 = G__38669;
count__38655 = G__38670;
i__38656 = G__38671;
continue;
} else {
var vec__38660 = cljs.core.first.call(null,seq__38653__$1);
var k = cljs.core.nth.call(null,vec__38660,(0),null);
var plugin = cljs.core.nth.call(null,vec__38660,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38672 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38653,chunk__38654,count__38655,i__38656,pl_38672,vec__38660,k,plugin,seq__38653__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38672.call(null,msg_hist);
});})(seq__38653,chunk__38654,count__38655,i__38656,pl_38672,vec__38660,k,plugin,seq__38653__$1,temp__5457__auto__))
);
} else {
}


var G__38673 = cljs.core.next.call(null,seq__38653__$1);
var G__38674 = null;
var G__38675 = (0);
var G__38676 = (0);
seq__38653 = G__38673;
chunk__38654 = G__38674;
count__38655 = G__38675;
i__38656 = G__38676;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38678 = arguments.length;
switch (G__38678) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38679_38684 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38680_38685 = null;
var count__38681_38686 = (0);
var i__38682_38687 = (0);
while(true){
if((i__38682_38687 < count__38681_38686)){
var msg_38688 = cljs.core._nth.call(null,chunk__38680_38685,i__38682_38687);
figwheel.client.socket.handle_incoming_message.call(null,msg_38688);


var G__38689 = seq__38679_38684;
var G__38690 = chunk__38680_38685;
var G__38691 = count__38681_38686;
var G__38692 = (i__38682_38687 + (1));
seq__38679_38684 = G__38689;
chunk__38680_38685 = G__38690;
count__38681_38686 = G__38691;
i__38682_38687 = G__38692;
continue;
} else {
var temp__5457__auto___38693 = cljs.core.seq.call(null,seq__38679_38684);
if(temp__5457__auto___38693){
var seq__38679_38694__$1 = temp__5457__auto___38693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38679_38694__$1)){
var c__4351__auto___38695 = cljs.core.chunk_first.call(null,seq__38679_38694__$1);
var G__38696 = cljs.core.chunk_rest.call(null,seq__38679_38694__$1);
var G__38697 = c__4351__auto___38695;
var G__38698 = cljs.core.count.call(null,c__4351__auto___38695);
var G__38699 = (0);
seq__38679_38684 = G__38696;
chunk__38680_38685 = G__38697;
count__38681_38686 = G__38698;
i__38682_38687 = G__38699;
continue;
} else {
var msg_38700 = cljs.core.first.call(null,seq__38679_38694__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38700);


var G__38701 = cljs.core.next.call(null,seq__38679_38694__$1);
var G__38702 = null;
var G__38703 = (0);
var G__38704 = (0);
seq__38679_38684 = G__38701;
chunk__38680_38685 = G__38702;
count__38681_38686 = G__38703;
i__38682_38687 = G__38704;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38709 = arguments.length;
var i__4532__auto___38710 = (0);
while(true){
if((i__4532__auto___38710 < len__4531__auto___38709)){
args__4534__auto__.push((arguments[i__4532__auto___38710]));

var G__38711 = (i__4532__auto___38710 + (1));
i__4532__auto___38710 = G__38711;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38706){
var map__38707 = p__38706;
var map__38707__$1 = ((((!((map__38707 == null)))?(((((map__38707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38707):map__38707);
var opts = map__38707__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38705){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38705));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38712){if((e38712 instanceof Error)){
var e = e38712;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38712;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38713){
var map__38714 = p__38713;
var map__38714__$1 = ((((!((map__38714 == null)))?(((((map__38714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38714):map__38714);
var msg_name = cljs.core.get.call(null,map__38714__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1551586195270
