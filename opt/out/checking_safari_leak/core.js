// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8368){var state_val_8369 = (state_8368[1]);if((state_val_8369 === 8))
{var inst_8361 = (state_8368[2]);var inst_8355 = inst_8361;var state_8368__$1 = (function (){var statearr_8370 = state_8368;(statearr_8370[7] = inst_8355);
return statearr_8370;
})();var statearr_8371_8385 = state_8368__$1;(statearr_8371_8385[2] = null);
(statearr_8371_8385[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8369 === 7))
{var inst_8364 = (state_8368[2]);var state_8368__$1 = state_8368;var statearr_8372_8386 = state_8368__$1;(statearr_8372_8386[2] = inst_8364);
(statearr_8372_8386[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8369 === 6))
{var state_8368__$1 = state_8368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8368__$1,8,in$);
} else
{if((state_val_8369 === 5))
{var state_8368__$1 = state_8368;var statearr_8373_8387 = state_8368__$1;(statearr_8373_8387[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_8373_8387[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8369 === 4))
{var inst_8366 = (state_8368[2]);var state_8368__$1 = state_8368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8368__$1,inst_8366);
} else
{if((state_val_8369 === 3))
{var inst_8355 = (state_8368[7]);var inst_8357 = (inst_8355 == null);var state_8368__$1 = state_8368;if(cljs.core.truth_(inst_8357))
{var statearr_8374_8388 = state_8368__$1;(statearr_8374_8388[1] = 5);
} else
{var statearr_8375_8389 = state_8368__$1;(statearr_8375_8389[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8369 === 2))
{var inst_8354 = (state_8368[2]);var inst_8355 = inst_8354;var state_8368__$1 = (function (){var statearr_8376 = state_8368;(statearr_8376[7] = inst_8355);
return statearr_8376;
})();var statearr_8377_8390 = state_8368__$1;(statearr_8377_8390[2] = null);
(statearr_8377_8390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8369 === 1))
{var state_8368__$1 = state_8368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8368__$1,2,in$);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8381 = [null,null,null,null,null,null,null,null];(statearr_8381[0] = state_machine__5507__auto__);
(statearr_8381[1] = 1);
return statearr_8381;
});
var state_machine__5507__auto____1 = (function (state_8368){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8368);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8382){if((e8382 instanceof Object))
{var ex__5510__auto__ = e8382;var statearr_8383_8391 = state_8368;(statearr_8383_8391[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8392 = state_8368;
state_8368 = G__8392;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8368){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8384 = f__5522__auto__.call(null);(statearr_8384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
checking_safari_leak.core.mymap = (function mymap(f,in$){var out = cljs.core.async.chan.call(null);var c__5521__auto___8435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8423){var state_val_8424 = (state_8423[1]);if((state_val_8424 === 4))
{var inst_8416 = (state_8423[2]);var inst_8417 = f.call(null,inst_8416);var inst_8418 = cljs.core.async.put_BANG_.call(null,out,inst_8417);var state_8423__$1 = (function (){var statearr_8425 = state_8423;(statearr_8425[7] = inst_8418);
return statearr_8425;
})();var statearr_8426_8436 = state_8423__$1;(statearr_8426_8436[2] = null);
(statearr_8426_8436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8424 === 3))
{var inst_8421 = (state_8423[2]);var state_8423__$1 = state_8423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8423__$1,inst_8421);
} else
{if((state_val_8424 === 2))
{var state_8423__$1 = state_8423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8423__$1,4,in$);
} else
{if((state_val_8424 === 1))
{var state_8423__$1 = state_8423;var statearr_8427_8437 = state_8423__$1;(statearr_8427_8437[2] = null);
(statearr_8427_8437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8431 = [null,null,null,null,null,null,null,null];(statearr_8431[0] = state_machine__5507__auto__);
(statearr_8431[1] = 1);
return statearr_8431;
});
var state_machine__5507__auto____1 = (function (state_8423){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8423);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8432){if((e8432 instanceof Object))
{var ex__5510__auto__ = e8432;var statearr_8433_8438 = state_8423;(statearr_8433_8438[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8439 = state_8423;
state_8423 = G__8439;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8423){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8434 = f__5522__auto__.call(null);(statearr_8434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___8435);
return statearr_8434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
checking_safari_leak.core.routes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"map<-chain","map<-chain",2559155334),(function has_memory_leak_as_well(input){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input)))))))))))))))));
}),new cljs.core.Keyword(null,"map<","map<",1017248210),(function (input_chan){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input_chan))))))))))))));
}),new cljs.core.Keyword(null,"map>","map>",1017248212),(function (input_chan){return cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,input_chan))))))))))))));
}),new cljs.core.Keyword(null,"custom-map","custom-map",3726014578),checking_safari_leak.core.has_memory_leak_mymap = (function has_memory_leak_mymap(input_chan){return checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,input_chan))))))))))))));
}),new cljs.core.Keyword(null,"let-based","let-based",4560534771),(function (input_chan){var a = cljs.core.async.map_LT_.call(null,cljs.core.identity,input_chan);var a__$1 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a);var a__$2 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$1);var a__$3 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$2);var a__$4 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$3);var a__$5 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$4);var a__$6 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$5);var a__$7 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$6);var a__$8 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$7);var a__$9 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$8);var a__$10 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$9);var a__$11 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$10);var a__$12 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$11);var a__$13 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$12);var a__$14 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$13);var a__$15 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$14);var a__$16 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$15);return a__$16;
}),new cljs.core.Keyword(null,"comp-partial","comp-partial",3117600821),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity))], null);
checking_safari_leak.core.data = (function data(){return cljs.core.mapv.call(null,cljs.core.identity,cljs.core.range.call(null,1000));
});
checking_safari_leak.core.output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
checking_safari_leak.core.doit = (function doit(f){var output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);cljs.core.add_watch.call(null,output_data,new cljs.core.Keyword(null,"output-change","output-change",1406166382),(function (_,___$1,___$2,n){return document.getElementById("main-area").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){return [cljs.core.str("<div> timer: "),cljs.core.str(new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("ms </div>")].join('');
}),n));
}));
var input = cljs.core.async.chan.call(null);var output = f.call(null,input);var start_time = (new Date()).getTime();cljs.core.mapv.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,input,checking_safari_leak.core.data.call(null));
}),cljs.core.range.call(null,12));
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8480){var state_val_8481 = (state_8480[1]);if((state_val_8481 === 4))
{var inst_8468 = (state_8480[2]);var inst_8469 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_8470 = (new Date());var inst_8471 = inst_8470.getTime();var inst_8472 = (inst_8471 - start_time);var inst_8473 = [inst_8472];var inst_8474 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_8469,inst_8473);var inst_8475 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_8474);var state_8480__$1 = (function (){var statearr_8482 = state_8480;(statearr_8482[7] = inst_8468);
(statearr_8482[8] = inst_8475);
return statearr_8482;
})();var statearr_8483_8492 = state_8480__$1;(statearr_8483_8492[2] = null);
(statearr_8483_8492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8481 === 3))
{var inst_8478 = (state_8480[2]);var state_8480__$1 = state_8480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8480__$1,inst_8478);
} else
{if((state_val_8481 === 2))
{var state_8480__$1 = state_8480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8480__$1,4,output);
} else
{if((state_val_8481 === 1))
{var state_8480__$1 = state_8480;var statearr_8484_8493 = state_8480__$1;(statearr_8484_8493[2] = null);
(statearr_8484_8493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8488 = [null,null,null,null,null,null,null,null,null];(statearr_8488[0] = state_machine__5507__auto__);
(statearr_8488[1] = 1);
return statearr_8488;
});
var state_machine__5507__auto____1 = (function (state_8480){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8480);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8489){if((e8489 instanceof Object))
{var ex__5510__auto__ = e8489;var statearr_8490_8494 = state_8480;(statearr_8490_8494[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8495 = state_8480;
state_8480 = G__8495;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8480){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8491 = f__5522__auto__.call(null);(statearr_8491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
var leak_8496 = cljs.core.last.call(null,clojure.string.split.call(null,location.href,/#/));var temp__4090__auto___8497 = cljs.core.keyword.call(null,leak_8496).call(null,checking_safari_leak.core.routes);if(cljs.core.truth_(temp__4090__auto___8497))
{var f_8498 = temp__4090__auto___8497;document.getElementById("leaky").innerHTML = leak_8496;
checking_safari_leak.core.doit.call(null,f_8498);
} else
{document.getElementById("leaky").innerHTML = "no operation for that route";
}

//# sourceMappingURL=core.js.map