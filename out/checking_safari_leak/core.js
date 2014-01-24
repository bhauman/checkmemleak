// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15751){var state_val_15752 = (state_15751[1]);if((state_val_15752 === 8))
{var inst_15744 = (state_15751[2]);var inst_15738 = inst_15744;var state_15751__$1 = (function (){var statearr_15753 = state_15751;(statearr_15753[7] = inst_15738);
return statearr_15753;
})();var statearr_15754_15768 = state_15751__$1;(statearr_15754_15768[2] = null);
(statearr_15754_15768[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15752 === 7))
{var inst_15747 = (state_15751[2]);var state_15751__$1 = state_15751;var statearr_15755_15769 = state_15751__$1;(statearr_15755_15769[2] = inst_15747);
(statearr_15755_15769[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15752 === 6))
{var state_15751__$1 = state_15751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15751__$1,8,in$);
} else
{if((state_val_15752 === 5))
{var state_15751__$1 = state_15751;var statearr_15756_15770 = state_15751__$1;(statearr_15756_15770[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_15756_15770[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15752 === 4))
{var inst_15749 = (state_15751[2]);var state_15751__$1 = state_15751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15751__$1,inst_15749);
} else
{if((state_val_15752 === 3))
{var inst_15738 = (state_15751[7]);var inst_15740 = (inst_15738 == null);var state_15751__$1 = state_15751;if(cljs.core.truth_(inst_15740))
{var statearr_15757_15771 = state_15751__$1;(statearr_15757_15771[1] = 5);
} else
{var statearr_15758_15772 = state_15751__$1;(statearr_15758_15772[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15752 === 2))
{var inst_15737 = (state_15751[2]);var inst_15738 = inst_15737;var state_15751__$1 = (function (){var statearr_15759 = state_15751;(statearr_15759[7] = inst_15738);
return statearr_15759;
})();var statearr_15760_15773 = state_15751__$1;(statearr_15760_15773[2] = null);
(statearr_15760_15773[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15752 === 1))
{var state_15751__$1 = state_15751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15751__$1,2,in$);
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
var state_machine__5507__auto____0 = (function (){var statearr_15764 = [null,null,null,null,null,null,null,null];(statearr_15764[0] = state_machine__5507__auto__);
(statearr_15764[1] = 1);
return statearr_15764;
});
var state_machine__5507__auto____1 = (function (state_15751){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15751);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15765){if((e15765 instanceof Object))
{var ex__5510__auto__ = e15765;var statearr_15766_15774 = state_15751;(statearr_15766_15774[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15751);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15775 = state_15751;
state_15751 = G__15775;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15751){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15767 = f__5522__auto__.call(null);(statearr_15767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
checking_safari_leak.core.mymap = (function mymap(f,in$){var out = cljs.core.async.chan.call(null);var c__5521__auto___15818 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15806){var state_val_15807 = (state_15806[1]);if((state_val_15807 === 4))
{var inst_15799 = (state_15806[2]);var inst_15800 = f.call(null,inst_15799);var inst_15801 = cljs.core.async.put_BANG_.call(null,out,inst_15800);var state_15806__$1 = (function (){var statearr_15808 = state_15806;(statearr_15808[7] = inst_15801);
return statearr_15808;
})();var statearr_15809_15819 = state_15806__$1;(statearr_15809_15819[2] = null);
(statearr_15809_15819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15807 === 3))
{var inst_15804 = (state_15806[2]);var state_15806__$1 = state_15806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15806__$1,inst_15804);
} else
{if((state_val_15807 === 2))
{var state_15806__$1 = state_15806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15806__$1,4,in$);
} else
{if((state_val_15807 === 1))
{var state_15806__$1 = state_15806;var statearr_15810_15820 = state_15806__$1;(statearr_15810_15820[2] = null);
(statearr_15810_15820[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15814 = [null,null,null,null,null,null,null,null];(statearr_15814[0] = state_machine__5507__auto__);
(statearr_15814[1] = 1);
return statearr_15814;
});
var state_machine__5507__auto____1 = (function (state_15806){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15806);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15815){if((e15815 instanceof Object))
{var ex__5510__auto__ = e15815;var statearr_15816_15821 = state_15806;(statearr_15816_15821[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15806);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15822 = state_15806;
state_15806 = G__15822;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15806){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15817 = f__5522__auto__.call(null);(statearr_15817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15818);
return statearr_15817;
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15863){var state_val_15864 = (state_15863[1]);if((state_val_15864 === 4))
{var inst_15851 = (state_15863[2]);var inst_15852 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_15853 = (new Date());var inst_15854 = inst_15853.getTime();var inst_15855 = (inst_15854 - start_time);var inst_15856 = [inst_15855];var inst_15857 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15852,inst_15856);var inst_15858 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_15857);var state_15863__$1 = (function (){var statearr_15865 = state_15863;(statearr_15865[7] = inst_15851);
(statearr_15865[8] = inst_15858);
return statearr_15865;
})();var statearr_15866_15875 = state_15863__$1;(statearr_15866_15875[2] = null);
(statearr_15866_15875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15864 === 3))
{var inst_15861 = (state_15863[2]);var state_15863__$1 = state_15863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15863__$1,inst_15861);
} else
{if((state_val_15864 === 2))
{var state_15863__$1 = state_15863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15863__$1,4,output);
} else
{if((state_val_15864 === 1))
{var state_15863__$1 = state_15863;var statearr_15867_15876 = state_15863__$1;(statearr_15867_15876[2] = null);
(statearr_15867_15876[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15871 = [null,null,null,null,null,null,null,null,null];(statearr_15871[0] = state_machine__5507__auto__);
(statearr_15871[1] = 1);
return statearr_15871;
});
var state_machine__5507__auto____1 = (function (state_15863){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15872){if((e15872 instanceof Object))
{var ex__5510__auto__ = e15872;var statearr_15873_15877 = state_15863;(statearr_15873_15877[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15878 = state_15863;
state_15863 = G__15878;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15863){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15874 = f__5522__auto__.call(null);(statearr_15874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_15874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
var leak_15879 = cljs.core.last.call(null,clojure.string.split.call(null,location.href,/#/));var nav_15880 = clojure.string.join.call(null,"",cljs.core.map.call(null,((function (leak_15879){
return (function (k){return [cljs.core.str(" <a href=\"#"),cljs.core.str(k),cljs.core.str("\">"),cljs.core.str(k),cljs.core.str("</a> ")].join('');
});})(leak_15879))
,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,checking_safari_leak.core.routes))));document.getElementById("nav").innerHTML = nav_15880;
var temp__4090__auto___15881 = cljs.core.keyword.call(null,leak_15879).call(null,checking_safari_leak.core.routes);if(cljs.core.truth_(temp__4090__auto___15881))
{var f_15882 = temp__4090__auto___15881;document.getElementById("leaky").innerHTML = leak_15879;
checking_safari_leak.core.doit.call(null,f_15882);
} else
{document.getElementById("leaky").innerHTML = "no operation for that route";
}

//# sourceMappingURL=core.js.map