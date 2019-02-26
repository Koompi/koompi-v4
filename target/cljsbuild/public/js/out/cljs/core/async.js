// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40160 = arguments.length;
switch (G__40160) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40161 = (function (f,blockable,meta40162){
this.f = f;
this.blockable = blockable;
this.meta40162 = meta40162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40163,meta40162__$1){
var self__ = this;
var _40163__$1 = this;
return (new cljs.core.async.t_cljs$core$async40161(self__.f,self__.blockable,meta40162__$1));
});

cljs.core.async.t_cljs$core$async40161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40163){
var self__ = this;
var _40163__$1 = this;
return self__.meta40162;
});

cljs.core.async.t_cljs$core$async40161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40162","meta40162",1669565470,null)], null);
});

cljs.core.async.t_cljs$core$async40161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40161";

cljs.core.async.t_cljs$core$async40161.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async40161");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40161.
 */
cljs.core.async.__GT_t_cljs$core$async40161 = (function cljs$core$async$__GT_t_cljs$core$async40161(f__$1,blockable__$1,meta40162){
return (new cljs.core.async.t_cljs$core$async40161(f__$1,blockable__$1,meta40162));
});

}

return (new cljs.core.async.t_cljs$core$async40161(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40167 = arguments.length;
switch (G__40167) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40170 = arguments.length;
switch (G__40170) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40173 = arguments.length;
switch (G__40173) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40175 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40175);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40175,ret){
return (function (){
return fn1.call(null,val_40175);
});})(val_40175,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40177 = arguments.length;
switch (G__40177) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___40179 = n;
var x_40180 = (0);
while(true){
if((x_40180 < n__4408__auto___40179)){
(a[x_40180] = (0));

var G__40181 = (x_40180 + (1));
x_40180 = G__40181;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40182 = (i + (1));
i = G__40182;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40183 = (function (flag,meta40184){
this.flag = flag;
this.meta40184 = meta40184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40185,meta40184__$1){
var self__ = this;
var _40185__$1 = this;
return (new cljs.core.async.t_cljs$core$async40183(self__.flag,meta40184__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40185){
var self__ = this;
var _40185__$1 = this;
return self__.meta40184;
});})(flag))
;

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40183.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40184","meta40184",82310012,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40183";

cljs.core.async.t_cljs$core$async40183.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async40183");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40183.
 */
cljs.core.async.__GT_t_cljs$core$async40183 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40183(flag__$1,meta40184){
return (new cljs.core.async.t_cljs$core$async40183(flag__$1,meta40184));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40183(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40186 = (function (flag,cb,meta40187){
this.flag = flag;
this.cb = cb;
this.meta40187 = meta40187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40188,meta40187__$1){
var self__ = this;
var _40188__$1 = this;
return (new cljs.core.async.t_cljs$core$async40186(self__.flag,self__.cb,meta40187__$1));
});

cljs.core.async.t_cljs$core$async40186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40188){
var self__ = this;
var _40188__$1 = this;
return self__.meta40187;
});

cljs.core.async.t_cljs$core$async40186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40187","meta40187",-212317257,null)], null);
});

cljs.core.async.t_cljs$core$async40186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40186";

cljs.core.async.t_cljs$core$async40186.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async40186");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40186.
 */
cljs.core.async.__GT_t_cljs$core$async40186 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40186(flag__$1,cb__$1,meta40187){
return (new cljs.core.async.t_cljs$core$async40186(flag__$1,cb__$1,meta40187));
});

}

