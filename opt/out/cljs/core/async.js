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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9534 = (function (f,fn_handler,meta9535){
this.f = f;
this.fn_handler = fn_handler;
this.meta9535 = meta9535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9534.cljs$lang$type = true;
cljs.core.async.t9534.cljs$lang$ctorStr = "cljs.core.async/t9534";
cljs.core.async.t9534.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9534");
});
cljs.core.async.t9534.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9536){var self__ = this;
var _9536__$1 = this;return self__.meta9535;
});
cljs.core.async.t9534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9536,meta9535__$1){var self__ = this;
var _9536__$1 = this;return (new cljs.core.async.t9534(self__.f,self__.fn_handler,meta9535__$1));
});
cljs.core.async.__GT_t9534 = (function __GT_t9534(f__$1,fn_handler__$1,meta9535){return (new cljs.core.async.t9534(f__$1,fn_handler__$1,meta9535));
});
}
return (new cljs.core.async.t9534(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9538 = buff;if(G__9538)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__9538.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9538.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9538);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9538);
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
{var val_9539 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9539);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9539);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___9540 = n;var x_9541 = 0;while(true){
if((x_9541 < n__4248__auto___9540))
{(a[x_9541] = 0);
{
var G__9542 = (x_9541 + 1);
x_9541 = G__9542;
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
var G__9543 = (i + 1);
i = G__9543;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9547 = (function (flag,alt_flag,meta9548){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9548 = meta9548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9547.cljs$lang$type = true;
cljs.core.async.t9547.cljs$lang$ctorStr = "cljs.core.async/t9547";
cljs.core.async.t9547.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9547");
});
cljs.core.async.t9547.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9549){var self__ = this;
var _9549__$1 = this;return self__.meta9548;
});
cljs.core.async.t9547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9549,meta9548__$1){var self__ = this;
var _9549__$1 = this;return (new cljs.core.async.t9547(self__.flag,self__.alt_flag,meta9548__$1));
});
cljs.core.async.__GT_t9547 = (function __GT_t9547(flag__$1,alt_flag__$1,meta9548){return (new cljs.core.async.t9547(flag__$1,alt_flag__$1,meta9548));
});
}
return (new cljs.core.async.t9547(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9553 = (function (cb,flag,alt_handler,meta9554){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9554 = meta9554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9553.cljs$lang$type = true;
cljs.core.async.t9553.cljs$lang$ctorStr = "cljs.core.async/t9553";
cljs.core.async.t9553.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9553");
});
cljs.core.async.t9553.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9555){var self__ = this;
var _9555__$1 = this;return self__.meta9554;
});
cljs.core.async.t9553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9555,meta9554__$1){var self__ = this;
var _9555__$1 = this;return (new cljs.core.async.t9553(self__.cb,self__.flag,self__.alt_handler,meta9554__$1));
});
cljs.core.async.__GT_t9553 = (function __GT_t9553(cb__$1,flag__$1,alt_handler__$1,meta9554){return (new cljs.core.async.t9553(cb__$1,flag__$1,alt_handler__$1,meta9554));
});
}
return (new cljs.core.async.t9553(cb,flag,alt_handler,null));
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
return (function (p1__9556_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9556_SHARP_,port], null));
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
var G__9557 = (i + 1);
i = G__9557;
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
var alts_BANG___delegate = function (ports,p__9558){var map__9560 = p__9558;var map__9560__$1 = ((cljs.core.seq_QMARK_.call(null,map__9560))?cljs.core.apply.call(null,cljs.core.hash_map,map__9560):map__9560);var opts = map__9560__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9558 = null;if (arguments.length > 1) {
  p__9558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9558);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9561){
var ports = cljs.core.first(arglist__9561);
var p__9558 = cljs.core.rest(arglist__9561);
return alts_BANG___delegate(ports,p__9558);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9569 = (function (ch,f,map_LT_,meta9570){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9570 = meta9570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9569.cljs$lang$type = true;
cljs.core.async.t9569.cljs$lang$ctorStr = "cljs.core.async/t9569";
cljs.core.async.t9569.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9569");
});
cljs.core.async.t9569.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9569.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9572 = (function (fn1,_,meta9570,ch,f,map_LT_,meta9573){
this.fn1 = fn1;
this._ = _;
this.meta9570 = meta9570;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9573 = meta9573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9572.cljs$lang$type = true;
cljs.core.async.t9572.cljs$lang$ctorStr = "cljs.core.async/t9572";
cljs.core.async.t9572.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9572");
});
cljs.core.async.t9572.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9572.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9562_SHARP_){return f1.call(null,(((p1__9562_SHARP_ == null))?null:self__.f.call(null,p1__9562_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9574){var self__ = this;
var _9574__$1 = this;return self__.meta9573;
});
cljs.core.async.t9572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9574,meta9573__$1){var self__ = this;
var _9574__$1 = this;return (new cljs.core.async.t9572(self__.fn1,self__._,self__.meta9570,self__.ch,self__.f,self__.map_LT_,meta9573__$1));
});
cljs.core.async.__GT_t9572 = (function __GT_t9572(fn1__$1,___$2,meta9570__$1,ch__$2,f__$2,map_LT___$2,meta9573){return (new cljs.core.async.t9572(fn1__$1,___$2,meta9570__$1,ch__$2,f__$2,map_LT___$2,meta9573));
});
}
return (new cljs.core.async.t9572(fn1,___$1,self__.meta9570,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9569.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9571){var self__ = this;
var _9571__$1 = this;return self__.meta9570;
});
cljs.core.async.t9569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9571,meta9570__$1){var self__ = this;
var _9571__$1 = this;return (new cljs.core.async.t9569(self__.ch,self__.f,self__.map_LT_,meta9570__$1));
});
cljs.core.async.__GT_t9569 = (function __GT_t9569(ch__$1,f__$1,map_LT___$1,meta9570){return (new cljs.core.async.t9569(ch__$1,f__$1,map_LT___$1,meta9570));
});
}
return (new cljs.core.async.t9569(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9578 = (function (ch,f,map_GT_,meta9579){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9579 = meta9579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9578.cljs$lang$type = true;
cljs.core.async.t9578.cljs$lang$ctorStr = "cljs.core.async/t9578";
cljs.core.async.t9578.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9578");
});
cljs.core.async.t9578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9578.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9580){var self__ = this;
var _9580__$1 = this;return self__.meta9579;
});
cljs.core.async.t9578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9580,meta9579__$1){var self__ = this;
var _9580__$1 = this;return (new cljs.core.async.t9578(self__.ch,self__.f,self__.map_GT_,meta9579__$1));
});
cljs.core.async.__GT_t9578 = (function __GT_t9578(ch__$1,f__$1,map_GT___$1,meta9579){return (new cljs.core.async.t9578(ch__$1,f__$1,map_GT___$1,meta9579));
});
}
return (new cljs.core.async.t9578(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9584 = (function (ch,p,filter_GT_,meta9585){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9585 = meta9585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9584.cljs$lang$type = true;
cljs.core.async.t9584.cljs$lang$ctorStr = "cljs.core.async/t9584";
cljs.core.async.t9584.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9584");
});
cljs.core.async.t9584.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9584.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9584.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9586){var self__ = this;
var _9586__$1 = this;return self__.meta9585;
});
cljs.core.async.t9584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9586,meta9585__$1){var self__ = this;
var _9586__$1 = this;return (new cljs.core.async.t9584(self__.ch,self__.p,self__.filter_GT_,meta9585__$1));
});
cljs.core.async.__GT_t9584 = (function __GT_t9584(ch__$1,p__$1,filter_GT___$1,meta9585){return (new cljs.core.async.t9584(ch__$1,p__$1,filter_GT___$1,meta9585));
});
}
return (new cljs.core.async.t9584(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___9669 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9648){var state_val_9649 = (state_9648[1]);if((state_val_9649 === 1))
{var state_9648__$1 = state_9648;var statearr_9650_9670 = state_9648__$1;(statearr_9650_9670[2] = null);
(statearr_9650_9670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9649 === 2))
{var state_9648__$1 = state_9648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9648__$1,4,ch);
} else
{if((state_val_9649 === 3))
{var inst_9646 = (state_9648[2]);var state_9648__$1 = state_9648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9648__$1,inst_9646);
} else
{if((state_val_9649 === 4))
{var inst_9630 = (state_9648[7]);var inst_9630__$1 = (state_9648[2]);var inst_9631 = (inst_9630__$1 == null);var state_9648__$1 = (function (){var statearr_9651 = state_9648;(statearr_9651[7] = inst_9630__$1);
return statearr_9651;
})();if(cljs.core.truth_(inst_9631))
{var statearr_9652_9671 = state_9648__$1;(statearr_9652_9671[1] = 5);
} else
{var statearr_9653_9672 = state_9648__$1;(statearr_9653_9672[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9649 === 5))
{var inst_9633 = cljs.core.async.close_BANG_.call(null,out);var state_9648__$1 = state_9648;var statearr_9654_9673 = state_9648__$1;(statearr_9654_9673[2] = inst_9633);
(statearr_9654_9673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9649 === 6))
{var inst_9630 = (state_9648[7]);var inst_9635 = p.call(null,inst_9630);var state_9648__$1 = state_9648;if(cljs.core.truth_(inst_9635))
{var statearr_9655_9674 = state_9648__$1;(statearr_9655_9674[1] = 8);
} else
{var statearr_9656_9675 = state_9648__$1;(statearr_9656_9675[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9649 === 7))
{var inst_9644 = (state_9648[2]);var state_9648__$1 = state_9648;var statearr_9657_9676 = state_9648__$1;(statearr_9657_9676[2] = inst_9644);
(statearr_9657_9676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9649 === 8))
{var inst_9630 = (state_9648[7]);var state_9648__$1 = state_9648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9648__$1,11,out,inst_9630);
} else
{if((state_val_9649 === 9))
{var state_9648__$1 = state_9648;var statearr_9658_9677 = state_9648__$1;(statearr_9658_9677[2] = null);
(statearr_9658_9677[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9649 === 10))
{var inst_9641 = (state_9648[2]);var state_9648__$1 = (function (){var statearr_9659 = state_9648;(statearr_9659[8] = inst_9641);
return statearr_9659;
})();var statearr_9660_9678 = state_9648__$1;(statearr_9660_9678[2] = null);
(statearr_9660_9678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9649 === 11))
{var inst_9638 = (state_9648[2]);var state_9648__$1 = state_9648;var statearr_9661_9679 = state_9648__$1;(statearr_9661_9679[2] = inst_9638);
(statearr_9661_9679[1] = 10);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_9665 = [null,null,null,null,null,null,null,null,null];(statearr_9665[0] = state_machine__5507__auto__);
(statearr_9665[1] = 1);
return statearr_9665;
});
var state_machine__5507__auto____1 = (function (state_9648){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9648);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9666){if((e9666 instanceof Object))
{var ex__5510__auto__ = e9666;var statearr_9667_9680 = state_9648;(statearr_9667_9680[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9681 = state_9648;
state_9648 = G__9681;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9648){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9668 = f__5522__auto__.call(null);(statearr_9668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___9669);
return statearr_9668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9833){var state_val_9834 = (state_9833[1]);if((state_val_9834 === 1))
{var state_9833__$1 = state_9833;var statearr_9835_9872 = state_9833__$1;(statearr_9835_9872[2] = null);
(statearr_9835_9872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 2))
{var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9833__$1,4,in$);
} else
{if((state_val_9834 === 3))
{var inst_9831 = (state_9833[2]);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9833__$1,inst_9831);
} else
{if((state_val_9834 === 4))
{var inst_9779 = (state_9833[7]);var inst_9779__$1 = (state_9833[2]);var inst_9780 = (inst_9779__$1 == null);var state_9833__$1 = (function (){var statearr_9836 = state_9833;(statearr_9836[7] = inst_9779__$1);
return statearr_9836;
})();if(cljs.core.truth_(inst_9780))
{var statearr_9837_9873 = state_9833__$1;(statearr_9837_9873[1] = 5);
} else
{var statearr_9838_9874 = state_9833__$1;(statearr_9838_9874[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 5))
{var inst_9782 = cljs.core.async.close_BANG_.call(null,out);var state_9833__$1 = state_9833;var statearr_9839_9875 = state_9833__$1;(statearr_9839_9875[2] = inst_9782);
(statearr_9839_9875[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 6))
{var inst_9779 = (state_9833[7]);var inst_9784 = f.call(null,inst_9779);var inst_9789 = cljs.core.seq.call(null,inst_9784);var inst_9790 = inst_9789;var inst_9791 = null;var inst_9792 = 0;var inst_9793 = 0;var state_9833__$1 = (function (){var statearr_9840 = state_9833;(statearr_9840[8] = inst_9793);
(statearr_9840[9] = inst_9792);
(statearr_9840[10] = inst_9790);
(statearr_9840[11] = inst_9791);
return statearr_9840;
})();var statearr_9841_9876 = state_9833__$1;(statearr_9841_9876[2] = null);
(statearr_9841_9876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 7))
{var inst_9829 = (state_9833[2]);var state_9833__$1 = state_9833;var statearr_9842_9877 = state_9833__$1;(statearr_9842_9877[2] = inst_9829);
(statearr_9842_9877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 8))
{var inst_9793 = (state_9833[8]);var inst_9792 = (state_9833[9]);var inst_9795 = (inst_9793 < inst_9792);var inst_9796 = inst_9795;var state_9833__$1 = state_9833;if(cljs.core.truth_(inst_9796))
{var statearr_9843_9878 = state_9833__$1;(statearr_9843_9878[1] = 10);
} else
{var statearr_9844_9879 = state_9833__$1;(statearr_9844_9879[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 9))
{var inst_9826 = (state_9833[2]);var state_9833__$1 = (function (){var statearr_9845 = state_9833;(statearr_9845[12] = inst_9826);
return statearr_9845;
})();var statearr_9846_9880 = state_9833__$1;(statearr_9846_9880[2] = null);
(statearr_9846_9880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 10))
{var inst_9793 = (state_9833[8]);var inst_9791 = (state_9833[11]);var inst_9798 = cljs.core._nth.call(null,inst_9791,inst_9793);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9833__$1,13,out,inst_9798);
} else
{if((state_val_9834 === 11))
{var inst_9790 = (state_9833[10]);var inst_9804 = (state_9833[13]);var inst_9804__$1 = cljs.core.seq.call(null,inst_9790);var state_9833__$1 = (function (){var statearr_9850 = state_9833;(statearr_9850[13] = inst_9804__$1);
return statearr_9850;
})();if(inst_9804__$1)
{var statearr_9851_9881 = state_9833__$1;(statearr_9851_9881[1] = 14);
} else
{var statearr_9852_9882 = state_9833__$1;(statearr_9852_9882[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 12))
{var inst_9824 = (state_9833[2]);var state_9833__$1 = state_9833;var statearr_9853_9883 = state_9833__$1;(statearr_9853_9883[2] = inst_9824);
(statearr_9853_9883[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 13))
{var inst_9793 = (state_9833[8]);var inst_9792 = (state_9833[9]);var inst_9790 = (state_9833[10]);var inst_9791 = (state_9833[11]);var inst_9800 = (state_9833[2]);var inst_9801 = (inst_9793 + 1);var tmp9847 = inst_9792;var tmp9848 = inst_9790;var tmp9849 = inst_9791;var inst_9790__$1 = tmp9848;var inst_9791__$1 = tmp9849;var inst_9792__$1 = tmp9847;var inst_9793__$1 = inst_9801;var state_9833__$1 = (function (){var statearr_9854 = state_9833;(statearr_9854[8] = inst_9793__$1);
(statearr_9854[9] = inst_9792__$1);
(statearr_9854[10] = inst_9790__$1);
(statearr_9854[11] = inst_9791__$1);
(statearr_9854[14] = inst_9800);
return statearr_9854;
})();var statearr_9855_9884 = state_9833__$1;(statearr_9855_9884[2] = null);
(statearr_9855_9884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 14))
{var inst_9804 = (state_9833[13]);var inst_9806 = cljs.core.chunked_seq_QMARK_.call(null,inst_9804);var state_9833__$1 = state_9833;if(inst_9806)
{var statearr_9856_9885 = state_9833__$1;(statearr_9856_9885[1] = 17);
} else
{var statearr_9857_9886 = state_9833__$1;(statearr_9857_9886[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 15))
{var state_9833__$1 = state_9833;var statearr_9858_9887 = state_9833__$1;(statearr_9858_9887[2] = null);
(statearr_9858_9887[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 16))
{var inst_9822 = (state_9833[2]);var state_9833__$1 = state_9833;var statearr_9859_9888 = state_9833__$1;(statearr_9859_9888[2] = inst_9822);
(statearr_9859_9888[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 17))
{var inst_9804 = (state_9833[13]);var inst_9808 = cljs.core.chunk_first.call(null,inst_9804);var inst_9809 = cljs.core.chunk_rest.call(null,inst_9804);var inst_9810 = cljs.core.count.call(null,inst_9808);var inst_9790 = inst_9809;var inst_9791 = inst_9808;var inst_9792 = inst_9810;var inst_9793 = 0;var state_9833__$1 = (function (){var statearr_9860 = state_9833;(statearr_9860[8] = inst_9793);
(statearr_9860[9] = inst_9792);
(statearr_9860[10] = inst_9790);
(statearr_9860[11] = inst_9791);
return statearr_9860;
})();var statearr_9861_9889 = state_9833__$1;(statearr_9861_9889[2] = null);
(statearr_9861_9889[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 18))
{var inst_9804 = (state_9833[13]);var inst_9813 = cljs.core.first.call(null,inst_9804);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9833__$1,20,out,inst_9813);
} else
{if((state_val_9834 === 19))
{var inst_9819 = (state_9833[2]);var state_9833__$1 = state_9833;var statearr_9862_9890 = state_9833__$1;(statearr_9862_9890[2] = inst_9819);
(statearr_9862_9890[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 20))
{var inst_9804 = (state_9833[13]);var inst_9815 = (state_9833[2]);var inst_9816 = cljs.core.next.call(null,inst_9804);var inst_9790 = inst_9816;var inst_9791 = null;var inst_9792 = 0;var inst_9793 = 0;var state_9833__$1 = (function (){var statearr_9863 = state_9833;(statearr_9863[8] = inst_9793);
(statearr_9863[15] = inst_9815);
(statearr_9863[9] = inst_9792);
(statearr_9863[10] = inst_9790);
(statearr_9863[11] = inst_9791);
return statearr_9863;
})();var statearr_9864_9891 = state_9833__$1;(statearr_9864_9891[2] = null);
(statearr_9864_9891[1] = 8);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_9868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9868[0] = state_machine__5507__auto__);
(statearr_9868[1] = 1);
return statearr_9868;
});
var state_machine__5507__auto____1 = (function (state_9833){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9869){if((e9869 instanceof Object))
{var ex__5510__auto__ = e9869;var statearr_9870_9892 = state_9833;(statearr_9870_9892[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9893 = state_9833;
state_9833 = G__9893;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9833){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9871 = f__5522__auto__.call(null);(statearr_9871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_9871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___9974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9953){var state_val_9954 = (state_9953[1]);if((state_val_9954 === 1))
{var state_9953__$1 = state_9953;var statearr_9955_9975 = state_9953__$1;(statearr_9955_9975[2] = null);
(statearr_9955_9975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9954 === 2))
{var state_9953__$1 = state_9953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9953__$1,4,from);
} else
{if((state_val_9954 === 3))
{var inst_9951 = (state_9953[2]);var state_9953__$1 = state_9953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9953__$1,inst_9951);
} else
{if((state_val_9954 === 4))
{var inst_9936 = (state_9953[7]);var inst_9936__$1 = (state_9953[2]);var inst_9937 = (inst_9936__$1 == null);var state_9953__$1 = (function (){var statearr_9956 = state_9953;(statearr_9956[7] = inst_9936__$1);
return statearr_9956;
})();if(cljs.core.truth_(inst_9937))
{var statearr_9957_9976 = state_9953__$1;(statearr_9957_9976[1] = 5);
} else
{var statearr_9958_9977 = state_9953__$1;(statearr_9958_9977[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9954 === 5))
{var state_9953__$1 = state_9953;if(cljs.core.truth_(close_QMARK_))
{var statearr_9959_9978 = state_9953__$1;(statearr_9959_9978[1] = 8);
} else
{var statearr_9960_9979 = state_9953__$1;(statearr_9960_9979[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9954 === 6))
{var inst_9936 = (state_9953[7]);var state_9953__$1 = state_9953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9953__$1,11,to,inst_9936);
} else
{if((state_val_9954 === 7))
{var inst_9949 = (state_9953[2]);var state_9953__$1 = state_9953;var statearr_9961_9980 = state_9953__$1;(statearr_9961_9980[2] = inst_9949);
(statearr_9961_9980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9954 === 8))
{var inst_9940 = cljs.core.async.close_BANG_.call(null,to);var state_9953__$1 = state_9953;var statearr_9962_9981 = state_9953__$1;(statearr_9962_9981[2] = inst_9940);
(statearr_9962_9981[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9954 === 9))
{var state_9953__$1 = state_9953;var statearr_9963_9982 = state_9953__$1;(statearr_9963_9982[2] = null);
(statearr_9963_9982[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9954 === 10))
{var inst_9943 = (state_9953[2]);var state_9953__$1 = state_9953;var statearr_9964_9983 = state_9953__$1;(statearr_9964_9983[2] = inst_9943);
(statearr_9964_9983[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9954 === 11))
{var inst_9946 = (state_9953[2]);var state_9953__$1 = (function (){var statearr_9965 = state_9953;(statearr_9965[8] = inst_9946);
return statearr_9965;
})();var statearr_9966_9984 = state_9953__$1;(statearr_9966_9984[2] = null);
(statearr_9966_9984[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_9970 = [null,null,null,null,null,null,null,null,null];(statearr_9970[0] = state_machine__5507__auto__);
(statearr_9970[1] = 1);
return statearr_9970;
});
var state_machine__5507__auto____1 = (function (state_9953){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9971){if((e9971 instanceof Object))
{var ex__5510__auto__ = e9971;var statearr_9972_9985 = state_9953;(statearr_9972_9985[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9986 = state_9953;
state_9953 = G__9986;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9953){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9973 = f__5522__auto__.call(null);(statearr_9973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___9974);
return statearr_9973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___10073 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10051){var state_val_10052 = (state_10051[1]);if((state_val_10052 === 1))
{var state_10051__$1 = state_10051;var statearr_10053_10074 = state_10051__$1;(statearr_10053_10074[2] = null);
(statearr_10053_10074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 2))
{var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10051__$1,4,ch);
} else
{if((state_val_10052 === 3))
{var inst_10049 = (state_10051[2]);var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10051__$1,inst_10049);
} else
{if((state_val_10052 === 4))
{var inst_10032 = (state_10051[7]);var inst_10032__$1 = (state_10051[2]);var inst_10033 = (inst_10032__$1 == null);var state_10051__$1 = (function (){var statearr_10054 = state_10051;(statearr_10054[7] = inst_10032__$1);
return statearr_10054;
})();if(cljs.core.truth_(inst_10033))
{var statearr_10055_10075 = state_10051__$1;(statearr_10055_10075[1] = 5);
} else
{var statearr_10056_10076 = state_10051__$1;(statearr_10056_10076[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 5))
{var inst_10035 = cljs.core.async.close_BANG_.call(null,tc);var inst_10036 = cljs.core.async.close_BANG_.call(null,fc);var state_10051__$1 = (function (){var statearr_10057 = state_10051;(statearr_10057[8] = inst_10035);
return statearr_10057;
})();var statearr_10058_10077 = state_10051__$1;(statearr_10058_10077[2] = inst_10036);
(statearr_10058_10077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 6))
{var inst_10032 = (state_10051[7]);var inst_10038 = p.call(null,inst_10032);var state_10051__$1 = state_10051;if(cljs.core.truth_(inst_10038))
{var statearr_10059_10078 = state_10051__$1;(statearr_10059_10078[1] = 9);
} else
{var statearr_10060_10079 = state_10051__$1;(statearr_10060_10079[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 7))
{var inst_10047 = (state_10051[2]);var state_10051__$1 = state_10051;var statearr_10061_10080 = state_10051__$1;(statearr_10061_10080[2] = inst_10047);
(statearr_10061_10080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 8))
{var inst_10044 = (state_10051[2]);var state_10051__$1 = (function (){var statearr_10062 = state_10051;(statearr_10062[9] = inst_10044);
return statearr_10062;
})();var statearr_10063_10081 = state_10051__$1;(statearr_10063_10081[2] = null);
(statearr_10063_10081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 9))
{var state_10051__$1 = state_10051;var statearr_10064_10082 = state_10051__$1;(statearr_10064_10082[2] = tc);
(statearr_10064_10082[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 10))
{var state_10051__$1 = state_10051;var statearr_10065_10083 = state_10051__$1;(statearr_10065_10083[2] = fc);
(statearr_10065_10083[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10052 === 11))
{var inst_10032 = (state_10051[7]);var inst_10042 = (state_10051[2]);var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10051__$1,8,inst_10042,inst_10032);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10069 = [null,null,null,null,null,null,null,null,null,null];(statearr_10069[0] = state_machine__5507__auto__);
(statearr_10069[1] = 1);
return statearr_10069;
});
var state_machine__5507__auto____1 = (function (state_10051){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10070){if((e10070 instanceof Object))
{var ex__5510__auto__ = e10070;var statearr_10071_10084 = state_10051;(statearr_10071_10084[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10085 = state_10051;
state_10051 = G__10085;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10051){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10072 = f__5522__auto__.call(null);(statearr_10072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10073);
return statearr_10072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10132){var state_val_10133 = (state_10132[1]);if((state_val_10133 === 7))
{var inst_10128 = (state_10132[2]);var state_10132__$1 = state_10132;var statearr_10134_10150 = state_10132__$1;(statearr_10134_10150[2] = inst_10128);
(statearr_10134_10150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10133 === 6))
{var inst_10121 = (state_10132[7]);var inst_10118 = (state_10132[8]);var inst_10125 = f.call(null,inst_10118,inst_10121);var inst_10118__$1 = inst_10125;var state_10132__$1 = (function (){var statearr_10135 = state_10132;(statearr_10135[8] = inst_10118__$1);
return statearr_10135;
})();var statearr_10136_10151 = state_10132__$1;(statearr_10136_10151[2] = null);
(statearr_10136_10151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10133 === 5))
{var inst_10118 = (state_10132[8]);var state_10132__$1 = state_10132;var statearr_10137_10152 = state_10132__$1;(statearr_10137_10152[2] = inst_10118);
(statearr_10137_10152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10133 === 4))
{var inst_10121 = (state_10132[7]);var inst_10121__$1 = (state_10132[2]);var inst_10122 = (inst_10121__$1 == null);var state_10132__$1 = (function (){var statearr_10138 = state_10132;(statearr_10138[7] = inst_10121__$1);
return statearr_10138;
})();if(cljs.core.truth_(inst_10122))
{var statearr_10139_10153 = state_10132__$1;(statearr_10139_10153[1] = 5);
} else
{var statearr_10140_10154 = state_10132__$1;(statearr_10140_10154[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10133 === 3))
{var inst_10130 = (state_10132[2]);var state_10132__$1 = state_10132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10132__$1,inst_10130);
} else
{if((state_val_10133 === 2))
{var state_10132__$1 = state_10132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10132__$1,4,ch);
} else
{if((state_val_10133 === 1))
{var inst_10118 = init;var state_10132__$1 = (function (){var statearr_10141 = state_10132;(statearr_10141[8] = inst_10118);
return statearr_10141;
})();var statearr_10142_10155 = state_10132__$1;(statearr_10142_10155[2] = null);
(statearr_10142_10155[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10146 = [null,null,null,null,null,null,null,null,null];(statearr_10146[0] = state_machine__5507__auto__);
(statearr_10146[1] = 1);
return statearr_10146;
});
var state_machine__5507__auto____1 = (function (state_10132){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10132);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10147){if((e10147 instanceof Object))
{var ex__5510__auto__ = e10147;var statearr_10148_10156 = state_10132;(statearr_10148_10156[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10132);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10157 = state_10132;
state_10132 = G__10157;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10132){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10149 = f__5522__auto__.call(null);(statearr_10149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10219){var state_val_10220 = (state_10219[1]);if((state_val_10220 === 1))
{var inst_10199 = cljs.core.seq.call(null,coll);var inst_10200 = inst_10199;var state_10219__$1 = (function (){var statearr_10221 = state_10219;(statearr_10221[7] = inst_10200);
return statearr_10221;
})();var statearr_10222_10240 = state_10219__$1;(statearr_10222_10240[2] = null);
(statearr_10222_10240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10220 === 2))
{var inst_10200 = (state_10219[7]);var state_10219__$1 = state_10219;if(cljs.core.truth_(inst_10200))
{var statearr_10223_10241 = state_10219__$1;(statearr_10223_10241[1] = 4);
} else
{var statearr_10224_10242 = state_10219__$1;(statearr_10224_10242[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10220 === 3))
{var inst_10217 = (state_10219[2]);var state_10219__$1 = state_10219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10219__$1,inst_10217);
} else
{if((state_val_10220 === 4))
{var inst_10200 = (state_10219[7]);var inst_10203 = cljs.core.first.call(null,inst_10200);var state_10219__$1 = state_10219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10219__$1,7,ch,inst_10203);
} else
{if((state_val_10220 === 5))
{var state_10219__$1 = state_10219;if(cljs.core.truth_(close_QMARK_))
{var statearr_10225_10243 = state_10219__$1;(statearr_10225_10243[1] = 8);
} else
{var statearr_10226_10244 = state_10219__$1;(statearr_10226_10244[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10220 === 6))
{var inst_10215 = (state_10219[2]);var state_10219__$1 = state_10219;var statearr_10227_10245 = state_10219__$1;(statearr_10227_10245[2] = inst_10215);
(statearr_10227_10245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10220 === 7))
{var inst_10200 = (state_10219[7]);var inst_10205 = (state_10219[2]);var inst_10206 = cljs.core.next.call(null,inst_10200);var inst_10200__$1 = inst_10206;var state_10219__$1 = (function (){var statearr_10228 = state_10219;(statearr_10228[8] = inst_10205);
(statearr_10228[7] = inst_10200__$1);
return statearr_10228;
})();var statearr_10229_10246 = state_10219__$1;(statearr_10229_10246[2] = null);
(statearr_10229_10246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10220 === 8))
{var inst_10210 = cljs.core.async.close_BANG_.call(null,ch);var state_10219__$1 = state_10219;var statearr_10230_10247 = state_10219__$1;(statearr_10230_10247[2] = inst_10210);
(statearr_10230_10247[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10220 === 9))
{var state_10219__$1 = state_10219;var statearr_10231_10248 = state_10219__$1;(statearr_10231_10248[2] = null);
(statearr_10231_10248[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10220 === 10))
{var inst_10213 = (state_10219[2]);var state_10219__$1 = state_10219;var statearr_10232_10249 = state_10219__$1;(statearr_10232_10249[2] = inst_10213);
(statearr_10232_10249[1] = 6);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10236 = [null,null,null,null,null,null,null,null,null];(statearr_10236[0] = state_machine__5507__auto__);
(statearr_10236[1] = 1);
return statearr_10236;
});
var state_machine__5507__auto____1 = (function (state_10219){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10219);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10237){if((e10237 instanceof Object))
{var ex__5510__auto__ = e10237;var statearr_10238_10250 = state_10219;(statearr_10238_10250[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10219);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10251 = state_10219;
state_10219 = G__10251;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10219){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10239 = f__5522__auto__.call(null);(statearr_10239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.Mux = (function (){var obj10253 = {};return obj10253;
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
cljs.core.async.Mult = (function (){var obj10255 = {};return obj10255;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10479 = (function (cs,ch,mult,meta10480){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10480 = meta10480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10479.cljs$lang$type = true;
cljs.core.async.t10479.cljs$lang$ctorStr = "cljs.core.async/t10479";
cljs.core.async.t10479.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10479");
});})(cs))
;
cljs.core.async.t10479.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10479.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10479.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10479.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10479.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10481){var self__ = this;
var _10481__$1 = this;return self__.meta10480;
});})(cs))
;
cljs.core.async.t10479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10481,meta10480__$1){var self__ = this;
var _10481__$1 = this;return (new cljs.core.async.t10479(self__.cs,self__.ch,self__.mult,meta10480__$1));
});})(cs))
;
cljs.core.async.__GT_t10479 = ((function (cs){
return (function __GT_t10479(cs__$1,ch__$1,mult__$1,meta10480){return (new cljs.core.async.t10479(cs__$1,ch__$1,mult__$1,meta10480));
});})(cs))
;
}
return (new cljs.core.async.t10479(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___10702 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10616){var state_val_10617 = (state_10616[1]);if((state_val_10617 === 32))
{var inst_10560 = (state_10616[7]);var inst_10484 = (state_10616[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10616,31,Object,null,30);var inst_10567 = cljs.core.async.put_BANG_.call(null,inst_10560,inst_10484,done);var state_10616__$1 = state_10616;var statearr_10618_10703 = state_10616__$1;(statearr_10618_10703[2] = inst_10567);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10616__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 1))
{var state_10616__$1 = state_10616;var statearr_10619_10704 = state_10616__$1;(statearr_10619_10704[2] = null);
(statearr_10619_10704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 33))
{var inst_10573 = (state_10616[9]);var inst_10575 = cljs.core.chunked_seq_QMARK_.call(null,inst_10573);var state_10616__$1 = state_10616;if(inst_10575)
{var statearr_10620_10705 = state_10616__$1;(statearr_10620_10705[1] = 36);
} else
{var statearr_10621_10706 = state_10616__$1;(statearr_10621_10706[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 2))
{var state_10616__$1 = state_10616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10616__$1,4,ch);
} else
{if((state_val_10617 === 34))
{var state_10616__$1 = state_10616;var statearr_10622_10707 = state_10616__$1;(statearr_10622_10707[2] = null);
(statearr_10622_10707[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 3))
{var inst_10614 = (state_10616[2]);var state_10616__$1 = state_10616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10616__$1,inst_10614);
} else
{if((state_val_10617 === 35))
{var inst_10598 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10623_10708 = state_10616__$1;(statearr_10623_10708[2] = inst_10598);
(statearr_10623_10708[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 4))
{var inst_10484 = (state_10616[8]);var inst_10484__$1 = (state_10616[2]);var inst_10485 = (inst_10484__$1 == null);var state_10616__$1 = (function (){var statearr_10624 = state_10616;(statearr_10624[8] = inst_10484__$1);
return statearr_10624;
})();if(cljs.core.truth_(inst_10485))
{var statearr_10625_10709 = state_10616__$1;(statearr_10625_10709[1] = 5);
} else
{var statearr_10626_10710 = state_10616__$1;(statearr_10626_10710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 36))
{var inst_10573 = (state_10616[9]);var inst_10577 = cljs.core.chunk_first.call(null,inst_10573);var inst_10578 = cljs.core.chunk_rest.call(null,inst_10573);var inst_10579 = cljs.core.count.call(null,inst_10577);var inst_10552 = inst_10578;var inst_10553 = inst_10577;var inst_10554 = inst_10579;var inst_10555 = 0;var state_10616__$1 = (function (){var statearr_10627 = state_10616;(statearr_10627[10] = inst_10554);
(statearr_10627[11] = inst_10555);
(statearr_10627[12] = inst_10553);
(statearr_10627[13] = inst_10552);
return statearr_10627;
})();var statearr_10628_10711 = state_10616__$1;(statearr_10628_10711[2] = null);
(statearr_10628_10711[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 5))
{var inst_10491 = cljs.core.deref.call(null,cs);var inst_10492 = cljs.core.seq.call(null,inst_10491);var inst_10493 = inst_10492;var inst_10494 = null;var inst_10495 = 0;var inst_10496 = 0;var state_10616__$1 = (function (){var statearr_10629 = state_10616;(statearr_10629[14] = inst_10496);
(statearr_10629[15] = inst_10495);
(statearr_10629[16] = inst_10493);
(statearr_10629[17] = inst_10494);
return statearr_10629;
})();var statearr_10630_10712 = state_10616__$1;(statearr_10630_10712[2] = null);
(statearr_10630_10712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 37))
{var inst_10573 = (state_10616[9]);var inst_10582 = cljs.core.first.call(null,inst_10573);var state_10616__$1 = (function (){var statearr_10631 = state_10616;(statearr_10631[18] = inst_10582);
return statearr_10631;
})();var statearr_10632_10713 = state_10616__$1;(statearr_10632_10713[2] = null);
(statearr_10632_10713[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 6))
{var inst_10544 = (state_10616[19]);var inst_10543 = cljs.core.deref.call(null,cs);var inst_10544__$1 = cljs.core.keys.call(null,inst_10543);var inst_10545 = cljs.core.count.call(null,inst_10544__$1);var inst_10546 = cljs.core.reset_BANG_.call(null,dctr,inst_10545);var inst_10551 = cljs.core.seq.call(null,inst_10544__$1);var inst_10552 = inst_10551;var inst_10553 = null;var inst_10554 = 0;var inst_10555 = 0;var state_10616__$1 = (function (){var statearr_10633 = state_10616;(statearr_10633[10] = inst_10554);
(statearr_10633[11] = inst_10555);
(statearr_10633[12] = inst_10553);
(statearr_10633[19] = inst_10544__$1);
(statearr_10633[13] = inst_10552);
(statearr_10633[20] = inst_10546);
return statearr_10633;
})();var statearr_10634_10714 = state_10616__$1;(statearr_10634_10714[2] = null);
(statearr_10634_10714[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 38))
{var inst_10595 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10635_10715 = state_10616__$1;(statearr_10635_10715[2] = inst_10595);
(statearr_10635_10715[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 7))
{var inst_10612 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10636_10716 = state_10616__$1;(statearr_10636_10716[2] = inst_10612);
(statearr_10636_10716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 39))
{var inst_10573 = (state_10616[9]);var inst_10591 = (state_10616[2]);var inst_10592 = cljs.core.next.call(null,inst_10573);var inst_10552 = inst_10592;var inst_10553 = null;var inst_10554 = 0;var inst_10555 = 0;var state_10616__$1 = (function (){var statearr_10637 = state_10616;(statearr_10637[10] = inst_10554);
(statearr_10637[11] = inst_10555);
(statearr_10637[12] = inst_10553);
(statearr_10637[13] = inst_10552);
(statearr_10637[21] = inst_10591);
return statearr_10637;
})();var statearr_10638_10717 = state_10616__$1;(statearr_10638_10717[2] = null);
(statearr_10638_10717[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 8))
{var inst_10496 = (state_10616[14]);var inst_10495 = (state_10616[15]);var inst_10498 = (inst_10496 < inst_10495);var inst_10499 = inst_10498;var state_10616__$1 = state_10616;if(cljs.core.truth_(inst_10499))
{var statearr_10639_10718 = state_10616__$1;(statearr_10639_10718[1] = 10);
} else
{var statearr_10640_10719 = state_10616__$1;(statearr_10640_10719[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 40))
{var inst_10582 = (state_10616[18]);var inst_10583 = (state_10616[2]);var inst_10584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10585 = cljs.core.async.untap_STAR_.call(null,m,inst_10582);var state_10616__$1 = (function (){var statearr_10641 = state_10616;(statearr_10641[22] = inst_10584);
(statearr_10641[23] = inst_10583);
return statearr_10641;
})();var statearr_10642_10720 = state_10616__$1;(statearr_10642_10720[2] = inst_10585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10616__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 9))
{var inst_10541 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10643_10721 = state_10616__$1;(statearr_10643_10721[2] = inst_10541);
(statearr_10643_10721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 41))
{var inst_10484 = (state_10616[8]);var inst_10582 = (state_10616[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10616,40,Object,null,39);var inst_10589 = cljs.core.async.put_BANG_.call(null,inst_10582,inst_10484,done);var state_10616__$1 = state_10616;var statearr_10644_10722 = state_10616__$1;(statearr_10644_10722[2] = inst_10589);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10616__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 10))
{var inst_10496 = (state_10616[14]);var inst_10494 = (state_10616[17]);var inst_10502 = cljs.core._nth.call(null,inst_10494,inst_10496);var inst_10503 = cljs.core.nth.call(null,inst_10502,0,null);var inst_10504 = cljs.core.nth.call(null,inst_10502,1,null);var state_10616__$1 = (function (){var statearr_10645 = state_10616;(statearr_10645[24] = inst_10503);
return statearr_10645;
})();if(cljs.core.truth_(inst_10504))
{var statearr_10646_10723 = state_10616__$1;(statearr_10646_10723[1] = 13);
} else
{var statearr_10647_10724 = state_10616__$1;(statearr_10647_10724[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 42))
{var state_10616__$1 = state_10616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10616__$1,45,dchan);
} else
{if((state_val_10617 === 11))
{var inst_10493 = (state_10616[16]);var inst_10513 = (state_10616[25]);var inst_10513__$1 = cljs.core.seq.call(null,inst_10493);var state_10616__$1 = (function (){var statearr_10648 = state_10616;(statearr_10648[25] = inst_10513__$1);
return statearr_10648;
})();if(inst_10513__$1)
{var statearr_10649_10725 = state_10616__$1;(statearr_10649_10725[1] = 16);
} else
{var statearr_10650_10726 = state_10616__$1;(statearr_10650_10726[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 43))
{var state_10616__$1 = state_10616;var statearr_10651_10727 = state_10616__$1;(statearr_10651_10727[2] = null);
(statearr_10651_10727[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 12))
{var inst_10539 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10652_10728 = state_10616__$1;(statearr_10652_10728[2] = inst_10539);
(statearr_10652_10728[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 44))
{var inst_10609 = (state_10616[2]);var state_10616__$1 = (function (){var statearr_10653 = state_10616;(statearr_10653[26] = inst_10609);
return statearr_10653;
})();var statearr_10654_10729 = state_10616__$1;(statearr_10654_10729[2] = null);
(statearr_10654_10729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 13))
{var inst_10503 = (state_10616[24]);var inst_10506 = cljs.core.async.close_BANG_.call(null,inst_10503);var state_10616__$1 = state_10616;var statearr_10655_10730 = state_10616__$1;(statearr_10655_10730[2] = inst_10506);
(statearr_10655_10730[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 45))
{var inst_10606 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10659_10731 = state_10616__$1;(statearr_10659_10731[2] = inst_10606);
(statearr_10659_10731[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 14))
{var state_10616__$1 = state_10616;var statearr_10660_10732 = state_10616__$1;(statearr_10660_10732[2] = null);
(statearr_10660_10732[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 15))
{var inst_10496 = (state_10616[14]);var inst_10495 = (state_10616[15]);var inst_10493 = (state_10616[16]);var inst_10494 = (state_10616[17]);var inst_10509 = (state_10616[2]);var inst_10510 = (inst_10496 + 1);var tmp10656 = inst_10495;var tmp10657 = inst_10493;var tmp10658 = inst_10494;var inst_10493__$1 = tmp10657;var inst_10494__$1 = tmp10658;var inst_10495__$1 = tmp10656;var inst_10496__$1 = inst_10510;var state_10616__$1 = (function (){var statearr_10661 = state_10616;(statearr_10661[14] = inst_10496__$1);
(statearr_10661[15] = inst_10495__$1);
(statearr_10661[16] = inst_10493__$1);
(statearr_10661[17] = inst_10494__$1);
(statearr_10661[27] = inst_10509);
return statearr_10661;
})();var statearr_10662_10733 = state_10616__$1;(statearr_10662_10733[2] = null);
(statearr_10662_10733[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 16))
{var inst_10513 = (state_10616[25]);var inst_10515 = cljs.core.chunked_seq_QMARK_.call(null,inst_10513);var state_10616__$1 = state_10616;if(inst_10515)
{var statearr_10663_10734 = state_10616__$1;(statearr_10663_10734[1] = 19);
} else
{var statearr_10664_10735 = state_10616__$1;(statearr_10664_10735[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 17))
{var state_10616__$1 = state_10616;var statearr_10665_10736 = state_10616__$1;(statearr_10665_10736[2] = null);
(statearr_10665_10736[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 18))
{var inst_10537 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10666_10737 = state_10616__$1;(statearr_10666_10737[2] = inst_10537);
(statearr_10666_10737[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 19))
{var inst_10513 = (state_10616[25]);var inst_10517 = cljs.core.chunk_first.call(null,inst_10513);var inst_10518 = cljs.core.chunk_rest.call(null,inst_10513);var inst_10519 = cljs.core.count.call(null,inst_10517);var inst_10493 = inst_10518;var inst_10494 = inst_10517;var inst_10495 = inst_10519;var inst_10496 = 0;var state_10616__$1 = (function (){var statearr_10667 = state_10616;(statearr_10667[14] = inst_10496);
(statearr_10667[15] = inst_10495);
(statearr_10667[16] = inst_10493);
(statearr_10667[17] = inst_10494);
return statearr_10667;
})();var statearr_10668_10738 = state_10616__$1;(statearr_10668_10738[2] = null);
(statearr_10668_10738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 20))
{var inst_10513 = (state_10616[25]);var inst_10523 = cljs.core.first.call(null,inst_10513);var inst_10524 = cljs.core.nth.call(null,inst_10523,0,null);var inst_10525 = cljs.core.nth.call(null,inst_10523,1,null);var state_10616__$1 = (function (){var statearr_10669 = state_10616;(statearr_10669[28] = inst_10524);
return statearr_10669;
})();if(cljs.core.truth_(inst_10525))
{var statearr_10670_10739 = state_10616__$1;(statearr_10670_10739[1] = 22);
} else
{var statearr_10671_10740 = state_10616__$1;(statearr_10671_10740[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 21))
{var inst_10534 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10672_10741 = state_10616__$1;(statearr_10672_10741[2] = inst_10534);
(statearr_10672_10741[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 22))
{var inst_10524 = (state_10616[28]);var inst_10527 = cljs.core.async.close_BANG_.call(null,inst_10524);var state_10616__$1 = state_10616;var statearr_10673_10742 = state_10616__$1;(statearr_10673_10742[2] = inst_10527);
(statearr_10673_10742[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 23))
{var state_10616__$1 = state_10616;var statearr_10674_10743 = state_10616__$1;(statearr_10674_10743[2] = null);
(statearr_10674_10743[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 24))
{var inst_10513 = (state_10616[25]);var inst_10530 = (state_10616[2]);var inst_10531 = cljs.core.next.call(null,inst_10513);var inst_10493 = inst_10531;var inst_10494 = null;var inst_10495 = 0;var inst_10496 = 0;var state_10616__$1 = (function (){var statearr_10675 = state_10616;(statearr_10675[29] = inst_10530);
(statearr_10675[14] = inst_10496);
(statearr_10675[15] = inst_10495);
(statearr_10675[16] = inst_10493);
(statearr_10675[17] = inst_10494);
return statearr_10675;
})();var statearr_10676_10744 = state_10616__$1;(statearr_10676_10744[2] = null);
(statearr_10676_10744[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 25))
{var inst_10554 = (state_10616[10]);var inst_10555 = (state_10616[11]);var inst_10557 = (inst_10555 < inst_10554);var inst_10558 = inst_10557;var state_10616__$1 = state_10616;if(cljs.core.truth_(inst_10558))
{var statearr_10677_10745 = state_10616__$1;(statearr_10677_10745[1] = 27);
} else
{var statearr_10678_10746 = state_10616__$1;(statearr_10678_10746[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 26))
{var inst_10544 = (state_10616[19]);var inst_10602 = (state_10616[2]);var inst_10603 = cljs.core.seq.call(null,inst_10544);var state_10616__$1 = (function (){var statearr_10679 = state_10616;(statearr_10679[30] = inst_10602);
return statearr_10679;
})();if(inst_10603)
{var statearr_10680_10747 = state_10616__$1;(statearr_10680_10747[1] = 42);
} else
{var statearr_10681_10748 = state_10616__$1;(statearr_10681_10748[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 27))
{var inst_10555 = (state_10616[11]);var inst_10553 = (state_10616[12]);var inst_10560 = cljs.core._nth.call(null,inst_10553,inst_10555);var state_10616__$1 = (function (){var statearr_10682 = state_10616;(statearr_10682[7] = inst_10560);
return statearr_10682;
})();var statearr_10683_10749 = state_10616__$1;(statearr_10683_10749[2] = null);
(statearr_10683_10749[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 28))
{var inst_10573 = (state_10616[9]);var inst_10552 = (state_10616[13]);var inst_10573__$1 = cljs.core.seq.call(null,inst_10552);var state_10616__$1 = (function (){var statearr_10687 = state_10616;(statearr_10687[9] = inst_10573__$1);
return statearr_10687;
})();if(inst_10573__$1)
{var statearr_10688_10750 = state_10616__$1;(statearr_10688_10750[1] = 33);
} else
{var statearr_10689_10751 = state_10616__$1;(statearr_10689_10751[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 29))
{var inst_10600 = (state_10616[2]);var state_10616__$1 = state_10616;var statearr_10690_10752 = state_10616__$1;(statearr_10690_10752[2] = inst_10600);
(statearr_10690_10752[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 30))
{var inst_10554 = (state_10616[10]);var inst_10555 = (state_10616[11]);var inst_10553 = (state_10616[12]);var inst_10552 = (state_10616[13]);var inst_10569 = (state_10616[2]);var inst_10570 = (inst_10555 + 1);var tmp10684 = inst_10554;var tmp10685 = inst_10553;var tmp10686 = inst_10552;var inst_10552__$1 = tmp10686;var inst_10553__$1 = tmp10685;var inst_10554__$1 = tmp10684;var inst_10555__$1 = inst_10570;var state_10616__$1 = (function (){var statearr_10691 = state_10616;(statearr_10691[10] = inst_10554__$1);
(statearr_10691[11] = inst_10555__$1);
(statearr_10691[12] = inst_10553__$1);
(statearr_10691[13] = inst_10552__$1);
(statearr_10691[31] = inst_10569);
return statearr_10691;
})();var statearr_10692_10753 = state_10616__$1;(statearr_10692_10753[2] = null);
(statearr_10692_10753[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10617 === 31))
{var inst_10560 = (state_10616[7]);var inst_10561 = (state_10616[2]);var inst_10562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10563 = cljs.core.async.untap_STAR_.call(null,m,inst_10560);var state_10616__$1 = (function (){var statearr_10693 = state_10616;(statearr_10693[32] = inst_10562);
(statearr_10693[33] = inst_10561);
return statearr_10693;
})();var statearr_10694_10754 = state_10616__$1;(statearr_10694_10754[2] = inst_10563);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10616__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10698[0] = state_machine__5507__auto__);
(statearr_10698[1] = 1);
return statearr_10698;
});
var state_machine__5507__auto____1 = (function (state_10616){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10616);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10699){if((e10699 instanceof Object))
{var ex__5510__auto__ = e10699;var statearr_10700_10755 = state_10616;(statearr_10700_10755[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10756 = state_10616;
state_10616 = G__10756;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10616){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10701 = f__5522__auto__.call(null);(statearr_10701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10702);
return statearr_10701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.Mix = (function (){var obj10758 = {};return obj10758;
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
;var m = (function (){if(typeof cljs.core.async.t10868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10868 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10869){
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
this.meta10869 = meta10869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10868.cljs$lang$type = true;
cljs.core.async.t10868.cljs$lang$ctorStr = "cljs.core.async/t10868";
cljs.core.async.t10868.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10868");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10868.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10870){var self__ = this;
var _10870__$1 = this;return self__.meta10869;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10870,meta10869__$1){var self__ = this;
var _10870__$1 = this;return (new cljs.core.async.t10868(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10869__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10868 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10868(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10869){return (new cljs.core.async.t10868(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10869));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10868(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___10977 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10935){var state_val_10936 = (state_10935[1]);if((state_val_10936 === 1))
{var inst_10874 = (state_10935[7]);var inst_10874__$1 = calc_state.call(null);var inst_10875 = cljs.core.seq_QMARK_.call(null,inst_10874__$1);var state_10935__$1 = (function (){var statearr_10937 = state_10935;(statearr_10937[7] = inst_10874__$1);
return statearr_10937;
})();if(inst_10875)
{var statearr_10938_10978 = state_10935__$1;(statearr_10938_10978[1] = 2);
} else
{var statearr_10939_10979 = state_10935__$1;(statearr_10939_10979[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 2))
{var inst_10874 = (state_10935[7]);var inst_10877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10874);var state_10935__$1 = state_10935;var statearr_10940_10980 = state_10935__$1;(statearr_10940_10980[2] = inst_10877);
(statearr_10940_10980[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 3))
{var inst_10874 = (state_10935[7]);var state_10935__$1 = state_10935;var statearr_10941_10981 = state_10935__$1;(statearr_10941_10981[2] = inst_10874);
(statearr_10941_10981[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 4))
{var inst_10874 = (state_10935[7]);var inst_10880 = (state_10935[2]);var inst_10881 = cljs.core.get.call(null,inst_10880,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10882 = cljs.core.get.call(null,inst_10880,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10883 = cljs.core.get.call(null,inst_10880,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10884 = inst_10874;var state_10935__$1 = (function (){var statearr_10942 = state_10935;(statearr_10942[8] = inst_10884);
(statearr_10942[9] = inst_10883);
(statearr_10942[10] = inst_10882);
(statearr_10942[11] = inst_10881);
return statearr_10942;
})();var statearr_10943_10982 = state_10935__$1;(statearr_10943_10982[2] = null);
(statearr_10943_10982[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 5))
{var inst_10884 = (state_10935[8]);var inst_10887 = cljs.core.seq_QMARK_.call(null,inst_10884);var state_10935__$1 = state_10935;if(inst_10887)
{var statearr_10944_10983 = state_10935__$1;(statearr_10944_10983[1] = 7);
} else
{var statearr_10945_10984 = state_10935__$1;(statearr_10945_10984[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 6))
{var inst_10933 = (state_10935[2]);var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10935__$1,inst_10933);
} else
{if((state_val_10936 === 7))
{var inst_10884 = (state_10935[8]);var inst_10889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10884);var state_10935__$1 = state_10935;var statearr_10946_10985 = state_10935__$1;(statearr_10946_10985[2] = inst_10889);
(statearr_10946_10985[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 8))
{var inst_10884 = (state_10935[8]);var state_10935__$1 = state_10935;var statearr_10947_10986 = state_10935__$1;(statearr_10947_10986[2] = inst_10884);
(statearr_10947_10986[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 9))
{var inst_10892 = (state_10935[12]);var inst_10892__$1 = (state_10935[2]);var inst_10893 = cljs.core.get.call(null,inst_10892__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10894 = cljs.core.get.call(null,inst_10892__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10895 = cljs.core.get.call(null,inst_10892__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10935__$1 = (function (){var statearr_10948 = state_10935;(statearr_10948[13] = inst_10894);
(statearr_10948[12] = inst_10892__$1);
(statearr_10948[14] = inst_10895);
return statearr_10948;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10935__$1,10,inst_10893);
} else
{if((state_val_10936 === 10))
{var inst_10899 = (state_10935[15]);var inst_10900 = (state_10935[16]);var inst_10898 = (state_10935[2]);var inst_10899__$1 = cljs.core.nth.call(null,inst_10898,0,null);var inst_10900__$1 = cljs.core.nth.call(null,inst_10898,1,null);var inst_10901 = (inst_10899__$1 == null);var inst_10902 = cljs.core._EQ_.call(null,inst_10900__$1,change);var inst_10903 = (inst_10901) || (inst_10902);var state_10935__$1 = (function (){var statearr_10949 = state_10935;(statearr_10949[15] = inst_10899__$1);
(statearr_10949[16] = inst_10900__$1);
return statearr_10949;
})();if(cljs.core.truth_(inst_10903))
{var statearr_10950_10987 = state_10935__$1;(statearr_10950_10987[1] = 11);
} else
{var statearr_10951_10988 = state_10935__$1;(statearr_10951_10988[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 11))
{var inst_10899 = (state_10935[15]);var inst_10905 = (inst_10899 == null);var state_10935__$1 = state_10935;if(cljs.core.truth_(inst_10905))
{var statearr_10952_10989 = state_10935__$1;(statearr_10952_10989[1] = 14);
} else
{var statearr_10953_10990 = state_10935__$1;(statearr_10953_10990[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 12))
{var inst_10900 = (state_10935[16]);var inst_10914 = (state_10935[17]);var inst_10895 = (state_10935[14]);var inst_10914__$1 = inst_10895.call(null,inst_10900);var state_10935__$1 = (function (){var statearr_10954 = state_10935;(statearr_10954[17] = inst_10914__$1);
return statearr_10954;
})();if(cljs.core.truth_(inst_10914__$1))
{var statearr_10955_10991 = state_10935__$1;(statearr_10955_10991[1] = 17);
} else
{var statearr_10956_10992 = state_10935__$1;(statearr_10956_10992[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 13))
{var inst_10931 = (state_10935[2]);var state_10935__$1 = state_10935;var statearr_10957_10993 = state_10935__$1;(statearr_10957_10993[2] = inst_10931);
(statearr_10957_10993[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 14))
{var inst_10900 = (state_10935[16]);var inst_10907 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10900);var state_10935__$1 = state_10935;var statearr_10958_10994 = state_10935__$1;(statearr_10958_10994[2] = inst_10907);
(statearr_10958_10994[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 15))
{var state_10935__$1 = state_10935;var statearr_10959_10995 = state_10935__$1;(statearr_10959_10995[2] = null);
(statearr_10959_10995[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 16))
{var inst_10910 = (state_10935[2]);var inst_10911 = calc_state.call(null);var inst_10884 = inst_10911;var state_10935__$1 = (function (){var statearr_10960 = state_10935;(statearr_10960[8] = inst_10884);
(statearr_10960[18] = inst_10910);
return statearr_10960;
})();var statearr_10961_10996 = state_10935__$1;(statearr_10961_10996[2] = null);
(statearr_10961_10996[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 17))
{var inst_10914 = (state_10935[17]);var state_10935__$1 = state_10935;var statearr_10962_10997 = state_10935__$1;(statearr_10962_10997[2] = inst_10914);
(statearr_10962_10997[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 18))
{var inst_10894 = (state_10935[13]);var inst_10900 = (state_10935[16]);var inst_10895 = (state_10935[14]);var inst_10917 = cljs.core.empty_QMARK_.call(null,inst_10895);var inst_10918 = inst_10894.call(null,inst_10900);var inst_10919 = cljs.core.not.call(null,inst_10918);var inst_10920 = (inst_10917) && (inst_10919);var state_10935__$1 = state_10935;var statearr_10963_10998 = state_10935__$1;(statearr_10963_10998[2] = inst_10920);
(statearr_10963_10998[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 19))
{var inst_10922 = (state_10935[2]);var state_10935__$1 = state_10935;if(cljs.core.truth_(inst_10922))
{var statearr_10964_10999 = state_10935__$1;(statearr_10964_10999[1] = 20);
} else
{var statearr_10965_11000 = state_10935__$1;(statearr_10965_11000[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 20))
{var inst_10899 = (state_10935[15]);var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10935__$1,23,out,inst_10899);
} else
{if((state_val_10936 === 21))
{var state_10935__$1 = state_10935;var statearr_10966_11001 = state_10935__$1;(statearr_10966_11001[2] = null);
(statearr_10966_11001[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 22))
{var inst_10892 = (state_10935[12]);var inst_10928 = (state_10935[2]);var inst_10884 = inst_10892;var state_10935__$1 = (function (){var statearr_10967 = state_10935;(statearr_10967[8] = inst_10884);
(statearr_10967[19] = inst_10928);
return statearr_10967;
})();var statearr_10968_11002 = state_10935__$1;(statearr_10968_11002[2] = null);
(statearr_10968_11002[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 23))
{var inst_10925 = (state_10935[2]);var state_10935__$1 = state_10935;var statearr_10969_11003 = state_10935__$1;(statearr_10969_11003[2] = inst_10925);
(statearr_10969_11003[1] = 22);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_10973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10973[0] = state_machine__5507__auto__);
(statearr_10973[1] = 1);
return statearr_10973;
});
var state_machine__5507__auto____1 = (function (state_10935){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10935);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10974){if((e10974 instanceof Object))
{var ex__5510__auto__ = e10974;var statearr_10975_11004 = state_10935;(statearr_10975_11004[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10935);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11005 = state_10935;
state_10935 = G__11005;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10935){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10976 = f__5522__auto__.call(null);(statearr_10976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10977);
return statearr_10976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.Pub = (function (){var obj11007 = {};return obj11007;
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
return (function (p1__11008_SHARP_){if(cljs.core.truth_(p1__11008_SHARP_.call(null,topic)))
{return p1__11008_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11008_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11133 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11134){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11134 = meta11134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11133.cljs$lang$type = true;
cljs.core.async.t11133.cljs$lang$ctorStr = "cljs.core.async/t11133";
cljs.core.async.t11133.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11133");
});})(mults,ensure_mult))
;
cljs.core.async.t11133.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11133.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11135){var self__ = this;
var _11135__$1 = this;return self__.meta11134;
});})(mults,ensure_mult))
;
cljs.core.async.t11133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11135,meta11134__$1){var self__ = this;
var _11135__$1 = this;return (new cljs.core.async.t11133(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11134__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11133 = ((function (mults,ensure_mult){
return (function __GT_t11133(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11134){return (new cljs.core.async.t11133(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11134));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11133(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___11257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11209){var state_val_11210 = (state_11209[1]);if((state_val_11210 === 1))
{var state_11209__$1 = state_11209;var statearr_11211_11258 = state_11209__$1;(statearr_11211_11258[2] = null);
(statearr_11211_11258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 2))
{var state_11209__$1 = state_11209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11209__$1,4,ch);
} else
{if((state_val_11210 === 3))
{var inst_11207 = (state_11209[2]);var state_11209__$1 = state_11209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11209__$1,inst_11207);
} else
{if((state_val_11210 === 4))
{var inst_11138 = (state_11209[7]);var inst_11138__$1 = (state_11209[2]);var inst_11139 = (inst_11138__$1 == null);var state_11209__$1 = (function (){var statearr_11212 = state_11209;(statearr_11212[7] = inst_11138__$1);
return statearr_11212;
})();if(cljs.core.truth_(inst_11139))
{var statearr_11213_11259 = state_11209__$1;(statearr_11213_11259[1] = 5);
} else
{var statearr_11214_11260 = state_11209__$1;(statearr_11214_11260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 5))
{var inst_11145 = cljs.core.deref.call(null,mults);var inst_11146 = cljs.core.vals.call(null,inst_11145);var inst_11147 = cljs.core.seq.call(null,inst_11146);var inst_11148 = inst_11147;var inst_11149 = null;var inst_11150 = 0;var inst_11151 = 0;var state_11209__$1 = (function (){var statearr_11215 = state_11209;(statearr_11215[8] = inst_11151);
(statearr_11215[9] = inst_11150);
(statearr_11215[10] = inst_11148);
(statearr_11215[11] = inst_11149);
return statearr_11215;
})();var statearr_11216_11261 = state_11209__$1;(statearr_11216_11261[2] = null);
(statearr_11216_11261[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 6))
{var inst_11138 = (state_11209[7]);var inst_11188 = (state_11209[12]);var inst_11186 = (state_11209[13]);var inst_11186__$1 = topic_fn.call(null,inst_11138);var inst_11187 = cljs.core.deref.call(null,mults);var inst_11188__$1 = cljs.core.get.call(null,inst_11187,inst_11186__$1);var state_11209__$1 = (function (){var statearr_11217 = state_11209;(statearr_11217[12] = inst_11188__$1);
(statearr_11217[13] = inst_11186__$1);
return statearr_11217;
})();if(cljs.core.truth_(inst_11188__$1))
{var statearr_11218_11262 = state_11209__$1;(statearr_11218_11262[1] = 19);
} else
{var statearr_11219_11263 = state_11209__$1;(statearr_11219_11263[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 7))
{var inst_11205 = (state_11209[2]);var state_11209__$1 = state_11209;var statearr_11220_11264 = state_11209__$1;(statearr_11220_11264[2] = inst_11205);
(statearr_11220_11264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 8))
{var inst_11151 = (state_11209[8]);var inst_11150 = (state_11209[9]);var inst_11153 = (inst_11151 < inst_11150);var inst_11154 = inst_11153;var state_11209__$1 = state_11209;if(cljs.core.truth_(inst_11154))
{var statearr_11224_11265 = state_11209__$1;(statearr_11224_11265[1] = 10);
} else
{var statearr_11225_11266 = state_11209__$1;(statearr_11225_11266[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 9))
{var inst_11184 = (state_11209[2]);var state_11209__$1 = state_11209;var statearr_11226_11267 = state_11209__$1;(statearr_11226_11267[2] = inst_11184);
(statearr_11226_11267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 10))
{var inst_11151 = (state_11209[8]);var inst_11150 = (state_11209[9]);var inst_11148 = (state_11209[10]);var inst_11149 = (state_11209[11]);var inst_11156 = cljs.core._nth.call(null,inst_11149,inst_11151);var inst_11157 = cljs.core.async.muxch_STAR_.call(null,inst_11156);var inst_11158 = cljs.core.async.close_BANG_.call(null,inst_11157);var inst_11159 = (inst_11151 + 1);var tmp11221 = inst_11150;var tmp11222 = inst_11148;var tmp11223 = inst_11149;var inst_11148__$1 = tmp11222;var inst_11149__$1 = tmp11223;var inst_11150__$1 = tmp11221;var inst_11151__$1 = inst_11159;var state_11209__$1 = (function (){var statearr_11227 = state_11209;(statearr_11227[8] = inst_11151__$1);
(statearr_11227[9] = inst_11150__$1);
(statearr_11227[10] = inst_11148__$1);
(statearr_11227[14] = inst_11158);
(statearr_11227[11] = inst_11149__$1);
return statearr_11227;
})();var statearr_11228_11268 = state_11209__$1;(statearr_11228_11268[2] = null);
(statearr_11228_11268[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 11))
{var inst_11162 = (state_11209[15]);var inst_11148 = (state_11209[10]);var inst_11162__$1 = cljs.core.seq.call(null,inst_11148);var state_11209__$1 = (function (){var statearr_11229 = state_11209;(statearr_11229[15] = inst_11162__$1);
return statearr_11229;
})();if(inst_11162__$1)
{var statearr_11230_11269 = state_11209__$1;(statearr_11230_11269[1] = 13);
} else
{var statearr_11231_11270 = state_11209__$1;(statearr_11231_11270[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 12))
{var inst_11182 = (state_11209[2]);var state_11209__$1 = state_11209;var statearr_11232_11271 = state_11209__$1;(statearr_11232_11271[2] = inst_11182);
(statearr_11232_11271[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 13))
{var inst_11162 = (state_11209[15]);var inst_11164 = cljs.core.chunked_seq_QMARK_.call(null,inst_11162);var state_11209__$1 = state_11209;if(inst_11164)
{var statearr_11233_11272 = state_11209__$1;(statearr_11233_11272[1] = 16);
} else
{var statearr_11234_11273 = state_11209__$1;(statearr_11234_11273[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 14))
{var state_11209__$1 = state_11209;var statearr_11235_11274 = state_11209__$1;(statearr_11235_11274[2] = null);
(statearr_11235_11274[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 15))
{var inst_11180 = (state_11209[2]);var state_11209__$1 = state_11209;var statearr_11236_11275 = state_11209__$1;(statearr_11236_11275[2] = inst_11180);
(statearr_11236_11275[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 16))
{var inst_11162 = (state_11209[15]);var inst_11166 = cljs.core.chunk_first.call(null,inst_11162);var inst_11167 = cljs.core.chunk_rest.call(null,inst_11162);var inst_11168 = cljs.core.count.call(null,inst_11166);var inst_11148 = inst_11167;var inst_11149 = inst_11166;var inst_11150 = inst_11168;var inst_11151 = 0;var state_11209__$1 = (function (){var statearr_11237 = state_11209;(statearr_11237[8] = inst_11151);
(statearr_11237[9] = inst_11150);
(statearr_11237[10] = inst_11148);
(statearr_11237[11] = inst_11149);
return statearr_11237;
})();var statearr_11238_11276 = state_11209__$1;(statearr_11238_11276[2] = null);
(statearr_11238_11276[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 17))
{var inst_11162 = (state_11209[15]);var inst_11171 = cljs.core.first.call(null,inst_11162);var inst_11172 = cljs.core.async.muxch_STAR_.call(null,inst_11171);var inst_11173 = cljs.core.async.close_BANG_.call(null,inst_11172);var inst_11174 = cljs.core.next.call(null,inst_11162);var inst_11148 = inst_11174;var inst_11149 = null;var inst_11150 = 0;var inst_11151 = 0;var state_11209__$1 = (function (){var statearr_11239 = state_11209;(statearr_11239[16] = inst_11173);
(statearr_11239[8] = inst_11151);
(statearr_11239[9] = inst_11150);
(statearr_11239[10] = inst_11148);
(statearr_11239[11] = inst_11149);
return statearr_11239;
})();var statearr_11240_11277 = state_11209__$1;(statearr_11240_11277[2] = null);
(statearr_11240_11277[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 18))
{var inst_11177 = (state_11209[2]);var state_11209__$1 = state_11209;var statearr_11241_11278 = state_11209__$1;(statearr_11241_11278[2] = inst_11177);
(statearr_11241_11278[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 19))
{var state_11209__$1 = state_11209;var statearr_11242_11279 = state_11209__$1;(statearr_11242_11279[2] = null);
(statearr_11242_11279[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 20))
{var state_11209__$1 = state_11209;var statearr_11243_11280 = state_11209__$1;(statearr_11243_11280[2] = null);
(statearr_11243_11280[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 21))
{var inst_11202 = (state_11209[2]);var state_11209__$1 = (function (){var statearr_11244 = state_11209;(statearr_11244[17] = inst_11202);
return statearr_11244;
})();var statearr_11245_11281 = state_11209__$1;(statearr_11245_11281[2] = null);
(statearr_11245_11281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 22))
{var inst_11199 = (state_11209[2]);var state_11209__$1 = state_11209;var statearr_11246_11282 = state_11209__$1;(statearr_11246_11282[2] = inst_11199);
(statearr_11246_11282[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 23))
{var inst_11186 = (state_11209[13]);var inst_11190 = (state_11209[2]);var inst_11191 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11186);var state_11209__$1 = (function (){var statearr_11247 = state_11209;(statearr_11247[18] = inst_11190);
return statearr_11247;
})();var statearr_11248_11283 = state_11209__$1;(statearr_11248_11283[2] = inst_11191);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11209__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11210 === 24))
{var inst_11138 = (state_11209[7]);var inst_11188 = (state_11209[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11209,23,Object,null,22);var inst_11195 = cljs.core.async.muxch_STAR_.call(null,inst_11188);var state_11209__$1 = state_11209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11209__$1,25,inst_11195,inst_11138);
} else
{if((state_val_11210 === 25))
{var inst_11197 = (state_11209[2]);var state_11209__$1 = state_11209;var statearr_11249_11284 = state_11209__$1;(statearr_11249_11284[2] = inst_11197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11209__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11253[0] = state_machine__5507__auto__);
(statearr_11253[1] = 1);
return statearr_11253;
});
var state_machine__5507__auto____1 = (function (state_11209){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11254){if((e11254 instanceof Object))
{var ex__5510__auto__ = e11254;var statearr_11255_11285 = state_11209;(statearr_11255_11285[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11209);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11286 = state_11209;
state_11209 = G__11286;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11209){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11256 = f__5522__auto__.call(null);(statearr_11256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11257);
return statearr_11256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
,cljs.core.range.call(null,cnt));var c__5521__auto___11423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11393){var state_val_11394 = (state_11393[1]);if((state_val_11394 === 1))
{var state_11393__$1 = state_11393;var statearr_11395_11424 = state_11393__$1;(statearr_11395_11424[2] = null);
(statearr_11395_11424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 2))
{var inst_11356 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11357 = 0;var state_11393__$1 = (function (){var statearr_11396 = state_11393;(statearr_11396[7] = inst_11357);
(statearr_11396[8] = inst_11356);
return statearr_11396;
})();var statearr_11397_11425 = state_11393__$1;(statearr_11397_11425[2] = null);
(statearr_11397_11425[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 3))
{var inst_11391 = (state_11393[2]);var state_11393__$1 = state_11393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11393__$1,inst_11391);
} else
{if((state_val_11394 === 4))
{var inst_11357 = (state_11393[7]);var inst_11359 = (inst_11357 < cnt);var state_11393__$1 = state_11393;if(cljs.core.truth_(inst_11359))
{var statearr_11398_11426 = state_11393__$1;(statearr_11398_11426[1] = 6);
} else
{var statearr_11399_11427 = state_11393__$1;(statearr_11399_11427[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 5))
{var inst_11377 = (state_11393[2]);var state_11393__$1 = (function (){var statearr_11400 = state_11393;(statearr_11400[9] = inst_11377);
return statearr_11400;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11393__$1,12,dchan);
} else
{if((state_val_11394 === 6))
{var state_11393__$1 = state_11393;var statearr_11401_11428 = state_11393__$1;(statearr_11401_11428[2] = null);
(statearr_11401_11428[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 7))
{var state_11393__$1 = state_11393;var statearr_11402_11429 = state_11393__$1;(statearr_11402_11429[2] = null);
(statearr_11402_11429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 8))
{var inst_11375 = (state_11393[2]);var state_11393__$1 = state_11393;var statearr_11403_11430 = state_11393__$1;(statearr_11403_11430[2] = inst_11375);
(statearr_11403_11430[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 9))
{var inst_11357 = (state_11393[7]);var inst_11370 = (state_11393[2]);var inst_11371 = (inst_11357 + 1);var inst_11357__$1 = inst_11371;var state_11393__$1 = (function (){var statearr_11404 = state_11393;(statearr_11404[10] = inst_11370);
(statearr_11404[7] = inst_11357__$1);
return statearr_11404;
})();var statearr_11405_11431 = state_11393__$1;(statearr_11405_11431[2] = null);
(statearr_11405_11431[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 10))
{var inst_11361 = (state_11393[2]);var inst_11362 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11393__$1 = (function (){var statearr_11406 = state_11393;(statearr_11406[11] = inst_11361);
return statearr_11406;
})();var statearr_11407_11432 = state_11393__$1;(statearr_11407_11432[2] = inst_11362);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11393__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 11))
{var inst_11357 = (state_11393[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11393,10,Object,null,9);var inst_11366 = chs__$1.call(null,inst_11357);var inst_11367 = done.call(null,inst_11357);var inst_11368 = cljs.core.async.take_BANG_.call(null,inst_11366,inst_11367);var state_11393__$1 = state_11393;var statearr_11408_11433 = state_11393__$1;(statearr_11408_11433[2] = inst_11368);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11393__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 12))
{var inst_11379 = (state_11393[12]);var inst_11379__$1 = (state_11393[2]);var inst_11380 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11379__$1);var state_11393__$1 = (function (){var statearr_11409 = state_11393;(statearr_11409[12] = inst_11379__$1);
return statearr_11409;
})();if(cljs.core.truth_(inst_11380))
{var statearr_11410_11434 = state_11393__$1;(statearr_11410_11434[1] = 13);
} else
{var statearr_11411_11435 = state_11393__$1;(statearr_11411_11435[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 13))
{var inst_11382 = cljs.core.async.close_BANG_.call(null,out);var state_11393__$1 = state_11393;var statearr_11412_11436 = state_11393__$1;(statearr_11412_11436[2] = inst_11382);
(statearr_11412_11436[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 14))
{var inst_11379 = (state_11393[12]);var inst_11384 = cljs.core.apply.call(null,f,inst_11379);var state_11393__$1 = state_11393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11393__$1,16,out,inst_11384);
} else
{if((state_val_11394 === 15))
{var inst_11389 = (state_11393[2]);var state_11393__$1 = state_11393;var statearr_11413_11437 = state_11393__$1;(statearr_11413_11437[2] = inst_11389);
(statearr_11413_11437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11394 === 16))
{var inst_11386 = (state_11393[2]);var state_11393__$1 = (function (){var statearr_11414 = state_11393;(statearr_11414[13] = inst_11386);
return statearr_11414;
})();var statearr_11415_11438 = state_11393__$1;(statearr_11415_11438[2] = null);
(statearr_11415_11438[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11419[0] = state_machine__5507__auto__);
(statearr_11419[1] = 1);
return statearr_11419;
});
var state_machine__5507__auto____1 = (function (state_11393){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11393);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11420){if((e11420 instanceof Object))
{var ex__5510__auto__ = e11420;var statearr_11421_11439 = state_11393;(statearr_11421_11439[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11393);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11440 = state_11393;
state_11393 = G__11440;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11393){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11422 = f__5522__auto__.call(null);(statearr_11422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11423);
return statearr_11422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___11548 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11524){var state_val_11525 = (state_11524[1]);if((state_val_11525 === 1))
{var inst_11495 = cljs.core.vec.call(null,chs);var inst_11496 = inst_11495;var state_11524__$1 = (function (){var statearr_11526 = state_11524;(statearr_11526[7] = inst_11496);
return statearr_11526;
})();var statearr_11527_11549 = state_11524__$1;(statearr_11527_11549[2] = null);
(statearr_11527_11549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11525 === 2))
{var inst_11496 = (state_11524[7]);var inst_11498 = cljs.core.count.call(null,inst_11496);var inst_11499 = (inst_11498 > 0);var state_11524__$1 = state_11524;if(cljs.core.truth_(inst_11499))
{var statearr_11528_11550 = state_11524__$1;(statearr_11528_11550[1] = 4);
} else
{var statearr_11529_11551 = state_11524__$1;(statearr_11529_11551[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11525 === 3))
{var inst_11522 = (state_11524[2]);var state_11524__$1 = state_11524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11524__$1,inst_11522);
} else
{if((state_val_11525 === 4))
{var inst_11496 = (state_11524[7]);var state_11524__$1 = state_11524;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11524__$1,7,inst_11496);
} else
{if((state_val_11525 === 5))
{var inst_11518 = cljs.core.async.close_BANG_.call(null,out);var state_11524__$1 = state_11524;var statearr_11530_11552 = state_11524__$1;(statearr_11530_11552[2] = inst_11518);
(statearr_11530_11552[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11525 === 6))
{var inst_11520 = (state_11524[2]);var state_11524__$1 = state_11524;var statearr_11531_11553 = state_11524__$1;(statearr_11531_11553[2] = inst_11520);
(statearr_11531_11553[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11525 === 7))
{var inst_11504 = (state_11524[8]);var inst_11503 = (state_11524[9]);var inst_11503__$1 = (state_11524[2]);var inst_11504__$1 = cljs.core.nth.call(null,inst_11503__$1,0,null);var inst_11505 = cljs.core.nth.call(null,inst_11503__$1,1,null);var inst_11506 = (inst_11504__$1 == null);var state_11524__$1 = (function (){var statearr_11532 = state_11524;(statearr_11532[10] = inst_11505);
(statearr_11532[8] = inst_11504__$1);
(statearr_11532[9] = inst_11503__$1);
return statearr_11532;
})();if(cljs.core.truth_(inst_11506))
{var statearr_11533_11554 = state_11524__$1;(statearr_11533_11554[1] = 8);
} else
{var statearr_11534_11555 = state_11524__$1;(statearr_11534_11555[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11525 === 8))
{var inst_11505 = (state_11524[10]);var inst_11504 = (state_11524[8]);var inst_11496 = (state_11524[7]);var inst_11503 = (state_11524[9]);var inst_11508 = (function (){var c = inst_11505;var v = inst_11504;var vec__11501 = inst_11503;var cs = inst_11496;return ((function (c,v,vec__11501,cs,inst_11505,inst_11504,inst_11496,inst_11503,state_val_11525){
return (function (p1__11441_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11441_SHARP_);
});
;})(c,v,vec__11501,cs,inst_11505,inst_11504,inst_11496,inst_11503,state_val_11525))
})();var inst_11509 = cljs.core.filterv.call(null,inst_11508,inst_11496);var inst_11496__$1 = inst_11509;var state_11524__$1 = (function (){var statearr_11535 = state_11524;(statearr_11535[7] = inst_11496__$1);
return statearr_11535;
})();var statearr_11536_11556 = state_11524__$1;(statearr_11536_11556[2] = null);
(statearr_11536_11556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11525 === 9))
{var inst_11504 = (state_11524[8]);var state_11524__$1 = state_11524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11524__$1,11,out,inst_11504);
} else
{if((state_val_11525 === 10))
{var inst_11516 = (state_11524[2]);var state_11524__$1 = state_11524;var statearr_11538_11557 = state_11524__$1;(statearr_11538_11557[2] = inst_11516);
(statearr_11538_11557[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11525 === 11))
{var inst_11496 = (state_11524[7]);var inst_11513 = (state_11524[2]);var tmp11537 = inst_11496;var inst_11496__$1 = tmp11537;var state_11524__$1 = (function (){var statearr_11539 = state_11524;(statearr_11539[7] = inst_11496__$1);
(statearr_11539[11] = inst_11513);
return statearr_11539;
})();var statearr_11540_11558 = state_11524__$1;(statearr_11540_11558[2] = null);
(statearr_11540_11558[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11544 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11544[0] = state_machine__5507__auto__);
(statearr_11544[1] = 1);
return statearr_11544;
});
var state_machine__5507__auto____1 = (function (state_11524){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11524);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11545){if((e11545 instanceof Object))
{var ex__5510__auto__ = e11545;var statearr_11546_11559 = state_11524;(statearr_11546_11559[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11560 = state_11524;
state_11524 = G__11560;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11524){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11547 = f__5522__auto__.call(null);(statearr_11547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11548);
return statearr_11547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___11653 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11630){var state_val_11631 = (state_11630[1]);if((state_val_11631 === 1))
{var inst_11607 = 0;var state_11630__$1 = (function (){var statearr_11632 = state_11630;(statearr_11632[7] = inst_11607);
return statearr_11632;
})();var statearr_11633_11654 = state_11630__$1;(statearr_11633_11654[2] = null);
(statearr_11633_11654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11631 === 2))
{var inst_11607 = (state_11630[7]);var inst_11609 = (inst_11607 < n);var state_11630__$1 = state_11630;if(cljs.core.truth_(inst_11609))
{var statearr_11634_11655 = state_11630__$1;(statearr_11634_11655[1] = 4);
} else
{var statearr_11635_11656 = state_11630__$1;(statearr_11635_11656[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11631 === 3))
{var inst_11627 = (state_11630[2]);var inst_11628 = cljs.core.async.close_BANG_.call(null,out);var state_11630__$1 = (function (){var statearr_11636 = state_11630;(statearr_11636[8] = inst_11627);
return statearr_11636;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11630__$1,inst_11628);
} else
{if((state_val_11631 === 4))
{var state_11630__$1 = state_11630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11630__$1,7,ch);
} else
{if((state_val_11631 === 5))
{var state_11630__$1 = state_11630;var statearr_11637_11657 = state_11630__$1;(statearr_11637_11657[2] = null);
(statearr_11637_11657[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11631 === 6))
{var inst_11625 = (state_11630[2]);var state_11630__$1 = state_11630;var statearr_11638_11658 = state_11630__$1;(statearr_11638_11658[2] = inst_11625);
(statearr_11638_11658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11631 === 7))
{var inst_11612 = (state_11630[9]);var inst_11612__$1 = (state_11630[2]);var inst_11613 = (inst_11612__$1 == null);var inst_11614 = cljs.core.not.call(null,inst_11613);var state_11630__$1 = (function (){var statearr_11639 = state_11630;(statearr_11639[9] = inst_11612__$1);
return statearr_11639;
})();if(inst_11614)
{var statearr_11640_11659 = state_11630__$1;(statearr_11640_11659[1] = 8);
} else
{var statearr_11641_11660 = state_11630__$1;(statearr_11641_11660[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11631 === 8))
{var inst_11612 = (state_11630[9]);var state_11630__$1 = state_11630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11630__$1,11,out,inst_11612);
} else
{if((state_val_11631 === 9))
{var state_11630__$1 = state_11630;var statearr_11642_11661 = state_11630__$1;(statearr_11642_11661[2] = null);
(statearr_11642_11661[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11631 === 10))
{var inst_11622 = (state_11630[2]);var state_11630__$1 = state_11630;var statearr_11643_11662 = state_11630__$1;(statearr_11643_11662[2] = inst_11622);
(statearr_11643_11662[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11631 === 11))
{var inst_11607 = (state_11630[7]);var inst_11617 = (state_11630[2]);var inst_11618 = (inst_11607 + 1);var inst_11607__$1 = inst_11618;var state_11630__$1 = (function (){var statearr_11644 = state_11630;(statearr_11644[7] = inst_11607__$1);
(statearr_11644[10] = inst_11617);
return statearr_11644;
})();var statearr_11645_11663 = state_11630__$1;(statearr_11645_11663[2] = null);
(statearr_11645_11663[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11649 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11649[0] = state_machine__5507__auto__);
(statearr_11649[1] = 1);
return statearr_11649;
});
var state_machine__5507__auto____1 = (function (state_11630){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11630);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11650){if((e11650 instanceof Object))
{var ex__5510__auto__ = e11650;var statearr_11651_11664 = state_11630;(statearr_11651_11664[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11665 = state_11630;
state_11630 = G__11665;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11630){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11652 = f__5522__auto__.call(null);(statearr_11652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11653);
return statearr_11652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___11762 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11737){var state_val_11738 = (state_11737[1]);if((state_val_11738 === 1))
{var inst_11714 = null;var state_11737__$1 = (function (){var statearr_11739 = state_11737;(statearr_11739[7] = inst_11714);
return statearr_11739;
})();var statearr_11740_11763 = state_11737__$1;(statearr_11740_11763[2] = null);
(statearr_11740_11763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 2))
{var state_11737__$1 = state_11737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11737__$1,4,ch);
} else
{if((state_val_11738 === 3))
{var inst_11734 = (state_11737[2]);var inst_11735 = cljs.core.async.close_BANG_.call(null,out);var state_11737__$1 = (function (){var statearr_11741 = state_11737;(statearr_11741[8] = inst_11734);
return statearr_11741;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11737__$1,inst_11735);
} else
{if((state_val_11738 === 4))
{var inst_11717 = (state_11737[9]);var inst_11717__$1 = (state_11737[2]);var inst_11718 = (inst_11717__$1 == null);var inst_11719 = cljs.core.not.call(null,inst_11718);var state_11737__$1 = (function (){var statearr_11742 = state_11737;(statearr_11742[9] = inst_11717__$1);
return statearr_11742;
})();if(inst_11719)
{var statearr_11743_11764 = state_11737__$1;(statearr_11743_11764[1] = 5);
} else
{var statearr_11744_11765 = state_11737__$1;(statearr_11744_11765[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 5))
{var inst_11714 = (state_11737[7]);var inst_11717 = (state_11737[9]);var inst_11721 = cljs.core._EQ_.call(null,inst_11717,inst_11714);var state_11737__$1 = state_11737;if(inst_11721)
{var statearr_11745_11766 = state_11737__$1;(statearr_11745_11766[1] = 8);
} else
{var statearr_11746_11767 = state_11737__$1;(statearr_11746_11767[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 6))
{var state_11737__$1 = state_11737;var statearr_11748_11768 = state_11737__$1;(statearr_11748_11768[2] = null);
(statearr_11748_11768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 7))
{var inst_11732 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11749_11769 = state_11737__$1;(statearr_11749_11769[2] = inst_11732);
(statearr_11749_11769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 8))
{var inst_11714 = (state_11737[7]);var tmp11747 = inst_11714;var inst_11714__$1 = tmp11747;var state_11737__$1 = (function (){var statearr_11750 = state_11737;(statearr_11750[7] = inst_11714__$1);
return statearr_11750;
})();var statearr_11751_11770 = state_11737__$1;(statearr_11751_11770[2] = null);
(statearr_11751_11770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 9))
{var inst_11717 = (state_11737[9]);var state_11737__$1 = state_11737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11737__$1,11,out,inst_11717);
} else
{if((state_val_11738 === 10))
{var inst_11729 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11752_11771 = state_11737__$1;(statearr_11752_11771[2] = inst_11729);
(statearr_11752_11771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 11))
{var inst_11717 = (state_11737[9]);var inst_11726 = (state_11737[2]);var inst_11714 = inst_11717;var state_11737__$1 = (function (){var statearr_11753 = state_11737;(statearr_11753[7] = inst_11714);
(statearr_11753[10] = inst_11726);
return statearr_11753;
})();var statearr_11754_11772 = state_11737__$1;(statearr_11754_11772[2] = null);
(statearr_11754_11772[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11758 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11758[0] = state_machine__5507__auto__);
(statearr_11758[1] = 1);
return statearr_11758;
});
var state_machine__5507__auto____1 = (function (state_11737){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11759){if((e11759 instanceof Object))
{var ex__5510__auto__ = e11759;var statearr_11760_11773 = state_11737;(statearr_11760_11773[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11774 = state_11737;
state_11737 = G__11774;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11737){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11761 = f__5522__auto__.call(null);(statearr_11761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11762);
return statearr_11761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___11909 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11879){var state_val_11880 = (state_11879[1]);if((state_val_11880 === 1))
{var inst_11842 = (new Array(n));var inst_11843 = inst_11842;var inst_11844 = 0;var state_11879__$1 = (function (){var statearr_11881 = state_11879;(statearr_11881[7] = inst_11843);
(statearr_11881[8] = inst_11844);
return statearr_11881;
})();var statearr_11882_11910 = state_11879__$1;(statearr_11882_11910[2] = null);
(statearr_11882_11910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 2))
{var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,4,ch);
} else
{if((state_val_11880 === 3))
{var inst_11877 = (state_11879[2]);var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11879__$1,inst_11877);
} else
{if((state_val_11880 === 4))
{var inst_11847 = (state_11879[9]);var inst_11847__$1 = (state_11879[2]);var inst_11848 = (inst_11847__$1 == null);var inst_11849 = cljs.core.not.call(null,inst_11848);var state_11879__$1 = (function (){var statearr_11883 = state_11879;(statearr_11883[9] = inst_11847__$1);
return statearr_11883;
})();if(inst_11849)
{var statearr_11884_11911 = state_11879__$1;(statearr_11884_11911[1] = 5);
} else
{var statearr_11885_11912 = state_11879__$1;(statearr_11885_11912[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 5))
{var inst_11852 = (state_11879[10]);var inst_11843 = (state_11879[7]);var inst_11844 = (state_11879[8]);var inst_11847 = (state_11879[9]);var inst_11851 = (inst_11843[inst_11844] = inst_11847);var inst_11852__$1 = (inst_11844 + 1);var inst_11853 = (inst_11852__$1 < n);var state_11879__$1 = (function (){var statearr_11886 = state_11879;(statearr_11886[10] = inst_11852__$1);
(statearr_11886[11] = inst_11851);
return statearr_11886;
})();if(cljs.core.truth_(inst_11853))
{var statearr_11887_11913 = state_11879__$1;(statearr_11887_11913[1] = 8);
} else
{var statearr_11888_11914 = state_11879__$1;(statearr_11888_11914[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 6))
{var inst_11844 = (state_11879[8]);var inst_11865 = (inst_11844 > 0);var state_11879__$1 = state_11879;if(cljs.core.truth_(inst_11865))
{var statearr_11890_11915 = state_11879__$1;(statearr_11890_11915[1] = 12);
} else
{var statearr_11891_11916 = state_11879__$1;(statearr_11891_11916[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 7))
{var inst_11875 = (state_11879[2]);var state_11879__$1 = state_11879;var statearr_11892_11917 = state_11879__$1;(statearr_11892_11917[2] = inst_11875);
(statearr_11892_11917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 8))
{var inst_11852 = (state_11879[10]);var inst_11843 = (state_11879[7]);var tmp11889 = inst_11843;var inst_11843__$1 = tmp11889;var inst_11844 = inst_11852;var state_11879__$1 = (function (){var statearr_11893 = state_11879;(statearr_11893[7] = inst_11843__$1);
(statearr_11893[8] = inst_11844);
return statearr_11893;
})();var statearr_11894_11918 = state_11879__$1;(statearr_11894_11918[2] = null);
(statearr_11894_11918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 9))
{var inst_11843 = (state_11879[7]);var inst_11857 = cljs.core.vec.call(null,inst_11843);var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11879__$1,11,out,inst_11857);
} else
{if((state_val_11880 === 10))
{var inst_11863 = (state_11879[2]);var state_11879__$1 = state_11879;var statearr_11895_11919 = state_11879__$1;(statearr_11895_11919[2] = inst_11863);
(statearr_11895_11919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 11))
{var inst_11859 = (state_11879[2]);var inst_11860 = (new Array(n));var inst_11843 = inst_11860;var inst_11844 = 0;var state_11879__$1 = (function (){var statearr_11896 = state_11879;(statearr_11896[7] = inst_11843);
(statearr_11896[8] = inst_11844);
(statearr_11896[12] = inst_11859);
return statearr_11896;
})();var statearr_11897_11920 = state_11879__$1;(statearr_11897_11920[2] = null);
(statearr_11897_11920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 12))
{var inst_11843 = (state_11879[7]);var inst_11867 = cljs.core.vec.call(null,inst_11843);var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11879__$1,15,out,inst_11867);
} else
{if((state_val_11880 === 13))
{var state_11879__$1 = state_11879;var statearr_11898_11921 = state_11879__$1;(statearr_11898_11921[2] = null);
(statearr_11898_11921[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 14))
{var inst_11872 = (state_11879[2]);var inst_11873 = cljs.core.async.close_BANG_.call(null,out);var state_11879__$1 = (function (){var statearr_11899 = state_11879;(statearr_11899[13] = inst_11872);
return statearr_11899;
})();var statearr_11900_11922 = state_11879__$1;(statearr_11900_11922[2] = inst_11873);
(statearr_11900_11922[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11880 === 15))
{var inst_11869 = (state_11879[2]);var state_11879__$1 = state_11879;var statearr_11901_11923 = state_11879__$1;(statearr_11901_11923[2] = inst_11869);
(statearr_11901_11923[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11905[0] = state_machine__5507__auto__);
(statearr_11905[1] = 1);
return statearr_11905;
});
var state_machine__5507__auto____1 = (function (state_11879){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11906){if((e11906 instanceof Object))
{var ex__5510__auto__ = e11906;var statearr_11907_11924 = state_11879;(statearr_11907_11924[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11925 = state_11879;
state_11879 = G__11925;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11879){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11908 = f__5522__auto__.call(null);(statearr_11908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11909);
return statearr_11908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12038){var state_val_12039 = (state_12038[1]);if((state_val_12039 === 1))
{var inst_11997 = [];var inst_11998 = inst_11997;var inst_11999 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12038__$1 = (function (){var statearr_12040 = state_12038;(statearr_12040[7] = inst_11999);
(statearr_12040[8] = inst_11998);
return statearr_12040;
})();var statearr_12041_12069 = state_12038__$1;(statearr_12041_12069[2] = null);
(statearr_12041_12069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 2))
{var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12038__$1,4,ch);
} else
{if((state_val_12039 === 3))
{var inst_12036 = (state_12038[2]);var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12038__$1,inst_12036);
} else
{if((state_val_12039 === 4))
{var inst_12002 = (state_12038[9]);var inst_12002__$1 = (state_12038[2]);var inst_12003 = (inst_12002__$1 == null);var inst_12004 = cljs.core.not.call(null,inst_12003);var state_12038__$1 = (function (){var statearr_12042 = state_12038;(statearr_12042[9] = inst_12002__$1);
return statearr_12042;
})();if(inst_12004)
{var statearr_12043_12070 = state_12038__$1;(statearr_12043_12070[1] = 5);
} else
{var statearr_12044_12071 = state_12038__$1;(statearr_12044_12071[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 5))
{var inst_11999 = (state_12038[7]);var inst_12006 = (state_12038[10]);var inst_12002 = (state_12038[9]);var inst_12006__$1 = f.call(null,inst_12002);var inst_12007 = cljs.core._EQ_.call(null,inst_12006__$1,inst_11999);var inst_12008 = cljs.core.keyword_identical_QMARK_.call(null,inst_11999,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12009 = (inst_12007) || (inst_12008);var state_12038__$1 = (function (){var statearr_12045 = state_12038;(statearr_12045[10] = inst_12006__$1);
return statearr_12045;
})();if(cljs.core.truth_(inst_12009))
{var statearr_12046_12072 = state_12038__$1;(statearr_12046_12072[1] = 8);
} else
{var statearr_12047_12073 = state_12038__$1;(statearr_12047_12073[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 6))
{var inst_11998 = (state_12038[8]);var inst_12023 = inst_11998.length;var inst_12024 = (inst_12023 > 0);var state_12038__$1 = state_12038;if(cljs.core.truth_(inst_12024))
{var statearr_12049_12074 = state_12038__$1;(statearr_12049_12074[1] = 12);
} else
{var statearr_12050_12075 = state_12038__$1;(statearr_12050_12075[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 7))
{var inst_12034 = (state_12038[2]);var state_12038__$1 = state_12038;var statearr_12051_12076 = state_12038__$1;(statearr_12051_12076[2] = inst_12034);
(statearr_12051_12076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 8))
{var inst_12006 = (state_12038[10]);var inst_11998 = (state_12038[8]);var inst_12002 = (state_12038[9]);var inst_12011 = inst_11998.push(inst_12002);var tmp12048 = inst_11998;var inst_11998__$1 = tmp12048;var inst_11999 = inst_12006;var state_12038__$1 = (function (){var statearr_12052 = state_12038;(statearr_12052[7] = inst_11999);
(statearr_12052[8] = inst_11998__$1);
(statearr_12052[11] = inst_12011);
return statearr_12052;
})();var statearr_12053_12077 = state_12038__$1;(statearr_12053_12077[2] = null);
(statearr_12053_12077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 9))
{var inst_11998 = (state_12038[8]);var inst_12014 = cljs.core.vec.call(null,inst_11998);var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12038__$1,11,out,inst_12014);
} else
{if((state_val_12039 === 10))
{var inst_12021 = (state_12038[2]);var state_12038__$1 = state_12038;var statearr_12054_12078 = state_12038__$1;(statearr_12054_12078[2] = inst_12021);
(statearr_12054_12078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 11))
{var inst_12006 = (state_12038[10]);var inst_12002 = (state_12038[9]);var inst_12016 = (state_12038[2]);var inst_12017 = [];var inst_12018 = inst_12017.push(inst_12002);var inst_11998 = inst_12017;var inst_11999 = inst_12006;var state_12038__$1 = (function (){var statearr_12055 = state_12038;(statearr_12055[7] = inst_11999);
(statearr_12055[12] = inst_12018);
(statearr_12055[13] = inst_12016);
(statearr_12055[8] = inst_11998);
return statearr_12055;
})();var statearr_12056_12079 = state_12038__$1;(statearr_12056_12079[2] = null);
(statearr_12056_12079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 12))
{var inst_11998 = (state_12038[8]);var inst_12026 = cljs.core.vec.call(null,inst_11998);var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12038__$1,15,out,inst_12026);
} else
{if((state_val_12039 === 13))
{var state_12038__$1 = state_12038;var statearr_12057_12080 = state_12038__$1;(statearr_12057_12080[2] = null);
(statearr_12057_12080[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 14))
{var inst_12031 = (state_12038[2]);var inst_12032 = cljs.core.async.close_BANG_.call(null,out);var state_12038__$1 = (function (){var statearr_12058 = state_12038;(statearr_12058[14] = inst_12031);
return statearr_12058;
})();var statearr_12059_12081 = state_12038__$1;(statearr_12059_12081[2] = inst_12032);
(statearr_12059_12081[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12039 === 15))
{var inst_12028 = (state_12038[2]);var state_12038__$1 = state_12038;var statearr_12060_12082 = state_12038__$1;(statearr_12060_12082[2] = inst_12028);
(statearr_12060_12082[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_12064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12064[0] = state_machine__5507__auto__);
(statearr_12064[1] = 1);
return statearr_12064;
});
var state_machine__5507__auto____1 = (function (state_12038){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12038);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12065){if((e12065 instanceof Object))
{var ex__5510__auto__ = e12065;var statearr_12066_12083 = state_12038;(statearr_12066_12083[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12084 = state_12038;
state_12038 = G__12084;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12038){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12067 = f__5522__auto__.call(null);(statearr_12067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12068);
return statearr_12067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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