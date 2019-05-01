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
var G__34533 = arguments.length;
switch (G__34533) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34534 = (function (f,blockable,meta34535){
this.f = f;
this.blockable = blockable;
this.meta34535 = meta34535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34536,meta34535__$1){
var self__ = this;
var _34536__$1 = this;
return (new cljs.core.async.t_cljs$core$async34534(self__.f,self__.blockable,meta34535__$1));
});

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34536){
var self__ = this;
var _34536__$1 = this;
return self__.meta34535;
});

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34535","meta34535",453150187,null)], null);
});

cljs.core.async.t_cljs$core$async34534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34534";

cljs.core.async.t_cljs$core$async34534.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34534");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34534.
 */
cljs.core.async.__GT_t_cljs$core$async34534 = (function cljs$core$async$__GT_t_cljs$core$async34534(f__$1,blockable__$1,meta34535){
return (new cljs.core.async.t_cljs$core$async34534(f__$1,blockable__$1,meta34535));
});

}

return (new cljs.core.async.t_cljs$core$async34534(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34540 = arguments.length;
switch (G__34540) {
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
var G__34543 = arguments.length;
switch (G__34543) {
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
var G__34546 = arguments.length;
switch (G__34546) {
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
var val_34548 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34548);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34548,ret){
return (function (){
return fn1.call(null,val_34548);
});})(val_34548,ret))
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
var G__34550 = arguments.length;
switch (G__34550) {
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
var n__4408__auto___34552 = n;
var x_34553 = (0);
while(true){
if((x_34553 < n__4408__auto___34552)){
(a[x_34553] = (0));

var G__34554 = (x_34553 + (1));
x_34553 = G__34554;
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

var G__34555 = (i + (1));
i = G__34555;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34556 = (function (flag,meta34557){
this.flag = flag;
this.meta34557 = meta34557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34558,meta34557__$1){
var self__ = this;
var _34558__$1 = this;
return (new cljs.core.async.t_cljs$core$async34556(self__.flag,meta34557__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34558){
var self__ = this;
var _34558__$1 = this;
return self__.meta34557;
});})(flag))
;

cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34556.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34557","meta34557",1145851869,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34556";

cljs.core.async.t_cljs$core$async34556.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34556");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34556.
 */
cljs.core.async.__GT_t_cljs$core$async34556 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34556(flag__$1,meta34557){
return (new cljs.core.async.t_cljs$core$async34556(flag__$1,meta34557));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34556(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34559 = (function (flag,cb,meta34560){
this.flag = flag;
this.cb = cb;
this.meta34560 = meta34560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34561,meta34560__$1){
var self__ = this;
var _34561__$1 = this;
return (new cljs.core.async.t_cljs$core$async34559(self__.flag,self__.cb,meta34560__$1));
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34561){
var self__ = this;
var _34561__$1 = this;
return self__.meta34560;
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34560","meta34560",303769187,null)], null);
});

cljs.core.async.t_cljs$core$async34559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34559";

cljs.core.async.t_cljs$core$async34559.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34559");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34559.
 */
cljs.core.async.__GT_t_cljs$core$async34559 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34559(flag__$1,cb__$1,meta34560){
return (new cljs.core.async.t_cljs$core$async34559(flag__$1,cb__$1,meta34560));
});

}

return (new cljs.core.async.t_cljs$core$async34559(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34562_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34562_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34563_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34563_SHARP_,port], null));
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
var G__34564 = (i + (1));
i = G__34564;
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
var len__4531__auto___34570 = arguments.length;
var i__4532__auto___34571 = (0);
while(true){
if((i__4532__auto___34571 < len__4531__auto___34570)){
args__4534__auto__.push((arguments[i__4532__auto___34571]));

var G__34572 = (i__4532__auto___34571 + (1));
i__4532__auto___34571 = G__34572;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34567){
var map__34568 = p__34567;
var map__34568__$1 = ((((!((map__34568 == null)))?(((((map__34568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34568):map__34568);
var opts = map__34568__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34565){
var G__34566 = cljs.core.first.call(null,seq34565);
var seq34565__$1 = cljs.core.next.call(null,seq34565);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34566,seq34565__$1);
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
var G__34574 = arguments.length;
switch (G__34574) {
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
var c__34473__auto___34620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___34620){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___34620){
return (function (state_34598){
var state_val_34599 = (state_34598[(1)]);
if((state_val_34599 === (7))){
var inst_34594 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34600_34621 = state_34598__$1;
(statearr_34600_34621[(2)] = inst_34594);

(statearr_34600_34621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (1))){
var state_34598__$1 = state_34598;
var statearr_34601_34622 = state_34598__$1;
(statearr_34601_34622[(2)] = null);

(statearr_34601_34622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (4))){
var inst_34577 = (state_34598[(7)]);
var inst_34577__$1 = (state_34598[(2)]);
var inst_34578 = (inst_34577__$1 == null);
var state_34598__$1 = (function (){var statearr_34602 = state_34598;
(statearr_34602[(7)] = inst_34577__$1);

return statearr_34602;
})();
if(cljs.core.truth_(inst_34578)){
var statearr_34603_34623 = state_34598__$1;
(statearr_34603_34623[(1)] = (5));

} else {
var statearr_34604_34624 = state_34598__$1;
(statearr_34604_34624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (13))){
var state_34598__$1 = state_34598;
var statearr_34605_34625 = state_34598__$1;
(statearr_34605_34625[(2)] = null);

(statearr_34605_34625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (6))){
var inst_34577 = (state_34598[(7)]);
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34598__$1,(11),to,inst_34577);
} else {
if((state_val_34599 === (3))){
var inst_34596 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34598__$1,inst_34596);
} else {
if((state_val_34599 === (12))){
var state_34598__$1 = state_34598;
var statearr_34606_34626 = state_34598__$1;
(statearr_34606_34626[(2)] = null);

(statearr_34606_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (2))){
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34598__$1,(4),from);
} else {
if((state_val_34599 === (11))){
var inst_34587 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34587)){
var statearr_34607_34627 = state_34598__$1;
(statearr_34607_34627[(1)] = (12));

} else {
var statearr_34608_34628 = state_34598__$1;
(statearr_34608_34628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (9))){
var state_34598__$1 = state_34598;
var statearr_34609_34629 = state_34598__$1;
(statearr_34609_34629[(2)] = null);

(statearr_34609_34629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (5))){
var state_34598__$1 = state_34598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34610_34630 = state_34598__$1;
(statearr_34610_34630[(1)] = (8));

} else {
var statearr_34611_34631 = state_34598__$1;
(statearr_34611_34631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (14))){
var inst_34592 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34612_34632 = state_34598__$1;
(statearr_34612_34632[(2)] = inst_34592);

(statearr_34612_34632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (10))){
var inst_34584 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34613_34633 = state_34598__$1;
(statearr_34613_34633[(2)] = inst_34584);

(statearr_34613_34633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (8))){
var inst_34581 = cljs.core.async.close_BANG_.call(null,to);
var state_34598__$1 = state_34598;
var statearr_34614_34634 = state_34598__$1;
(statearr_34614_34634[(2)] = inst_34581);

(statearr_34614_34634[(1)] = (10));


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
});})(c__34473__auto___34620))
;
return ((function (switch__34382__auto__,c__34473__auto___34620){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_34615 = [null,null,null,null,null,null,null,null];
(statearr_34615[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_34615[(1)] = (1));

return statearr_34615;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_34598){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34616){if((e34616 instanceof Object)){
var ex__34386__auto__ = e34616;
var statearr_34617_34635 = state_34598;
(statearr_34617_34635[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34636 = state_34598;
state_34598 = G__34636;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_34598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_34598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___34620))
})();
var state__34475__auto__ = (function (){var statearr_34618 = f__34474__auto__.call(null);
(statearr_34618[(6)] = c__34473__auto___34620);

return statearr_34618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___34620))
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
return (function (p__34637){
var vec__34638 = p__34637;
var v = cljs.core.nth.call(null,vec__34638,(0),null);
var p = cljs.core.nth.call(null,vec__34638,(1),null);
var job = vec__34638;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34473__auto___34809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___34809,res,vec__34638,v,p,job,jobs,results){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___34809,res,vec__34638,v,p,job,jobs,results){
return (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (1))){
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34645__$1,(2),res,v);
} else {
if((state_val_34646 === (2))){
var inst_34642 = (state_34645[(2)]);
var inst_34643 = cljs.core.async.close_BANG_.call(null,res);
var state_34645__$1 = (function (){var statearr_34647 = state_34645;
(statearr_34647[(7)] = inst_34642);

return statearr_34647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34645__$1,inst_34643);
} else {
return null;
}
}
});})(c__34473__auto___34809,res,vec__34638,v,p,job,jobs,results))
;
return ((function (switch__34382__auto__,c__34473__auto___34809,res,vec__34638,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0 = (function (){
var statearr_34648 = [null,null,null,null,null,null,null,null];
(statearr_34648[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__);

(statearr_34648[(1)] = (1));

return statearr_34648;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1 = (function (state_34645){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34649){if((e34649 instanceof Object)){
var ex__34386__auto__ = e34649;
var statearr_34650_34810 = state_34645;
(statearr_34650_34810[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34811 = state_34645;
state_34645 = G__34811;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___34809,res,vec__34638,v,p,job,jobs,results))
})();
var state__34475__auto__ = (function (){var statearr_34651 = f__34474__auto__.call(null);
(statearr_34651[(6)] = c__34473__auto___34809);

return statearr_34651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___34809,res,vec__34638,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34652){
var vec__34653 = p__34652;
var v = cljs.core.nth.call(null,vec__34653,(0),null);
var p = cljs.core.nth.call(null,vec__34653,(1),null);
var job = vec__34653;
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
var n__4408__auto___34812 = n;
var __34813 = (0);
while(true){
if((__34813 < n__4408__auto___34812)){
var G__34656_34814 = type;
var G__34656_34815__$1 = (((G__34656_34814 instanceof cljs.core.Keyword))?G__34656_34814.fqn:null);
switch (G__34656_34815__$1) {
case "compute":
var c__34473__auto___34817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34813,c__34473__auto___34817,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (__34813,c__34473__auto___34817,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async){
return (function (state_34669){
var state_val_34670 = (state_34669[(1)]);
if((state_val_34670 === (1))){
var state_34669__$1 = state_34669;
var statearr_34671_34818 = state_34669__$1;
(statearr_34671_34818[(2)] = null);

(statearr_34671_34818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (2))){
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34669__$1,(4),jobs);
} else {
if((state_val_34670 === (3))){
var inst_34667 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34669__$1,inst_34667);
} else {
if((state_val_34670 === (4))){
var inst_34659 = (state_34669[(2)]);
var inst_34660 = process.call(null,inst_34659);
var state_34669__$1 = state_34669;
if(cljs.core.truth_(inst_34660)){
var statearr_34672_34819 = state_34669__$1;
(statearr_34672_34819[(1)] = (5));

} else {
var statearr_34673_34820 = state_34669__$1;
(statearr_34673_34820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (5))){
var state_34669__$1 = state_34669;
var statearr_34674_34821 = state_34669__$1;
(statearr_34674_34821[(2)] = null);

(statearr_34674_34821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (6))){
var state_34669__$1 = state_34669;
var statearr_34675_34822 = state_34669__$1;
(statearr_34675_34822[(2)] = null);

(statearr_34675_34822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (7))){
var inst_34665 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34676_34823 = state_34669__$1;
(statearr_34676_34823[(2)] = inst_34665);

(statearr_34676_34823[(1)] = (3));


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
});})(__34813,c__34473__auto___34817,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async))
;
return ((function (__34813,switch__34382__auto__,c__34473__auto___34817,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0 = (function (){
var statearr_34677 = [null,null,null,null,null,null,null];
(statearr_34677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__);

(statearr_34677[(1)] = (1));

return statearr_34677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1 = (function (state_34669){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34678){if((e34678 instanceof Object)){
var ex__34386__auto__ = e34678;
var statearr_34679_34824 = state_34669;
(statearr_34679_34824[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34825 = state_34669;
state_34669 = G__34825;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = function(state_34669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1.call(this,state_34669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__;
})()
;})(__34813,switch__34382__auto__,c__34473__auto___34817,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async))
})();
var state__34475__auto__ = (function (){var statearr_34680 = f__34474__auto__.call(null);
(statearr_34680[(6)] = c__34473__auto___34817);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(__34813,c__34473__auto___34817,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async))
);


break;
case "async":
var c__34473__auto___34826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34813,c__34473__auto___34826,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (__34813,c__34473__auto___34826,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async){
return (function (state_34693){
var state_val_34694 = (state_34693[(1)]);
if((state_val_34694 === (1))){
var state_34693__$1 = state_34693;
var statearr_34695_34827 = state_34693__$1;
(statearr_34695_34827[(2)] = null);

(statearr_34695_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (2))){
var state_34693__$1 = state_34693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34693__$1,(4),jobs);
} else {
if((state_val_34694 === (3))){
var inst_34691 = (state_34693[(2)]);
var state_34693__$1 = state_34693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34693__$1,inst_34691);
} else {
if((state_val_34694 === (4))){
var inst_34683 = (state_34693[(2)]);
var inst_34684 = async.call(null,inst_34683);
var state_34693__$1 = state_34693;
if(cljs.core.truth_(inst_34684)){
var statearr_34696_34828 = state_34693__$1;
(statearr_34696_34828[(1)] = (5));

} else {
var statearr_34697_34829 = state_34693__$1;
(statearr_34697_34829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (5))){
var state_34693__$1 = state_34693;
var statearr_34698_34830 = state_34693__$1;
(statearr_34698_34830[(2)] = null);

(statearr_34698_34830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (6))){
var state_34693__$1 = state_34693;
var statearr_34699_34831 = state_34693__$1;
(statearr_34699_34831[(2)] = null);

(statearr_34699_34831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34694 === (7))){
var inst_34689 = (state_34693[(2)]);
var state_34693__$1 = state_34693;
var statearr_34700_34832 = state_34693__$1;
(statearr_34700_34832[(2)] = inst_34689);

(statearr_34700_34832[(1)] = (3));


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
});})(__34813,c__34473__auto___34826,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async))
;
return ((function (__34813,switch__34382__auto__,c__34473__auto___34826,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0 = (function (){
var statearr_34701 = [null,null,null,null,null,null,null];
(statearr_34701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__);

(statearr_34701[(1)] = (1));

return statearr_34701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1 = (function (state_34693){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34702){if((e34702 instanceof Object)){
var ex__34386__auto__ = e34702;
var statearr_34703_34833 = state_34693;
(statearr_34703_34833[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34834 = state_34693;
state_34693 = G__34834;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = function(state_34693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1.call(this,state_34693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__;
})()
;})(__34813,switch__34382__auto__,c__34473__auto___34826,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async))
})();
var state__34475__auto__ = (function (){var statearr_34704 = f__34474__auto__.call(null);
(statearr_34704[(6)] = c__34473__auto___34826);

return statearr_34704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(__34813,c__34473__auto___34826,G__34656_34814,G__34656_34815__$1,n__4408__auto___34812,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34656_34815__$1)].join('')));

}

var G__34835 = (__34813 + (1));
__34813 = G__34835;
continue;
} else {
}
break;
}

var c__34473__auto___34836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___34836,jobs,results,process,async){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___34836,jobs,results,process,async){
return (function (state_34726){
var state_val_34727 = (state_34726[(1)]);
if((state_val_34727 === (1))){
var state_34726__$1 = state_34726;
var statearr_34728_34837 = state_34726__$1;
(statearr_34728_34837[(2)] = null);

(statearr_34728_34837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (2))){
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34726__$1,(4),from);
} else {
if((state_val_34727 === (3))){
var inst_34724 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34726__$1,inst_34724);
} else {
if((state_val_34727 === (4))){
var inst_34707 = (state_34726[(7)]);
var inst_34707__$1 = (state_34726[(2)]);
var inst_34708 = (inst_34707__$1 == null);
var state_34726__$1 = (function (){var statearr_34729 = state_34726;
(statearr_34729[(7)] = inst_34707__$1);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34708)){
var statearr_34730_34838 = state_34726__$1;
(statearr_34730_34838[(1)] = (5));

} else {
var statearr_34731_34839 = state_34726__$1;
(statearr_34731_34839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (5))){
var inst_34710 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34726__$1 = state_34726;
var statearr_34732_34840 = state_34726__$1;
(statearr_34732_34840[(2)] = inst_34710);

(statearr_34732_34840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (6))){
var inst_34712 = (state_34726[(8)]);
var inst_34707 = (state_34726[(7)]);
var inst_34712__$1 = cljs.core.async.chan.call(null,(1));
var inst_34713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34714 = [inst_34707,inst_34712__$1];
var inst_34715 = (new cljs.core.PersistentVector(null,2,(5),inst_34713,inst_34714,null));
var state_34726__$1 = (function (){var statearr_34733 = state_34726;
(statearr_34733[(8)] = inst_34712__$1);

return statearr_34733;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34726__$1,(8),jobs,inst_34715);
} else {
if((state_val_34727 === (7))){
var inst_34722 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34734_34841 = state_34726__$1;
(statearr_34734_34841[(2)] = inst_34722);

(statearr_34734_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (8))){
var inst_34712 = (state_34726[(8)]);
var inst_34717 = (state_34726[(2)]);
var state_34726__$1 = (function (){var statearr_34735 = state_34726;
(statearr_34735[(9)] = inst_34717);

return statearr_34735;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34726__$1,(9),results,inst_34712);
} else {
if((state_val_34727 === (9))){
var inst_34719 = (state_34726[(2)]);
var state_34726__$1 = (function (){var statearr_34736 = state_34726;
(statearr_34736[(10)] = inst_34719);

return statearr_34736;
})();
var statearr_34737_34842 = state_34726__$1;
(statearr_34737_34842[(2)] = null);

(statearr_34737_34842[(1)] = (2));


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
});})(c__34473__auto___34836,jobs,results,process,async))
;
return ((function (switch__34382__auto__,c__34473__auto___34836,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0 = (function (){
var statearr_34738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__);

(statearr_34738[(1)] = (1));

return statearr_34738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1 = (function (state_34726){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34739){if((e34739 instanceof Object)){
var ex__34386__auto__ = e34739;
var statearr_34740_34843 = state_34726;
(statearr_34740_34843[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34844 = state_34726;
state_34726 = G__34844;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = function(state_34726){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1.call(this,state_34726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___34836,jobs,results,process,async))
})();
var state__34475__auto__ = (function (){var statearr_34741 = f__34474__auto__.call(null);
(statearr_34741[(6)] = c__34473__auto___34836);

return statearr_34741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___34836,jobs,results,process,async))
);


var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__,jobs,results,process,async){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__,jobs,results,process,async){
return (function (state_34779){
var state_val_34780 = (state_34779[(1)]);
if((state_val_34780 === (7))){
var inst_34775 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34781_34845 = state_34779__$1;
(statearr_34781_34845[(2)] = inst_34775);

(statearr_34781_34845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (20))){
var state_34779__$1 = state_34779;
var statearr_34782_34846 = state_34779__$1;
(statearr_34782_34846[(2)] = null);

(statearr_34782_34846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (1))){
var state_34779__$1 = state_34779;
var statearr_34783_34847 = state_34779__$1;
(statearr_34783_34847[(2)] = null);

(statearr_34783_34847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (4))){
var inst_34744 = (state_34779[(7)]);
var inst_34744__$1 = (state_34779[(2)]);
var inst_34745 = (inst_34744__$1 == null);
var state_34779__$1 = (function (){var statearr_34784 = state_34779;
(statearr_34784[(7)] = inst_34744__$1);

return statearr_34784;
})();
if(cljs.core.truth_(inst_34745)){
var statearr_34785_34848 = state_34779__$1;
(statearr_34785_34848[(1)] = (5));

} else {
var statearr_34786_34849 = state_34779__$1;
(statearr_34786_34849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (15))){
var inst_34757 = (state_34779[(8)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34779__$1,(18),to,inst_34757);
} else {
if((state_val_34780 === (21))){
var inst_34770 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34787_34850 = state_34779__$1;
(statearr_34787_34850[(2)] = inst_34770);

(statearr_34787_34850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (13))){
var inst_34772 = (state_34779[(2)]);
var state_34779__$1 = (function (){var statearr_34788 = state_34779;
(statearr_34788[(9)] = inst_34772);

return statearr_34788;
})();
var statearr_34789_34851 = state_34779__$1;
(statearr_34789_34851[(2)] = null);

(statearr_34789_34851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (6))){
var inst_34744 = (state_34779[(7)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34779__$1,(11),inst_34744);
} else {
if((state_val_34780 === (17))){
var inst_34765 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34765)){
var statearr_34790_34852 = state_34779__$1;
(statearr_34790_34852[(1)] = (19));

} else {
var statearr_34791_34853 = state_34779__$1;
(statearr_34791_34853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (3))){
var inst_34777 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34779__$1,inst_34777);
} else {
if((state_val_34780 === (12))){
var inst_34754 = (state_34779[(10)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34779__$1,(14),inst_34754);
} else {
if((state_val_34780 === (2))){
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34779__$1,(4),results);
} else {
if((state_val_34780 === (19))){
var state_34779__$1 = state_34779;
var statearr_34792_34854 = state_34779__$1;
(statearr_34792_34854[(2)] = null);

(statearr_34792_34854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (11))){
var inst_34754 = (state_34779[(2)]);
var state_34779__$1 = (function (){var statearr_34793 = state_34779;
(statearr_34793[(10)] = inst_34754);

return statearr_34793;
})();
var statearr_34794_34855 = state_34779__$1;
(statearr_34794_34855[(2)] = null);

(statearr_34794_34855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (9))){
var state_34779__$1 = state_34779;
var statearr_34795_34856 = state_34779__$1;
(statearr_34795_34856[(2)] = null);

(statearr_34795_34856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (5))){
var state_34779__$1 = state_34779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34796_34857 = state_34779__$1;
(statearr_34796_34857[(1)] = (8));

} else {
var statearr_34797_34858 = state_34779__$1;
(statearr_34797_34858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (14))){
var inst_34757 = (state_34779[(8)]);
var inst_34759 = (state_34779[(11)]);
var inst_34757__$1 = (state_34779[(2)]);
var inst_34758 = (inst_34757__$1 == null);
var inst_34759__$1 = cljs.core.not.call(null,inst_34758);
var state_34779__$1 = (function (){var statearr_34798 = state_34779;
(statearr_34798[(8)] = inst_34757__$1);

(statearr_34798[(11)] = inst_34759__$1);

return statearr_34798;
})();
if(inst_34759__$1){
var statearr_34799_34859 = state_34779__$1;
(statearr_34799_34859[(1)] = (15));

} else {
var statearr_34800_34860 = state_34779__$1;
(statearr_34800_34860[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (16))){
var inst_34759 = (state_34779[(11)]);
var state_34779__$1 = state_34779;
var statearr_34801_34861 = state_34779__$1;
(statearr_34801_34861[(2)] = inst_34759);

(statearr_34801_34861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (10))){
var inst_34751 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34802_34862 = state_34779__$1;
(statearr_34802_34862[(2)] = inst_34751);

(statearr_34802_34862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (18))){
var inst_34762 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34803_34863 = state_34779__$1;
(statearr_34803_34863[(2)] = inst_34762);

(statearr_34803_34863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (8))){
var inst_34748 = cljs.core.async.close_BANG_.call(null,to);
var state_34779__$1 = state_34779;
var statearr_34804_34864 = state_34779__$1;
(statearr_34804_34864[(2)] = inst_34748);

(statearr_34804_34864[(1)] = (10));


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
});})(c__34473__auto__,jobs,results,process,async))
;
return ((function (switch__34382__auto__,c__34473__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0 = (function (){
var statearr_34805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__);

(statearr_34805[(1)] = (1));

return statearr_34805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1 = (function (state_34779){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34806){if((e34806 instanceof Object)){
var ex__34386__auto__ = e34806;
var statearr_34807_34865 = state_34779;
(statearr_34807_34865[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34866 = state_34779;
state_34779 = G__34866;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__ = function(state_34779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1.call(this,state_34779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__,jobs,results,process,async))
})();
var state__34475__auto__ = (function (){var statearr_34808 = f__34474__auto__.call(null);
(statearr_34808[(6)] = c__34473__auto__);

return statearr_34808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__,jobs,results,process,async))
);

return c__34473__auto__;
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
var G__34868 = arguments.length;
switch (G__34868) {
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
var G__34871 = arguments.length;
switch (G__34871) {
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
var G__34874 = arguments.length;
switch (G__34874) {
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
var c__34473__auto___34923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___34923,tc,fc){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___34923,tc,fc){
return (function (state_34900){
var state_val_34901 = (state_34900[(1)]);
if((state_val_34901 === (7))){
var inst_34896 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
var statearr_34902_34924 = state_34900__$1;
(statearr_34902_34924[(2)] = inst_34896);

(statearr_34902_34924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (1))){
var state_34900__$1 = state_34900;
var statearr_34903_34925 = state_34900__$1;
(statearr_34903_34925[(2)] = null);

(statearr_34903_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (4))){
var inst_34877 = (state_34900[(7)]);
var inst_34877__$1 = (state_34900[(2)]);
var inst_34878 = (inst_34877__$1 == null);
var state_34900__$1 = (function (){var statearr_34904 = state_34900;
(statearr_34904[(7)] = inst_34877__$1);

return statearr_34904;
})();
if(cljs.core.truth_(inst_34878)){
var statearr_34905_34926 = state_34900__$1;
(statearr_34905_34926[(1)] = (5));

} else {
var statearr_34906_34927 = state_34900__$1;
(statearr_34906_34927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (13))){
var state_34900__$1 = state_34900;
var statearr_34907_34928 = state_34900__$1;
(statearr_34907_34928[(2)] = null);

(statearr_34907_34928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (6))){
var inst_34877 = (state_34900[(7)]);
var inst_34883 = p.call(null,inst_34877);
var state_34900__$1 = state_34900;
if(cljs.core.truth_(inst_34883)){
var statearr_34908_34929 = state_34900__$1;
(statearr_34908_34929[(1)] = (9));

} else {
var statearr_34909_34930 = state_34900__$1;
(statearr_34909_34930[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (3))){
var inst_34898 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34900__$1,inst_34898);
} else {
if((state_val_34901 === (12))){
var state_34900__$1 = state_34900;
var statearr_34910_34931 = state_34900__$1;
(statearr_34910_34931[(2)] = null);

(statearr_34910_34931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (2))){
var state_34900__$1 = state_34900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34900__$1,(4),ch);
} else {
if((state_val_34901 === (11))){
var inst_34877 = (state_34900[(7)]);
var inst_34887 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34900__$1,(8),inst_34887,inst_34877);
} else {
if((state_val_34901 === (9))){
var state_34900__$1 = state_34900;
var statearr_34911_34932 = state_34900__$1;
(statearr_34911_34932[(2)] = tc);

(statearr_34911_34932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (5))){
var inst_34880 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34881 = cljs.core.async.close_BANG_.call(null,fc);
var state_34900__$1 = (function (){var statearr_34912 = state_34900;
(statearr_34912[(8)] = inst_34880);

return statearr_34912;
})();
var statearr_34913_34933 = state_34900__$1;
(statearr_34913_34933[(2)] = inst_34881);

(statearr_34913_34933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (14))){
var inst_34894 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
var statearr_34914_34934 = state_34900__$1;
(statearr_34914_34934[(2)] = inst_34894);

(statearr_34914_34934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (10))){
var state_34900__$1 = state_34900;
var statearr_34915_34935 = state_34900__$1;
(statearr_34915_34935[(2)] = fc);

(statearr_34915_34935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (8))){
var inst_34889 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
if(cljs.core.truth_(inst_34889)){
var statearr_34916_34936 = state_34900__$1;
(statearr_34916_34936[(1)] = (12));

} else {
var statearr_34917_34937 = state_34900__$1;
(statearr_34917_34937[(1)] = (13));

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
});})(c__34473__auto___34923,tc,fc))
;
return ((function (switch__34382__auto__,c__34473__auto___34923,tc,fc){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_34918 = [null,null,null,null,null,null,null,null,null];
(statearr_34918[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_34918[(1)] = (1));

return statearr_34918;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_34900){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34919){if((e34919 instanceof Object)){
var ex__34386__auto__ = e34919;
var statearr_34920_34938 = state_34900;
(statearr_34920_34938[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34939 = state_34900;
state_34900 = G__34939;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_34900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_34900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___34923,tc,fc))
})();
var state__34475__auto__ = (function (){var statearr_34921 = f__34474__auto__.call(null);
(statearr_34921[(6)] = c__34473__auto___34923);

return statearr_34921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___34923,tc,fc))
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
var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__){
return (function (state_34960){
var state_val_34961 = (state_34960[(1)]);
if((state_val_34961 === (7))){
var inst_34956 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_34962_34980 = state_34960__$1;
(statearr_34962_34980[(2)] = inst_34956);

(statearr_34962_34980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (1))){
var inst_34940 = init;
var state_34960__$1 = (function (){var statearr_34963 = state_34960;
(statearr_34963[(7)] = inst_34940);

return statearr_34963;
})();
var statearr_34964_34981 = state_34960__$1;
(statearr_34964_34981[(2)] = null);

(statearr_34964_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (4))){
var inst_34943 = (state_34960[(8)]);
var inst_34943__$1 = (state_34960[(2)]);
var inst_34944 = (inst_34943__$1 == null);
var state_34960__$1 = (function (){var statearr_34965 = state_34960;
(statearr_34965[(8)] = inst_34943__$1);

return statearr_34965;
})();
if(cljs.core.truth_(inst_34944)){
var statearr_34966_34982 = state_34960__$1;
(statearr_34966_34982[(1)] = (5));

} else {
var statearr_34967_34983 = state_34960__$1;
(statearr_34967_34983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (6))){
var inst_34947 = (state_34960[(9)]);
var inst_34940 = (state_34960[(7)]);
var inst_34943 = (state_34960[(8)]);
var inst_34947__$1 = f.call(null,inst_34940,inst_34943);
var inst_34948 = cljs.core.reduced_QMARK_.call(null,inst_34947__$1);
var state_34960__$1 = (function (){var statearr_34968 = state_34960;
(statearr_34968[(9)] = inst_34947__$1);

return statearr_34968;
})();
if(inst_34948){
var statearr_34969_34984 = state_34960__$1;
(statearr_34969_34984[(1)] = (8));

} else {
var statearr_34970_34985 = state_34960__$1;
(statearr_34970_34985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (3))){
var inst_34958 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34960__$1,inst_34958);
} else {
if((state_val_34961 === (2))){
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34960__$1,(4),ch);
} else {
if((state_val_34961 === (9))){
var inst_34947 = (state_34960[(9)]);
var inst_34940 = inst_34947;
var state_34960__$1 = (function (){var statearr_34971 = state_34960;
(statearr_34971[(7)] = inst_34940);

return statearr_34971;
})();
var statearr_34972_34986 = state_34960__$1;
(statearr_34972_34986[(2)] = null);

(statearr_34972_34986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (5))){
var inst_34940 = (state_34960[(7)]);
var state_34960__$1 = state_34960;
var statearr_34973_34987 = state_34960__$1;
(statearr_34973_34987[(2)] = inst_34940);

(statearr_34973_34987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (10))){
var inst_34954 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_34974_34988 = state_34960__$1;
(statearr_34974_34988[(2)] = inst_34954);

(statearr_34974_34988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (8))){
var inst_34947 = (state_34960[(9)]);
var inst_34950 = cljs.core.deref.call(null,inst_34947);
var state_34960__$1 = state_34960;
var statearr_34975_34989 = state_34960__$1;
(statearr_34975_34989[(2)] = inst_34950);

(statearr_34975_34989[(1)] = (10));


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
});})(c__34473__auto__))
;
return ((function (switch__34382__auto__,c__34473__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34383__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34383__auto____0 = (function (){
var statearr_34976 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34976[(0)] = cljs$core$async$reduce_$_state_machine__34383__auto__);

(statearr_34976[(1)] = (1));

return statearr_34976;
});
var cljs$core$async$reduce_$_state_machine__34383__auto____1 = (function (state_34960){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e34977){if((e34977 instanceof Object)){
var ex__34386__auto__ = e34977;
var statearr_34978_34990 = state_34960;
(statearr_34978_34990[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34991 = state_34960;
state_34960 = G__34991;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34383__auto__ = function(state_34960){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34383__auto____1.call(this,state_34960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34383__auto____0;
cljs$core$async$reduce_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34383__auto____1;
return cljs$core$async$reduce_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__))
})();
var state__34475__auto__ = (function (){var statearr_34979 = f__34474__auto__.call(null);
(statearr_34979[(6)] = c__34473__auto__);

return statearr_34979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__))
);

return c__34473__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__,f__$1){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__,f__$1){
return (function (state_34997){
var state_val_34998 = (state_34997[(1)]);
if((state_val_34998 === (1))){
var inst_34992 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34997__$1,(2),inst_34992);
} else {
if((state_val_34998 === (2))){
var inst_34994 = (state_34997[(2)]);
var inst_34995 = f__$1.call(null,inst_34994);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34997__$1,inst_34995);
} else {
return null;
}
}
});})(c__34473__auto__,f__$1))
;
return ((function (switch__34382__auto__,c__34473__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34383__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34383__auto____0 = (function (){
var statearr_34999 = [null,null,null,null,null,null,null];
(statearr_34999[(0)] = cljs$core$async$transduce_$_state_machine__34383__auto__);

(statearr_34999[(1)] = (1));

return statearr_34999;
});
var cljs$core$async$transduce_$_state_machine__34383__auto____1 = (function (state_34997){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_34997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35000){if((e35000 instanceof Object)){
var ex__34386__auto__ = e35000;
var statearr_35001_35003 = state_34997;
(statearr_35001_35003[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_34997;
state_34997 = G__35004;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34383__auto__ = function(state_34997){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34383__auto____1.call(this,state_34997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34383__auto____0;
cljs$core$async$transduce_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34383__auto____1;
return cljs$core$async$transduce_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__,f__$1))
})();
var state__34475__auto__ = (function (){var statearr_35002 = f__34474__auto__.call(null);
(statearr_35002[(6)] = c__34473__auto__);

return statearr_35002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__,f__$1))
);

return c__34473__auto__;
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
var G__35006 = arguments.length;
switch (G__35006) {
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
var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__){
return (function (state_35031){
var state_val_35032 = (state_35031[(1)]);
if((state_val_35032 === (7))){
var inst_35013 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35033_35054 = state_35031__$1;
(statearr_35033_35054[(2)] = inst_35013);

(statearr_35033_35054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (1))){
var inst_35007 = cljs.core.seq.call(null,coll);
var inst_35008 = inst_35007;
var state_35031__$1 = (function (){var statearr_35034 = state_35031;
(statearr_35034[(7)] = inst_35008);

return statearr_35034;
})();
var statearr_35035_35055 = state_35031__$1;
(statearr_35035_35055[(2)] = null);

(statearr_35035_35055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (4))){
var inst_35008 = (state_35031[(7)]);
var inst_35011 = cljs.core.first.call(null,inst_35008);
var state_35031__$1 = state_35031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35031__$1,(7),ch,inst_35011);
} else {
if((state_val_35032 === (13))){
var inst_35025 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35036_35056 = state_35031__$1;
(statearr_35036_35056[(2)] = inst_35025);

(statearr_35036_35056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (6))){
var inst_35016 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
if(cljs.core.truth_(inst_35016)){
var statearr_35037_35057 = state_35031__$1;
(statearr_35037_35057[(1)] = (8));

} else {
var statearr_35038_35058 = state_35031__$1;
(statearr_35038_35058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (3))){
var inst_35029 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35031__$1,inst_35029);
} else {
if((state_val_35032 === (12))){
var state_35031__$1 = state_35031;
var statearr_35039_35059 = state_35031__$1;
(statearr_35039_35059[(2)] = null);

(statearr_35039_35059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (2))){
var inst_35008 = (state_35031[(7)]);
var state_35031__$1 = state_35031;
if(cljs.core.truth_(inst_35008)){
var statearr_35040_35060 = state_35031__$1;
(statearr_35040_35060[(1)] = (4));

} else {
var statearr_35041_35061 = state_35031__$1;
(statearr_35041_35061[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (11))){
var inst_35022 = cljs.core.async.close_BANG_.call(null,ch);
var state_35031__$1 = state_35031;
var statearr_35042_35062 = state_35031__$1;
(statearr_35042_35062[(2)] = inst_35022);

(statearr_35042_35062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (9))){
var state_35031__$1 = state_35031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35043_35063 = state_35031__$1;
(statearr_35043_35063[(1)] = (11));

} else {
var statearr_35044_35064 = state_35031__$1;
(statearr_35044_35064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (5))){
var inst_35008 = (state_35031[(7)]);
var state_35031__$1 = state_35031;
var statearr_35045_35065 = state_35031__$1;
(statearr_35045_35065[(2)] = inst_35008);

(statearr_35045_35065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (10))){
var inst_35027 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35046_35066 = state_35031__$1;
(statearr_35046_35066[(2)] = inst_35027);

(statearr_35046_35066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (8))){
var inst_35008 = (state_35031[(7)]);
var inst_35018 = cljs.core.next.call(null,inst_35008);
var inst_35008__$1 = inst_35018;
var state_35031__$1 = (function (){var statearr_35047 = state_35031;
(statearr_35047[(7)] = inst_35008__$1);

return statearr_35047;
})();
var statearr_35048_35067 = state_35031__$1;
(statearr_35048_35067[(2)] = null);

(statearr_35048_35067[(1)] = (2));


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
});})(c__34473__auto__))
;
return ((function (switch__34382__auto__,c__34473__auto__){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_35049 = [null,null,null,null,null,null,null,null];
(statearr_35049[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_35049[(1)] = (1));

return statearr_35049;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_35031){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35050){if((e35050 instanceof Object)){
var ex__34386__auto__ = e35050;
var statearr_35051_35068 = state_35031;
(statearr_35051_35068[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35069 = state_35031;
state_35031 = G__35069;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_35031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_35031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__))
})();
var state__34475__auto__ = (function (){var statearr_35052 = f__34474__auto__.call(null);
(statearr_35052[(6)] = c__34473__auto__);

return statearr_35052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__))
);

return c__34473__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35070 = (function (ch,cs,meta35071){
this.ch = ch;
this.cs = cs;
this.meta35071 = meta35071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35072,meta35071__$1){
var self__ = this;
var _35072__$1 = this;
return (new cljs.core.async.t_cljs$core$async35070(self__.ch,self__.cs,meta35071__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35072){
var self__ = this;
var _35072__$1 = this;
return self__.meta35071;
});})(cs))
;

cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35070.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35070.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35071","meta35071",1072044208,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35070";

cljs.core.async.t_cljs$core$async35070.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35070");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35070.
 */
cljs.core.async.__GT_t_cljs$core$async35070 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35070(ch__$1,cs__$1,meta35071){
return (new cljs.core.async.t_cljs$core$async35070(ch__$1,cs__$1,meta35071));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35070(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34473__auto___35292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___35292,cs,m,dchan,dctr,done){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___35292,cs,m,dchan,dctr,done){
return (function (state_35207){
var state_val_35208 = (state_35207[(1)]);
if((state_val_35208 === (7))){
var inst_35203 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35209_35293 = state_35207__$1;
(statearr_35209_35293[(2)] = inst_35203);

(statearr_35209_35293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (20))){
var inst_35106 = (state_35207[(7)]);
var inst_35118 = cljs.core.first.call(null,inst_35106);
var inst_35119 = cljs.core.nth.call(null,inst_35118,(0),null);
var inst_35120 = cljs.core.nth.call(null,inst_35118,(1),null);
var state_35207__$1 = (function (){var statearr_35210 = state_35207;
(statearr_35210[(8)] = inst_35119);

return statearr_35210;
})();
if(cljs.core.truth_(inst_35120)){
var statearr_35211_35294 = state_35207__$1;
(statearr_35211_35294[(1)] = (22));

} else {
var statearr_35212_35295 = state_35207__$1;
(statearr_35212_35295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (27))){
var inst_35155 = (state_35207[(9)]);
var inst_35148 = (state_35207[(10)]);
var inst_35075 = (state_35207[(11)]);
var inst_35150 = (state_35207[(12)]);
var inst_35155__$1 = cljs.core._nth.call(null,inst_35148,inst_35150);
var inst_35156 = cljs.core.async.put_BANG_.call(null,inst_35155__$1,inst_35075,done);
var state_35207__$1 = (function (){var statearr_35213 = state_35207;
(statearr_35213[(9)] = inst_35155__$1);

return statearr_35213;
})();
if(cljs.core.truth_(inst_35156)){
var statearr_35214_35296 = state_35207__$1;
(statearr_35214_35296[(1)] = (30));

} else {
var statearr_35215_35297 = state_35207__$1;
(statearr_35215_35297[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (1))){
var state_35207__$1 = state_35207;
var statearr_35216_35298 = state_35207__$1;
(statearr_35216_35298[(2)] = null);

(statearr_35216_35298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (24))){
var inst_35106 = (state_35207[(7)]);
var inst_35125 = (state_35207[(2)]);
var inst_35126 = cljs.core.next.call(null,inst_35106);
var inst_35084 = inst_35126;
var inst_35085 = null;
var inst_35086 = (0);
var inst_35087 = (0);
var state_35207__$1 = (function (){var statearr_35217 = state_35207;
(statearr_35217[(13)] = inst_35084);

(statearr_35217[(14)] = inst_35086);

(statearr_35217[(15)] = inst_35085);

(statearr_35217[(16)] = inst_35125);

(statearr_35217[(17)] = inst_35087);

return statearr_35217;
})();
var statearr_35218_35299 = state_35207__$1;
(statearr_35218_35299[(2)] = null);

(statearr_35218_35299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (39))){
var state_35207__$1 = state_35207;
var statearr_35222_35300 = state_35207__$1;
(statearr_35222_35300[(2)] = null);

(statearr_35222_35300[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (4))){
var inst_35075 = (state_35207[(11)]);
var inst_35075__$1 = (state_35207[(2)]);
var inst_35076 = (inst_35075__$1 == null);
var state_35207__$1 = (function (){var statearr_35223 = state_35207;
(statearr_35223[(11)] = inst_35075__$1);

return statearr_35223;
})();
if(cljs.core.truth_(inst_35076)){
var statearr_35224_35301 = state_35207__$1;
(statearr_35224_35301[(1)] = (5));

} else {
var statearr_35225_35302 = state_35207__$1;
(statearr_35225_35302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (15))){
var inst_35084 = (state_35207[(13)]);
var inst_35086 = (state_35207[(14)]);
var inst_35085 = (state_35207[(15)]);
var inst_35087 = (state_35207[(17)]);
var inst_35102 = (state_35207[(2)]);
var inst_35103 = (inst_35087 + (1));
var tmp35219 = inst_35084;
var tmp35220 = inst_35086;
var tmp35221 = inst_35085;
var inst_35084__$1 = tmp35219;
var inst_35085__$1 = tmp35221;
var inst_35086__$1 = tmp35220;
var inst_35087__$1 = inst_35103;
var state_35207__$1 = (function (){var statearr_35226 = state_35207;
(statearr_35226[(18)] = inst_35102);

(statearr_35226[(13)] = inst_35084__$1);

(statearr_35226[(14)] = inst_35086__$1);

(statearr_35226[(15)] = inst_35085__$1);

(statearr_35226[(17)] = inst_35087__$1);

return statearr_35226;
})();
var statearr_35227_35303 = state_35207__$1;
(statearr_35227_35303[(2)] = null);

(statearr_35227_35303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (21))){
var inst_35129 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35231_35304 = state_35207__$1;
(statearr_35231_35304[(2)] = inst_35129);

(statearr_35231_35304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (31))){
var inst_35155 = (state_35207[(9)]);
var inst_35159 = done.call(null,null);
var inst_35160 = cljs.core.async.untap_STAR_.call(null,m,inst_35155);
var state_35207__$1 = (function (){var statearr_35232 = state_35207;
(statearr_35232[(19)] = inst_35159);

return statearr_35232;
})();
var statearr_35233_35305 = state_35207__$1;
(statearr_35233_35305[(2)] = inst_35160);

(statearr_35233_35305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (32))){
var inst_35149 = (state_35207[(20)]);
var inst_35148 = (state_35207[(10)]);
var inst_35147 = (state_35207[(21)]);
var inst_35150 = (state_35207[(12)]);
var inst_35162 = (state_35207[(2)]);
var inst_35163 = (inst_35150 + (1));
var tmp35228 = inst_35149;
var tmp35229 = inst_35148;
var tmp35230 = inst_35147;
var inst_35147__$1 = tmp35230;
var inst_35148__$1 = tmp35229;
var inst_35149__$1 = tmp35228;
var inst_35150__$1 = inst_35163;
var state_35207__$1 = (function (){var statearr_35234 = state_35207;
(statearr_35234[(20)] = inst_35149__$1);

(statearr_35234[(22)] = inst_35162);

(statearr_35234[(10)] = inst_35148__$1);

(statearr_35234[(21)] = inst_35147__$1);

(statearr_35234[(12)] = inst_35150__$1);

return statearr_35234;
})();
var statearr_35235_35306 = state_35207__$1;
(statearr_35235_35306[(2)] = null);

(statearr_35235_35306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (40))){
var inst_35175 = (state_35207[(23)]);
var inst_35179 = done.call(null,null);
var inst_35180 = cljs.core.async.untap_STAR_.call(null,m,inst_35175);
var state_35207__$1 = (function (){var statearr_35236 = state_35207;
(statearr_35236[(24)] = inst_35179);

return statearr_35236;
})();
var statearr_35237_35307 = state_35207__$1;
(statearr_35237_35307[(2)] = inst_35180);

(statearr_35237_35307[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (33))){
var inst_35166 = (state_35207[(25)]);
var inst_35168 = cljs.core.chunked_seq_QMARK_.call(null,inst_35166);
var state_35207__$1 = state_35207;
if(inst_35168){
var statearr_35238_35308 = state_35207__$1;
(statearr_35238_35308[(1)] = (36));

} else {
var statearr_35239_35309 = state_35207__$1;
(statearr_35239_35309[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (13))){
var inst_35096 = (state_35207[(26)]);
var inst_35099 = cljs.core.async.close_BANG_.call(null,inst_35096);
var state_35207__$1 = state_35207;
var statearr_35240_35310 = state_35207__$1;
(statearr_35240_35310[(2)] = inst_35099);

(statearr_35240_35310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (22))){
var inst_35119 = (state_35207[(8)]);
var inst_35122 = cljs.core.async.close_BANG_.call(null,inst_35119);
var state_35207__$1 = state_35207;
var statearr_35241_35311 = state_35207__$1;
(statearr_35241_35311[(2)] = inst_35122);

(statearr_35241_35311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (36))){
var inst_35166 = (state_35207[(25)]);
var inst_35170 = cljs.core.chunk_first.call(null,inst_35166);
var inst_35171 = cljs.core.chunk_rest.call(null,inst_35166);
var inst_35172 = cljs.core.count.call(null,inst_35170);
var inst_35147 = inst_35171;
var inst_35148 = inst_35170;
var inst_35149 = inst_35172;
var inst_35150 = (0);
var state_35207__$1 = (function (){var statearr_35242 = state_35207;
(statearr_35242[(20)] = inst_35149);

(statearr_35242[(10)] = inst_35148);

(statearr_35242[(21)] = inst_35147);

(statearr_35242[(12)] = inst_35150);

return statearr_35242;
})();
var statearr_35243_35312 = state_35207__$1;
(statearr_35243_35312[(2)] = null);

(statearr_35243_35312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (41))){
var inst_35166 = (state_35207[(25)]);
var inst_35182 = (state_35207[(2)]);
var inst_35183 = cljs.core.next.call(null,inst_35166);
var inst_35147 = inst_35183;
var inst_35148 = null;
var inst_35149 = (0);
var inst_35150 = (0);
var state_35207__$1 = (function (){var statearr_35244 = state_35207;
(statearr_35244[(20)] = inst_35149);

(statearr_35244[(10)] = inst_35148);

(statearr_35244[(27)] = inst_35182);

(statearr_35244[(21)] = inst_35147);

(statearr_35244[(12)] = inst_35150);

return statearr_35244;
})();
var statearr_35245_35313 = state_35207__$1;
(statearr_35245_35313[(2)] = null);

(statearr_35245_35313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (43))){
var state_35207__$1 = state_35207;
var statearr_35246_35314 = state_35207__$1;
(statearr_35246_35314[(2)] = null);

(statearr_35246_35314[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (29))){
var inst_35191 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35247_35315 = state_35207__$1;
(statearr_35247_35315[(2)] = inst_35191);

(statearr_35247_35315[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (44))){
var inst_35200 = (state_35207[(2)]);
var state_35207__$1 = (function (){var statearr_35248 = state_35207;
(statearr_35248[(28)] = inst_35200);

return statearr_35248;
})();
var statearr_35249_35316 = state_35207__$1;
(statearr_35249_35316[(2)] = null);

(statearr_35249_35316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (6))){
var inst_35139 = (state_35207[(29)]);
var inst_35138 = cljs.core.deref.call(null,cs);
var inst_35139__$1 = cljs.core.keys.call(null,inst_35138);
var inst_35140 = cljs.core.count.call(null,inst_35139__$1);
var inst_35141 = cljs.core.reset_BANG_.call(null,dctr,inst_35140);
var inst_35146 = cljs.core.seq.call(null,inst_35139__$1);
var inst_35147 = inst_35146;
var inst_35148 = null;
var inst_35149 = (0);
var inst_35150 = (0);
var state_35207__$1 = (function (){var statearr_35250 = state_35207;
(statearr_35250[(29)] = inst_35139__$1);

(statearr_35250[(20)] = inst_35149);

(statearr_35250[(10)] = inst_35148);

(statearr_35250[(21)] = inst_35147);

(statearr_35250[(12)] = inst_35150);

(statearr_35250[(30)] = inst_35141);

return statearr_35250;
})();
var statearr_35251_35317 = state_35207__$1;
(statearr_35251_35317[(2)] = null);

(statearr_35251_35317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (28))){
var inst_35166 = (state_35207[(25)]);
var inst_35147 = (state_35207[(21)]);
var inst_35166__$1 = cljs.core.seq.call(null,inst_35147);
var state_35207__$1 = (function (){var statearr_35252 = state_35207;
(statearr_35252[(25)] = inst_35166__$1);

return statearr_35252;
})();
if(inst_35166__$1){
var statearr_35253_35318 = state_35207__$1;
(statearr_35253_35318[(1)] = (33));

} else {
var statearr_35254_35319 = state_35207__$1;
(statearr_35254_35319[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (25))){
var inst_35149 = (state_35207[(20)]);
var inst_35150 = (state_35207[(12)]);
var inst_35152 = (inst_35150 < inst_35149);
var inst_35153 = inst_35152;
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35153)){
var statearr_35255_35320 = state_35207__$1;
(statearr_35255_35320[(1)] = (27));

} else {
var statearr_35256_35321 = state_35207__$1;
(statearr_35256_35321[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (34))){
var state_35207__$1 = state_35207;
var statearr_35257_35322 = state_35207__$1;
(statearr_35257_35322[(2)] = null);

(statearr_35257_35322[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (17))){
var state_35207__$1 = state_35207;
var statearr_35258_35323 = state_35207__$1;
(statearr_35258_35323[(2)] = null);

(statearr_35258_35323[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (3))){
var inst_35205 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35207__$1,inst_35205);
} else {
if((state_val_35208 === (12))){
var inst_35134 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35259_35324 = state_35207__$1;
(statearr_35259_35324[(2)] = inst_35134);

(statearr_35259_35324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (2))){
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35207__$1,(4),ch);
} else {
if((state_val_35208 === (23))){
var state_35207__$1 = state_35207;
var statearr_35260_35325 = state_35207__$1;
(statearr_35260_35325[(2)] = null);

(statearr_35260_35325[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (35))){
var inst_35189 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35261_35326 = state_35207__$1;
(statearr_35261_35326[(2)] = inst_35189);

(statearr_35261_35326[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (19))){
var inst_35106 = (state_35207[(7)]);
var inst_35110 = cljs.core.chunk_first.call(null,inst_35106);
var inst_35111 = cljs.core.chunk_rest.call(null,inst_35106);
var inst_35112 = cljs.core.count.call(null,inst_35110);
var inst_35084 = inst_35111;
var inst_35085 = inst_35110;
var inst_35086 = inst_35112;
var inst_35087 = (0);
var state_35207__$1 = (function (){var statearr_35262 = state_35207;
(statearr_35262[(13)] = inst_35084);

(statearr_35262[(14)] = inst_35086);

(statearr_35262[(15)] = inst_35085);

(statearr_35262[(17)] = inst_35087);

return statearr_35262;
})();
var statearr_35263_35327 = state_35207__$1;
(statearr_35263_35327[(2)] = null);

(statearr_35263_35327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (11))){
var inst_35084 = (state_35207[(13)]);
var inst_35106 = (state_35207[(7)]);
var inst_35106__$1 = cljs.core.seq.call(null,inst_35084);
var state_35207__$1 = (function (){var statearr_35264 = state_35207;
(statearr_35264[(7)] = inst_35106__$1);

return statearr_35264;
})();
if(inst_35106__$1){
var statearr_35265_35328 = state_35207__$1;
(statearr_35265_35328[(1)] = (16));

} else {
var statearr_35266_35329 = state_35207__$1;
(statearr_35266_35329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (9))){
var inst_35136 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35267_35330 = state_35207__$1;
(statearr_35267_35330[(2)] = inst_35136);

(statearr_35267_35330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (5))){
var inst_35082 = cljs.core.deref.call(null,cs);
var inst_35083 = cljs.core.seq.call(null,inst_35082);
var inst_35084 = inst_35083;
var inst_35085 = null;
var inst_35086 = (0);
var inst_35087 = (0);
var state_35207__$1 = (function (){var statearr_35268 = state_35207;
(statearr_35268[(13)] = inst_35084);

(statearr_35268[(14)] = inst_35086);

(statearr_35268[(15)] = inst_35085);

(statearr_35268[(17)] = inst_35087);

return statearr_35268;
})();
var statearr_35269_35331 = state_35207__$1;
(statearr_35269_35331[(2)] = null);

(statearr_35269_35331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (14))){
var state_35207__$1 = state_35207;
var statearr_35270_35332 = state_35207__$1;
(statearr_35270_35332[(2)] = null);

(statearr_35270_35332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (45))){
var inst_35197 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35271_35333 = state_35207__$1;
(statearr_35271_35333[(2)] = inst_35197);

(statearr_35271_35333[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (26))){
var inst_35139 = (state_35207[(29)]);
var inst_35193 = (state_35207[(2)]);
var inst_35194 = cljs.core.seq.call(null,inst_35139);
var state_35207__$1 = (function (){var statearr_35272 = state_35207;
(statearr_35272[(31)] = inst_35193);

return statearr_35272;
})();
if(inst_35194){
var statearr_35273_35334 = state_35207__$1;
(statearr_35273_35334[(1)] = (42));

} else {
var statearr_35274_35335 = state_35207__$1;
(statearr_35274_35335[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (16))){
var inst_35106 = (state_35207[(7)]);
var inst_35108 = cljs.core.chunked_seq_QMARK_.call(null,inst_35106);
var state_35207__$1 = state_35207;
if(inst_35108){
var statearr_35275_35336 = state_35207__$1;
(statearr_35275_35336[(1)] = (19));

} else {
var statearr_35276_35337 = state_35207__$1;
(statearr_35276_35337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (38))){
var inst_35186 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35277_35338 = state_35207__$1;
(statearr_35277_35338[(2)] = inst_35186);

(statearr_35277_35338[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (30))){
var state_35207__$1 = state_35207;
var statearr_35278_35339 = state_35207__$1;
(statearr_35278_35339[(2)] = null);

(statearr_35278_35339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (10))){
var inst_35085 = (state_35207[(15)]);
var inst_35087 = (state_35207[(17)]);
var inst_35095 = cljs.core._nth.call(null,inst_35085,inst_35087);
var inst_35096 = cljs.core.nth.call(null,inst_35095,(0),null);
var inst_35097 = cljs.core.nth.call(null,inst_35095,(1),null);
var state_35207__$1 = (function (){var statearr_35279 = state_35207;
(statearr_35279[(26)] = inst_35096);

return statearr_35279;
})();
if(cljs.core.truth_(inst_35097)){
var statearr_35280_35340 = state_35207__$1;
(statearr_35280_35340[(1)] = (13));

} else {
var statearr_35281_35341 = state_35207__$1;
(statearr_35281_35341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (18))){
var inst_35132 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35282_35342 = state_35207__$1;
(statearr_35282_35342[(2)] = inst_35132);

(statearr_35282_35342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (42))){
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35207__$1,(45),dchan);
} else {
if((state_val_35208 === (37))){
var inst_35166 = (state_35207[(25)]);
var inst_35175 = (state_35207[(23)]);
var inst_35075 = (state_35207[(11)]);
var inst_35175__$1 = cljs.core.first.call(null,inst_35166);
var inst_35176 = cljs.core.async.put_BANG_.call(null,inst_35175__$1,inst_35075,done);
var state_35207__$1 = (function (){var statearr_35283 = state_35207;
(statearr_35283[(23)] = inst_35175__$1);

return statearr_35283;
})();
if(cljs.core.truth_(inst_35176)){
var statearr_35284_35343 = state_35207__$1;
(statearr_35284_35343[(1)] = (39));

} else {
var statearr_35285_35344 = state_35207__$1;
(statearr_35285_35344[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (8))){
var inst_35086 = (state_35207[(14)]);
var inst_35087 = (state_35207[(17)]);
var inst_35089 = (inst_35087 < inst_35086);
var inst_35090 = inst_35089;
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35090)){
var statearr_35286_35345 = state_35207__$1;
(statearr_35286_35345[(1)] = (10));

} else {
var statearr_35287_35346 = state_35207__$1;
(statearr_35287_35346[(1)] = (11));

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
});})(c__34473__auto___35292,cs,m,dchan,dctr,done))
;
return ((function (switch__34382__auto__,c__34473__auto___35292,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34383__auto__ = null;
var cljs$core$async$mult_$_state_machine__34383__auto____0 = (function (){
var statearr_35288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35288[(0)] = cljs$core$async$mult_$_state_machine__34383__auto__);

(statearr_35288[(1)] = (1));

return statearr_35288;
});
var cljs$core$async$mult_$_state_machine__34383__auto____1 = (function (state_35207){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35289){if((e35289 instanceof Object)){
var ex__34386__auto__ = e35289;
var statearr_35290_35347 = state_35207;
(statearr_35290_35347[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35348 = state_35207;
state_35207 = G__35348;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34383__auto__ = function(state_35207){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34383__auto____1.call(this,state_35207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34383__auto____0;
cljs$core$async$mult_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34383__auto____1;
return cljs$core$async$mult_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___35292,cs,m,dchan,dctr,done))
})();
var state__34475__auto__ = (function (){var statearr_35291 = f__34474__auto__.call(null);
(statearr_35291[(6)] = c__34473__auto___35292);

return statearr_35291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___35292,cs,m,dchan,dctr,done))
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
var G__35350 = arguments.length;
switch (G__35350) {
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
var len__4531__auto___35362 = arguments.length;
var i__4532__auto___35363 = (0);
while(true){
if((i__4532__auto___35363 < len__4531__auto___35362)){
args__4534__auto__.push((arguments[i__4532__auto___35363]));

var G__35364 = (i__4532__auto___35363 + (1));
i__4532__auto___35363 = G__35364;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35356){
var map__35357 = p__35356;
var map__35357__$1 = ((((!((map__35357 == null)))?(((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35357):map__35357);
var opts = map__35357__$1;
var statearr_35359_35365 = state;
(statearr_35359_35365[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35357,map__35357__$1,opts){
return (function (val){
var statearr_35360_35366 = state;
(statearr_35360_35366[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35357,map__35357__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35361_35367 = state;
(statearr_35361_35367[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35352){
var G__35353 = cljs.core.first.call(null,seq35352);
var seq35352__$1 = cljs.core.next.call(null,seq35352);
var G__35354 = cljs.core.first.call(null,seq35352__$1);
var seq35352__$2 = cljs.core.next.call(null,seq35352__$1);
var G__35355 = cljs.core.first.call(null,seq35352__$2);
var seq35352__$3 = cljs.core.next.call(null,seq35352__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35353,G__35354,G__35355,seq35352__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35368 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35369){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35369 = meta35369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35370,meta35369__$1){
var self__ = this;
var _35370__$1 = this;
return (new cljs.core.async.t_cljs$core$async35368(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35369__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35370){
var self__ = this;
var _35370__$1 = this;
return self__.meta35369;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35368.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35369","meta35369",847749626,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35368";

cljs.core.async.t_cljs$core$async35368.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35368");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35368.
 */
cljs.core.async.__GT_t_cljs$core$async35368 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35368(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35369){
return (new cljs.core.async.t_cljs$core$async35368(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35369));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35368(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34473__auto___35532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___35532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___35532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35472){
var state_val_35473 = (state_35472[(1)]);
if((state_val_35473 === (7))){
var inst_35387 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35474_35533 = state_35472__$1;
(statearr_35474_35533[(2)] = inst_35387);

(statearr_35474_35533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (20))){
var inst_35399 = (state_35472[(7)]);
var state_35472__$1 = state_35472;
var statearr_35475_35534 = state_35472__$1;
(statearr_35475_35534[(2)] = inst_35399);

(statearr_35475_35534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (27))){
var state_35472__$1 = state_35472;
var statearr_35476_35535 = state_35472__$1;
(statearr_35476_35535[(2)] = null);

(statearr_35476_35535[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (1))){
var inst_35374 = (state_35472[(8)]);
var inst_35374__$1 = calc_state.call(null);
var inst_35376 = (inst_35374__$1 == null);
var inst_35377 = cljs.core.not.call(null,inst_35376);
var state_35472__$1 = (function (){var statearr_35477 = state_35472;
(statearr_35477[(8)] = inst_35374__$1);

return statearr_35477;
})();
if(inst_35377){
var statearr_35478_35536 = state_35472__$1;
(statearr_35478_35536[(1)] = (2));

} else {
var statearr_35479_35537 = state_35472__$1;
(statearr_35479_35537[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (24))){
var inst_35423 = (state_35472[(9)]);
var inst_35446 = (state_35472[(10)]);
var inst_35432 = (state_35472[(11)]);
var inst_35446__$1 = inst_35423.call(null,inst_35432);
var state_35472__$1 = (function (){var statearr_35480 = state_35472;
(statearr_35480[(10)] = inst_35446__$1);

return statearr_35480;
})();
if(cljs.core.truth_(inst_35446__$1)){
var statearr_35481_35538 = state_35472__$1;
(statearr_35481_35538[(1)] = (29));

} else {
var statearr_35482_35539 = state_35472__$1;
(statearr_35482_35539[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (4))){
var inst_35390 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35390)){
var statearr_35483_35540 = state_35472__$1;
(statearr_35483_35540[(1)] = (8));

} else {
var statearr_35484_35541 = state_35472__$1;
(statearr_35484_35541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (15))){
var inst_35417 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35417)){
var statearr_35485_35542 = state_35472__$1;
(statearr_35485_35542[(1)] = (19));

} else {
var statearr_35486_35543 = state_35472__$1;
(statearr_35486_35543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (21))){
var inst_35422 = (state_35472[(12)]);
var inst_35422__$1 = (state_35472[(2)]);
var inst_35423 = cljs.core.get.call(null,inst_35422__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35424 = cljs.core.get.call(null,inst_35422__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35425 = cljs.core.get.call(null,inst_35422__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35472__$1 = (function (){var statearr_35487 = state_35472;
(statearr_35487[(9)] = inst_35423);

(statearr_35487[(13)] = inst_35424);

(statearr_35487[(12)] = inst_35422__$1);

return statearr_35487;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35472__$1,(22),inst_35425);
} else {
if((state_val_35473 === (31))){
var inst_35454 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35454)){
var statearr_35488_35544 = state_35472__$1;
(statearr_35488_35544[(1)] = (32));

} else {
var statearr_35489_35545 = state_35472__$1;
(statearr_35489_35545[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (32))){
var inst_35431 = (state_35472[(14)]);
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35472__$1,(35),out,inst_35431);
} else {
if((state_val_35473 === (33))){
var inst_35422 = (state_35472[(12)]);
var inst_35399 = inst_35422;
var state_35472__$1 = (function (){var statearr_35490 = state_35472;
(statearr_35490[(7)] = inst_35399);

return statearr_35490;
})();
var statearr_35491_35546 = state_35472__$1;
(statearr_35491_35546[(2)] = null);

(statearr_35491_35546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (13))){
var inst_35399 = (state_35472[(7)]);
var inst_35406 = inst_35399.cljs$lang$protocol_mask$partition0$;
var inst_35407 = (inst_35406 & (64));
var inst_35408 = inst_35399.cljs$core$ISeq$;
var inst_35409 = (cljs.core.PROTOCOL_SENTINEL === inst_35408);
var inst_35410 = ((inst_35407) || (inst_35409));
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35410)){
var statearr_35492_35547 = state_35472__$1;
(statearr_35492_35547[(1)] = (16));

} else {
var statearr_35493_35548 = state_35472__$1;
(statearr_35493_35548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (22))){
var inst_35431 = (state_35472[(14)]);
var inst_35432 = (state_35472[(11)]);
var inst_35430 = (state_35472[(2)]);
var inst_35431__$1 = cljs.core.nth.call(null,inst_35430,(0),null);
var inst_35432__$1 = cljs.core.nth.call(null,inst_35430,(1),null);
var inst_35433 = (inst_35431__$1 == null);
var inst_35434 = cljs.core._EQ_.call(null,inst_35432__$1,change);
var inst_35435 = ((inst_35433) || (inst_35434));
var state_35472__$1 = (function (){var statearr_35494 = state_35472;
(statearr_35494[(14)] = inst_35431__$1);

(statearr_35494[(11)] = inst_35432__$1);

return statearr_35494;
})();
if(cljs.core.truth_(inst_35435)){
var statearr_35495_35549 = state_35472__$1;
(statearr_35495_35549[(1)] = (23));

} else {
var statearr_35496_35550 = state_35472__$1;
(statearr_35496_35550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (36))){
var inst_35422 = (state_35472[(12)]);
var inst_35399 = inst_35422;
var state_35472__$1 = (function (){var statearr_35497 = state_35472;
(statearr_35497[(7)] = inst_35399);

return statearr_35497;
})();
var statearr_35498_35551 = state_35472__$1;
(statearr_35498_35551[(2)] = null);

(statearr_35498_35551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (29))){
var inst_35446 = (state_35472[(10)]);
var state_35472__$1 = state_35472;
var statearr_35499_35552 = state_35472__$1;
(statearr_35499_35552[(2)] = inst_35446);

(statearr_35499_35552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (6))){
var state_35472__$1 = state_35472;
var statearr_35500_35553 = state_35472__$1;
(statearr_35500_35553[(2)] = false);

(statearr_35500_35553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (28))){
var inst_35442 = (state_35472[(2)]);
var inst_35443 = calc_state.call(null);
var inst_35399 = inst_35443;
var state_35472__$1 = (function (){var statearr_35501 = state_35472;
(statearr_35501[(15)] = inst_35442);

(statearr_35501[(7)] = inst_35399);

return statearr_35501;
})();
var statearr_35502_35554 = state_35472__$1;
(statearr_35502_35554[(2)] = null);

(statearr_35502_35554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (25))){
var inst_35468 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35503_35555 = state_35472__$1;
(statearr_35503_35555[(2)] = inst_35468);

(statearr_35503_35555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (34))){
var inst_35466 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35504_35556 = state_35472__$1;
(statearr_35504_35556[(2)] = inst_35466);

(statearr_35504_35556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (17))){
var state_35472__$1 = state_35472;
var statearr_35505_35557 = state_35472__$1;
(statearr_35505_35557[(2)] = false);

(statearr_35505_35557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (3))){
var state_35472__$1 = state_35472;
var statearr_35506_35558 = state_35472__$1;
(statearr_35506_35558[(2)] = false);

(statearr_35506_35558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (12))){
var inst_35470 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35472__$1,inst_35470);
} else {
if((state_val_35473 === (2))){
var inst_35374 = (state_35472[(8)]);
var inst_35379 = inst_35374.cljs$lang$protocol_mask$partition0$;
var inst_35380 = (inst_35379 & (64));
var inst_35381 = inst_35374.cljs$core$ISeq$;
var inst_35382 = (cljs.core.PROTOCOL_SENTINEL === inst_35381);
var inst_35383 = ((inst_35380) || (inst_35382));
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35383)){
var statearr_35507_35559 = state_35472__$1;
(statearr_35507_35559[(1)] = (5));

} else {
var statearr_35508_35560 = state_35472__$1;
(statearr_35508_35560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (23))){
var inst_35431 = (state_35472[(14)]);
var inst_35437 = (inst_35431 == null);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35437)){
var statearr_35509_35561 = state_35472__$1;
(statearr_35509_35561[(1)] = (26));

} else {
var statearr_35510_35562 = state_35472__$1;
(statearr_35510_35562[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (35))){
var inst_35457 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35457)){
var statearr_35511_35563 = state_35472__$1;
(statearr_35511_35563[(1)] = (36));

} else {
var statearr_35512_35564 = state_35472__$1;
(statearr_35512_35564[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (19))){
var inst_35399 = (state_35472[(7)]);
var inst_35419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35399);
var state_35472__$1 = state_35472;
var statearr_35513_35565 = state_35472__$1;
(statearr_35513_35565[(2)] = inst_35419);

(statearr_35513_35565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (11))){
var inst_35399 = (state_35472[(7)]);
var inst_35403 = (inst_35399 == null);
var inst_35404 = cljs.core.not.call(null,inst_35403);
var state_35472__$1 = state_35472;
if(inst_35404){
var statearr_35514_35566 = state_35472__$1;
(statearr_35514_35566[(1)] = (13));

} else {
var statearr_35515_35567 = state_35472__$1;
(statearr_35515_35567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (9))){
var inst_35374 = (state_35472[(8)]);
var state_35472__$1 = state_35472;
var statearr_35516_35568 = state_35472__$1;
(statearr_35516_35568[(2)] = inst_35374);

(statearr_35516_35568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (5))){
var state_35472__$1 = state_35472;
var statearr_35517_35569 = state_35472__$1;
(statearr_35517_35569[(2)] = true);

(statearr_35517_35569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (14))){
var state_35472__$1 = state_35472;
var statearr_35518_35570 = state_35472__$1;
(statearr_35518_35570[(2)] = false);

(statearr_35518_35570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (26))){
var inst_35432 = (state_35472[(11)]);
var inst_35439 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35432);
var state_35472__$1 = state_35472;
var statearr_35519_35571 = state_35472__$1;
(statearr_35519_35571[(2)] = inst_35439);

(statearr_35519_35571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (16))){
var state_35472__$1 = state_35472;
var statearr_35520_35572 = state_35472__$1;
(statearr_35520_35572[(2)] = true);

(statearr_35520_35572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (38))){
var inst_35462 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35521_35573 = state_35472__$1;
(statearr_35521_35573[(2)] = inst_35462);

(statearr_35521_35573[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (30))){
var inst_35423 = (state_35472[(9)]);
var inst_35424 = (state_35472[(13)]);
var inst_35432 = (state_35472[(11)]);
var inst_35449 = cljs.core.empty_QMARK_.call(null,inst_35423);
var inst_35450 = inst_35424.call(null,inst_35432);
var inst_35451 = cljs.core.not.call(null,inst_35450);
var inst_35452 = ((inst_35449) && (inst_35451));
var state_35472__$1 = state_35472;
var statearr_35522_35574 = state_35472__$1;
(statearr_35522_35574[(2)] = inst_35452);

(statearr_35522_35574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (10))){
var inst_35374 = (state_35472[(8)]);
var inst_35395 = (state_35472[(2)]);
var inst_35396 = cljs.core.get.call(null,inst_35395,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35397 = cljs.core.get.call(null,inst_35395,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35398 = cljs.core.get.call(null,inst_35395,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35399 = inst_35374;
var state_35472__$1 = (function (){var statearr_35523 = state_35472;
(statearr_35523[(16)] = inst_35396);

(statearr_35523[(7)] = inst_35399);

(statearr_35523[(17)] = inst_35398);

(statearr_35523[(18)] = inst_35397);

return statearr_35523;
})();
var statearr_35524_35575 = state_35472__$1;
(statearr_35524_35575[(2)] = null);

(statearr_35524_35575[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (18))){
var inst_35414 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35525_35576 = state_35472__$1;
(statearr_35525_35576[(2)] = inst_35414);

(statearr_35525_35576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (37))){
var state_35472__$1 = state_35472;
var statearr_35526_35577 = state_35472__$1;
(statearr_35526_35577[(2)] = null);

(statearr_35526_35577[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (8))){
var inst_35374 = (state_35472[(8)]);
var inst_35392 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35374);
var state_35472__$1 = state_35472;
var statearr_35527_35578 = state_35472__$1;
(statearr_35527_35578[(2)] = inst_35392);

(statearr_35527_35578[(1)] = (10));


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
});})(c__34473__auto___35532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34382__auto__,c__34473__auto___35532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34383__auto__ = null;
var cljs$core$async$mix_$_state_machine__34383__auto____0 = (function (){
var statearr_35528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35528[(0)] = cljs$core$async$mix_$_state_machine__34383__auto__);

(statearr_35528[(1)] = (1));

return statearr_35528;
});
var cljs$core$async$mix_$_state_machine__34383__auto____1 = (function (state_35472){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35529){if((e35529 instanceof Object)){
var ex__34386__auto__ = e35529;
var statearr_35530_35579 = state_35472;
(statearr_35530_35579[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35580 = state_35472;
state_35472 = G__35580;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34383__auto__ = function(state_35472){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34383__auto____1.call(this,state_35472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34383__auto____0;
cljs$core$async$mix_$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34383__auto____1;
return cljs$core$async$mix_$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___35532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34475__auto__ = (function (){var statearr_35531 = f__34474__auto__.call(null);
(statearr_35531[(6)] = c__34473__auto___35532);

return statearr_35531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___35532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35582 = arguments.length;
switch (G__35582) {
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
var G__35586 = arguments.length;
switch (G__35586) {
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
return (function (p1__35584_SHARP_){
if(cljs.core.truth_(p1__35584_SHARP_.call(null,topic))){
return p1__35584_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35584_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35587 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35588){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35588 = meta35588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35589,meta35588__$1){
var self__ = this;
var _35589__$1 = this;
return (new cljs.core.async.t_cljs$core$async35587(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35588__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35589){
var self__ = this;
var _35589__$1 = this;
return self__.meta35588;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35587.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35588","meta35588",1931943279,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35587";

cljs.core.async.t_cljs$core$async35587.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35587");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35587.
 */
cljs.core.async.__GT_t_cljs$core$async35587 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35587(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35588){
return (new cljs.core.async.t_cljs$core$async35587(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35588));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35587(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34473__auto___35707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___35707,mults,ensure_mult,p){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___35707,mults,ensure_mult,p){
return (function (state_35661){
var state_val_35662 = (state_35661[(1)]);
if((state_val_35662 === (7))){
var inst_35657 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35663_35708 = state_35661__$1;
(statearr_35663_35708[(2)] = inst_35657);

(statearr_35663_35708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (20))){
var state_35661__$1 = state_35661;
var statearr_35664_35709 = state_35661__$1;
(statearr_35664_35709[(2)] = null);

(statearr_35664_35709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (1))){
var state_35661__$1 = state_35661;
var statearr_35665_35710 = state_35661__$1;
(statearr_35665_35710[(2)] = null);

(statearr_35665_35710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (24))){
var inst_35640 = (state_35661[(7)]);
var inst_35649 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35640);
var state_35661__$1 = state_35661;
var statearr_35666_35711 = state_35661__$1;
(statearr_35666_35711[(2)] = inst_35649);

(statearr_35666_35711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (4))){
var inst_35592 = (state_35661[(8)]);
var inst_35592__$1 = (state_35661[(2)]);
var inst_35593 = (inst_35592__$1 == null);
var state_35661__$1 = (function (){var statearr_35667 = state_35661;
(statearr_35667[(8)] = inst_35592__$1);

return statearr_35667;
})();
if(cljs.core.truth_(inst_35593)){
var statearr_35668_35712 = state_35661__$1;
(statearr_35668_35712[(1)] = (5));

} else {
var statearr_35669_35713 = state_35661__$1;
(statearr_35669_35713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (15))){
var inst_35634 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35670_35714 = state_35661__$1;
(statearr_35670_35714[(2)] = inst_35634);

(statearr_35670_35714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (21))){
var inst_35654 = (state_35661[(2)]);
var state_35661__$1 = (function (){var statearr_35671 = state_35661;
(statearr_35671[(9)] = inst_35654);

return statearr_35671;
})();
var statearr_35672_35715 = state_35661__$1;
(statearr_35672_35715[(2)] = null);

(statearr_35672_35715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (13))){
var inst_35616 = (state_35661[(10)]);
var inst_35618 = cljs.core.chunked_seq_QMARK_.call(null,inst_35616);
var state_35661__$1 = state_35661;
if(inst_35618){
var statearr_35673_35716 = state_35661__$1;
(statearr_35673_35716[(1)] = (16));

} else {
var statearr_35674_35717 = state_35661__$1;
(statearr_35674_35717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (22))){
var inst_35646 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35646)){
var statearr_35675_35718 = state_35661__$1;
(statearr_35675_35718[(1)] = (23));

} else {
var statearr_35676_35719 = state_35661__$1;
(statearr_35676_35719[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (6))){
var inst_35592 = (state_35661[(8)]);
var inst_35640 = (state_35661[(7)]);
var inst_35642 = (state_35661[(11)]);
var inst_35640__$1 = topic_fn.call(null,inst_35592);
var inst_35641 = cljs.core.deref.call(null,mults);
var inst_35642__$1 = cljs.core.get.call(null,inst_35641,inst_35640__$1);
var state_35661__$1 = (function (){var statearr_35677 = state_35661;
(statearr_35677[(7)] = inst_35640__$1);

(statearr_35677[(11)] = inst_35642__$1);

return statearr_35677;
})();
if(cljs.core.truth_(inst_35642__$1)){
var statearr_35678_35720 = state_35661__$1;
(statearr_35678_35720[(1)] = (19));

} else {
var statearr_35679_35721 = state_35661__$1;
(statearr_35679_35721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (25))){
var inst_35651 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35680_35722 = state_35661__$1;
(statearr_35680_35722[(2)] = inst_35651);

(statearr_35680_35722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (17))){
var inst_35616 = (state_35661[(10)]);
var inst_35625 = cljs.core.first.call(null,inst_35616);
var inst_35626 = cljs.core.async.muxch_STAR_.call(null,inst_35625);
var inst_35627 = cljs.core.async.close_BANG_.call(null,inst_35626);
var inst_35628 = cljs.core.next.call(null,inst_35616);
var inst_35602 = inst_35628;
var inst_35603 = null;
var inst_35604 = (0);
var inst_35605 = (0);
var state_35661__$1 = (function (){var statearr_35681 = state_35661;
(statearr_35681[(12)] = inst_35627);

(statearr_35681[(13)] = inst_35605);

(statearr_35681[(14)] = inst_35602);

(statearr_35681[(15)] = inst_35603);

(statearr_35681[(16)] = inst_35604);

return statearr_35681;
})();
var statearr_35682_35723 = state_35661__$1;
(statearr_35682_35723[(2)] = null);

(statearr_35682_35723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (3))){
var inst_35659 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35661__$1,inst_35659);
} else {
if((state_val_35662 === (12))){
var inst_35636 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35683_35724 = state_35661__$1;
(statearr_35683_35724[(2)] = inst_35636);

(statearr_35683_35724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (2))){
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35661__$1,(4),ch);
} else {
if((state_val_35662 === (23))){
var state_35661__$1 = state_35661;
var statearr_35684_35725 = state_35661__$1;
(statearr_35684_35725[(2)] = null);

(statearr_35684_35725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (19))){
var inst_35592 = (state_35661[(8)]);
var inst_35642 = (state_35661[(11)]);
var inst_35644 = cljs.core.async.muxch_STAR_.call(null,inst_35642);
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35661__$1,(22),inst_35644,inst_35592);
} else {
if((state_val_35662 === (11))){
var inst_35602 = (state_35661[(14)]);
var inst_35616 = (state_35661[(10)]);
var inst_35616__$1 = cljs.core.seq.call(null,inst_35602);
var state_35661__$1 = (function (){var statearr_35685 = state_35661;
(statearr_35685[(10)] = inst_35616__$1);

return statearr_35685;
})();
if(inst_35616__$1){
var statearr_35686_35726 = state_35661__$1;
(statearr_35686_35726[(1)] = (13));

} else {
var statearr_35687_35727 = state_35661__$1;
(statearr_35687_35727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (9))){
var inst_35638 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35688_35728 = state_35661__$1;
(statearr_35688_35728[(2)] = inst_35638);

(statearr_35688_35728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (5))){
var inst_35599 = cljs.core.deref.call(null,mults);
var inst_35600 = cljs.core.vals.call(null,inst_35599);
var inst_35601 = cljs.core.seq.call(null,inst_35600);
var inst_35602 = inst_35601;
var inst_35603 = null;
var inst_35604 = (0);
var inst_35605 = (0);
var state_35661__$1 = (function (){var statearr_35689 = state_35661;
(statearr_35689[(13)] = inst_35605);

(statearr_35689[(14)] = inst_35602);

(statearr_35689[(15)] = inst_35603);

(statearr_35689[(16)] = inst_35604);

return statearr_35689;
})();
var statearr_35690_35729 = state_35661__$1;
(statearr_35690_35729[(2)] = null);

(statearr_35690_35729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (14))){
var state_35661__$1 = state_35661;
var statearr_35694_35730 = state_35661__$1;
(statearr_35694_35730[(2)] = null);

(statearr_35694_35730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (16))){
var inst_35616 = (state_35661[(10)]);
var inst_35620 = cljs.core.chunk_first.call(null,inst_35616);
var inst_35621 = cljs.core.chunk_rest.call(null,inst_35616);
var inst_35622 = cljs.core.count.call(null,inst_35620);
var inst_35602 = inst_35621;
var inst_35603 = inst_35620;
var inst_35604 = inst_35622;
var inst_35605 = (0);
var state_35661__$1 = (function (){var statearr_35695 = state_35661;
(statearr_35695[(13)] = inst_35605);

(statearr_35695[(14)] = inst_35602);

(statearr_35695[(15)] = inst_35603);

(statearr_35695[(16)] = inst_35604);

return statearr_35695;
})();
var statearr_35696_35731 = state_35661__$1;
(statearr_35696_35731[(2)] = null);

(statearr_35696_35731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (10))){
var inst_35605 = (state_35661[(13)]);
var inst_35602 = (state_35661[(14)]);
var inst_35603 = (state_35661[(15)]);
var inst_35604 = (state_35661[(16)]);
var inst_35610 = cljs.core._nth.call(null,inst_35603,inst_35605);
var inst_35611 = cljs.core.async.muxch_STAR_.call(null,inst_35610);
var inst_35612 = cljs.core.async.close_BANG_.call(null,inst_35611);
var inst_35613 = (inst_35605 + (1));
var tmp35691 = inst_35602;
var tmp35692 = inst_35603;
var tmp35693 = inst_35604;
var inst_35602__$1 = tmp35691;
var inst_35603__$1 = tmp35692;
var inst_35604__$1 = tmp35693;
var inst_35605__$1 = inst_35613;
var state_35661__$1 = (function (){var statearr_35697 = state_35661;
(statearr_35697[(13)] = inst_35605__$1);

(statearr_35697[(14)] = inst_35602__$1);

(statearr_35697[(17)] = inst_35612);

(statearr_35697[(15)] = inst_35603__$1);

(statearr_35697[(16)] = inst_35604__$1);

return statearr_35697;
})();
var statearr_35698_35732 = state_35661__$1;
(statearr_35698_35732[(2)] = null);

(statearr_35698_35732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (18))){
var inst_35631 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35699_35733 = state_35661__$1;
(statearr_35699_35733[(2)] = inst_35631);

(statearr_35699_35733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (8))){
var inst_35605 = (state_35661[(13)]);
var inst_35604 = (state_35661[(16)]);
var inst_35607 = (inst_35605 < inst_35604);
var inst_35608 = inst_35607;
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35608)){
var statearr_35700_35734 = state_35661__$1;
(statearr_35700_35734[(1)] = (10));

} else {
var statearr_35701_35735 = state_35661__$1;
(statearr_35701_35735[(1)] = (11));

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
});})(c__34473__auto___35707,mults,ensure_mult,p))
;
return ((function (switch__34382__auto__,c__34473__auto___35707,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_35702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35702[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_35702[(1)] = (1));

return statearr_35702;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_35661){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35703){if((e35703 instanceof Object)){
var ex__34386__auto__ = e35703;
var statearr_35704_35736 = state_35661;
(statearr_35704_35736[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35737 = state_35661;
state_35661 = G__35737;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_35661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_35661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___35707,mults,ensure_mult,p))
})();
var state__34475__auto__ = (function (){var statearr_35705 = f__34474__auto__.call(null);
(statearr_35705[(6)] = c__34473__auto___35707);

return statearr_35705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___35707,mults,ensure_mult,p))
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
var G__35739 = arguments.length;
switch (G__35739) {
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
var G__35742 = arguments.length;
switch (G__35742) {
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
var G__35745 = arguments.length;
switch (G__35745) {
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
var c__34473__auto___35812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___35812,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___35812,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35784){
var state_val_35785 = (state_35784[(1)]);
if((state_val_35785 === (7))){
var state_35784__$1 = state_35784;
var statearr_35786_35813 = state_35784__$1;
(statearr_35786_35813[(2)] = null);

(statearr_35786_35813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (1))){
var state_35784__$1 = state_35784;
var statearr_35787_35814 = state_35784__$1;
(statearr_35787_35814[(2)] = null);

(statearr_35787_35814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (4))){
var inst_35748 = (state_35784[(7)]);
var inst_35750 = (inst_35748 < cnt);
var state_35784__$1 = state_35784;
if(cljs.core.truth_(inst_35750)){
var statearr_35788_35815 = state_35784__$1;
(statearr_35788_35815[(1)] = (6));

} else {
var statearr_35789_35816 = state_35784__$1;
(statearr_35789_35816[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (15))){
var inst_35780 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35790_35817 = state_35784__$1;
(statearr_35790_35817[(2)] = inst_35780);

(statearr_35790_35817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (13))){
var inst_35773 = cljs.core.async.close_BANG_.call(null,out);
var state_35784__$1 = state_35784;
var statearr_35791_35818 = state_35784__$1;
(statearr_35791_35818[(2)] = inst_35773);

(statearr_35791_35818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (6))){
var state_35784__$1 = state_35784;
var statearr_35792_35819 = state_35784__$1;
(statearr_35792_35819[(2)] = null);

(statearr_35792_35819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (3))){
var inst_35782 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35784__$1,inst_35782);
} else {
if((state_val_35785 === (12))){
var inst_35770 = (state_35784[(8)]);
var inst_35770__$1 = (state_35784[(2)]);
var inst_35771 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35770__$1);
var state_35784__$1 = (function (){var statearr_35793 = state_35784;
(statearr_35793[(8)] = inst_35770__$1);

return statearr_35793;
})();
if(cljs.core.truth_(inst_35771)){
var statearr_35794_35820 = state_35784__$1;
(statearr_35794_35820[(1)] = (13));

} else {
var statearr_35795_35821 = state_35784__$1;
(statearr_35795_35821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (2))){
var inst_35747 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35748 = (0);
var state_35784__$1 = (function (){var statearr_35796 = state_35784;
(statearr_35796[(9)] = inst_35747);

(statearr_35796[(7)] = inst_35748);

return statearr_35796;
})();
var statearr_35797_35822 = state_35784__$1;
(statearr_35797_35822[(2)] = null);

(statearr_35797_35822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (11))){
var inst_35748 = (state_35784[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35784,(10),Object,null,(9));
var inst_35757 = chs__$1.call(null,inst_35748);
var inst_35758 = done.call(null,inst_35748);
var inst_35759 = cljs.core.async.take_BANG_.call(null,inst_35757,inst_35758);
var state_35784__$1 = state_35784;
var statearr_35798_35823 = state_35784__$1;
(statearr_35798_35823[(2)] = inst_35759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (9))){
var inst_35748 = (state_35784[(7)]);
var inst_35761 = (state_35784[(2)]);
var inst_35762 = (inst_35748 + (1));
var inst_35748__$1 = inst_35762;
var state_35784__$1 = (function (){var statearr_35799 = state_35784;
(statearr_35799[(10)] = inst_35761);

(statearr_35799[(7)] = inst_35748__$1);

return statearr_35799;
})();
var statearr_35800_35824 = state_35784__$1;
(statearr_35800_35824[(2)] = null);

(statearr_35800_35824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (5))){
var inst_35768 = (state_35784[(2)]);
var state_35784__$1 = (function (){var statearr_35801 = state_35784;
(statearr_35801[(11)] = inst_35768);

return statearr_35801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35784__$1,(12),dchan);
} else {
if((state_val_35785 === (14))){
var inst_35770 = (state_35784[(8)]);
var inst_35775 = cljs.core.apply.call(null,f,inst_35770);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35784__$1,(16),out,inst_35775);
} else {
if((state_val_35785 === (16))){
var inst_35777 = (state_35784[(2)]);
var state_35784__$1 = (function (){var statearr_35802 = state_35784;
(statearr_35802[(12)] = inst_35777);

return statearr_35802;
})();
var statearr_35803_35825 = state_35784__$1;
(statearr_35803_35825[(2)] = null);

(statearr_35803_35825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (10))){
var inst_35752 = (state_35784[(2)]);
var inst_35753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35784__$1 = (function (){var statearr_35804 = state_35784;
(statearr_35804[(13)] = inst_35752);

return statearr_35804;
})();
var statearr_35805_35826 = state_35784__$1;
(statearr_35805_35826[(2)] = inst_35753);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (8))){
var inst_35766 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35806_35827 = state_35784__$1;
(statearr_35806_35827[(2)] = inst_35766);

(statearr_35806_35827[(1)] = (5));


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
});})(c__34473__auto___35812,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34382__auto__,c__34473__auto___35812,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_35807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35807[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_35807[(1)] = (1));

return statearr_35807;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_35784){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35808){if((e35808 instanceof Object)){
var ex__34386__auto__ = e35808;
var statearr_35809_35828 = state_35784;
(statearr_35809_35828[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35829 = state_35784;
state_35784 = G__35829;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_35784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_35784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___35812,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34475__auto__ = (function (){var statearr_35810 = f__34474__auto__.call(null);
(statearr_35810[(6)] = c__34473__auto___35812);

return statearr_35810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___35812,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35832 = arguments.length;
switch (G__35832) {
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
var c__34473__auto___35886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___35886,out){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___35886,out){
return (function (state_35864){
var state_val_35865 = (state_35864[(1)]);
if((state_val_35865 === (7))){
var inst_35844 = (state_35864[(7)]);
var inst_35843 = (state_35864[(8)]);
var inst_35843__$1 = (state_35864[(2)]);
var inst_35844__$1 = cljs.core.nth.call(null,inst_35843__$1,(0),null);
var inst_35845 = cljs.core.nth.call(null,inst_35843__$1,(1),null);
var inst_35846 = (inst_35844__$1 == null);
var state_35864__$1 = (function (){var statearr_35866 = state_35864;
(statearr_35866[(9)] = inst_35845);

(statearr_35866[(7)] = inst_35844__$1);

(statearr_35866[(8)] = inst_35843__$1);

return statearr_35866;
})();
if(cljs.core.truth_(inst_35846)){
var statearr_35867_35887 = state_35864__$1;
(statearr_35867_35887[(1)] = (8));

} else {
var statearr_35868_35888 = state_35864__$1;
(statearr_35868_35888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (1))){
var inst_35833 = cljs.core.vec.call(null,chs);
var inst_35834 = inst_35833;
var state_35864__$1 = (function (){var statearr_35869 = state_35864;
(statearr_35869[(10)] = inst_35834);

return statearr_35869;
})();
var statearr_35870_35889 = state_35864__$1;
(statearr_35870_35889[(2)] = null);

(statearr_35870_35889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (4))){
var inst_35834 = (state_35864[(10)]);
var state_35864__$1 = state_35864;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35864__$1,(7),inst_35834);
} else {
if((state_val_35865 === (6))){
var inst_35860 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
var statearr_35871_35890 = state_35864__$1;
(statearr_35871_35890[(2)] = inst_35860);

(statearr_35871_35890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (3))){
var inst_35862 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35864__$1,inst_35862);
} else {
if((state_val_35865 === (2))){
var inst_35834 = (state_35864[(10)]);
var inst_35836 = cljs.core.count.call(null,inst_35834);
var inst_35837 = (inst_35836 > (0));
var state_35864__$1 = state_35864;
if(cljs.core.truth_(inst_35837)){
var statearr_35873_35891 = state_35864__$1;
(statearr_35873_35891[(1)] = (4));

} else {
var statearr_35874_35892 = state_35864__$1;
(statearr_35874_35892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (11))){
var inst_35834 = (state_35864[(10)]);
var inst_35853 = (state_35864[(2)]);
var tmp35872 = inst_35834;
var inst_35834__$1 = tmp35872;
var state_35864__$1 = (function (){var statearr_35875 = state_35864;
(statearr_35875[(10)] = inst_35834__$1);

(statearr_35875[(11)] = inst_35853);

return statearr_35875;
})();
var statearr_35876_35893 = state_35864__$1;
(statearr_35876_35893[(2)] = null);

(statearr_35876_35893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (9))){
var inst_35844 = (state_35864[(7)]);
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35864__$1,(11),out,inst_35844);
} else {
if((state_val_35865 === (5))){
var inst_35858 = cljs.core.async.close_BANG_.call(null,out);
var state_35864__$1 = state_35864;
var statearr_35877_35894 = state_35864__$1;
(statearr_35877_35894[(2)] = inst_35858);

(statearr_35877_35894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (10))){
var inst_35856 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
var statearr_35878_35895 = state_35864__$1;
(statearr_35878_35895[(2)] = inst_35856);

(statearr_35878_35895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (8))){
var inst_35845 = (state_35864[(9)]);
var inst_35844 = (state_35864[(7)]);
var inst_35834 = (state_35864[(10)]);
var inst_35843 = (state_35864[(8)]);
var inst_35848 = (function (){var cs = inst_35834;
var vec__35839 = inst_35843;
var v = inst_35844;
var c = inst_35845;
return ((function (cs,vec__35839,v,c,inst_35845,inst_35844,inst_35834,inst_35843,state_val_35865,c__34473__auto___35886,out){
return (function (p1__35830_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35830_SHARP_);
});
;})(cs,vec__35839,v,c,inst_35845,inst_35844,inst_35834,inst_35843,state_val_35865,c__34473__auto___35886,out))
})();
var inst_35849 = cljs.core.filterv.call(null,inst_35848,inst_35834);
var inst_35834__$1 = inst_35849;
var state_35864__$1 = (function (){var statearr_35879 = state_35864;
(statearr_35879[(10)] = inst_35834__$1);

return statearr_35879;
})();
var statearr_35880_35896 = state_35864__$1;
(statearr_35880_35896[(2)] = null);

(statearr_35880_35896[(1)] = (2));


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
});})(c__34473__auto___35886,out))
;
return ((function (switch__34382__auto__,c__34473__auto___35886,out){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_35881 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35881[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_35881[(1)] = (1));

return statearr_35881;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_35864){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35882){if((e35882 instanceof Object)){
var ex__34386__auto__ = e35882;
var statearr_35883_35897 = state_35864;
(statearr_35883_35897[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35898 = state_35864;
state_35864 = G__35898;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_35864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_35864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___35886,out))
})();
var state__34475__auto__ = (function (){var statearr_35884 = f__34474__auto__.call(null);
(statearr_35884[(6)] = c__34473__auto___35886);

return statearr_35884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___35886,out))
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
var G__35900 = arguments.length;
switch (G__35900) {
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
var c__34473__auto___35945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___35945,out){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___35945,out){
return (function (state_35924){
var state_val_35925 = (state_35924[(1)]);
if((state_val_35925 === (7))){
var inst_35906 = (state_35924[(7)]);
var inst_35906__$1 = (state_35924[(2)]);
var inst_35907 = (inst_35906__$1 == null);
var inst_35908 = cljs.core.not.call(null,inst_35907);
var state_35924__$1 = (function (){var statearr_35926 = state_35924;
(statearr_35926[(7)] = inst_35906__$1);

return statearr_35926;
})();
if(inst_35908){
var statearr_35927_35946 = state_35924__$1;
(statearr_35927_35946[(1)] = (8));

} else {
var statearr_35928_35947 = state_35924__$1;
(statearr_35928_35947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (1))){
var inst_35901 = (0);
var state_35924__$1 = (function (){var statearr_35929 = state_35924;
(statearr_35929[(8)] = inst_35901);

return statearr_35929;
})();
var statearr_35930_35948 = state_35924__$1;
(statearr_35930_35948[(2)] = null);

(statearr_35930_35948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (4))){
var state_35924__$1 = state_35924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35924__$1,(7),ch);
} else {
if((state_val_35925 === (6))){
var inst_35919 = (state_35924[(2)]);
var state_35924__$1 = state_35924;
var statearr_35931_35949 = state_35924__$1;
(statearr_35931_35949[(2)] = inst_35919);

(statearr_35931_35949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (3))){
var inst_35921 = (state_35924[(2)]);
var inst_35922 = cljs.core.async.close_BANG_.call(null,out);
var state_35924__$1 = (function (){var statearr_35932 = state_35924;
(statearr_35932[(9)] = inst_35921);

return statearr_35932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35924__$1,inst_35922);
} else {
if((state_val_35925 === (2))){
var inst_35901 = (state_35924[(8)]);
var inst_35903 = (inst_35901 < n);
var state_35924__$1 = state_35924;
if(cljs.core.truth_(inst_35903)){
var statearr_35933_35950 = state_35924__$1;
(statearr_35933_35950[(1)] = (4));

} else {
var statearr_35934_35951 = state_35924__$1;
(statearr_35934_35951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (11))){
var inst_35901 = (state_35924[(8)]);
var inst_35911 = (state_35924[(2)]);
var inst_35912 = (inst_35901 + (1));
var inst_35901__$1 = inst_35912;
var state_35924__$1 = (function (){var statearr_35935 = state_35924;
(statearr_35935[(8)] = inst_35901__$1);

(statearr_35935[(10)] = inst_35911);

return statearr_35935;
})();
var statearr_35936_35952 = state_35924__$1;
(statearr_35936_35952[(2)] = null);

(statearr_35936_35952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (9))){
var state_35924__$1 = state_35924;
var statearr_35937_35953 = state_35924__$1;
(statearr_35937_35953[(2)] = null);

(statearr_35937_35953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (5))){
var state_35924__$1 = state_35924;
var statearr_35938_35954 = state_35924__$1;
(statearr_35938_35954[(2)] = null);

(statearr_35938_35954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (10))){
var inst_35916 = (state_35924[(2)]);
var state_35924__$1 = state_35924;
var statearr_35939_35955 = state_35924__$1;
(statearr_35939_35955[(2)] = inst_35916);

(statearr_35939_35955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (8))){
var inst_35906 = (state_35924[(7)]);
var state_35924__$1 = state_35924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35924__$1,(11),out,inst_35906);
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
});})(c__34473__auto___35945,out))
;
return ((function (switch__34382__auto__,c__34473__auto___35945,out){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_35940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35940[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_35940[(1)] = (1));

return statearr_35940;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_35924){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e35941){if((e35941 instanceof Object)){
var ex__34386__auto__ = e35941;
var statearr_35942_35956 = state_35924;
(statearr_35942_35956[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35957 = state_35924;
state_35924 = G__35957;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_35924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_35924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___35945,out))
})();
var state__34475__auto__ = (function (){var statearr_35943 = f__34474__auto__.call(null);
(statearr_35943[(6)] = c__34473__auto___35945);

return statearr_35943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___35945,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35959 = (function (f,ch,meta35960){
this.f = f;
this.ch = ch;
this.meta35960 = meta35960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35961,meta35960__$1){
var self__ = this;
var _35961__$1 = this;
return (new cljs.core.async.t_cljs$core$async35959(self__.f,self__.ch,meta35960__$1));
});

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35961){
var self__ = this;
var _35961__$1 = this;
return self__.meta35960;
});

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35962 = (function (f,ch,meta35960,_,fn1,meta35963){
this.f = f;
this.ch = ch;
this.meta35960 = meta35960;
this._ = _;
this.fn1 = fn1;
this.meta35963 = meta35963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35964,meta35963__$1){
var self__ = this;
var _35964__$1 = this;
return (new cljs.core.async.t_cljs$core$async35962(self__.f,self__.ch,self__.meta35960,self__._,self__.fn1,meta35963__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35964){
var self__ = this;
var _35964__$1 = this;
return self__.meta35963;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35958_SHARP_){
return f1.call(null,(((p1__35958_SHARP_ == null))?null:self__.f.call(null,p1__35958_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35962.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35960","meta35960",-1478340358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35959","cljs.core.async/t_cljs$core$async35959",-959818294,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35963","meta35963",646142717,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35962";

cljs.core.async.t_cljs$core$async35962.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35962");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35962.
 */
cljs.core.async.__GT_t_cljs$core$async35962 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35962(f__$1,ch__$1,meta35960__$1,___$2,fn1__$1,meta35963){
return (new cljs.core.async.t_cljs$core$async35962(f__$1,ch__$1,meta35960__$1,___$2,fn1__$1,meta35963));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35962(self__.f,self__.ch,self__.meta35960,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35960","meta35960",-1478340358,null)], null);
});

cljs.core.async.t_cljs$core$async35959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35959";

cljs.core.async.t_cljs$core$async35959.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35959");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35959.
 */
cljs.core.async.__GT_t_cljs$core$async35959 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35959(f__$1,ch__$1,meta35960){
return (new cljs.core.async.t_cljs$core$async35959(f__$1,ch__$1,meta35960));
});

}

return (new cljs.core.async.t_cljs$core$async35959(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35965 = (function (f,ch,meta35966){
this.f = f;
this.ch = ch;
this.meta35966 = meta35966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35967,meta35966__$1){
var self__ = this;
var _35967__$1 = this;
return (new cljs.core.async.t_cljs$core$async35965(self__.f,self__.ch,meta35966__$1));
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35967){
var self__ = this;
var _35967__$1 = this;
return self__.meta35966;
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35966","meta35966",-203222394,null)], null);
});

cljs.core.async.t_cljs$core$async35965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35965";

cljs.core.async.t_cljs$core$async35965.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35965");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35965.
 */
cljs.core.async.__GT_t_cljs$core$async35965 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35965(f__$1,ch__$1,meta35966){
return (new cljs.core.async.t_cljs$core$async35965(f__$1,ch__$1,meta35966));
});

}

return (new cljs.core.async.t_cljs$core$async35965(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35968 = (function (p,ch,meta35969){
this.p = p;
this.ch = ch;
this.meta35969 = meta35969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35970,meta35969__$1){
var self__ = this;
var _35970__$1 = this;
return (new cljs.core.async.t_cljs$core$async35968(self__.p,self__.ch,meta35969__$1));
});

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35970){
var self__ = this;
var _35970__$1 = this;
return self__.meta35969;
});

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35969","meta35969",-1157231358,null)], null);
});

cljs.core.async.t_cljs$core$async35968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35968";

cljs.core.async.t_cljs$core$async35968.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35968");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35968.
 */
cljs.core.async.__GT_t_cljs$core$async35968 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35968(p__$1,ch__$1,meta35969){
return (new cljs.core.async.t_cljs$core$async35968(p__$1,ch__$1,meta35969));
});

}

return (new cljs.core.async.t_cljs$core$async35968(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35972 = arguments.length;
switch (G__35972) {
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
var c__34473__auto___36012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___36012,out){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___36012,out){
return (function (state_35993){
var state_val_35994 = (state_35993[(1)]);
if((state_val_35994 === (7))){
var inst_35989 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_35995_36013 = state_35993__$1;
(statearr_35995_36013[(2)] = inst_35989);

(statearr_35995_36013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (1))){
var state_35993__$1 = state_35993;
var statearr_35996_36014 = state_35993__$1;
(statearr_35996_36014[(2)] = null);

(statearr_35996_36014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (4))){
var inst_35975 = (state_35993[(7)]);
var inst_35975__$1 = (state_35993[(2)]);
var inst_35976 = (inst_35975__$1 == null);
var state_35993__$1 = (function (){var statearr_35997 = state_35993;
(statearr_35997[(7)] = inst_35975__$1);

return statearr_35997;
})();
if(cljs.core.truth_(inst_35976)){
var statearr_35998_36015 = state_35993__$1;
(statearr_35998_36015[(1)] = (5));

} else {
var statearr_35999_36016 = state_35993__$1;
(statearr_35999_36016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (6))){
var inst_35975 = (state_35993[(7)]);
var inst_35980 = p.call(null,inst_35975);
var state_35993__$1 = state_35993;
if(cljs.core.truth_(inst_35980)){
var statearr_36000_36017 = state_35993__$1;
(statearr_36000_36017[(1)] = (8));

} else {
var statearr_36001_36018 = state_35993__$1;
(statearr_36001_36018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (3))){
var inst_35991 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35993__$1,inst_35991);
} else {
if((state_val_35994 === (2))){
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35993__$1,(4),ch);
} else {
if((state_val_35994 === (11))){
var inst_35983 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36002_36019 = state_35993__$1;
(statearr_36002_36019[(2)] = inst_35983);

(statearr_36002_36019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (9))){
var state_35993__$1 = state_35993;
var statearr_36003_36020 = state_35993__$1;
(statearr_36003_36020[(2)] = null);

(statearr_36003_36020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (5))){
var inst_35978 = cljs.core.async.close_BANG_.call(null,out);
var state_35993__$1 = state_35993;
var statearr_36004_36021 = state_35993__$1;
(statearr_36004_36021[(2)] = inst_35978);

(statearr_36004_36021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (10))){
var inst_35986 = (state_35993[(2)]);
var state_35993__$1 = (function (){var statearr_36005 = state_35993;
(statearr_36005[(8)] = inst_35986);

return statearr_36005;
})();
var statearr_36006_36022 = state_35993__$1;
(statearr_36006_36022[(2)] = null);

(statearr_36006_36022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (8))){
var inst_35975 = (state_35993[(7)]);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35993__$1,(11),out,inst_35975);
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
});})(c__34473__auto___36012,out))
;
return ((function (switch__34382__auto__,c__34473__auto___36012,out){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_36007 = [null,null,null,null,null,null,null,null,null];
(statearr_36007[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_36007[(1)] = (1));

return statearr_36007;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_35993){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_35993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e36008){if((e36008 instanceof Object)){
var ex__34386__auto__ = e36008;
var statearr_36009_36023 = state_35993;
(statearr_36009_36023[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36024 = state_35993;
state_35993 = G__36024;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_35993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_35993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___36012,out))
})();
var state__34475__auto__ = (function (){var statearr_36010 = f__34474__auto__.call(null);
(statearr_36010[(6)] = c__34473__auto___36012);

return statearr_36010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___36012,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36026 = arguments.length;
switch (G__36026) {
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
var c__34473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto__){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto__){
return (function (state_36089){
var state_val_36090 = (state_36089[(1)]);
if((state_val_36090 === (7))){
var inst_36085 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
var statearr_36091_36129 = state_36089__$1;
(statearr_36091_36129[(2)] = inst_36085);

(statearr_36091_36129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (20))){
var inst_36055 = (state_36089[(7)]);
var inst_36066 = (state_36089[(2)]);
var inst_36067 = cljs.core.next.call(null,inst_36055);
var inst_36041 = inst_36067;
var inst_36042 = null;
var inst_36043 = (0);
var inst_36044 = (0);
var state_36089__$1 = (function (){var statearr_36092 = state_36089;
(statearr_36092[(8)] = inst_36044);

(statearr_36092[(9)] = inst_36042);

(statearr_36092[(10)] = inst_36066);

(statearr_36092[(11)] = inst_36041);

(statearr_36092[(12)] = inst_36043);

return statearr_36092;
})();
var statearr_36093_36130 = state_36089__$1;
(statearr_36093_36130[(2)] = null);

(statearr_36093_36130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (1))){
var state_36089__$1 = state_36089;
var statearr_36094_36131 = state_36089__$1;
(statearr_36094_36131[(2)] = null);

(statearr_36094_36131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (4))){
var inst_36030 = (state_36089[(13)]);
var inst_36030__$1 = (state_36089[(2)]);
var inst_36031 = (inst_36030__$1 == null);
var state_36089__$1 = (function (){var statearr_36095 = state_36089;
(statearr_36095[(13)] = inst_36030__$1);

return statearr_36095;
})();
if(cljs.core.truth_(inst_36031)){
var statearr_36096_36132 = state_36089__$1;
(statearr_36096_36132[(1)] = (5));

} else {
var statearr_36097_36133 = state_36089__$1;
(statearr_36097_36133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (15))){
var state_36089__$1 = state_36089;
var statearr_36101_36134 = state_36089__$1;
(statearr_36101_36134[(2)] = null);

(statearr_36101_36134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (21))){
var state_36089__$1 = state_36089;
var statearr_36102_36135 = state_36089__$1;
(statearr_36102_36135[(2)] = null);

(statearr_36102_36135[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (13))){
var inst_36044 = (state_36089[(8)]);
var inst_36042 = (state_36089[(9)]);
var inst_36041 = (state_36089[(11)]);
var inst_36043 = (state_36089[(12)]);
var inst_36051 = (state_36089[(2)]);
var inst_36052 = (inst_36044 + (1));
var tmp36098 = inst_36042;
var tmp36099 = inst_36041;
var tmp36100 = inst_36043;
var inst_36041__$1 = tmp36099;
var inst_36042__$1 = tmp36098;
var inst_36043__$1 = tmp36100;
var inst_36044__$1 = inst_36052;
var state_36089__$1 = (function (){var statearr_36103 = state_36089;
(statearr_36103[(8)] = inst_36044__$1);

(statearr_36103[(9)] = inst_36042__$1);

(statearr_36103[(11)] = inst_36041__$1);

(statearr_36103[(14)] = inst_36051);

(statearr_36103[(12)] = inst_36043__$1);

return statearr_36103;
})();
var statearr_36104_36136 = state_36089__$1;
(statearr_36104_36136[(2)] = null);

(statearr_36104_36136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (22))){
var state_36089__$1 = state_36089;
var statearr_36105_36137 = state_36089__$1;
(statearr_36105_36137[(2)] = null);

(statearr_36105_36137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (6))){
var inst_36030 = (state_36089[(13)]);
var inst_36039 = f.call(null,inst_36030);
var inst_36040 = cljs.core.seq.call(null,inst_36039);
var inst_36041 = inst_36040;
var inst_36042 = null;
var inst_36043 = (0);
var inst_36044 = (0);
var state_36089__$1 = (function (){var statearr_36106 = state_36089;
(statearr_36106[(8)] = inst_36044);

(statearr_36106[(9)] = inst_36042);

(statearr_36106[(11)] = inst_36041);

(statearr_36106[(12)] = inst_36043);

return statearr_36106;
})();
var statearr_36107_36138 = state_36089__$1;
(statearr_36107_36138[(2)] = null);

(statearr_36107_36138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (17))){
var inst_36055 = (state_36089[(7)]);
var inst_36059 = cljs.core.chunk_first.call(null,inst_36055);
var inst_36060 = cljs.core.chunk_rest.call(null,inst_36055);
var inst_36061 = cljs.core.count.call(null,inst_36059);
var inst_36041 = inst_36060;
var inst_36042 = inst_36059;
var inst_36043 = inst_36061;
var inst_36044 = (0);
var state_36089__$1 = (function (){var statearr_36108 = state_36089;
(statearr_36108[(8)] = inst_36044);

(statearr_36108[(9)] = inst_36042);

(statearr_36108[(11)] = inst_36041);

(statearr_36108[(12)] = inst_36043);

return statearr_36108;
})();
var statearr_36109_36139 = state_36089__$1;
(statearr_36109_36139[(2)] = null);

(statearr_36109_36139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (3))){
var inst_36087 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36089__$1,inst_36087);
} else {
if((state_val_36090 === (12))){
var inst_36075 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
var statearr_36110_36140 = state_36089__$1;
(statearr_36110_36140[(2)] = inst_36075);

(statearr_36110_36140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (2))){
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36089__$1,(4),in$);
} else {
if((state_val_36090 === (23))){
var inst_36083 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
var statearr_36111_36141 = state_36089__$1;
(statearr_36111_36141[(2)] = inst_36083);

(statearr_36111_36141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (19))){
var inst_36070 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
var statearr_36112_36142 = state_36089__$1;
(statearr_36112_36142[(2)] = inst_36070);

(statearr_36112_36142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (11))){
var inst_36055 = (state_36089[(7)]);
var inst_36041 = (state_36089[(11)]);
var inst_36055__$1 = cljs.core.seq.call(null,inst_36041);
var state_36089__$1 = (function (){var statearr_36113 = state_36089;
(statearr_36113[(7)] = inst_36055__$1);

return statearr_36113;
})();
if(inst_36055__$1){
var statearr_36114_36143 = state_36089__$1;
(statearr_36114_36143[(1)] = (14));

} else {
var statearr_36115_36144 = state_36089__$1;
(statearr_36115_36144[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (9))){
var inst_36077 = (state_36089[(2)]);
var inst_36078 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36089__$1 = (function (){var statearr_36116 = state_36089;
(statearr_36116[(15)] = inst_36077);

return statearr_36116;
})();
if(cljs.core.truth_(inst_36078)){
var statearr_36117_36145 = state_36089__$1;
(statearr_36117_36145[(1)] = (21));

} else {
var statearr_36118_36146 = state_36089__$1;
(statearr_36118_36146[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (5))){
var inst_36033 = cljs.core.async.close_BANG_.call(null,out);
var state_36089__$1 = state_36089;
var statearr_36119_36147 = state_36089__$1;
(statearr_36119_36147[(2)] = inst_36033);

(statearr_36119_36147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (14))){
var inst_36055 = (state_36089[(7)]);
var inst_36057 = cljs.core.chunked_seq_QMARK_.call(null,inst_36055);
var state_36089__$1 = state_36089;
if(inst_36057){
var statearr_36120_36148 = state_36089__$1;
(statearr_36120_36148[(1)] = (17));

} else {
var statearr_36121_36149 = state_36089__$1;
(statearr_36121_36149[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (16))){
var inst_36073 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
var statearr_36122_36150 = state_36089__$1;
(statearr_36122_36150[(2)] = inst_36073);

(statearr_36122_36150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (10))){
var inst_36044 = (state_36089[(8)]);
var inst_36042 = (state_36089[(9)]);
var inst_36049 = cljs.core._nth.call(null,inst_36042,inst_36044);
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36089__$1,(13),out,inst_36049);
} else {
if((state_val_36090 === (18))){
var inst_36055 = (state_36089[(7)]);
var inst_36064 = cljs.core.first.call(null,inst_36055);
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36089__$1,(20),out,inst_36064);
} else {
if((state_val_36090 === (8))){
var inst_36044 = (state_36089[(8)]);
var inst_36043 = (state_36089[(12)]);
var inst_36046 = (inst_36044 < inst_36043);
var inst_36047 = inst_36046;
var state_36089__$1 = state_36089;
if(cljs.core.truth_(inst_36047)){
var statearr_36123_36151 = state_36089__$1;
(statearr_36123_36151[(1)] = (10));

} else {
var statearr_36124_36152 = state_36089__$1;
(statearr_36124_36152[(1)] = (11));

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
});})(c__34473__auto__))
;
return ((function (switch__34382__auto__,c__34473__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34383__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34383__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34383__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34383__auto____1 = (function (state_36089){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_36089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__34386__auto__ = e36126;
var statearr_36127_36153 = state_36089;
(statearr_36127_36153[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36154 = state_36089;
state_36089 = G__36154;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34383__auto__ = function(state_36089){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34383__auto____1.call(this,state_36089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34383__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34383__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto__))
})();
var state__34475__auto__ = (function (){var statearr_36128 = f__34474__auto__.call(null);
(statearr_36128[(6)] = c__34473__auto__);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto__))
);

return c__34473__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36156 = arguments.length;
switch (G__36156) {
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
var G__36159 = arguments.length;
switch (G__36159) {
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
var G__36162 = arguments.length;
switch (G__36162) {
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
var c__34473__auto___36209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___36209,out){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___36209,out){
return (function (state_36186){
var state_val_36187 = (state_36186[(1)]);
if((state_val_36187 === (7))){
var inst_36181 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
var statearr_36188_36210 = state_36186__$1;
(statearr_36188_36210[(2)] = inst_36181);

(statearr_36188_36210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (1))){
var inst_36163 = null;
var state_36186__$1 = (function (){var statearr_36189 = state_36186;
(statearr_36189[(7)] = inst_36163);

return statearr_36189;
})();
var statearr_36190_36211 = state_36186__$1;
(statearr_36190_36211[(2)] = null);

(statearr_36190_36211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (4))){
var inst_36166 = (state_36186[(8)]);
var inst_36166__$1 = (state_36186[(2)]);
var inst_36167 = (inst_36166__$1 == null);
var inst_36168 = cljs.core.not.call(null,inst_36167);
var state_36186__$1 = (function (){var statearr_36191 = state_36186;
(statearr_36191[(8)] = inst_36166__$1);

return statearr_36191;
})();
if(inst_36168){
var statearr_36192_36212 = state_36186__$1;
(statearr_36192_36212[(1)] = (5));

} else {
var statearr_36193_36213 = state_36186__$1;
(statearr_36193_36213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (6))){
var state_36186__$1 = state_36186;
var statearr_36194_36214 = state_36186__$1;
(statearr_36194_36214[(2)] = null);

(statearr_36194_36214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (3))){
var inst_36183 = (state_36186[(2)]);
var inst_36184 = cljs.core.async.close_BANG_.call(null,out);
var state_36186__$1 = (function (){var statearr_36195 = state_36186;
(statearr_36195[(9)] = inst_36183);

return statearr_36195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36186__$1,inst_36184);
} else {
if((state_val_36187 === (2))){
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36186__$1,(4),ch);
} else {
if((state_val_36187 === (11))){
var inst_36166 = (state_36186[(8)]);
var inst_36175 = (state_36186[(2)]);
var inst_36163 = inst_36166;
var state_36186__$1 = (function (){var statearr_36196 = state_36186;
(statearr_36196[(10)] = inst_36175);

(statearr_36196[(7)] = inst_36163);

return statearr_36196;
})();
var statearr_36197_36215 = state_36186__$1;
(statearr_36197_36215[(2)] = null);

(statearr_36197_36215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (9))){
var inst_36166 = (state_36186[(8)]);
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36186__$1,(11),out,inst_36166);
} else {
if((state_val_36187 === (5))){
var inst_36166 = (state_36186[(8)]);
var inst_36163 = (state_36186[(7)]);
var inst_36170 = cljs.core._EQ_.call(null,inst_36166,inst_36163);
var state_36186__$1 = state_36186;
if(inst_36170){
var statearr_36199_36216 = state_36186__$1;
(statearr_36199_36216[(1)] = (8));

} else {
var statearr_36200_36217 = state_36186__$1;
(statearr_36200_36217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (10))){
var inst_36178 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
var statearr_36201_36218 = state_36186__$1;
(statearr_36201_36218[(2)] = inst_36178);

(statearr_36201_36218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (8))){
var inst_36163 = (state_36186[(7)]);
var tmp36198 = inst_36163;
var inst_36163__$1 = tmp36198;
var state_36186__$1 = (function (){var statearr_36202 = state_36186;
(statearr_36202[(7)] = inst_36163__$1);

return statearr_36202;
})();
var statearr_36203_36219 = state_36186__$1;
(statearr_36203_36219[(2)] = null);

(statearr_36203_36219[(1)] = (2));


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
});})(c__34473__auto___36209,out))
;
return ((function (switch__34382__auto__,c__34473__auto___36209,out){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_36204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36204[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_36204[(1)] = (1));

return statearr_36204;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_36186){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_36186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e36205){if((e36205 instanceof Object)){
var ex__34386__auto__ = e36205;
var statearr_36206_36220 = state_36186;
(statearr_36206_36220[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36221 = state_36186;
state_36186 = G__36221;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_36186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_36186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___36209,out))
})();
var state__34475__auto__ = (function (){var statearr_36207 = f__34474__auto__.call(null);
(statearr_36207[(6)] = c__34473__auto___36209);

return statearr_36207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___36209,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36223 = arguments.length;
switch (G__36223) {
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
var c__34473__auto___36289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___36289,out){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___36289,out){
return (function (state_36261){
var state_val_36262 = (state_36261[(1)]);
if((state_val_36262 === (7))){
var inst_36257 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
var statearr_36263_36290 = state_36261__$1;
(statearr_36263_36290[(2)] = inst_36257);

(statearr_36263_36290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (1))){
var inst_36224 = (new Array(n));
var inst_36225 = inst_36224;
var inst_36226 = (0);
var state_36261__$1 = (function (){var statearr_36264 = state_36261;
(statearr_36264[(7)] = inst_36226);

(statearr_36264[(8)] = inst_36225);

return statearr_36264;
})();
var statearr_36265_36291 = state_36261__$1;
(statearr_36265_36291[(2)] = null);

(statearr_36265_36291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (4))){
var inst_36229 = (state_36261[(9)]);
var inst_36229__$1 = (state_36261[(2)]);
var inst_36230 = (inst_36229__$1 == null);
var inst_36231 = cljs.core.not.call(null,inst_36230);
var state_36261__$1 = (function (){var statearr_36266 = state_36261;
(statearr_36266[(9)] = inst_36229__$1);

return statearr_36266;
})();
if(inst_36231){
var statearr_36267_36292 = state_36261__$1;
(statearr_36267_36292[(1)] = (5));

} else {
var statearr_36268_36293 = state_36261__$1;
(statearr_36268_36293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (15))){
var inst_36251 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
var statearr_36269_36294 = state_36261__$1;
(statearr_36269_36294[(2)] = inst_36251);

(statearr_36269_36294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (13))){
var state_36261__$1 = state_36261;
var statearr_36270_36295 = state_36261__$1;
(statearr_36270_36295[(2)] = null);

(statearr_36270_36295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (6))){
var inst_36226 = (state_36261[(7)]);
var inst_36247 = (inst_36226 > (0));
var state_36261__$1 = state_36261;
if(cljs.core.truth_(inst_36247)){
var statearr_36271_36296 = state_36261__$1;
(statearr_36271_36296[(1)] = (12));

} else {
var statearr_36272_36297 = state_36261__$1;
(statearr_36272_36297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (3))){
var inst_36259 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36261__$1,inst_36259);
} else {
if((state_val_36262 === (12))){
var inst_36225 = (state_36261[(8)]);
var inst_36249 = cljs.core.vec.call(null,inst_36225);
var state_36261__$1 = state_36261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36261__$1,(15),out,inst_36249);
} else {
if((state_val_36262 === (2))){
var state_36261__$1 = state_36261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36261__$1,(4),ch);
} else {
if((state_val_36262 === (11))){
var inst_36241 = (state_36261[(2)]);
var inst_36242 = (new Array(n));
var inst_36225 = inst_36242;
var inst_36226 = (0);
var state_36261__$1 = (function (){var statearr_36273 = state_36261;
(statearr_36273[(10)] = inst_36241);

(statearr_36273[(7)] = inst_36226);

(statearr_36273[(8)] = inst_36225);

return statearr_36273;
})();
var statearr_36274_36298 = state_36261__$1;
(statearr_36274_36298[(2)] = null);

(statearr_36274_36298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (9))){
var inst_36225 = (state_36261[(8)]);
var inst_36239 = cljs.core.vec.call(null,inst_36225);
var state_36261__$1 = state_36261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36261__$1,(11),out,inst_36239);
} else {
if((state_val_36262 === (5))){
var inst_36229 = (state_36261[(9)]);
var inst_36234 = (state_36261[(11)]);
var inst_36226 = (state_36261[(7)]);
var inst_36225 = (state_36261[(8)]);
var inst_36233 = (inst_36225[inst_36226] = inst_36229);
var inst_36234__$1 = (inst_36226 + (1));
var inst_36235 = (inst_36234__$1 < n);
var state_36261__$1 = (function (){var statearr_36275 = state_36261;
(statearr_36275[(12)] = inst_36233);

(statearr_36275[(11)] = inst_36234__$1);

return statearr_36275;
})();
if(cljs.core.truth_(inst_36235)){
var statearr_36276_36299 = state_36261__$1;
(statearr_36276_36299[(1)] = (8));

} else {
var statearr_36277_36300 = state_36261__$1;
(statearr_36277_36300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (14))){
var inst_36254 = (state_36261[(2)]);
var inst_36255 = cljs.core.async.close_BANG_.call(null,out);
var state_36261__$1 = (function (){var statearr_36279 = state_36261;
(statearr_36279[(13)] = inst_36254);

return statearr_36279;
})();
var statearr_36280_36301 = state_36261__$1;
(statearr_36280_36301[(2)] = inst_36255);

(statearr_36280_36301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (10))){
var inst_36245 = (state_36261[(2)]);
var state_36261__$1 = state_36261;
var statearr_36281_36302 = state_36261__$1;
(statearr_36281_36302[(2)] = inst_36245);

(statearr_36281_36302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36262 === (8))){
var inst_36234 = (state_36261[(11)]);
var inst_36225 = (state_36261[(8)]);
var tmp36278 = inst_36225;
var inst_36225__$1 = tmp36278;
var inst_36226 = inst_36234;
var state_36261__$1 = (function (){var statearr_36282 = state_36261;
(statearr_36282[(7)] = inst_36226);

(statearr_36282[(8)] = inst_36225__$1);

return statearr_36282;
})();
var statearr_36283_36303 = state_36261__$1;
(statearr_36283_36303[(2)] = null);

(statearr_36283_36303[(1)] = (2));


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
});})(c__34473__auto___36289,out))
;
return ((function (switch__34382__auto__,c__34473__auto___36289,out){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_36284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36284[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_36284[(1)] = (1));

return statearr_36284;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_36261){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_36261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e36285){if((e36285 instanceof Object)){
var ex__34386__auto__ = e36285;
var statearr_36286_36304 = state_36261;
(statearr_36286_36304[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36305 = state_36261;
state_36261 = G__36305;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_36261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_36261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___36289,out))
})();
var state__34475__auto__ = (function (){var statearr_36287 = f__34474__auto__.call(null);
(statearr_36287[(6)] = c__34473__auto___36289);

return statearr_36287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___36289,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36307 = arguments.length;
switch (G__36307) {
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
var c__34473__auto___36377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34473__auto___36377,out){
return (function (){
var f__34474__auto__ = (function (){var switch__34382__auto__ = ((function (c__34473__auto___36377,out){
return (function (state_36349){
var state_val_36350 = (state_36349[(1)]);
if((state_val_36350 === (7))){
var inst_36345 = (state_36349[(2)]);
var state_36349__$1 = state_36349;
var statearr_36351_36378 = state_36349__$1;
(statearr_36351_36378[(2)] = inst_36345);

(statearr_36351_36378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (1))){
var inst_36308 = [];
var inst_36309 = inst_36308;
var inst_36310 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36349__$1 = (function (){var statearr_36352 = state_36349;
(statearr_36352[(7)] = inst_36309);

(statearr_36352[(8)] = inst_36310);

return statearr_36352;
})();
var statearr_36353_36379 = state_36349__$1;
(statearr_36353_36379[(2)] = null);

(statearr_36353_36379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (4))){
var inst_36313 = (state_36349[(9)]);
var inst_36313__$1 = (state_36349[(2)]);
var inst_36314 = (inst_36313__$1 == null);
var inst_36315 = cljs.core.not.call(null,inst_36314);
var state_36349__$1 = (function (){var statearr_36354 = state_36349;
(statearr_36354[(9)] = inst_36313__$1);

return statearr_36354;
})();
if(inst_36315){
var statearr_36355_36380 = state_36349__$1;
(statearr_36355_36380[(1)] = (5));

} else {
var statearr_36356_36381 = state_36349__$1;
(statearr_36356_36381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (15))){
var inst_36339 = (state_36349[(2)]);
var state_36349__$1 = state_36349;
var statearr_36357_36382 = state_36349__$1;
(statearr_36357_36382[(2)] = inst_36339);

(statearr_36357_36382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (13))){
var state_36349__$1 = state_36349;
var statearr_36358_36383 = state_36349__$1;
(statearr_36358_36383[(2)] = null);

(statearr_36358_36383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (6))){
var inst_36309 = (state_36349[(7)]);
var inst_36334 = inst_36309.length;
var inst_36335 = (inst_36334 > (0));
var state_36349__$1 = state_36349;
if(cljs.core.truth_(inst_36335)){
var statearr_36359_36384 = state_36349__$1;
(statearr_36359_36384[(1)] = (12));

} else {
var statearr_36360_36385 = state_36349__$1;
(statearr_36360_36385[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (3))){
var inst_36347 = (state_36349[(2)]);
var state_36349__$1 = state_36349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36349__$1,inst_36347);
} else {
if((state_val_36350 === (12))){
var inst_36309 = (state_36349[(7)]);
var inst_36337 = cljs.core.vec.call(null,inst_36309);
var state_36349__$1 = state_36349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36349__$1,(15),out,inst_36337);
} else {
if((state_val_36350 === (2))){
var state_36349__$1 = state_36349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36349__$1,(4),ch);
} else {
if((state_val_36350 === (11))){
var inst_36313 = (state_36349[(9)]);
var inst_36317 = (state_36349[(10)]);
var inst_36327 = (state_36349[(2)]);
var inst_36328 = [];
var inst_36329 = inst_36328.push(inst_36313);
var inst_36309 = inst_36328;
var inst_36310 = inst_36317;
var state_36349__$1 = (function (){var statearr_36361 = state_36349;
(statearr_36361[(11)] = inst_36329);

(statearr_36361[(7)] = inst_36309);

(statearr_36361[(8)] = inst_36310);

(statearr_36361[(12)] = inst_36327);

return statearr_36361;
})();
var statearr_36362_36386 = state_36349__$1;
(statearr_36362_36386[(2)] = null);

(statearr_36362_36386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (9))){
var inst_36309 = (state_36349[(7)]);
var inst_36325 = cljs.core.vec.call(null,inst_36309);
var state_36349__$1 = state_36349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36349__$1,(11),out,inst_36325);
} else {
if((state_val_36350 === (5))){
var inst_36310 = (state_36349[(8)]);
var inst_36313 = (state_36349[(9)]);
var inst_36317 = (state_36349[(10)]);
var inst_36317__$1 = f.call(null,inst_36313);
var inst_36318 = cljs.core._EQ_.call(null,inst_36317__$1,inst_36310);
var inst_36319 = cljs.core.keyword_identical_QMARK_.call(null,inst_36310,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36320 = ((inst_36318) || (inst_36319));
var state_36349__$1 = (function (){var statearr_36363 = state_36349;
(statearr_36363[(10)] = inst_36317__$1);

return statearr_36363;
})();
if(cljs.core.truth_(inst_36320)){
var statearr_36364_36387 = state_36349__$1;
(statearr_36364_36387[(1)] = (8));

} else {
var statearr_36365_36388 = state_36349__$1;
(statearr_36365_36388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (14))){
var inst_36342 = (state_36349[(2)]);
var inst_36343 = cljs.core.async.close_BANG_.call(null,out);
var state_36349__$1 = (function (){var statearr_36367 = state_36349;
(statearr_36367[(13)] = inst_36342);

return statearr_36367;
})();
var statearr_36368_36389 = state_36349__$1;
(statearr_36368_36389[(2)] = inst_36343);

(statearr_36368_36389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (10))){
var inst_36332 = (state_36349[(2)]);
var state_36349__$1 = state_36349;
var statearr_36369_36390 = state_36349__$1;
(statearr_36369_36390[(2)] = inst_36332);

(statearr_36369_36390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36350 === (8))){
var inst_36309 = (state_36349[(7)]);
var inst_36313 = (state_36349[(9)]);
var inst_36317 = (state_36349[(10)]);
var inst_36322 = inst_36309.push(inst_36313);
var tmp36366 = inst_36309;
var inst_36309__$1 = tmp36366;
var inst_36310 = inst_36317;
var state_36349__$1 = (function (){var statearr_36370 = state_36349;
(statearr_36370[(14)] = inst_36322);

(statearr_36370[(7)] = inst_36309__$1);

(statearr_36370[(8)] = inst_36310);

return statearr_36370;
})();
var statearr_36371_36391 = state_36349__$1;
(statearr_36371_36391[(2)] = null);

(statearr_36371_36391[(1)] = (2));


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
});})(c__34473__auto___36377,out))
;
return ((function (switch__34382__auto__,c__34473__auto___36377,out){
return (function() {
var cljs$core$async$state_machine__34383__auto__ = null;
var cljs$core$async$state_machine__34383__auto____0 = (function (){
var statearr_36372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36372[(0)] = cljs$core$async$state_machine__34383__auto__);

(statearr_36372[(1)] = (1));

return statearr_36372;
});
var cljs$core$async$state_machine__34383__auto____1 = (function (state_36349){
while(true){
var ret_value__34384__auto__ = (function (){try{while(true){
var result__34385__auto__ = switch__34382__auto__.call(null,state_36349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34385__auto__;
}
break;
}
}catch (e36373){if((e36373 instanceof Object)){
var ex__34386__auto__ = e36373;
var statearr_36374_36392 = state_36349;
(statearr_36374_36392[(5)] = ex__34386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36393 = state_36349;
state_36349 = G__36393;
continue;
} else {
return ret_value__34384__auto__;
}
break;
}
});
cljs$core$async$state_machine__34383__auto__ = function(state_36349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34383__auto____1.call(this,state_36349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34383__auto____0;
cljs$core$async$state_machine__34383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34383__auto____1;
return cljs$core$async$state_machine__34383__auto__;
})()
;})(switch__34382__auto__,c__34473__auto___36377,out))
})();
var state__34475__auto__ = (function (){var statearr_36375 = f__34474__auto__.call(null);
(statearr_36375[(6)] = c__34473__auto___36377);

return statearr_36375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34475__auto__);
});})(c__34473__auto___36377,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1551586187355
