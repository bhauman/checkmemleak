// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
checking_safari_leak.core.dev_null = (function dev_null(in$){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10507){var state_val_10508 = (state_10507[1]);if((state_val_10508 === 8))
{var inst_10500 = (state_10507[2]);var inst_10494 = inst_10500;var state_10507__$1 = (function (){var statearr_10509 = state_10507;(statearr_10509[7] = inst_10494);
return statearr_10509;
})();var statearr_10510_10524 = state_10507__$1;(statearr_10510_10524[2] = null);
(statearr_10510_10524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 7))
{var inst_10503 = (state_10507[2]);var state_10507__$1 = state_10507;var statearr_10511_10525 = state_10507__$1;(statearr_10511_10525[2] = inst_10503);
(statearr_10511_10525[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 6))
{var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10507__$1,8,in$);
} else
{if((state_val_10508 === 5))
{var state_10507__$1 = state_10507;var statearr_10512_10526 = state_10507__$1;(statearr_10512_10526[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_10512_10526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 4))
{var inst_10505 = (state_10507[2]);var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10507__$1,inst_10505);
} else
{if((state_val_10508 === 3))
{var inst_10494 = (state_10507[7]);var inst_10496 = (inst_10494 == null);var state_10507__$1 = state_10507;if(cljs.core.truth_(inst_10496))
{var statearr_10513_10527 = state_10507__$1;(statearr_10513_10527[1] = 5);
} else
{var statearr_10514_10528 = state_10507__$1;(statearr_10514_10528[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 2))
{var inst_10493 = (state_10507[2]);var inst_10494 = inst_10493;var state_10507__$1 = (function (){var statearr_10515 = state_10507;(statearr_10515[7] = inst_10494);
return statearr_10515;
})();var statearr_10516_10529 = state_10507__$1;(statearr_10516_10529[2] = null);
(statearr_10516_10529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10508 === 1))
{var state_10507__$1 = state_10507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10507__$1,2,in$);
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
var state_machine__5507__auto____0 = (function (){var statearr_10520 = [null,null,null,null,null,null,null,null];(statearr_10520[0] = state_machine__5507__auto__);
(statearr_10520[1] = 1);
return statearr_10520;
});
var state_machine__5507__auto____1 = (function (state_10507){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10521){if((e10521 instanceof Object))
{var ex__5510__auto__ = e10521;var statearr_10522_10530 = state_10507;(statearr_10522_10530[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10531 = state_10507;
state_10507 = G__10531;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10507){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10523 = f__5522__auto__.call(null);(statearr_10523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
checking_safari_leak.core.mymap = (function mymap(f,in$){var out = cljs.core.async.chan.call(null);var c__5521__auto___10574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10562){var state_val_10563 = (state_10562[1]);if((state_val_10563 === 4))
{var inst_10555 = (state_10562[2]);var inst_10556 = f.call(null,inst_10555);var inst_10557 = cljs.core.async.put_BANG_.call(null,out,inst_10556);var state_10562__$1 = (function (){var statearr_10564 = state_10562;(statearr_10564[7] = inst_10557);
return statearr_10564;
})();var statearr_10565_10575 = state_10562__$1;(statearr_10565_10575[2] = null);
(statearr_10565_10575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10563 === 3))
{var inst_10560 = (state_10562[2]);var state_10562__$1 = state_10562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10562__$1,inst_10560);
} else
{if((state_val_10563 === 2))
{var state_10562__$1 = state_10562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10562__$1,4,in$);
} else
{if((state_val_10563 === 1))
{var state_10562__$1 = state_10562;var statearr_10566_10576 = state_10562__$1;(statearr_10566_10576[2] = null);
(statearr_10566_10576[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10570 = [null,null,null,null,null,null,null,null];(statearr_10570[0] = state_machine__5507__auto__);
(statearr_10570[1] = 1);
return statearr_10570;
});
var state_machine__5507__auto____1 = (function (state_10562){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10562);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10571){if((e10571 instanceof Object))
{var ex__5510__auto__ = e10571;var statearr_10572_10577 = state_10562;(statearr_10572_10577[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10578 = state_10562;
state_10562 = G__10578;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10562){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10573 = f__5522__auto__.call(null);(statearr_10573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10574);
return statearr_10573;
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
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10619){var state_val_10620 = (state_10619[1]);if((state_val_10620 === 4))
{var inst_10607 = (state_10619[2]);var inst_10608 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_10609 = (new Date());var inst_10610 = inst_10609.getTime();var inst_10611 = (inst_10610 - start_time);var inst_10612 = [inst_10611];var inst_10613 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10608,inst_10612);var inst_10614 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_10613);var state_10619__$1 = (function (){var statearr_10621 = state_10619;(statearr_10621[7] = inst_10614);
(statearr_10621[8] = inst_10607);
return statearr_10621;
})();var statearr_10622_10631 = state_10619__$1;(statearr_10622_10631[2] = null);
(statearr_10622_10631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10620 === 3))
{var inst_10617 = (state_10619[2]);var state_10619__$1 = state_10619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10619__$1,inst_10617);
} else
{if((state_val_10620 === 2))
{var state_10619__$1 = state_10619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10619__$1,4,output);
} else
{if((state_val_10620 === 1))
{var state_10619__$1 = state_10619;var statearr_10623_10632 = state_10619__$1;(statearr_10623_10632[2] = null);
(statearr_10623_10632[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10627 = [null,null,null,null,null,null,null,null,null];(statearr_10627[0] = state_machine__5507__auto__);
(statearr_10627[1] = 1);
return statearr_10627;
});
var state_machine__5507__auto____1 = (function (state_10619){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10619);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10628){if((e10628 instanceof Object))
{var ex__5510__auto__ = e10628;var statearr_10629_10633 = state_10619;(statearr_10629_10633[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10619);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10634 = state_10619;
state_10619 = G__10634;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10619){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10630 = f__5522__auto__.call(null);(statearr_10630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
var leak_10635 = cljs.core.last.call(null,clojure.string.split.call(null,location.href,/#/));var temp__4090__auto___10636 = cljs.core.keyword.call(null,leak_10635).call(null,checking_safari_leak.core.routes);if(cljs.core.truth_(temp__4090__auto___10636))
{var f_10637 = temp__4090__auto___10636;document.getElementById("leaky").innerHTML = leak_10635;
checking_safari_leak.core.doit.call(null,f_10637);
} else
{document.getElementById("leaky").innerHTML = "no operation for that route";
}

//# sourceMappingURL=core.js.map