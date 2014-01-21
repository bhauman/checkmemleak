// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16378){var state_val_16379 = (state_16378[1]);if((state_val_16379 === 8))
{var inst_16371 = (state_16378[2]);var inst_16365 = inst_16371;var state_16378__$1 = (function (){var statearr_16380 = state_16378;(statearr_16380[7] = inst_16365);
return statearr_16380;
})();var statearr_16381_16395 = state_16378__$1;(statearr_16381_16395[2] = null);
(statearr_16381_16395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16379 === 7))
{var inst_16374 = (state_16378[2]);var state_16378__$1 = state_16378;var statearr_16382_16396 = state_16378__$1;(statearr_16382_16396[2] = inst_16374);
(statearr_16382_16396[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16379 === 6))
{var state_16378__$1 = state_16378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16378__$1,8,in$);
} else
{if((state_val_16379 === 5))
{var state_16378__$1 = state_16378;var statearr_16383_16397 = state_16378__$1;(statearr_16383_16397[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_16383_16397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16379 === 4))
{var inst_16376 = (state_16378[2]);var state_16378__$1 = state_16378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16378__$1,inst_16376);
} else
{if((state_val_16379 === 3))
{var inst_16365 = (state_16378[7]);var inst_16367 = (inst_16365 == null);var state_16378__$1 = state_16378;if(cljs.core.truth_(inst_16367))
{var statearr_16384_16398 = state_16378__$1;(statearr_16384_16398[1] = 5);
} else
{var statearr_16385_16399 = state_16378__$1;(statearr_16385_16399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16379 === 2))
{var inst_16364 = (state_16378[2]);var inst_16365 = inst_16364;var state_16378__$1 = (function (){var statearr_16386 = state_16378;(statearr_16386[7] = inst_16365);
return statearr_16386;
})();var statearr_16387_16400 = state_16378__$1;(statearr_16387_16400[2] = null);
(statearr_16387_16400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16379 === 1))
{var state_16378__$1 = state_16378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16378__$1,2,in$);
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
var state_machine__5507__auto____0 = (function (){var statearr_16391 = [null,null,null,null,null,null,null,null];(statearr_16391[0] = state_machine__5507__auto__);
(statearr_16391[1] = 1);
return statearr_16391;
});
var state_machine__5507__auto____1 = (function (state_16378){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16378);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16392){if((e16392 instanceof Object))
{var ex__5510__auto__ = e16392;var statearr_16393_16401 = state_16378;(statearr_16393_16401[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16378);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16402 = state_16378;
state_16378 = G__16402;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16378){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16394 = f__5522__auto__.call(null);(statearr_16394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
checking_safari_leak.core.has_memory_leak = (function has_memory_leak(input_chan){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input_chan))))))))))))))));
});
checking_safari_leak.core.has_memory_leak_as_well = (function has_memory_leak_as_well(input){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input)))))))))))))))));
});
checking_safari_leak.core.no_memory_leak = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity));
checking_safari_leak.core.data = (function data(){return cljs.core.mapv.call(null,cljs.core.identity,cljs.core.range.call(null,1000));
});
checking_safari_leak.core.output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
checking_safari_leak.core.doit = (function doit(){var output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);cljs.core.add_watch.call(null,output_data,new cljs.core.Keyword(null,"output-change","output-change",1406166382),(function (_,___$1,___$2,n){return document.getElementById("main-area").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){return [cljs.core.str("<div> time: "),cljs.core.str(new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("ms </div>")].join('');
}),n));
}));
var input = cljs.core.async.chan.call(null);var output = checking_safari_leak.core.no_memory_leak.call(null,input);var start_time = (new Date()).getTime();cljs.core.mapv.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,input,checking_safari_leak.core.data.call(null));
}),cljs.core.range.call(null,12));
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16443){var state_val_16444 = (state_16443[1]);if((state_val_16444 === 4))
{var inst_16431 = (state_16443[2]);var inst_16432 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_16433 = (new Date());var inst_16434 = inst_16433.getTime();var inst_16435 = (inst_16434 - start_time);var inst_16436 = [inst_16435];var inst_16437 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16432,inst_16436);var inst_16438 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_16437);var state_16443__$1 = (function (){var statearr_16445 = state_16443;(statearr_16445[7] = inst_16438);
(statearr_16445[8] = inst_16431);
return statearr_16445;
})();var statearr_16446_16455 = state_16443__$1;(statearr_16446_16455[2] = null);
(statearr_16446_16455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16444 === 3))
{var inst_16441 = (state_16443[2]);var state_16443__$1 = state_16443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16443__$1,inst_16441);
} else
{if((state_val_16444 === 2))
{var state_16443__$1 = state_16443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16443__$1,4,output);
} else
{if((state_val_16444 === 1))
{var state_16443__$1 = state_16443;var statearr_16447_16456 = state_16443__$1;(statearr_16447_16456[2] = null);
(statearr_16447_16456[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_16451 = [null,null,null,null,null,null,null,null,null];(statearr_16451[0] = state_machine__5507__auto__);
(statearr_16451[1] = 1);
return statearr_16451;
});
var state_machine__5507__auto____1 = (function (state_16443){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16452){if((e16452 instanceof Object))
{var ex__5510__auto__ = e16452;var statearr_16453_16457 = state_16443;(statearr_16453_16457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16443);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16458 = state_16443;
state_16443 = G__16458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16443){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16454 = f__5522__auto__.call(null);(statearr_16454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
checking_safari_leak.core.doit.call(null);

//# sourceMappingURL=core.js.map