if(!lt.util.load.provided_QMARK_('lt.plugins.data-viz.core')) {
goog.provide('lt.plugins.data_viz.core');
goog.require('cljs.core');
goog.require('goog');
lt.plugins.data_viz.core.atom_QMARK_ = (function atom_QMARK_(obj){return cljs.core.boolean$.call(null,(cljs.core.truth_(obj)?(obj instanceof cljs.core.Atom):null));
});
lt.plugins.data_viz.core.zipper_QMARK_ = (function zipper_QMARK_(obj){return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,obj),new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572));
});
lt.plugins.data_viz.core.js_obj_QMARK_ = (function js_obj_QMARK_(obj){return goog.isObject(obj);
});
lt.plugins.data_viz.core.dom_QMARK_ = (function dom_QMARK_(obj){var and__6355__auto__ = obj;if(cljs.core.truth_(and__6355__auto__))
{var and__6355__auto____$1 = obj.nodeType;if(cljs.core.truth_(and__6355__auto____$1))
{return cljs.core._EQ_.call(null,1,obj.nodeType);
} else
{return and__6355__auto____$1;
}
} else
{return and__6355__auto__;
}
});

/**
* @constructor
* @param {*} classification
* @param {*} fn
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
lt.plugins.data_viz.core.type_info = (function (classification,fn,name,__meta,__extmap){
this.classification = classification;
this.fn = fn;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
lt.plugins.data_viz.core.type_info.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6948__auto__){var self__ = this;
var this__6948__auto____$1 = this;var h__6778__auto__ = self__.__hash;if(!((h__6778__auto__ == null)))
{return h__6778__auto__;
} else
{var h__6778__auto____$1 = cljs.core.hash_imap.call(null,this__6948__auto____$1);self__.__hash = h__6778__auto____$1;
return h__6778__auto____$1;
}
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6953__auto__,k__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;return cljs.core._lookup.call(null,this__6953__auto____$1,k__6954__auto__,null);
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6955__auto__,k8708,else__6956__auto__){var self__ = this;
var this__6955__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k8708,new cljs.core.Keyword(null,"classification","classification",1396254552)))
{return self__.classification;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8708,new cljs.core.Keyword(null,"fn","fn",1013907514)))
{return self__.fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8708,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k8708,else__6956__auto__);
} else
{return null;
}
}
}
}
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6960__auto__,k__6961__auto__,G__8707){var self__ = this;
var this__6960__auto____$1 = this;var pred__8710 = cljs.core.keyword_identical_QMARK_;var expr__8711 = k__6961__auto__;if(cljs.core.truth_(pred__8710.call(null,new cljs.core.Keyword(null,"classification","classification",1396254552),expr__8711)))
{return (new lt.plugins.data_viz.core.type_info(G__8707,self__.fn,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8710.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514),expr__8711)))
{return (new lt.plugins.data_viz.core.type_info(self__.classification,G__8707,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8710.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__8711)))
{return (new lt.plugins.data_viz.core.type_info(self__.classification,self__.fn,G__8707,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.data_viz.core.type_info(self__.classification,self__.fn,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6961__auto__,G__8707),null));
}
}
}
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6967__auto__,writer__6968__auto__,opts__6969__auto__){var self__ = this;
var this__6967__auto____$1 = this;var pr_pair__6970__auto__ = ((function (this__6967__auto____$1){
return (function (keyval__6971__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6968__auto__,cljs.core.pr_writer,""," ","",opts__6969__auto__,keyval__6971__auto__);
});})(this__6967__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6968__auto__,pr_pair__6970__auto__,"#lt.plugins.data-viz.core.type-info{",", ","}",opts__6969__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"classification","classification",1396254552),self__.classification],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",1013907514),self__.fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6958__auto__,entry__6959__auto__){var self__ = this;
var this__6958__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6959__auto__))
{return cljs.core._assoc.call(null,this__6958__auto____$1,cljs.core._nth.call(null,entry__6959__auto__,0),cljs.core._nth.call(null,entry__6959__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6958__auto____$1,entry__6959__auto__);
}
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6965__auto__){var self__ = this;
var this__6965__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"classification","classification",1396254552),self__.classification],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",1013907514),self__.fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6957__auto__){var self__ = this;
var this__6957__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6949__auto__,other__6950__auto__){var self__ = this;
var this__6949__auto____$1 = this;if(cljs.core.truth_((function (){var and__6355__auto__ = other__6950__auto__;if(cljs.core.truth_(and__6355__auto__))
{return ((this__6949__auto____$1.constructor === other__6950__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6949__auto____$1,other__6950__auto__));
} else
{return and__6355__auto__;
}
})()))
{return true;
} else
{return false;
}
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6952__auto__,G__8707){var self__ = this;
var this__6952__auto____$1 = this;return (new lt.plugins.data_viz.core.type_info(self__.classification,self__.fn,self__.name,G__8707,self__.__extmap,self__.__hash));
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6947__auto__){var self__ = this;
var this__6947__auto____$1 = this;return (new lt.plugins.data_viz.core.type_info(self__.classification,self__.fn,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return self__.__meta;
});
lt.plugins.data_viz.core.type_info.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6962__auto__,k__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"classification","classification",1396254552),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null], null), null),k__6963__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6962__auto____$1),self__.__meta),k__6963__auto__);
} else
{return (new lt.plugins.data_viz.core.type_info(self__.classification,self__.fn,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6963__auto__)),null));
}
});
lt.plugins.data_viz.core.type_info.cljs$lang$type = true;
lt.plugins.data_viz.core.type_info.cljs$lang$ctorPrSeq = (function (this__6987__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lt.plugins.data-viz.core/type-info");
});
lt.plugins.data_viz.core.type_info.cljs$lang$ctorPrWriter = (function (this__6987__auto__,writer__6988__auto__){return cljs.core._write.call(null,writer__6988__auto__,"lt.plugins.data-viz.core/type-info");
});
lt.plugins.data_viz.core.__GT_type_info = (function __GT_type_info(classification,fn,name){return (new lt.plugins.data_viz.core.type_info(classification,fn,name));
});
lt.plugins.data_viz.core.map__GT_type_info = (function map__GT_type_info(G__8709){return (new lt.plugins.data_viz.core.type_info(new cljs.core.Keyword(null,"classification","classification",1396254552).cljs$core$IFn$_invoke$arity$1(G__8709),new cljs.core.Keyword(null,"fn","fn",1013907514).cljs$core$IFn$_invoke$arity$1(G__8709),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__8709),null,cljs.core.dissoc.call(null,G__8709,new cljs.core.Keyword(null,"classification","classification",1396254552),new cljs.core.Keyword(null,"fn","fn",1013907514),new cljs.core.Keyword(null,"name","name",1017277949))));
});
/**
* Known mappings of determinable types and their names.
*/
lt.plugins.data_viz.core._STAR_known_type_info_STAR_ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.data_viz.core.zipper_QMARK_,"Zipper"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.data_viz.core.atom_QMARK_,"Atom"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.data_viz.core.dom_QMARK_,"DOMNode"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.map_QMARK_,"Map"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.vector_QMARK_,"Vector"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.list_QMARK_,"List"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.set_QMARK_,"Set"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.string_QMARK_,"String"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.keyword_QMARK_,"Keyword"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.nil_QMARK_,"nil"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.number_QMARK_,"Number"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.fn_QMARK_,"Function"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.array_QMARK_,"Array"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.symbol_QMARK_,"Symbol"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"abstract","abstract",2746803092),cljs.core.seq_QMARK_,"Seq"),lt.plugins.data_viz.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),lt.plugins.data_viz.core.js_obj_QMARK_,"JSObject")], null);
lt.plugins.data_viz.core.type_name = (function type_name(obj){var order = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"concrete","concrete",4726228471),1,new cljs.core.Keyword(null,"abstract","abstract",2746803092),2,new cljs.core.Keyword(null,"primitive","primitive",3474063449),3], null);return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,((function (order){
return (function (p1__8713_SHARP_){return p1__8713_SHARP_.call(null,obj);
});})(order))
,new cljs.core.Keyword(null,"fn","fn",1013907514)),cljs.core.sort_by.call(null,cljs.core.comp.call(null,order,new cljs.core.Keyword(null,"classification","classification",1396254552)),lt.plugins.data_viz.core._STAR_known_type_info_STAR_))),new cljs.core.Keyword(null,"name","name",1017277949));
});
lt.plugins.data_viz.core.type_key = (function type_key(obj){var temp__4092__auto__ = lt.plugins.data_viz.core.type_name.call(null,obj);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,n.toLowerCase());
} else
{return null;
}
});
lt.plugins.data_viz.core.dom__GT_string = (function dom__GT_string(d){var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);var temp = document.createElement("div");temp.appendChild(d);
(result[0] = temp.innerHTML);
temp.innerHTML = "";
return (result[0]);
});
}
if(!lt.util.load.provided_QMARK_('clojure.zip')) {
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572),make_node,new cljs.core.Keyword("zip","children","zip/children",2681289882),children,new cljs.core.Keyword("zip","branch?","zip/branch?",1159334776),branch_QMARK_], null));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",1965434859)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",1965434859),(function (){var and__6355__auto__ = children;if(cljs.core.truth_(and__6355__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__6355__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){return new cljs.core.Keyword("zip","branch?","zip/branch?",1159334776).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return new cljs.core.Keyword("zip","children","zip/children",2681289882).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){return new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){return new cljs.core.Keyword(null,"pnodes","pnodes",4325362611).cljs$core$IFn$_invoke$arity$1(loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"l","l",1013904350).cljs$core$IFn$_invoke$arity$1(loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){return new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__8821 = loc;var node = cljs.core.nth.call(null,vec__8821,0,null);var path = cljs.core.nth.call(null,vec__8821,1,null);var vec__8822 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__8822,0,null);var cnext = cljs.core.nthnext.call(null,vec__8822,1);var cs = vec__8822;if(cljs.core.truth_(cs))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611),(cljs.core.truth_(path)?cljs.core.conj.call(null,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611).cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),new cljs.core.Keyword(null,"ppath","ppath",1120772103),path,new cljs.core.Keyword(null,"r","r",1013904356),cnext], null)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){var vec__8825 = loc;var node = cljs.core.nth.call(null,vec__8825,0,null);var map__8826 = cljs.core.nth.call(null,vec__8825,1,null);var map__8826__$1 = ((cljs.core.seq_QMARK_.call(null,map__8826))?cljs.core.apply.call(null,cljs.core.hash_map,map__8826):map__8826);var path = map__8826__$1;var l = cljs.core.get.call(null,map__8826__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8826__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8826__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__8826__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__8826__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__6355__auto__ = ppath;if(cljs.core.truth_(and__6355__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__6355__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1)))
{return clojure.zip.node.call(null,loc);
} else
{var p = clojure.zip.up.call(null,loc);if(cljs.core.truth_(p))
{{
var G__8859 = p;
loc = G__8859;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){var vec__8830 = loc;var node = cljs.core.nth.call(null,vec__8830,0,null);var map__8831 = cljs.core.nth.call(null,vec__8830,1,null);var map__8831__$1 = ((cljs.core.seq_QMARK_.call(null,map__8831))?cljs.core.apply.call(null,cljs.core.hash_map,map__8831):map__8831);var path = map__8831__$1;var l = cljs.core.get.call(null,map__8831__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__8832 = cljs.core.get.call(null,map__8831__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__8832,0,null);var rnext = cljs.core.nthnext.call(null,vec__8832,1);var rs = vec__8832;if(cljs.core.truth_((function (){var and__6355__auto__ = path;if(cljs.core.truth_(and__6355__auto__))
{return rs;
} else
{return and__6355__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,node),new cljs.core.Keyword(null,"r","r",1013904356),rnext)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){var vec__8835 = loc;var node = cljs.core.nth.call(null,vec__8835,0,null);var map__8836 = cljs.core.nth.call(null,vec__8835,1,null);var map__8836__$1 = ((cljs.core.seq_QMARK_.call(null,map__8836))?cljs.core.apply.call(null,cljs.core.hash_map,map__8836):map__8836);var path = map__8836__$1;var l = cljs.core.get.call(null,map__8836__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8836__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6355__auto__ = path;if(cljs.core.truth_(and__6355__auto__))
{return r;
} else
{return and__6355__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),new cljs.core.Keyword(null,"r","r",1013904356),null)], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){var vec__8839 = loc;var node = cljs.core.nth.call(null,vec__8839,0,null);var map__8840 = cljs.core.nth.call(null,vec__8839,1,null);var map__8840__$1 = ((cljs.core.seq_QMARK_.call(null,map__8840))?cljs.core.apply.call(null,cljs.core.hash_map,map__8840):map__8840);var path = map__8840__$1;var l = cljs.core.get.call(null,map__8840__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8840__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6355__auto__ = path;if(cljs.core.truth_(and__6355__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__6355__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,node,r))], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){var vec__8843 = loc;var node = cljs.core.nth.call(null,vec__8843,0,null);var map__8844 = cljs.core.nth.call(null,vec__8843,1,null);var map__8844__$1 = ((cljs.core.seq_QMARK_.call(null,map__8844))?cljs.core.apply.call(null,cljs.core.hash_map,map__8844):map__8844);var path = map__8844__$1;var l = cljs.core.get.call(null,map__8844__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8844__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6355__auto__ = path;if(cljs.core.truth_(and__6355__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__6355__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.concat.call(null,cljs.core.rest.call(null,l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),r))], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){var vec__8847 = loc;var node = cljs.core.nth.call(null,vec__8847,0,null);var map__8848 = cljs.core.nth.call(null,vec__8847,1,null);var map__8848__$1 = ((cljs.core.seq_QMARK_.call(null,map__8848))?cljs.core.apply.call(null,cljs.core.hash_map,map__8848):map__8848);var path = map__8848__$1;var l = cljs.core.get.call(null,map__8848__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__8851 = loc;var node = cljs.core.nth.call(null,vec__8851,0,null);var map__8852 = cljs.core.nth.call(null,vec__8851,1,null);var map__8852__$1 = ((cljs.core.seq_QMARK_.call(null,map__8852))?cljs.core.apply.call(null,cljs.core.hash_map,map__8852):map__8852);var path = map__8852__$1;var r = cljs.core.get.call(null,map__8852__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__8854 = loc;var _ = cljs.core.nth.call(null,vec__8854,0,null);var path = cljs.core.nth.call(null,vec__8854,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,loc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__8860){
var loc = cljs.core.first(arglist__8860);
arglist__8860 = cljs.core.next(arglist__8860);
var f = cljs.core.first(arglist__8860);
var args = cljs.core.rest(arglist__8860);
return edit__delegate(loc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1)))
{return loc;
} else
{var or__6367__auto__ = (function (){var and__6355__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__6355__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__6355__auto__;
}
})();if(cljs.core.truth_(or__6367__auto__))
{return or__6367__auto__;
} else
{var or__6367__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__6367__auto____$1))
{return or__6367__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__6367__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__6367__auto____$2))
{return or__6367__auto____$2;
} else
{{
var G__8861 = clojure.zip.up.call(null,p);
p = G__8861;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",1014004813)], null);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){var temp__4090__auto__ = clojure.zip.left.call(null,loc);if(cljs.core.truth_(temp__4090__auto__))
{var lloc = temp__4090__auto__;var loc__$1 = lloc;while(true){
var temp__4090__auto____$1 = (function (){var and__6355__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__6355__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__6355__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__8862 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8862;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){var vec__8857 = loc;var node = cljs.core.nth.call(null,vec__8857,0,null);var map__8858 = cljs.core.nth.call(null,vec__8857,1,null);var map__8858__$1 = ((cljs.core.seq_QMARK_.call(null,map__8858))?cljs.core.apply.call(null,cljs.core.hash_map,map__8858):map__8858);var path = map__8858__$1;var l = cljs.core.get.call(null,map__8858__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8858__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8858__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__8858__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4090__auto__ = (function (){var and__6355__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__6355__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__6355__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__8863 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8863;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__6355__auto__ = ppath;if(cljs.core.truth_(and__6355__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__6355__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});
}
if(!lt.util.load.provided_QMARK_('goog.object')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utilities for manipulating objects/maps/hashes.
 */

goog.provide('goog.object');


/**
 * Calls a function for each element in an object/map/hash.
 *
 * @param {Object.<K,V>} obj The object over which to iterate.
 * @param {function(this:T,V,?,Object.<K,V>):?} f The function to call
 *     for every element. This function takes 3 arguments (the element, the
 *     index and the object) and the return value is ignored.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @template T,K,V
 */
goog.object.forEach = function(obj, f, opt_obj) {
  for (var key in obj) {
    f.call(opt_obj, obj[key], key, obj);
  }
};


/**
 * Calls a function for each element in an object/map/hash. If that call returns
 * true, adds the element to a new object.
 *
 * @param {Object.<K,V>} obj The object over which to iterate.
 * @param {function(this:T,V,?,Object.<K,V>):boolean} f The function to call
 *     for every element. This
 *     function takes 3 arguments (the element, the index and the object)
 *     and should return a boolean. If the return value is true the
 *     element is added to the result object. If it is false the
 *     element is not included.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {!Object.<K,V>} a new object in which only elements that passed the
 *     test are present.
 * @template T,K,V
 */
goog.object.filter = function(obj, f, opt_obj) {
  var res = {};
  for (var key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key];
    }
  }
  return res;
};


/**
 * For every element in an object/map/hash calls a function and inserts the
 * result into a new object.
 *
 * @param {Object.<K,V>} obj The object over which to iterate.
 * @param {function(this:T,V,?,Object.<K,V>):R} f The function to call
 *     for every element. This function
 *     takes 3 arguments (the element, the index and the object)
 *     and should return something. The result will be inserted
 *     into a new object.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {!Object.<K,R>} a new object with the results from f.
 * @template T,K,V,R
 */
goog.object.map = function(obj, f, opt_obj) {
  var res = {};
  for (var key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj);
  }
  return res;
};


/**
 * Calls a function for each element in an object/map/hash. If any
 * call returns true, returns true (without checking the rest). If
 * all calls return false, returns false.
 *
 * @param {Object.<K,V>} obj The object to check.
 * @param {function(this:T,V,?,Object.<K,V>):boolean} f The function to
 *     call for every element. This function
 *     takes 3 arguments (the element, the index and the object) and should
 *     return a boolean.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {boolean} true if any element passes the test.
 * @template T,K,V
 */
goog.object.some = function(obj, f, opt_obj) {
  for (var key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      return true;
    }
  }
  return false;
};


/**
 * Calls a function for each element in an object/map/hash. If
 * all calls return true, returns true. If any call returns false, returns
 * false at this point and does not continue to check the remaining elements.
 *
 * @param {Object.<K,V>} obj The object to check.
 * @param {?function(this:T,V,?,Object.<K,V>):boolean} f The function to
 *     call for every element. This function
 *     takes 3 arguments (the element, the index and the object) and should
 *     return a boolean.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {boolean} false if any element fails the test.
 * @template T,K,V
 */
goog.object.every = function(obj, f, opt_obj) {
  for (var key in obj) {
    if (!f.call(opt_obj, obj[key], key, obj)) {
      return false;
    }
  }
  return true;
};


/**
 * Returns the number of key-value pairs in the object map.
 *
 * @param {Object} obj The object for which to get the number of key-value
 *     pairs.
 * @return {number} The number of key-value pairs in the object map.
 */
goog.object.getCount = function(obj) {
  // JS1.5 has __count__ but it has been deprecated so it raises a warning...
  // in other words do not use. Also __count__ only includes the fields on the
  // actual object and not in the prototype chain.
  var rv = 0;
  for (var key in obj) {
    rv++;
  }
  return rv;
};


/**
 * Returns one key from the object map, if any exists.
 * For map literals the returned key will be the first one in most of the
 * browsers (a know exception is Konqueror).
 *
 * @param {Object} obj The object to pick a key from.
 * @return {string|undefined} The key or undefined if the object is empty.
 */
goog.object.getAnyKey = function(obj) {
  for (var key in obj) {
    return key;
  }
};


/**
 * Returns one value from the object map, if any exists.
 * For map literals the returned value will be the first one in most of the
 * browsers (a know exception is Konqueror).
 *
 * @param {Object.<K,V>} obj The object to pick a value from.
 * @return {V|undefined} The value or undefined if the object is empty.
 * @template K,V
 */
goog.object.getAnyValue = function(obj) {
  for (var key in obj) {
    return obj[key];
  }
};


/**
 * Whether the object/hash/map contains the given object as a value.
 * An alias for goog.object.containsValue(obj, val).
 *
 * @param {Object.<K,V>} obj The object in which to look for val.
 * @param {V} val The object for which to check.
 * @return {boolean} true if val is present.
 * @template K,V
 */
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val);
};


/**
 * Returns the values of the object/map/hash.
 *
 * @param {Object.<K,V>} obj The object from which to get the values.
 * @return {!Array.<V>} The values in the object/map/hash.
 * @template K,V
 */
goog.object.getValues = function(obj) {
  var res = [];
  var i = 0;
  for (var key in obj) {
    res[i++] = obj[key];
  }
  return res;
};


/**
 * Returns the keys of the object/map/hash.
 *
 * @param {Object} obj The object from which to get the keys.
 * @return {!Array.<string>} Array of property keys.
 */
goog.object.getKeys = function(obj) {
  var res = [];
  var i = 0;
  for (var key in obj) {
    res[i++] = key;
  }
  return res;
};


/**
 * Get a value from an object multiple levels deep.  This is useful for
 * pulling values from deeply nested objects, such as JSON responses.
 * Example usage: getValueByKeys(jsonObj, 'foo', 'entries', 3)
 *
 * @param {!Object} obj An object to get the value from.  Can be array-like.
 * @param {...(string|number|!Array.<number|string>)} var_args A number of keys
 *     (as strings, or numbers, for array-like objects).  Can also be
 *     specified as a single array of keys.
 * @return {*} The resulting value.  If, at any point, the value for a key
 *     is undefined, returns undefined.
 */
goog.object.getValueByKeys = function(obj, var_args) {
  var isArrayLike = goog.isArrayLike(var_args);
  var keys = isArrayLike ? var_args : arguments;

  // Start with the 2nd parameter for the variable parameters syntax.
  for (var i = isArrayLike ? 0 : 1; i < keys.length; i++) {
    obj = obj[keys[i]];
    if (!goog.isDef(obj)) {
      break;
    }
  }

  return obj;
};


/**
 * Whether the object/map/hash contains the given key.
 *
 * @param {Object} obj The object in which to look for key.
 * @param {*} key The key for which to check.
 * @return {boolean} true If the map contains the key.
 */
goog.object.containsKey = function(obj, key) {
  return key in obj;
};


/**
 * Whether the object/map/hash contains the given value. This is O(n).
 *
 * @param {Object.<K,V>} obj The object in which to look for val.
 * @param {V} val The value for which to check.
 * @return {boolean} true If the map contains the value.
 * @template K,V
 */
goog.object.containsValue = function(obj, val) {
  for (var key in obj) {
    if (obj[key] == val) {
      return true;
    }
  }
  return false;
};


/**
 * Searches an object for an element that satisfies the given condition and
 * returns its key.
 * @param {Object.<K,V>} obj The object to search in.
 * @param {function(this:T,V,string,Object.<K,V>):boolean} f The
 *      function to call for every element. Takes 3 arguments (the value,
 *     the key and the object) and should return a boolean.
 * @param {T=} opt_this An optional "this" context for the function.
 * @return {string|undefined} The key of an element for which the function
 *     returns true or undefined if no such element is found.
 * @template T,K,V
 */
goog.object.findKey = function(obj, f, opt_this) {
  for (var key in obj) {
    if (f.call(opt_this, obj[key], key, obj)) {
      return key;
    }
  }
  return undefined;
};


/**
 * Searches an object for an element that satisfies the given condition and
 * returns its value.
 * @param {Object.<K,V>} obj The object to search in.
 * @param {function(this:T,V,string,Object.<K,V>):boolean} f The function
 *     to call for every element. Takes 3 arguments (the value, the key
 *     and the object) and should return a boolean.
 * @param {T=} opt_this An optional "this" context for the function.
 * @return {V} The value of an element for which the function returns true or
 *     undefined if no such element is found.
 * @template T,K,V
 */
goog.object.findValue = function(obj, f, opt_this) {
  var key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key];
};


/**
 * Whether the object/map/hash is empty.
 *
 * @param {Object} obj The object to test.
 * @return {boolean} true if obj is empty.
 */
goog.object.isEmpty = function(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
};


/**
 * Removes all key value pairs from the object/map/hash.
 *
 * @param {Object} obj The object to clear.
 */
goog.object.clear = function(obj) {
  for (var i in obj) {
    delete obj[i];
  }
};


/**
 * Removes a key-value pair based on the key.
 *
 * @param {Object} obj The object from which to remove the key.
 * @param {*} key The key to remove.
 * @return {boolean} Whether an element was removed.
 */
goog.object.remove = function(obj, key) {
  var rv;
  if ((rv = key in obj)) {
    delete obj[key];
  }
  return rv;
};


/**
 * Adds a key-value pair to the object. Throws an exception if the key is
 * already in use. Use set if you want to change an existing pair.
 *
 * @param {Object.<K,V>} obj The object to which to add the key-value pair.
 * @param {string} key The key to add.
 * @param {V} val The value to add.
 * @template K,V
 */
goog.object.add = function(obj, key, val) {
  if (key in obj) {
    throw Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val);
};


/**
 * Returns the value for the given key.
 *
 * @param {Object.<K,V>} obj The object from which to get the value.
 * @param {string} key The key for which to get the value.
 * @param {R=} opt_val The value to return if no item is found for the given
 *     key (default is undefined).
 * @return {V|R|undefined} The value for the given key.
 * @template K,V,R
 */
goog.object.get = function(obj, key, opt_val) {
  if (key in obj) {
    return obj[key];
  }
  return opt_val;
};


/**
 * Adds a key-value pair to the object/map/hash.
 *
 * @param {Object.<K,V>} obj The object to which to add the key-value pair.
 * @param {string} key The key to add.
 * @param {V} value The value to add.
 * @template K,V
 */
goog.object.set = function(obj, key, value) {
  obj[key] = value;
};


/**
 * Adds a key-value pair to the object/map/hash if it doesn't exist yet.
 *
 * @param {Object.<K,V>} obj The object to which to add the key-value pair.
 * @param {string} key The key to add.
 * @param {V} value The value to add if the key wasn't present.
 * @return {V} The value of the entry at the end of the function.
 * @template K,V
 */
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : (obj[key] = value);
};


/**
 * Does a flat clone of the object.
 *
 * @param {Object.<K,V>} obj Object to clone.
 * @return {!Object.<K,V>} Clone of the input object.
 * @template K,V
 */
goog.object.clone = function(obj) {
  // We cannot use the prototype trick because a lot of methods depend on where
  // the actual key is set.

  var res = {};
  for (var key in obj) {
    res[key] = obj[key];
  }
  return res;
  // We could also use goog.mixin but I wanted this to be independent from that.
};


/**
 * Clones a value. The input may be an Object, Array, or basic type. Objects and
 * arrays will be cloned recursively.
 *
 * WARNINGS:
 * <code>goog.object.unsafeClone</code> does not detect reference loops. Objects
 * that refer to themselves will cause infinite recursion.
 *
 * <code>goog.object.unsafeClone</code> is unaware of unique identifiers, and
 * copies UIDs created by <code>getUid</code> into cloned results.
 *
 * @param {*} obj The value to clone.
 * @return {*} A clone of the input value.
 */
goog.object.unsafeClone = function(obj) {
  var type = goog.typeOf(obj);
  if (type == 'object' || type == 'array') {
    if (obj.clone) {
      return obj.clone();
    }
    var clone = type == 'array' ? [] : {};
    for (var key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key]);
    }
    return clone;
  }

  return obj;
};


/**
 * Returns a new object in which all the keys and values are interchanged
 * (keys become values and values become keys). If multiple keys map to the
 * same value, the chosen transposed value is implementation-dependent.
 *
 * @param {Object} obj The object to transpose.
 * @return {!Object} The transposed object.
 */
goog.object.transpose = function(obj) {
  var transposed = {};
  for (var key in obj) {
    transposed[obj[key]] = key;
  }
  return transposed;
};


/**
 * The names of the fields that are defined on Object.prototype.
 * @type {Array.<string>}
 * @private
 */
goog.object.PROTOTYPE_FIELDS_ = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/**
 * Extends an object with another object.
 * This operates 'in-place'; it does not create a new Object.
 *
 * Example:
 * var o = {};
 * goog.object.extend(o, {a: 0, b: 1});
 * o; // {a: 0, b: 1}
 * goog.object.extend(o, {b: 2, c: 3});
 * o; // {a: 0, b: 2, c: 3}
 *
 * @param {Object} target The object to modify. Existing properties will be
 *     overwritten if they are also present in one of the objects in
 *     {@code var_args}.
 * @param {...Object} var_args The objects from which values will be copied.
 */
goog.object.extend = function(target, var_args) {
  var key, source;
  for (var i = 1; i < arguments.length; i++) {
    source = arguments[i];
    for (key in source) {
      target[key] = source[key];
    }

    // For IE the for-in-loop does not contain any properties that are not
    // enumerable on the prototype object (for example isPrototypeOf from
    // Object.prototype) and it will also not include 'replace' on objects that
    // extend String and change 'replace' (not that it is common for anyone to
    // extend anything except Object).

    for (var j = 0; j < goog.object.PROTOTYPE_FIELDS_.length; j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
};


/**
 * Creates a new object built from the key-value pairs provided as arguments.
 * @param {...*} var_args If only one argument is provided and it is an array
 *     then this is used as the arguments,  otherwise even arguments are used as
 *     the property names and odd arguments are used as the property values.
 * @return {!Object} The new object.
 * @throws {Error} If there are uneven number of arguments or there is only one
 *     non array argument.
 */
goog.object.create = function(var_args) {
  var argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }

  if (argLength % 2) {
    throw Error('Uneven number of arguments');
  }

  var rv = {};
  for (var i = 0; i < argLength; i += 2) {
    rv[arguments[i]] = arguments[i + 1];
  }
  return rv;
};


/**
 * Creates a new object where the property names come from the arguments but
 * the value is always set to true
 * @param {...*} var_args If only one argument is provided and it is an array
 *     then this is used as the arguments,  otherwise the arguments are used
 *     as the property names.
 * @return {!Object} The new object.
 */
goog.object.createSet = function(var_args) {
  var argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }

  var rv = {};
  for (var i = 0; i < argLength; i++) {
    rv[arguments[i]] = true;
  }
  return rv;
};


/**
 * Creates an immutable view of the underlying object, if the browser
 * supports immutable objects.
 *
 * In default mode, writes to this view will fail silently. In strict mode,
 * they will throw an error.
 *
 * @param {!Object.<K,V>} obj An object.
 * @return {!Object.<K,V>} An immutable view of that object, or the
 *     original object if this browser does not support immutables.
 * @template K,V
 */
goog.object.createImmutableView = function(obj) {
  var result = obj;
  if (Object.isFrozen && !Object.isFrozen(obj)) {
    result = Object.create(obj);
    Object.freeze(result);
  }
  return result;
};


/**
 * @param {!Object} obj An object.
 * @return {boolean} Whether this is an immutable view of the object.
 */
goog.object.isImmutableView = function(obj) {
  return !!Object.isFrozen && Object.isFrozen(obj);
};
}
if(!lt.util.load.provided_QMARK_('lt.plugins.data-viz.tree')) {
goog.provide('lt.plugins.data_viz.tree');
goog.require('cljs.core');
goog.require('lt.plugins.data_viz.core');
goog.require('lt.plugins.data_viz.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('goog.object');
goog.require('goog.object');
/**
* Atom containing all known branchable type keys determined by
* lt.plugins.data-viz.core/type-key. Can be extended at runtime
* or extended through the branchable? multimethod.
*/
lt.plugins.data_viz.tree._STAR_branchable_type_keys_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"vector","vector",4488484021),null,new cljs.core.Keyword(null,"map","map",1014012110),null,new cljs.core.Keyword(null,"seq","seq",1014018001),null,new cljs.core.Keyword(null,"set","set",1014018004),null,new cljs.core.Keyword(null,"array","array",1106994635),null,new cljs.core.Keyword(null,"atom","atom",1016908995),null,new cljs.core.Keyword(null,"list","list",1017226256),null,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),null], null), null));
/**
* Returns a sequence of [k v] pairs given a tree node.
*/
lt.plugins.data_viz.tree.children = (function (){var method_table__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7226__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7227__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7229__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("children",((function (method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__,hierarchy__7229__auto__){
return (function (p__8738){var vec__8739 = p__8738;var k = cljs.core.nth.call(null,vec__8739,0,null);var v = cljs.core.nth.call(null,vec__8739,1,null);return lt.plugins.data_viz.core.type_key.call(null,v);
});})(method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__,hierarchy__7229__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7229__auto__,method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.children,new cljs.core.Keyword(null,"map","map",1014012110),(function (p__8740){var vec__8741 = p__8740;var k = cljs.core.nth.call(null,vec__8741,0,null);var v = cljs.core.nth.call(null,vec__8741,1,null);return cljs.core.seq.call(null,v);
}));
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.children,new cljs.core.Keyword(null,"atom","atom",1016908995),(function (p__8742){var vec__8743 = p__8742;var k = cljs.core.nth.call(null,vec__8743,0,null);var v = cljs.core.nth.call(null,vec__8743,1,null);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.data-viz.tree","atom","lt.plugins.data-viz.tree/atom",2217158740),cljs.core.deref.call(null,v)], null)], null);
}));
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.children,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),(function (p__8744){var vec__8745 = p__8744;var k = cljs.core.nth.call(null,vec__8745,0,null);var v = cljs.core.nth.call(null,vec__8745,1,null);return cljs.core.map.call(null,cljs.core.vector,goog.object.getKeys(v),goog.object.getValues(v));
}));
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.children,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__8746){var vec__8747 = p__8746;var k = cljs.core.nth.call(null,vec__8747,0,null);var v = cljs.core.nth.call(null,vec__8747,1,null);return cljs.core.map_indexed.call(null,cljs.core.vector,v);
}));
/**
* Returns true if the given node can have branches.
*/
lt.plugins.data_viz.tree.branchable_QMARK_ = (function (){var method_table__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7226__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7227__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7229__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("branchable?",lt.plugins.data_viz.core.type_key,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7229__auto__,method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.branchable_QMARK_,new cljs.core.Keyword(null,"default","default",2558708147),(function (v){return cljs.core.deref.call(null,lt.plugins.data_viz.tree._STAR_branchable_type_keys_STAR_).call(null,lt.plugins.data_viz.core.type_key.call(null,v));
}));
/**
* Returns a new node given an existing node and a collection of children.
*/
lt.plugins.data_viz.tree.make_node = (function (){var method_table__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7226__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7227__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7229__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("make-node",((function (method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__,hierarchy__7229__auto__){
return (function (p__8748,_){var vec__8749 = p__8748;var ___$1 = cljs.core.nth.call(null,vec__8749,0,null);var v = cljs.core.nth.call(null,vec__8749,1,null);return lt.plugins.data_viz.core.type_key.call(null,v);
});})(method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__,hierarchy__7229__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7229__auto__,method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.make_node,new cljs.core.Keyword(null,"map","map",1014012110),(function (p__8750,children){var vec__8751 = p__8750;var k = cljs.core.nth.call(null,vec__8751,0,null);var v = cljs.core.nth.call(null,vec__8751,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,v,children)], null);
}));
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.make_node,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),(function (p__8752,c){var vec__8753 = p__8752;var k = cljs.core.nth.call(null,vec__8753,0,null);var v = cljs.core.nth.call(null,vec__8753,1,null);var o = (function (){var obj8755 = {};return obj8755;
})();var seq__8756_8794 = cljs.core.seq.call(null,cljs.core.concat.call(null,lt.plugins.data_viz.tree.children.call(null,v),c));var chunk__8757_8795 = null;var count__8758_8796 = 0;var i__8759_8797 = 0;while(true){
if((i__8759_8797 < count__8758_8796))
{var vec__8760_8798 = cljs.core._nth.call(null,chunk__8757_8795,i__8759_8797);var n_8799 = cljs.core.nth.call(null,vec__8760_8798,0,null);var d_8800 = cljs.core.nth.call(null,vec__8760_8798,1,null);(o[n_8799] = d_8800);
{
var G__8801 = seq__8756_8794;
var G__8802 = chunk__8757_8795;
var G__8803 = count__8758_8796;
var G__8804 = (i__8759_8797 + 1);
seq__8756_8794 = G__8801;
chunk__8757_8795 = G__8802;
count__8758_8796 = G__8803;
i__8759_8797 = G__8804;
continue;
}
} else
{var temp__4092__auto___8805 = cljs.core.seq.call(null,seq__8756_8794);if(temp__4092__auto___8805)
{var seq__8756_8806__$1 = temp__4092__auto___8805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8756_8806__$1))
{var c__7115__auto___8807 = cljs.core.chunk_first.call(null,seq__8756_8806__$1);{
var G__8808 = cljs.core.chunk_rest.call(null,seq__8756_8806__$1);
var G__8809 = c__7115__auto___8807;
var G__8810 = cljs.core.count.call(null,c__7115__auto___8807);
var G__8811 = 0;
seq__8756_8794 = G__8808;
chunk__8757_8795 = G__8809;
count__8758_8796 = G__8810;
i__8759_8797 = G__8811;
continue;
}
} else
{var vec__8761_8812 = cljs.core.first.call(null,seq__8756_8806__$1);var n_8813 = cljs.core.nth.call(null,vec__8761_8812,0,null);var d_8814 = cljs.core.nth.call(null,vec__8761_8812,1,null);(o[n_8813] = d_8814);
{
var G__8815 = cljs.core.next.call(null,seq__8756_8806__$1);
var G__8816 = null;
var G__8817 = 0;
var G__8818 = 0;
seq__8756_8794 = G__8815;
chunk__8757_8795 = G__8816;
count__8758_8796 = G__8817;
i__8759_8797 = G__8818;
continue;
}
}
} else
{}
}
break;
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,o], null);
}));
cljs.core._add_method.call(null,lt.plugins.data_viz.tree.make_node,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__8762,children){var vec__8763 = p__8762;var k = cljs.core.nth.call(null,vec__8763,0,null);var v = cljs.core.nth.call(null,vec__8763,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,v,cljs.core.map.call(null,cljs.core.second,children))], null);
}));
lt.plugins.data_viz.tree.TreeNode = (function (){var obj8765 = {};return obj8765;
})();
lt.plugins.data_viz.tree.branches = (function branches(this$){if((function (){var and__6355__auto__ = this$;if(and__6355__auto__)
{return this$.lt$plugins$data_viz$tree$TreeNode$branches$arity$1;
} else
{return and__6355__auto__;
}
})())
{return this$.lt$plugins$data_viz$tree$TreeNode$branches$arity$1(this$);
} else
{var x__6994__auto__ = (((this$ == null))?null:this$);return (function (){var or__6367__auto__ = (lt.plugins.data_viz.tree.branches[goog.typeOf(x__6994__auto__)]);if(or__6367__auto__)
{return or__6367__auto__;
} else
{var or__6367__auto____$1 = (lt.plugins.data_viz.tree.branches["_"]);if(or__6367__auto____$1)
{return or__6367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TreeNode.branches",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.data_viz.tree.unwrap = (function unwrap(this$){if((function (){var and__6355__auto__ = this$;if(and__6355__auto__)
{return this$.lt$plugins$data_viz$tree$TreeNode$unwrap$arity$1;
} else
{return and__6355__auto__;
}
})())
{return this$.lt$plugins$data_viz$tree$TreeNode$unwrap$arity$1(this$);
} else
{var x__6994__auto__ = (((this$ == null))?null:this$);return (function (){var or__6367__auto__ = (lt.plugins.data_viz.tree.unwrap[goog.typeOf(x__6994__auto__)]);if(or__6367__auto__)
{return or__6367__auto__;
} else
{var or__6367__auto____$1 = (lt.plugins.data_viz.tree.unwrap["_"]);if(or__6367__auto____$1)
{return or__6367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TreeNode.unwrap",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.data_viz.tree.__GT_tree = (function __GT_tree(obj){var reify_zipper = (function reify_zipper(node){if(typeof lt.plugins.data_viz.tree.t8789 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.data_viz.tree.t8789 = (function (node,reify_zipper,obj,__GT_tree,meta8790){
this.node = node;
this.reify_zipper = reify_zipper;
this.obj = obj;
this.__GT_tree = __GT_tree;
this.meta8790 = meta8790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.data_viz.tree.t8789.cljs$lang$type = true;
lt.plugins.data_viz.tree.t8789.cljs$lang$ctorStr = "lt.plugins.data-viz.tree/t8789";
lt.plugins.data_viz.tree.t8789.cljs$lang$ctorPrWriter = (function (this__6934__auto__,writer__6935__auto__,opt__6936__auto__){return cljs.core._write.call(null,writer__6935__auto__,"lt.plugins.data-viz.tree/t8789");
});
lt.plugins.data_viz.tree.t8789.prototype.lt$plugins$data_viz$tree$TreeNode$ = true;
lt.plugins.data_viz.tree.t8789.prototype.lt$plugins$data_viz$tree$TreeNode$branches$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var go_right = ((function (___$1){
return (function go_right(z){return cljs.core.cons.call(null,self__.reify_zipper.call(null,z),(new cljs.core.LazySeq(null,((function (___$1){
return (function (){var temp__4092__auto__ = clojure.zip.right.call(null,z);if(cljs.core.truth_(temp__4092__auto__))
{var r = temp__4092__auto__;return go_right.call(null,r);
} else
{return null;
}
});})(___$1))
,null,null)));
});})(___$1))
;
var temp__4092__auto__ = clojure.zip.down.call(null,self__.node);if(cljs.core.truth_(temp__4092__auto__))
{var d = temp__4092__auto__;return go_right.call(null,d);
} else
{return null;
}
});
lt.plugins.data_viz.tree.t8789.prototype.lt$plugins$data_viz$tree$TreeNode$unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return clojure.zip.node.call(null,self__.node);
});
lt.plugins.data_viz.tree.t8789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8791){var self__ = this;
var _8791__$1 = this;return self__.meta8790;
});
lt.plugins.data_viz.tree.t8789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8791,meta8790__$1){var self__ = this;
var _8791__$1 = this;return (new lt.plugins.data_viz.tree.t8789(self__.node,self__.reify_zipper,self__.obj,self__.__GT_tree,meta8790__$1));
});
lt.plugins.data_viz.tree.__GT_t8789 = (function __GT_t8789(node__$1,reify_zipper__$1,obj__$1,__GT_tree__$1,meta8790){return (new lt.plugins.data_viz.tree.t8789(node__$1,reify_zipper__$1,obj__$1,__GT_tree__$1,meta8790));
});
}
return (new lt.plugins.data_viz.tree.t8789(node,reify_zipper,obj,__GT_tree,null));
});
return reify_zipper.call(null,clojure.zip.zipper.call(null,(function (p__8792){var vec__8793 = p__8792;var _ = cljs.core.nth.call(null,vec__8793,0,null);var v = cljs.core.nth.call(null,vec__8793,1,null);return lt.plugins.data_viz.tree.branchable_QMARK_.call(null,v);
}),lt.plugins.data_viz.tree.children,lt.plugins.data_viz.tree.make_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.data-viz.tree","root","lt.plugins.data-viz.tree/root",2211180525),obj], null)));
});
lt.plugins.data_viz.tree.__GT_value = (function __GT_value(node){return cljs.core.second.call(null,lt.plugins.data_viz.tree.unwrap.call(null,node));
});
lt.plugins.data_viz.tree.__GT_key = (function __GT_key(node){return cljs.core.first.call(null,lt.plugins.data_viz.tree.unwrap.call(null,node));
});
lt.plugins.data_viz.tree.root_QMARK_ = (function root_QMARK_(node){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.tree","root","lt.plugins.data-viz.tree/root",2211180525),lt.plugins.data_viz.tree.__GT_key.call(null,node));
});
lt.plugins.data_viz.tree.atom_QMARK_ = (function atom_QMARK_(node){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.tree","atom","lt.plugins.data-viz.tree/atom",2217158740),lt.plugins.data_viz.tree.__GT_key.call(null,node));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.data-viz.ui')) {
goog.provide('lt.plugins.data_viz.ui');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.plugins.data_viz.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.plugins.data_viz.tree');
goog.require('lt.plugins.data_viz.core');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.objs.command');
goog.require('lt.plugins.data_viz.tree');
lt.plugins.data_viz.ui.add_class = (function add_class(el,klass){if(cljs.core.truth_((function (){var and__6355__auto__ = el;if(cljs.core.truth_(and__6355__auto__))
{return klass;
} else
{return and__6355__auto__;
}
})()))
{lt.util.dom.add_class.call(null,el,klass);
} else
{}
return el;
});
lt.plugins.data_viz.ui.type_key__GT_class = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keyword","keyword",4494463323),"cm-atom",new cljs.core.Keyword(null,"number","number",4274507451),"cm-number",new cljs.core.Keyword(null,"string","string",4416885635),"cm-string",new cljs.core.Keyword(null,"symbol","symbol",4421347594),"cm-symbol"], null));
lt.plugins.data_viz.ui.type_class = (function type_class(obj){return cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.data_viz.ui.type_key__GT_class),lt.plugins.data_viz.core.type_key.call(null,obj));
});
lt.plugins.data_viz.ui.key_ui = (function key_ui(this$,value){var e__7758__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tree-node-key","span.tree-node-key",1900334385),value], null));var seq__9610_9679 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7758__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click!","click!",3951157003),e);
});})(e__7758__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7758__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7758__auto__))
,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__7758__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouseover!","mouseover!",2036544442),e);
});})(e__7758__auto__))
], null)));var chunk__9611_9680 = null;var count__9612_9681 = 0;var i__9613_9682 = 0;while(true){
if((i__9613_9682 < count__9612_9681))
{var vec__9614_9683 = cljs.core._nth.call(null,chunk__9611_9680,i__9613_9682);var ev__7759__auto___9684 = cljs.core.nth.call(null,vec__9614_9683,0,null);var func__7760__auto___9685 = cljs.core.nth.call(null,vec__9614_9683,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9684,func__7760__auto___9685);
{
var G__9686 = seq__9610_9679;
var G__9687 = chunk__9611_9680;
var G__9688 = count__9612_9681;
var G__9689 = (i__9613_9682 + 1);
seq__9610_9679 = G__9686;
chunk__9611_9680 = G__9687;
count__9612_9681 = G__9688;
i__9613_9682 = G__9689;
continue;
}
} else
{var temp__4092__auto___9690 = cljs.core.seq.call(null,seq__9610_9679);if(temp__4092__auto___9690)
{var seq__9610_9691__$1 = temp__4092__auto___9690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9610_9691__$1))
{var c__7115__auto___9692 = cljs.core.chunk_first.call(null,seq__9610_9691__$1);{
var G__9693 = cljs.core.chunk_rest.call(null,seq__9610_9691__$1);
var G__9694 = c__7115__auto___9692;
var G__9695 = cljs.core.count.call(null,c__7115__auto___9692);
var G__9696 = 0;
seq__9610_9679 = G__9693;
chunk__9611_9680 = G__9694;
count__9612_9681 = G__9695;
i__9613_9682 = G__9696;
continue;
}
} else
{var vec__9615_9697 = cljs.core.first.call(null,seq__9610_9691__$1);var ev__7759__auto___9698 = cljs.core.nth.call(null,vec__9615_9697,0,null);var func__7760__auto___9699 = cljs.core.nth.call(null,vec__9615_9697,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9698,func__7760__auto___9699);
{
var G__9700 = cljs.core.next.call(null,seq__9610_9691__$1);
var G__9701 = null;
var G__9702 = 0;
var G__9703 = 0;
seq__9610_9679 = G__9700;
chunk__9611_9680 = G__9701;
count__9612_9681 = G__9702;
i__9613_9682 = G__9703;
continue;
}
}
} else
{}
}
break;
}
return e__7758__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node-key","lt.plugins.data-viz.ui/tree-node-key",2542512749),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-node-key","tree-node-key",788800725),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,parent,node){var k = lt.plugins.data_viz.tree.__GT_key.call(null,node);var display_str = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),lt.plugins.data_viz.core.type_key.call(null,lt.plugins.data_viz.tree.__GT_value.call(null,parent))))?null:((typeof k === 'number')?[cljs.core.str("["),cljs.core.str(k),cljs.core.str("]")].join(''):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(k)].join(''):null)));if(cljs.core.truth_(display_str))
{return lt.plugins.data_viz.ui.add_class.call(null,lt.plugins.data_viz.ui.key_ui.call(null,this$,display_str),lt.plugins.data_viz.ui.type_class.call(null,k));
} else
{return null;
}
}));
lt.plugins.data_viz.ui.simple_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),null,new cljs.core.Keyword(null,"nil","nil",1014013315),null,new cljs.core.Keyword(null,"string","string",4416885635),null,new cljs.core.Keyword(null,"keyword","keyword",4494463323),null,new cljs.core.Keyword(null,"number","number",4274507451),null], null), null);
lt.plugins.data_viz.ui.simple_display = (function simple_display(v,cnt){var s = cljs.core.pr_str.call(null,v);var f = cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,cnt,s));var r = cljs.core.drop.call(null,cnt,s);if(cljs.core.seq.call(null,r))
{return [cljs.core.str(f),cljs.core.str(" ..")].join('');
} else
{return f;
}
});
lt.plugins.data_viz.ui.value_display = (function (){var method_table__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7226__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7227__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7229__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("value-display",lt.plugins.data_viz.core.type_key,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7229__auto__,method_table__7225__auto__,prefer_table__7226__auto__,method_cache__7227__auto__,cached_hierarchy__7228__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.data_viz.ui.value_display,new cljs.core.Keyword(null,"default","default",2558708147),(function (v){if(lt.plugins.data_viz.core.atom_QMARK_.call(null,v))
{return [cljs.core.str("#<"),cljs.core.str(lt.plugins.data_viz.core.type_name.call(null,v)),cljs.core.str(": "),cljs.core.str(lt.plugins.data_viz.core.type_name.call(null,cljs.core.deref.call(null,v))),cljs.core.str(">")].join('');
} else
{if(cljs.core.truth_(lt.plugins.data_viz.tree.branchable_QMARK_.call(null,v)))
{return lt.plugins.data_viz.core.type_name.call(null,v);
} else
{if(cljs.core.truth_(lt.plugins.data_viz.ui.simple_types.call(null,lt.plugins.data_viz.core.type_key.call(null,v))))
{return cljs.core.pr_str.call(null,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.data_viz.ui.simple_display.call(null,v,80);
} else
{return null;
}
}
}
}
}));
lt.plugins.data_viz.ui.value_ui = (function value_ui(this$,value){var e__7758__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tree-node-value","span.tree-node-value",2479777859),value], null));var seq__9622_9704 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7758__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click!","click!",3951157003),e);
});})(e__7758__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7758__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7758__auto__))
,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__7758__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouseover!","mouseover!",2036544442),e);
});})(e__7758__auto__))
], null)));var chunk__9623_9705 = null;var count__9624_9706 = 0;var i__9625_9707 = 0;while(true){
if((i__9625_9707 < count__9624_9706))
{var vec__9626_9708 = cljs.core._nth.call(null,chunk__9623_9705,i__9625_9707);var ev__7759__auto___9709 = cljs.core.nth.call(null,vec__9626_9708,0,null);var func__7760__auto___9710 = cljs.core.nth.call(null,vec__9626_9708,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9709,func__7760__auto___9710);
{
var G__9711 = seq__9622_9704;
var G__9712 = chunk__9623_9705;
var G__9713 = count__9624_9706;
var G__9714 = (i__9625_9707 + 1);
seq__9622_9704 = G__9711;
chunk__9623_9705 = G__9712;
count__9624_9706 = G__9713;
i__9625_9707 = G__9714;
continue;
}
} else
{var temp__4092__auto___9715 = cljs.core.seq.call(null,seq__9622_9704);if(temp__4092__auto___9715)
{var seq__9622_9716__$1 = temp__4092__auto___9715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9622_9716__$1))
{var c__7115__auto___9717 = cljs.core.chunk_first.call(null,seq__9622_9716__$1);{
var G__9718 = cljs.core.chunk_rest.call(null,seq__9622_9716__$1);
var G__9719 = c__7115__auto___9717;
var G__9720 = cljs.core.count.call(null,c__7115__auto___9717);
var G__9721 = 0;
seq__9622_9704 = G__9718;
chunk__9623_9705 = G__9719;
count__9624_9706 = G__9720;
i__9625_9707 = G__9721;
continue;
}
} else
{var vec__9627_9722 = cljs.core.first.call(null,seq__9622_9716__$1);var ev__7759__auto___9723 = cljs.core.nth.call(null,vec__9627_9722,0,null);var func__7760__auto___9724 = cljs.core.nth.call(null,vec__9627_9722,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9723,func__7760__auto___9724);
{
var G__9725 = cljs.core.next.call(null,seq__9622_9716__$1);
var G__9726 = null;
var G__9727 = 0;
var G__9728 = 0;
seq__9622_9704 = G__9725;
chunk__9623_9705 = G__9726;
count__9624_9706 = G__9727;
i__9625_9707 = G__9728;
continue;
}
}
} else
{}
}
break;
}
return e__7758__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node-value","lt.plugins.data-viz.ui/tree-node-value",3346952339),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-node-value","tree-node-value",3742787303),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,_,node){var v = lt.plugins.data_viz.tree.__GT_value.call(null,node);return lt.plugins.data_viz.ui.add_class.call(null,lt.plugins.data_viz.ui.value_ui.call(null,this$,lt.plugins.data_viz.ui.value_display.call(null,v)),(function (){var or__6367__auto__ = lt.plugins.data_viz.ui.type_class.call(null,v);if(cljs.core.truth_(or__6367__auto__))
{return or__6367__auto__;
} else
{return "cm-builtin";
}
})());
}));
lt.plugins.data_viz.ui.__BEH__tree_node__DOT__on_destroy = (function __BEH__tree_node__DOT__on_destroy(this$){var temp__4092__auto___9729 = new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9729))
{var children_9730 = temp__4092__auto___9729;var seq__9632_9731 = cljs.core.seq.call(null,children_9730);var chunk__9633_9732 = null;var count__9634_9733 = 0;var i__9635_9734 = 0;while(true){
if((i__9635_9734 < count__9634_9733))
{var c_9735 = cljs.core._nth.call(null,chunk__9633_9732,i__9635_9734);lt.object.destroy_BANG_.call(null,c_9735);
{
var G__9736 = seq__9632_9731;
var G__9737 = chunk__9633_9732;
var G__9738 = count__9634_9733;
var G__9739 = (i__9635_9734 + 1);
seq__9632_9731 = G__9736;
chunk__9633_9732 = G__9737;
count__9634_9733 = G__9738;
i__9635_9734 = G__9739;
continue;
}
} else
{var temp__4092__auto___9740__$1 = cljs.core.seq.call(null,seq__9632_9731);if(temp__4092__auto___9740__$1)
{var seq__9632_9741__$1 = temp__4092__auto___9740__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9632_9741__$1))
{var c__7115__auto___9742 = cljs.core.chunk_first.call(null,seq__9632_9741__$1);{
var G__9743 = cljs.core.chunk_rest.call(null,seq__9632_9741__$1);
var G__9744 = c__7115__auto___9742;
var G__9745 = cljs.core.count.call(null,c__7115__auto___9742);
var G__9746 = 0;
seq__9632_9731 = G__9743;
chunk__9633_9732 = G__9744;
count__9634_9733 = G__9745;
i__9635_9734 = G__9746;
continue;
}
} else
{var c_9747 = cljs.core.first.call(null,seq__9632_9741__$1);lt.object.destroy_BANG_.call(null,c_9747);
{
var G__9748 = cljs.core.next.call(null,seq__9632_9741__$1);
var G__9749 = null;
var G__9750 = 0;
var G__9751 = 0;
seq__9632_9731 = G__9748;
chunk__9633_9732 = G__9749;
count__9634_9733 = G__9750;
i__9635_9734 = G__9751;
continue;
}
}
} else
{}
}
break;
}
} else
{}
var temp__4092__auto___9752 = new cljs.core.Keyword("lt.plugins.data-viz.ui","key","lt.plugins.data-viz.ui/key",1776293737).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9752))
{var kobj_9753 = temp__4092__auto___9752;lt.object.destroy_BANG_.call(null,kobj_9753);
} else
{}
return lt.object.destroy_BANG_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","value","lt.plugins.data-viz.ui/value",1803225727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node.on-destroy","lt.plugins.data-viz.ui/tree-node.on-destroy",1036070503),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.data_viz.ui.__BEH__tree_node__DOT__on_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.data_viz.ui.children_ui = (function children_ui(children){var e__7758__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.children","ul.children",1596370664),(function (){var iter__7084__auto__ = (function iter__9646(s__9647){return (new cljs.core.LazySeq(null,(function (){var s__9647__$1 = s__9647;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9647__$1);if(temp__4092__auto__)
{var s__9647__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9647__$2))
{var c__7082__auto__ = cljs.core.chunk_first.call(null,s__9647__$2);var size__7083__auto__ = cljs.core.count.call(null,c__7082__auto__);var b__9649 = cljs.core.chunk_buffer.call(null,size__7083__auto__);if((function (){var i__9648 = 0;while(true){
if((i__9648 < size__7083__auto__))
{var c = cljs.core._nth.call(null,c__7082__auto__,i__9648);cljs.core.chunk_append.call(null,b__9649,lt.object.__GT_content.call(null,c));
{
var G__9754 = (i__9648 + 1);
i__9648 = G__9754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9649),iter__9646.call(null,cljs.core.chunk_rest.call(null,s__9647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9649),null);
}
} else
{var c = cljs.core.first.call(null,s__9647__$2);return cljs.core.cons.call(null,lt.object.__GT_content.call(null,c),iter__9646.call(null,cljs.core.rest.call(null,s__9647__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7084__auto__.call(null,children);
})()], null));var seq__9650_9755 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9651_9756 = null;var count__9652_9757 = 0;var i__9653_9758 = 0;while(true){
if((i__9653_9758 < count__9652_9757))
{var vec__9654_9759 = cljs.core._nth.call(null,chunk__9651_9756,i__9653_9758);var ev__7759__auto___9760 = cljs.core.nth.call(null,vec__9654_9759,0,null);var func__7760__auto___9761 = cljs.core.nth.call(null,vec__9654_9759,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9760,func__7760__auto___9761);
{
var G__9762 = seq__9650_9755;
var G__9763 = chunk__9651_9756;
var G__9764 = count__9652_9757;
var G__9765 = (i__9653_9758 + 1);
seq__9650_9755 = G__9762;
chunk__9651_9756 = G__9763;
count__9652_9757 = G__9764;
i__9653_9758 = G__9765;
continue;
}
} else
{var temp__4092__auto___9766 = cljs.core.seq.call(null,seq__9650_9755);if(temp__4092__auto___9766)
{var seq__9650_9767__$1 = temp__4092__auto___9766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9650_9767__$1))
{var c__7115__auto___9768 = cljs.core.chunk_first.call(null,seq__9650_9767__$1);{
var G__9769 = cljs.core.chunk_rest.call(null,seq__9650_9767__$1);
var G__9770 = c__7115__auto___9768;
var G__9771 = cljs.core.count.call(null,c__7115__auto___9768);
var G__9772 = 0;
seq__9650_9755 = G__9769;
chunk__9651_9756 = G__9770;
count__9652_9757 = G__9771;
i__9653_9758 = G__9772;
continue;
}
} else
{var vec__9655_9773 = cljs.core.first.call(null,seq__9650_9767__$1);var ev__7759__auto___9774 = cljs.core.nth.call(null,vec__9655_9773,0,null);var func__7760__auto___9775 = cljs.core.nth.call(null,vec__9655_9773,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9774,func__7760__auto___9775);
{
var G__9776 = cljs.core.next.call(null,seq__9650_9767__$1);
var G__9777 = null;
var G__9778 = 0;
var G__9779 = 0;
seq__9650_9755 = G__9776;
chunk__9651_9756 = G__9777;
count__9652_9757 = G__9778;
i__9653_9758 = G__9779;
continue;
}
}
} else
{}
}
break;
}
return e__7758__auto__;
});
lt.plugins.data_viz.ui.__BEH__tree_node__DOT__open = (function __BEH__tree_node__DOT__open(this$){var node = new cljs.core.Keyword(null,"node","node",1017291124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var children = cljs.core.map.call(null,((function (node){
return (function (p1__9656_SHARP_){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node","lt.plugins.data-viz.ui/tree-node",2465973983),node,p1__9656_SHARP_);
});})(node))
,lt.plugins.data_viz.tree.branches.call(null,node));lt.util.dom.append.call(null,lt.object.__GT_content.call(null,this$),lt.plugins.data_viz.ui.children_ui.call(null,children));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",2673430897),children,new cljs.core.Keyword(null,"open","open",1017321916),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node.open","lt.plugins.data-viz.ui/tree-node.open",4462733409),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.data_viz.ui.__BEH__tree_node__DOT__open,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.plugins.data_viz.ui.__BEH__tree_node__DOT__close = (function __BEH__tree_node__DOT__close(this$){lt.util.dom.remove.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.children","ul.children",1596370664),lt.object.__GT_content.call(null,this$)));
var seq__9661_9780 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__9662_9781 = null;var count__9663_9782 = 0;var i__9664_9783 = 0;while(true){
if((i__9664_9783 < count__9663_9782))
{var c_9784 = cljs.core._nth.call(null,chunk__9662_9781,i__9664_9783);lt.object.destroy_BANG_.call(null,c_9784);
{
var G__9785 = seq__9661_9780;
var G__9786 = chunk__9662_9781;
var G__9787 = count__9663_9782;
var G__9788 = (i__9664_9783 + 1);
seq__9661_9780 = G__9785;
chunk__9662_9781 = G__9786;
count__9663_9782 = G__9787;
i__9664_9783 = G__9788;
continue;
}
} else
{var temp__4092__auto___9789 = cljs.core.seq.call(null,seq__9661_9780);if(temp__4092__auto___9789)
{var seq__9661_9790__$1 = temp__4092__auto___9789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9661_9790__$1))
{var c__7115__auto___9791 = cljs.core.chunk_first.call(null,seq__9661_9790__$1);{
var G__9792 = cljs.core.chunk_rest.call(null,seq__9661_9790__$1);
var G__9793 = c__7115__auto___9791;
var G__9794 = cljs.core.count.call(null,c__7115__auto___9791);
var G__9795 = 0;
seq__9661_9780 = G__9792;
chunk__9662_9781 = G__9793;
count__9663_9782 = G__9794;
i__9664_9783 = G__9795;
continue;
}
} else
{var c_9796 = cljs.core.first.call(null,seq__9661_9790__$1);lt.object.destroy_BANG_.call(null,c_9796);
{
var G__9797 = cljs.core.next.call(null,seq__9661_9790__$1);
var G__9798 = null;
var G__9799 = 0;
var G__9800 = 0;
seq__9661_9780 = G__9797;
chunk__9662_9781 = G__9798;
count__9663_9782 = G__9799;
i__9664_9783 = G__9800;
continue;
}
}
} else
{}
}
break;
}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",1017321916),false,new cljs.core.Keyword(null,"children","children",2673430897),null], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node.close","lt.plugins.data-viz.ui/tree-node.close",3326875061),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.data_viz.ui.__BEH__tree_node__DOT__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.data_viz.ui.__BEH__tree_node__DOT__toggle = (function __BEH__tree_node__DOT__toggle(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"open","open",1017321916));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node.toggle","lt.plugins.data-viz.ui/tree-node.toggle",2371703071),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.data_viz.ui.__BEH__tree_node__DOT__toggle,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle","toggle",4440567494),null], null), null));
lt.plugins.data_viz.ui.create_display_node = (function create_display_node(this$,k,parent,node){var obj = lt.object.create.call(null,k,parent,node);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent-id","parent-id",3084183696),lt.object.__GT_id.call(null,this$)], null));
return obj;
});
lt.plugins.data_viz.ui.display_key_QMARK_ = (function display_key_QMARK_(parent,node){var vec__9666 = lt.plugins.data_viz.tree.unwrap.call(null,parent);var pk = cljs.core.nth.call(null,vec__9666,0,null);var pv = cljs.core.nth.call(null,vec__9666,1,null);return !((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),lt.plugins.data_viz.core.type_key.call(null,pv))) || (lt.plugins.data_viz.tree.root_QMARK_.call(null,node)) || (lt.plugins.data_viz.tree.atom_QMARK_.call(null,node)));
});
lt.plugins.data_viz.ui.display_ui = (function display_ui(this$,parent,node){var e__7758__auto__ = crate.core.html.call(null,((lt.plugins.data_viz.ui.display_key_QMARK_.call(null,(function (){var or__6367__auto__ = parent;if(cljs.core.truth_(or__6367__auto__))
{return or__6367__auto__;
} else
{return node;
}
})(),node))?(function (){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.data-viz.ui","key","lt.plugins.data-viz.ui/key",1776293737),lt.plugins.data_viz.ui.create_display_node.call(null,this$,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node-key","lt.plugins.data-viz.ui/tree-node-key",2542512749),parent,node)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.display","span.display",681650576),lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","key","lt.plugins.data-viz.ui/key",1776293737).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))," ",lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","value","lt.plugins.data-viz.ui/value",1803225727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.display","span.display",681650576),lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","value","lt.plugins.data-viz.ui/value",1803225727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null)));var seq__9673_9801 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7758__auto__){
return (function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"toggle","toggle",4440567494));
});})(e__7758__auto__))
], null)));var chunk__9674_9802 = null;var count__9675_9803 = 0;var i__9676_9804 = 0;while(true){
if((i__9676_9804 < count__9675_9803))
{var vec__9677_9805 = cljs.core._nth.call(null,chunk__9674_9802,i__9676_9804);var ev__7759__auto___9806 = cljs.core.nth.call(null,vec__9677_9805,0,null);var func__7760__auto___9807 = cljs.core.nth.call(null,vec__9677_9805,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9806,func__7760__auto___9807);
{
var G__9808 = seq__9673_9801;
var G__9809 = chunk__9674_9802;
var G__9810 = count__9675_9803;
var G__9811 = (i__9676_9804 + 1);
seq__9673_9801 = G__9808;
chunk__9674_9802 = G__9809;
count__9675_9803 = G__9810;
i__9676_9804 = G__9811;
continue;
}
} else
{var temp__4092__auto___9812 = cljs.core.seq.call(null,seq__9673_9801);if(temp__4092__auto___9812)
{var seq__9673_9813__$1 = temp__4092__auto___9812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9673_9813__$1))
{var c__7115__auto___9814 = cljs.core.chunk_first.call(null,seq__9673_9813__$1);{
var G__9815 = cljs.core.chunk_rest.call(null,seq__9673_9813__$1);
var G__9816 = c__7115__auto___9814;
var G__9817 = cljs.core.count.call(null,c__7115__auto___9814);
var G__9818 = 0;
seq__9673_9801 = G__9815;
chunk__9674_9802 = G__9816;
count__9675_9803 = G__9817;
i__9676_9804 = G__9818;
continue;
}
} else
{var vec__9678_9819 = cljs.core.first.call(null,seq__9673_9813__$1);var ev__7759__auto___9820 = cljs.core.nth.call(null,vec__9678_9819,0,null);var func__7760__auto___9821 = cljs.core.nth.call(null,vec__9678_9819,1,null);lt.util.dom.on.call(null,e__7758__auto__,ev__7759__auto___9820,func__7760__auto___9821);
{
var G__9822 = cljs.core.next.call(null,seq__9673_9813__$1);
var G__9823 = null;
var G__9824 = 0;
var G__9825 = 0;
seq__9673_9801 = G__9822;
chunk__9674_9802 = G__9823;
count__9675_9803 = G__9824;
i__9676_9804 = G__9825;
continue;
}
}
} else
{}
}
break;
}
return e__7758__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node","lt.plugins.data-viz.ui/tree-node",2465973983),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-node","tree-node",999547459),null], null), null),new cljs.core.Keyword(null,"node","node",1017291124),null,new cljs.core.Keyword(null,"open","open",1017321916),false,new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,parent,node){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.plugins.data-viz.ui","value","lt.plugins.data-viz.ui/value",1803225727),lt.plugins.data_viz.ui.create_display_node.call(null,this$,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node-value","lt.plugins.data-viz.ui/tree-node-value",3346952339),parent,node),new cljs.core.Keyword(null,"node","node",1017291124),node], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tree-node.cm-s-default","li.tree-node.cm-s-default",1781118020),lt.plugins.data_viz.ui.display_ui.call(null,this$,parent,node)], null);
}));
lt.plugins.data_viz.ui.make_tree_node = (function make_tree_node(parent,node){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.data-viz.ui","tree-node","lt.plugins.data-viz.ui/tree-node",2465973983),parent,node);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.data-viz.alpeh')) {
goog.provide('lt.plugins.data_viz.alpeh');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.data_viz.ui');
goog.require('lt.plugins.data_viz.tree');
goog.require('lt.objs.command');
goog.require('lt.plugins.data_viz.ui');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
goog.require('lt.plugins.data_viz.tree');
lt.plugins.data_viz.alpeh.__BEH__alpeh_object_viewer__DOT__set_BANG_ = (function __BEH__alpeh_object_viewer__DOT__set_BANG_(this$,obj){var temp__4092__auto___9844 = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9844))
{var old_9845 = temp__4092__auto___9844;lt.object.destroy_BANG_.call(null,old_9845);
} else
{}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",4285503153),lt.plugins.data_viz.ui.make_tree_node.call(null,null,lt.plugins.data_viz.tree.__GT_tree.call(null,obj))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.alpeh","alpeh-object-viewer.set!","lt.plugins.data-viz.alpeh/alpeh-object-viewer.set!",2636706598),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.data_viz.alpeh.__BEH__alpeh_object_viewer__DOT__set_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set!","set!",1017430897),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.alpeh","alpeh-object-viewer","lt.plugins.data-viz.alpeh/alpeh-object-viewer",4379466099),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alpeh-object-viewer","alpeh-object-viewer",2119060429),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"LT Object Viewer",new cljs.core.Keyword(null,"object","object",4285503153),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tree-node.root","div.tree-node.root",2581796942),crate.binding.bound.call(null,this$,(function (_){var temp__4090__auto__ = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4090__auto__))
{var data = temp__4090__auto__;return lt.object.__GT_content.call(null,data);
} else
{return "No Light Table object selected";
}
}))], null);
}));
lt.plugins.data_viz.alpeh.viewer = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.data-viz.alpeh","alpeh-object-viewer","lt.plugins.data-viz.alpeh/alpeh-object-viewer",4379466099));
lt.plugins.data_viz.alpeh.ltobj_QMARK_ = (function ltobj_QMARK_(obj){var and__6355__auto__ = obj;if(cljs.core.truth_(and__6355__auto__))
{var and__6355__auto____$1 = cljs.core.deref.call(null,obj);if(cljs.core.truth_(and__6355__auto____$1))
{var and__6355__auto____$2 = cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,obj));if(and__6355__auto____$2)
{return new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));
} else
{return and__6355__auto____$2;
}
} else
{return and__6355__auto____$1;
}
} else
{return and__6355__auto__;
}
});
lt.plugins.data_viz.alpeh.__BEH__alpeh__DOT__on_select = (function __BEH__alpeh__DOT__on_select(_,obj){if(cljs.core.truth_(lt.plugins.data_viz.alpeh.ltobj_QMARK_.call(null,cljs.core.atom.call(null,obj))))
{lt.object.raise.call(null,lt.plugins.data_viz.alpeh.viewer,new cljs.core.Keyword(null,"set!","set!",1017430897),obj);
} else
{}
return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.data_viz.alpeh.viewer);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.data-viz.alpeh","alpeh.on-select","lt.plugins.data-viz.alpeh/alpeh.on-select",3788186172),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.data_viz.alpeh.__BEH__alpeh__DOT__on_select,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.data-viz')) {
goog.provide('lt.plugins.data_viz');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
}
if(!lt.util.load.provided_QMARK_('lt.plugins.data-viz.reader')) {
goog.provide('lt.plugins.data_viz.reader');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
lt.plugins.data_viz.reader.atom_re = /^#<Atom: (.+)>$/;
lt.plugins.data_viz.reader.other_re = /^#<.+>$/;
lt.plugins.data_viz.reader.atom_str_QMARK_ = (function atom_str_QMARK_(s){return (typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_find.call(null,lt.plugins.data_viz.reader.atom_re,s)));
});
lt.plugins.data_viz.reader.other_str_QMARK_ = (function other_str_QMARK_(s){return (typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_find.call(null,lt.plugins.data_viz.reader.other_re,s)));
});
lt.plugins.data_viz.reader.atom_str_value = (function atom_str_value(s){return cljs.core.second.call(null,cljs.core.re_find.call(null,lt.plugins.data_viz.reader.atom_re,s));
});
lt.plugins.data_viz.reader.read_string_cljs_atom_BANG_ = (function read_string_cljs_atom_BANG_(s){return cljs.core.atom.call(null,cljs.reader.read_string.call(null,lt.plugins.data_viz.reader.atom_str_value.call(null,s)));
});
lt.plugins.data_viz.reader._STAR_parsers_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"can-parse?","can-parse?",2527637499),lt.plugins.data_viz.reader.atom_str_QMARK_,new cljs.core.Keyword(null,"fun","fun",1014006001),lt.plugins.data_viz.reader.read_string_cljs_atom_BANG_], null)], null));
lt.plugins.data_viz.reader.find_unreadable_forms = (function find_unreadable_forms(s){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"capture","capture",1566489272),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"final","final",1111340264),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"#?","#?",1013905390),false,new cljs.core.Keyword(null,"level","level",1116770038),0], null);var c = cljs.core.first.call(null,cljs.core.seq.call(null,s));var r = cljs.core.rest.call(null,cljs.core.seq.call(null,s));while(true){
var prevHash_QMARK_ = new cljs.core.Keyword(null,"#?","#?",1013905390).cljs$core$IFn$_invoke$arity$1(state);var c_is_hash = cljs.core._EQ_.call(null,"#",c);var c_is_start = cljs.core._EQ_.call(null,"<",c);var c_is_end = cljs.core._EQ_.call(null,">",c);var next_c = cljs.core.first.call(null,r);var next_r = cljs.core.rest.call(null,r);if((c == null))
{return new cljs.core.Keyword(null,"final","final",1111340264).cljs$core$IFn$_invoke$arity$1(state);
} else
{if((c_is_hash) && (cljs.core.not.call(null,prevHash_QMARK_)))
{{
var G__8717 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),true);
var G__8718 = next_c;
var G__8719 = next_r;
state = G__8717;
c = G__8718;
r = G__8719;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__6355__auto__ = !(c_is_start);if(and__6355__auto__)
{return prevHash_QMARK_;
} else
{return and__6355__auto__;
}
})()))
{{
var G__8720 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),false);
var G__8721 = next_c;
var G__8722 = next_r;
state = G__8720;
c = G__8721;
r = G__8722;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__6355__auto__ = c_is_start;if(and__6355__auto__)
{return prevHash_QMARK_;
} else
{return and__6355__auto__;
}
})()))
{{
var G__8723 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,"#<"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.inc);
var G__8724 = next_c;
var G__8725 = next_r;
state = G__8723;
c = G__8724;
r = G__8725;
continue;
}
} else
{if(((0 < new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (!(c_is_end)))
{{
var G__8726 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,c);
var G__8727 = next_c;
var G__8728 = next_r;
state = G__8726;
c = G__8727;
r = G__8728;
continue;
}
} else
{if((cljs.core._EQ_.call(null,1,new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (c_is_end))
{{
var G__8729 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"final","final",1111340264)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,new cljs.core.Keyword(null,"capture","capture",1566489272).cljs$core$IFn$_invoke$arity$1(state),c))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.dec),new cljs.core.Keyword(null,"capture","capture",1566489272),cljs.core.PersistentVector.EMPTY);
var G__8730 = next_c;
var G__8731 = next_r;
state = G__8729;
c = G__8730;
r = G__8731;
continue;
}
} else
{if(((1 < new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (c_is_end))
{{
var G__8732 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.dec);
var G__8733 = next_c;
var G__8734 = next_r;
state = G__8732;
c = G__8733;
r = G__8734;
continue;
}
} else
{if((cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not.call(null,prevHash_QMARK_)))
{{
var G__8735 = state;
var G__8736 = next_c;
var G__8737 = next_r;
state = G__8735;
c = G__8736;
r = G__8737;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
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
}
break;
}
});
lt.plugins.data_viz.reader.santize_pr_str = (function santize_pr_str(s){var bad_strs = lt.plugins.data_viz.reader.find_unreadable_forms.call(null,s);var sanitize = ((function (bad_strs){
return (function (a,n){return clojure.string.replace.call(null,a,n,cljs.core.quote_string.call(null,n));
});})(bad_strs))
;return cljs.core.reduce.call(null,sanitize,s,bad_strs);
});
lt.plugins.data_viz.reader.read_string_BANG_ = (function read_string_BANG_(s){var temp__4090__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__8714_SHARP_){return p1__8714_SHARP_.call(null,s);
}),new cljs.core.Keyword(null,"can-parse?","can-parse?",2527637499)),cljs.core.deref.call(null,lt.plugins.data_viz.reader._STAR_parsers_STAR_)));if(cljs.core.truth_(temp__4090__auto__))
{var map__8716 = temp__4090__auto__;var map__8716__$1 = ((cljs.core.seq_QMARK_.call(null,map__8716))?cljs.core.apply.call(null,cljs.core.hash_map,map__8716):map__8716);var fun = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"fun","fun",1014006001));return fun.call(null,s);
} else
{return cljs.reader.read_string.call(null,lt.plugins.data_viz.reader.santize_pr_str.call(null,s));
}
});
}

//# sourceMappingURL=data_viz_compiled.js.map