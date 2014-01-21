// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9013){var state_val_9014 = (state_9013[1]);if((state_val_9014 === 8))
{var inst_9006 = (state_9013[2]);var inst_9000 = inst_9006;var state_9013__$1 = (function (){var statearr_9015 = state_9013;(statearr_9015[7] = inst_9000);
return statearr_9015;
})();var statearr_9016_9030 = state_9013__$1;(statearr_9016_9030[2] = null);
(statearr_9016_9030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9014 === 7))
{var inst_9009 = (state_9013[2]);var state_9013__$1 = state_9013;var statearr_9017_9031 = state_9013__$1;(statearr_9017_9031[2] = inst_9009);
(statearr_9017_9031[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9014 === 6))
{var state_9013__$1 = state_9013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9013__$1,8,in$);
} else
{if((state_val_9014 === 5))
{var state_9013__$1 = state_9013;var statearr_9018_9032 = state_9013__$1;(statearr_9018_9032[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_9018_9032[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9014 === 4))
{var inst_9011 = (state_9013[2]);var state_9013__$1 = state_9013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9013__$1,inst_9011);
} else
{if((state_val_9014 === 3))
{var inst_9000 = (state_9013[7]);var inst_9002 = (inst_9000 == null);var state_9013__$1 = state_9013;if(cljs.core.truth_(inst_9002))
{var statearr_9019_9033 = state_9013__$1;(statearr_9019_9033[1] = 5);
} else
{var statearr_9020_9034 = state_9013__$1;(statearr_9020_9034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9014 === 2))
{var inst_8999 = (state_9013[2]);var inst_9000 = inst_8999;var state_9013__$1 = (function (){var statearr_9021 = state_9013;(statearr_9021[7] = inst_9000);
return statearr_9021;
})();var statearr_9022_9035 = state_9013__$1;(statearr_9022_9035[2] = null);
(statearr_9022_9035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9014 === 1))
{var state_9013__$1 = state_9013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9013__$1,2,in$);
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
var state_machine__5507__auto____0 = (function (){var statearr_9026 = [null,null,null,null,null,null,null,null];(statearr_9026[0] = state_machine__5507__auto__);
(statearr_9026[1] = 1);
return statearr_9026;
});
var state_machine__5507__auto____1 = (function (state_9013){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9013);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9027){if((e9027 instanceof Object))
{var ex__5510__auto__ = e9027;var statearr_9028_9036 = state_9013;(statearr_9028_9036[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9037 = state_9013;
state_9013 = G__9037;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9013){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9029 = f__5522__auto__.call(null);(statearr_9029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_9029;
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9078){var state_val_9079 = (state_9078[1]);if((state_val_9079 === 4))
{var inst_9066 = (state_9078[2]);var inst_9067 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_9068 = (new Date());var inst_9069 = inst_9068.getTime();var inst_9070 = (inst_9069 - start_time);var inst_9071 = [inst_9070];var inst_9072 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9067,inst_9071);var inst_9073 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_9072);var state_9078__$1 = (function (){var statearr_9080 = state_9078;(statearr_9080[7] = inst_9066);
(statearr_9080[8] = inst_9073);
return statearr_9080;
})();var statearr_9081_9090 = state_9078__$1;(statearr_9081_9090[2] = null);
(statearr_9081_9090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 3))
{var inst_9076 = (state_9078[2]);var state_9078__$1 = state_9078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9078__$1,inst_9076);
} else
{if((state_val_9079 === 2))
{var state_9078__$1 = state_9078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9078__$1,4,output);
} else
{if((state_val_9079 === 1))
{var state_9078__$1 = state_9078;var statearr_9082_9091 = state_9078__$1;(statearr_9082_9091[2] = null);
(statearr_9082_9091[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_9086 = [null,null,null,null,null,null,null,null,null];(statearr_9086[0] = state_machine__5507__auto__);
(statearr_9086[1] = 1);
return statearr_9086;
});
var state_machine__5507__auto____1 = (function (state_9078){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9078);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9087){if((e9087 instanceof Object))
{var ex__5510__auto__ = e9087;var statearr_9088_9092 = state_9078;(statearr_9088_9092[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9093 = state_9078;
state_9078 = G__9093;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9078){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9089 = f__5522__auto__.call(null);(statearr_9089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_9089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
var leak_9094 = cljs.core._EQ_.call(null,"true",cljs.core.last.call(null,clojure.string.split.call(null,location.href,/leak=/)));if(leak_9094)
{document.getElementById("leaky").innerHTML = "Leaking now";
checking_safari_leak.core.doit.call(null,checking_safari_leak.core.has_memory_leak);
} else
{checking_safari_leak.core.doit.call(null,checking_safari_leak.core.no_memory_leak);
}

//# sourceMappingURL=core.js.map