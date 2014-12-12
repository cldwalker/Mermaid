if(!lt.util.load.provided_QMARK_('lt.plugins.mermaid')) {
goog.provide('lt.plugins.mermaid');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.plugins');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.util.load');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.mermaid.chart_panel = (function chart_panel(this$){var e__7762__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mermaid","div.mermaid",3535771038),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"user-input","user-input",1507854010))], null));var seq__7876_7884 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7877_7885 = null;var count__7878_7886 = 0;var i__7879_7887 = 0;while(true){
if((i__7879_7887 < count__7878_7886))
{var vec__7880_7888 = cljs.core._nth.call(null,chunk__7877_7885,i__7879_7887);var ev__7763__auto___7889 = cljs.core.nth.call(null,vec__7880_7888,0,null);var func__7764__auto___7890 = cljs.core.nth.call(null,vec__7880_7888,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___7889,func__7764__auto___7890);
{
var G__7891 = seq__7876_7884;
var G__7892 = chunk__7877_7885;
var G__7893 = count__7878_7886;
var G__7894 = (i__7879_7887 + 1);
seq__7876_7884 = G__7891;
chunk__7877_7885 = G__7892;
count__7878_7886 = G__7893;
i__7879_7887 = G__7894;
continue;
}
} else
{var temp__4092__auto___7895 = cljs.core.seq.call(null,seq__7876_7884);if(temp__4092__auto___7895)
{var seq__7876_7896__$1 = temp__4092__auto___7895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7876_7896__$1))
{var c__7119__auto___7897 = cljs.core.chunk_first.call(null,seq__7876_7896__$1);{
var G__7898 = cljs.core.chunk_rest.call(null,seq__7876_7896__$1);
var G__7899 = c__7119__auto___7897;
var G__7900 = cljs.core.count.call(null,c__7119__auto___7897);
var G__7901 = 0;
seq__7876_7884 = G__7898;
chunk__7877_7885 = G__7899;
count__7878_7886 = G__7900;
i__7879_7887 = G__7901;
continue;
}
} else
{var vec__7881_7902 = cljs.core.first.call(null,seq__7876_7896__$1);var ev__7763__auto___7903 = cljs.core.nth.call(null,vec__7881_7902,0,null);var func__7764__auto___7904 = cljs.core.nth.call(null,vec__7881_7902,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___7903,func__7764__auto___7904);
{
var G__7905 = cljs.core.next.call(null,seq__7876_7896__$1);
var G__7906 = null;
var G__7907 = 0;
var G__7908 = 0;
seq__7876_7884 = G__7905;
chunk__7877_7885 = G__7906;
count__7878_7886 = G__7907;
i__7879_7887 = G__7908;
continue;
}
}
} else
{}
}
break;
}
return e__7762__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mermaid","mermaid.chart","lt.plugins.mermaid/mermaid.chart",2096667691),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.mermaid","on-close-destroy","lt.plugins.mermaid/on-close-destroy",2791344809)], null),new cljs.core.Keyword(null,"name","name",1017277949),"mermaid",new cljs.core.Keyword(null,"user-input","user-input",1507854010),"",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live Mermaid")].join('')));
return lt.plugins.mermaid.chart_panel.call(null,this$);
}));
lt.plugins.mermaid.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mermaid","on-close-destroy","lt.plugins.mermaid/on-close-destroy",2791344809),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mermaid.__BEH__on_close_destroy,new cljs.core.Keyword(null,"desc","desc",1016984067),"mermaid: Close tab and tabset as well if last tab",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.mermaid.__BEH__read_editor = (function __BEH__read_editor(ed){lt.object.assoc_in_BANG_.call(null,new cljs.core.Keyword(null,"mermaid","mermaid",1967727099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",1507854010)], null),lt.objs.editor.__GT_val.call(null,ed));
try{return mermaid.init();
}catch (e7883){var e = e7883;return cljs.core.println.call(null,e.message);
}});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mermaid","read-editor","lt.plugins.mermaid/read-editor",1022849760),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mermaid.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Mermaid: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.mermaid","read-editor","lt.plugins.mermaid/read-editor",1022849760)], null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),350);
lt.plugins.mermaid.ensure_and_focus_second_tabset = (function ensure_and_focus_second_tabset(){if((cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.multi))) < 2))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601));
} else
{}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"mermaid.watch-editor","mermaid.watch-editor",2202281698),new cljs.core.Keyword(null,"desc","desc",1016984067),"Mermaid: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(window.mermaid))
{} else
{lt.util.load.js.call(null,[cljs.core.str(lt.objs.plugins.user_plugins_dir),cljs.core.str("/mermaid/mermaid.full.min.js")].join(''),true);
}
var ed = lt.objs.editor.pool.last_active.call(null);var filename = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"name","name",1017277949)], null));var mermaid = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.mermaid","mermaid.chart","lt.plugins.mermaid/mermaid.chart",2096667691),filename);lt.plugins.mermaid.ensure_and_focus_second_tabset.call(null);
lt.objs.tabs.add_or_focus_BANG_.call(null,mermaid);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.prev","tabset.prev",1472322118));
lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mermaid","mermaid",1967727099)], null),mermaid);
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.mermaid","read-editor","lt.plugins.mermaid/read-editor",1022849760));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.mermaid","read-editor","lt.plugins.mermaid/read-editor",1022849760));
})], null));
}

//# sourceMappingURL=mermaid_compiled.js.map