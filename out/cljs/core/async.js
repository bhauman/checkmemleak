// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9336 = (function (f,fn_handler,meta9337){
this.f = f;
this.fn_handler = fn_handler;
this.meta9337 = meta9337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9336.cljs$lang$type = true;
cljs.core.async.t9336.cljs$lang$ctorStr = "cljs.core.async/t9336";
cljs.core.async.t9336.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9336");
});
cljs.core.async.t9336.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9338){var self__ = this;
var _9338__$1 = this;return self__.meta9337;
});
cljs.core.async.t9336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9338,meta9337__$1){var self__ = this;
var _9338__$1 = this;return (new cljs.core.async.t9336(self__.f,self__.fn_handler,meta9337__$1));
});
cljs.core.async.__GT_t9336 = (function __GT_t9336(f__$1,fn_handler__$1,meta9337){return (new cljs.core.async.t9336(f__$1,fn_handler__$1,meta9337));
});
}
return (new cljs.core.async.t9336(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9340 = buff;if(G__9340)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__9340.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9340.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9340);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9340);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9341 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9341);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9341);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___9342 = n;var x_9343 = 0;while(true){
if((x_9343 < n__4248__auto___9342))
{(a[x_9343] = 0);
{
var G__9344 = (x_9343 + 1);
x_9343 = G__9344;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9345 = (i + 1);
i = G__9345;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9349 = (function (flag,alt_flag,meta9350){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9350 = meta9350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9349.cljs$lang$type = true;
cljs.core.async.t9349.cljs$lang$ctorStr = "cljs.core.async/t9349";
cljs.core.async.t9349.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9349");
});
cljs.core.async.t9349.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9351){var self__ = this;
var _9351__$1 = this;return self__.meta9350;
});
cljs.core.async.t9349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9351,meta9350__$1){var self__ = this;
var _9351__$1 = this;return (new cljs.core.async.t9349(self__.flag,self__.alt_flag,meta9350__$1));
});
cljs.core.async.__GT_t9349 = (function __GT_t9349(flag__$1,alt_flag__$1,meta9350){return (new cljs.core.async.t9349(flag__$1,alt_flag__$1,meta9350));
});
}
return (new cljs.core.async.t9349(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9355 = (function (cb,flag,alt_handler,meta9356){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9356 = meta9356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9355.cljs$lang$type = true;
cljs.core.async.t9355.cljs$lang$ctorStr = "cljs.core.async/t9355";
cljs.core.async.t9355.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9355");
});
cljs.core.async.t9355.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9357){var self__ = this;
var _9357__$1 = this;return self__.meta9356;
});
cljs.core.async.t9355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9357,meta9356__$1){var self__ = this;
var _9357__$1 = this;return (new cljs.core.async.t9355(self__.cb,self__.flag,self__.alt_handler,meta9356__$1));
});
cljs.core.async.__GT_t9355 = (function __GT_t9355(cb__$1,flag__$1,alt_handler__$1,meta9356){return (new cljs.core.async.t9355(cb__$1,flag__$1,alt_handler__$1,meta9356));
});
}
return (new cljs.core.async.t9355(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9358_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9358_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9359 = (i + 1);
i = G__9359;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9360){var map__9362 = p__9360;var map__9362__$1 = ((cljs.core.seq_QMARK_.call(null,map__9362))?cljs.core.apply.call(null,cljs.core.hash_map,map__9362):map__9362);var opts = map__9362__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9360 = null;if (arguments.length > 1) {
  p__9360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9360);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9363){
var ports = cljs.core.first(arglist__9363);
var p__9360 = cljs.core.rest(arglist__9363);
return alts_BANG___delegate(ports,p__9360);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9371 = (function (ch,f,map_LT_,meta9372){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9372 = meta9372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9371.cljs$lang$type = true;
cljs.core.async.t9371.cljs$lang$ctorStr = "cljs.core.async/t9371";
cljs.core.async.t9371.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9371");
});
cljs.core.async.t9371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9374 = (function (fn1,_,meta9372,ch,f,map_LT_,meta9375){
this.fn1 = fn1;
this._ = _;
this.meta9372 = meta9372;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9375 = meta9375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9374.cljs$lang$type = true;
cljs.core.async.t9374.cljs$lang$ctorStr = "cljs.core.async/t9374";
cljs.core.async.t9374.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9374");
});
cljs.core.async.t9374.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9374.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9364_SHARP_){return f1.call(null,(((p1__9364_SHARP_ == null))?null:self__.f.call(null,p1__9364_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9376){var self__ = this;
var _9376__$1 = this;return self__.meta9375;
});
cljs.core.async.t9374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9376,meta9375__$1){var self__ = this;
var _9376__$1 = this;return (new cljs.core.async.t9374(self__.fn1,self__._,self__.meta9372,self__.ch,self__.f,self__.map_LT_,meta9375__$1));
});
cljs.core.async.__GT_t9374 = (function __GT_t9374(fn1__$1,___$2,meta9372__$1,ch__$2,f__$2,map_LT___$2,meta9375){return (new cljs.core.async.t9374(fn1__$1,___$2,meta9372__$1,ch__$2,f__$2,map_LT___$2,meta9375));
});
}
return (new cljs.core.async.t9374(fn1,___$1,self__.meta9372,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9371.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9373){var self__ = this;
var _9373__$1 = this;return self__.meta9372;
});
cljs.core.async.t9371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9373,meta9372__$1){var self__ = this;
var _9373__$1 = this;return (new cljs.core.async.t9371(self__.ch,self__.f,self__.map_LT_,meta9372__$1));
});
cljs.core.async.__GT_t9371 = (function __GT_t9371(ch__$1,f__$1,map_LT___$1,meta9372){return (new cljs.core.async.t9371(ch__$1,f__$1,map_LT___$1,meta9372));
});
}
return (new cljs.core.async.t9371(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9380 = (function (ch,f,map_GT_,meta9381){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9381 = meta9381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9380.cljs$lang$type = true;
cljs.core.async.t9380.cljs$lang$ctorStr = "cljs.core.async/t9380";
cljs.core.async.t9380.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9380");
});
cljs.core.async.t9380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9380.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9382){var self__ = this;
var _9382__$1 = this;return self__.meta9381;
});
cljs.core.async.t9380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9382,meta9381__$1){var self__ = this;
var _9382__$1 = this;return (new cljs.core.async.t9380(self__.ch,self__.f,self__.map_GT_,meta9381__$1));
});
cljs.core.async.__GT_t9380 = (function __GT_t9380(ch__$1,f__$1,map_GT___$1,meta9381){return (new cljs.core.async.t9380(ch__$1,f__$1,map_GT___$1,meta9381));
});
}
return (new cljs.core.async.t9380(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9386 = (function (ch,p,filter_GT_,meta9387){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9387 = meta9387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9386.cljs$lang$type = true;
cljs.core.async.t9386.cljs$lang$ctorStr = "cljs.core.async/t9386";
cljs.core.async.t9386.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9386");
});
cljs.core.async.t9386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9388){var self__ = this;
var _9388__$1 = this;return self__.meta9387;
});
cljs.core.async.t9386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9388,meta9387__$1){var self__ = this;
var _9388__$1 = this;return (new cljs.core.async.t9386(self__.ch,self__.p,self__.filter_GT_,meta9387__$1));
});
cljs.core.async.__GT_t9386 = (function __GT_t9386(ch__$1,p__$1,filter_GT___$1,meta9387){return (new cljs.core.async.t9386(ch__$1,p__$1,filter_GT___$1,meta9387));
});
}
return (new cljs.core.async.t9386(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6011__auto___9471 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_9450){var state_val_9451 = (state_9450[1]);if((state_val_9451 === 1))
{var state_9450__$1 = state_9450;var statearr_9452_9472 = state_9450__$1;(statearr_9452_9472[2] = null);
(statearr_9452_9472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9451 === 2))
{var state_9450__$1 = state_9450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9450__$1,4,ch);
} else
{if((state_val_9451 === 3))
{var inst_9448 = (state_9450[2]);var state_9450__$1 = state_9450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9450__$1,inst_9448);
} else
{if((state_val_9451 === 4))
{var inst_9432 = (state_9450[7]);var inst_9432__$1 = (state_9450[2]);var inst_9433 = (inst_9432__$1 == null);var state_9450__$1 = (function (){var statearr_9453 = state_9450;(statearr_9453[7] = inst_9432__$1);
return statearr_9453;
})();if(cljs.core.truth_(inst_9433))
{var statearr_9454_9473 = state_9450__$1;(statearr_9454_9473[1] = 5);
} else
{var statearr_9455_9474 = state_9450__$1;(statearr_9455_9474[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9451 === 5))
{var inst_9435 = cljs.core.async.close_BANG_.call(null,out);var state_9450__$1 = state_9450;var statearr_9456_9475 = state_9450__$1;(statearr_9456_9475[2] = inst_9435);
(statearr_9456_9475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9451 === 6))
{var inst_9432 = (state_9450[7]);var inst_9437 = p.call(null,inst_9432);var state_9450__$1 = state_9450;if(cljs.core.truth_(inst_9437))
{var statearr_9457_9476 = state_9450__$1;(statearr_9457_9476[1] = 8);
} else
{var statearr_9458_9477 = state_9450__$1;(statearr_9458_9477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9451 === 7))
{var inst_9446 = (state_9450[2]);var state_9450__$1 = state_9450;var statearr_9459_9478 = state_9450__$1;(statearr_9459_9478[2] = inst_9446);
(statearr_9459_9478[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9451 === 8))
{var inst_9432 = (state_9450[7]);var state_9450__$1 = state_9450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9450__$1,11,out,inst_9432);
} else
{if((state_val_9451 === 9))
{var state_9450__$1 = state_9450;var statearr_9460_9479 = state_9450__$1;(statearr_9460_9479[2] = null);
(statearr_9460_9479[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9451 === 10))
{var inst_9443 = (state_9450[2]);var state_9450__$1 = (function (){var statearr_9461 = state_9450;(statearr_9461[8] = inst_9443);
return statearr_9461;
})();var statearr_9462_9480 = state_9450__$1;(statearr_9462_9480[2] = null);
(statearr_9462_9480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9451 === 11))
{var inst_9440 = (state_9450[2]);var state_9450__$1 = state_9450;var statearr_9463_9481 = state_9450__$1;(statearr_9463_9481[2] = inst_9440);
(statearr_9463_9481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_9467 = [null,null,null,null,null,null,null,null,null];(statearr_9467[0] = state_machine__5942__auto__);
(statearr_9467[1] = 1);
return statearr_9467;
});
var state_machine__5942__auto____1 = (function (state_9450){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_9450);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e9468){if((e9468 instanceof Object))
{var ex__5945__auto__ = e9468;var statearr_9469_9482 = state_9450;(statearr_9469_9482[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9483 = state_9450;
state_9450 = G__9483;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_9450){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_9450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_9470 = f__6012__auto__.call(null);(statearr_9470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___9471);
return statearr_9470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6011__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_9635){var state_val_9636 = (state_9635[1]);if((state_val_9636 === 1))
{var state_9635__$1 = state_9635;var statearr_9637_9674 = state_9635__$1;(statearr_9637_9674[2] = null);
(statearr_9637_9674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 2))
{var state_9635__$1 = state_9635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9635__$1,4,in$);
} else
{if((state_val_9636 === 3))
{var inst_9633 = (state_9635[2]);var state_9635__$1 = state_9635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9635__$1,inst_9633);
} else
{if((state_val_9636 === 4))
{var inst_9581 = (state_9635[7]);var inst_9581__$1 = (state_9635[2]);var inst_9582 = (inst_9581__$1 == null);var state_9635__$1 = (function (){var statearr_9638 = state_9635;(statearr_9638[7] = inst_9581__$1);
return statearr_9638;
})();if(cljs.core.truth_(inst_9582))
{var statearr_9639_9675 = state_9635__$1;(statearr_9639_9675[1] = 5);
} else
{var statearr_9640_9676 = state_9635__$1;(statearr_9640_9676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 5))
{var inst_9584 = cljs.core.async.close_BANG_.call(null,out);var state_9635__$1 = state_9635;var statearr_9641_9677 = state_9635__$1;(statearr_9641_9677[2] = inst_9584);
(statearr_9641_9677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 6))
{var inst_9581 = (state_9635[7]);var inst_9586 = f.call(null,inst_9581);var inst_9591 = cljs.core.seq.call(null,inst_9586);var inst_9592 = inst_9591;var inst_9593 = null;var inst_9594 = 0;var inst_9595 = 0;var state_9635__$1 = (function (){var statearr_9642 = state_9635;(statearr_9642[8] = inst_9595);
(statearr_9642[9] = inst_9594);
(statearr_9642[10] = inst_9592);
(statearr_9642[11] = inst_9593);
return statearr_9642;
})();var statearr_9643_9678 = state_9635__$1;(statearr_9643_9678[2] = null);
(statearr_9643_9678[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 7))
{var inst_9631 = (state_9635[2]);var state_9635__$1 = state_9635;var statearr_9644_9679 = state_9635__$1;(statearr_9644_9679[2] = inst_9631);
(statearr_9644_9679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 8))
{var inst_9595 = (state_9635[8]);var inst_9594 = (state_9635[9]);var inst_9597 = (inst_9595 < inst_9594);var inst_9598 = inst_9597;var state_9635__$1 = state_9635;if(cljs.core.truth_(inst_9598))
{var statearr_9645_9680 = state_9635__$1;(statearr_9645_9680[1] = 10);
} else
{var statearr_9646_9681 = state_9635__$1;(statearr_9646_9681[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 9))
{var inst_9628 = (state_9635[2]);var state_9635__$1 = (function (){var statearr_9647 = state_9635;(statearr_9647[12] = inst_9628);
return statearr_9647;
})();var statearr_9648_9682 = state_9635__$1;(statearr_9648_9682[2] = null);
(statearr_9648_9682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 10))
{var inst_9595 = (state_9635[8]);var inst_9593 = (state_9635[11]);var inst_9600 = cljs.core._nth.call(null,inst_9593,inst_9595);var state_9635__$1 = state_9635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9635__$1,13,out,inst_9600);
} else
{if((state_val_9636 === 11))
{var inst_9592 = (state_9635[10]);var inst_9606 = (state_9635[13]);var inst_9606__$1 = cljs.core.seq.call(null,inst_9592);var state_9635__$1 = (function (){var statearr_9652 = state_9635;(statearr_9652[13] = inst_9606__$1);
return statearr_9652;
})();if(inst_9606__$1)
{var statearr_9653_9683 = state_9635__$1;(statearr_9653_9683[1] = 14);
} else
{var statearr_9654_9684 = state_9635__$1;(statearr_9654_9684[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 12))
{var inst_9626 = (state_9635[2]);var state_9635__$1 = state_9635;var statearr_9655_9685 = state_9635__$1;(statearr_9655_9685[2] = inst_9626);
(statearr_9655_9685[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 13))
{var inst_9595 = (state_9635[8]);var inst_9594 = (state_9635[9]);var inst_9592 = (state_9635[10]);var inst_9593 = (state_9635[11]);var inst_9602 = (state_9635[2]);var inst_9603 = (inst_9595 + 1);var tmp9649 = inst_9594;var tmp9650 = inst_9592;var tmp9651 = inst_9593;var inst_9592__$1 = tmp9650;var inst_9593__$1 = tmp9651;var inst_9594__$1 = tmp9649;var inst_9595__$1 = inst_9603;var state_9635__$1 = (function (){var statearr_9656 = state_9635;(statearr_9656[8] = inst_9595__$1);
(statearr_9656[9] = inst_9594__$1);
(statearr_9656[10] = inst_9592__$1);
(statearr_9656[11] = inst_9593__$1);
(statearr_9656[14] = inst_9602);
return statearr_9656;
})();var statearr_9657_9686 = state_9635__$1;(statearr_9657_9686[2] = null);
(statearr_9657_9686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 14))
{var inst_9606 = (state_9635[13]);var inst_9608 = cljs.core.chunked_seq_QMARK_.call(null,inst_9606);var state_9635__$1 = state_9635;if(inst_9608)
{var statearr_9658_9687 = state_9635__$1;(statearr_9658_9687[1] = 17);
} else
{var statearr_9659_9688 = state_9635__$1;(statearr_9659_9688[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 15))
{var state_9635__$1 = state_9635;var statearr_9660_9689 = state_9635__$1;(statearr_9660_9689[2] = null);
(statearr_9660_9689[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 16))
{var inst_9624 = (state_9635[2]);var state_9635__$1 = state_9635;var statearr_9661_9690 = state_9635__$1;(statearr_9661_9690[2] = inst_9624);
(statearr_9661_9690[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 17))
{var inst_9606 = (state_9635[13]);var inst_9610 = cljs.core.chunk_first.call(null,inst_9606);var inst_9611 = cljs.core.chunk_rest.call(null,inst_9606);var inst_9612 = cljs.core.count.call(null,inst_9610);var inst_9592 = inst_9611;var inst_9593 = inst_9610;var inst_9594 = inst_9612;var inst_9595 = 0;var state_9635__$1 = (function (){var statearr_9662 = state_9635;(statearr_9662[8] = inst_9595);
(statearr_9662[9] = inst_9594);
(statearr_9662[10] = inst_9592);
(statearr_9662[11] = inst_9593);
return statearr_9662;
})();var statearr_9663_9691 = state_9635__$1;(statearr_9663_9691[2] = null);
(statearr_9663_9691[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 18))
{var inst_9606 = (state_9635[13]);var inst_9615 = cljs.core.first.call(null,inst_9606);var state_9635__$1 = state_9635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9635__$1,20,out,inst_9615);
} else
{if((state_val_9636 === 19))
{var inst_9621 = (state_9635[2]);var state_9635__$1 = state_9635;var statearr_9664_9692 = state_9635__$1;(statearr_9664_9692[2] = inst_9621);
(statearr_9664_9692[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9636 === 20))
{var inst_9606 = (state_9635[13]);var inst_9617 = (state_9635[2]);var inst_9618 = cljs.core.next.call(null,inst_9606);var inst_9592 = inst_9618;var inst_9593 = null;var inst_9594 = 0;var inst_9595 = 0;var state_9635__$1 = (function (){var statearr_9665 = state_9635;(statearr_9665[15] = inst_9617);
(statearr_9665[8] = inst_9595);
(statearr_9665[9] = inst_9594);
(statearr_9665[10] = inst_9592);
(statearr_9665[11] = inst_9593);
return statearr_9665;
})();var statearr_9666_9693 = state_9635__$1;(statearr_9666_9693[2] = null);
(statearr_9666_9693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_9670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9670[0] = state_machine__5942__auto__);
(statearr_9670[1] = 1);
return statearr_9670;
});
var state_machine__5942__auto____1 = (function (state_9635){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_9635);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e9671){if((e9671 instanceof Object))
{var ex__5945__auto__ = e9671;var statearr_9672_9694 = state_9635;(statearr_9672_9694[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9695 = state_9635;
state_9635 = G__9695;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_9635){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_9635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_9673 = f__6012__auto__.call(null);(statearr_9673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto__);
return statearr_9673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return c__6011__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6011__auto___9776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_9755){var state_val_9756 = (state_9755[1]);if((state_val_9756 === 1))
{var state_9755__$1 = state_9755;var statearr_9757_9777 = state_9755__$1;(statearr_9757_9777[2] = null);
(statearr_9757_9777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9756 === 2))
{var state_9755__$1 = state_9755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9755__$1,4,from);
} else
{if((state_val_9756 === 3))
{var inst_9753 = (state_9755[2]);var state_9755__$1 = state_9755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9755__$1,inst_9753);
} else
{if((state_val_9756 === 4))
{var inst_9738 = (state_9755[7]);var inst_9738__$1 = (state_9755[2]);var inst_9739 = (inst_9738__$1 == null);var state_9755__$1 = (function (){var statearr_9758 = state_9755;(statearr_9758[7] = inst_9738__$1);
return statearr_9758;
})();if(cljs.core.truth_(inst_9739))
{var statearr_9759_9778 = state_9755__$1;(statearr_9759_9778[1] = 5);
} else
{var statearr_9760_9779 = state_9755__$1;(statearr_9760_9779[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9756 === 5))
{var state_9755__$1 = state_9755;if(cljs.core.truth_(close_QMARK_))
{var statearr_9761_9780 = state_9755__$1;(statearr_9761_9780[1] = 8);
} else
{var statearr_9762_9781 = state_9755__$1;(statearr_9762_9781[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9756 === 6))
{var inst_9738 = (state_9755[7]);var state_9755__$1 = state_9755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9755__$1,11,to,inst_9738);
} else
{if((state_val_9756 === 7))
{var inst_9751 = (state_9755[2]);var state_9755__$1 = state_9755;var statearr_9763_9782 = state_9755__$1;(statearr_9763_9782[2] = inst_9751);
(statearr_9763_9782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9756 === 8))
{var inst_9742 = cljs.core.async.close_BANG_.call(null,to);var state_9755__$1 = state_9755;var statearr_9764_9783 = state_9755__$1;(statearr_9764_9783[2] = inst_9742);
(statearr_9764_9783[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9756 === 9))
{var state_9755__$1 = state_9755;var statearr_9765_9784 = state_9755__$1;(statearr_9765_9784[2] = null);
(statearr_9765_9784[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9756 === 10))
{var inst_9745 = (state_9755[2]);var state_9755__$1 = state_9755;var statearr_9766_9785 = state_9755__$1;(statearr_9766_9785[2] = inst_9745);
(statearr_9766_9785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9756 === 11))
{var inst_9748 = (state_9755[2]);var state_9755__$1 = (function (){var statearr_9767 = state_9755;(statearr_9767[8] = inst_9748);
return statearr_9767;
})();var statearr_9768_9786 = state_9755__$1;(statearr_9768_9786[2] = null);
(statearr_9768_9786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_9772 = [null,null,null,null,null,null,null,null,null];(statearr_9772[0] = state_machine__5942__auto__);
(statearr_9772[1] = 1);
return statearr_9772;
});
var state_machine__5942__auto____1 = (function (state_9755){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_9755);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e9773){if((e9773 instanceof Object))
{var ex__5945__auto__ = e9773;var statearr_9774_9787 = state_9755;(statearr_9774_9787[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9788 = state_9755;
state_9755 = G__9788;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_9755){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_9755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_9775 = f__6012__auto__.call(null);(statearr_9775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___9776);
return statearr_9775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6011__auto___9875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_9853){var state_val_9854 = (state_9853[1]);if((state_val_9854 === 1))
{var state_9853__$1 = state_9853;var statearr_9855_9876 = state_9853__$1;(statearr_9855_9876[2] = null);
(statearr_9855_9876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 2))
{var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9853__$1,4,ch);
} else
{if((state_val_9854 === 3))
{var inst_9851 = (state_9853[2]);var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9853__$1,inst_9851);
} else
{if((state_val_9854 === 4))
{var inst_9834 = (state_9853[7]);var inst_9834__$1 = (state_9853[2]);var inst_9835 = (inst_9834__$1 == null);var state_9853__$1 = (function (){var statearr_9856 = state_9853;(statearr_9856[7] = inst_9834__$1);
return statearr_9856;
})();if(cljs.core.truth_(inst_9835))
{var statearr_9857_9877 = state_9853__$1;(statearr_9857_9877[1] = 5);
} else
{var statearr_9858_9878 = state_9853__$1;(statearr_9858_9878[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 5))
{var inst_9837 = cljs.core.async.close_BANG_.call(null,tc);var inst_9838 = cljs.core.async.close_BANG_.call(null,fc);var state_9853__$1 = (function (){var statearr_9859 = state_9853;(statearr_9859[8] = inst_9837);
return statearr_9859;
})();var statearr_9860_9879 = state_9853__$1;(statearr_9860_9879[2] = inst_9838);
(statearr_9860_9879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 6))
{var inst_9834 = (state_9853[7]);var inst_9840 = p.call(null,inst_9834);var state_9853__$1 = state_9853;if(cljs.core.truth_(inst_9840))
{var statearr_9861_9880 = state_9853__$1;(statearr_9861_9880[1] = 9);
} else
{var statearr_9862_9881 = state_9853__$1;(statearr_9862_9881[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 7))
{var inst_9849 = (state_9853[2]);var state_9853__$1 = state_9853;var statearr_9863_9882 = state_9853__$1;(statearr_9863_9882[2] = inst_9849);
(statearr_9863_9882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 8))
{var inst_9846 = (state_9853[2]);var state_9853__$1 = (function (){var statearr_9864 = state_9853;(statearr_9864[9] = inst_9846);
return statearr_9864;
})();var statearr_9865_9883 = state_9853__$1;(statearr_9865_9883[2] = null);
(statearr_9865_9883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 9))
{var state_9853__$1 = state_9853;var statearr_9866_9884 = state_9853__$1;(statearr_9866_9884[2] = tc);
(statearr_9866_9884[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 10))
{var state_9853__$1 = state_9853;var statearr_9867_9885 = state_9853__$1;(statearr_9867_9885[2] = fc);
(statearr_9867_9885[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 11))
{var inst_9834 = (state_9853[7]);var inst_9844 = (state_9853[2]);var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9853__$1,8,inst_9844,inst_9834);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_9871 = [null,null,null,null,null,null,null,null,null,null];(statearr_9871[0] = state_machine__5942__auto__);
(statearr_9871[1] = 1);
return statearr_9871;
});
var state_machine__5942__auto____1 = (function (state_9853){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_9853);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e9872){if((e9872 instanceof Object))
{var ex__5945__auto__ = e9872;var statearr_9873_9886 = state_9853;(statearr_9873_9886[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9887 = state_9853;
state_9853 = G__9887;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_9853){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_9853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_9874 = f__6012__auto__.call(null);(statearr_9874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___9875);
return statearr_9874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6011__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_9934){var state_val_9935 = (state_9934[1]);if((state_val_9935 === 7))
{var inst_9930 = (state_9934[2]);var state_9934__$1 = state_9934;var statearr_9936_9952 = state_9934__$1;(statearr_9936_9952[2] = inst_9930);
(statearr_9936_9952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 6))
{var inst_9920 = (state_9934[7]);var inst_9923 = (state_9934[8]);var inst_9927 = f.call(null,inst_9920,inst_9923);var inst_9920__$1 = inst_9927;var state_9934__$1 = (function (){var statearr_9937 = state_9934;(statearr_9937[7] = inst_9920__$1);
return statearr_9937;
})();var statearr_9938_9953 = state_9934__$1;(statearr_9938_9953[2] = null);
(statearr_9938_9953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 5))
{var inst_9920 = (state_9934[7]);var state_9934__$1 = state_9934;var statearr_9939_9954 = state_9934__$1;(statearr_9939_9954[2] = inst_9920);
(statearr_9939_9954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 4))
{var inst_9923 = (state_9934[8]);var inst_9923__$1 = (state_9934[2]);var inst_9924 = (inst_9923__$1 == null);var state_9934__$1 = (function (){var statearr_9940 = state_9934;(statearr_9940[8] = inst_9923__$1);
return statearr_9940;
})();if(cljs.core.truth_(inst_9924))
{var statearr_9941_9955 = state_9934__$1;(statearr_9941_9955[1] = 5);
} else
{var statearr_9942_9956 = state_9934__$1;(statearr_9942_9956[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9935 === 3))
{var inst_9932 = (state_9934[2]);var state_9934__$1 = state_9934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9934__$1,inst_9932);
} else
{if((state_val_9935 === 2))
{var state_9934__$1 = state_9934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9934__$1,4,ch);
} else
{if((state_val_9935 === 1))
{var inst_9920 = init;var state_9934__$1 = (function (){var statearr_9943 = state_9934;(statearr_9943[7] = inst_9920);
return statearr_9943;
})();var statearr_9944_9957 = state_9934__$1;(statearr_9944_9957[2] = null);
(statearr_9944_9957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_9948 = [null,null,null,null,null,null,null,null,null];(statearr_9948[0] = state_machine__5942__auto__);
(statearr_9948[1] = 1);
return statearr_9948;
});
var state_machine__5942__auto____1 = (function (state_9934){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_9934);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e9949){if((e9949 instanceof Object))
{var ex__5945__auto__ = e9949;var statearr_9950_9958 = state_9934;(statearr_9950_9958[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9934);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9959 = state_9934;
state_9934 = G__9959;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_9934){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_9934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_9951 = f__6012__auto__.call(null);(statearr_9951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto__);
return statearr_9951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return c__6011__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6011__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_10021){var state_val_10022 = (state_10021[1]);if((state_val_10022 === 1))
{var inst_10001 = cljs.core.seq.call(null,coll);var inst_10002 = inst_10001;var state_10021__$1 = (function (){var statearr_10023 = state_10021;(statearr_10023[7] = inst_10002);
return statearr_10023;
})();var statearr_10024_10042 = state_10021__$1;(statearr_10024_10042[2] = null);
(statearr_10024_10042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10022 === 2))
{var inst_10002 = (state_10021[7]);var state_10021__$1 = state_10021;if(cljs.core.truth_(inst_10002))
{var statearr_10025_10043 = state_10021__$1;(statearr_10025_10043[1] = 4);
} else
{var statearr_10026_10044 = state_10021__$1;(statearr_10026_10044[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10022 === 3))
{var inst_10019 = (state_10021[2]);var state_10021__$1 = state_10021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10021__$1,inst_10019);
} else
{if((state_val_10022 === 4))
{var inst_10002 = (state_10021[7]);var inst_10005 = cljs.core.first.call(null,inst_10002);var state_10021__$1 = state_10021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10021__$1,7,ch,inst_10005);
} else
{if((state_val_10022 === 5))
{var state_10021__$1 = state_10021;if(cljs.core.truth_(close_QMARK_))
{var statearr_10027_10045 = state_10021__$1;(statearr_10027_10045[1] = 8);
} else
{var statearr_10028_10046 = state_10021__$1;(statearr_10028_10046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10022 === 6))
{var inst_10017 = (state_10021[2]);var state_10021__$1 = state_10021;var statearr_10029_10047 = state_10021__$1;(statearr_10029_10047[2] = inst_10017);
(statearr_10029_10047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10022 === 7))
{var inst_10002 = (state_10021[7]);var inst_10007 = (state_10021[2]);var inst_10008 = cljs.core.next.call(null,inst_10002);var inst_10002__$1 = inst_10008;var state_10021__$1 = (function (){var statearr_10030 = state_10021;(statearr_10030[8] = inst_10007);
(statearr_10030[7] = inst_10002__$1);
return statearr_10030;
})();var statearr_10031_10048 = state_10021__$1;(statearr_10031_10048[2] = null);
(statearr_10031_10048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10022 === 8))
{var inst_10012 = cljs.core.async.close_BANG_.call(null,ch);var state_10021__$1 = state_10021;var statearr_10032_10049 = state_10021__$1;(statearr_10032_10049[2] = inst_10012);
(statearr_10032_10049[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10022 === 9))
{var state_10021__$1 = state_10021;var statearr_10033_10050 = state_10021__$1;(statearr_10033_10050[2] = null);
(statearr_10033_10050[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10022 === 10))
{var inst_10015 = (state_10021[2]);var state_10021__$1 = state_10021;var statearr_10034_10051 = state_10021__$1;(statearr_10034_10051[2] = inst_10015);
(statearr_10034_10051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_10038 = [null,null,null,null,null,null,null,null,null];(statearr_10038[0] = state_machine__5942__auto__);
(statearr_10038[1] = 1);
return statearr_10038;
});
var state_machine__5942__auto____1 = (function (state_10021){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_10021);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e10039){if((e10039 instanceof Object))
{var ex__5945__auto__ = e10039;var statearr_10040_10052 = state_10021;(statearr_10040_10052[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10053 = state_10021;
state_10021 = G__10053;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_10021){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_10021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_10041 = f__6012__auto__.call(null);(statearr_10041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto__);
return statearr_10041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return c__6011__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10055 = {};return obj10055;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10057 = {};return obj10057;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10281 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10281 = (function (cs,ch,mult,meta10282){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10282 = meta10282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10281.cljs$lang$type = true;
cljs.core.async.t10281.cljs$lang$ctorStr = "cljs.core.async/t10281";
cljs.core.async.t10281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10281");
});})(cs))
;
cljs.core.async.t10281.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10281.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10283){var self__ = this;
var _10283__$1 = this;return self__.meta10282;
});})(cs))
;
cljs.core.async.t10281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10283,meta10282__$1){var self__ = this;
var _10283__$1 = this;return (new cljs.core.async.t10281(self__.cs,self__.ch,self__.mult,meta10282__$1));
});})(cs))
;
cljs.core.async.__GT_t10281 = ((function (cs){
return (function __GT_t10281(cs__$1,ch__$1,mult__$1,meta10282){return (new cljs.core.async.t10281(cs__$1,ch__$1,mult__$1,meta10282));
});})(cs))
;
}
return (new cljs.core.async.t10281(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6011__auto___10504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_10418){var state_val_10419 = (state_10418[1]);if((state_val_10419 === 32))
{var inst_10362 = (state_10418[7]);var inst_10286 = (state_10418[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10418,31,Object,null,30);var inst_10369 = cljs.core.async.put_BANG_.call(null,inst_10362,inst_10286,done);var state_10418__$1 = state_10418;var statearr_10420_10505 = state_10418__$1;(statearr_10420_10505[2] = inst_10369);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 1))
{var state_10418__$1 = state_10418;var statearr_10421_10506 = state_10418__$1;(statearr_10421_10506[2] = null);
(statearr_10421_10506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 33))
{var inst_10375 = (state_10418[9]);var inst_10377 = cljs.core.chunked_seq_QMARK_.call(null,inst_10375);var state_10418__$1 = state_10418;if(inst_10377)
{var statearr_10422_10507 = state_10418__$1;(statearr_10422_10507[1] = 36);
} else
{var statearr_10423_10508 = state_10418__$1;(statearr_10423_10508[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 2))
{var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10418__$1,4,ch);
} else
{if((state_val_10419 === 34))
{var state_10418__$1 = state_10418;var statearr_10424_10509 = state_10418__$1;(statearr_10424_10509[2] = null);
(statearr_10424_10509[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 3))
{var inst_10416 = (state_10418[2]);var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10418__$1,inst_10416);
} else
{if((state_val_10419 === 35))
{var inst_10400 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10425_10510 = state_10418__$1;(statearr_10425_10510[2] = inst_10400);
(statearr_10425_10510[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 4))
{var inst_10286 = (state_10418[8]);var inst_10286__$1 = (state_10418[2]);var inst_10287 = (inst_10286__$1 == null);var state_10418__$1 = (function (){var statearr_10426 = state_10418;(statearr_10426[8] = inst_10286__$1);
return statearr_10426;
})();if(cljs.core.truth_(inst_10287))
{var statearr_10427_10511 = state_10418__$1;(statearr_10427_10511[1] = 5);
} else
{var statearr_10428_10512 = state_10418__$1;(statearr_10428_10512[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 36))
{var inst_10375 = (state_10418[9]);var inst_10379 = cljs.core.chunk_first.call(null,inst_10375);var inst_10380 = cljs.core.chunk_rest.call(null,inst_10375);var inst_10381 = cljs.core.count.call(null,inst_10379);var inst_10354 = inst_10380;var inst_10355 = inst_10379;var inst_10356 = inst_10381;var inst_10357 = 0;var state_10418__$1 = (function (){var statearr_10429 = state_10418;(statearr_10429[10] = inst_10356);
(statearr_10429[11] = inst_10357);
(statearr_10429[12] = inst_10355);
(statearr_10429[13] = inst_10354);
return statearr_10429;
})();var statearr_10430_10513 = state_10418__$1;(statearr_10430_10513[2] = null);
(statearr_10430_10513[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 5))
{var inst_10293 = cljs.core.deref.call(null,cs);var inst_10294 = cljs.core.seq.call(null,inst_10293);var inst_10295 = inst_10294;var inst_10296 = null;var inst_10297 = 0;var inst_10298 = 0;var state_10418__$1 = (function (){var statearr_10431 = state_10418;(statearr_10431[14] = inst_10298);
(statearr_10431[15] = inst_10297);
(statearr_10431[16] = inst_10295);
(statearr_10431[17] = inst_10296);
return statearr_10431;
})();var statearr_10432_10514 = state_10418__$1;(statearr_10432_10514[2] = null);
(statearr_10432_10514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 37))
{var inst_10375 = (state_10418[9]);var inst_10384 = cljs.core.first.call(null,inst_10375);var state_10418__$1 = (function (){var statearr_10433 = state_10418;(statearr_10433[18] = inst_10384);
return statearr_10433;
})();var statearr_10434_10515 = state_10418__$1;(statearr_10434_10515[2] = null);
(statearr_10434_10515[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 6))
{var inst_10346 = (state_10418[19]);var inst_10345 = cljs.core.deref.call(null,cs);var inst_10346__$1 = cljs.core.keys.call(null,inst_10345);var inst_10347 = cljs.core.count.call(null,inst_10346__$1);var inst_10348 = cljs.core.reset_BANG_.call(null,dctr,inst_10347);var inst_10353 = cljs.core.seq.call(null,inst_10346__$1);var inst_10354 = inst_10353;var inst_10355 = null;var inst_10356 = 0;var inst_10357 = 0;var state_10418__$1 = (function (){var statearr_10435 = state_10418;(statearr_10435[10] = inst_10356);
(statearr_10435[11] = inst_10357);
(statearr_10435[12] = inst_10355);
(statearr_10435[13] = inst_10354);
(statearr_10435[19] = inst_10346__$1);
(statearr_10435[20] = inst_10348);
return statearr_10435;
})();var statearr_10436_10516 = state_10418__$1;(statearr_10436_10516[2] = null);
(statearr_10436_10516[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 38))
{var inst_10397 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10437_10517 = state_10418__$1;(statearr_10437_10517[2] = inst_10397);
(statearr_10437_10517[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 7))
{var inst_10414 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10438_10518 = state_10418__$1;(statearr_10438_10518[2] = inst_10414);
(statearr_10438_10518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 39))
{var inst_10375 = (state_10418[9]);var inst_10393 = (state_10418[2]);var inst_10394 = cljs.core.next.call(null,inst_10375);var inst_10354 = inst_10394;var inst_10355 = null;var inst_10356 = 0;var inst_10357 = 0;var state_10418__$1 = (function (){var statearr_10439 = state_10418;(statearr_10439[10] = inst_10356);
(statearr_10439[11] = inst_10357);
(statearr_10439[12] = inst_10355);
(statearr_10439[13] = inst_10354);
(statearr_10439[21] = inst_10393);
return statearr_10439;
})();var statearr_10440_10519 = state_10418__$1;(statearr_10440_10519[2] = null);
(statearr_10440_10519[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 8))
{var inst_10298 = (state_10418[14]);var inst_10297 = (state_10418[15]);var inst_10300 = (inst_10298 < inst_10297);var inst_10301 = inst_10300;var state_10418__$1 = state_10418;if(cljs.core.truth_(inst_10301))
{var statearr_10441_10520 = state_10418__$1;(statearr_10441_10520[1] = 10);
} else
{var statearr_10442_10521 = state_10418__$1;(statearr_10442_10521[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 40))
{var inst_10384 = (state_10418[18]);var inst_10385 = (state_10418[2]);var inst_10386 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10387 = cljs.core.async.untap_STAR_.call(null,m,inst_10384);var state_10418__$1 = (function (){var statearr_10443 = state_10418;(statearr_10443[22] = inst_10386);
(statearr_10443[23] = inst_10385);
return statearr_10443;
})();var statearr_10444_10522 = state_10418__$1;(statearr_10444_10522[2] = inst_10387);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 9))
{var inst_10343 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10445_10523 = state_10418__$1;(statearr_10445_10523[2] = inst_10343);
(statearr_10445_10523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 41))
{var inst_10286 = (state_10418[8]);var inst_10384 = (state_10418[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10418,40,Object,null,39);var inst_10391 = cljs.core.async.put_BANG_.call(null,inst_10384,inst_10286,done);var state_10418__$1 = state_10418;var statearr_10446_10524 = state_10418__$1;(statearr_10446_10524[2] = inst_10391);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 10))
{var inst_10298 = (state_10418[14]);var inst_10296 = (state_10418[17]);var inst_10304 = cljs.core._nth.call(null,inst_10296,inst_10298);var inst_10305 = cljs.core.nth.call(null,inst_10304,0,null);var inst_10306 = cljs.core.nth.call(null,inst_10304,1,null);var state_10418__$1 = (function (){var statearr_10447 = state_10418;(statearr_10447[24] = inst_10305);
return statearr_10447;
})();if(cljs.core.truth_(inst_10306))
{var statearr_10448_10525 = state_10418__$1;(statearr_10448_10525[1] = 13);
} else
{var statearr_10449_10526 = state_10418__$1;(statearr_10449_10526[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 42))
{var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10418__$1,45,dchan);
} else
{if((state_val_10419 === 11))
{var inst_10295 = (state_10418[16]);var inst_10315 = (state_10418[25]);var inst_10315__$1 = cljs.core.seq.call(null,inst_10295);var state_10418__$1 = (function (){var statearr_10450 = state_10418;(statearr_10450[25] = inst_10315__$1);
return statearr_10450;
})();if(inst_10315__$1)
{var statearr_10451_10527 = state_10418__$1;(statearr_10451_10527[1] = 16);
} else
{var statearr_10452_10528 = state_10418__$1;(statearr_10452_10528[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 43))
{var state_10418__$1 = state_10418;var statearr_10453_10529 = state_10418__$1;(statearr_10453_10529[2] = null);
(statearr_10453_10529[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 12))
{var inst_10341 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10454_10530 = state_10418__$1;(statearr_10454_10530[2] = inst_10341);
(statearr_10454_10530[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 44))
{var inst_10411 = (state_10418[2]);var state_10418__$1 = (function (){var statearr_10455 = state_10418;(statearr_10455[26] = inst_10411);
return statearr_10455;
})();var statearr_10456_10531 = state_10418__$1;(statearr_10456_10531[2] = null);
(statearr_10456_10531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 13))
{var inst_10305 = (state_10418[24]);var inst_10308 = cljs.core.async.close_BANG_.call(null,inst_10305);var state_10418__$1 = state_10418;var statearr_10457_10532 = state_10418__$1;(statearr_10457_10532[2] = inst_10308);
(statearr_10457_10532[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 45))
{var inst_10408 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10461_10533 = state_10418__$1;(statearr_10461_10533[2] = inst_10408);
(statearr_10461_10533[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 14))
{var state_10418__$1 = state_10418;var statearr_10462_10534 = state_10418__$1;(statearr_10462_10534[2] = null);
(statearr_10462_10534[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 15))
{var inst_10298 = (state_10418[14]);var inst_10297 = (state_10418[15]);var inst_10295 = (state_10418[16]);var inst_10296 = (state_10418[17]);var inst_10311 = (state_10418[2]);var inst_10312 = (inst_10298 + 1);var tmp10458 = inst_10297;var tmp10459 = inst_10295;var tmp10460 = inst_10296;var inst_10295__$1 = tmp10459;var inst_10296__$1 = tmp10460;var inst_10297__$1 = tmp10458;var inst_10298__$1 = inst_10312;var state_10418__$1 = (function (){var statearr_10463 = state_10418;(statearr_10463[14] = inst_10298__$1);
(statearr_10463[15] = inst_10297__$1);
(statearr_10463[16] = inst_10295__$1);
(statearr_10463[17] = inst_10296__$1);
(statearr_10463[27] = inst_10311);
return statearr_10463;
})();var statearr_10464_10535 = state_10418__$1;(statearr_10464_10535[2] = null);
(statearr_10464_10535[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 16))
{var inst_10315 = (state_10418[25]);var inst_10317 = cljs.core.chunked_seq_QMARK_.call(null,inst_10315);var state_10418__$1 = state_10418;if(inst_10317)
{var statearr_10465_10536 = state_10418__$1;(statearr_10465_10536[1] = 19);
} else
{var statearr_10466_10537 = state_10418__$1;(statearr_10466_10537[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 17))
{var state_10418__$1 = state_10418;var statearr_10467_10538 = state_10418__$1;(statearr_10467_10538[2] = null);
(statearr_10467_10538[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 18))
{var inst_10339 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10468_10539 = state_10418__$1;(statearr_10468_10539[2] = inst_10339);
(statearr_10468_10539[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 19))
{var inst_10315 = (state_10418[25]);var inst_10319 = cljs.core.chunk_first.call(null,inst_10315);var inst_10320 = cljs.core.chunk_rest.call(null,inst_10315);var inst_10321 = cljs.core.count.call(null,inst_10319);var inst_10295 = inst_10320;var inst_10296 = inst_10319;var inst_10297 = inst_10321;var inst_10298 = 0;var state_10418__$1 = (function (){var statearr_10469 = state_10418;(statearr_10469[14] = inst_10298);
(statearr_10469[15] = inst_10297);
(statearr_10469[16] = inst_10295);
(statearr_10469[17] = inst_10296);
return statearr_10469;
})();var statearr_10470_10540 = state_10418__$1;(statearr_10470_10540[2] = null);
(statearr_10470_10540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 20))
{var inst_10315 = (state_10418[25]);var inst_10325 = cljs.core.first.call(null,inst_10315);var inst_10326 = cljs.core.nth.call(null,inst_10325,0,null);var inst_10327 = cljs.core.nth.call(null,inst_10325,1,null);var state_10418__$1 = (function (){var statearr_10471 = state_10418;(statearr_10471[28] = inst_10326);
return statearr_10471;
})();if(cljs.core.truth_(inst_10327))
{var statearr_10472_10541 = state_10418__$1;(statearr_10472_10541[1] = 22);
} else
{var statearr_10473_10542 = state_10418__$1;(statearr_10473_10542[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 21))
{var inst_10336 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10474_10543 = state_10418__$1;(statearr_10474_10543[2] = inst_10336);
(statearr_10474_10543[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 22))
{var inst_10326 = (state_10418[28]);var inst_10329 = cljs.core.async.close_BANG_.call(null,inst_10326);var state_10418__$1 = state_10418;var statearr_10475_10544 = state_10418__$1;(statearr_10475_10544[2] = inst_10329);
(statearr_10475_10544[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 23))
{var state_10418__$1 = state_10418;var statearr_10476_10545 = state_10418__$1;(statearr_10476_10545[2] = null);
(statearr_10476_10545[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 24))
{var inst_10315 = (state_10418[25]);var inst_10332 = (state_10418[2]);var inst_10333 = cljs.core.next.call(null,inst_10315);var inst_10295 = inst_10333;var inst_10296 = null;var inst_10297 = 0;var inst_10298 = 0;var state_10418__$1 = (function (){var statearr_10477 = state_10418;(statearr_10477[29] = inst_10332);
(statearr_10477[14] = inst_10298);
(statearr_10477[15] = inst_10297);
(statearr_10477[16] = inst_10295);
(statearr_10477[17] = inst_10296);
return statearr_10477;
})();var statearr_10478_10546 = state_10418__$1;(statearr_10478_10546[2] = null);
(statearr_10478_10546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 25))
{var inst_10356 = (state_10418[10]);var inst_10357 = (state_10418[11]);var inst_10359 = (inst_10357 < inst_10356);var inst_10360 = inst_10359;var state_10418__$1 = state_10418;if(cljs.core.truth_(inst_10360))
{var statearr_10479_10547 = state_10418__$1;(statearr_10479_10547[1] = 27);
} else
{var statearr_10480_10548 = state_10418__$1;(statearr_10480_10548[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 26))
{var inst_10346 = (state_10418[19]);var inst_10404 = (state_10418[2]);var inst_10405 = cljs.core.seq.call(null,inst_10346);var state_10418__$1 = (function (){var statearr_10481 = state_10418;(statearr_10481[30] = inst_10404);
return statearr_10481;
})();if(inst_10405)
{var statearr_10482_10549 = state_10418__$1;(statearr_10482_10549[1] = 42);
} else
{var statearr_10483_10550 = state_10418__$1;(statearr_10483_10550[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 27))
{var inst_10357 = (state_10418[11]);var inst_10355 = (state_10418[12]);var inst_10362 = cljs.core._nth.call(null,inst_10355,inst_10357);var state_10418__$1 = (function (){var statearr_10484 = state_10418;(statearr_10484[7] = inst_10362);
return statearr_10484;
})();var statearr_10485_10551 = state_10418__$1;(statearr_10485_10551[2] = null);
(statearr_10485_10551[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 28))
{var inst_10375 = (state_10418[9]);var inst_10354 = (state_10418[13]);var inst_10375__$1 = cljs.core.seq.call(null,inst_10354);var state_10418__$1 = (function (){var statearr_10489 = state_10418;(statearr_10489[9] = inst_10375__$1);
return statearr_10489;
})();if(inst_10375__$1)
{var statearr_10490_10552 = state_10418__$1;(statearr_10490_10552[1] = 33);
} else
{var statearr_10491_10553 = state_10418__$1;(statearr_10491_10553[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 29))
{var inst_10402 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10492_10554 = state_10418__$1;(statearr_10492_10554[2] = inst_10402);
(statearr_10492_10554[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 30))
{var inst_10356 = (state_10418[10]);var inst_10357 = (state_10418[11]);var inst_10355 = (state_10418[12]);var inst_10354 = (state_10418[13]);var inst_10371 = (state_10418[2]);var inst_10372 = (inst_10357 + 1);var tmp10486 = inst_10356;var tmp10487 = inst_10355;var tmp10488 = inst_10354;var inst_10354__$1 = tmp10488;var inst_10355__$1 = tmp10487;var inst_10356__$1 = tmp10486;var inst_10357__$1 = inst_10372;var state_10418__$1 = (function (){var statearr_10493 = state_10418;(statearr_10493[31] = inst_10371);
(statearr_10493[10] = inst_10356__$1);
(statearr_10493[11] = inst_10357__$1);
(statearr_10493[12] = inst_10355__$1);
(statearr_10493[13] = inst_10354__$1);
return statearr_10493;
})();var statearr_10494_10555 = state_10418__$1;(statearr_10494_10555[2] = null);
(statearr_10494_10555[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 31))
{var inst_10362 = (state_10418[7]);var inst_10363 = (state_10418[2]);var inst_10364 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10365 = cljs.core.async.untap_STAR_.call(null,m,inst_10362);var state_10418__$1 = (function (){var statearr_10495 = state_10418;(statearr_10495[32] = inst_10364);
(statearr_10495[33] = inst_10363);
return statearr_10495;
})();var statearr_10496_10556 = state_10418__$1;(statearr_10496_10556[2] = inst_10365);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_10500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10500[0] = state_machine__5942__auto__);
(statearr_10500[1] = 1);
return statearr_10500;
});
var state_machine__5942__auto____1 = (function (state_10418){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_10418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e10501){if((e10501 instanceof Object))
{var ex__5945__auto__ = e10501;var statearr_10502_10557 = state_10418;(statearr_10502_10557[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10558 = state_10418;
state_10418 = G__10558;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_10418){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_10418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_10503 = f__6012__auto__.call(null);(statearr_10503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___10504);
return statearr_10503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10560 = {};return obj10560;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10670 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10671){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10671 = meta10671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10670.cljs$lang$type = true;
cljs.core.async.t10670.cljs$lang$ctorStr = "cljs.core.async/t10670";
cljs.core.async.t10670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10672){var self__ = this;
var _10672__$1 = this;return self__.meta10671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10672,meta10671__$1){var self__ = this;
var _10672__$1 = this;return (new cljs.core.async.t10670(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10671){return (new cljs.core.async.t10670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10670(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6011__auto___10779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_10737){var state_val_10738 = (state_10737[1]);if((state_val_10738 === 1))
{var inst_10676 = (state_10737[7]);var inst_10676__$1 = calc_state.call(null);var inst_10677 = cljs.core.seq_QMARK_.call(null,inst_10676__$1);var state_10737__$1 = (function (){var statearr_10739 = state_10737;(statearr_10739[7] = inst_10676__$1);
return statearr_10739;
})();if(inst_10677)
{var statearr_10740_10780 = state_10737__$1;(statearr_10740_10780[1] = 2);
} else
{var statearr_10741_10781 = state_10737__$1;(statearr_10741_10781[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 2))
{var inst_10676 = (state_10737[7]);var inst_10679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10676);var state_10737__$1 = state_10737;var statearr_10742_10782 = state_10737__$1;(statearr_10742_10782[2] = inst_10679);
(statearr_10742_10782[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 3))
{var inst_10676 = (state_10737[7]);var state_10737__$1 = state_10737;var statearr_10743_10783 = state_10737__$1;(statearr_10743_10783[2] = inst_10676);
(statearr_10743_10783[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 4))
{var inst_10676 = (state_10737[7]);var inst_10682 = (state_10737[2]);var inst_10683 = cljs.core.get.call(null,inst_10682,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10684 = cljs.core.get.call(null,inst_10682,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10685 = cljs.core.get.call(null,inst_10682,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10686 = inst_10676;var state_10737__$1 = (function (){var statearr_10744 = state_10737;(statearr_10744[8] = inst_10686);
(statearr_10744[9] = inst_10685);
(statearr_10744[10] = inst_10684);
(statearr_10744[11] = inst_10683);
return statearr_10744;
})();var statearr_10745_10784 = state_10737__$1;(statearr_10745_10784[2] = null);
(statearr_10745_10784[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 5))
{var inst_10686 = (state_10737[8]);var inst_10689 = cljs.core.seq_QMARK_.call(null,inst_10686);var state_10737__$1 = state_10737;if(inst_10689)
{var statearr_10746_10785 = state_10737__$1;(statearr_10746_10785[1] = 7);
} else
{var statearr_10747_10786 = state_10737__$1;(statearr_10747_10786[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 6))
{var inst_10735 = (state_10737[2]);var state_10737__$1 = state_10737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10737__$1,inst_10735);
} else
{if((state_val_10738 === 7))
{var inst_10686 = (state_10737[8]);var inst_10691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10686);var state_10737__$1 = state_10737;var statearr_10748_10787 = state_10737__$1;(statearr_10748_10787[2] = inst_10691);
(statearr_10748_10787[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 8))
{var inst_10686 = (state_10737[8]);var state_10737__$1 = state_10737;var statearr_10749_10788 = state_10737__$1;(statearr_10749_10788[2] = inst_10686);
(statearr_10749_10788[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 9))
{var inst_10694 = (state_10737[12]);var inst_10694__$1 = (state_10737[2]);var inst_10695 = cljs.core.get.call(null,inst_10694__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10696 = cljs.core.get.call(null,inst_10694__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10697 = cljs.core.get.call(null,inst_10694__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10737__$1 = (function (){var statearr_10750 = state_10737;(statearr_10750[13] = inst_10696);
(statearr_10750[12] = inst_10694__$1);
(statearr_10750[14] = inst_10697);
return statearr_10750;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10737__$1,10,inst_10695);
} else
{if((state_val_10738 === 10))
{var inst_10702 = (state_10737[15]);var inst_10701 = (state_10737[16]);var inst_10700 = (state_10737[2]);var inst_10701__$1 = cljs.core.nth.call(null,inst_10700,0,null);var inst_10702__$1 = cljs.core.nth.call(null,inst_10700,1,null);var inst_10703 = (inst_10701__$1 == null);var inst_10704 = cljs.core._EQ_.call(null,inst_10702__$1,change);var inst_10705 = (inst_10703) || (inst_10704);var state_10737__$1 = (function (){var statearr_10751 = state_10737;(statearr_10751[15] = inst_10702__$1);
(statearr_10751[16] = inst_10701__$1);
return statearr_10751;
})();if(cljs.core.truth_(inst_10705))
{var statearr_10752_10789 = state_10737__$1;(statearr_10752_10789[1] = 11);
} else
{var statearr_10753_10790 = state_10737__$1;(statearr_10753_10790[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 11))
{var inst_10701 = (state_10737[16]);var inst_10707 = (inst_10701 == null);var state_10737__$1 = state_10737;if(cljs.core.truth_(inst_10707))
{var statearr_10754_10791 = state_10737__$1;(statearr_10754_10791[1] = 14);
} else
{var statearr_10755_10792 = state_10737__$1;(statearr_10755_10792[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 12))
{var inst_10702 = (state_10737[15]);var inst_10716 = (state_10737[17]);var inst_10697 = (state_10737[14]);var inst_10716__$1 = inst_10697.call(null,inst_10702);var state_10737__$1 = (function (){var statearr_10756 = state_10737;(statearr_10756[17] = inst_10716__$1);
return statearr_10756;
})();if(cljs.core.truth_(inst_10716__$1))
{var statearr_10757_10793 = state_10737__$1;(statearr_10757_10793[1] = 17);
} else
{var statearr_10758_10794 = state_10737__$1;(statearr_10758_10794[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 13))
{var inst_10733 = (state_10737[2]);var state_10737__$1 = state_10737;var statearr_10759_10795 = state_10737__$1;(statearr_10759_10795[2] = inst_10733);
(statearr_10759_10795[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 14))
{var inst_10702 = (state_10737[15]);var inst_10709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10702);var state_10737__$1 = state_10737;var statearr_10760_10796 = state_10737__$1;(statearr_10760_10796[2] = inst_10709);
(statearr_10760_10796[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 15))
{var state_10737__$1 = state_10737;var statearr_10761_10797 = state_10737__$1;(statearr_10761_10797[2] = null);
(statearr_10761_10797[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 16))
{var inst_10712 = (state_10737[2]);var inst_10713 = calc_state.call(null);var inst_10686 = inst_10713;var state_10737__$1 = (function (){var statearr_10762 = state_10737;(statearr_10762[8] = inst_10686);
(statearr_10762[18] = inst_10712);
return statearr_10762;
})();var statearr_10763_10798 = state_10737__$1;(statearr_10763_10798[2] = null);
(statearr_10763_10798[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 17))
{var inst_10716 = (state_10737[17]);var state_10737__$1 = state_10737;var statearr_10764_10799 = state_10737__$1;(statearr_10764_10799[2] = inst_10716);
(statearr_10764_10799[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 18))
{var inst_10696 = (state_10737[13]);var inst_10702 = (state_10737[15]);var inst_10697 = (state_10737[14]);var inst_10719 = cljs.core.empty_QMARK_.call(null,inst_10697);var inst_10720 = inst_10696.call(null,inst_10702);var inst_10721 = cljs.core.not.call(null,inst_10720);var inst_10722 = (inst_10719) && (inst_10721);var state_10737__$1 = state_10737;var statearr_10765_10800 = state_10737__$1;(statearr_10765_10800[2] = inst_10722);
(statearr_10765_10800[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 19))
{var inst_10724 = (state_10737[2]);var state_10737__$1 = state_10737;if(cljs.core.truth_(inst_10724))
{var statearr_10766_10801 = state_10737__$1;(statearr_10766_10801[1] = 20);
} else
{var statearr_10767_10802 = state_10737__$1;(statearr_10767_10802[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 20))
{var inst_10701 = (state_10737[16]);var state_10737__$1 = state_10737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10737__$1,23,out,inst_10701);
} else
{if((state_val_10738 === 21))
{var state_10737__$1 = state_10737;var statearr_10768_10803 = state_10737__$1;(statearr_10768_10803[2] = null);
(statearr_10768_10803[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 22))
{var inst_10694 = (state_10737[12]);var inst_10730 = (state_10737[2]);var inst_10686 = inst_10694;var state_10737__$1 = (function (){var statearr_10769 = state_10737;(statearr_10769[8] = inst_10686);
(statearr_10769[19] = inst_10730);
return statearr_10769;
})();var statearr_10770_10804 = state_10737__$1;(statearr_10770_10804[2] = null);
(statearr_10770_10804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10738 === 23))
{var inst_10727 = (state_10737[2]);var state_10737__$1 = state_10737;var statearr_10771_10805 = state_10737__$1;(statearr_10771_10805[2] = inst_10727);
(statearr_10771_10805[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_10775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10775[0] = state_machine__5942__auto__);
(statearr_10775[1] = 1);
return statearr_10775;
});
var state_machine__5942__auto____1 = (function (state_10737){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_10737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e10776){if((e10776 instanceof Object))
{var ex__5945__auto__ = e10776;var statearr_10777_10806 = state_10737;(statearr_10777_10806[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10807 = state_10737;
state_10737 = G__10807;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_10737){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_10737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_10778 = f__6012__auto__.call(null);(statearr_10778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___10779);
return statearr_10778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10809 = {};return obj10809;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__10810_SHARP_){if(cljs.core.truth_(p1__10810_SHARP_.call(null,topic)))
{return p1__10810_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10810_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10935 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10936){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10936 = meta10936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10935.cljs$lang$type = true;
cljs.core.async.t10935.cljs$lang$ctorStr = "cljs.core.async/t10935";
cljs.core.async.t10935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10935");
});})(mults,ensure_mult))
;
cljs.core.async.t10935.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10935.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10937){var self__ = this;
var _10937__$1 = this;return self__.meta10936;
});})(mults,ensure_mult))
;
cljs.core.async.t10935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10937,meta10936__$1){var self__ = this;
var _10937__$1 = this;return (new cljs.core.async.t10935(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10936__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10935 = ((function (mults,ensure_mult){
return (function __GT_t10935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10936){return (new cljs.core.async.t10935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10936));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10935(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6011__auto___11059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_11011){var state_val_11012 = (state_11011[1]);if((state_val_11012 === 1))
{var state_11011__$1 = state_11011;var statearr_11013_11060 = state_11011__$1;(statearr_11013_11060[2] = null);
(statearr_11013_11060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 2))
{var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11011__$1,4,ch);
} else
{if((state_val_11012 === 3))
{var inst_11009 = (state_11011[2]);var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11011__$1,inst_11009);
} else
{if((state_val_11012 === 4))
{var inst_10940 = (state_11011[7]);var inst_10940__$1 = (state_11011[2]);var inst_10941 = (inst_10940__$1 == null);var state_11011__$1 = (function (){var statearr_11014 = state_11011;(statearr_11014[7] = inst_10940__$1);
return statearr_11014;
})();if(cljs.core.truth_(inst_10941))
{var statearr_11015_11061 = state_11011__$1;(statearr_11015_11061[1] = 5);
} else
{var statearr_11016_11062 = state_11011__$1;(statearr_11016_11062[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 5))
{var inst_10947 = cljs.core.deref.call(null,mults);var inst_10948 = cljs.core.vals.call(null,inst_10947);var inst_10949 = cljs.core.seq.call(null,inst_10948);var inst_10950 = inst_10949;var inst_10951 = null;var inst_10952 = 0;var inst_10953 = 0;var state_11011__$1 = (function (){var statearr_11017 = state_11011;(statearr_11017[8] = inst_10950);
(statearr_11017[9] = inst_10951);
(statearr_11017[10] = inst_10952);
(statearr_11017[11] = inst_10953);
return statearr_11017;
})();var statearr_11018_11063 = state_11011__$1;(statearr_11018_11063[2] = null);
(statearr_11018_11063[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 6))
{var inst_10988 = (state_11011[12]);var inst_10940 = (state_11011[7]);var inst_10990 = (state_11011[13]);var inst_10988__$1 = topic_fn.call(null,inst_10940);var inst_10989 = cljs.core.deref.call(null,mults);var inst_10990__$1 = cljs.core.get.call(null,inst_10989,inst_10988__$1);var state_11011__$1 = (function (){var statearr_11019 = state_11011;(statearr_11019[12] = inst_10988__$1);
(statearr_11019[13] = inst_10990__$1);
return statearr_11019;
})();if(cljs.core.truth_(inst_10990__$1))
{var statearr_11020_11064 = state_11011__$1;(statearr_11020_11064[1] = 19);
} else
{var statearr_11021_11065 = state_11011__$1;(statearr_11021_11065[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 7))
{var inst_11007 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11022_11066 = state_11011__$1;(statearr_11022_11066[2] = inst_11007);
(statearr_11022_11066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 8))
{var inst_10952 = (state_11011[10]);var inst_10953 = (state_11011[11]);var inst_10955 = (inst_10953 < inst_10952);var inst_10956 = inst_10955;var state_11011__$1 = state_11011;if(cljs.core.truth_(inst_10956))
{var statearr_11026_11067 = state_11011__$1;(statearr_11026_11067[1] = 10);
} else
{var statearr_11027_11068 = state_11011__$1;(statearr_11027_11068[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 9))
{var inst_10986 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11028_11069 = state_11011__$1;(statearr_11028_11069[2] = inst_10986);
(statearr_11028_11069[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 10))
{var inst_10950 = (state_11011[8]);var inst_10951 = (state_11011[9]);var inst_10952 = (state_11011[10]);var inst_10953 = (state_11011[11]);var inst_10958 = cljs.core._nth.call(null,inst_10951,inst_10953);var inst_10959 = cljs.core.async.muxch_STAR_.call(null,inst_10958);var inst_10960 = cljs.core.async.close_BANG_.call(null,inst_10959);var inst_10961 = (inst_10953 + 1);var tmp11023 = inst_10950;var tmp11024 = inst_10951;var tmp11025 = inst_10952;var inst_10950__$1 = tmp11023;var inst_10951__$1 = tmp11024;var inst_10952__$1 = tmp11025;var inst_10953__$1 = inst_10961;var state_11011__$1 = (function (){var statearr_11029 = state_11011;(statearr_11029[8] = inst_10950__$1);
(statearr_11029[14] = inst_10960);
(statearr_11029[9] = inst_10951__$1);
(statearr_11029[10] = inst_10952__$1);
(statearr_11029[11] = inst_10953__$1);
return statearr_11029;
})();var statearr_11030_11070 = state_11011__$1;(statearr_11030_11070[2] = null);
(statearr_11030_11070[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 11))
{var inst_10964 = (state_11011[15]);var inst_10950 = (state_11011[8]);var inst_10964__$1 = cljs.core.seq.call(null,inst_10950);var state_11011__$1 = (function (){var statearr_11031 = state_11011;(statearr_11031[15] = inst_10964__$1);
return statearr_11031;
})();if(inst_10964__$1)
{var statearr_11032_11071 = state_11011__$1;(statearr_11032_11071[1] = 13);
} else
{var statearr_11033_11072 = state_11011__$1;(statearr_11033_11072[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 12))
{var inst_10984 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11034_11073 = state_11011__$1;(statearr_11034_11073[2] = inst_10984);
(statearr_11034_11073[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 13))
{var inst_10964 = (state_11011[15]);var inst_10966 = cljs.core.chunked_seq_QMARK_.call(null,inst_10964);var state_11011__$1 = state_11011;if(inst_10966)
{var statearr_11035_11074 = state_11011__$1;(statearr_11035_11074[1] = 16);
} else
{var statearr_11036_11075 = state_11011__$1;(statearr_11036_11075[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 14))
{var state_11011__$1 = state_11011;var statearr_11037_11076 = state_11011__$1;(statearr_11037_11076[2] = null);
(statearr_11037_11076[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 15))
{var inst_10982 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11038_11077 = state_11011__$1;(statearr_11038_11077[2] = inst_10982);
(statearr_11038_11077[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 16))
{var inst_10964 = (state_11011[15]);var inst_10968 = cljs.core.chunk_first.call(null,inst_10964);var inst_10969 = cljs.core.chunk_rest.call(null,inst_10964);var inst_10970 = cljs.core.count.call(null,inst_10968);var inst_10950 = inst_10969;var inst_10951 = inst_10968;var inst_10952 = inst_10970;var inst_10953 = 0;var state_11011__$1 = (function (){var statearr_11039 = state_11011;(statearr_11039[8] = inst_10950);
(statearr_11039[9] = inst_10951);
(statearr_11039[10] = inst_10952);
(statearr_11039[11] = inst_10953);
return statearr_11039;
})();var statearr_11040_11078 = state_11011__$1;(statearr_11040_11078[2] = null);
(statearr_11040_11078[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 17))
{var inst_10964 = (state_11011[15]);var inst_10973 = cljs.core.first.call(null,inst_10964);var inst_10974 = cljs.core.async.muxch_STAR_.call(null,inst_10973);var inst_10975 = cljs.core.async.close_BANG_.call(null,inst_10974);var inst_10976 = cljs.core.next.call(null,inst_10964);var inst_10950 = inst_10976;var inst_10951 = null;var inst_10952 = 0;var inst_10953 = 0;var state_11011__$1 = (function (){var statearr_11041 = state_11011;(statearr_11041[8] = inst_10950);
(statearr_11041[9] = inst_10951);
(statearr_11041[10] = inst_10952);
(statearr_11041[11] = inst_10953);
(statearr_11041[16] = inst_10975);
return statearr_11041;
})();var statearr_11042_11079 = state_11011__$1;(statearr_11042_11079[2] = null);
(statearr_11042_11079[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 18))
{var inst_10979 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11043_11080 = state_11011__$1;(statearr_11043_11080[2] = inst_10979);
(statearr_11043_11080[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 19))
{var state_11011__$1 = state_11011;var statearr_11044_11081 = state_11011__$1;(statearr_11044_11081[2] = null);
(statearr_11044_11081[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 20))
{var state_11011__$1 = state_11011;var statearr_11045_11082 = state_11011__$1;(statearr_11045_11082[2] = null);
(statearr_11045_11082[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 21))
{var inst_11004 = (state_11011[2]);var state_11011__$1 = (function (){var statearr_11046 = state_11011;(statearr_11046[17] = inst_11004);
return statearr_11046;
})();var statearr_11047_11083 = state_11011__$1;(statearr_11047_11083[2] = null);
(statearr_11047_11083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 22))
{var inst_11001 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11048_11084 = state_11011__$1;(statearr_11048_11084[2] = inst_11001);
(statearr_11048_11084[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 23))
{var inst_10988 = (state_11011[12]);var inst_10992 = (state_11011[2]);var inst_10993 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10988);var state_11011__$1 = (function (){var statearr_11049 = state_11011;(statearr_11049[18] = inst_10992);
return statearr_11049;
})();var statearr_11050_11085 = state_11011__$1;(statearr_11050_11085[2] = inst_10993);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11011__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11012 === 24))
{var inst_10940 = (state_11011[7]);var inst_10990 = (state_11011[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11011,23,Object,null,22);var inst_10997 = cljs.core.async.muxch_STAR_.call(null,inst_10990);var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11011__$1,25,inst_10997,inst_10940);
} else
{if((state_val_11012 === 25))
{var inst_10999 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11051_11086 = state_11011__$1;(statearr_11051_11086[2] = inst_10999);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11011__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_11055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11055[0] = state_machine__5942__auto__);
(statearr_11055[1] = 1);
return statearr_11055;
});
var state_machine__5942__auto____1 = (function (state_11011){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_11011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e11056){if((e11056 instanceof Object))
{var ex__5945__auto__ = e11056;var statearr_11057_11087 = state_11011;(statearr_11057_11087[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11088 = state_11011;
state_11011 = G__11088;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_11011){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_11011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_11058 = f__6012__auto__.call(null);(statearr_11058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___11059);
return statearr_11058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6011__auto___11225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_11195){var state_val_11196 = (state_11195[1]);if((state_val_11196 === 1))
{var state_11195__$1 = state_11195;var statearr_11197_11226 = state_11195__$1;(statearr_11197_11226[2] = null);
(statearr_11197_11226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 2))
{var inst_11158 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11159 = 0;var state_11195__$1 = (function (){var statearr_11198 = state_11195;(statearr_11198[7] = inst_11159);
(statearr_11198[8] = inst_11158);
return statearr_11198;
})();var statearr_11199_11227 = state_11195__$1;(statearr_11199_11227[2] = null);
(statearr_11199_11227[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 3))
{var inst_11193 = (state_11195[2]);var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11195__$1,inst_11193);
} else
{if((state_val_11196 === 4))
{var inst_11159 = (state_11195[7]);var inst_11161 = (inst_11159 < cnt);var state_11195__$1 = state_11195;if(cljs.core.truth_(inst_11161))
{var statearr_11200_11228 = state_11195__$1;(statearr_11200_11228[1] = 6);
} else
{var statearr_11201_11229 = state_11195__$1;(statearr_11201_11229[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 5))
{var inst_11179 = (state_11195[2]);var state_11195__$1 = (function (){var statearr_11202 = state_11195;(statearr_11202[9] = inst_11179);
return statearr_11202;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11195__$1,12,dchan);
} else
{if((state_val_11196 === 6))
{var state_11195__$1 = state_11195;var statearr_11203_11230 = state_11195__$1;(statearr_11203_11230[2] = null);
(statearr_11203_11230[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 7))
{var state_11195__$1 = state_11195;var statearr_11204_11231 = state_11195__$1;(statearr_11204_11231[2] = null);
(statearr_11204_11231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 8))
{var inst_11177 = (state_11195[2]);var state_11195__$1 = state_11195;var statearr_11205_11232 = state_11195__$1;(statearr_11205_11232[2] = inst_11177);
(statearr_11205_11232[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 9))
{var inst_11159 = (state_11195[7]);var inst_11172 = (state_11195[2]);var inst_11173 = (inst_11159 + 1);var inst_11159__$1 = inst_11173;var state_11195__$1 = (function (){var statearr_11206 = state_11195;(statearr_11206[10] = inst_11172);
(statearr_11206[7] = inst_11159__$1);
return statearr_11206;
})();var statearr_11207_11233 = state_11195__$1;(statearr_11207_11233[2] = null);
(statearr_11207_11233[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 10))
{var inst_11163 = (state_11195[2]);var inst_11164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11195__$1 = (function (){var statearr_11208 = state_11195;(statearr_11208[11] = inst_11163);
return statearr_11208;
})();var statearr_11209_11234 = state_11195__$1;(statearr_11209_11234[2] = inst_11164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 11))
{var inst_11159 = (state_11195[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11195,10,Object,null,9);var inst_11168 = chs__$1.call(null,inst_11159);var inst_11169 = done.call(null,inst_11159);var inst_11170 = cljs.core.async.take_BANG_.call(null,inst_11168,inst_11169);var state_11195__$1 = state_11195;var statearr_11210_11235 = state_11195__$1;(statearr_11210_11235[2] = inst_11170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 12))
{var inst_11181 = (state_11195[12]);var inst_11181__$1 = (state_11195[2]);var inst_11182 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11181__$1);var state_11195__$1 = (function (){var statearr_11211 = state_11195;(statearr_11211[12] = inst_11181__$1);
return statearr_11211;
})();if(cljs.core.truth_(inst_11182))
{var statearr_11212_11236 = state_11195__$1;(statearr_11212_11236[1] = 13);
} else
{var statearr_11213_11237 = state_11195__$1;(statearr_11213_11237[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 13))
{var inst_11184 = cljs.core.async.close_BANG_.call(null,out);var state_11195__$1 = state_11195;var statearr_11214_11238 = state_11195__$1;(statearr_11214_11238[2] = inst_11184);
(statearr_11214_11238[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 14))
{var inst_11181 = (state_11195[12]);var inst_11186 = cljs.core.apply.call(null,f,inst_11181);var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11195__$1,16,out,inst_11186);
} else
{if((state_val_11196 === 15))
{var inst_11191 = (state_11195[2]);var state_11195__$1 = state_11195;var statearr_11215_11239 = state_11195__$1;(statearr_11215_11239[2] = inst_11191);
(statearr_11215_11239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 16))
{var inst_11188 = (state_11195[2]);var state_11195__$1 = (function (){var statearr_11216 = state_11195;(statearr_11216[13] = inst_11188);
return statearr_11216;
})();var statearr_11217_11240 = state_11195__$1;(statearr_11217_11240[2] = null);
(statearr_11217_11240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_11221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11221[0] = state_machine__5942__auto__);
(statearr_11221[1] = 1);
return statearr_11221;
});
var state_machine__5942__auto____1 = (function (state_11195){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_11195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e11222){if((e11222 instanceof Object))
{var ex__5945__auto__ = e11222;var statearr_11223_11241 = state_11195;(statearr_11223_11241[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11242 = state_11195;
state_11195 = G__11242;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_11195){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_11195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_11224 = f__6012__auto__.call(null);(statearr_11224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___11225);
return statearr_11224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6011__auto___11350 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_11326){var state_val_11327 = (state_11326[1]);if((state_val_11327 === 1))
{var inst_11297 = cljs.core.vec.call(null,chs);var inst_11298 = inst_11297;var state_11326__$1 = (function (){var statearr_11328 = state_11326;(statearr_11328[7] = inst_11298);
return statearr_11328;
})();var statearr_11329_11351 = state_11326__$1;(statearr_11329_11351[2] = null);
(statearr_11329_11351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 2))
{var inst_11298 = (state_11326[7]);var inst_11300 = cljs.core.count.call(null,inst_11298);var inst_11301 = (inst_11300 > 0);var state_11326__$1 = state_11326;if(cljs.core.truth_(inst_11301))
{var statearr_11330_11352 = state_11326__$1;(statearr_11330_11352[1] = 4);
} else
{var statearr_11331_11353 = state_11326__$1;(statearr_11331_11353[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 3))
{var inst_11324 = (state_11326[2]);var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11326__$1,inst_11324);
} else
{if((state_val_11327 === 4))
{var inst_11298 = (state_11326[7]);var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11326__$1,7,inst_11298);
} else
{if((state_val_11327 === 5))
{var inst_11320 = cljs.core.async.close_BANG_.call(null,out);var state_11326__$1 = state_11326;var statearr_11332_11354 = state_11326__$1;(statearr_11332_11354[2] = inst_11320);
(statearr_11332_11354[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 6))
{var inst_11322 = (state_11326[2]);var state_11326__$1 = state_11326;var statearr_11333_11355 = state_11326__$1;(statearr_11333_11355[2] = inst_11322);
(statearr_11333_11355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 7))
{var inst_11306 = (state_11326[8]);var inst_11305 = (state_11326[9]);var inst_11305__$1 = (state_11326[2]);var inst_11306__$1 = cljs.core.nth.call(null,inst_11305__$1,0,null);var inst_11307 = cljs.core.nth.call(null,inst_11305__$1,1,null);var inst_11308 = (inst_11306__$1 == null);var state_11326__$1 = (function (){var statearr_11334 = state_11326;(statearr_11334[10] = inst_11307);
(statearr_11334[8] = inst_11306__$1);
(statearr_11334[9] = inst_11305__$1);
return statearr_11334;
})();if(cljs.core.truth_(inst_11308))
{var statearr_11335_11356 = state_11326__$1;(statearr_11335_11356[1] = 8);
} else
{var statearr_11336_11357 = state_11326__$1;(statearr_11336_11357[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 8))
{var inst_11307 = (state_11326[10]);var inst_11306 = (state_11326[8]);var inst_11298 = (state_11326[7]);var inst_11305 = (state_11326[9]);var inst_11310 = (function (){var c = inst_11307;var v = inst_11306;var vec__11303 = inst_11305;var cs = inst_11298;return ((function (c,v,vec__11303,cs,inst_11307,inst_11306,inst_11298,inst_11305,state_val_11327){
return (function (p1__11243_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11243_SHARP_);
});
;})(c,v,vec__11303,cs,inst_11307,inst_11306,inst_11298,inst_11305,state_val_11327))
})();var inst_11311 = cljs.core.filterv.call(null,inst_11310,inst_11298);var inst_11298__$1 = inst_11311;var state_11326__$1 = (function (){var statearr_11337 = state_11326;(statearr_11337[7] = inst_11298__$1);
return statearr_11337;
})();var statearr_11338_11358 = state_11326__$1;(statearr_11338_11358[2] = null);
(statearr_11338_11358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 9))
{var inst_11306 = (state_11326[8]);var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11326__$1,11,out,inst_11306);
} else
{if((state_val_11327 === 10))
{var inst_11318 = (state_11326[2]);var state_11326__$1 = state_11326;var statearr_11340_11359 = state_11326__$1;(statearr_11340_11359[2] = inst_11318);
(statearr_11340_11359[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 11))
{var inst_11298 = (state_11326[7]);var inst_11315 = (state_11326[2]);var tmp11339 = inst_11298;var inst_11298__$1 = tmp11339;var state_11326__$1 = (function (){var statearr_11341 = state_11326;(statearr_11341[7] = inst_11298__$1);
(statearr_11341[11] = inst_11315);
return statearr_11341;
})();var statearr_11342_11360 = state_11326__$1;(statearr_11342_11360[2] = null);
(statearr_11342_11360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_11346 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11346[0] = state_machine__5942__auto__);
(statearr_11346[1] = 1);
return statearr_11346;
});
var state_machine__5942__auto____1 = (function (state_11326){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_11326);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e11347){if((e11347 instanceof Object))
{var ex__5945__auto__ = e11347;var statearr_11348_11361 = state_11326;(statearr_11348_11361[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11362 = state_11326;
state_11326 = G__11362;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_11326){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_11326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_11349 = f__6012__auto__.call(null);(statearr_11349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___11350);
return statearr_11349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6011__auto___11455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_11432){var state_val_11433 = (state_11432[1]);if((state_val_11433 === 1))
{var inst_11409 = 0;var state_11432__$1 = (function (){var statearr_11434 = state_11432;(statearr_11434[7] = inst_11409);
return statearr_11434;
})();var statearr_11435_11456 = state_11432__$1;(statearr_11435_11456[2] = null);
(statearr_11435_11456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11433 === 2))
{var inst_11409 = (state_11432[7]);var inst_11411 = (inst_11409 < n);var state_11432__$1 = state_11432;if(cljs.core.truth_(inst_11411))
{var statearr_11436_11457 = state_11432__$1;(statearr_11436_11457[1] = 4);
} else
{var statearr_11437_11458 = state_11432__$1;(statearr_11437_11458[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11433 === 3))
{var inst_11429 = (state_11432[2]);var inst_11430 = cljs.core.async.close_BANG_.call(null,out);var state_11432__$1 = (function (){var statearr_11438 = state_11432;(statearr_11438[8] = inst_11429);
return statearr_11438;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11432__$1,inst_11430);
} else
{if((state_val_11433 === 4))
{var state_11432__$1 = state_11432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11432__$1,7,ch);
} else
{if((state_val_11433 === 5))
{var state_11432__$1 = state_11432;var statearr_11439_11459 = state_11432__$1;(statearr_11439_11459[2] = null);
(statearr_11439_11459[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11433 === 6))
{var inst_11427 = (state_11432[2]);var state_11432__$1 = state_11432;var statearr_11440_11460 = state_11432__$1;(statearr_11440_11460[2] = inst_11427);
(statearr_11440_11460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11433 === 7))
{var inst_11414 = (state_11432[9]);var inst_11414__$1 = (state_11432[2]);var inst_11415 = (inst_11414__$1 == null);var inst_11416 = cljs.core.not.call(null,inst_11415);var state_11432__$1 = (function (){var statearr_11441 = state_11432;(statearr_11441[9] = inst_11414__$1);
return statearr_11441;
})();if(inst_11416)
{var statearr_11442_11461 = state_11432__$1;(statearr_11442_11461[1] = 8);
} else
{var statearr_11443_11462 = state_11432__$1;(statearr_11443_11462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11433 === 8))
{var inst_11414 = (state_11432[9]);var state_11432__$1 = state_11432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11432__$1,11,out,inst_11414);
} else
{if((state_val_11433 === 9))
{var state_11432__$1 = state_11432;var statearr_11444_11463 = state_11432__$1;(statearr_11444_11463[2] = null);
(statearr_11444_11463[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11433 === 10))
{var inst_11424 = (state_11432[2]);var state_11432__$1 = state_11432;var statearr_11445_11464 = state_11432__$1;(statearr_11445_11464[2] = inst_11424);
(statearr_11445_11464[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11433 === 11))
{var inst_11409 = (state_11432[7]);var inst_11419 = (state_11432[2]);var inst_11420 = (inst_11409 + 1);var inst_11409__$1 = inst_11420;var state_11432__$1 = (function (){var statearr_11446 = state_11432;(statearr_11446[7] = inst_11409__$1);
(statearr_11446[10] = inst_11419);
return statearr_11446;
})();var statearr_11447_11465 = state_11432__$1;(statearr_11447_11465[2] = null);
(statearr_11447_11465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_11451 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11451[0] = state_machine__5942__auto__);
(statearr_11451[1] = 1);
return statearr_11451;
});
var state_machine__5942__auto____1 = (function (state_11432){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_11432);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e11452){if((e11452 instanceof Object))
{var ex__5945__auto__ = e11452;var statearr_11453_11466 = state_11432;(statearr_11453_11466[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11467 = state_11432;
state_11432 = G__11467;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_11432){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_11432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_11454 = f__6012__auto__.call(null);(statearr_11454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___11455);
return statearr_11454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6011__auto___11564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_11539){var state_val_11540 = (state_11539[1]);if((state_val_11540 === 1))
{var inst_11516 = null;var state_11539__$1 = (function (){var statearr_11541 = state_11539;(statearr_11541[7] = inst_11516);
return statearr_11541;
})();var statearr_11542_11565 = state_11539__$1;(statearr_11542_11565[2] = null);
(statearr_11542_11565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11540 === 2))
{var state_11539__$1 = state_11539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11539__$1,4,ch);
} else
{if((state_val_11540 === 3))
{var inst_11536 = (state_11539[2]);var inst_11537 = cljs.core.async.close_BANG_.call(null,out);var state_11539__$1 = (function (){var statearr_11543 = state_11539;(statearr_11543[8] = inst_11536);
return statearr_11543;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11539__$1,inst_11537);
} else
{if((state_val_11540 === 4))
{var inst_11519 = (state_11539[9]);var inst_11519__$1 = (state_11539[2]);var inst_11520 = (inst_11519__$1 == null);var inst_11521 = cljs.core.not.call(null,inst_11520);var state_11539__$1 = (function (){var statearr_11544 = state_11539;(statearr_11544[9] = inst_11519__$1);
return statearr_11544;
})();if(inst_11521)
{var statearr_11545_11566 = state_11539__$1;(statearr_11545_11566[1] = 5);
} else
{var statearr_11546_11567 = state_11539__$1;(statearr_11546_11567[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11540 === 5))
{var inst_11516 = (state_11539[7]);var inst_11519 = (state_11539[9]);var inst_11523 = cljs.core._EQ_.call(null,inst_11519,inst_11516);var state_11539__$1 = state_11539;if(inst_11523)
{var statearr_11547_11568 = state_11539__$1;(statearr_11547_11568[1] = 8);
} else
{var statearr_11548_11569 = state_11539__$1;(statearr_11548_11569[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11540 === 6))
{var state_11539__$1 = state_11539;var statearr_11550_11570 = state_11539__$1;(statearr_11550_11570[2] = null);
(statearr_11550_11570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11540 === 7))
{var inst_11534 = (state_11539[2]);var state_11539__$1 = state_11539;var statearr_11551_11571 = state_11539__$1;(statearr_11551_11571[2] = inst_11534);
(statearr_11551_11571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11540 === 8))
{var inst_11516 = (state_11539[7]);var tmp11549 = inst_11516;var inst_11516__$1 = tmp11549;var state_11539__$1 = (function (){var statearr_11552 = state_11539;(statearr_11552[7] = inst_11516__$1);
return statearr_11552;
})();var statearr_11553_11572 = state_11539__$1;(statearr_11553_11572[2] = null);
(statearr_11553_11572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11540 === 9))
{var inst_11519 = (state_11539[9]);var state_11539__$1 = state_11539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11539__$1,11,out,inst_11519);
} else
{if((state_val_11540 === 10))
{var inst_11531 = (state_11539[2]);var state_11539__$1 = state_11539;var statearr_11554_11573 = state_11539__$1;(statearr_11554_11573[2] = inst_11531);
(statearr_11554_11573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11540 === 11))
{var inst_11519 = (state_11539[9]);var inst_11528 = (state_11539[2]);var inst_11516 = inst_11519;var state_11539__$1 = (function (){var statearr_11555 = state_11539;(statearr_11555[7] = inst_11516);
(statearr_11555[10] = inst_11528);
return statearr_11555;
})();var statearr_11556_11574 = state_11539__$1;(statearr_11556_11574[2] = null);
(statearr_11556_11574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_11560 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11560[0] = state_machine__5942__auto__);
(statearr_11560[1] = 1);
return statearr_11560;
});
var state_machine__5942__auto____1 = (function (state_11539){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_11539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e11561){if((e11561 instanceof Object))
{var ex__5945__auto__ = e11561;var statearr_11562_11575 = state_11539;(statearr_11562_11575[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11576 = state_11539;
state_11539 = G__11576;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_11539){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_11539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_11563 = f__6012__auto__.call(null);(statearr_11563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___11564);
return statearr_11563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6011__auto___11711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_11681){var state_val_11682 = (state_11681[1]);if((state_val_11682 === 1))
{var inst_11644 = (new Array(n));var inst_11645 = inst_11644;var inst_11646 = 0;var state_11681__$1 = (function (){var statearr_11683 = state_11681;(statearr_11683[7] = inst_11645);
(statearr_11683[8] = inst_11646);
return statearr_11683;
})();var statearr_11684_11712 = state_11681__$1;(statearr_11684_11712[2] = null);
(statearr_11684_11712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 2))
{var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11681__$1,4,ch);
} else
{if((state_val_11682 === 3))
{var inst_11679 = (state_11681[2]);var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11681__$1,inst_11679);
} else
{if((state_val_11682 === 4))
{var inst_11649 = (state_11681[9]);var inst_11649__$1 = (state_11681[2]);var inst_11650 = (inst_11649__$1 == null);var inst_11651 = cljs.core.not.call(null,inst_11650);var state_11681__$1 = (function (){var statearr_11685 = state_11681;(statearr_11685[9] = inst_11649__$1);
return statearr_11685;
})();if(inst_11651)
{var statearr_11686_11713 = state_11681__$1;(statearr_11686_11713[1] = 5);
} else
{var statearr_11687_11714 = state_11681__$1;(statearr_11687_11714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 5))
{var inst_11654 = (state_11681[10]);var inst_11645 = (state_11681[7]);var inst_11646 = (state_11681[8]);var inst_11649 = (state_11681[9]);var inst_11653 = (inst_11645[inst_11646] = inst_11649);var inst_11654__$1 = (inst_11646 + 1);var inst_11655 = (inst_11654__$1 < n);var state_11681__$1 = (function (){var statearr_11688 = state_11681;(statearr_11688[10] = inst_11654__$1);
(statearr_11688[11] = inst_11653);
return statearr_11688;
})();if(cljs.core.truth_(inst_11655))
{var statearr_11689_11715 = state_11681__$1;(statearr_11689_11715[1] = 8);
} else
{var statearr_11690_11716 = state_11681__$1;(statearr_11690_11716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 6))
{var inst_11646 = (state_11681[8]);var inst_11667 = (inst_11646 > 0);var state_11681__$1 = state_11681;if(cljs.core.truth_(inst_11667))
{var statearr_11692_11717 = state_11681__$1;(statearr_11692_11717[1] = 12);
} else
{var statearr_11693_11718 = state_11681__$1;(statearr_11693_11718[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 7))
{var inst_11677 = (state_11681[2]);var state_11681__$1 = state_11681;var statearr_11694_11719 = state_11681__$1;(statearr_11694_11719[2] = inst_11677);
(statearr_11694_11719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 8))
{var inst_11654 = (state_11681[10]);var inst_11645 = (state_11681[7]);var tmp11691 = inst_11645;var inst_11645__$1 = tmp11691;var inst_11646 = inst_11654;var state_11681__$1 = (function (){var statearr_11695 = state_11681;(statearr_11695[7] = inst_11645__$1);
(statearr_11695[8] = inst_11646);
return statearr_11695;
})();var statearr_11696_11720 = state_11681__$1;(statearr_11696_11720[2] = null);
(statearr_11696_11720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 9))
{var inst_11645 = (state_11681[7]);var inst_11659 = cljs.core.vec.call(null,inst_11645);var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11681__$1,11,out,inst_11659);
} else
{if((state_val_11682 === 10))
{var inst_11665 = (state_11681[2]);var state_11681__$1 = state_11681;var statearr_11697_11721 = state_11681__$1;(statearr_11697_11721[2] = inst_11665);
(statearr_11697_11721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 11))
{var inst_11661 = (state_11681[2]);var inst_11662 = (new Array(n));var inst_11645 = inst_11662;var inst_11646 = 0;var state_11681__$1 = (function (){var statearr_11698 = state_11681;(statearr_11698[12] = inst_11661);
(statearr_11698[7] = inst_11645);
(statearr_11698[8] = inst_11646);
return statearr_11698;
})();var statearr_11699_11722 = state_11681__$1;(statearr_11699_11722[2] = null);
(statearr_11699_11722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 12))
{var inst_11645 = (state_11681[7]);var inst_11669 = cljs.core.vec.call(null,inst_11645);var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11681__$1,15,out,inst_11669);
} else
{if((state_val_11682 === 13))
{var state_11681__$1 = state_11681;var statearr_11700_11723 = state_11681__$1;(statearr_11700_11723[2] = null);
(statearr_11700_11723[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 14))
{var inst_11674 = (state_11681[2]);var inst_11675 = cljs.core.async.close_BANG_.call(null,out);var state_11681__$1 = (function (){var statearr_11701 = state_11681;(statearr_11701[13] = inst_11674);
return statearr_11701;
})();var statearr_11702_11724 = state_11681__$1;(statearr_11702_11724[2] = inst_11675);
(statearr_11702_11724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11682 === 15))
{var inst_11671 = (state_11681[2]);var state_11681__$1 = state_11681;var statearr_11703_11725 = state_11681__$1;(statearr_11703_11725[2] = inst_11671);
(statearr_11703_11725[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_11707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11707[0] = state_machine__5942__auto__);
(statearr_11707[1] = 1);
return statearr_11707;
});
var state_machine__5942__auto____1 = (function (state_11681){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_11681);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e11708){if((e11708 instanceof Object))
{var ex__5945__auto__ = e11708;var statearr_11709_11726 = state_11681;(statearr_11709_11726[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11727 = state_11681;
state_11681 = G__11727;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_11681){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_11681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_11710 = f__6012__auto__.call(null);(statearr_11710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___11711);
return statearr_11710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6011__auto___11870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6012__auto__ = (function (){var switch__5941__auto__ = (function (state_11840){var state_val_11841 = (state_11840[1]);if((state_val_11841 === 1))
{var inst_11799 = [];var inst_11800 = inst_11799;var inst_11801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11840__$1 = (function (){var statearr_11842 = state_11840;(statearr_11842[7] = inst_11800);
(statearr_11842[8] = inst_11801);
return statearr_11842;
})();var statearr_11843_11871 = state_11840__$1;(statearr_11843_11871[2] = null);
(statearr_11843_11871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 2))
{var state_11840__$1 = state_11840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11840__$1,4,ch);
} else
{if((state_val_11841 === 3))
{var inst_11838 = (state_11840[2]);var state_11840__$1 = state_11840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11840__$1,inst_11838);
} else
{if((state_val_11841 === 4))
{var inst_11804 = (state_11840[9]);var inst_11804__$1 = (state_11840[2]);var inst_11805 = (inst_11804__$1 == null);var inst_11806 = cljs.core.not.call(null,inst_11805);var state_11840__$1 = (function (){var statearr_11844 = state_11840;(statearr_11844[9] = inst_11804__$1);
return statearr_11844;
})();if(inst_11806)
{var statearr_11845_11872 = state_11840__$1;(statearr_11845_11872[1] = 5);
} else
{var statearr_11846_11873 = state_11840__$1;(statearr_11846_11873[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 5))
{var inst_11801 = (state_11840[8]);var inst_11804 = (state_11840[9]);var inst_11808 = (state_11840[10]);var inst_11808__$1 = f.call(null,inst_11804);var inst_11809 = cljs.core._EQ_.call(null,inst_11808__$1,inst_11801);var inst_11810 = cljs.core.keyword_identical_QMARK_.call(null,inst_11801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11811 = (inst_11809) || (inst_11810);var state_11840__$1 = (function (){var statearr_11847 = state_11840;(statearr_11847[10] = inst_11808__$1);
return statearr_11847;
})();if(cljs.core.truth_(inst_11811))
{var statearr_11848_11874 = state_11840__$1;(statearr_11848_11874[1] = 8);
} else
{var statearr_11849_11875 = state_11840__$1;(statearr_11849_11875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 6))
{var inst_11800 = (state_11840[7]);var inst_11825 = inst_11800.length;var inst_11826 = (inst_11825 > 0);var state_11840__$1 = state_11840;if(cljs.core.truth_(inst_11826))
{var statearr_11851_11876 = state_11840__$1;(statearr_11851_11876[1] = 12);
} else
{var statearr_11852_11877 = state_11840__$1;(statearr_11852_11877[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 7))
{var inst_11836 = (state_11840[2]);var state_11840__$1 = state_11840;var statearr_11853_11878 = state_11840__$1;(statearr_11853_11878[2] = inst_11836);
(statearr_11853_11878[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 8))
{var inst_11800 = (state_11840[7]);var inst_11804 = (state_11840[9]);var inst_11808 = (state_11840[10]);var inst_11813 = inst_11800.push(inst_11804);var tmp11850 = inst_11800;var inst_11800__$1 = tmp11850;var inst_11801 = inst_11808;var state_11840__$1 = (function (){var statearr_11854 = state_11840;(statearr_11854[7] = inst_11800__$1);
(statearr_11854[8] = inst_11801);
(statearr_11854[11] = inst_11813);
return statearr_11854;
})();var statearr_11855_11879 = state_11840__$1;(statearr_11855_11879[2] = null);
(statearr_11855_11879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 9))
{var inst_11800 = (state_11840[7]);var inst_11816 = cljs.core.vec.call(null,inst_11800);var state_11840__$1 = state_11840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11840__$1,11,out,inst_11816);
} else
{if((state_val_11841 === 10))
{var inst_11823 = (state_11840[2]);var state_11840__$1 = state_11840;var statearr_11856_11880 = state_11840__$1;(statearr_11856_11880[2] = inst_11823);
(statearr_11856_11880[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 11))
{var inst_11804 = (state_11840[9]);var inst_11808 = (state_11840[10]);var inst_11818 = (state_11840[2]);var inst_11819 = [];var inst_11820 = inst_11819.push(inst_11804);var inst_11800 = inst_11819;var inst_11801 = inst_11808;var state_11840__$1 = (function (){var statearr_11857 = state_11840;(statearr_11857[7] = inst_11800);
(statearr_11857[8] = inst_11801);
(statearr_11857[12] = inst_11818);
(statearr_11857[13] = inst_11820);
return statearr_11857;
})();var statearr_11858_11881 = state_11840__$1;(statearr_11858_11881[2] = null);
(statearr_11858_11881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 12))
{var inst_11800 = (state_11840[7]);var inst_11828 = cljs.core.vec.call(null,inst_11800);var state_11840__$1 = state_11840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11840__$1,15,out,inst_11828);
} else
{if((state_val_11841 === 13))
{var state_11840__$1 = state_11840;var statearr_11859_11882 = state_11840__$1;(statearr_11859_11882[2] = null);
(statearr_11859_11882[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 14))
{var inst_11833 = (state_11840[2]);var inst_11834 = cljs.core.async.close_BANG_.call(null,out);var state_11840__$1 = (function (){var statearr_11860 = state_11840;(statearr_11860[14] = inst_11833);
return statearr_11860;
})();var statearr_11861_11883 = state_11840__$1;(statearr_11861_11883[2] = inst_11834);
(statearr_11861_11883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11841 === 15))
{var inst_11830 = (state_11840[2]);var state_11840__$1 = state_11840;var statearr_11862_11884 = state_11840__$1;(statearr_11862_11884[2] = inst_11830);
(statearr_11862_11884[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5941__auto__){
return (function() {
var state_machine__5942__auto__ = null;
var state_machine__5942__auto____0 = (function (){var statearr_11866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11866[0] = state_machine__5942__auto__);
(statearr_11866[1] = 1);
return statearr_11866;
});
var state_machine__5942__auto____1 = (function (state_11840){while(true){
var ret_value__5943__auto__ = (function (){try{while(true){
var result__5944__auto__ = switch__5941__auto__.call(null,state_11840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5944__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5944__auto__;
}
break;
}
}catch (e11867){if((e11867 instanceof Object))
{var ex__5945__auto__ = e11867;var statearr_11868_11885 = state_11840;(statearr_11868_11885[5] = ex__5945__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5943__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11886 = state_11840;
state_11840 = G__11886;
continue;
}
} else
{return ret_value__5943__auto__;
}
break;
}
});
state_machine__5942__auto__ = function(state_11840){
switch(arguments.length){
case 0:
return state_machine__5942__auto____0.call(this);
case 1:
return state_machine__5942__auto____1.call(this,state_11840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5942__auto____0;
state_machine__5942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5942__auto____1;
return state_machine__5942__auto__;
})()
;})(switch__5941__auto__))
})();var state__6013__auto__ = (function (){var statearr_11869 = f__6012__auto__.call(null);(statearr_11869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6011__auto___11870);
return statearr_11869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6013__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map