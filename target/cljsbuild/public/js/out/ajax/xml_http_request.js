// Compiled by ClojureScript 1.10.339 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33960,handler){
var map__33961 = p__33960;
var map__33961__$1 = ((((!((map__33961 == null)))?(((((map__33961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33961):map__33961);
var uri = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__33961,map__33961__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__33959_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__33959_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__33961,map__33961__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___33973 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___33973)){
var response_type_33974 = temp__5457__auto___33973;
this$__$1.responseType = cljs.core.name.call(null,response_type_33974);
} else {
}

var seq__33963_33975 = cljs.core.seq.call(null,headers);
var chunk__33964_33976 = null;
var count__33965_33977 = (0);
var i__33966_33978 = (0);
while(true){
if((i__33966_33978 < count__33965_33977)){
var vec__33967_33979 = cljs.core._nth.call(null,chunk__33964_33976,i__33966_33978);
var k_33980 = cljs.core.nth.call(null,vec__33967_33979,(0),null);
var v_33981 = cljs.core.nth.call(null,vec__33967_33979,(1),null);
this$__$1.setRequestHeader(k_33980,v_33981);


var G__33982 = seq__33963_33975;
var G__33983 = chunk__33964_33976;
var G__33984 = count__33965_33977;
var G__33985 = (i__33966_33978 + (1));
seq__33963_33975 = G__33982;
chunk__33964_33976 = G__33983;
count__33965_33977 = G__33984;
i__33966_33978 = G__33985;
continue;
} else {
var temp__5457__auto___33986 = cljs.core.seq.call(null,seq__33963_33975);
if(temp__5457__auto___33986){
var seq__33963_33987__$1 = temp__5457__auto___33986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33963_33987__$1)){
var c__4351__auto___33988 = cljs.core.chunk_first.call(null,seq__33963_33987__$1);
var G__33989 = cljs.core.chunk_rest.call(null,seq__33963_33987__$1);
var G__33990 = c__4351__auto___33988;
var G__33991 = cljs.core.count.call(null,c__4351__auto___33988);
var G__33992 = (0);
seq__33963_33975 = G__33989;
chunk__33964_33976 = G__33990;
count__33965_33977 = G__33991;
i__33966_33978 = G__33992;
continue;
} else {
var vec__33970_33993 = cljs.core.first.call(null,seq__33963_33987__$1);
var k_33994 = cljs.core.nth.call(null,vec__33970_33993,(0),null);
var v_33995 = cljs.core.nth.call(null,vec__33970_33993,(1),null);
this$__$1.setRequestHeader(k_33994,v_33995);


var G__33996 = cljs.core.next.call(null,seq__33963_33987__$1);
var G__33997 = null;
var G__33998 = (0);
var G__33999 = (0);
seq__33963_33975 = G__33996;
chunk__33964_33976 = G__33997;
count__33965_33977 = G__33998;
i__33966_33978 = G__33999;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1551156900991
