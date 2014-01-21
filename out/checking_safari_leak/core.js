// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9271){var state_val_9272 = (state_9271[1]);if((state_val_9272 === 8))
{var inst_9264 = (state_9271[2]);var inst_9258 = inst_9264;var state_9271__$1 = (function (){var statearr_9273 = state_9271;(statearr_9273[7] = inst_9258);
return statearr_9273;
})();var statearr_9274_9288 = state_9271__$1;(statearr_9274_9288[2] = null);
(statearr_9274_9288[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9272 === 7))
{var inst_9267 = (state_9271[2]);var state_9271__$1 = state_9271;var statearr_9275_9289 = state_9271__$1;(statearr_9275_9289[2] = inst_9267);
(statearr_9275_9289[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9272 === 6))
{var state_9271__$1 = state_9271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9271__$1,8,in$);
} else
{if((state_val_9272 === 5))
{var state_9271__$1 = state_9271;var statearr_9276_9290 = state_9271__$1;(statearr_9276_9290[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_9276_9290[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9272 === 4))
{var inst_9269 = (state_9271[2]);var state_9271__$1 = state_9271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9271__$1,inst_9269);
} else
{if((state_val_9272 === 3))
{var inst_9258 = (state_9271[7]);var inst_9260 = (inst_9258 == null);var state_9271__$1 = state_9271;if(cljs.core.truth_(inst_9260))
{var statearr_9277_9291 = state_9271__$1;(statearr_9277_9291[1] = 5);
} else
{var statearr_9278_9292 = state_9271__$1;(statearr_9278_9292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9272 === 2))
{var inst_9257 = (state_9271[2]);var inst_9258 = inst_9257;var state_9271__$1 = (function (){var statearr_9279 = state_9271;(statearr_9279[7] = inst_9258);
return statearr_9279;
})();var statearr_9280_9293 = state_9271__$1;(statearr_9280_9293[2] = null);
(statearr_9280_9293[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9272 === 1))
{var state_9271__$1 = state_9271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9271__$1,2,in$);
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
var state_machine__5507__auto____0 = (function (){var statearr_9284 = [null,null,null,null,null,null,null,null];(statearr_9284[0] = state_machine__5507__auto__);
(statearr_9284[1] = 1);
return statearr_9284;
});
var state_machine__5507__auto____1 = (function (state_9271){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9285){if((e9285 instanceof Object))
{var ex__5510__auto__ = e9285;var statearr_9286_9294 = state_9271;(statearr_9286_9294[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9295 = state_9271;
state_9271 = G__9295;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9271){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9287 = f__5522__auto__.call(null);(statearr_9287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_9287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
checking_safari_leak.core.has_memory_leak = (function has_memory_leak(input_chan){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input_chan))))))))))))))))));
});
checking_safari_leak.core.has_memory_leak_as_well = (function has_memory_leak_as_well(input){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input)))))))))))))))));
});
checking_safari_leak.core.no_memory_leak = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity));
checking_safari_leak.core.data = (function data(){return cljs.core.mapv.call(null,cljs.core.identity,cljs.core.range.call(null,1000));
});
checking_safari_leak.core.output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
checking_safari_leak.core.doit = (function doit(f){var output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);cljs.core.add_watch.call(null,output_data,new cljs.core.Keyword(null,"output-change","output-change",1406166382),(function (_,___$1,___$2,n){return document.getElementById("main-area").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){return [cljs.core.str("<div> timer: "),cljs.core.str(new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("ms </div>")].join('');
}),n));
}));
var input = cljs.core.async.chan.call(null);var output = f.call(null,input);var start_time = (new Date()).getTime();cljs.core.mapv.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,input,checking_safari_leak.core.data.call(null));
}),cljs.core.range.call(null,12));
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9336){var state_val_9337 = (state_9336[1]);if((state_val_9337 === 4))
{var inst_9324 = (state_9336[2]);var inst_9325 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_9326 = (new Date());var inst_9327 = inst_9326.getTime();var inst_9328 = (inst_9327 - start_time);var inst_9329 = [inst_9328];var inst_9330 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9325,inst_9329);var inst_9331 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_9330);var state_9336__$1 = (function (){var statearr_9338 = state_9336;(statearr_9338[7] = inst_9324);
(statearr_9338[8] = inst_9331);
return statearr_9338;
})();var statearr_9339_9348 = state_9336__$1;(statearr_9339_9348[2] = null);
(statearr_9339_9348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9337 === 3))
{var inst_9334 = (state_9336[2]);var state_9336__$1 = state_9336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9336__$1,inst_9334);
} else
{if((state_val_9337 === 2))
{var state_9336__$1 = state_9336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9336__$1,4,output);
} else
{if((state_val_9337 === 1))
{var state_9336__$1 = state_9336;var statearr_9340_9349 = state_9336__$1;(statearr_9340_9349[2] = null);
(statearr_9340_9349[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_9344 = [null,null,null,null,null,null,null,null,null];(statearr_9344[0] = state_machine__5507__auto__);
(statearr_9344[1] = 1);
return statearr_9344;
});
var state_machine__5507__auto____1 = (function (state_9336){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9336);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9345){if((e9345 instanceof Object))
{var ex__5510__auto__ = e9345;var statearr_9346_9350 = state_9336;(statearr_9346_9350[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9336);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9351 = state_9336;
state_9336 = G__9351;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9336){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9347 = f__5522__auto__.call(null);(statearr_9347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_9347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
var leak_9352 = cljs.core._EQ_.call(null,"true",cljs.core.last.call(null,clojure.string.split.call(null,location.href,/leak=/)));if(leak_9352)
{document.getElementById("leaky").innerHTML = "Leaking now";
checking_safari_leak.core.doit.call(null,checking_safari_leak.core.has_memory_leak);
} else
{checking_safari_leak.core.doit.call(null,checking_safari_leak.core.no_memory_leak);
}

//# sourceMappingURL=core.js.map