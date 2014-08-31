if(!lt.util.load.provided_QMARK_('lt.plugins.birch.core')) {
goog.provide('lt.plugins.birch.core');
goog.require('cljs.core');
goog.require('goog');
lt.plugins.birch.core.atom_QMARK_ = (function atom_QMARK_(obj){return cljs.core.boolean$.call(null,(cljs.core.truth_(obj)?(obj instanceof cljs.core.Atom):null));
});
lt.plugins.birch.core.zipper_QMARK_ = (function zipper_QMARK_(obj){return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,obj),new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572));
});
lt.plugins.birch.core.js_obj_QMARK_ = (function js_obj_QMARK_(obj){return goog.isObject(obj);
});
lt.plugins.birch.core.dom_QMARK_ = (function dom_QMARK_(obj){var and__6352__auto__ = obj;if(cljs.core.truth_(and__6352__auto__))
{var and__6352__auto____$1 = obj.nodeType;if(cljs.core.truth_(and__6352__auto____$1))
{return cljs.core._EQ_.call(null,1,obj.nodeType);
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
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
lt.plugins.birch.core.type_info = (function (classification,fn,name,__meta,__extmap){
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
lt.plugins.birch.core.type_info.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6945__auto__){var self__ = this;
var this__6945__auto____$1 = this;var h__6775__auto__ = self__.__hash;if(!((h__6775__auto__ == null)))
{return h__6775__auto__;
} else
{var h__6775__auto____$1 = cljs.core.hash_imap.call(null,this__6945__auto____$1);self__.__hash = h__6775__auto____$1;
return h__6775__auto____$1;
}
});
lt.plugins.birch.core.type_info.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6950__auto__,k__6951__auto__){var self__ = this;
var this__6950__auto____$1 = this;return cljs.core._lookup.call(null,this__6950__auto____$1,k__6951__auto__,null);
});
lt.plugins.birch.core.type_info.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6952__auto__,k8515,else__6953__auto__){var self__ = this;
var this__6952__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k8515,new cljs.core.Keyword(null,"classification","classification",1396254552)))
{return self__.classification;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8515,new cljs.core.Keyword(null,"fn","fn",1013907514)))
{return self__.fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8515,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k8515,else__6953__auto__);
} else
{return null;
}
}
}
}
});
lt.plugins.birch.core.type_info.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6957__auto__,k__6958__auto__,G__8514){var self__ = this;
var this__6957__auto____$1 = this;var pred__8517 = cljs.core.keyword_identical_QMARK_;var expr__8518 = k__6958__auto__;if(cljs.core.truth_(pred__8517.call(null,new cljs.core.Keyword(null,"classification","classification",1396254552),expr__8518)))
{return (new lt.plugins.birch.core.type_info(G__8514,self__.fn,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8517.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514),expr__8518)))
{return (new lt.plugins.birch.core.type_info(self__.classification,G__8514,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8517.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__8518)))
{return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,G__8514,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6958__auto__,G__8514),null));
}
}
}
});
lt.plugins.birch.core.type_info.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6964__auto__,writer__6965__auto__,opts__6966__auto__){var self__ = this;
var this__6964__auto____$1 = this;var pr_pair__6967__auto__ = ((function (this__6964__auto____$1){
return (function (keyval__6968__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6965__auto__,cljs.core.pr_writer,""," ","",opts__6966__auto__,keyval__6968__auto__);
});})(this__6964__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6965__auto__,pr_pair__6967__auto__,"#lt.plugins.birch.core.type-info{",", ","}",opts__6966__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"classification","classification",1396254552),self__.classification],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",1013907514),self__.fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
lt.plugins.birch.core.type_info.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6955__auto__,entry__6956__auto__){var self__ = this;
var this__6955__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6956__auto__))
{return cljs.core._assoc.call(null,this__6955__auto____$1,cljs.core._nth.call(null,entry__6956__auto__,0),cljs.core._nth.call(null,entry__6956__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6955__auto____$1,entry__6956__auto__);
}
});
lt.plugins.birch.core.type_info.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6962__auto__){var self__ = this;
var this__6962__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"classification","classification",1396254552),self__.classification],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",1013907514),self__.fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
lt.plugins.birch.core.type_info.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6954__auto__){var self__ = this;
var this__6954__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
lt.plugins.birch.core.type_info.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6946__auto__,other__6947__auto__){var self__ = this;
var this__6946__auto____$1 = this;if(cljs.core.truth_((function (){var and__6352__auto__ = other__6947__auto__;if(cljs.core.truth_(and__6352__auto__))
{return ((this__6946__auto____$1.constructor === other__6947__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6946__auto____$1,other__6947__auto__));
} else
{return and__6352__auto__;
}
})()))
{return true;
} else
{return false;
}
});
lt.plugins.birch.core.type_info.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6949__auto__,G__8514){var self__ = this;
var this__6949__auto____$1 = this;return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,self__.name,G__8514,self__.__extmap,self__.__hash));
});
lt.plugins.birch.core.type_info.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6944__auto__){var self__ = this;
var this__6944__auto____$1 = this;return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
lt.plugins.birch.core.type_info.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6948__auto__){var self__ = this;
var this__6948__auto____$1 = this;return self__.__meta;
});
lt.plugins.birch.core.type_info.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6959__auto__,k__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"classification","classification",1396254552),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null], null), null),k__6960__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6959__auto____$1),self__.__meta),k__6960__auto__);
} else
{return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6960__auto__)),null));
}
});
lt.plugins.birch.core.type_info.cljs$lang$type = true;
lt.plugins.birch.core.type_info.cljs$lang$ctorPrSeq = (function (this__6984__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lt.plugins.birch.core/type-info");
});
lt.plugins.birch.core.type_info.cljs$lang$ctorPrWriter = (function (this__6984__auto__,writer__6985__auto__){return cljs.core._write.call(null,writer__6985__auto__,"lt.plugins.birch.core/type-info");
});
lt.plugins.birch.core.__GT_type_info = (function __GT_type_info(classification,fn,name){return (new lt.plugins.birch.core.type_info(classification,fn,name));
});
lt.plugins.birch.core.map__GT_type_info = (function map__GT_type_info(G__8516){return (new lt.plugins.birch.core.type_info(new cljs.core.Keyword(null,"classification","classification",1396254552).cljs$core$IFn$_invoke$arity$1(G__8516),new cljs.core.Keyword(null,"fn","fn",1013907514).cljs$core$IFn$_invoke$arity$1(G__8516),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__8516),null,cljs.core.dissoc.call(null,G__8516,new cljs.core.Keyword(null,"classification","classification",1396254552),new cljs.core.Keyword(null,"fn","fn",1013907514),new cljs.core.Keyword(null,"name","name",1017277949))));
});
/**
* Known mappings of determinable types and their names.
*/
lt.plugins.birch.core._STAR_known_type_info_STAR_ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.birch.core.zipper_QMARK_,"Zipper"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.birch.core.atom_QMARK_,"Atom"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.birch.core.dom_QMARK_,"DOMNode"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.map_QMARK_,"Map"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.vector_QMARK_,"Vector"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.list_QMARK_,"List"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.set_QMARK_,"Set"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.string_QMARK_,"String"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.keyword_QMARK_,"Keyword"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.nil_QMARK_,"nil"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.number_QMARK_,"Number"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.fn_QMARK_,"Function"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.array_QMARK_,"Array"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.symbol_QMARK_,"Symbol"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"abstract","abstract",2746803092),cljs.core.seq_QMARK_,"Seq"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),lt.plugins.birch.core.js_obj_QMARK_,"JSObject")], null);
lt.plugins.birch.core.type_name = (function type_name(obj){var order = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"concrete","concrete",4726228471),1,new cljs.core.Keyword(null,"abstract","abstract",2746803092),2,new cljs.core.Keyword(null,"primitive","primitive",3474063449),3], null);return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,((function (order){
return (function (p1__8520_SHARP_){return p1__8520_SHARP_.call(null,obj);
});})(order))
,new cljs.core.Keyword(null,"fn","fn",1013907514)),cljs.core.sort_by.call(null,cljs.core.comp.call(null,order,new cljs.core.Keyword(null,"classification","classification",1396254552)),lt.plugins.birch.core._STAR_known_type_info_STAR_))),new cljs.core.Keyword(null,"name","name",1017277949));
});
lt.plugins.birch.core.type_key = (function type_key(obj){var temp__4092__auto__ = lt.plugins.birch.core.type_name.call(null,obj);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,n.toLowerCase());
} else
{return null;
}
});
lt.plugins.birch.core.dom__GT_str = (function dom__GT_str(d){var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);var temp = document.createElement("div");temp.appendChild(d);
(result[0] = temp.innerHTML);
temp.innerHTML = "";
return (result[0]);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.birch.tree.protocols')) {
goog.provide('lt.plugins.birch.tree.protocols');
goog.require('cljs.core');
lt.plugins.birch.tree.protocols.TreeNodeChildren = (function (){var obj8942 = {};return obj8942;
})();
lt.plugins.birch.tree.protocols.children = (function children(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$birch$tree$protocols$TreeNodeChildren$children$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$birch$tree$protocols$TreeNodeChildren$children$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.birch.tree.protocols.children[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.birch.tree.protocols.children["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TreeNodeChildren.children",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.birch.tree.protocols.TreeNodeBranchable = (function (){var obj8944 = {};return obj8944;
})();
lt.plugins.birch.tree.protocols.branchable_QMARK_ = (function branchable_QMARK_(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$birch$tree$protocols$TreeNodeBranchable$branchable_QMARK_$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$birch$tree$protocols$TreeNodeBranchable$branchable_QMARK_$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.birch.tree.protocols.branchable_QMARK_[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.birch.tree.protocols.branchable_QMARK_["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TreeNodeBranchable.branchable?",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.birch.tree.protocols.TreeNodeMake = (function (){var obj8946 = {};return obj8946;
})();
lt.plugins.birch.tree.protocols.make_node = (function make_node(this$,key,children){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$birch$tree$protocols$TreeNodeMake$make_node$arity$3;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$birch$tree$protocols$TreeNodeMake$make_node$arity$3(this$,key,children);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.birch.tree.protocols.make_node[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.birch.tree.protocols.make_node["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TreeNodeMake.make-node",this$);
}
}
})().call(null,this$,key,children);
}
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
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",1965434859)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",1965434859),(function (){var and__6352__auto__ = children;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__6352__auto__;
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
{var vec__8455 = loc;var node = cljs.core.nth.call(null,vec__8455,0,null);var path = cljs.core.nth.call(null,vec__8455,1,null);var vec__8456 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__8456,0,null);var cnext = cljs.core.nthnext.call(null,vec__8456,1);var cs = vec__8456;if(cljs.core.truth_(cs))
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
clojure.zip.up = (function up(loc){var vec__8459 = loc;var node = cljs.core.nth.call(null,vec__8459,0,null);var map__8460 = cljs.core.nth.call(null,vec__8459,1,null);var map__8460__$1 = ((cljs.core.seq_QMARK_.call(null,map__8460))?cljs.core.apply.call(null,cljs.core.hash_map,map__8460):map__8460);var path = map__8460__$1;var l = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__6352__auto__ = ppath;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__6352__auto__;
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
var G__8493 = p;
loc = G__8493;
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
clojure.zip.right = (function right(loc){var vec__8464 = loc;var node = cljs.core.nth.call(null,vec__8464,0,null);var map__8465 = cljs.core.nth.call(null,vec__8464,1,null);var map__8465__$1 = ((cljs.core.seq_QMARK_.call(null,map__8465))?cljs.core.apply.call(null,cljs.core.hash_map,map__8465):map__8465);var path = map__8465__$1;var l = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__8466 = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__8466,0,null);var rnext = cljs.core.nthnext.call(null,vec__8466,1);var rs = vec__8466;if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
{return rs;
} else
{return and__6352__auto__;
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
clojure.zip.rightmost = (function rightmost(loc){var vec__8469 = loc;var node = cljs.core.nth.call(null,vec__8469,0,null);var map__8470 = cljs.core.nth.call(null,vec__8469,1,null);var map__8470__$1 = ((cljs.core.seq_QMARK_.call(null,map__8470))?cljs.core.apply.call(null,cljs.core.hash_map,map__8470):map__8470);var path = map__8470__$1;var l = cljs.core.get.call(null,map__8470__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8470__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
{return r;
} else
{return and__6352__auto__;
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
clojure.zip.left = (function left(loc){var vec__8473 = loc;var node = cljs.core.nth.call(null,vec__8473,0,null);var map__8474 = cljs.core.nth.call(null,vec__8473,1,null);var map__8474__$1 = ((cljs.core.seq_QMARK_.call(null,map__8474))?cljs.core.apply.call(null,cljs.core.hash_map,map__8474):map__8474);var path = map__8474__$1;var l = cljs.core.get.call(null,map__8474__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8474__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__6352__auto__;
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
clojure.zip.leftmost = (function leftmost(loc){var vec__8477 = loc;var node = cljs.core.nth.call(null,vec__8477,0,null);var map__8478 = cljs.core.nth.call(null,vec__8477,1,null);var map__8478__$1 = ((cljs.core.seq_QMARK_.call(null,map__8478))?cljs.core.apply.call(null,cljs.core.hash_map,map__8478):map__8478);var path = map__8478__$1;var l = cljs.core.get.call(null,map__8478__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8478__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__6352__auto__;
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
clojure.zip.insert_left = (function insert_left(loc,item){var vec__8481 = loc;var node = cljs.core.nth.call(null,vec__8481,0,null);var map__8482 = cljs.core.nth.call(null,vec__8481,1,null);var map__8482__$1 = ((cljs.core.seq_QMARK_.call(null,map__8482))?cljs.core.apply.call(null,cljs.core.hash_map,map__8482):map__8482);var path = map__8482__$1;var l = cljs.core.get.call(null,map__8482__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__8485 = loc;var node = cljs.core.nth.call(null,vec__8485,0,null);var map__8486 = cljs.core.nth.call(null,vec__8485,1,null);var map__8486__$1 = ((cljs.core.seq_QMARK_.call(null,map__8486))?cljs.core.apply.call(null,cljs.core.hash_map,map__8486):map__8486);var path = map__8486__$1;var r = cljs.core.get.call(null,map__8486__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__8488 = loc;var _ = cljs.core.nth.call(null,vec__8488,0,null);var path = cljs.core.nth.call(null,vec__8488,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__8494){
var loc = cljs.core.first(arglist__8494);
arglist__8494 = cljs.core.next(arglist__8494);
var f = cljs.core.first(arglist__8494);
var args = cljs.core.rest(arglist__8494);
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
{var or__6364__auto__ = (function (){var and__6352__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__6352__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__6352__auto__;
}
})();if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__6364__auto____$1))
{return or__6364__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__6364__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__6364__auto____$2))
{return or__6364__auto____$2;
} else
{{
var G__8495 = clojure.zip.up.call(null,p);
p = G__8495;
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
var temp__4090__auto____$1 = (function (){var and__6352__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__6352__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__6352__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__8496 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8496;
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
clojure.zip.remove = (function remove(loc){var vec__8491 = loc;var node = cljs.core.nth.call(null,vec__8491,0,null);var map__8492 = cljs.core.nth.call(null,vec__8491,1,null);var map__8492__$1 = ((cljs.core.seq_QMARK_.call(null,map__8492))?cljs.core.apply.call(null,cljs.core.hash_map,map__8492):map__8492);var path = map__8492__$1;var l = cljs.core.get.call(null,map__8492__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8492__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8492__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__8492__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4090__auto__ = (function (){var and__6352__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__6352__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__6352__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__8497 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8497;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__6352__auto__ = ppath;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__6352__auto__;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.birch.tree')) {
goog.provide('lt.plugins.birch.tree');
goog.require('cljs.core');
goog.require('lt.plugins.birch.core');
goog.require('lt.plugins.birch.tree.protocols');
goog.require('lt.plugins.birch.tree.protocols');
goog.require('lt.plugins.birch.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('goog.object');
goog.require('goog.object');
/**
* Contains all known branchable type keys determined by
* lt.plugins.birch.core/type-key.
*/
lt.plugins.birch.tree._STAR_branchable_type_keys_STAR_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"vector","vector",4488484021),null,new cljs.core.Keyword(null,"map","map",1014012110),null,new cljs.core.Keyword(null,"seq","seq",1014018001),null,new cljs.core.Keyword(null,"set","set",1014018004),null,new cljs.core.Keyword(null,"array","array",1106994635),null,new cljs.core.Keyword(null,"atom","atom",1016908995),null,new cljs.core.Keyword(null,"list","list",1017226256),null,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),null], null), null);
/**
* Returns a sequence of [k v] pairs given a tree node.
*/
lt.plugins.birch.tree.children = (function (){var method_table__7222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7224__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7226__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("children",((function (method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__){
return (function (p__8593){var vec__8594 = p__8593;var k = cljs.core.nth.call(null,vec__8594,0,null);var v = cljs.core.nth.call(null,vec__8594,1,null);return lt.plugins.birch.core.type_key.call(null,v);
});})(method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"map","map",1014012110),(function (p__8595){var vec__8596 = p__8595;var k = cljs.core.nth.call(null,vec__8596,0,null);var v = cljs.core.nth.call(null,vec__8596,1,null);return cljs.core.seq.call(null,v);
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"atom","atom",1016908995),(function (p__8597){var vec__8598 = p__8597;var k = cljs.core.nth.call(null,vec__8598,0,null);var v = cljs.core.nth.call(null,vec__8598,1,null);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.birch.tree","atom","lt.plugins.birch.tree/atom",1097049031),cljs.core.deref.call(null,v)], null)], null);
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),(function (p__8599){var vec__8600 = p__8599;var k = cljs.core.nth.call(null,vec__8600,0,null);var v = cljs.core.nth.call(null,vec__8600,1,null);if((function (){var G__8601 = v;if(G__8601)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8601.lt$plugins$birch$tree$protocols$TreeNodeChildren$;
}
})()))
{return true;
} else
{if((!G__8601.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8601);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8601);
}
})())
{return lt.plugins.birch.tree.protocols.children.call(null,v);
} else
{return cljs.core.map.call(null,cljs.core.vector,goog.object.getKeys(v),goog.object.getValues(v));
}
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__8602){var vec__8603 = p__8602;var k = cljs.core.nth.call(null,vec__8603,0,null);var v = cljs.core.nth.call(null,vec__8603,1,null);if((function (){var G__8604 = v;if(G__8604)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8604.lt$plugins$birch$tree$protocols$TreeNodeChildren$;
}
})()))
{return true;
} else
{if((!G__8604.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8604);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8604);
}
})())
{return lt.plugins.birch.tree.protocols.children.call(null,v);
} else
{return cljs.core.map_indexed.call(null,cljs.core.vector,v);
}
}));
/**
* Returns true if the given node can have branches.
*/
lt.plugins.birch.tree.branchable_QMARK_ = (function (){var method_table__7222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7224__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7226__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("branchable?",lt.plugins.birch.core.type_key,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.birch.tree.branchable_QMARK_,new cljs.core.Keyword(null,"default","default",2558708147),(function (v){if((function (){var G__8605 = v;if(G__8605)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8605.lt$plugins$birch$tree$protocols$TreeNodeBranchable$;
}
})()))
{return true;
} else
{if((!G__8605.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeBranchable,G__8605);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeBranchable,G__8605);
}
})())
{return lt.plugins.birch.tree.protocols.branchable_QMARK_.call(null,v);
} else
{return lt.plugins.birch.tree._STAR_branchable_type_keys_STAR_.call(null,lt.plugins.birch.core.type_key.call(null,v));
}
}));
/**
* Returns a new node given an existing node and a collection of children.
*/
lt.plugins.birch.tree.make_node = (function (){var method_table__7222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7224__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7226__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("make-node",((function (method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__){
return (function (p__8606,_){var vec__8607 = p__8606;var ___$1 = cljs.core.nth.call(null,vec__8607,0,null);var v = cljs.core.nth.call(null,vec__8607,1,null);return lt.plugins.birch.core.type_key.call(null,v);
});})(method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.birch.tree.make_node,new cljs.core.Keyword(null,"map","map",1014012110),(function (p__8608,children){var vec__8609 = p__8608;var k = cljs.core.nth.call(null,vec__8609,0,null);var v = cljs.core.nth.call(null,vec__8609,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,v,children)], null);
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.make_node,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),(function (p__8610,c){var vec__8611 = p__8610;var k = cljs.core.nth.call(null,vec__8611,0,null);var v = cljs.core.nth.call(null,vec__8611,1,null);var o = (function (){var obj8613 = {};return obj8613;
})();var seq__8614_8653 = cljs.core.seq.call(null,cljs.core.concat.call(null,lt.plugins.birch.tree.children.call(null,v),c));var chunk__8615_8654 = null;var count__8616_8655 = 0;var i__8617_8656 = 0;while(true){
if((i__8617_8656 < count__8616_8655))
{var vec__8618_8657 = cljs.core._nth.call(null,chunk__8615_8654,i__8617_8656);var n_8658 = cljs.core.nth.call(null,vec__8618_8657,0,null);var d_8659 = cljs.core.nth.call(null,vec__8618_8657,1,null);(o[n_8658] = d_8659);
{
var G__8660 = seq__8614_8653;
var G__8661 = chunk__8615_8654;
var G__8662 = count__8616_8655;
var G__8663 = (i__8617_8656 + 1);
seq__8614_8653 = G__8660;
chunk__8615_8654 = G__8661;
count__8616_8655 = G__8662;
i__8617_8656 = G__8663;
continue;
}
} else
{var temp__4092__auto___8664 = cljs.core.seq.call(null,seq__8614_8653);if(temp__4092__auto___8664)
{var seq__8614_8665__$1 = temp__4092__auto___8664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8614_8665__$1))
{var c__7112__auto___8666 = cljs.core.chunk_first.call(null,seq__8614_8665__$1);{
var G__8667 = cljs.core.chunk_rest.call(null,seq__8614_8665__$1);
var G__8668 = c__7112__auto___8666;
var G__8669 = cljs.core.count.call(null,c__7112__auto___8666);
var G__8670 = 0;
seq__8614_8653 = G__8667;
chunk__8615_8654 = G__8668;
count__8616_8655 = G__8669;
i__8617_8656 = G__8670;
continue;
}
} else
{var vec__8619_8671 = cljs.core.first.call(null,seq__8614_8665__$1);var n_8672 = cljs.core.nth.call(null,vec__8619_8671,0,null);var d_8673 = cljs.core.nth.call(null,vec__8619_8671,1,null);(o[n_8672] = d_8673);
{
var G__8674 = cljs.core.next.call(null,seq__8614_8665__$1);
var G__8675 = null;
var G__8676 = 0;
var G__8677 = 0;
seq__8614_8653 = G__8674;
chunk__8615_8654 = G__8675;
count__8616_8655 = G__8676;
i__8617_8656 = G__8677;
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
cljs.core._add_method.call(null,lt.plugins.birch.tree.make_node,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__8620,children){var vec__8621 = p__8620;var k = cljs.core.nth.call(null,vec__8621,0,null);var v = cljs.core.nth.call(null,vec__8621,1,null);var node = vec__8621;if((function (){var G__8622 = v;if(G__8622)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8622.lt$plugins$birch$tree$protocols$TreeNodeMake$;
}
})()))
{return true;
} else
{if((!G__8622.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeMake,G__8622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeMake,G__8622);
}
})())
{return lt.plugins.birch.tree.protocols.make_node.call(null,v,k,children);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,v,cljs.core.map.call(null,cljs.core.second,children))], null);
}
}));
lt.plugins.birch.tree.TreeNode = (function (){var obj8624 = {};return obj8624;
})();
lt.plugins.birch.tree.branches = (function branches(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$birch$tree$TreeNode$branches$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$birch$tree$TreeNode$branches$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.birch.tree.branches[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.birch.tree.branches["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TreeNode.branches",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.birch.tree.unwrap = (function unwrap(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$birch$tree$TreeNode$unwrap$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$birch$tree$TreeNode$unwrap$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.birch.tree.unwrap[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.birch.tree.unwrap["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TreeNode.unwrap",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.birch.tree.make = (function make(obj){var reify_zipper = (function reify_zipper(node){if(typeof lt.plugins.birch.tree.t8648 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.birch.tree.t8648 = (function (node,reify_zipper,obj,make,meta8649){
this.node = node;
this.reify_zipper = reify_zipper;
this.obj = obj;
this.make = make;
this.meta8649 = meta8649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.birch.tree.t8648.cljs$lang$type = true;
lt.plugins.birch.tree.t8648.cljs$lang$ctorStr = "lt.plugins.birch.tree/t8648";
lt.plugins.birch.tree.t8648.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"lt.plugins.birch.tree/t8648");
});
lt.plugins.birch.tree.t8648.prototype.lt$plugins$birch$tree$TreeNode$ = true;
lt.plugins.birch.tree.t8648.prototype.lt$plugins$birch$tree$TreeNode$branches$arity$1 = (function (_){var self__ = this;
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
lt.plugins.birch.tree.t8648.prototype.lt$plugins$birch$tree$TreeNode$unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return clojure.zip.node.call(null,self__.node);
});
lt.plugins.birch.tree.t8648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8650){var self__ = this;
var _8650__$1 = this;return self__.meta8649;
});
lt.plugins.birch.tree.t8648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8650,meta8649__$1){var self__ = this;
var _8650__$1 = this;return (new lt.plugins.birch.tree.t8648(self__.node,self__.reify_zipper,self__.obj,self__.make,meta8649__$1));
});
lt.plugins.birch.tree.__GT_t8648 = (function __GT_t8648(node__$1,reify_zipper__$1,obj__$1,make__$1,meta8649){return (new lt.plugins.birch.tree.t8648(node__$1,reify_zipper__$1,obj__$1,make__$1,meta8649));
});
}
return (new lt.plugins.birch.tree.t8648(node,reify_zipper,obj,make,null));
});
return reify_zipper.call(null,clojure.zip.zipper.call(null,(function (p__8651){var vec__8652 = p__8651;var _ = cljs.core.nth.call(null,vec__8652,0,null);var v = cljs.core.nth.call(null,vec__8652,1,null);return lt.plugins.birch.tree.branchable_QMARK_.call(null,v);
}),lt.plugins.birch.tree.children,lt.plugins.birch.tree.make_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.birch.tree","root","lt.plugins.birch.tree/root",1097592184),obj], null)));
});
lt.plugins.birch.tree.__GT_value = (function __GT_value(node){return cljs.core.second.call(null,lt.plugins.birch.tree.unwrap.call(null,node));
});
lt.plugins.birch.tree.__GT_key = (function __GT_key(node){return cljs.core.first.call(null,lt.plugins.birch.tree.unwrap.call(null,node));
});
lt.plugins.birch.tree.root_QMARK_ = (function root_QMARK_(node){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.plugins.birch.tree","root","lt.plugins.birch.tree/root",1097592184),lt.plugins.birch.tree.__GT_key.call(null,node));
});
lt.plugins.birch.tree.atom_QMARK_ = (function atom_QMARK_(node){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.plugins.birch.tree","atom","lt.plugins.birch.tree/atom",1097049031),lt.plugins.birch.tree.__GT_key.call(null,node));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.birch.ui')) {
goog.provide('lt.plugins.birch.ui');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.plugins.birch.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.plugins.birch.core');
goog.require('lt.objs.command');
goog.require('lt.plugins.birch.tree');
goog.require('lt.plugins.birch.tree');
lt.plugins.birch.ui.add_class = (function add_class(el,klass){if(cljs.core.truth_((function (){var and__6352__auto__ = el;if(cljs.core.truth_(and__6352__auto__))
{return klass;
} else
{return and__6352__auto__;
}
})()))
{lt.util.dom.add_class.call(null,el,klass);
} else
{}
return el;
});
lt.plugins.birch.ui.CssClass = (function (){var obj8679 = {};return obj8679;
})();
lt.plugins.birch.ui.css_class = (function css_class(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$birch$ui$CssClass$css_class$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$birch$ui$CssClass$css_class$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.birch.ui.css_class[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.birch.ui.css_class["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"CssClass.css-class",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.birch.ui._STAR_type_key__GT_class_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keyword","keyword",4494463323),"cm-atom",new cljs.core.Keyword(null,"number","number",4274507451),"cm-number",new cljs.core.Keyword(null,"string","string",4416885635),"cm-string",new cljs.core.Keyword(null,"symbol","symbol",4421347594),"cm-symbol"], null);
lt.plugins.birch.ui.type_class = (function type_class(obj){if((function (){var G__8681 = obj;if(G__8681)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8681.lt$plugins$birch$ui$CssClass$;
}
})()))
{return true;
} else
{if((!G__8681.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.ui.CssClass,G__8681);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.ui.CssClass,G__8681);
}
})())
{return lt.plugins.birch.ui.css_class.call(null,obj);
} else
{return cljs.core.get.call(null,lt.plugins.birch.ui._STAR_type_key__GT_class_STAR_,lt.plugins.birch.core.type_key.call(null,obj));
}
});
lt.plugins.birch.ui.key_ui = (function key_ui(this$,value){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.br-tree-node.key","span.br-tree-node.key",584414363),value], null));var seq__8688_8771 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click!","click!",3951157003),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouseover!","mouseover!",2036544442),e);
});})(e__7755__auto__))
], null)));var chunk__8689_8772 = null;var count__8690_8773 = 0;var i__8691_8774 = 0;while(true){
if((i__8691_8774 < count__8690_8773))
{var vec__8692_8775 = cljs.core._nth.call(null,chunk__8689_8772,i__8691_8774);var ev__7756__auto___8776 = cljs.core.nth.call(null,vec__8692_8775,0,null);var func__7757__auto___8777 = cljs.core.nth.call(null,vec__8692_8775,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8776,func__7757__auto___8777);
{
var G__8778 = seq__8688_8771;
var G__8779 = chunk__8689_8772;
var G__8780 = count__8690_8773;
var G__8781 = (i__8691_8774 + 1);
seq__8688_8771 = G__8778;
chunk__8689_8772 = G__8779;
count__8690_8773 = G__8780;
i__8691_8774 = G__8781;
continue;
}
} else
{var temp__4092__auto___8782 = cljs.core.seq.call(null,seq__8688_8771);if(temp__4092__auto___8782)
{var seq__8688_8783__$1 = temp__4092__auto___8782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8688_8783__$1))
{var c__7112__auto___8784 = cljs.core.chunk_first.call(null,seq__8688_8783__$1);{
var G__8785 = cljs.core.chunk_rest.call(null,seq__8688_8783__$1);
var G__8786 = c__7112__auto___8784;
var G__8787 = cljs.core.count.call(null,c__7112__auto___8784);
var G__8788 = 0;
seq__8688_8771 = G__8785;
chunk__8689_8772 = G__8786;
count__8690_8773 = G__8787;
i__8691_8774 = G__8788;
continue;
}
} else
{var vec__8693_8789 = cljs.core.first.call(null,seq__8688_8783__$1);var ev__7756__auto___8790 = cljs.core.nth.call(null,vec__8693_8789,0,null);var func__7757__auto___8791 = cljs.core.nth.call(null,vec__8693_8789,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8790,func__7757__auto___8791);
{
var G__8792 = cljs.core.next.call(null,seq__8688_8783__$1);
var G__8793 = null;
var G__8794 = 0;
var G__8795 = 0;
seq__8688_8771 = G__8792;
chunk__8689_8772 = G__8793;
count__8690_8773 = G__8794;
i__8691_8774 = G__8795;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node-key","lt.plugins.birch.ui/tree-node-key",4620890564),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-node-key","tree-node-key",788800725),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,parent,node){var k = lt.plugins.birch.tree.__GT_key.call(null,node);var display_str = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),lt.plugins.birch.core.type_key.call(null,lt.plugins.birch.tree.__GT_value.call(null,parent))))?null:((typeof k === 'number')?[cljs.core.str("["),cljs.core.str(k),cljs.core.str("]")].join(''):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(k)].join(''):null)));if(cljs.core.truth_(display_str))
{return lt.plugins.birch.ui.add_class.call(null,lt.plugins.birch.ui.key_ui.call(null,this$,display_str),lt.plugins.birch.ui.type_class.call(null,k));
} else
{return null;
}
}));
lt.plugins.birch.ui.simple_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),null,new cljs.core.Keyword(null,"nil","nil",1014013315),null,new cljs.core.Keyword(null,"string","string",4416885635),null,new cljs.core.Keyword(null,"keyword","keyword",4494463323),null,new cljs.core.Keyword(null,"number","number",4274507451),null], null), null);
lt.plugins.birch.ui.simple_display = (function simple_display(v,cnt){var s = cljs.core.pr_str.call(null,v);var f = cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,cnt,s));var r = cljs.core.drop.call(null,cnt,s);if(cljs.core.seq.call(null,r))
{return [cljs.core.str(f),cljs.core.str(" ..")].join('');
} else
{return f;
}
});
lt.plugins.birch.ui.value_display = (function (){var method_table__7222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7224__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7226__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("value-display",lt.plugins.birch.core.type_key,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.birch.ui.value_display,new cljs.core.Keyword(null,"default","default",2558708147),(function (v){if(lt.plugins.birch.core.atom_QMARK_.call(null,v))
{return [cljs.core.str("#<"),cljs.core.str(lt.plugins.birch.core.type_name.call(null,v)),cljs.core.str(": "),cljs.core.str(lt.plugins.birch.core.type_name.call(null,cljs.core.deref.call(null,v))),cljs.core.str(">")].join('');
} else
{if(cljs.core.truth_(lt.plugins.birch.tree.branchable_QMARK_.call(null,v)))
{return lt.plugins.birch.core.type_name.call(null,v);
} else
{if(cljs.core.truth_(lt.plugins.birch.ui.simple_types.call(null,lt.plugins.birch.core.type_key.call(null,v))))
{return cljs.core.pr_str.call(null,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.birch.ui.simple_display.call(null,v,80);
} else
{return null;
}
}
}
}
}));
lt.plugins.birch.ui.value_ui = (function value_ui(this$,value){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.br-tree-node.value","span.br-tree-node.value",601021741),value], null));var seq__8700_8796 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click!","click!",3951157003),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouseover!","mouseover!",2036544442),e);
});})(e__7755__auto__))
], null)));var chunk__8701_8797 = null;var count__8702_8798 = 0;var i__8703_8799 = 0;while(true){
if((i__8703_8799 < count__8702_8798))
{var vec__8704_8800 = cljs.core._nth.call(null,chunk__8701_8797,i__8703_8799);var ev__7756__auto___8801 = cljs.core.nth.call(null,vec__8704_8800,0,null);var func__7757__auto___8802 = cljs.core.nth.call(null,vec__8704_8800,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8801,func__7757__auto___8802);
{
var G__8803 = seq__8700_8796;
var G__8804 = chunk__8701_8797;
var G__8805 = count__8702_8798;
var G__8806 = (i__8703_8799 + 1);
seq__8700_8796 = G__8803;
chunk__8701_8797 = G__8804;
count__8702_8798 = G__8805;
i__8703_8799 = G__8806;
continue;
}
} else
{var temp__4092__auto___8807 = cljs.core.seq.call(null,seq__8700_8796);if(temp__4092__auto___8807)
{var seq__8700_8808__$1 = temp__4092__auto___8807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8700_8808__$1))
{var c__7112__auto___8809 = cljs.core.chunk_first.call(null,seq__8700_8808__$1);{
var G__8810 = cljs.core.chunk_rest.call(null,seq__8700_8808__$1);
var G__8811 = c__7112__auto___8809;
var G__8812 = cljs.core.count.call(null,c__7112__auto___8809);
var G__8813 = 0;
seq__8700_8796 = G__8810;
chunk__8701_8797 = G__8811;
count__8702_8798 = G__8812;
i__8703_8799 = G__8813;
continue;
}
} else
{var vec__8705_8814 = cljs.core.first.call(null,seq__8700_8808__$1);var ev__7756__auto___8815 = cljs.core.nth.call(null,vec__8705_8814,0,null);var func__7757__auto___8816 = cljs.core.nth.call(null,vec__8705_8814,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8815,func__7757__auto___8816);
{
var G__8817 = cljs.core.next.call(null,seq__8700_8808__$1);
var G__8818 = null;
var G__8819 = 0;
var G__8820 = 0;
seq__8700_8796 = G__8817;
chunk__8701_8797 = G__8818;
count__8702_8798 = G__8819;
i__8703_8799 = G__8820;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node-value","lt.plugins.birch.ui/tree-node-value",1130329042),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-node-value","tree-node-value",3742787303),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,_,node){var v = lt.plugins.birch.tree.__GT_value.call(null,node);return lt.plugins.birch.ui.add_class.call(null,lt.plugins.birch.ui.value_ui.call(null,this$,lt.plugins.birch.ui.value_display.call(null,v)),(function (){var or__6364__auto__ = lt.plugins.birch.ui.type_class.call(null,v);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "cm-builtin";
}
})());
}));
lt.plugins.birch.ui.__BEH__tree_node__DOT__on_destroy = (function __BEH__tree_node__DOT__on_destroy(this$){var temp__4092__auto___8821 = new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8821))
{var children_8822 = temp__4092__auto___8821;var seq__8710_8823 = cljs.core.seq.call(null,children_8822);var chunk__8711_8824 = null;var count__8712_8825 = 0;var i__8713_8826 = 0;while(true){
if((i__8713_8826 < count__8712_8825))
{var c_8827 = cljs.core._nth.call(null,chunk__8711_8824,i__8713_8826);lt.object.destroy_BANG_.call(null,c_8827);
{
var G__8828 = seq__8710_8823;
var G__8829 = chunk__8711_8824;
var G__8830 = count__8712_8825;
var G__8831 = (i__8713_8826 + 1);
seq__8710_8823 = G__8828;
chunk__8711_8824 = G__8829;
count__8712_8825 = G__8830;
i__8713_8826 = G__8831;
continue;
}
} else
{var temp__4092__auto___8832__$1 = cljs.core.seq.call(null,seq__8710_8823);if(temp__4092__auto___8832__$1)
{var seq__8710_8833__$1 = temp__4092__auto___8832__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8710_8833__$1))
{var c__7112__auto___8834 = cljs.core.chunk_first.call(null,seq__8710_8833__$1);{
var G__8835 = cljs.core.chunk_rest.call(null,seq__8710_8833__$1);
var G__8836 = c__7112__auto___8834;
var G__8837 = cljs.core.count.call(null,c__7112__auto___8834);
var G__8838 = 0;
seq__8710_8823 = G__8835;
chunk__8711_8824 = G__8836;
count__8712_8825 = G__8837;
i__8713_8826 = G__8838;
continue;
}
} else
{var c_8839 = cljs.core.first.call(null,seq__8710_8833__$1);lt.object.destroy_BANG_.call(null,c_8839);
{
var G__8840 = cljs.core.next.call(null,seq__8710_8833__$1);
var G__8841 = null;
var G__8842 = 0;
var G__8843 = 0;
seq__8710_8823 = G__8840;
chunk__8711_8824 = G__8841;
count__8712_8825 = G__8842;
i__8713_8826 = G__8843;
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
var temp__4092__auto___8844 = new cljs.core.Keyword("lt.plugins.birch.ui","key","lt.plugins.birch.ui/key",3766042312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8844))
{var kobj_8845 = temp__4092__auto___8844;lt.object.destroy_BANG_.call(null,kobj_8845);
} else
{}
return lt.object.destroy_BANG_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","value","lt.plugins.birch.ui/value",3882111446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.on-destroy","lt.plugins.birch.ui/tree-node.on-destroy",3029972526),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__on_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.birch.ui.children_ui = (function children_ui(children){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.children","ul.children",1596370664),(function (){var iter__7081__auto__ = (function iter__8724(s__8725){return (new cljs.core.LazySeq(null,(function (){var s__8725__$1 = s__8725;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8725__$1);if(temp__4092__auto__)
{var s__8725__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8725__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8725__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8727 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8726 = 0;while(true){
if((i__8726 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__8726);cljs.core.chunk_append.call(null,b__8727,lt.object.__GT_content.call(null,c));
{
var G__8846 = (i__8726 + 1);
i__8726 = G__8846;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8727),iter__8724.call(null,cljs.core.chunk_rest.call(null,s__8725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8727),null);
}
} else
{var c = cljs.core.first.call(null,s__8725__$2);return cljs.core.cons.call(null,lt.object.__GT_content.call(null,c),iter__8724.call(null,cljs.core.rest.call(null,s__8725__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,children);
})()], null));var seq__8728_8847 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8729_8848 = null;var count__8730_8849 = 0;var i__8731_8850 = 0;while(true){
if((i__8731_8850 < count__8730_8849))
{var vec__8732_8851 = cljs.core._nth.call(null,chunk__8729_8848,i__8731_8850);var ev__7756__auto___8852 = cljs.core.nth.call(null,vec__8732_8851,0,null);var func__7757__auto___8853 = cljs.core.nth.call(null,vec__8732_8851,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8852,func__7757__auto___8853);
{
var G__8854 = seq__8728_8847;
var G__8855 = chunk__8729_8848;
var G__8856 = count__8730_8849;
var G__8857 = (i__8731_8850 + 1);
seq__8728_8847 = G__8854;
chunk__8729_8848 = G__8855;
count__8730_8849 = G__8856;
i__8731_8850 = G__8857;
continue;
}
} else
{var temp__4092__auto___8858 = cljs.core.seq.call(null,seq__8728_8847);if(temp__4092__auto___8858)
{var seq__8728_8859__$1 = temp__4092__auto___8858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8728_8859__$1))
{var c__7112__auto___8860 = cljs.core.chunk_first.call(null,seq__8728_8859__$1);{
var G__8861 = cljs.core.chunk_rest.call(null,seq__8728_8859__$1);
var G__8862 = c__7112__auto___8860;
var G__8863 = cljs.core.count.call(null,c__7112__auto___8860);
var G__8864 = 0;
seq__8728_8847 = G__8861;
chunk__8729_8848 = G__8862;
count__8730_8849 = G__8863;
i__8731_8850 = G__8864;
continue;
}
} else
{var vec__8733_8865 = cljs.core.first.call(null,seq__8728_8859__$1);var ev__7756__auto___8866 = cljs.core.nth.call(null,vec__8733_8865,0,null);var func__7757__auto___8867 = cljs.core.nth.call(null,vec__8733_8865,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8866,func__7757__auto___8867);
{
var G__8868 = cljs.core.next.call(null,seq__8728_8859__$1);
var G__8869 = null;
var G__8870 = 0;
var G__8871 = 0;
seq__8728_8847 = G__8868;
chunk__8729_8848 = G__8869;
count__8730_8849 = G__8870;
i__8731_8850 = G__8871;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
/**
* @param {...*} var_args
*/
lt.plugins.birch.ui.__BEH__tree_node__DOT__open = (function() { 
var __BEH__tree_node__DOT__open__delegate = function (this$,p__8735){var vec__8741 = p__8735;var depth = cljs.core.nth.call(null,vec__8741,0,null);var node = new cljs.core.Keyword(null,"node","node",1017291124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var children = cljs.core.map.call(null,((function (node,vec__8741,depth){
return (function (p1__8734_SHARP_){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node","lt.plugins.birch.ui/tree-node",3755733174),node,p1__8734_SHARP_);
});})(node,vec__8741,depth))
,lt.plugins.birch.tree.branches.call(null,node));if((1 < (function (){var or__6364__auto__ = depth;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 0;
}
})()))
{var seq__8742_8872 = cljs.core.seq.call(null,children);var chunk__8743_8873 = null;var count__8744_8874 = 0;var i__8745_8875 = 0;while(true){
if((i__8745_8875 < count__8744_8874))
{var c_8876 = cljs.core._nth.call(null,chunk__8743_8873,i__8745_8875);lt.object.raise.call(null,c_8876,new cljs.core.Keyword(null,"open","open",1017321916),(depth - 1));
{
var G__8877 = seq__8742_8872;
var G__8878 = chunk__8743_8873;
var G__8879 = count__8744_8874;
var G__8880 = (i__8745_8875 + 1);
seq__8742_8872 = G__8877;
chunk__8743_8873 = G__8878;
count__8744_8874 = G__8879;
i__8745_8875 = G__8880;
continue;
}
} else
{var temp__4092__auto___8881 = cljs.core.seq.call(null,seq__8742_8872);if(temp__4092__auto___8881)
{var seq__8742_8882__$1 = temp__4092__auto___8881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8742_8882__$1))
{var c__7112__auto___8883 = cljs.core.chunk_first.call(null,seq__8742_8882__$1);{
var G__8884 = cljs.core.chunk_rest.call(null,seq__8742_8882__$1);
var G__8885 = c__7112__auto___8883;
var G__8886 = cljs.core.count.call(null,c__7112__auto___8883);
var G__8887 = 0;
seq__8742_8872 = G__8884;
chunk__8743_8873 = G__8885;
count__8744_8874 = G__8886;
i__8745_8875 = G__8887;
continue;
}
} else
{var c_8888 = cljs.core.first.call(null,seq__8742_8882__$1);lt.object.raise.call(null,c_8888,new cljs.core.Keyword(null,"open","open",1017321916),(depth - 1));
{
var G__8889 = cljs.core.next.call(null,seq__8742_8882__$1);
var G__8890 = null;
var G__8891 = 0;
var G__8892 = 0;
seq__8742_8872 = G__8889;
chunk__8743_8873 = G__8890;
count__8744_8874 = G__8891;
i__8745_8875 = G__8892;
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
lt.util.dom.append.call(null,lt.object.__GT_content.call(null,this$),lt.plugins.birch.ui.children_ui.call(null,children));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",2673430897),children,new cljs.core.Keyword(null,"open","open",1017321916),true], null));
};
var __BEH__tree_node__DOT__open = function (this$,var_args){
var p__8735 = null;if (arguments.length > 1) {
  p__8735 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__tree_node__DOT__open__delegate.call(this,this$,p__8735);};
__BEH__tree_node__DOT__open.cljs$lang$maxFixedArity = 1;
__BEH__tree_node__DOT__open.cljs$lang$applyTo = (function (arglist__8893){
var this$ = cljs.core.first(arglist__8893);
var p__8735 = cljs.core.rest(arglist__8893);
return __BEH__tree_node__DOT__open__delegate(this$,p__8735);
});
__BEH__tree_node__DOT__open.cljs$core$IFn$_invoke$arity$variadic = __BEH__tree_node__DOT__open__delegate;
return __BEH__tree_node__DOT__open;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.open","lt.plugins.birch.ui/tree-node.open",2161626160),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__open,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.plugins.birch.ui.__BEH__tree_node__DOT__close = (function __BEH__tree_node__DOT__close(this$){lt.util.dom.remove.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.children","ul.children",1596370664),lt.object.__GT_content.call(null,this$)));
var seq__8750_8894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8751_8895 = null;var count__8752_8896 = 0;var i__8753_8897 = 0;while(true){
if((i__8753_8897 < count__8752_8896))
{var c_8898 = cljs.core._nth.call(null,chunk__8751_8895,i__8753_8897);lt.object.destroy_BANG_.call(null,c_8898);
{
var G__8899 = seq__8750_8894;
var G__8900 = chunk__8751_8895;
var G__8901 = count__8752_8896;
var G__8902 = (i__8753_8897 + 1);
seq__8750_8894 = G__8899;
chunk__8751_8895 = G__8900;
count__8752_8896 = G__8901;
i__8753_8897 = G__8902;
continue;
}
} else
{var temp__4092__auto___8903 = cljs.core.seq.call(null,seq__8750_8894);if(temp__4092__auto___8903)
{var seq__8750_8904__$1 = temp__4092__auto___8903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8750_8904__$1))
{var c__7112__auto___8905 = cljs.core.chunk_first.call(null,seq__8750_8904__$1);{
var G__8906 = cljs.core.chunk_rest.call(null,seq__8750_8904__$1);
var G__8907 = c__7112__auto___8905;
var G__8908 = cljs.core.count.call(null,c__7112__auto___8905);
var G__8909 = 0;
seq__8750_8894 = G__8906;
chunk__8751_8895 = G__8907;
count__8752_8896 = G__8908;
i__8753_8897 = G__8909;
continue;
}
} else
{var c_8910 = cljs.core.first.call(null,seq__8750_8904__$1);lt.object.destroy_BANG_.call(null,c_8910);
{
var G__8911 = cljs.core.next.call(null,seq__8750_8904__$1);
var G__8912 = null;
var G__8913 = 0;
var G__8914 = 0;
seq__8750_8894 = G__8911;
chunk__8751_8895 = G__8912;
count__8752_8896 = G__8913;
i__8753_8897 = G__8914;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.close","lt.plugins.birch.ui/tree-node.close",1143814780),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.birch.ui.__BEH__tree_node__DOT__toggle = (function() { 
var __BEH__tree_node__DOT__toggle__delegate = function (this$,p__8754){var vec__8756 = p__8754;var depth = cljs.core.nth.call(null,vec__8756,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"open","open",1017321916),(function (){var or__6364__auto__ = depth;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 0;
}
})());
}
};
var __BEH__tree_node__DOT__toggle = function (this$,var_args){
var p__8754 = null;if (arguments.length > 1) {
  p__8754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__tree_node__DOT__toggle__delegate.call(this,this$,p__8754);};
__BEH__tree_node__DOT__toggle.cljs$lang$maxFixedArity = 1;
__BEH__tree_node__DOT__toggle.cljs$lang$applyTo = (function (arglist__8915){
var this$ = cljs.core.first(arglist__8915);
var p__8754 = cljs.core.rest(arglist__8915);
return __BEH__tree_node__DOT__toggle__delegate(this$,p__8754);
});
__BEH__tree_node__DOT__toggle.cljs$core$IFn$_invoke$arity$variadic = __BEH__tree_node__DOT__toggle__delegate;
return __BEH__tree_node__DOT__toggle;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.toggle","lt.plugins.birch.ui/tree-node.toggle",4378728054),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__toggle,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle","toggle",4440567494),null], null), null));
lt.plugins.birch.ui.create_display_node_BANG_ = (function create_display_node_BANG_(this$,k,parent,node){var obj = lt.object.create.call(null,k,parent,node);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent-id","parent-id",3084183696),lt.object.__GT_id.call(null,this$)], null));
return obj;
});
lt.plugins.birch.ui.display_key_QMARK_ = (function display_key_QMARK_(parent,node){var vec__8758 = lt.plugins.birch.tree.unwrap.call(null,parent);var pk = cljs.core.nth.call(null,vec__8758,0,null);var pv = cljs.core.nth.call(null,vec__8758,1,null);return !((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),lt.plugins.birch.core.type_key.call(null,pv))) || (lt.plugins.birch.tree.root_QMARK_.call(null,node)) || (lt.plugins.birch.tree.atom_QMARK_.call(null,node)));
});
lt.plugins.birch.ui.display_ui = (function display_ui(this$,parent,node){var e__7755__auto__ = crate.core.html.call(null,((lt.plugins.birch.ui.display_key_QMARK_.call(null,(function (){var or__6364__auto__ = parent;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return node;
}
})(),node))?(function (){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.birch.ui","key","lt.plugins.birch.ui/key",3766042312),lt.plugins.birch.ui.create_display_node_BANG_.call(null,this$,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node-key","lt.plugins.birch.ui/tree-node-key",4620890564),parent,node)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.display","span.display",681650576),lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","key","lt.plugins.birch.ui/key",3766042312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))," ",lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","value","lt.plugins.birch.ui/value",3882111446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.display","span.display",681650576),lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","value","lt.plugins.birch.ui/value",3882111446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null)));var seq__8765_8916 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"toggle","toggle",4440567494));
});})(e__7755__auto__))
], null)));var chunk__8766_8917 = null;var count__8767_8918 = 0;var i__8768_8919 = 0;while(true){
if((i__8768_8919 < count__8767_8918))
{var vec__8769_8920 = cljs.core._nth.call(null,chunk__8766_8917,i__8768_8919);var ev__7756__auto___8921 = cljs.core.nth.call(null,vec__8769_8920,0,null);var func__7757__auto___8922 = cljs.core.nth.call(null,vec__8769_8920,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8921,func__7757__auto___8922);
{
var G__8923 = seq__8765_8916;
var G__8924 = chunk__8766_8917;
var G__8925 = count__8767_8918;
var G__8926 = (i__8768_8919 + 1);
seq__8765_8916 = G__8923;
chunk__8766_8917 = G__8924;
count__8767_8918 = G__8925;
i__8768_8919 = G__8926;
continue;
}
} else
{var temp__4092__auto___8927 = cljs.core.seq.call(null,seq__8765_8916);if(temp__4092__auto___8927)
{var seq__8765_8928__$1 = temp__4092__auto___8927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8765_8928__$1))
{var c__7112__auto___8929 = cljs.core.chunk_first.call(null,seq__8765_8928__$1);{
var G__8930 = cljs.core.chunk_rest.call(null,seq__8765_8928__$1);
var G__8931 = c__7112__auto___8929;
var G__8932 = cljs.core.count.call(null,c__7112__auto___8929);
var G__8933 = 0;
seq__8765_8916 = G__8930;
chunk__8766_8917 = G__8931;
count__8767_8918 = G__8932;
i__8768_8919 = G__8933;
continue;
}
} else
{var vec__8770_8934 = cljs.core.first.call(null,seq__8765_8928__$1);var ev__7756__auto___8935 = cljs.core.nth.call(null,vec__8770_8934,0,null);var func__7757__auto___8936 = cljs.core.nth.call(null,vec__8770_8934,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8935,func__7757__auto___8936);
{
var G__8937 = cljs.core.next.call(null,seq__8765_8928__$1);
var G__8938 = null;
var G__8939 = 0;
var G__8940 = 0;
seq__8765_8916 = G__8937;
chunk__8766_8917 = G__8938;
count__8767_8918 = G__8939;
i__8768_8919 = G__8940;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node","lt.plugins.birch.ui/tree-node",3755733174),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-node","tree-node",999547459),null], null), null),new cljs.core.Keyword(null,"node","node",1017291124),null,new cljs.core.Keyword(null,"open","open",1017321916),false,new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,parent,node){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.plugins.birch.ui","value","lt.plugins.birch.ui/value",3882111446),lt.plugins.birch.ui.create_display_node_BANG_.call(null,this$,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node-value","lt.plugins.birch.ui/tree-node-value",1130329042),parent,node),new cljs.core.Keyword(null,"node","node",1017291124),node], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.br-tree-node.cm-s-default","li.br-tree-node.cm-s-default",1100941727),lt.plugins.birch.ui.display_ui.call(null,this$,parent,node)], null);
}));
lt.plugins.birch.ui.make_tree_node = (function make_tree_node(parent,node){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node","lt.plugins.birch.ui/tree-node",3755733174),parent,node);
});
lt.plugins.birch.ui.__BEH__tree_node__DOT__make = (function __BEH__tree_node__DOT__make(this$,other){return lt.plugins.birch.ui.make_tree_node;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.make","lt.plugins.birch.ui/tree-node.make",2163665996),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__make,new cljs.core.Keyword(null,"desc","desc",1016984067),"Provides a hook to switch out the of the tree-node\n          creation function.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"make+","make+",1117563759),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.birch')) {
goog.provide('lt.plugins.birch');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
}
if(!lt.util.load.provided_QMARK_('lt.plugins.birch.reader')) {
goog.provide('lt.plugins.birch.reader');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
lt.plugins.birch.reader.atom_re = /^#<Atom: (.+)>$/;
lt.plugins.birch.reader.other_re = /^#<.+>$/;
lt.plugins.birch.reader.atom_str_QMARK_ = (function atom_str_QMARK_(s){return (typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_find.call(null,lt.plugins.birch.reader.atom_re,s)));
});
lt.plugins.birch.reader.other_str_QMARK_ = (function other_str_QMARK_(s){return (typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_find.call(null,lt.plugins.birch.reader.other_re,s)));
});
lt.plugins.birch.reader.atom_str_value = (function atom_str_value(s){return cljs.core.second.call(null,cljs.core.re_find.call(null,lt.plugins.birch.reader.atom_re,s));
});
lt.plugins.birch.reader.read_string_cljs_atom_BANG_ = (function read_string_cljs_atom_BANG_(s){return cljs.core.atom.call(null,cljs.reader.read_string.call(null,lt.plugins.birch.reader.atom_str_value.call(null,s)));
});
lt.plugins.birch.reader._STAR_parsers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"can-parse?","can-parse?",2527637499),lt.plugins.birch.reader.atom_str_QMARK_,new cljs.core.Keyword(null,"fun","fun",1014006001),lt.plugins.birch.reader.read_string_cljs_atom_BANG_], null)], null);
lt.plugins.birch.reader.find_unreadable_forms = (function find_unreadable_forms(s){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"capture","capture",1566489272),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"final","final",1111340264),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"#?","#?",1013905390),false,new cljs.core.Keyword(null,"level","level",1116770038),0], null);var c = cljs.core.first.call(null,cljs.core.seq.call(null,s));var r = cljs.core.rest.call(null,cljs.core.seq.call(null,s));while(true){
var prevHash_QMARK_ = new cljs.core.Keyword(null,"#?","#?",1013905390).cljs$core$IFn$_invoke$arity$1(state);var c_is_hash = cljs.core._EQ_.call(null,"#",c);var c_is_start = cljs.core._EQ_.call(null,"<",c);var c_is_end = cljs.core._EQ_.call(null,">",c);var next_c = cljs.core.first.call(null,r);var next_r = cljs.core.rest.call(null,r);if((c == null))
{return new cljs.core.Keyword(null,"final","final",1111340264).cljs$core$IFn$_invoke$arity$1(state);
} else
{if((c_is_hash) && (cljs.core.not.call(null,prevHash_QMARK_)))
{{
var G__8572 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),true);
var G__8573 = next_c;
var G__8574 = next_r;
state = G__8572;
c = G__8573;
r = G__8574;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__6352__auto__ = !(c_is_start);if(and__6352__auto__)
{return prevHash_QMARK_;
} else
{return and__6352__auto__;
}
})()))
{{
var G__8575 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),false);
var G__8576 = next_c;
var G__8577 = next_r;
state = G__8575;
c = G__8576;
r = G__8577;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__6352__auto__ = c_is_start;if(and__6352__auto__)
{return prevHash_QMARK_;
} else
{return and__6352__auto__;
}
})()))
{{
var G__8578 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,"#<"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.inc);
var G__8579 = next_c;
var G__8580 = next_r;
state = G__8578;
c = G__8579;
r = G__8580;
continue;
}
} else
{if(((0 < new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (!(c_is_end)))
{{
var G__8581 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,c);
var G__8582 = next_c;
var G__8583 = next_r;
state = G__8581;
c = G__8582;
r = G__8583;
continue;
}
} else
{if((cljs.core._EQ_.call(null,1,new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (c_is_end))
{{
var G__8584 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"final","final",1111340264)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,new cljs.core.Keyword(null,"capture","capture",1566489272).cljs$core$IFn$_invoke$arity$1(state),c))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.dec),new cljs.core.Keyword(null,"capture","capture",1566489272),cljs.core.PersistentVector.EMPTY);
var G__8585 = next_c;
var G__8586 = next_r;
state = G__8584;
c = G__8585;
r = G__8586;
continue;
}
} else
{if(((1 < new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (c_is_end))
{{
var G__8587 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.dec);
var G__8588 = next_c;
var G__8589 = next_r;
state = G__8587;
c = G__8588;
r = G__8589;
continue;
}
} else
{if((cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not.call(null,prevHash_QMARK_)))
{{
var G__8590 = state;
var G__8591 = next_c;
var G__8592 = next_r;
state = G__8590;
c = G__8591;
r = G__8592;
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
lt.plugins.birch.reader.santize_pr_str = (function santize_pr_str(s){var bad_strs = lt.plugins.birch.reader.find_unreadable_forms.call(null,s);var sanitize = ((function (bad_strs){
return (function (a,n){return clojure.string.replace.call(null,a,n,cljs.core.quote_string.call(null,n));
});})(bad_strs))
;return cljs.core.reduce.call(null,sanitize,s,bad_strs);
});
lt.plugins.birch.reader.read_string_BANG_ = (function read_string_BANG_(s){var temp__4090__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__8559_SHARP_){return p1__8559_SHARP_.call(null,s);
}),new cljs.core.Keyword(null,"can-parse?","can-parse?",2527637499)),lt.plugins.birch.reader._STAR_parsers_STAR_));if(cljs.core.truth_(temp__4090__auto__))
{var map__8561 = temp__4090__auto__;var map__8561__$1 = ((cljs.core.seq_QMARK_.call(null,map__8561))?cljs.core.apply.call(null,cljs.core.hash_map,map__8561):map__8561);var fun = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"fun","fun",1014006001));return fun.call(null,s);
} else
{return cljs.reader.read_string.call(null,lt.plugins.birch.reader.santize_pr_str.call(null,s));
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.birch.aleph')) {
goog.provide('lt.plugins.birch.aleph');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.birch.ui');
goog.require('lt.plugins.birch.ui');
goog.require('lt.objs.command');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
goog.require('lt.plugins.birch.tree');
goog.require('lt.plugins.birch.tree');
lt.plugins.birch.aleph.__BEH__aleph_object_viewer__DOT__set_BANG_ = (function __BEH__aleph_object_viewer__DOT__set_BANG_(this$,obj){var temp__4092__auto___8065 = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8065))
{var old_8066 = temp__4092__auto___8065;lt.object.destroy_BANG_.call(null,old_8066);
} else
{}
var make_tree_node_8067 = lt.object.raise_reduce.call(null,this$,new cljs.core.Keyword(null,"make+","make+",1117563759),lt.plugins.birch.ui.make_tree_node);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",4285503153),make_tree_node_8067.call(null,null,lt.plugins.birch.tree.make.call(null,obj))], null));
return lt.object.raise.call(null,new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"toggle","toggle",4440567494),2);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.aleph","aleph-object-viewer.set!","lt.plugins.birch.aleph/aleph-object-viewer.set!",1873464290),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.aleph.__BEH__aleph_object_viewer__DOT__set_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set!","set!",1017430897),null], null), null));
lt.plugins.birch.aleph.__BEH__aleph_object_viewer__DOT__close = (function __BEH__aleph_object_viewer__DOT__close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.aleph","aleph-object-viewer.close","lt.plugins.birch.aleph/aleph-object-viewer.close",1333228585),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.aleph.__BEH__aleph_object_viewer__DOT__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.aleph","aleph-object-viewer","lt.plugins.birch.aleph/aleph-object-viewer",3434064479),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph-object-viewer","aleph-object-viewer",3091614295),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"LT Object Viewer",new cljs.core.Keyword(null,"object","object",4285503153),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.br-tree-node.root","div.br-tree-node.root",3355399249),crate.binding.bound.call(null,this$,(function (_){var temp__4090__auto__ = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4090__auto__))
{var data = temp__4090__auto__;return lt.object.__GT_content.call(null,data);
} else
{return "No Light Table object selected";
}
}))], null);
}));
lt.plugins.birch.aleph.viewer = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.birch.aleph","aleph-object-viewer","lt.plugins.birch.aleph/aleph-object-viewer",3434064479));
lt.plugins.birch.aleph.ltobj_QMARK_ = (function ltobj_QMARK_(obj){var and__6352__auto__ = obj;if(cljs.core.truth_(and__6352__auto__))
{var and__6352__auto____$1 = cljs.core.deref.call(null,obj);if(cljs.core.truth_(and__6352__auto____$1))
{var and__6352__auto____$2 = cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,obj));if(and__6352__auto____$2)
{return new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));
} else
{return and__6352__auto____$2;
}
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
}
});
lt.plugins.birch.aleph.__BEH__aleph__DOT__on_select = (function __BEH__aleph__DOT__on_select(_,obj){if(cljs.core.truth_(lt.plugins.birch.aleph.ltobj_QMARK_.call(null,cljs.core.atom.call(null,obj))))
{lt.object.raise.call(null,lt.plugins.birch.aleph.viewer,new cljs.core.Keyword(null,"set!","set!",1017430897),lt.object.by_id.call(null,new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(obj)));
return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.birch.aleph.viewer);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.aleph","aleph.on-select","lt.plugins.birch.aleph/aleph.on-select",4343122696),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.aleph.__BEH__aleph__DOT__on_select,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
}

//# sourceMappingURL=birch_compiled.js.map