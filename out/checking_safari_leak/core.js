// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16634){var state_val_16635 = (state_16634[1]);if((state_val_16635 === 8))
{var inst_16627 = (state_16634[2]);var inst_16621 = inst_16627;var state_16634__$1 = (function (){var statearr_16636 = state_16634;(statearr_16636[7] = inst_16621);
return statearr_16636;
})();var statearr_16637_16651 = state_16634__$1;(statearr_16637_16651[2] = null);
(statearr_16637_16651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16635 === 7))
{var inst_16630 = (state_16634[2]);var state_16634__$1 = state_16634;var statearr_16638_16652 = state_16634__$1;(statearr_16638_16652[2] = inst_16630);
(statearr_16638_16652[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16635 === 6))
{var state_16634__$1 = state_16634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16634__$1,8,in$);
} else
{if((state_val_16635 === 5))
{var state_16634__$1 = state_16634;var statearr_16639_16653 = state_16634__$1;(statearr_16639_16653[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_16639_16653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16635 === 4))
{var inst_16632 = (state_16634[2]);var state_16634__$1 = state_16634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16634__$1,inst_16632);
} else
{if((state_val_16635 === 3))
{var inst_16621 = (state_16634[7]);var inst_16623 = (inst_16621 == null);var state_16634__$1 = state_16634;if(cljs.core.truth_(inst_16623))
{var statearr_16640_16654 = state_16634__$1;(statearr_16640_16654[1] = 5);
} else
{var statearr_16641_16655 = state_16634__$1;(statearr_16641_16655[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16635 === 2))
{var inst_16620 = (state_16634[2]);var inst_16621 = inst_16620;var state_16634__$1 = (function (){var statearr_16642 = state_16634;(statearr_16642[7] = inst_16621);
return statearr_16642;
})();var statearr_16643_16656 = state_16634__$1;(statearr_16643_16656[2] = null);
(statearr_16643_16656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16635 === 1))
{var state_16634__$1 = state_16634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16634__$1,2,in$);
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
var state_machine__5507__auto____0 = (function (){var statearr_16647 = [null,null,null,null,null,null,null,null];(statearr_16647[0] = state_machine__5507__auto__);
(statearr_16647[1] = 1);
return statearr_16647;
});
var state_machine__5507__auto____1 = (function (state_16634){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16648){if((e16648 instanceof Object))
{var ex__5510__auto__ = e16648;var statearr_16649_16657 = state_16634;(statearr_16649_16657[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16658 = state_16634;
state_16634 = G__16658;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16634){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16650 = f__5522__auto__.call(null);(statearr_16650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16650;
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
checking_safari_leak.core.doit = (function doit(){var output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);cljs.core.add_watch.call(null,output_data,new cljs.core.Keyword(null,"output-change","output-change",1406166382),(function (_,___$1,___$2,n){return document.getElementById("main-area").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){return [cljs.core.str("<div> timer: "),cljs.core.str(new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("ms </div>")].join('');
}),n));
}));
var input = cljs.core.async.chan.call(null);var output = checking_safari_leak.core.has_memory_leak.call(null,input);var start_time = (new Date()).getTime();cljs.core.mapv.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,input,checking_safari_leak.core.data.call(null));
}),cljs.core.range.call(null,12));
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16699){var state_val_16700 = (state_16699[1]);if((state_val_16700 === 4))
{var inst_16687 = (state_16699[2]);var inst_16688 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_16689 = (new Date());var inst_16690 = inst_16689.getTime();var inst_16691 = (inst_16690 - start_time);var inst_16692 = [inst_16691];var inst_16693 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16688,inst_16692);var inst_16694 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_16693);var state_16699__$1 = (function (){var statearr_16701 = state_16699;(statearr_16701[7] = inst_16687);
(statearr_16701[8] = inst_16694);
return statearr_16701;
})();var statearr_16702_16711 = state_16699__$1;(statearr_16702_16711[2] = null);
(statearr_16702_16711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16700 === 3))
{var inst_16697 = (state_16699[2]);var state_16699__$1 = state_16699;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16699__$1,inst_16697);
} else
{if((state_val_16700 === 2))
{var state_16699__$1 = state_16699;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16699__$1,4,output);
} else
{if((state_val_16700 === 1))
{var state_16699__$1 = state_16699;var statearr_16703_16712 = state_16699__$1;(statearr_16703_16712[2] = null);
(statearr_16703_16712[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_16707 = [null,null,null,null,null,null,null,null,null];(statearr_16707[0] = state_machine__5507__auto__);
(statearr_16707[1] = 1);
return statearr_16707;
});
var state_machine__5507__auto____1 = (function (state_16699){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16699);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16708){if((e16708 instanceof Object))
{var ex__5510__auto__ = e16708;var statearr_16709_16713 = state_16699;(statearr_16709_16713[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16699);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16714 = state_16699;
state_16699 = G__16714;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16699){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16710 = f__5522__auto__.call(null);(statearr_16710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_16710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
checking_safari_leak.core.doit.call(null);

//# sourceMappingURL=core.js.map