// Compiled by ClojureScript 0.0-2138
goog.provide('checking_safari_leak.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
checking_safari_leak.core.mymap = (function mymap(f,in$){var out = cljs.core.async.chan.call(null);var c__5521__auto___18174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18162){var state_val_18163 = (state_18162[1]);if((state_val_18163 === 4))
{var inst_18155 = (state_18162[2]);var inst_18156 = f.call(null,inst_18155);var inst_18157 = cljs.core.async.put_BANG_.call(null,out,inst_18156);var state_18162__$1 = (function (){var statearr_18164 = state_18162;(statearr_18164[7] = inst_18157);
return statearr_18164;
})();var statearr_18165_18175 = state_18162__$1;(statearr_18165_18175[2] = null);
(statearr_18165_18175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18163 === 3))
{var inst_18160 = (state_18162[2]);var state_18162__$1 = state_18162;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18162__$1,inst_18160);
} else
{if((state_val_18163 === 2))
{var state_18162__$1 = state_18162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18162__$1,4,in$);
} else
{if((state_val_18163 === 1))
{var state_18162__$1 = state_18162;var statearr_18166_18176 = state_18162__$1;(statearr_18166_18176[2] = null);
(statearr_18166_18176[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_18170 = [null,null,null,null,null,null,null,null];(statearr_18170[0] = state_machine__5507__auto__);
(statearr_18170[1] = 1);
return statearr_18170;
});
var state_machine__5507__auto____1 = (function (state_18162){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18162);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18171){if((e18171 instanceof Object))
{var ex__5510__auto__ = e18171;var statearr_18172_18177 = state_18162;(statearr_18172_18177[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18162);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18178 = state_18162;
state_18162 = G__18178;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18162){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18173 = f__5522__auto__.call(null);(statearr_18173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___18174);
return statearr_18173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
checking_safari_leak.core.routes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"map<-chain","map<-chain",2559155334),(function has_memory_leak_as_well(input){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input))))))))))))))))));
}),new cljs.core.Keyword(null,"map<","map<",1017248210),(function (input_chan){return cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,cljs.core.async.map_LT_.call(null,cljs.core.identity,input_chan))))))))))))))))));
}),new cljs.core.Keyword(null,"map>","map>",1017248212),(function (input_chan){return cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,cljs.core.async.map_GT_.call(null,cljs.core.identity,input_chan))))))))))))))))));
}),new cljs.core.Keyword(null,"custom-map","custom-map",3726014578),checking_safari_leak.core.has_memory_leak_mymap = (function has_memory_leak_mymap(input_chan){return checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,checking_safari_leak.core.mymap.call(null,cljs.core.identity,input_chan))))))))))))))))));
}),new cljs.core.Keyword(null,"let-based","let-based",4560534771),(function (input_chan){var a = cljs.core.async.map_LT_.call(null,cljs.core.identity,input_chan);var a__$1 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a);var a__$2 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$1);var a__$3 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$2);var a__$4 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$3);var a__$5 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$4);var a__$6 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$5);var a__$7 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$6);var a__$8 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$7);var a__$9 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$8);var a__$10 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$9);var a__$11 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$10);var a__$12 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$11);var a__$13 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$12);var a__$14 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$13);var a__$15 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$14);var a__$16 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$15);var a__$17 = cljs.core.async.map_LT_.call(null,cljs.core.identity,a__$16);return a__$17;
}),new cljs.core.Keyword(null,"comp-partial","comp-partial",3117600821),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity),cljs.core.partial.call(null,cljs.core.async.map_LT_,cljs.core.identity))], null);
checking_safari_leak.core.data = (function data(){return cljs.core.mapv.call(null,cljs.core.identity,cljs.core.range.call(null,1000));
});
checking_safari_leak.core.output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
checking_safari_leak.core.doit = (function doit(f){var output_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);cljs.core.add_watch.call(null,output_data,new cljs.core.Keyword(null,"output-change","output-change",1406166382),(function (_,___$1,___$2,n){return document.getElementById("main-area").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){return [cljs.core.str("<div> timer: "),cljs.core.str(new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.str("ms </div>")].join('');
}),n));
}));
var input = cljs.core.async.chan.call(null);var output = f.call(null,input);var start_time = (new Date()).getTime();cljs.core.mapv.call(null,(function (x){return cljs.core.async.put_BANG_.call(null,input,checking_safari_leak.core.data.call(null));
}),cljs.core.range.call(null,12));
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18219){var state_val_18220 = (state_18219[1]);if((state_val_18220 === 4))
{var inst_18207 = (state_18219[2]);var inst_18208 = [new cljs.core.Keyword(null,"time","time",1017464383)];var inst_18209 = (new Date());var inst_18210 = inst_18209.getTime();var inst_18211 = (inst_18210 - start_time);var inst_18212 = [inst_18211];var inst_18213 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18208,inst_18212);var inst_18214 = cljs.core.swap_BANG_.call(null,output_data,cljs.core.conj,inst_18213);var state_18219__$1 = (function (){var statearr_18221 = state_18219;(statearr_18221[7] = inst_18214);
(statearr_18221[8] = inst_18207);
return statearr_18221;
})();var statearr_18222_18231 = state_18219__$1;(statearr_18222_18231[2] = null);
(statearr_18222_18231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18220 === 3))
{var inst_18217 = (state_18219[2]);var state_18219__$1 = state_18219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18219__$1,inst_18217);
} else
{if((state_val_18220 === 2))
{var state_18219__$1 = state_18219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18219__$1,4,output);
} else
{if((state_val_18220 === 1))
{var state_18219__$1 = state_18219;var statearr_18223_18232 = state_18219__$1;(statearr_18223_18232[2] = null);
(statearr_18223_18232[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_18227 = [null,null,null,null,null,null,null,null,null];(statearr_18227[0] = state_machine__5507__auto__);
(statearr_18227[1] = 1);
return statearr_18227;
});
var state_machine__5507__auto____1 = (function (state_18219){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18219);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18228){if((e18228 instanceof Object))
{var ex__5510__auto__ = e18228;var statearr_18229_18233 = state_18219;(statearr_18229_18233[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18219);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18234 = state_18219;
state_18219 = G__18234;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18219){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18230 = f__5522__auto__.call(null);(statearr_18230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
var leak_18235 = cljs.core.last.call(null,clojure.string.split.call(null,location.href,/#/));var nav_18236 = clojure.string.join.call(null,"",cljs.core.map.call(null,((function (leak_18235){
return (function (k){return [cljs.core.str(" <a href=\"#"),cljs.core.str(k),cljs.core.str("\">"),cljs.core.str(k),cljs.core.str("</a> ")].join('');
});})(leak_18235))
,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,checking_safari_leak.core.routes))));document.getElementById("nav").innerHTML = nav_18236;
var temp__4090__auto___18237 = cljs.core.keyword.call(null,leak_18235).call(null,checking_safari_leak.core.routes);if(cljs.core.truth_(temp__4090__auto___18237))
{var f_18238 = temp__4090__auto___18237;document.getElementById("leaky").innerHTML = leak_18235;
checking_safari_leak.core.doit.call(null,f_18238);
} else
{document.getElementById("leaky").innerHTML = "no operation for that route";
}

//# sourceMappingURL=core.js.map