return (new cljs.core.async.t_cljs$core$async40186(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40189_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40189_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40190_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40190_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40191 = (i + (1));
i = G__40191;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___40197 = arguments.length;
var i__4532__auto___40198 = (0);
while(true){
if((i__4532__auto___40198 < len__4531__auto___40197)){
args__4534__auto__.push((arguments[i__4532__auto___40198]));

var G__40199 = (i__4532__auto___40198 + (1));
i__4532__auto___40198 = G__40199;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40194){
var map__40195 = p__40194;
var map__40195__$1 = ((((!((map__40195 == null)))?(((((map__40195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40195):map__40195);
var opts = map__40195__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40192){
var G__40193 = cljs.core.first.call(null,seq40192);
var seq40192__$1 = cljs.core.next.call(null,seq40192);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40193,seq40192__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40201 = arguments.length;
switch (G__40201) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38236__auto___40247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___40247){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___40247){
return (function (state_40225){
var state_val_40226 = (state_40225[(1)]);
if((state_val_40226 === (7))){
var inst_40221 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40227_40248 = state_40225__$1;
(statearr_40227_40248[(2)] = inst_40221);

(statearr_40227_40248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (1))){
var state_40225__$1 = state_40225;
var statearr_40228_40249 = state_40225__$1;
(statearr_40228_40249[(2)] = null);

(statearr_40228_40249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (4))){
var inst_40204 = (state_40225[(7)]);
var inst_40204__$1 = (state_40225[(2)]);
var inst_40205 = (inst_40204__$1 == null);
var state_40225__$1 = (function (){var statearr_40229 = state_40225;
(statearr_40229[(7)] = inst_40204__$1);

return statearr_40229;
})();
if(cljs.core.truth_(inst_40205)){
var statearr_40230_40250 = state_40225__$1;
(statearr_40230_40250[(1)] = (5));

} else {
var statearr_40231_40251 = state_40225__$1;
(statearr_40231_40251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (13))){
var state_40225__$1 = state_40225;
var statearr_40232_40252 = state_40225__$1;
(statearr_40232_40252[(2)] = null);

(statearr_40232_40252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (6))){
var inst_40204 = (state_40225[(7)]);
var state_40225__$1 = state_40225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40225__$1,(11),to,inst_40204);
} else {
if((state_val_40226 === (3))){
var inst_40223 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40225__$1,inst_40223);
} else {
if((state_val_40226 === (12))){
var state_40225__$1 = state_40225;
var statearr_40233_40253 = state_40225__$1;
(statearr_40233_40253[(2)] = null);

(statearr_40233_40253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (2))){
var state_40225__$1 = state_40225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40225__$1,(4),from);
} else {
if((state_val_40226 === (11))){
var inst_40214 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40214)){
var statearr_40234_40254 = state_40225__$1;
(statearr_40234_40254[(1)] = (12));

} else {
var statearr_40235_40255 = state_40225__$1;
(statearr_40235_40255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (9))){
var state_40225__$1 = state_40225;
var statearr_40236_40256 = state_40225__$1;
(statearr_40236_40256[(2)] = null);

(statearr_40236_40256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (5))){
var state_40225__$1 = state_40225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40237_40257 = state_40225__$1;
(statearr_40237_40257[(1)] = (8));

} else {
var statearr_40238_40258 = state_40225__$1;
(statearr_40238_40258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (14))){
var inst_40219 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40239_40259 = state_40225__$1;
(statearr_40239_40259[(2)] = inst_40219);

(statearr_40239_40259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (10))){
var inst_40211 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40240_40260 = state_40225__$1;
(statearr_40240_40260[(2)] = inst_40211);

(statearr_40240_40260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (8))){
var inst_40208 = cljs.core.async.close_BANG_.call(null,to);
var state_40225__$1 = state_40225;
var statearr_40241_40261 = state_40225__$1;
(statearr_40241_40261[(2)] = inst_40208);

(statearr_40241_40261[(1)] = (10));


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
});})(c__38236__auto___40247))
;
return ((function (switch__38077__auto__,c__38236__auto___40247){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_40242 = [null,null,null,null,null,null,null,null];
(statearr_40242[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_40242[(1)] = (1));

return statearr_40242;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_40225){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40243){if((e40243 instanceof Object)){
var ex__38081__auto__ = e40243;
var statearr_40244_40262 = state_40225;
(statearr_40244_40262[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40263 = state_40225;
state_40225 = G__40263;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_40225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_40225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___40247))
})();
var state__38238__auto__ = (function (){var statearr_40245 = f__38237__auto__.call(null);
(statearr_40245[(6)] = c__38236__auto___40247);

return statearr_40245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___40247))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40264){
var vec__40265 = p__40264;
var v = cljs.core.nth.call(null,vec__40265,(0),null);
var p = cljs.core.nth.call(null,vec__40265,(1),null);
var job = vec__40265;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38236__auto___40436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___40436,res,vec__40265,v,p,job,jobs,results){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___40436,res,vec__40265,v,p,job,jobs,results){
return (function (state_40272){
var state_val_40273 = (state_40272[(1)]);
if((state_val_40273 === (1))){
var state_40272__$1 = state_40272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40272__$1,(2),res,v);
} else {
if((state_val_40273 === (2))){
var inst_40269 = (state_40272[(2)]);
var inst_40270 = cljs.core.async.close_BANG_.call(null,res);
var state_40272__$1 = (function (){var statearr_40274 = state_40272;
(statearr_40274[(7)] = inst_40269);

return statearr_40274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40272__$1,inst_40270);
} else {
return null;
}
}
});})(c__38236__auto___40436,res,vec__40265,v,p,job,jobs,results))
;
return ((function (switch__38077__auto__,c__38236__auto___40436,res,vec__40265,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0 = (function (){
var statearr_40275 = [null,null,null,null,null,null,null,null];
(statearr_40275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__);

(statearr_40275[(1)] = (1));

return statearr_40275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1 = (function (state_40272){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40276){if((e40276 instanceof Object)){
var ex__38081__auto__ = e40276;
var statearr_40277_40437 = state_40272;
(statearr_40277_40437[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40438 = state_40272;
state_40272 = G__40438;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = function(state_40272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1.call(this,state_40272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___40436,res,vec__40265,v,p,job,jobs,results))
})();
var state__38238__auto__ = (function (){var statearr_40278 = f__38237__auto__.call(null);
(statearr_40278[(6)] = c__38236__auto___40436);

return statearr_40278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___40436,res,vec__40265,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40279){
var vec__40280 = p__40279;
var v = cljs.core.nth.call(null,vec__40280,(0),null);
var p = cljs.core.nth.call(null,vec__40280,(1),null);
var job = vec__40280;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___40439 = n;
var __40440 = (0);
while(true){
if((__40440 < n__4408__auto___40439)){
var G__40283_40441 = type;
var G__40283_40442__$1 = (((G__40283_40441 instanceof cljs.core.Keyword))?G__40283_40441.fqn:null);
switch (G__40283_40442__$1) {
case "compute":
var c__38236__auto___40444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40440,c__38236__auto___40444,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (__40440,c__38236__auto___40444,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async){
return (function (state_40296){
var state_val_40297 = (state_40296[(1)]);
if((state_val_40297 === (1))){
var state_40296__$1 = state_40296;
var statearr_40298_40445 = state_40296__$1;
(statearr_40298_40445[(2)] = null);

(statearr_40298_40445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40297 === (2))){
var state_40296__$1 = state_40296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40296__$1,(4),jobs);
} else {
if((state_val_40297 === (3))){
var inst_40294 = (state_40296[(2)]);
var state_40296__$1 = state_40296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40296__$1,inst_40294);
} else {
if((state_val_40297 === (4))){
var inst_40286 = (state_40296[(2)]);
var inst_40287 = process.call(null,inst_40286);
var state_40296__$1 = state_40296;
if(cljs.core.truth_(inst_40287)){
var statearr_40299_40446 = state_40296__$1;
(statearr_40299_40446[(1)] = (5));

} else {
var statearr_40300_40447 = state_40296__$1;
(statearr_40300_40447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40297 === (5))){
var state_40296__$1 = state_40296;
var statearr_40301_40448 = state_40296__$1;
(statearr_40301_40448[(2)] = null);

(statearr_40301_40448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40297 === (6))){
var state_40296__$1 = state_40296;
var statearr_40302_40449 = state_40296__$1;
(statearr_40302_40449[(2)] = null);

(statearr_40302_40449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40297 === (7))){
var inst_40292 = (state_40296[(2)]);
var state_40296__$1 = state_40296;
var statearr_40303_40450 = state_40296__$1;
(statearr_40303_40450[(2)] = inst_40292);

(statearr_40303_40450[(1)] = (3));


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
});})(__40440,c__38236__auto___40444,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async))
;
return ((function (__40440,switch__38077__auto__,c__38236__auto___40444,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0 = (function (){
var statearr_40304 = [null,null,null,null,null,null,null];
(statearr_40304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__);

(statearr_40304[(1)] = (1));

return statearr_40304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1 = (function (state_40296){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40305){if((e40305 instanceof Object)){
var ex__38081__auto__ = e40305;
var statearr_40306_40451 = state_40296;
(statearr_40306_40451[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40452 = state_40296;
state_40296 = G__40452;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = function(state_40296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1.call(this,state_40296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__;
})()
;})(__40440,switch__38077__auto__,c__38236__auto___40444,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async))
})();
var state__38238__auto__ = (function (){var statearr_40307 = f__38237__auto__.call(null);
(statearr_40307[(6)] = c__38236__auto___40444);

return statearr_40307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(__40440,c__38236__auto___40444,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async))
);


break;
case "async":
var c__38236__auto___40453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40440,c__38236__auto___40453,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (__40440,c__38236__auto___40453,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async){
return (function (state_40320){
var state_val_40321 = (state_40320[(1)]);
if((state_val_40321 === (1))){
var state_40320__$1 = state_40320;
var statearr_40322_40454 = state_40320__$1;
(statearr_40322_40454[(2)] = null);

(statearr_40322_40454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (2))){
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40320__$1,(4),jobs);
} else {
if((state_val_40321 === (3))){
var inst_40318 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40320__$1,inst_40318);
} else {
if((state_val_40321 === (4))){
var inst_40310 = (state_40320[(2)]);
var inst_40311 = async.call(null,inst_40310);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40311)){
var statearr_40323_40455 = state_40320__$1;
(statearr_40323_40455[(1)] = (5));

} else {
var statearr_40324_40456 = state_40320__$1;
(statearr_40324_40456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (5))){
var state_40320__$1 = state_40320;
var statearr_40325_40457 = state_40320__$1;
(statearr_40325_40457[(2)] = null);

(statearr_40325_40457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (6))){
var state_40320__$1 = state_40320;
var statearr_40326_40458 = state_40320__$1;
(statearr_40326_40458[(2)] = null);

(statearr_40326_40458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (7))){
var inst_40316 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40327_40459 = state_40320__$1;
(statearr_40327_40459[(2)] = inst_40316);

(statearr_40327_40459[(1)] = (3));


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
});})(__40440,c__38236__auto___40453,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async))
;
return ((function (__40440,switch__38077__auto__,c__38236__auto___40453,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0 = (function (){
var statearr_40328 = [null,null,null,null,null,null,null];
(statearr_40328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__);

(statearr_40328[(1)] = (1));

return statearr_40328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1 = (function (state_40320){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40329){if((e40329 instanceof Object)){
var ex__38081__auto__ = e40329;
var statearr_40330_40460 = state_40320;
(statearr_40330_40460[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40461 = state_40320;
state_40320 = G__40461;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = function(state_40320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1.call(this,state_40320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__;
})()
;})(__40440,switch__38077__auto__,c__38236__auto___40453,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async))
})();
var state__38238__auto__ = (function (){var statearr_40331 = f__38237__auto__.call(null);
(statearr_40331[(6)] = c__38236__auto___40453);

return statearr_40331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(__40440,c__38236__auto___40453,G__40283_40441,G__40283_40442__$1,n__4408__auto___40439,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40283_40442__$1)].join('')));

}

var G__40462 = (__40440 + (1));
__40440 = G__40462;
continue;
} else {
}
break;
}

var c__38236__auto___40463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___40463,jobs,results,process,async){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___40463,jobs,results,process,async){
return (function (state_40353){
var state_val_40354 = (state_40353[(1)]);
if((state_val_40354 === (1))){
var state_40353__$1 = state_40353;
var statearr_40355_40464 = state_40353__$1;
(statearr_40355_40464[(2)] = null);

(statearr_40355_40464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (2))){
var state_40353__$1 = state_40353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40353__$1,(4),from);
} else {
if((state_val_40354 === (3))){
var inst_40351 = (state_40353[(2)]);
var state_40353__$1 = state_40353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40353__$1,inst_40351);
} else {
if((state_val_40354 === (4))){
var inst_40334 = (state_40353[(7)]);
var inst_40334__$1 = (state_40353[(2)]);
var inst_40335 = (inst_40334__$1 == null);
var state_40353__$1 = (function (){var statearr_40356 = state_40353;
(statearr_40356[(7)] = inst_40334__$1);

return statearr_40356;
})();
if(cljs.core.truth_(inst_40335)){
var statearr_40357_40465 = state_40353__$1;
(statearr_40357_40465[(1)] = (5));

} else {
var statearr_40358_40466 = state_40353__$1;
(statearr_40358_40466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (5))){
var inst_40337 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40353__$1 = state_40353;
var statearr_40359_40467 = state_40353__$1;
(statearr_40359_40467[(2)] = inst_40337);

(statearr_40359_40467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (6))){
var inst_40334 = (state_40353[(7)]);
var inst_40339 = (state_40353[(8)]);
var inst_40339__$1 = cljs.core.async.chan.call(null,(1));
var inst_40340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40341 = [inst_40334,inst_40339__$1];
var inst_40342 = (new cljs.core.PersistentVector(null,2,(5),inst_40340,inst_40341,null));
var state_40353__$1 = (function (){var statearr_40360 = state_40353;
(statearr_40360[(8)] = inst_40339__$1);

return statearr_40360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40353__$1,(8),jobs,inst_40342);
} else {
if((state_val_40354 === (7))){
var inst_40349 = (state_40353[(2)]);
var state_40353__$1 = state_40353;
var statearr_40361_40468 = state_40353__$1;
(statearr_40361_40468[(2)] = inst_40349);

(statearr_40361_40468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (8))){
var inst_40339 = (state_40353[(8)]);
var inst_40344 = (state_40353[(2)]);
var state_40353__$1 = (function (){var statearr_40362 = state_40353;
(statearr_40362[(9)] = inst_40344);

return statearr_40362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40353__$1,(9),results,inst_40339);
} else {
if((state_val_40354 === (9))){
var inst_40346 = (state_40353[(2)]);
var state_40353__$1 = (function (){var statearr_40363 = state_40353;
(statearr_40363[(10)] = inst_40346);

return statearr_40363;
})();
var statearr_40364_40469 = state_40353__$1;
(statearr_40364_40469[(2)] = null);

(statearr_40364_40469[(1)] = (2));


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
});})(c__38236__auto___40463,jobs,results,process,async))
;
return ((function (switch__38077__auto__,c__38236__auto___40463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0 = (function (){
var statearr_40365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__);

(statearr_40365[(1)] = (1));

return statearr_40365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1 = (function (state_40353){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40366){if((e40366 instanceof Object)){
var ex__38081__auto__ = e40366;
var statearr_40367_40470 = state_40353;
(statearr_40367_40470[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40471 = state_40353;
state_40353 = G__40471;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = function(state_40353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1.call(this,state_40353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___40463,jobs,results,process,async))
})();
var state__38238__auto__ = (function (){var statearr_40368 = f__38237__auto__.call(null);
(statearr_40368[(6)] = c__38236__auto___40463);

return statearr_40368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___40463,jobs,results,process,async))
);


var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__,jobs,results,process,async){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__,jobs,results,process,async){
return (function (state_40406){
var state_val_40407 = (state_40406[(1)]);
if((state_val_40407 === (7))){
var inst_40402 = (state_40406[(2)]);
var state_40406__$1 = state_40406;
var statearr_40408_40472 = state_40406__$1;
(statearr_40408_40472[(2)] = inst_40402);

(statearr_40408_40472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (20))){
var state_40406__$1 = state_40406;
var statearr_40409_40473 = state_40406__$1;
(statearr_40409_40473[(2)] = null);

(statearr_40409_40473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (1))){
var state_40406__$1 = state_40406;
var statearr_40410_40474 = state_40406__$1;
(statearr_40410_40474[(2)] = null);

(statearr_40410_40474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (4))){
var inst_40371 = (state_40406[(7)]);
var inst_40371__$1 = (state_40406[(2)]);
var inst_40372 = (inst_40371__$1 == null);
var state_40406__$1 = (function (){var statearr_40411 = state_40406;
(statearr_40411[(7)] = inst_40371__$1);

return statearr_40411;
})();
if(cljs.core.truth_(inst_40372)){
var statearr_40412_40475 = state_40406__$1;
(statearr_40412_40475[(1)] = (5));

} else {
var statearr_40413_40476 = state_40406__$1;
(statearr_40413_40476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (15))){
var inst_40384 = (state_40406[(8)]);
var state_40406__$1 = state_40406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40406__$1,(18),to,inst_40384);
} else {
if((state_val_40407 === (21))){
var inst_40397 = (state_40406[(2)]);
var state_40406__$1 = state_40406;
var statearr_40414_40477 = state_40406__$1;
(statearr_40414_40477[(2)] = inst_40397);

(statearr_40414_40477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (13))){
var inst_40399 = (state_40406[(2)]);
var state_40406__$1 = (function (){var statearr_40415 = state_40406;
(statearr_40415[(9)] = inst_40399);

return statearr_40415;
})();
var statearr_40416_40478 = state_40406__$1;
(statearr_40416_40478[(2)] = null);

(statearr_40416_40478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (6))){
var inst_40371 = (state_40406[(7)]);
var state_40406__$1 = state_40406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40406__$1,(11),inst_40371);
} else {
if((state_val_40407 === (17))){
var inst_40392 = (state_40406[(2)]);
var state_40406__$1 = state_40406;
if(cljs.core.truth_(inst_40392)){
var statearr_40417_40479 = state_40406__$1;
(statearr_40417_40479[(1)] = (19));

} else {
var statearr_40418_40480 = state_40406__$1;
(statearr_40418_40480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (3))){
var inst_40404 = (state_40406[(2)]);
var state_40406__$1 = state_40406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40406__$1,inst_40404);
} else {
if((state_val_40407 === (12))){
var inst_40381 = (state_40406[(10)]);
var state_40406__$1 = state_40406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40406__$1,(14),inst_40381);
} else {
if((state_val_40407 === (2))){
var state_40406__$1 = state_40406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40406__$1,(4),results);
} else {
if((state_val_40407 === (19))){
var state_40406__$1 = state_40406;
var statearr_40419_40481 = state_40406__$1;
(statearr_40419_40481[(2)] = null);

(statearr_40419_40481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (11))){
var inst_40381 = (state_40406[(2)]);
var state_40406__$1 = (function (){var statearr_40420 = state_40406;
(statearr_40420[(10)] = inst_40381);

return statearr_40420;
})();
var statearr_40421_40482 = state_40406__$1;
(statearr_40421_40482[(2)] = null);

(statearr_40421_40482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (9))){
var state_40406__$1 = state_40406;
var statearr_40422_40483 = state_40406__$1;
(statearr_40422_40483[(2)] = null);

(statearr_40422_40483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (5))){
var state_40406__$1 = state_40406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40423_40484 = state_40406__$1;
(statearr_40423_40484[(1)] = (8));

} else {
var statearr_40424_40485 = state_40406__$1;
(statearr_40424_40485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (14))){
var inst_40386 = (state_40406[(11)]);
var inst_40384 = (state_40406[(8)]);
var inst_40384__$1 = (state_40406[(2)]);
var inst_40385 = (inst_40384__$1 == null);
var inst_40386__$1 = cljs.core.not.call(null,inst_40385);
var state_40406__$1 = (function (){var statearr_40425 = state_40406;
(statearr_40425[(11)] = inst_40386__$1);

(statearr_40425[(8)] = inst_40384__$1);

return statearr_40425;
})();
if(inst_40386__$1){
var statearr_40426_40486 = state_40406__$1;
(statearr_40426_40486[(1)] = (15));

} else {
var statearr_40427_40487 = state_40406__$1;
(statearr_40427_40487[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (16))){
var inst_40386 = (state_40406[(11)]);
var state_40406__$1 = state_40406;
var statearr_40428_40488 = state_40406__$1;
(statearr_40428_40488[(2)] = inst_40386);

(statearr_40428_40488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (10))){
var inst_40378 = (state_40406[(2)]);
var state_40406__$1 = state_40406;
var statearr_40429_40489 = state_40406__$1;
(statearr_40429_40489[(2)] = inst_40378);

(statearr_40429_40489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (18))){
var inst_40389 = (state_40406[(2)]);
var state_40406__$1 = state_40406;
var statearr_40430_40490 = state_40406__$1;
(statearr_40430_40490[(2)] = inst_40389);

(statearr_40430_40490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40407 === (8))){
var inst_40375 = cljs.core.async.close_BANG_.call(null,to);
var state_40406__$1 = state_40406;
var statearr_40431_40491 = state_40406__$1;
(statearr_40431_40491[(2)] = inst_40375);

(statearr_40431_40491[(1)] = (10));


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
});})(c__38236__auto__,jobs,results,process,async))
;
return ((function (switch__38077__auto__,c__38236__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0 = (function (){
var statearr_40432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__);

(statearr_40432[(1)] = (1));

return statearr_40432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1 = (function (state_40406){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40433){if((e40433 instanceof Object)){
var ex__38081__auto__ = e40433;
var statearr_40434_40492 = state_40406;
(statearr_40434_40492[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40493 = state_40406;
state_40406 = G__40493;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__ = function(state_40406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1.call(this,state_40406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38078__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__,jobs,results,process,async))
})();
var state__38238__auto__ = (function (){var statearr_40435 = f__38237__auto__.call(null);
(statearr_40435[(6)] = c__38236__auto__);

return statearr_40435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__,jobs,results,process,async))
);

return c__38236__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40495 = arguments.length;
switch (G__40495) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40498 = arguments.length;
switch (G__40498) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40501 = arguments.length;
switch (G__40501) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38236__auto___40550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___40550,tc,fc){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___40550,tc,fc){
return (function (state_40527){
var state_val_40528 = (state_40527[(1)]);
if((state_val_40528 === (7))){
var inst_40523 = (state_40527[(2)]);
var state_40527__$1 = state_40527;
var statearr_40529_40551 = state_40527__$1;
(statearr_40529_40551[(2)] = inst_40523);

(statearr_40529_40551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (1))){
var state_40527__$1 = state_40527;
var statearr_40530_40552 = state_40527__$1;
(statearr_40530_40552[(2)] = null);

(statearr_40530_40552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (4))){
var inst_40504 = (state_40527[(7)]);
var inst_40504__$1 = (state_40527[(2)]);
var inst_40505 = (inst_40504__$1 == null);
var state_40527__$1 = (function (){var statearr_40531 = state_40527;
(statearr_40531[(7)] = inst_40504__$1);

return statearr_40531;
})();
if(cljs.core.truth_(inst_40505)){
var statearr_40532_40553 = state_40527__$1;
(statearr_40532_40553[(1)] = (5));

} else {
var statearr_40533_40554 = state_40527__$1;
(statearr_40533_40554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (13))){
var state_40527__$1 = state_40527;
var statearr_40534_40555 = state_40527__$1;
(statearr_40534_40555[(2)] = null);

(statearr_40534_40555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (6))){
var inst_40504 = (state_40527[(7)]);
var inst_40510 = p.call(null,inst_40504);
var state_40527__$1 = state_40527;
if(cljs.core.truth_(inst_40510)){
var statearr_40535_40556 = state_40527__$1;
(statearr_40535_40556[(1)] = (9));

} else {
var statearr_40536_40557 = state_40527__$1;
(statearr_40536_40557[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (3))){
var inst_40525 = (state_40527[(2)]);
var state_40527__$1 = state_40527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40527__$1,inst_40525);
} else {
if((state_val_40528 === (12))){
var state_40527__$1 = state_40527;
var statearr_40537_40558 = state_40527__$1;
(statearr_40537_40558[(2)] = null);

(statearr_40537_40558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (2))){
var state_40527__$1 = state_40527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40527__$1,(4),ch);
} else {
if((state_val_40528 === (11))){
var inst_40504 = (state_40527[(7)]);
var inst_40514 = (state_40527[(2)]);
var state_40527__$1 = state_40527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40527__$1,(8),inst_40514,inst_40504);
} else {
if((state_val_40528 === (9))){
var state_40527__$1 = state_40527;
var statearr_40538_40559 = state_40527__$1;
(statearr_40538_40559[(2)] = tc);

(statearr_40538_40559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (5))){
var inst_40507 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40508 = cljs.core.async.close_BANG_.call(null,fc);
var state_40527__$1 = (function (){var statearr_40539 = state_40527;
(statearr_40539[(8)] = inst_40507);

return statearr_40539;
})();
var statearr_40540_40560 = state_40527__$1;
(statearr_40540_40560[(2)] = inst_40508);

(statearr_40540_40560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (14))){
var inst_40521 = (state_40527[(2)]);
var state_40527__$1 = state_40527;
var statearr_40541_40561 = state_40527__$1;
(statearr_40541_40561[(2)] = inst_40521);

(statearr_40541_40561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (10))){
var state_40527__$1 = state_40527;
var statearr_40542_40562 = state_40527__$1;
(statearr_40542_40562[(2)] = fc);

(statearr_40542_40562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40528 === (8))){
var inst_40516 = (state_40527[(2)]);
var state_40527__$1 = state_40527;
if(cljs.core.truth_(inst_40516)){
var statearr_40543_40563 = state_40527__$1;
(statearr_40543_40563[(1)] = (12));

} else {
var statearr_40544_40564 = state_40527__$1;
(statearr_40544_40564[(1)] = (13));

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
});})(c__38236__auto___40550,tc,fc))
;
return ((function (switch__38077__auto__,c__38236__auto___40550,tc,fc){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_40545 = [null,null,null,null,null,null,null,null,null];
(statearr_40545[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_40545[(1)] = (1));

return statearr_40545;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_40527){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40546){if((e40546 instanceof Object)){
var ex__38081__auto__ = e40546;
var statearr_40547_40565 = state_40527;
(statearr_40547_40565[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40566 = state_40527;
state_40527 = G__40566;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_40527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_40527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___40550,tc,fc))
})();
var state__38238__auto__ = (function (){var statearr_40548 = f__38237__auto__.call(null);
(statearr_40548[(6)] = c__38236__auto___40550);

return statearr_40548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___40550,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__){
return (function (state_40587){
var state_val_40588 = (state_40587[(1)]);
if((state_val_40588 === (7))){
var inst_40583 = (state_40587[(2)]);
var state_40587__$1 = state_40587;
var statearr_40589_40607 = state_40587__$1;
(statearr_40589_40607[(2)] = inst_40583);

(statearr_40589_40607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40588 === (1))){
var inst_40567 = init;
var state_40587__$1 = (function (){var statearr_40590 = state_40587;
(statearr_40590[(7)] = inst_40567);

return statearr_40590;
})();
var statearr_40591_40608 = state_40587__$1;
(statearr_40591_40608[(2)] = null);

(statearr_40591_40608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40588 === (4))){
var inst_40570 = (state_40587[(8)]);
var inst_40570__$1 = (state_40587[(2)]);
var inst_40571 = (inst_40570__$1 == null);
var state_40587__$1 = (function (){var statearr_40592 = state_40587;
(statearr_40592[(8)] = inst_40570__$1);

return statearr_40592;
})();
if(cljs.core.truth_(inst_40571)){
var statearr_40593_40609 = state_40587__$1;
(statearr_40593_40609[(1)] = (5));

} else {
var statearr_40594_40610 = state_40587__$1;
(statearr_40594_40610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40588 === (6))){
var inst_40570 = (state_40587[(8)]);
var inst_40574 = (state_40587[(9)]);
var inst_40567 = (state_40587[(7)]);
var inst_40574__$1 = f.call(null,inst_40567,inst_40570);
var inst_40575 = cljs.core.reduced_QMARK_.call(null,inst_40574__$1);
var state_40587__$1 = (function (){var statearr_40595 = state_40587;
(statearr_40595[(9)] = inst_40574__$1);

return statearr_40595;
})();
if(inst_40575){
var statearr_40596_40611 = state_40587__$1;
(statearr_40596_40611[(1)] = (8));

} else {
var statearr_40597_40612 = state_40587__$1;
(statearr_40597_40612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40588 === (3))){
var inst_40585 = (state_40587[(2)]);
var state_40587__$1 = state_40587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40587__$1,inst_40585);
} else {
if((state_val_40588 === (2))){
var state_40587__$1 = state_40587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40587__$1,(4),ch);
} else {
if((state_val_40588 === (9))){
var inst_40574 = (state_40587[(9)]);
var inst_40567 = inst_40574;
var state_40587__$1 = (function (){var statearr_40598 = state_40587;
(statearr_40598[(7)] = inst_40567);

return statearr_40598;
})();
var statearr_40599_40613 = state_40587__$1;
(statearr_40599_40613[(2)] = null);

(statearr_40599_40613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40588 === (5))){
var inst_40567 = (state_40587[(7)]);
var state_40587__$1 = state_40587;
var statearr_40600_40614 = state_40587__$1;
(statearr_40600_40614[(2)] = inst_40567);

(statearr_40600_40614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40588 === (10))){
var inst_40581 = (state_40587[(2)]);
var state_40587__$1 = state_40587;
var statearr_40601_40615 = state_40587__$1;
(statearr_40601_40615[(2)] = inst_40581);

(statearr_40601_40615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40588 === (8))){
var inst_40574 = (state_40587[(9)]);
var inst_40577 = cljs.core.deref.call(null,inst_40574);
var state_40587__$1 = state_40587;
var statearr_40602_40616 = state_40587__$1;
(statearr_40602_40616[(2)] = inst_40577);

(statearr_40602_40616[(1)] = (10));


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
});})(c__38236__auto__))
;
return ((function (switch__38077__auto__,c__38236__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38078__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38078__auto____0 = (function (){
var statearr_40603 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40603[(0)] = cljs$core$async$reduce_$_state_machine__38078__auto__);

(statearr_40603[(1)] = (1));

return statearr_40603;
});
var cljs$core$async$reduce_$_state_machine__38078__auto____1 = (function (state_40587){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40604){if((e40604 instanceof Object)){
var ex__38081__auto__ = e40604;
var statearr_40605_40617 = state_40587;
(statearr_40605_40617[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40618 = state_40587;
state_40587 = G__40618;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38078__auto__ = function(state_40587){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38078__auto____1.call(this,state_40587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38078__auto____0;
cljs$core$async$reduce_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38078__auto____1;
return cljs$core$async$reduce_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__))
})();
var state__38238__auto__ = (function (){var statearr_40606 = f__38237__auto__.call(null);
(statearr_40606[(6)] = c__38236__auto__);

return statearr_40606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__))
);

return c__38236__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__,f__$1){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__,f__$1){
return (function (state_40624){
var state_val_40625 = (state_40624[(1)]);
if((state_val_40625 === (1))){
var inst_40619 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40624__$1 = state_40624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40624__$1,(2),inst_40619);
} else {
if((state_val_40625 === (2))){
var inst_40621 = (state_40624[(2)]);
var inst_40622 = f__$1.call(null,inst_40621);
var state_40624__$1 = state_40624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40624__$1,inst_40622);
} else {
return null;
}
}
});})(c__38236__auto__,f__$1))
;
return ((function (switch__38077__auto__,c__38236__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38078__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38078__auto____0 = (function (){
var statearr_40626 = [null,null,null,null,null,null,null];
(statearr_40626[(0)] = cljs$core$async$transduce_$_state_machine__38078__auto__);

(statearr_40626[(1)] = (1));

return statearr_40626;
});
var cljs$core$async$transduce_$_state_machine__38078__auto____1 = (function (state_40624){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40627){if((e40627 instanceof Object)){
var ex__38081__auto__ = e40627;
var statearr_40628_40630 = state_40624;
(statearr_40628_40630[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40631 = state_40624;
state_40624 = G__40631;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38078__auto__ = function(state_40624){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38078__auto____1.call(this,state_40624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38078__auto____0;
cljs$core$async$transduce_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38078__auto____1;
return cljs$core$async$transduce_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__,f__$1))
})();
var state__38238__auto__ = (function (){var statearr_40629 = f__38237__auto__.call(null);
(statearr_40629[(6)] = c__38236__auto__);

return statearr_40629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__,f__$1))
);

return c__38236__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40633 = arguments.length;
switch (G__40633) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__){
return (function (state_40658){
var state_val_40659 = (state_40658[(1)]);
if((state_val_40659 === (7))){
var inst_40640 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40660_40681 = state_40658__$1;
(statearr_40660_40681[(2)] = inst_40640);

(statearr_40660_40681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (1))){
var inst_40634 = cljs.core.seq.call(null,coll);
var inst_40635 = inst_40634;
var state_40658__$1 = (function (){var statearr_40661 = state_40658;
(statearr_40661[(7)] = inst_40635);

return statearr_40661;
})();
var statearr_40662_40682 = state_40658__$1;
(statearr_40662_40682[(2)] = null);

(statearr_40662_40682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (4))){
var inst_40635 = (state_40658[(7)]);
var inst_40638 = cljs.core.first.call(null,inst_40635);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40658__$1,(7),ch,inst_40638);
} else {
if((state_val_40659 === (13))){
var inst_40652 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40663_40683 = state_40658__$1;
(statearr_40663_40683[(2)] = inst_40652);

(statearr_40663_40683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (6))){
var inst_40643 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
if(cljs.core.truth_(inst_40643)){
var statearr_40664_40684 = state_40658__$1;
(statearr_40664_40684[(1)] = (8));

} else {
var statearr_40665_40685 = state_40658__$1;
(statearr_40665_40685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (3))){
var inst_40656 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40658__$1,inst_40656);
} else {
if((state_val_40659 === (12))){
var state_40658__$1 = state_40658;
var statearr_40666_40686 = state_40658__$1;
(statearr_40666_40686[(2)] = null);

(statearr_40666_40686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (2))){
var inst_40635 = (state_40658[(7)]);
var state_40658__$1 = state_40658;
if(cljs.core.truth_(inst_40635)){
var statearr_40667_40687 = state_40658__$1;
(statearr_40667_40687[(1)] = (4));

} else {
var statearr_40668_40688 = state_40658__$1;
(statearr_40668_40688[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (11))){
var inst_40649 = cljs.core.async.close_BANG_.call(null,ch);
var state_40658__$1 = state_40658;
var statearr_40669_40689 = state_40658__$1;
(statearr_40669_40689[(2)] = inst_40649);

(statearr_40669_40689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (9))){
var state_40658__$1 = state_40658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40670_40690 = state_40658__$1;
(statearr_40670_40690[(1)] = (11));

} else {
var statearr_40671_40691 = state_40658__$1;
(statearr_40671_40691[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (5))){
var inst_40635 = (state_40658[(7)]);
var state_40658__$1 = state_40658;
var statearr_40672_40692 = state_40658__$1;
(statearr_40672_40692[(2)] = inst_40635);

(statearr_40672_40692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (10))){
var inst_40654 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40673_40693 = state_40658__$1;
(statearr_40673_40693[(2)] = inst_40654);

(statearr_40673_40693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (8))){
var inst_40635 = (state_40658[(7)]);
var inst_40645 = cljs.core.next.call(null,inst_40635);
var inst_40635__$1 = inst_40645;
var state_40658__$1 = (function (){var statearr_40674 = state_40658;
(statearr_40674[(7)] = inst_40635__$1);

return statearr_40674;
})();
var statearr_40675_40694 = state_40658__$1;
(statearr_40675_40694[(2)] = null);

(statearr_40675_40694[(1)] = (2));


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
});})(c__38236__auto__))
;
return ((function (switch__38077__auto__,c__38236__auto__){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_40676 = [null,null,null,null,null,null,null,null];
(statearr_40676[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_40676[(1)] = (1));

return statearr_40676;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_40658){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40677){if((e40677 instanceof Object)){
var ex__38081__auto__ = e40677;
var statearr_40678_40695 = state_40658;
(statearr_40678_40695[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40696 = state_40658;
state_40658 = G__40696;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_40658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_40658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__))
})();
var state__38238__auto__ = (function (){var statearr_40679 = f__38237__auto__.call(null);
(statearr_40679[(6)] = c__38236__auto__);

return statearr_40679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__))
);

return c__38236__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40697 = (function (ch,cs,meta40698){
this.ch = ch;
this.cs = cs;
this.meta40698 = meta40698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40699,meta40698__$1){
var self__ = this;
var _40699__$1 = this;
return (new cljs.core.async.t_cljs$core$async40697(self__.ch,self__.cs,meta40698__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40699){
var self__ = this;
var _40699__$1 = this;
return self__.meta40698;
});})(cs))
;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40697.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40698","meta40698",279624030,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40697";

cljs.core.async.t_cljs$core$async40697.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async40697");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40697.
 */
cljs.core.async.__GT_t_cljs$core$async40697 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40697(ch__$1,cs__$1,meta40698){
return (new cljs.core.async.t_cljs$core$async40697(ch__$1,cs__$1,meta40698));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40697(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38236__auto___40919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___40919,cs,m,dchan,dctr,done){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___40919,cs,m,dchan,dctr,done){
return (function (state_40834){
var state_val_40835 = (state_40834[(1)]);
if((state_val_40835 === (7))){
var inst_40830 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40836_40920 = state_40834__$1;
(statearr_40836_40920[(2)] = inst_40830);

(statearr_40836_40920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (20))){
var inst_40733 = (state_40834[(7)]);
var inst_40745 = cljs.core.first.call(null,inst_40733);
var inst_40746 = cljs.core.nth.call(null,inst_40745,(0),null);
var inst_40747 = cljs.core.nth.call(null,inst_40745,(1),null);
var state_40834__$1 = (function (){var statearr_40837 = state_40834;
(statearr_40837[(8)] = inst_40746);

return statearr_40837;
})();
if(cljs.core.truth_(inst_40747)){
var statearr_40838_40921 = state_40834__$1;
(statearr_40838_40921[(1)] = (22));

} else {
var statearr_40839_40922 = state_40834__$1;
(statearr_40839_40922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (27))){
var inst_40775 = (state_40834[(9)]);
var inst_40782 = (state_40834[(10)]);
var inst_40702 = (state_40834[(11)]);
var inst_40777 = (state_40834[(12)]);
var inst_40782__$1 = cljs.core._nth.call(null,inst_40775,inst_40777);
var inst_40783 = cljs.core.async.put_BANG_.call(null,inst_40782__$1,inst_40702,done);
var state_40834__$1 = (function (){var statearr_40840 = state_40834;
(statearr_40840[(10)] = inst_40782__$1);

return statearr_40840;
})();
if(cljs.core.truth_(inst_40783)){
var statearr_40841_40923 = state_40834__$1;
(statearr_40841_40923[(1)] = (30));

} else {
var statearr_40842_40924 = state_40834__$1;
(statearr_40842_40924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (1))){
var state_40834__$1 = state_40834;
var statearr_40843_40925 = state_40834__$1;
(statearr_40843_40925[(2)] = null);

(statearr_40843_40925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (24))){
var inst_40733 = (state_40834[(7)]);
var inst_40752 = (state_40834[(2)]);
var inst_40753 = cljs.core.next.call(null,inst_40733);
var inst_40711 = inst_40753;
var inst_40712 = null;
var inst_40713 = (0);
var inst_40714 = (0);
var state_40834__$1 = (function (){var statearr_40844 = state_40834;
(statearr_40844[(13)] = inst_40711);

(statearr_40844[(14)] = inst_40752);

(statearr_40844[(15)] = inst_40713);

(statearr_40844[(16)] = inst_40714);

(statearr_40844[(17)] = inst_40712);

return statearr_40844;
})();
var statearr_40845_40926 = state_40834__$1;
(statearr_40845_40926[(2)] = null);

(statearr_40845_40926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (39))){
var state_40834__$1 = state_40834;
var statearr_40849_40927 = state_40834__$1;
(statearr_40849_40927[(2)] = null);

(statearr_40849_40927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (4))){
var inst_40702 = (state_40834[(11)]);
var inst_40702__$1 = (state_40834[(2)]);
var inst_40703 = (inst_40702__$1 == null);
var state_40834__$1 = (function (){var statearr_40850 = state_40834;
(statearr_40850[(11)] = inst_40702__$1);

return statearr_40850;
})();
if(cljs.core.truth_(inst_40703)){
var statearr_40851_40928 = state_40834__$1;
(statearr_40851_40928[(1)] = (5));

} else {
var statearr_40852_40929 = state_40834__$1;
(statearr_40852_40929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (15))){
var inst_40711 = (state_40834[(13)]);
var inst_40713 = (state_40834[(15)]);
var inst_40714 = (state_40834[(16)]);
var inst_40712 = (state_40834[(17)]);
var inst_40729 = (state_40834[(2)]);
var inst_40730 = (inst_40714 + (1));
var tmp40846 = inst_40711;
var tmp40847 = inst_40713;
var tmp40848 = inst_40712;
var inst_40711__$1 = tmp40846;
var inst_40712__$1 = tmp40848;
var inst_40713__$1 = tmp40847;
var inst_40714__$1 = inst_40730;
var state_40834__$1 = (function (){var statearr_40853 = state_40834;
(statearr_40853[(13)] = inst_40711__$1);

(statearr_40853[(15)] = inst_40713__$1);

(statearr_40853[(16)] = inst_40714__$1);

(statearr_40853[(18)] = inst_40729);

(statearr_40853[(17)] = inst_40712__$1);

return statearr_40853;
})();
var statearr_40854_40930 = state_40834__$1;
(statearr_40854_40930[(2)] = null);

(statearr_40854_40930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (21))){
var inst_40756 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40858_40931 = state_40834__$1;
(statearr_40858_40931[(2)] = inst_40756);

(statearr_40858_40931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (31))){
var inst_40782 = (state_40834[(10)]);
var inst_40786 = done.call(null,null);
var inst_40787 = cljs.core.async.untap_STAR_.call(null,m,inst_40782);
var state_40834__$1 = (function (){var statearr_40859 = state_40834;
(statearr_40859[(19)] = inst_40786);

return statearr_40859;
})();
var statearr_40860_40932 = state_40834__$1;
(statearr_40860_40932[(2)] = inst_40787);

(statearr_40860_40932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (32))){
var inst_40775 = (state_40834[(9)]);
var inst_40774 = (state_40834[(20)]);
var inst_40777 = (state_40834[(12)]);
var inst_40776 = (state_40834[(21)]);
var inst_40789 = (state_40834[(2)]);
var inst_40790 = (inst_40777 + (1));
var tmp40855 = inst_40775;
var tmp40856 = inst_40774;
var tmp40857 = inst_40776;
var inst_40774__$1 = tmp40856;
var inst_40775__$1 = tmp40855;
var inst_40776__$1 = tmp40857;
var inst_40777__$1 = inst_40790;
var state_40834__$1 = (function (){var statearr_40861 = state_40834;
(statearr_40861[(9)] = inst_40775__$1);

(statearr_40861[(20)] = inst_40774__$1);

(statearr_40861[(22)] = inst_40789);

(statearr_40861[(12)] = inst_40777__$1);

(statearr_40861[(21)] = inst_40776__$1);

return statearr_40861;
})();
var statearr_40862_40933 = state_40834__$1;
(statearr_40862_40933[(2)] = null);

(statearr_40862_40933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (40))){
var inst_40802 = (state_40834[(23)]);
var inst_40806 = done.call(null,null);
var inst_40807 = cljs.core.async.untap_STAR_.call(null,m,inst_40802);
var state_40834__$1 = (function (){var statearr_40863 = state_40834;
(statearr_40863[(24)] = inst_40806);

return statearr_40863;
})();
var statearr_40864_40934 = state_40834__$1;
(statearr_40864_40934[(2)] = inst_40807);

(statearr_40864_40934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (33))){
var inst_40793 = (state_40834[(25)]);
var inst_40795 = cljs.core.chunked_seq_QMARK_.call(null,inst_40793);
var state_40834__$1 = state_40834;
if(inst_40795){
var statearr_40865_40935 = state_40834__$1;
(statearr_40865_40935[(1)] = (36));

} else {
var statearr_40866_40936 = state_40834__$1;
(statearr_40866_40936[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (13))){
var inst_40723 = (state_40834[(26)]);
var inst_40726 = cljs.core.async.close_BANG_.call(null,inst_40723);
var state_40834__$1 = state_40834;
var statearr_40867_40937 = state_40834__$1;
(statearr_40867_40937[(2)] = inst_40726);

(statearr_40867_40937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (22))){
var inst_40746 = (state_40834[(8)]);
var inst_40749 = cljs.core.async.close_BANG_.call(null,inst_40746);
var state_40834__$1 = state_40834;
var statearr_40868_40938 = state_40834__$1;
(statearr_40868_40938[(2)] = inst_40749);

(statearr_40868_40938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (36))){
var inst_40793 = (state_40834[(25)]);
var inst_40797 = cljs.core.chunk_first.call(null,inst_40793);
var inst_40798 = cljs.core.chunk_rest.call(null,inst_40793);
var inst_40799 = cljs.core.count.call(null,inst_40797);
var inst_40774 = inst_40798;
var inst_40775 = inst_40797;
var inst_40776 = inst_40799;
var inst_40777 = (0);
var state_40834__$1 = (function (){var statearr_40869 = state_40834;
(statearr_40869[(9)] = inst_40775);

(statearr_40869[(20)] = inst_40774);

(statearr_40869[(12)] = inst_40777);

(statearr_40869[(21)] = inst_40776);

return statearr_40869;
})();
var statearr_40870_40939 = state_40834__$1;
(statearr_40870_40939[(2)] = null);

(statearr_40870_40939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (41))){
var inst_40793 = (state_40834[(25)]);
var inst_40809 = (state_40834[(2)]);
var inst_40810 = cljs.core.next.call(null,inst_40793);
var inst_40774 = inst_40810;
var inst_40775 = null;
var inst_40776 = (0);
var inst_40777 = (0);
var state_40834__$1 = (function (){var statearr_40871 = state_40834;
(statearr_40871[(9)] = inst_40775);

(statearr_40871[(20)] = inst_40774);

(statearr_40871[(27)] = inst_40809);

(statearr_40871[(12)] = inst_40777);

(statearr_40871[(21)] = inst_40776);

return statearr_40871;
})();
var statearr_40872_40940 = state_40834__$1;
(statearr_40872_40940[(2)] = null);

(statearr_40872_40940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (43))){
var state_40834__$1 = state_40834;
var statearr_40873_40941 = state_40834__$1;
(statearr_40873_40941[(2)] = null);

(statearr_40873_40941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (29))){
var inst_40818 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40874_40942 = state_40834__$1;
(statearr_40874_40942[(2)] = inst_40818);

(statearr_40874_40942[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (44))){
var inst_40827 = (state_40834[(2)]);
var state_40834__$1 = (function (){var statearr_40875 = state_40834;
(statearr_40875[(28)] = inst_40827);

return statearr_40875;
})();
var statearr_40876_40943 = state_40834__$1;
(statearr_40876_40943[(2)] = null);

(statearr_40876_40943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (6))){
var inst_40766 = (state_40834[(29)]);
var inst_40765 = cljs.core.deref.call(null,cs);
var inst_40766__$1 = cljs.core.keys.call(null,inst_40765);
var inst_40767 = cljs.core.count.call(null,inst_40766__$1);
var inst_40768 = cljs.core.reset_BANG_.call(null,dctr,inst_40767);
var inst_40773 = cljs.core.seq.call(null,inst_40766__$1);
var inst_40774 = inst_40773;
var inst_40775 = null;
var inst_40776 = (0);
var inst_40777 = (0);
var state_40834__$1 = (function (){var statearr_40877 = state_40834;
(statearr_40877[(9)] = inst_40775);

(statearr_40877[(20)] = inst_40774);

(statearr_40877[(29)] = inst_40766__$1);

(statearr_40877[(30)] = inst_40768);

(statearr_40877[(12)] = inst_40777);

(statearr_40877[(21)] = inst_40776);

return statearr_40877;
})();
var statearr_40878_40944 = state_40834__$1;
(statearr_40878_40944[(2)] = null);

(statearr_40878_40944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (28))){
var inst_40774 = (state_40834[(20)]);
var inst_40793 = (state_40834[(25)]);
var inst_40793__$1 = cljs.core.seq.call(null,inst_40774);
var state_40834__$1 = (function (){var statearr_40879 = state_40834;
(statearr_40879[(25)] = inst_40793__$1);

return statearr_40879;
})();
if(inst_40793__$1){
var statearr_40880_40945 = state_40834__$1;
(statearr_40880_40945[(1)] = (33));

} else {
var statearr_40881_40946 = state_40834__$1;
(statearr_40881_40946[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (25))){
var inst_40777 = (state_40834[(12)]);
var inst_40776 = (state_40834[(21)]);
var inst_40779 = (inst_40777 < inst_40776);
var inst_40780 = inst_40779;
var state_40834__$1 = state_40834;
if(cljs.core.truth_(inst_40780)){
var statearr_40882_40947 = state_40834__$1;
(statearr_40882_40947[(1)] = (27));

} else {
var statearr_40883_40948 = state_40834__$1;
(statearr_40883_40948[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (34))){
var state_40834__$1 = state_40834;
var statearr_40884_40949 = state_40834__$1;
(statearr_40884_40949[(2)] = null);

(statearr_40884_40949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (17))){
var state_40834__$1 = state_40834;
var statearr_40885_40950 = state_40834__$1;
(statearr_40885_40950[(2)] = null);

(statearr_40885_40950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (3))){
var inst_40832 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40834__$1,inst_40832);
} else {
if((state_val_40835 === (12))){
var inst_40761 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40886_40951 = state_40834__$1;
(statearr_40886_40951[(2)] = inst_40761);

(statearr_40886_40951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (2))){
var state_40834__$1 = state_40834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40834__$1,(4),ch);
} else {
if((state_val_40835 === (23))){
var state_40834__$1 = state_40834;
var statearr_40887_40952 = state_40834__$1;
(statearr_40887_40952[(2)] = null);

(statearr_40887_40952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (35))){
var inst_40816 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40888_40953 = state_40834__$1;
(statearr_40888_40953[(2)] = inst_40816);

(statearr_40888_40953[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (19))){
var inst_40733 = (state_40834[(7)]);
var inst_40737 = cljs.core.chunk_first.call(null,inst_40733);
var inst_40738 = cljs.core.chunk_rest.call(null,inst_40733);
var inst_40739 = cljs.core.count.call(null,inst_40737);
var inst_40711 = inst_40738;
var inst_40712 = inst_40737;
var inst_40713 = inst_40739;
var inst_40714 = (0);
var state_40834__$1 = (function (){var statearr_40889 = state_40834;
(statearr_40889[(13)] = inst_40711);

(statearr_40889[(15)] = inst_40713);

(statearr_40889[(16)] = inst_40714);

(statearr_40889[(17)] = inst_40712);

return statearr_40889;
})();
var statearr_40890_40954 = state_40834__$1;
(statearr_40890_40954[(2)] = null);

(statearr_40890_40954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (11))){
var inst_40711 = (state_40834[(13)]);
var inst_40733 = (state_40834[(7)]);
var inst_40733__$1 = cljs.core.seq.call(null,inst_40711);
var state_40834__$1 = (function (){var statearr_40891 = state_40834;
(statearr_40891[(7)] = inst_40733__$1);

return statearr_40891;
})();
if(inst_40733__$1){
var statearr_40892_40955 = state_40834__$1;
(statearr_40892_40955[(1)] = (16));

} else {
var statearr_40893_40956 = state_40834__$1;
(statearr_40893_40956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (9))){
var inst_40763 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40894_40957 = state_40834__$1;
(statearr_40894_40957[(2)] = inst_40763);

(statearr_40894_40957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (5))){
var inst_40709 = cljs.core.deref.call(null,cs);
var inst_40710 = cljs.core.seq.call(null,inst_40709);
var inst_40711 = inst_40710;
var inst_40712 = null;
var inst_40713 = (0);
var inst_40714 = (0);
var state_40834__$1 = (function (){var statearr_40895 = state_40834;
(statearr_40895[(13)] = inst_40711);

(statearr_40895[(15)] = inst_40713);

(statearr_40895[(16)] = inst_40714);

(statearr_40895[(17)] = inst_40712);

return statearr_40895;
})();
var statearr_40896_40958 = state_40834__$1;
(statearr_40896_40958[(2)] = null);

(statearr_40896_40958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (14))){
var state_40834__$1 = state_40834;
var statearr_40897_40959 = state_40834__$1;
(statearr_40897_40959[(2)] = null);

(statearr_40897_40959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (45))){
var inst_40824 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40898_40960 = state_40834__$1;
(statearr_40898_40960[(2)] = inst_40824);

(statearr_40898_40960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (26))){
var inst_40766 = (state_40834[(29)]);
var inst_40820 = (state_40834[(2)]);
var inst_40821 = cljs.core.seq.call(null,inst_40766);
var state_40834__$1 = (function (){var statearr_40899 = state_40834;
(statearr_40899[(31)] = inst_40820);

return statearr_40899;
})();
if(inst_40821){
var statearr_40900_40961 = state_40834__$1;
(statearr_40900_40961[(1)] = (42));

} else {
var statearr_40901_40962 = state_40834__$1;
(statearr_40901_40962[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (16))){
var inst_40733 = (state_40834[(7)]);
var inst_40735 = cljs.core.chunked_seq_QMARK_.call(null,inst_40733);
var state_40834__$1 = state_40834;
if(inst_40735){
var statearr_40902_40963 = state_40834__$1;
(statearr_40902_40963[(1)] = (19));

} else {
var statearr_40903_40964 = state_40834__$1;
(statearr_40903_40964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (38))){
var inst_40813 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40904_40965 = state_40834__$1;
(statearr_40904_40965[(2)] = inst_40813);

(statearr_40904_40965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (30))){
var state_40834__$1 = state_40834;
var statearr_40905_40966 = state_40834__$1;
(statearr_40905_40966[(2)] = null);

(statearr_40905_40966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (10))){
var inst_40714 = (state_40834[(16)]);
var inst_40712 = (state_40834[(17)]);
var inst_40722 = cljs.core._nth.call(null,inst_40712,inst_40714);
var inst_40723 = cljs.core.nth.call(null,inst_40722,(0),null);
var inst_40724 = cljs.core.nth.call(null,inst_40722,(1),null);
var state_40834__$1 = (function (){var statearr_40906 = state_40834;
(statearr_40906[(26)] = inst_40723);

return statearr_40906;
})();
if(cljs.core.truth_(inst_40724)){
var statearr_40907_40967 = state_40834__$1;
(statearr_40907_40967[(1)] = (13));

} else {
var statearr_40908_40968 = state_40834__$1;
(statearr_40908_40968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (18))){
var inst_40759 = (state_40834[(2)]);
var state_40834__$1 = state_40834;
var statearr_40909_40969 = state_40834__$1;
(statearr_40909_40969[(2)] = inst_40759);

(statearr_40909_40969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (42))){
var state_40834__$1 = state_40834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40834__$1,(45),dchan);
} else {
if((state_val_40835 === (37))){
var inst_40802 = (state_40834[(23)]);
var inst_40793 = (state_40834[(25)]);
var inst_40702 = (state_40834[(11)]);
var inst_40802__$1 = cljs.core.first.call(null,inst_40793);
var inst_40803 = cljs.core.async.put_BANG_.call(null,inst_40802__$1,inst_40702,done);
var state_40834__$1 = (function (){var statearr_40910 = state_40834;
(statearr_40910[(23)] = inst_40802__$1);

return statearr_40910;
})();
if(cljs.core.truth_(inst_40803)){
var statearr_40911_40970 = state_40834__$1;
(statearr_40911_40970[(1)] = (39));

} else {
var statearr_40912_40971 = state_40834__$1;
(statearr_40912_40971[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40835 === (8))){
var inst_40713 = (state_40834[(15)]);
var inst_40714 = (state_40834[(16)]);
var inst_40716 = (inst_40714 < inst_40713);
var inst_40717 = inst_40716;
var state_40834__$1 = state_40834;
if(cljs.core.truth_(inst_40717)){
var statearr_40913_40972 = state_40834__$1;
(statearr_40913_40972[(1)] = (10));

} else {
var statearr_40914_40973 = state_40834__$1;
(statearr_40914_40973[(1)] = (11));

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
});})(c__38236__auto___40919,cs,m,dchan,dctr,done))
;
return ((function (switch__38077__auto__,c__38236__auto___40919,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38078__auto__ = null;
var cljs$core$async$mult_$_state_machine__38078__auto____0 = (function (){
var statearr_40915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40915[(0)] = cljs$core$async$mult_$_state_machine__38078__auto__);

(statearr_40915[(1)] = (1));

return statearr_40915;
});
var cljs$core$async$mult_$_state_machine__38078__auto____1 = (function (state_40834){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_40834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e40916){if((e40916 instanceof Object)){
var ex__38081__auto__ = e40916;
var statearr_40917_40974 = state_40834;
(statearr_40917_40974[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40975 = state_40834;
state_40834 = G__40975;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38078__auto__ = function(state_40834){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38078__auto____1.call(this,state_40834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38078__auto____0;
cljs$core$async$mult_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38078__auto____1;
return cljs$core$async$mult_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___40919,cs,m,dchan,dctr,done))
})();
var state__38238__auto__ = (function (){var statearr_40918 = f__38237__auto__.call(null);
(statearr_40918[(6)] = c__38236__auto___40919);

return statearr_40918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___40919,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40977 = arguments.length;
switch (G__40977) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___40989 = arguments.length;
var i__4532__auto___40990 = (0);
while(true){
if((i__4532__auto___40990 < len__4531__auto___40989)){
args__4534__auto__.push((arguments[i__4532__auto___40990]));

var G__40991 = (i__4532__auto___40990 + (1));
i__4532__auto___40990 = G__40991;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40983){
var map__40984 = p__40983;
var map__40984__$1 = ((((!((map__40984 == null)))?(((((map__40984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40984):map__40984);
var opts = map__40984__$1;
var statearr_40986_40992 = state;
(statearr_40986_40992[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__40984,map__40984__$1,opts){
return (function (val){
var statearr_40987_40993 = state;
(statearr_40987_40993[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40984,map__40984__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_40988_40994 = state;
(statearr_40988_40994[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40979){
var G__40980 = cljs.core.first.call(null,seq40979);
var seq40979__$1 = cljs.core.next.call(null,seq40979);
var G__40981 = cljs.core.first.call(null,seq40979__$1);
var seq40979__$2 = cljs.core.next.call(null,seq40979__$1);
var G__40982 = cljs.core.first.call(null,seq40979__$2);
var seq40979__$3 = cljs.core.next.call(null,seq40979__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40980,G__40981,G__40982,seq40979__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40995 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40996){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40996 = meta40996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40997,meta40996__$1){
var self__ = this;
var _40997__$1 = this;
return (new cljs.core.async.t_cljs$core$async40995(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40996__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40997){
var self__ = this;
var _40997__$1 = this;
return self__.meta40996;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40996","meta40996",-310170980,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40995";

cljs.core.async.t_cljs$core$async40995.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async40995");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40995.
 */
cljs.core.async.__GT_t_cljs$core$async40995 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40995(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40996){
return (new cljs.core.async.t_cljs$core$async40995(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40996));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40995(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38236__auto___41209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41099){
var state_val_41100 = (state_41099[(1)]);
if((state_val_41100 === (7))){
var inst_41014 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
var statearr_41101_41210 = state_41099__$1;
(statearr_41101_41210[(2)] = inst_41014);

(statearr_41101_41210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (20))){
var inst_41026 = (state_41099[(7)]);
var state_41099__$1 = state_41099;
var statearr_41102_41211 = state_41099__$1;
(statearr_41102_41211[(2)] = inst_41026);

(statearr_41102_41211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (27))){
var state_41099__$1 = state_41099;
var statearr_41103_41212 = state_41099__$1;
(statearr_41103_41212[(2)] = null);

(statearr_41103_41212[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (1))){
var inst_41001 = (state_41099[(8)]);
var inst_41001__$1 = calc_state.call(null);
var inst_41003 = (inst_41001__$1 == null);
var inst_41004 = cljs.core.not.call(null,inst_41003);
var state_41099__$1 = (function (){var statearr_41104 = state_41099;
(statearr_41104[(8)] = inst_41001__$1);

return statearr_41104;
})();
if(inst_41004){
var statearr_41105_41213 = state_41099__$1;
(statearr_41105_41213[(1)] = (2));

} else {
var statearr_41106_41214 = state_41099__$1;
(statearr_41106_41214[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (24))){
var inst_41050 = (state_41099[(9)]);
var inst_41059 = (state_41099[(10)]);
var inst_41073 = (state_41099[(11)]);
var inst_41073__$1 = inst_41050.call(null,inst_41059);
var state_41099__$1 = (function (){var statearr_41107 = state_41099;
(statearr_41107[(11)] = inst_41073__$1);

return statearr_41107;
})();
if(cljs.core.truth_(inst_41073__$1)){
var statearr_41108_41215 = state_41099__$1;
(statearr_41108_41215[(1)] = (29));

} else {
var statearr_41109_41216 = state_41099__$1;
(statearr_41109_41216[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (4))){
var inst_41017 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41017)){
var statearr_41110_41217 = state_41099__$1;
(statearr_41110_41217[(1)] = (8));

} else {
var statearr_41111_41218 = state_41099__$1;
(statearr_41111_41218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (15))){
var inst_41044 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41044)){
var statearr_41112_41219 = state_41099__$1;
(statearr_41112_41219[(1)] = (19));

} else {
var statearr_41113_41220 = state_41099__$1;
(statearr_41113_41220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (21))){
var inst_41049 = (state_41099[(12)]);
var inst_41049__$1 = (state_41099[(2)]);
var inst_41050 = cljs.core.get.call(null,inst_41049__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41051 = cljs.core.get.call(null,inst_41049__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41052 = cljs.core.get.call(null,inst_41049__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41099__$1 = (function (){var statearr_41114 = state_41099;
(statearr_41114[(9)] = inst_41050);

(statearr_41114[(13)] = inst_41051);

(statearr_41114[(12)] = inst_41049__$1);

return statearr_41114;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41099__$1,(22),inst_41052);
} else {
if((state_val_41100 === (31))){
var inst_41081 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41081)){
var statearr_41115_41221 = state_41099__$1;
(statearr_41115_41221[(1)] = (32));

} else {
var statearr_41116_41222 = state_41099__$1;
(statearr_41116_41222[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (32))){
var inst_41058 = (state_41099[(14)]);
var state_41099__$1 = state_41099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41099__$1,(35),out,inst_41058);
} else {
if((state_val_41100 === (33))){
var inst_41049 = (state_41099[(12)]);
var inst_41026 = inst_41049;
var state_41099__$1 = (function (){var statearr_41117 = state_41099;
(statearr_41117[(7)] = inst_41026);

return statearr_41117;
})();
var statearr_41118_41223 = state_41099__$1;
(statearr_41118_41223[(2)] = null);

(statearr_41118_41223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (13))){
var inst_41026 = (state_41099[(7)]);
var inst_41033 = inst_41026.cljs$lang$protocol_mask$partition0$;
var inst_41034 = (inst_41033 & (64));
var inst_41035 = inst_41026.cljs$core$ISeq$;
var inst_41036 = (cljs.core.PROTOCOL_SENTINEL === inst_41035);
var inst_41037 = ((inst_41034) || (inst_41036));
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41037)){
var statearr_41119_41224 = state_41099__$1;
(statearr_41119_41224[(1)] = (16));

} else {
var statearr_41120_41225 = state_41099__$1;
(statearr_41120_41225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (22))){
var inst_41058 = (state_41099[(14)]);
var inst_41059 = (state_41099[(10)]);
var inst_41057 = (state_41099[(2)]);
var inst_41058__$1 = cljs.core.nth.call(null,inst_41057,(0),null);
var inst_41059__$1 = cljs.core.nth.call(null,inst_41057,(1),null);
var inst_41060 = (inst_41058__$1 == null);
var inst_41061 = cljs.core._EQ_.call(null,inst_41059__$1,change);
var inst_41062 = ((inst_41060) || (inst_41061));
var state_41099__$1 = (function (){var statearr_41121 = state_41099;
(statearr_41121[(14)] = inst_41058__$1);

(statearr_41121[(10)] = inst_41059__$1);

return statearr_41121;
})();
if(cljs.core.truth_(inst_41062)){
var statearr_41122_41226 = state_41099__$1;
(statearr_41122_41226[(1)] = (23));

} else {
var statearr_41123_41227 = state_41099__$1;
(statearr_41123_41227[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (36))){
var inst_41049 = (state_41099[(12)]);
var inst_41026 = inst_41049;
var state_41099__$1 = (function (){var statearr_41124 = state_41099;
(statearr_41124[(7)] = inst_41026);

return statearr_41124;
})();
var statearr_41125_41228 = state_41099__$1;
(statearr_41125_41228[(2)] = null);

(statearr_41125_41228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (29))){
var inst_41073 = (state_41099[(11)]);
var state_41099__$1 = state_41099;
var statearr_41126_41229 = state_41099__$1;
(statearr_41126_41229[(2)] = inst_41073);

(statearr_41126_41229[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (6))){
var state_41099__$1 = state_41099;
var statearr_41127_41230 = state_41099__$1;
(statearr_41127_41230[(2)] = false);

(statearr_41127_41230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (28))){
var inst_41069 = (state_41099[(2)]);
var inst_41070 = calc_state.call(null);
var inst_41026 = inst_41070;
var state_41099__$1 = (function (){var statearr_41128 = state_41099;
(statearr_41128[(7)] = inst_41026);

(statearr_41128[(15)] = inst_41069);

return statearr_41128;
})();
var statearr_41129_41231 = state_41099__$1;
(statearr_41129_41231[(2)] = null);

(statearr_41129_41231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (25))){
var inst_41095 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
var statearr_41130_41232 = state_41099__$1;
(statearr_41130_41232[(2)] = inst_41095);

(statearr_41130_41232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (34))){
var inst_41093 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
var statearr_41131_41233 = state_41099__$1;
(statearr_41131_41233[(2)] = inst_41093);

(statearr_41131_41233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (17))){
var state_41099__$1 = state_41099;
var statearr_41132_41234 = state_41099__$1;
(statearr_41132_41234[(2)] = false);

(statearr_41132_41234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (3))){
var state_41099__$1 = state_41099;
var statearr_41133_41235 = state_41099__$1;
(statearr_41133_41235[(2)] = false);

(statearr_41133_41235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (12))){
var inst_41097 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41099__$1,inst_41097);
} else {
if((state_val_41100 === (2))){
var inst_41001 = (state_41099[(8)]);
var inst_41006 = inst_41001.cljs$lang$protocol_mask$partition0$;
var inst_41007 = (inst_41006 & (64));
var inst_41008 = inst_41001.cljs$core$ISeq$;
var inst_41009 = (cljs.core.PROTOCOL_SENTINEL === inst_41008);
var inst_41010 = ((inst_41007) || (inst_41009));
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41010)){
var statearr_41134_41236 = state_41099__$1;
(statearr_41134_41236[(1)] = (5));

} else {
var statearr_41135_41237 = state_41099__$1;
(statearr_41135_41237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (23))){
var inst_41058 = (state_41099[(14)]);
var inst_41064 = (inst_41058 == null);
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41064)){
var statearr_41136_41238 = state_41099__$1;
(statearr_41136_41238[(1)] = (26));

} else {
var statearr_41137_41239 = state_41099__$1;
(statearr_41137_41239[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (35))){
var inst_41084 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41084)){
var statearr_41138_41240 = state_41099__$1;
(statearr_41138_41240[(1)] = (36));

} else {
var statearr_41139_41241 = state_41099__$1;
(statearr_41139_41241[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (19))){
var inst_41026 = (state_41099[(7)]);
var inst_41046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41026);
var state_41099__$1 = state_41099;
var statearr_41140_41242 = state_41099__$1;
(statearr_41140_41242[(2)] = inst_41046);

(statearr_41140_41242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (11))){
var inst_41026 = (state_41099[(7)]);
var inst_41030 = (inst_41026 == null);
var inst_41031 = cljs.core.not.call(null,inst_41030);
var state_41099__$1 = state_41099;
if(inst_41031){
var statearr_41141_41243 = state_41099__$1;
(statearr_41141_41243[(1)] = (13));

} else {
var statearr_41142_41244 = state_41099__$1;
(statearr_41142_41244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (9))){
var inst_41001 = (state_41099[(8)]);
var state_41099__$1 = state_41099;
var statearr_41143_41245 = state_41099__$1;
(statearr_41143_41245[(2)] = inst_41001);

(statearr_41143_41245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (5))){
var state_41099__$1 = state_41099;
var statearr_41144_41246 = state_41099__$1;
(statearr_41144_41246[(2)] = true);

(statearr_41144_41246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (14))){
var state_41099__$1 = state_41099;
var statearr_41145_41247 = state_41099__$1;
(statearr_41145_41247[(2)] = false);

(statearr_41145_41247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (26))){
var inst_41059 = (state_41099[(10)]);
var inst_41066 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41059);
var state_41099__$1 = state_41099;
var statearr_41146_41248 = state_41099__$1;
(statearr_41146_41248[(2)] = inst_41066);

(statearr_41146_41248[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (16))){
var state_41099__$1 = state_41099;
var statearr_41147_41249 = state_41099__$1;
(statearr_41147_41249[(2)] = true);

(statearr_41147_41249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (38))){
var inst_41089 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
var statearr_41148_41250 = state_41099__$1;
(statearr_41148_41250[(2)] = inst_41089);

(statearr_41148_41250[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (30))){
var inst_41050 = (state_41099[(9)]);
var inst_41059 = (state_41099[(10)]);
var inst_41051 = (state_41099[(13)]);
var inst_41076 = cljs.core.empty_QMARK_.call(null,inst_41050);
var inst_41077 = inst_41051.call(null,inst_41059);
var inst_41078 = cljs.core.not.call(null,inst_41077);
var inst_41079 = ((inst_41076) && (inst_41078));
var state_41099__$1 = state_41099;
var statearr_41149_41251 = state_41099__$1;
(statearr_41149_41251[(2)] = inst_41079);

(statearr_41149_41251[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (10))){
var inst_41001 = (state_41099[(8)]);
var inst_41022 = (state_41099[(2)]);
var inst_41023 = cljs.core.get.call(null,inst_41022,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41024 = cljs.core.get.call(null,inst_41022,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41025 = cljs.core.get.call(null,inst_41022,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41026 = inst_41001;
var state_41099__$1 = (function (){var statearr_41150 = state_41099;
(statearr_41150[(7)] = inst_41026);

(statearr_41150[(16)] = inst_41025);

(statearr_41150[(17)] = inst_41024);

(statearr_41150[(18)] = inst_41023);

return statearr_41150;
})();
var statearr_41151_41252 = state_41099__$1;
(statearr_41151_41252[(2)] = null);

(statearr_41151_41252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (18))){
var inst_41041 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
var statearr_41152_41253 = state_41099__$1;
(statearr_41152_41253[(2)] = inst_41041);

(statearr_41152_41253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (37))){
var state_41099__$1 = state_41099;
var statearr_41153_41254 = state_41099__$1;
(statearr_41153_41254[(2)] = null);

(statearr_41153_41254[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (8))){
var inst_41001 = (state_41099[(8)]);
var inst_41019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41001);
var state_41099__$1 = state_41099;
var statearr_41154_41255 = state_41099__$1;
(statearr_41154_41255[(2)] = inst_41019);

(statearr_41154_41255[(1)] = (10));


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
});})(c__38236__auto___41209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38077__auto__,c__38236__auto___41209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38078__auto__ = null;
var cljs$core$async$mix_$_state_machine__38078__auto____0 = (function (){
var statearr_41155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41155[(0)] = cljs$core$async$mix_$_state_machine__38078__auto__);

(statearr_41155[(1)] = (1));

return statearr_41155;
});
var cljs$core$async$mix_$_state_machine__38078__auto____1 = (function (state_41099){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41156){if((e41156 instanceof Object)){
var ex__38081__auto__ = e41156;
var statearr_41157_41256 = state_41099;
(statearr_41157_41256[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41257 = state_41099;
state_41099 = G__41257;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38078__auto__ = function(state_41099){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38078__auto____1.call(this,state_41099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38078__auto____0;
cljs$core$async$mix_$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38078__auto____1;
return cljs$core$async$mix_$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38238__auto__ = (function (){var statearr_41158 = f__38237__auto__.call(null);
(statearr_41158[(6)] = c__38236__auto___41209);

return statearr_41158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41263 = arguments.length;
switch (G__41263) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__41261_SHARP_){
if(cljs.core.truth_(p1__41261_SHARP_.call(null,topic))){
return p1__41261_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41261_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41264 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41265){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41265 = meta41265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41266,meta41265__$1){
var self__ = this;
var _41266__$1 = this;
return (new cljs.core.async.t_cljs$core$async41264(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41265__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41266){
var self__ = this;
var _41266__$1 = this;
return self__.meta41265;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41265","meta41265",672858483,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41264";

cljs.core.async.t_cljs$core$async41264.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async41264");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41264.
 */
cljs.core.async.__GT_t_cljs$core$async41264 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41265){
return (new cljs.core.async.t_cljs$core$async41264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41265));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41264(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38236__auto___41384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41384,mults,ensure_mult,p){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41384,mults,ensure_mult,p){
return (function (state_41338){
var state_val_41339 = (state_41338[(1)]);
if((state_val_41339 === (7))){
var inst_41334 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
var statearr_41340_41385 = state_41338__$1;
(statearr_41340_41385[(2)] = inst_41334);

(statearr_41340_41385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (20))){
var state_41338__$1 = state_41338;
var statearr_41341_41386 = state_41338__$1;
(statearr_41341_41386[(2)] = null);

(statearr_41341_41386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (1))){
var state_41338__$1 = state_41338;
var statearr_41342_41387 = state_41338__$1;
(statearr_41342_41387[(2)] = null);

(statearr_41342_41387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (24))){
var inst_41317 = (state_41338[(7)]);
var inst_41326 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41317);
var state_41338__$1 = state_41338;
var statearr_41343_41388 = state_41338__$1;
(statearr_41343_41388[(2)] = inst_41326);

(statearr_41343_41388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (4))){
var inst_41269 = (state_41338[(8)]);
var inst_41269__$1 = (state_41338[(2)]);
var inst_41270 = (inst_41269__$1 == null);
var state_41338__$1 = (function (){var statearr_41344 = state_41338;
(statearr_41344[(8)] = inst_41269__$1);

return statearr_41344;
})();
if(cljs.core.truth_(inst_41270)){
var statearr_41345_41389 = state_41338__$1;
(statearr_41345_41389[(1)] = (5));

} else {
var statearr_41346_41390 = state_41338__$1;
(statearr_41346_41390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (15))){
var inst_41311 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
var statearr_41347_41391 = state_41338__$1;
(statearr_41347_41391[(2)] = inst_41311);

(statearr_41347_41391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (21))){
var inst_41331 = (state_41338[(2)]);
var state_41338__$1 = (function (){var statearr_41348 = state_41338;
(statearr_41348[(9)] = inst_41331);

return statearr_41348;
})();
var statearr_41349_41392 = state_41338__$1;
(statearr_41349_41392[(2)] = null);

(statearr_41349_41392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (13))){
var inst_41293 = (state_41338[(10)]);
var inst_41295 = cljs.core.chunked_seq_QMARK_.call(null,inst_41293);
var state_41338__$1 = state_41338;
if(inst_41295){
var statearr_41350_41393 = state_41338__$1;
(statearr_41350_41393[(1)] = (16));

} else {
var statearr_41351_41394 = state_41338__$1;
(statearr_41351_41394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (22))){
var inst_41323 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
if(cljs.core.truth_(inst_41323)){
var statearr_41352_41395 = state_41338__$1;
(statearr_41352_41395[(1)] = (23));

} else {
var statearr_41353_41396 = state_41338__$1;
(statearr_41353_41396[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (6))){
var inst_41317 = (state_41338[(7)]);
var inst_41319 = (state_41338[(11)]);
var inst_41269 = (state_41338[(8)]);
var inst_41317__$1 = topic_fn.call(null,inst_41269);
var inst_41318 = cljs.core.deref.call(null,mults);
var inst_41319__$1 = cljs.core.get.call(null,inst_41318,inst_41317__$1);
var state_41338__$1 = (function (){var statearr_41354 = state_41338;
(statearr_41354[(7)] = inst_41317__$1);

(statearr_41354[(11)] = inst_41319__$1);

return statearr_41354;
})();
if(cljs.core.truth_(inst_41319__$1)){
var statearr_41355_41397 = state_41338__$1;
(statearr_41355_41397[(1)] = (19));

} else {
var statearr_41356_41398 = state_41338__$1;
(statearr_41356_41398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (25))){
var inst_41328 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
var statearr_41357_41399 = state_41338__$1;
(statearr_41357_41399[(2)] = inst_41328);

(statearr_41357_41399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (17))){
var inst_41293 = (state_41338[(10)]);
var inst_41302 = cljs.core.first.call(null,inst_41293);
var inst_41303 = cljs.core.async.muxch_STAR_.call(null,inst_41302);
var inst_41304 = cljs.core.async.close_BANG_.call(null,inst_41303);
var inst_41305 = cljs.core.next.call(null,inst_41293);
var inst_41279 = inst_41305;
var inst_41280 = null;
var inst_41281 = (0);
var inst_41282 = (0);
var state_41338__$1 = (function (){var statearr_41358 = state_41338;
(statearr_41358[(12)] = inst_41282);

(statearr_41358[(13)] = inst_41281);

(statearr_41358[(14)] = inst_41279);

(statearr_41358[(15)] = inst_41280);

(statearr_41358[(16)] = inst_41304);

return statearr_41358;
})();
var statearr_41359_41400 = state_41338__$1;
(statearr_41359_41400[(2)] = null);

(statearr_41359_41400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (3))){
var inst_41336 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41338__$1,inst_41336);
} else {
if((state_val_41339 === (12))){
var inst_41313 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
var statearr_41360_41401 = state_41338__$1;
(statearr_41360_41401[(2)] = inst_41313);

(statearr_41360_41401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (2))){
var state_41338__$1 = state_41338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41338__$1,(4),ch);
} else {
if((state_val_41339 === (23))){
var state_41338__$1 = state_41338;
var statearr_41361_41402 = state_41338__$1;
(statearr_41361_41402[(2)] = null);

(statearr_41361_41402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (19))){
var inst_41319 = (state_41338[(11)]);
var inst_41269 = (state_41338[(8)]);
var inst_41321 = cljs.core.async.muxch_STAR_.call(null,inst_41319);
var state_41338__$1 = state_41338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41338__$1,(22),inst_41321,inst_41269);
} else {
if((state_val_41339 === (11))){
var inst_41293 = (state_41338[(10)]);
var inst_41279 = (state_41338[(14)]);
var inst_41293__$1 = cljs.core.seq.call(null,inst_41279);
var state_41338__$1 = (function (){var statearr_41362 = state_41338;
(statearr_41362[(10)] = inst_41293__$1);

return statearr_41362;
})();
if(inst_41293__$1){
var statearr_41363_41403 = state_41338__$1;
(statearr_41363_41403[(1)] = (13));

} else {
var statearr_41364_41404 = state_41338__$1;
(statearr_41364_41404[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (9))){
var inst_41315 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
var statearr_41365_41405 = state_41338__$1;
(statearr_41365_41405[(2)] = inst_41315);

(statearr_41365_41405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (5))){
var inst_41276 = cljs.core.deref.call(null,mults);
var inst_41277 = cljs.core.vals.call(null,inst_41276);
var inst_41278 = cljs.core.seq.call(null,inst_41277);
var inst_41279 = inst_41278;
var inst_41280 = null;
var inst_41281 = (0);
var inst_41282 = (0);
var state_41338__$1 = (function (){var statearr_41366 = state_41338;
(statearr_41366[(12)] = inst_41282);

(statearr_41366[(13)] = inst_41281);

(statearr_41366[(14)] = inst_41279);

(statearr_41366[(15)] = inst_41280);

return statearr_41366;
})();
var statearr_41367_41406 = state_41338__$1;
(statearr_41367_41406[(2)] = null);

(statearr_41367_41406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (14))){
var state_41338__$1 = state_41338;
var statearr_41371_41407 = state_41338__$1;
(statearr_41371_41407[(2)] = null);

(statearr_41371_41407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (16))){
var inst_41293 = (state_41338[(10)]);
var inst_41297 = cljs.core.chunk_first.call(null,inst_41293);
var inst_41298 = cljs.core.chunk_rest.call(null,inst_41293);
var inst_41299 = cljs.core.count.call(null,inst_41297);
var inst_41279 = inst_41298;
var inst_41280 = inst_41297;
var inst_41281 = inst_41299;
var inst_41282 = (0);
var state_41338__$1 = (function (){var statearr_41372 = state_41338;
(statearr_41372[(12)] = inst_41282);

(statearr_41372[(13)] = inst_41281);

(statearr_41372[(14)] = inst_41279);

(statearr_41372[(15)] = inst_41280);

return statearr_41372;
})();
var statearr_41373_41408 = state_41338__$1;
(statearr_41373_41408[(2)] = null);

(statearr_41373_41408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (10))){
var inst_41282 = (state_41338[(12)]);
var inst_41281 = (state_41338[(13)]);
var inst_41279 = (state_41338[(14)]);
var inst_41280 = (state_41338[(15)]);
var inst_41287 = cljs.core._nth.call(null,inst_41280,inst_41282);
var inst_41288 = cljs.core.async.muxch_STAR_.call(null,inst_41287);
var inst_41289 = cljs.core.async.close_BANG_.call(null,inst_41288);
var inst_41290 = (inst_41282 + (1));
var tmp41368 = inst_41281;
var tmp41369 = inst_41279;
var tmp41370 = inst_41280;
var inst_41279__$1 = tmp41369;
var inst_41280__$1 = tmp41370;
var inst_41281__$1 = tmp41368;
var inst_41282__$1 = inst_41290;
var state_41338__$1 = (function (){var statearr_41374 = state_41338;
(statearr_41374[(12)] = inst_41282__$1);

(statearr_41374[(13)] = inst_41281__$1);

(statearr_41374[(14)] = inst_41279__$1);

(statearr_41374[(15)] = inst_41280__$1);

(statearr_41374[(17)] = inst_41289);

return statearr_41374;
})();
var statearr_41375_41409 = state_41338__$1;
(statearr_41375_41409[(2)] = null);

(statearr_41375_41409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (18))){
var inst_41308 = (state_41338[(2)]);
var state_41338__$1 = state_41338;
var statearr_41376_41410 = state_41338__$1;
(statearr_41376_41410[(2)] = inst_41308);

(statearr_41376_41410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (8))){
var inst_41282 = (state_41338[(12)]);
var inst_41281 = (state_41338[(13)]);
var inst_41284 = (inst_41282 < inst_41281);
var inst_41285 = inst_41284;
var state_41338__$1 = state_41338;
if(cljs.core.truth_(inst_41285)){
var statearr_41377_41411 = state_41338__$1;
(statearr_41377_41411[(1)] = (10));

} else {
var statearr_41378_41412 = state_41338__$1;
(statearr_41378_41412[(1)] = (11));

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
});})(c__38236__auto___41384,mults,ensure_mult,p))
;
return ((function (switch__38077__auto__,c__38236__auto___41384,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_41379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41379[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_41379[(1)] = (1));

return statearr_41379;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_41338){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41380){if((e41380 instanceof Object)){
var ex__38081__auto__ = e41380;
var statearr_41381_41413 = state_41338;
(statearr_41381_41413[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41414 = state_41338;
state_41338 = G__41414;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_41338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_41338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41384,mults,ensure_mult,p))
})();
var state__38238__auto__ = (function (){var statearr_41382 = f__38237__auto__.call(null);
(statearr_41382[(6)] = c__38236__auto___41384);

return statearr_41382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41384,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41416 = arguments.length;
switch (G__41416) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41419 = arguments.length;
switch (G__41419) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41422 = arguments.length;
switch (G__41422) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38236__auto___41489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41461){
var state_val_41462 = (state_41461[(1)]);
if((state_val_41462 === (7))){
var state_41461__$1 = state_41461;
var statearr_41463_41490 = state_41461__$1;
(statearr_41463_41490[(2)] = null);

(statearr_41463_41490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (1))){
var state_41461__$1 = state_41461;
var statearr_41464_41491 = state_41461__$1;
(statearr_41464_41491[(2)] = null);

(statearr_41464_41491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (4))){
var inst_41425 = (state_41461[(7)]);
var inst_41427 = (inst_41425 < cnt);
var state_41461__$1 = state_41461;
if(cljs.core.truth_(inst_41427)){
var statearr_41465_41492 = state_41461__$1;
(statearr_41465_41492[(1)] = (6));

} else {
var statearr_41466_41493 = state_41461__$1;
(statearr_41466_41493[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (15))){
var inst_41457 = (state_41461[(2)]);
var state_41461__$1 = state_41461;
var statearr_41467_41494 = state_41461__$1;
(statearr_41467_41494[(2)] = inst_41457);

(statearr_41467_41494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (13))){
var inst_41450 = cljs.core.async.close_BANG_.call(null,out);
var state_41461__$1 = state_41461;
var statearr_41468_41495 = state_41461__$1;
(statearr_41468_41495[(2)] = inst_41450);

(statearr_41468_41495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (6))){
var state_41461__$1 = state_41461;
var statearr_41469_41496 = state_41461__$1;
(statearr_41469_41496[(2)] = null);

(statearr_41469_41496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (3))){
var inst_41459 = (state_41461[(2)]);
var state_41461__$1 = state_41461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41461__$1,inst_41459);
} else {
if((state_val_41462 === (12))){
var inst_41447 = (state_41461[(8)]);
var inst_41447__$1 = (state_41461[(2)]);
var inst_41448 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41447__$1);
var state_41461__$1 = (function (){var statearr_41470 = state_41461;
(statearr_41470[(8)] = inst_41447__$1);

return statearr_41470;
})();
if(cljs.core.truth_(inst_41448)){
var statearr_41471_41497 = state_41461__$1;
(statearr_41471_41497[(1)] = (13));

} else {
var statearr_41472_41498 = state_41461__$1;
(statearr_41472_41498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (2))){
var inst_41424 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41425 = (0);
var state_41461__$1 = (function (){var statearr_41473 = state_41461;
(statearr_41473[(9)] = inst_41424);

(statearr_41473[(7)] = inst_41425);

return statearr_41473;
})();
var statearr_41474_41499 = state_41461__$1;
(statearr_41474_41499[(2)] = null);

(statearr_41474_41499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (11))){
var inst_41425 = (state_41461[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41461,(10),Object,null,(9));
var inst_41434 = chs__$1.call(null,inst_41425);
var inst_41435 = done.call(null,inst_41425);
var inst_41436 = cljs.core.async.take_BANG_.call(null,inst_41434,inst_41435);
var state_41461__$1 = state_41461;
var statearr_41475_41500 = state_41461__$1;
(statearr_41475_41500[(2)] = inst_41436);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41461__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (9))){
var inst_41425 = (state_41461[(7)]);
var inst_41438 = (state_41461[(2)]);
var inst_41439 = (inst_41425 + (1));
var inst_41425__$1 = inst_41439;
var state_41461__$1 = (function (){var statearr_41476 = state_41461;
(statearr_41476[(10)] = inst_41438);

(statearr_41476[(7)] = inst_41425__$1);

return statearr_41476;
})();
var statearr_41477_41501 = state_41461__$1;
(statearr_41477_41501[(2)] = null);

(statearr_41477_41501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (5))){
var inst_41445 = (state_41461[(2)]);
var state_41461__$1 = (function (){var statearr_41478 = state_41461;
(statearr_41478[(11)] = inst_41445);

return statearr_41478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41461__$1,(12),dchan);
} else {
if((state_val_41462 === (14))){
var inst_41447 = (state_41461[(8)]);
var inst_41452 = cljs.core.apply.call(null,f,inst_41447);
var state_41461__$1 = state_41461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41461__$1,(16),out,inst_41452);
} else {
if((state_val_41462 === (16))){
var inst_41454 = (state_41461[(2)]);
var state_41461__$1 = (function (){var statearr_41479 = state_41461;
(statearr_41479[(12)] = inst_41454);

return statearr_41479;
})();
var statearr_41480_41502 = state_41461__$1;
(statearr_41480_41502[(2)] = null);

(statearr_41480_41502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (10))){
var inst_41429 = (state_41461[(2)]);
var inst_41430 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41461__$1 = (function (){var statearr_41481 = state_41461;
(statearr_41481[(13)] = inst_41429);

return statearr_41481;
})();
var statearr_41482_41503 = state_41461__$1;
(statearr_41482_41503[(2)] = inst_41430);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41461__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41462 === (8))){
var inst_41443 = (state_41461[(2)]);
var state_41461__$1 = state_41461;
var statearr_41483_41504 = state_41461__$1;
(statearr_41483_41504[(2)] = inst_41443);

(statearr_41483_41504[(1)] = (5));


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
});})(c__38236__auto___41489,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38077__auto__,c__38236__auto___41489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_41484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41484[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_41484[(1)] = (1));

return statearr_41484;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_41461){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41485){if((e41485 instanceof Object)){
var ex__38081__auto__ = e41485;
var statearr_41486_41505 = state_41461;
(statearr_41486_41505[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41506 = state_41461;
state_41461 = G__41506;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_41461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_41461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41489,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38238__auto__ = (function (){var statearr_41487 = f__38237__auto__.call(null);
(statearr_41487[(6)] = c__38236__auto___41489);

return statearr_41487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41489,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41509 = arguments.length;
switch (G__41509) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38236__auto___41563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41563,out){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41563,out){
return (function (state_41541){
var state_val_41542 = (state_41541[(1)]);
if((state_val_41542 === (7))){
var inst_41520 = (state_41541[(7)]);
var inst_41521 = (state_41541[(8)]);
var inst_41520__$1 = (state_41541[(2)]);
var inst_41521__$1 = cljs.core.nth.call(null,inst_41520__$1,(0),null);
var inst_41522 = cljs.core.nth.call(null,inst_41520__$1,(1),null);
var inst_41523 = (inst_41521__$1 == null);
var state_41541__$1 = (function (){var statearr_41543 = state_41541;
(statearr_41543[(7)] = inst_41520__$1);

(statearr_41543[(8)] = inst_41521__$1);

(statearr_41543[(9)] = inst_41522);

return statearr_41543;
})();
if(cljs.core.truth_(inst_41523)){
var statearr_41544_41564 = state_41541__$1;
(statearr_41544_41564[(1)] = (8));

} else {
var statearr_41545_41565 = state_41541__$1;
(statearr_41545_41565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41542 === (1))){
var inst_41510 = cljs.core.vec.call(null,chs);
var inst_41511 = inst_41510;
var state_41541__$1 = (function (){var statearr_41546 = state_41541;
(statearr_41546[(10)] = inst_41511);

return statearr_41546;
})();
var statearr_41547_41566 = state_41541__$1;
(statearr_41547_41566[(2)] = null);

(statearr_41547_41566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41542 === (4))){
var inst_41511 = (state_41541[(10)]);
var state_41541__$1 = state_41541;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41541__$1,(7),inst_41511);
} else {
if((state_val_41542 === (6))){
var inst_41537 = (state_41541[(2)]);
var state_41541__$1 = state_41541;
var statearr_41548_41567 = state_41541__$1;
(statearr_41548_41567[(2)] = inst_41537);

(statearr_41548_41567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41542 === (3))){
var inst_41539 = (state_41541[(2)]);
var state_41541__$1 = state_41541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41541__$1,inst_41539);
} else {
if((state_val_41542 === (2))){
var inst_41511 = (state_41541[(10)]);
var inst_41513 = cljs.core.count.call(null,inst_41511);
var inst_41514 = (inst_41513 > (0));
var state_41541__$1 = state_41541;
if(cljs.core.truth_(inst_41514)){
var statearr_41550_41568 = state_41541__$1;
(statearr_41550_41568[(1)] = (4));

} else {
var statearr_41551_41569 = state_41541__$1;
(statearr_41551_41569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41542 === (11))){
var inst_41511 = (state_41541[(10)]);
var inst_41530 = (state_41541[(2)]);
var tmp41549 = inst_41511;
var inst_41511__$1 = tmp41549;
var state_41541__$1 = (function (){var statearr_41552 = state_41541;
(statearr_41552[(11)] = inst_41530);

(statearr_41552[(10)] = inst_41511__$1);

return statearr_41552;
})();
var statearr_41553_41570 = state_41541__$1;
(statearr_41553_41570[(2)] = null);

(statearr_41553_41570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41542 === (9))){
var inst_41521 = (state_41541[(8)]);
var state_41541__$1 = state_41541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41541__$1,(11),out,inst_41521);
} else {
if((state_val_41542 === (5))){
var inst_41535 = cljs.core.async.close_BANG_.call(null,out);
var state_41541__$1 = state_41541;
var statearr_41554_41571 = state_41541__$1;
(statearr_41554_41571[(2)] = inst_41535);

(statearr_41554_41571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41542 === (10))){
var inst_41533 = (state_41541[(2)]);
var state_41541__$1 = state_41541;
var statearr_41555_41572 = state_41541__$1;
(statearr_41555_41572[(2)] = inst_41533);

(statearr_41555_41572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41542 === (8))){
var inst_41520 = (state_41541[(7)]);
var inst_41521 = (state_41541[(8)]);
var inst_41522 = (state_41541[(9)]);
var inst_41511 = (state_41541[(10)]);
var inst_41525 = (function (){var cs = inst_41511;
var vec__41516 = inst_41520;
var v = inst_41521;
var c = inst_41522;
return ((function (cs,vec__41516,v,c,inst_41520,inst_41521,inst_41522,inst_41511,state_val_41542,c__38236__auto___41563,out){
return (function (p1__41507_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41507_SHARP_);
});
;})(cs,vec__41516,v,c,inst_41520,inst_41521,inst_41522,inst_41511,state_val_41542,c__38236__auto___41563,out))
})();
var inst_41526 = cljs.core.filterv.call(null,inst_41525,inst_41511);
var inst_41511__$1 = inst_41526;
var state_41541__$1 = (function (){var statearr_41556 = state_41541;
(statearr_41556[(10)] = inst_41511__$1);

return statearr_41556;
})();
var statearr_41557_41573 = state_41541__$1;
(statearr_41557_41573[(2)] = null);

(statearr_41557_41573[(1)] = (2));


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
});})(c__38236__auto___41563,out))
;
return ((function (switch__38077__auto__,c__38236__auto___41563,out){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_41558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41558[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_41558[(1)] = (1));

return statearr_41558;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_41541){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41559){if((e41559 instanceof Object)){
var ex__38081__auto__ = e41559;
var statearr_41560_41574 = state_41541;
(statearr_41560_41574[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41575 = state_41541;
state_41541 = G__41575;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_41541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_41541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41563,out))
})();
var state__38238__auto__ = (function (){var statearr_41561 = f__38237__auto__.call(null);
(statearr_41561[(6)] = c__38236__auto___41563);

return statearr_41561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41563,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41577 = arguments.length;
switch (G__41577) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38236__auto___41622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41622,out){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41622,out){
return (function (state_41601){
var state_val_41602 = (state_41601[(1)]);
if((state_val_41602 === (7))){
var inst_41583 = (state_41601[(7)]);
var inst_41583__$1 = (state_41601[(2)]);
var inst_41584 = (inst_41583__$1 == null);
var inst_41585 = cljs.core.not.call(null,inst_41584);
var state_41601__$1 = (function (){var statearr_41603 = state_41601;
(statearr_41603[(7)] = inst_41583__$1);

return statearr_41603;
})();
if(inst_41585){
var statearr_41604_41623 = state_41601__$1;
(statearr_41604_41623[(1)] = (8));

} else {
var statearr_41605_41624 = state_41601__$1;
(statearr_41605_41624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (1))){
var inst_41578 = (0);
var state_41601__$1 = (function (){var statearr_41606 = state_41601;
(statearr_41606[(8)] = inst_41578);

return statearr_41606;
})();
var statearr_41607_41625 = state_41601__$1;
(statearr_41607_41625[(2)] = null);

(statearr_41607_41625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (4))){
var state_41601__$1 = state_41601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41601__$1,(7),ch);
} else {
if((state_val_41602 === (6))){
var inst_41596 = (state_41601[(2)]);
var state_41601__$1 = state_41601;
var statearr_41608_41626 = state_41601__$1;
(statearr_41608_41626[(2)] = inst_41596);

(statearr_41608_41626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (3))){
var inst_41598 = (state_41601[(2)]);
var inst_41599 = cljs.core.async.close_BANG_.call(null,out);
var state_41601__$1 = (function (){var statearr_41609 = state_41601;
(statearr_41609[(9)] = inst_41598);

return statearr_41609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41601__$1,inst_41599);
} else {
if((state_val_41602 === (2))){
var inst_41578 = (state_41601[(8)]);
var inst_41580 = (inst_41578 < n);
var state_41601__$1 = state_41601;
if(cljs.core.truth_(inst_41580)){
var statearr_41610_41627 = state_41601__$1;
(statearr_41610_41627[(1)] = (4));

} else {
var statearr_41611_41628 = state_41601__$1;
(statearr_41611_41628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (11))){
var inst_41578 = (state_41601[(8)]);
var inst_41588 = (state_41601[(2)]);
var inst_41589 = (inst_41578 + (1));
var inst_41578__$1 = inst_41589;
var state_41601__$1 = (function (){var statearr_41612 = state_41601;
(statearr_41612[(8)] = inst_41578__$1);

(statearr_41612[(10)] = inst_41588);

return statearr_41612;
})();
var statearr_41613_41629 = state_41601__$1;
(statearr_41613_41629[(2)] = null);

(statearr_41613_41629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (9))){
var state_41601__$1 = state_41601;
var statearr_41614_41630 = state_41601__$1;
(statearr_41614_41630[(2)] = null);

(statearr_41614_41630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (5))){
var state_41601__$1 = state_41601;
var statearr_41615_41631 = state_41601__$1;
(statearr_41615_41631[(2)] = null);

(statearr_41615_41631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (10))){
var inst_41593 = (state_41601[(2)]);
var state_41601__$1 = state_41601;
var statearr_41616_41632 = state_41601__$1;
(statearr_41616_41632[(2)] = inst_41593);

(statearr_41616_41632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41602 === (8))){
var inst_41583 = (state_41601[(7)]);
var state_41601__$1 = state_41601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41601__$1,(11),out,inst_41583);
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
});})(c__38236__auto___41622,out))
;
return ((function (switch__38077__auto__,c__38236__auto___41622,out){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_41617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41617[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_41617[(1)] = (1));

return statearr_41617;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_41601){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41618){if((e41618 instanceof Object)){
var ex__38081__auto__ = e41618;
var statearr_41619_41633 = state_41601;
(statearr_41619_41633[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41634 = state_41601;
state_41601 = G__41634;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_41601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_41601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41622,out))
})();
var state__38238__auto__ = (function (){var statearr_41620 = f__38237__auto__.call(null);
(statearr_41620[(6)] = c__38236__auto___41622);

return statearr_41620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41622,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41636 = (function (f,ch,meta41637){
this.f = f;
this.ch = ch;
this.meta41637 = meta41637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41638,meta41637__$1){
var self__ = this;
var _41638__$1 = this;
return (new cljs.core.async.t_cljs$core$async41636(self__.f,self__.ch,meta41637__$1));
});

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41638){
var self__ = this;
var _41638__$1 = this;
return self__.meta41637;
});

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41639 = (function (f,ch,meta41637,_,fn1,meta41640){
this.f = f;
this.ch = ch;
this.meta41637 = meta41637;
this._ = _;
this.fn1 = fn1;
this.meta41640 = meta41640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41641,meta41640__$1){
var self__ = this;
var _41641__$1 = this;
return (new cljs.core.async.t_cljs$core$async41639(self__.f,self__.ch,self__.meta41637,self__._,self__.fn1,meta41640__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41641){
var self__ = this;
var _41641__$1 = this;
return self__.meta41640;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41639.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41639.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41635_SHARP_){
return f1.call(null,(((p1__41635_SHARP_ == null))?null:self__.f.call(null,p1__41635_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41639.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41637","meta41637",-2001241546,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41636","cljs.core.async/t_cljs$core$async41636",1903332762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41640","meta41640",1846750094,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41639";

cljs.core.async.t_cljs$core$async41639.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async41639");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41639.
 */
cljs.core.async.__GT_t_cljs$core$async41639 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41639(f__$1,ch__$1,meta41637__$1,___$2,fn1__$1,meta41640){
return (new cljs.core.async.t_cljs$core$async41639(f__$1,ch__$1,meta41637__$1,___$2,fn1__$1,meta41640));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41639(self__.f,self__.ch,self__.meta41637,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41637","meta41637",-2001241546,null)], null);
});

cljs.core.async.t_cljs$core$async41636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41636";

cljs.core.async.t_cljs$core$async41636.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async41636");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41636.
 */
cljs.core.async.__GT_t_cljs$core$async41636 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41636(f__$1,ch__$1,meta41637){
return (new cljs.core.async.t_cljs$core$async41636(f__$1,ch__$1,meta41637));
});

}

return (new cljs.core.async.t_cljs$core$async41636(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41642 = (function (f,ch,meta41643){
this.f = f;
this.ch = ch;
this.meta41643 = meta41643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41644,meta41643__$1){
var self__ = this;
var _41644__$1 = this;
return (new cljs.core.async.t_cljs$core$async41642(self__.f,self__.ch,meta41643__$1));
});

cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41644){
var self__ = this;
var _41644__$1 = this;
return self__.meta41643;
});

cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41643","meta41643",1517066935,null)], null);
});

cljs.core.async.t_cljs$core$async41642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41642";

cljs.core.async.t_cljs$core$async41642.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async41642");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41642.
 */
cljs.core.async.__GT_t_cljs$core$async41642 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41642(f__$1,ch__$1,meta41643){
return (new cljs.core.async.t_cljs$core$async41642(f__$1,ch__$1,meta41643));
});

}

return (new cljs.core.async.t_cljs$core$async41642(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41645 = (function (p,ch,meta41646){
this.p = p;
this.ch = ch;
this.meta41646 = meta41646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41647,meta41646__$1){
var self__ = this;
var _41647__$1 = this;
return (new cljs.core.async.t_cljs$core$async41645(self__.p,self__.ch,meta41646__$1));
});

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41647){
var self__ = this;
var _41647__$1 = this;
return self__.meta41646;
});

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41646","meta41646",-1029226761,null)], null);
});

cljs.core.async.t_cljs$core$async41645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41645";

cljs.core.async.t_cljs$core$async41645.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async41645");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41645.
 */
cljs.core.async.__GT_t_cljs$core$async41645 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41645(p__$1,ch__$1,meta41646){
return (new cljs.core.async.t_cljs$core$async41645(p__$1,ch__$1,meta41646));
});

}

return (new cljs.core.async.t_cljs$core$async41645(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41649 = arguments.length;
switch (G__41649) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38236__auto___41689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41689,out){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41689,out){
return (function (state_41670){
var state_val_41671 = (state_41670[(1)]);
if((state_val_41671 === (7))){
var inst_41666 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41672_41690 = state_41670__$1;
(statearr_41672_41690[(2)] = inst_41666);

(statearr_41672_41690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (1))){
var state_41670__$1 = state_41670;
var statearr_41673_41691 = state_41670__$1;
(statearr_41673_41691[(2)] = null);

(statearr_41673_41691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (4))){
var inst_41652 = (state_41670[(7)]);
var inst_41652__$1 = (state_41670[(2)]);
var inst_41653 = (inst_41652__$1 == null);
var state_41670__$1 = (function (){var statearr_41674 = state_41670;
(statearr_41674[(7)] = inst_41652__$1);

return statearr_41674;
})();
if(cljs.core.truth_(inst_41653)){
var statearr_41675_41692 = state_41670__$1;
(statearr_41675_41692[(1)] = (5));

} else {
var statearr_41676_41693 = state_41670__$1;
(statearr_41676_41693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (6))){
var inst_41652 = (state_41670[(7)]);
var inst_41657 = p.call(null,inst_41652);
var state_41670__$1 = state_41670;
if(cljs.core.truth_(inst_41657)){
var statearr_41677_41694 = state_41670__$1;
(statearr_41677_41694[(1)] = (8));

} else {
var statearr_41678_41695 = state_41670__$1;
(statearr_41678_41695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (3))){
var inst_41668 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41670__$1,inst_41668);
} else {
if((state_val_41671 === (2))){
var state_41670__$1 = state_41670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41670__$1,(4),ch);
} else {
if((state_val_41671 === (11))){
var inst_41660 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41679_41696 = state_41670__$1;
(statearr_41679_41696[(2)] = inst_41660);

(statearr_41679_41696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (9))){
var state_41670__$1 = state_41670;
var statearr_41680_41697 = state_41670__$1;
(statearr_41680_41697[(2)] = null);

(statearr_41680_41697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (5))){
var inst_41655 = cljs.core.async.close_BANG_.call(null,out);
var state_41670__$1 = state_41670;
var statearr_41681_41698 = state_41670__$1;
(statearr_41681_41698[(2)] = inst_41655);

(statearr_41681_41698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (10))){
var inst_41663 = (state_41670[(2)]);
var state_41670__$1 = (function (){var statearr_41682 = state_41670;
(statearr_41682[(8)] = inst_41663);

return statearr_41682;
})();
var statearr_41683_41699 = state_41670__$1;
(statearr_41683_41699[(2)] = null);

(statearr_41683_41699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (8))){
var inst_41652 = (state_41670[(7)]);
var state_41670__$1 = state_41670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41670__$1,(11),out,inst_41652);
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
});})(c__38236__auto___41689,out))
;
return ((function (switch__38077__auto__,c__38236__auto___41689,out){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_41684 = [null,null,null,null,null,null,null,null,null];
(statearr_41684[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_41684[(1)] = (1));

return statearr_41684;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_41670){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41685){if((e41685 instanceof Object)){
var ex__38081__auto__ = e41685;
var statearr_41686_41700 = state_41670;
(statearr_41686_41700[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41701 = state_41670;
state_41670 = G__41701;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_41670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_41670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41689,out))
})();
var state__38238__auto__ = (function (){var statearr_41687 = f__38237__auto__.call(null);
(statearr_41687[(6)] = c__38236__auto___41689);

return statearr_41687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41689,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41703 = arguments.length;
switch (G__41703) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto__){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto__){
return (function (state_41766){
var state_val_41767 = (state_41766[(1)]);
if((state_val_41767 === (7))){
var inst_41762 = (state_41766[(2)]);
var state_41766__$1 = state_41766;
var statearr_41768_41806 = state_41766__$1;
(statearr_41768_41806[(2)] = inst_41762);

(statearr_41768_41806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (20))){
var inst_41732 = (state_41766[(7)]);
var inst_41743 = (state_41766[(2)]);
var inst_41744 = cljs.core.next.call(null,inst_41732);
var inst_41718 = inst_41744;
var inst_41719 = null;
var inst_41720 = (0);
var inst_41721 = (0);
var state_41766__$1 = (function (){var statearr_41769 = state_41766;
(statearr_41769[(8)] = inst_41718);

(statearr_41769[(9)] = inst_41743);

(statearr_41769[(10)] = inst_41719);

(statearr_41769[(11)] = inst_41721);

(statearr_41769[(12)] = inst_41720);

return statearr_41769;
})();
var statearr_41770_41807 = state_41766__$1;
(statearr_41770_41807[(2)] = null);

(statearr_41770_41807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (1))){
var state_41766__$1 = state_41766;
var statearr_41771_41808 = state_41766__$1;
(statearr_41771_41808[(2)] = null);

(statearr_41771_41808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (4))){
var inst_41707 = (state_41766[(13)]);
var inst_41707__$1 = (state_41766[(2)]);
var inst_41708 = (inst_41707__$1 == null);
var state_41766__$1 = (function (){var statearr_41772 = state_41766;
(statearr_41772[(13)] = inst_41707__$1);

return statearr_41772;
})();
if(cljs.core.truth_(inst_41708)){
var statearr_41773_41809 = state_41766__$1;
(statearr_41773_41809[(1)] = (5));

} else {
var statearr_41774_41810 = state_41766__$1;
(statearr_41774_41810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (15))){
var state_41766__$1 = state_41766;
var statearr_41778_41811 = state_41766__$1;
(statearr_41778_41811[(2)] = null);

(statearr_41778_41811[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (21))){
var state_41766__$1 = state_41766;
var statearr_41779_41812 = state_41766__$1;
(statearr_41779_41812[(2)] = null);

(statearr_41779_41812[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (13))){
var inst_41718 = (state_41766[(8)]);
var inst_41719 = (state_41766[(10)]);
var inst_41721 = (state_41766[(11)]);
var inst_41720 = (state_41766[(12)]);
var inst_41728 = (state_41766[(2)]);
var inst_41729 = (inst_41721 + (1));
var tmp41775 = inst_41718;
var tmp41776 = inst_41719;
var tmp41777 = inst_41720;
var inst_41718__$1 = tmp41775;
var inst_41719__$1 = tmp41776;
var inst_41720__$1 = tmp41777;
var inst_41721__$1 = inst_41729;
var state_41766__$1 = (function (){var statearr_41780 = state_41766;
(statearr_41780[(8)] = inst_41718__$1);

(statearr_41780[(10)] = inst_41719__$1);

(statearr_41780[(11)] = inst_41721__$1);

(statearr_41780[(12)] = inst_41720__$1);

(statearr_41780[(14)] = inst_41728);

return statearr_41780;
})();
var statearr_41781_41813 = state_41766__$1;
(statearr_41781_41813[(2)] = null);

(statearr_41781_41813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (22))){
var state_41766__$1 = state_41766;
var statearr_41782_41814 = state_41766__$1;
(statearr_41782_41814[(2)] = null);

(statearr_41782_41814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (6))){
var inst_41707 = (state_41766[(13)]);
var inst_41716 = f.call(null,inst_41707);
var inst_41717 = cljs.core.seq.call(null,inst_41716);
var inst_41718 = inst_41717;
var inst_41719 = null;
var inst_41720 = (0);
var inst_41721 = (0);
var state_41766__$1 = (function (){var statearr_41783 = state_41766;
(statearr_41783[(8)] = inst_41718);

(statearr_41783[(10)] = inst_41719);

(statearr_41783[(11)] = inst_41721);

(statearr_41783[(12)] = inst_41720);

return statearr_41783;
})();
var statearr_41784_41815 = state_41766__$1;
(statearr_41784_41815[(2)] = null);

(statearr_41784_41815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (17))){
var inst_41732 = (state_41766[(7)]);
var inst_41736 = cljs.core.chunk_first.call(null,inst_41732);
var inst_41737 = cljs.core.chunk_rest.call(null,inst_41732);
var inst_41738 = cljs.core.count.call(null,inst_41736);
var inst_41718 = inst_41737;
var inst_41719 = inst_41736;
var inst_41720 = inst_41738;
var inst_41721 = (0);
var state_41766__$1 = (function (){var statearr_41785 = state_41766;
(statearr_41785[(8)] = inst_41718);

(statearr_41785[(10)] = inst_41719);

(statearr_41785[(11)] = inst_41721);

(statearr_41785[(12)] = inst_41720);

return statearr_41785;
})();
var statearr_41786_41816 = state_41766__$1;
(statearr_41786_41816[(2)] = null);

(statearr_41786_41816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (3))){
var inst_41764 = (state_41766[(2)]);
var state_41766__$1 = state_41766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41766__$1,inst_41764);
} else {
if((state_val_41767 === (12))){
var inst_41752 = (state_41766[(2)]);
var state_41766__$1 = state_41766;
var statearr_41787_41817 = state_41766__$1;
(statearr_41787_41817[(2)] = inst_41752);

(statearr_41787_41817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (2))){
var state_41766__$1 = state_41766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41766__$1,(4),in$);
} else {
if((state_val_41767 === (23))){
var inst_41760 = (state_41766[(2)]);
var state_41766__$1 = state_41766;
var statearr_41788_41818 = state_41766__$1;
(statearr_41788_41818[(2)] = inst_41760);

(statearr_41788_41818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (19))){
var inst_41747 = (state_41766[(2)]);
var state_41766__$1 = state_41766;
var statearr_41789_41819 = state_41766__$1;
(statearr_41789_41819[(2)] = inst_41747);

(statearr_41789_41819[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (11))){
var inst_41718 = (state_41766[(8)]);
var inst_41732 = (state_41766[(7)]);
var inst_41732__$1 = cljs.core.seq.call(null,inst_41718);
var state_41766__$1 = (function (){var statearr_41790 = state_41766;
(statearr_41790[(7)] = inst_41732__$1);

return statearr_41790;
})();
if(inst_41732__$1){
var statearr_41791_41820 = state_41766__$1;
(statearr_41791_41820[(1)] = (14));

} else {
var statearr_41792_41821 = state_41766__$1;
(statearr_41792_41821[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (9))){
var inst_41754 = (state_41766[(2)]);
var inst_41755 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41766__$1 = (function (){var statearr_41793 = state_41766;
(statearr_41793[(15)] = inst_41754);

return statearr_41793;
})();
if(cljs.core.truth_(inst_41755)){
var statearr_41794_41822 = state_41766__$1;
(statearr_41794_41822[(1)] = (21));

} else {
var statearr_41795_41823 = state_41766__$1;
(statearr_41795_41823[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (5))){
var inst_41710 = cljs.core.async.close_BANG_.call(null,out);
var state_41766__$1 = state_41766;
var statearr_41796_41824 = state_41766__$1;
(statearr_41796_41824[(2)] = inst_41710);

(statearr_41796_41824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (14))){
var inst_41732 = (state_41766[(7)]);
var inst_41734 = cljs.core.chunked_seq_QMARK_.call(null,inst_41732);
var state_41766__$1 = state_41766;
if(inst_41734){
var statearr_41797_41825 = state_41766__$1;
(statearr_41797_41825[(1)] = (17));

} else {
var statearr_41798_41826 = state_41766__$1;
(statearr_41798_41826[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (16))){
var inst_41750 = (state_41766[(2)]);
var state_41766__$1 = state_41766;
var statearr_41799_41827 = state_41766__$1;
(statearr_41799_41827[(2)] = inst_41750);

(statearr_41799_41827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41767 === (10))){
var inst_41719 = (state_41766[(10)]);
var inst_41721 = (state_41766[(11)]);
var inst_41726 = cljs.core._nth.call(null,inst_41719,inst_41721);
var state_41766__$1 = state_41766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41766__$1,(13),out,inst_41726);
} else {
if((state_val_41767 === (18))){
var inst_41732 = (state_41766[(7)]);
var inst_41741 = cljs.core.first.call(null,inst_41732);
var state_41766__$1 = state_41766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41766__$1,(20),out,inst_41741);
} else {
if((state_val_41767 === (8))){
var inst_41721 = (state_41766[(11)]);
var inst_41720 = (state_41766[(12)]);
var inst_41723 = (inst_41721 < inst_41720);
var inst_41724 = inst_41723;
var state_41766__$1 = state_41766;
if(cljs.core.truth_(inst_41724)){
var statearr_41800_41828 = state_41766__$1;
(statearr_41800_41828[(1)] = (10));

} else {
var statearr_41801_41829 = state_41766__$1;
(statearr_41801_41829[(1)] = (11));

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
});})(c__38236__auto__))
;
return ((function (switch__38077__auto__,c__38236__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38078__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38078__auto____0 = (function (){
var statearr_41802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41802[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38078__auto__);

(statearr_41802[(1)] = (1));

return statearr_41802;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38078__auto____1 = (function (state_41766){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41803){if((e41803 instanceof Object)){
var ex__38081__auto__ = e41803;
var statearr_41804_41830 = state_41766;
(statearr_41804_41830[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41831 = state_41766;
state_41766 = G__41831;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38078__auto__ = function(state_41766){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38078__auto____1.call(this,state_41766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38078__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38078__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto__))
})();
var state__38238__auto__ = (function (){var statearr_41805 = f__38237__auto__.call(null);
(statearr_41805[(6)] = c__38236__auto__);

return statearr_41805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto__))
);

return c__38236__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41833 = arguments.length;
switch (G__41833) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41836 = arguments.length;
switch (G__41836) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41839 = arguments.length;
switch (G__41839) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38236__auto___41886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41886,out){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41886,out){
return (function (state_41863){
var state_val_41864 = (state_41863[(1)]);
if((state_val_41864 === (7))){
var inst_41858 = (state_41863[(2)]);
var state_41863__$1 = state_41863;
var statearr_41865_41887 = state_41863__$1;
(statearr_41865_41887[(2)] = inst_41858);

(statearr_41865_41887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41864 === (1))){
var inst_41840 = null;
var state_41863__$1 = (function (){var statearr_41866 = state_41863;
(statearr_41866[(7)] = inst_41840);

return statearr_41866;
})();
var statearr_41867_41888 = state_41863__$1;
(statearr_41867_41888[(2)] = null);

(statearr_41867_41888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41864 === (4))){
var inst_41843 = (state_41863[(8)]);
var inst_41843__$1 = (state_41863[(2)]);
var inst_41844 = (inst_41843__$1 == null);
var inst_41845 = cljs.core.not.call(null,inst_41844);
var state_41863__$1 = (function (){var statearr_41868 = state_41863;
(statearr_41868[(8)] = inst_41843__$1);

return statearr_41868;
})();
if(inst_41845){
var statearr_41869_41889 = state_41863__$1;
(statearr_41869_41889[(1)] = (5));

} else {
var statearr_41870_41890 = state_41863__$1;
(statearr_41870_41890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41864 === (6))){
var state_41863__$1 = state_41863;
var statearr_41871_41891 = state_41863__$1;
(statearr_41871_41891[(2)] = null);

(statearr_41871_41891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41864 === (3))){
var inst_41860 = (state_41863[(2)]);
var inst_41861 = cljs.core.async.close_BANG_.call(null,out);
var state_41863__$1 = (function (){var statearr_41872 = state_41863;
(statearr_41872[(9)] = inst_41860);

return statearr_41872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41863__$1,inst_41861);
} else {
if((state_val_41864 === (2))){
var state_41863__$1 = state_41863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41863__$1,(4),ch);
} else {
if((state_val_41864 === (11))){
var inst_41843 = (state_41863[(8)]);
var inst_41852 = (state_41863[(2)]);
var inst_41840 = inst_41843;
var state_41863__$1 = (function (){var statearr_41873 = state_41863;
(statearr_41873[(7)] = inst_41840);

(statearr_41873[(10)] = inst_41852);

return statearr_41873;
})();
var statearr_41874_41892 = state_41863__$1;
(statearr_41874_41892[(2)] = null);

(statearr_41874_41892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41864 === (9))){
var inst_41843 = (state_41863[(8)]);
var state_41863__$1 = state_41863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41863__$1,(11),out,inst_41843);
} else {
if((state_val_41864 === (5))){
var inst_41843 = (state_41863[(8)]);
var inst_41840 = (state_41863[(7)]);
var inst_41847 = cljs.core._EQ_.call(null,inst_41843,inst_41840);
var state_41863__$1 = state_41863;
if(inst_41847){
var statearr_41876_41893 = state_41863__$1;
(statearr_41876_41893[(1)] = (8));

} else {
var statearr_41877_41894 = state_41863__$1;
(statearr_41877_41894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41864 === (10))){
var inst_41855 = (state_41863[(2)]);
var state_41863__$1 = state_41863;
var statearr_41878_41895 = state_41863__$1;
(statearr_41878_41895[(2)] = inst_41855);

(statearr_41878_41895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41864 === (8))){
var inst_41840 = (state_41863[(7)]);
var tmp41875 = inst_41840;
var inst_41840__$1 = tmp41875;
var state_41863__$1 = (function (){var statearr_41879 = state_41863;
(statearr_41879[(7)] = inst_41840__$1);

return statearr_41879;
})();
var statearr_41880_41896 = state_41863__$1;
(statearr_41880_41896[(2)] = null);

(statearr_41880_41896[(1)] = (2));


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
});})(c__38236__auto___41886,out))
;
return ((function (switch__38077__auto__,c__38236__auto___41886,out){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_41881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41881[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_41881[(1)] = (1));

return statearr_41881;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_41863){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41882){if((e41882 instanceof Object)){
var ex__38081__auto__ = e41882;
var statearr_41883_41897 = state_41863;
(statearr_41883_41897[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41898 = state_41863;
state_41863 = G__41898;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_41863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_41863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41886,out))
})();
var state__38238__auto__ = (function (){var statearr_41884 = f__38237__auto__.call(null);
(statearr_41884[(6)] = c__38236__auto___41886);

return statearr_41884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41886,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41900 = arguments.length;
switch (G__41900) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38236__auto___41966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___41966,out){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___41966,out){
return (function (state_41938){
var state_val_41939 = (state_41938[(1)]);
if((state_val_41939 === (7))){
var inst_41934 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
var statearr_41940_41967 = state_41938__$1;
(statearr_41940_41967[(2)] = inst_41934);

(statearr_41940_41967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (1))){
var inst_41901 = (new Array(n));
var inst_41902 = inst_41901;
var inst_41903 = (0);
var state_41938__$1 = (function (){var statearr_41941 = state_41938;
(statearr_41941[(7)] = inst_41903);

(statearr_41941[(8)] = inst_41902);

return statearr_41941;
})();
var statearr_41942_41968 = state_41938__$1;
(statearr_41942_41968[(2)] = null);

(statearr_41942_41968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (4))){
var inst_41906 = (state_41938[(9)]);
var inst_41906__$1 = (state_41938[(2)]);
var inst_41907 = (inst_41906__$1 == null);
var inst_41908 = cljs.core.not.call(null,inst_41907);
var state_41938__$1 = (function (){var statearr_41943 = state_41938;
(statearr_41943[(9)] = inst_41906__$1);

return statearr_41943;
})();
if(inst_41908){
var statearr_41944_41969 = state_41938__$1;
(statearr_41944_41969[(1)] = (5));

} else {
var statearr_41945_41970 = state_41938__$1;
(statearr_41945_41970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (15))){
var inst_41928 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
var statearr_41946_41971 = state_41938__$1;
(statearr_41946_41971[(2)] = inst_41928);

(statearr_41946_41971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (13))){
var state_41938__$1 = state_41938;
var statearr_41947_41972 = state_41938__$1;
(statearr_41947_41972[(2)] = null);

(statearr_41947_41972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (6))){
var inst_41903 = (state_41938[(7)]);
var inst_41924 = (inst_41903 > (0));
var state_41938__$1 = state_41938;
if(cljs.core.truth_(inst_41924)){
var statearr_41948_41973 = state_41938__$1;
(statearr_41948_41973[(1)] = (12));

} else {
var statearr_41949_41974 = state_41938__$1;
(statearr_41949_41974[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (3))){
var inst_41936 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41938__$1,inst_41936);
} else {
if((state_val_41939 === (12))){
var inst_41902 = (state_41938[(8)]);
var inst_41926 = cljs.core.vec.call(null,inst_41902);
var state_41938__$1 = state_41938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41938__$1,(15),out,inst_41926);
} else {
if((state_val_41939 === (2))){
var state_41938__$1 = state_41938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41938__$1,(4),ch);
} else {
if((state_val_41939 === (11))){
var inst_41918 = (state_41938[(2)]);
var inst_41919 = (new Array(n));
var inst_41902 = inst_41919;
var inst_41903 = (0);
var state_41938__$1 = (function (){var statearr_41950 = state_41938;
(statearr_41950[(10)] = inst_41918);

(statearr_41950[(7)] = inst_41903);

(statearr_41950[(8)] = inst_41902);

return statearr_41950;
})();
var statearr_41951_41975 = state_41938__$1;
(statearr_41951_41975[(2)] = null);

(statearr_41951_41975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (9))){
var inst_41902 = (state_41938[(8)]);
var inst_41916 = cljs.core.vec.call(null,inst_41902);
var state_41938__$1 = state_41938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41938__$1,(11),out,inst_41916);
} else {
if((state_val_41939 === (5))){
var inst_41906 = (state_41938[(9)]);
var inst_41903 = (state_41938[(7)]);
var inst_41911 = (state_41938[(11)]);
var inst_41902 = (state_41938[(8)]);
var inst_41910 = (inst_41902[inst_41903] = inst_41906);
var inst_41911__$1 = (inst_41903 + (1));
var inst_41912 = (inst_41911__$1 < n);
var state_41938__$1 = (function (){var statearr_41952 = state_41938;
(statearr_41952[(11)] = inst_41911__$1);

(statearr_41952[(12)] = inst_41910);

return statearr_41952;
})();
if(cljs.core.truth_(inst_41912)){
var statearr_41953_41976 = state_41938__$1;
(statearr_41953_41976[(1)] = (8));

} else {
var statearr_41954_41977 = state_41938__$1;
(statearr_41954_41977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (14))){
var inst_41931 = (state_41938[(2)]);
var inst_41932 = cljs.core.async.close_BANG_.call(null,out);
var state_41938__$1 = (function (){var statearr_41956 = state_41938;
(statearr_41956[(13)] = inst_41931);

return statearr_41956;
})();
var statearr_41957_41978 = state_41938__$1;
(statearr_41957_41978[(2)] = inst_41932);

(statearr_41957_41978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (10))){
var inst_41922 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
var statearr_41958_41979 = state_41938__$1;
(statearr_41958_41979[(2)] = inst_41922);

(statearr_41958_41979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (8))){
var inst_41911 = (state_41938[(11)]);
var inst_41902 = (state_41938[(8)]);
var tmp41955 = inst_41902;
var inst_41902__$1 = tmp41955;
var inst_41903 = inst_41911;
var state_41938__$1 = (function (){var statearr_41959 = state_41938;
(statearr_41959[(7)] = inst_41903);

(statearr_41959[(8)] = inst_41902__$1);

return statearr_41959;
})();
var statearr_41960_41980 = state_41938__$1;
(statearr_41960_41980[(2)] = null);

(statearr_41960_41980[(1)] = (2));


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
});})(c__38236__auto___41966,out))
;
return ((function (switch__38077__auto__,c__38236__auto___41966,out){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_41961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41961[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_41961[(1)] = (1));

return statearr_41961;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_41938){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_41938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e41962){if((e41962 instanceof Object)){
var ex__38081__auto__ = e41962;
var statearr_41963_41981 = state_41938;
(statearr_41963_41981[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41982 = state_41938;
state_41938 = G__41982;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_41938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_41938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___41966,out))
})();
var state__38238__auto__ = (function (){var statearr_41964 = f__38237__auto__.call(null);
(statearr_41964[(6)] = c__38236__auto___41966);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___41966,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41984 = arguments.length;
switch (G__41984) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38236__auto___42054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38236__auto___42054,out){
return (function (){
var f__38237__auto__ = (function (){var switch__38077__auto__ = ((function (c__38236__auto___42054,out){
return (function (state_42026){
var state_val_42027 = (state_42026[(1)]);
if((state_val_42027 === (7))){
var inst_42022 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42028_42055 = state_42026__$1;
(statearr_42028_42055[(2)] = inst_42022);

(statearr_42028_42055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (1))){
var inst_41985 = [];
var inst_41986 = inst_41985;
var inst_41987 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42026__$1 = (function (){var statearr_42029 = state_42026;
(statearr_42029[(7)] = inst_41986);

(statearr_42029[(8)] = inst_41987);

return statearr_42029;
})();
var statearr_42030_42056 = state_42026__$1;
(statearr_42030_42056[(2)] = null);

(statearr_42030_42056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (4))){
var inst_41990 = (state_42026[(9)]);
var inst_41990__$1 = (state_42026[(2)]);
var inst_41991 = (inst_41990__$1 == null);
var inst_41992 = cljs.core.not.call(null,inst_41991);
var state_42026__$1 = (function (){var statearr_42031 = state_42026;
(statearr_42031[(9)] = inst_41990__$1);

return statearr_42031;
})();
if(inst_41992){
var statearr_42032_42057 = state_42026__$1;
(statearr_42032_42057[(1)] = (5));

} else {
var statearr_42033_42058 = state_42026__$1;
(statearr_42033_42058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (15))){
var inst_42016 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42034_42059 = state_42026__$1;
(statearr_42034_42059[(2)] = inst_42016);

(statearr_42034_42059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (13))){
var state_42026__$1 = state_42026;
var statearr_42035_42060 = state_42026__$1;
(statearr_42035_42060[(2)] = null);

(statearr_42035_42060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (6))){
var inst_41986 = (state_42026[(7)]);
var inst_42011 = inst_41986.length;
var inst_42012 = (inst_42011 > (0));
var state_42026__$1 = state_42026;
if(cljs.core.truth_(inst_42012)){
var statearr_42036_42061 = state_42026__$1;
(statearr_42036_42061[(1)] = (12));

} else {
var statearr_42037_42062 = state_42026__$1;
(statearr_42037_42062[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (3))){
var inst_42024 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42026__$1,inst_42024);
} else {
if((state_val_42027 === (12))){
var inst_41986 = (state_42026[(7)]);
var inst_42014 = cljs.core.vec.call(null,inst_41986);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42026__$1,(15),out,inst_42014);
} else {
if((state_val_42027 === (2))){
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42026__$1,(4),ch);
} else {
if((state_val_42027 === (11))){
var inst_41994 = (state_42026[(10)]);
var inst_41990 = (state_42026[(9)]);
var inst_42004 = (state_42026[(2)]);
var inst_42005 = [];
var inst_42006 = inst_42005.push(inst_41990);
var inst_41986 = inst_42005;
var inst_41987 = inst_41994;
var state_42026__$1 = (function (){var statearr_42038 = state_42026;
(statearr_42038[(11)] = inst_42006);

(statearr_42038[(12)] = inst_42004);

(statearr_42038[(7)] = inst_41986);

(statearr_42038[(8)] = inst_41987);

return statearr_42038;
})();
var statearr_42039_42063 = state_42026__$1;
(statearr_42039_42063[(2)] = null);

(statearr_42039_42063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (9))){
var inst_41986 = (state_42026[(7)]);
var inst_42002 = cljs.core.vec.call(null,inst_41986);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42026__$1,(11),out,inst_42002);
} else {
if((state_val_42027 === (5))){
var inst_41994 = (state_42026[(10)]);
var inst_41990 = (state_42026[(9)]);
var inst_41987 = (state_42026[(8)]);
var inst_41994__$1 = f.call(null,inst_41990);
var inst_41995 = cljs.core._EQ_.call(null,inst_41994__$1,inst_41987);
var inst_41996 = cljs.core.keyword_identical_QMARK_.call(null,inst_41987,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41997 = ((inst_41995) || (inst_41996));
var state_42026__$1 = (function (){var statearr_42040 = state_42026;
(statearr_42040[(10)] = inst_41994__$1);

return statearr_42040;
})();
if(cljs.core.truth_(inst_41997)){
var statearr_42041_42064 = state_42026__$1;
(statearr_42041_42064[(1)] = (8));

} else {
var statearr_42042_42065 = state_42026__$1;
(statearr_42042_42065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (14))){
var inst_42019 = (state_42026[(2)]);
var inst_42020 = cljs.core.async.close_BANG_.call(null,out);
var state_42026__$1 = (function (){var statearr_42044 = state_42026;
(statearr_42044[(13)] = inst_42019);

return statearr_42044;
})();
var statearr_42045_42066 = state_42026__$1;
(statearr_42045_42066[(2)] = inst_42020);

(statearr_42045_42066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (10))){
var inst_42009 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42046_42067 = state_42026__$1;
(statearr_42046_42067[(2)] = inst_42009);

(statearr_42046_42067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (8))){
var inst_41994 = (state_42026[(10)]);
var inst_41990 = (state_42026[(9)]);
var inst_41986 = (state_42026[(7)]);
var inst_41999 = inst_41986.push(inst_41990);
var tmp42043 = inst_41986;
var inst_41986__$1 = tmp42043;
var inst_41987 = inst_41994;
var state_42026__$1 = (function (){var statearr_42047 = state_42026;
(statearr_42047[(14)] = inst_41999);

(statearr_42047[(7)] = inst_41986__$1);

(statearr_42047[(8)] = inst_41987);

return statearr_42047;
})();
var statearr_42048_42068 = state_42026__$1;
(statearr_42048_42068[(2)] = null);

(statearr_42048_42068[(1)] = (2));


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
});})(c__38236__auto___42054,out))
;
return ((function (switch__38077__auto__,c__38236__auto___42054,out){
return (function() {
var cljs$core$async$state_machine__38078__auto__ = null;
var cljs$core$async$state_machine__38078__auto____0 = (function (){
var statearr_42049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42049[(0)] = cljs$core$async$state_machine__38078__auto__);

(statearr_42049[(1)] = (1));

return statearr_42049;
});
var cljs$core$async$state_machine__38078__auto____1 = (function (state_42026){
while(true){
var ret_value__38079__auto__ = (function (){try{while(true){
var result__38080__auto__ = switch__38077__auto__.call(null,state_42026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38080__auto__;
}
break;
}
}catch (e42050){if((e42050 instanceof Object)){
var ex__38081__auto__ = e42050;
var statearr_42051_42069 = state_42026;
(statearr_42051_42069[(5)] = ex__38081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42070 = state_42026;
state_42026 = G__42070;
continue;
} else {
return ret_value__38079__auto__;
}
break;
}
});
cljs$core$async$state_machine__38078__auto__ = function(state_42026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38078__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38078__auto____1.call(this,state_42026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38078__auto____0;
cljs$core$async$state_machine__38078__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38078__auto____1;
return cljs$core$async$state_machine__38078__auto__;
})()
;})(switch__38077__auto__,c__38236__auto___42054,out))
})();
var state__38238__auto__ = (function (){var statearr_42052 = f__38237__auto__.call(null);
(statearr_42052[(6)] = c__38236__auto___42054);

return statearr_42052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38238__auto__);
});})(c__38236__auto___42054,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1551156927416
