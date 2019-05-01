// Compiled by ClojureScript 1.10.339 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31698,handler){
var map__31699 = p__31698;
var map__31699__$1 = ((((!((map__31699 == null)))?(((((map__31699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31699):map__31699);
var uri = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31699,map__31699__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31697_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31697_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31699,map__31699__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___31711 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___31711)){
var response_type_31712 = temp__5457__auto___31711;
this$__$1.responseType = cljs.core.name.call(null,response_type_31712);
} else {
}

var seq__31701_31713 = cljs.core.seq.call(null,headers);
var chunk__31702_31714 = null;
var count__31703_31715 = (0);
var i__31704_31716 = (0);
while(true){
if((i__31704_31716 < count__31703_31715)){
var vec__31705_31717 = cljs.core._nth.call(null,chunk__31702_31714,i__31704_31716);
var k_31718 = cljs.core.nth.call(null,vec__31705_31717,(0),null);
var v_31719 = cljs.core.nth.call(null,vec__31705_31717,(1),null);
this$__$1.setRequestHeader(k_31718,v_31719);


var G__31720 = seq__31701_31713;
var G__31721 = chunk__31702_31714;
var G__31722 = count__31703_31715;
var G__31723 = (i__31704_31716 + (1));
seq__31701_31713 = G__31720;
chunk__31702_31714 = G__31721;
count__31703_31715 = G__31722;
i__31704_31716 = G__31723;
continue;
} else {
var temp__5457__auto___31724 = cljs.core.seq.call(null,seq__31701_31713);
if(temp__5457__auto___31724){
var seq__31701_31725__$1 = temp__5457__auto___31724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31701_31725__$1)){
var c__4351__auto___31726 = cljs.core.chunk_first.call(null,seq__31701_31725__$1);
var G__31727 = cljs.core.chunk_rest.call(null,seq__31701_31725__$1);
var G__31728 = c__4351__auto___31726;
var G__31729 = cljs.core.count.call(null,c__4351__auto___31726);
var G__31730 = (0);
seq__31701_31713 = G__31727;
chunk__31702_31714 = G__31728;
count__31703_31715 = G__31729;
i__31704_31716 = G__31730;
continue;
} else {
var vec__31708_31731 = cljs.core.first.call(null,seq__31701_31725__$1);
var k_31732 = cljs.core.nth.call(null,vec__31708_31731,(0),null);
var v_31733 = cljs.core.nth.call(null,vec__31708_31731,(1),null);
this$__$1.setRequestHeader(k_31732,v_31733);


var G__31734 = cljs.core.next.call(null,seq__31701_31725__$1);
var G__31735 = null;
var G__31736 = (0);
var G__31737 = (0);
seq__31701_31713 = G__31734;
chunk__31702_31714 = G__31735;
count__31703_31715 = G__31736;
i__31704_31716 = G__31737;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1551586174310
