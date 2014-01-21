// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16890){var state_val_16891 = (state_16890[1]);if((state_val_16891 === 8))
{var inst_16883 = (state_16890[2]);var inst_16877 = inst_16883;var state_16890__$1 = (function (){var statearr_16892 = state_16890;(statearr_16892[7] = inst_16877);
return statearr_16892;
})();var statearr_16893_16907 = state_16890__$1;(statearr_16893_16907[2] = null);
(statearr_16893_16907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 7))
{var inst_16886 = (state_16890[2]);var state_16890__$1 = state_16890;var statearr_16894_16908 = state_16890__$1;(statearr_16894_16908[2] = inst_16886);
(statearr_16894_16908[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 6))
{var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16890__$1,8,in$);
} else
{if((state_val_16891 === 5))
{var state_16890__$1 = state_16890;var statearr_16895_16909 = state_16890__$1;(statearr_16895_16909[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_16895_16909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 4))
{var inst_16888 = (state_16890[2]);var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16890__$1,inst_16888);
} else
{if((state_val_16891 === 3))
{var inst_16877 = (state_16890[7]);var inst_16879 = (inst_16877 == null);var state_16890__$1 = state_16890;if(cljs.core.truth_(inst_16879))
{var statearr_16896_16910 = state_16890__$1;(statearr_16896_16910[1] = 5);
} else
{var statearr_16897_16911 = state_16890__$1;(statearr_16897_16911[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 2))
{var inst_16876 = (state_16890[2]);var inst_16877 = inst_16876;var state_16890__$1 = (function (){var statearr_16898 = state_16890;(statearr_16898[7] = inst_16877);
return statearr_16898;
})();var statearr_16899_16912 = state_16890__$1;(statearr_16899_16912[2] = null);
(statearr_16899_16912[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 1))
{var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16890__$1,2,in$);
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
var state_machine__5507__auto____0 = (function (){var statearr_16903 = [null,null,null,null,null,null,null,null];(statearr_16903[0] = state_machine__5507__auto__);
(statearr_16903[1] = 1);
return statearr_16903;
});
var state_machine__5507__auto____1 = (function (state_16890){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16904){if((e16904 instanceof Object))
{var ex__5510__auto__ = e16904;var statearr_16905_16913 = state_16890;(statearr_16905_16913[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16914 = state_16890;
state_16890 = G__16914;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16906 = f__5522__auto__.call(null);(statearr_16906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16906;
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
checking_safari_leak.core.doit = (function doit(f){var output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);cljs.core.add_watch.call(null,output_data,new cljs.core.Keyword(null,"output-change","output-change",1406166382),(function (_,___$1,___$2,n){return document.getElementById("main-area").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){return [cljs.core.str("<div> timer: "),cljs.core.str(new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("ms </div>")].join('');
}),n));
}));
var input = cljs.core.async.chan.call(null);var output = f.call(null,input);var start_time = (new Date()).getTime();cljs.core.mapv.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,input,checking_safari_leak.core.data.call(null));
}),cljs.core.range.call(null,12));
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16955){var state_val_16956 = (state_16955[1]);if((state_val_16956 === 4))
{var inst_16943 = (state_16955[2]);var inst_16944 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_16945 = (new Date());var inst_16946 = inst_16945.getTime();var inst_16947 = (inst_16946 - start_time);var inst_16948 = [inst_16947];var inst_16949 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16944,inst_16948);var inst_16950 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_16949);var state_16955__$1 = (function (){var statearr_16957 = state_16955;(statearr_16957[7] = inst_16950);
(statearr_16957[8] = inst_16943);
return statearr_16957;
})();var statearr_16958_16967 = state_16955__$1;(statearr_16958_16967[2] = null);
(statearr_16958_16967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 3))
{var inst_16953 = (state_16955[2]);var state_16955__$1 = state_16955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16955__$1,inst_16953);
} else
{if((state_val_16956 === 2))
{var state_16955__$1 = state_16955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16955__$1,4,output);
} else
{if((state_val_16956 === 1))
{var state_16955__$1 = state_16955;var statearr_16959_16968 = state_16955__$1;(statearr_16959_16968[2] = null);
(statearr_16959_16968[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_16963 = [null,null,null,null,null,null,null,null,null];(statearr_16963[0] = state_machine__5507__auto__);
(statearr_16963[1] = 1);
return statearr_16963;
});
var state_machine__5507__auto____1 = (function (state_16955){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16955);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16964){if((e16964 instanceof Object))
{var ex__5510__auto__ = e16964;var statearr_16965_16969 = state_16955;(statearr_16965_16969[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16970 = state_16955;
state_16955 = G__16970;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16955){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16966 = f__5522__auto__.call(null);(statearr_16966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
checking_safari_leak.core.doit.call(null,checking_safari_leak.core.no_memory_leak);

//# sourceMappingURL=core.js.map