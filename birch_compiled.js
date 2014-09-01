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
lt.plugins.birch.core.type_info.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6952__auto__,k8531,else__6953__auto__){var self__ = this;
var this__6952__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k8531,new cljs.core.Keyword(null,"classification","classification",1396254552)))
{return self__.classification;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8531,new cljs.core.Keyword(null,"fn","fn",1013907514)))
{return self__.fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8531,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k8531,else__6953__auto__);
} else
{return null;
}
}
}
}
});
lt.plugins.birch.core.type_info.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6957__auto__,k__6958__auto__,G__8530){var self__ = this;
var this__6957__auto____$1 = this;var pred__8533 = cljs.core.keyword_identical_QMARK_;var expr__8534 = k__6958__auto__;if(cljs.core.truth_(pred__8533.call(null,new cljs.core.Keyword(null,"classification","classification",1396254552),expr__8534)))
{return (new lt.plugins.birch.core.type_info(G__8530,self__.fn,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8533.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514),expr__8534)))
{return (new lt.plugins.birch.core.type_info(self__.classification,G__8530,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8533.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__8534)))
{return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,G__8530,self__.__meta,self__.__extmap,null));
} else
{return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6958__auto__,G__8530),null));
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
lt.plugins.birch.core.type_info.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6949__auto__,G__8530){var self__ = this;
var this__6949__auto____$1 = this;return (new lt.plugins.birch.core.type_info(self__.classification,self__.fn,self__.name,G__8530,self__.__extmap,self__.__hash));
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
lt.plugins.birch.core.map__GT_type_info = (function map__GT_type_info(G__8532){return (new lt.plugins.birch.core.type_info(new cljs.core.Keyword(null,"classification","classification",1396254552).cljs$core$IFn$_invoke$arity$1(G__8532),new cljs.core.Keyword(null,"fn","fn",1013907514).cljs$core$IFn$_invoke$arity$1(G__8532),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__8532),null,cljs.core.dissoc.call(null,G__8532,new cljs.core.Keyword(null,"classification","classification",1396254552),new cljs.core.Keyword(null,"fn","fn",1013907514),new cljs.core.Keyword(null,"name","name",1017277949))));
});
/**
* Known mappings of determinable types and their names.
*/
lt.plugins.birch.core._STAR_known_type_info_STAR_ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.birch.core.zipper_QMARK_,"Zipper"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.birch.core.atom_QMARK_,"Atom"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),lt.plugins.birch.core.dom_QMARK_,"DOMNode"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.map_QMARK_,"Map"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.vector_QMARK_,"Vector"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.list_QMARK_,"List"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.set_QMARK_,"Set"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.string_QMARK_,"String"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.keyword_QMARK_,"Keyword"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.nil_QMARK_,"nil"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.number_QMARK_,"Number"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.fn_QMARK_,"Function"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"concrete","concrete",4726228471),cljs.core.array_QMARK_,"Array"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),cljs.core.symbol_QMARK_,"Symbol"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"abstract","abstract",2746803092),cljs.core.seq_QMARK_,"Seq"),lt.plugins.birch.core.__GT_type_info.call(null,new cljs.core.Keyword(null,"primitive","primitive",3474063449),lt.plugins.birch.core.js_obj_QMARK_,"JSObject")], null);
lt.plugins.birch.core.type_name = (function type_name(obj){var order = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"concrete","concrete",4726228471),1,new cljs.core.Keyword(null,"abstract","abstract",2746803092),2,new cljs.core.Keyword(null,"primitive","primitive",3474063449),3], null);return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,((function (order){
return (function (p1__8536_SHARP_){return p1__8536_SHARP_.call(null,obj);
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
lt.plugins.birch.tree.protocols.TreeNodeChildren = (function (){var obj9012 = {};return obj9012;
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
lt.plugins.birch.tree.protocols.TreeNodeBranchable = (function (){var obj9014 = {};return obj9014;
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
lt.plugins.birch.tree.protocols.TreeNodeMake = (function (){var obj9016 = {};return obj9016;
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
{var vec__8471 = loc;var node = cljs.core.nth.call(null,vec__8471,0,null);var path = cljs.core.nth.call(null,vec__8471,1,null);var vec__8472 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__8472,0,null);var cnext = cljs.core.nthnext.call(null,vec__8472,1);var cs = vec__8472;if(cljs.core.truth_(cs))
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
clojure.zip.up = (function up(loc){var vec__8475 = loc;var node = cljs.core.nth.call(null,vec__8475,0,null);var map__8476 = cljs.core.nth.call(null,vec__8475,1,null);var map__8476__$1 = ((cljs.core.seq_QMARK_.call(null,map__8476))?cljs.core.apply.call(null,cljs.core.hash_map,map__8476):map__8476);var path = map__8476__$1;var l = cljs.core.get.call(null,map__8476__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8476__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8476__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__8476__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__8476__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
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
var G__8509 = p;
loc = G__8509;
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
clojure.zip.right = (function right(loc){var vec__8480 = loc;var node = cljs.core.nth.call(null,vec__8480,0,null);var map__8481 = cljs.core.nth.call(null,vec__8480,1,null);var map__8481__$1 = ((cljs.core.seq_QMARK_.call(null,map__8481))?cljs.core.apply.call(null,cljs.core.hash_map,map__8481):map__8481);var path = map__8481__$1;var l = cljs.core.get.call(null,map__8481__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__8482 = cljs.core.get.call(null,map__8481__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__8482,0,null);var rnext = cljs.core.nthnext.call(null,vec__8482,1);var rs = vec__8482;if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
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
clojure.zip.rightmost = (function rightmost(loc){var vec__8485 = loc;var node = cljs.core.nth.call(null,vec__8485,0,null);var map__8486 = cljs.core.nth.call(null,vec__8485,1,null);var map__8486__$1 = ((cljs.core.seq_QMARK_.call(null,map__8486))?cljs.core.apply.call(null,cljs.core.hash_map,map__8486):map__8486);var path = map__8486__$1;var l = cljs.core.get.call(null,map__8486__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8486__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
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
clojure.zip.left = (function left(loc){var vec__8489 = loc;var node = cljs.core.nth.call(null,vec__8489,0,null);var map__8490 = cljs.core.nth.call(null,vec__8489,1,null);var map__8490__$1 = ((cljs.core.seq_QMARK_.call(null,map__8490))?cljs.core.apply.call(null,cljs.core.hash_map,map__8490):map__8490);var path = map__8490__$1;var l = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
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
clojure.zip.leftmost = (function leftmost(loc){var vec__8493 = loc;var node = cljs.core.nth.call(null,vec__8493,0,null);var map__8494 = cljs.core.nth.call(null,vec__8493,1,null);var map__8494__$1 = ((cljs.core.seq_QMARK_.call(null,map__8494))?cljs.core.apply.call(null,cljs.core.hash_map,map__8494):map__8494);var path = map__8494__$1;var l = cljs.core.get.call(null,map__8494__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8494__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6352__auto__ = path;if(cljs.core.truth_(and__6352__auto__))
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
clojure.zip.insert_left = (function insert_left(loc,item){var vec__8497 = loc;var node = cljs.core.nth.call(null,vec__8497,0,null);var map__8498 = cljs.core.nth.call(null,vec__8497,1,null);var map__8498__$1 = ((cljs.core.seq_QMARK_.call(null,map__8498))?cljs.core.apply.call(null,cljs.core.hash_map,map__8498):map__8498);var path = map__8498__$1;var l = cljs.core.get.call(null,map__8498__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__8501 = loc;var node = cljs.core.nth.call(null,vec__8501,0,null);var map__8502 = cljs.core.nth.call(null,vec__8501,1,null);var map__8502__$1 = ((cljs.core.seq_QMARK_.call(null,map__8502))?cljs.core.apply.call(null,cljs.core.hash_map,map__8502):map__8502);var path = map__8502__$1;var r = cljs.core.get.call(null,map__8502__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__8504 = loc;var _ = cljs.core.nth.call(null,vec__8504,0,null);var path = cljs.core.nth.call(null,vec__8504,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__8510){
var loc = cljs.core.first(arglist__8510);
arglist__8510 = cljs.core.next(arglist__8510);
var f = cljs.core.first(arglist__8510);
var args = cljs.core.rest(arglist__8510);
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
var G__8511 = clojure.zip.up.call(null,p);
p = G__8511;
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
var G__8512 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8512;
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
clojure.zip.remove = (function remove(loc){var vec__8507 = loc;var node = cljs.core.nth.call(null,vec__8507,0,null);var map__8508 = cljs.core.nth.call(null,vec__8507,1,null);var map__8508__$1 = ((cljs.core.seq_QMARK_.call(null,map__8508))?cljs.core.apply.call(null,cljs.core.hash_map,map__8508):map__8508);var path = map__8508__$1;var l = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
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
var G__8513 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8513;
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
return (function (p__8652){var vec__8653 = p__8652;var k = cljs.core.nth.call(null,vec__8653,0,null);var v = cljs.core.nth.call(null,vec__8653,1,null);return lt.plugins.birch.core.type_key.call(null,v);
});})(method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"map","map",1014012110),(function (p__8654){var vec__8655 = p__8654;var k = cljs.core.nth.call(null,vec__8655,0,null);var v = cljs.core.nth.call(null,vec__8655,1,null);return cljs.core.seq.call(null,v);
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"atom","atom",1016908995),(function (p__8656){var vec__8657 = p__8656;var k = cljs.core.nth.call(null,vec__8657,0,null);var v = cljs.core.nth.call(null,vec__8657,1,null);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.birch.tree","atom","lt.plugins.birch.tree/atom",1097049031),cljs.core.deref.call(null,v)], null)], null);
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),(function (p__8658){var vec__8659 = p__8658;var k = cljs.core.nth.call(null,vec__8659,0,null);var v = cljs.core.nth.call(null,vec__8659,1,null);if((function (){var G__8660 = v;if(G__8660)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8660.lt$plugins$birch$tree$protocols$TreeNodeChildren$;
}
})()))
{return true;
} else
{if((!G__8660.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8660);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8660);
}
})())
{return lt.plugins.birch.tree.protocols.children.call(null,v);
} else
{return cljs.core.map.call(null,cljs.core.vector,goog.object.getKeys(v),goog.object.getValues(v));
}
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.children,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__8661){var vec__8662 = p__8661;var k = cljs.core.nth.call(null,vec__8662,0,null);var v = cljs.core.nth.call(null,vec__8662,1,null);if((function (){var G__8663 = v;if(G__8663)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8663.lt$plugins$birch$tree$protocols$TreeNodeChildren$;
}
})()))
{return true;
} else
{if((!G__8663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeChildren,G__8663);
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
cljs.core._add_method.call(null,lt.plugins.birch.tree.branchable_QMARK_,new cljs.core.Keyword(null,"default","default",2558708147),(function (v){if((function (){var G__8664 = v;if(G__8664)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8664.lt$plugins$birch$tree$protocols$TreeNodeBranchable$;
}
})()))
{return true;
} else
{if((!G__8664.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeBranchable,G__8664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeBranchable,G__8664);
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
return (function (p__8665,_){var vec__8666 = p__8665;var ___$1 = cljs.core.nth.call(null,vec__8666,0,null);var v = cljs.core.nth.call(null,vec__8666,1,null);return lt.plugins.birch.core.type_key.call(null,v);
});})(method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.birch.tree.make_node,new cljs.core.Keyword(null,"map","map",1014012110),(function (p__8667,children){var vec__8668 = p__8667;var k = cljs.core.nth.call(null,vec__8668,0,null);var v = cljs.core.nth.call(null,vec__8668,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,v,children)], null);
}));
cljs.core._add_method.call(null,lt.plugins.birch.tree.make_node,new cljs.core.Keyword(null,"jsobject","jsobject",3323513146),(function (p__8669,c){var vec__8670 = p__8669;var k = cljs.core.nth.call(null,vec__8670,0,null);var v = cljs.core.nth.call(null,vec__8670,1,null);var o = (function (){var obj8672 = {};return obj8672;
})();var seq__8673_8712 = cljs.core.seq.call(null,cljs.core.concat.call(null,lt.plugins.birch.tree.children.call(null,v),c));var chunk__8674_8713 = null;var count__8675_8714 = 0;var i__8676_8715 = 0;while(true){
if((i__8676_8715 < count__8675_8714))
{var vec__8677_8716 = cljs.core._nth.call(null,chunk__8674_8713,i__8676_8715);var n_8717 = cljs.core.nth.call(null,vec__8677_8716,0,null);var d_8718 = cljs.core.nth.call(null,vec__8677_8716,1,null);(o[n_8717] = d_8718);
{
var G__8719 = seq__8673_8712;
var G__8720 = chunk__8674_8713;
var G__8721 = count__8675_8714;
var G__8722 = (i__8676_8715 + 1);
seq__8673_8712 = G__8719;
chunk__8674_8713 = G__8720;
count__8675_8714 = G__8721;
i__8676_8715 = G__8722;
continue;
}
} else
{var temp__4092__auto___8723 = cljs.core.seq.call(null,seq__8673_8712);if(temp__4092__auto___8723)
{var seq__8673_8724__$1 = temp__4092__auto___8723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8673_8724__$1))
{var c__7112__auto___8725 = cljs.core.chunk_first.call(null,seq__8673_8724__$1);{
var G__8726 = cljs.core.chunk_rest.call(null,seq__8673_8724__$1);
var G__8727 = c__7112__auto___8725;
var G__8728 = cljs.core.count.call(null,c__7112__auto___8725);
var G__8729 = 0;
seq__8673_8712 = G__8726;
chunk__8674_8713 = G__8727;
count__8675_8714 = G__8728;
i__8676_8715 = G__8729;
continue;
}
} else
{var vec__8678_8730 = cljs.core.first.call(null,seq__8673_8724__$1);var n_8731 = cljs.core.nth.call(null,vec__8678_8730,0,null);var d_8732 = cljs.core.nth.call(null,vec__8678_8730,1,null);(o[n_8731] = d_8732);
{
var G__8733 = cljs.core.next.call(null,seq__8673_8724__$1);
var G__8734 = null;
var G__8735 = 0;
var G__8736 = 0;
seq__8673_8712 = G__8733;
chunk__8674_8713 = G__8734;
count__8675_8714 = G__8735;
i__8676_8715 = G__8736;
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
cljs.core._add_method.call(null,lt.plugins.birch.tree.make_node,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__8679,children){var vec__8680 = p__8679;var k = cljs.core.nth.call(null,vec__8680,0,null);var v = cljs.core.nth.call(null,vec__8680,1,null);var node = vec__8680;if((function (){var G__8681 = v;if(G__8681)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8681.lt$plugins$birch$tree$protocols$TreeNodeMake$;
}
})()))
{return true;
} else
{if((!G__8681.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeMake,G__8681);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.tree.protocols.TreeNodeMake,G__8681);
}
})())
{return lt.plugins.birch.tree.protocols.make_node.call(null,v,k,children);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,v,cljs.core.map.call(null,cljs.core.second,children))], null);
}
}));
lt.plugins.birch.tree.TreeNode = (function (){var obj8683 = {};return obj8683;
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
lt.plugins.birch.tree.make = (function make(obj){var reify_zipper = (function reify_zipper(node){if(typeof lt.plugins.birch.tree.t8707 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.birch.tree.t8707 = (function (node,reify_zipper,obj,make,meta8708){
this.node = node;
this.reify_zipper = reify_zipper;
this.obj = obj;
this.make = make;
this.meta8708 = meta8708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.birch.tree.t8707.cljs$lang$type = true;
lt.plugins.birch.tree.t8707.cljs$lang$ctorStr = "lt.plugins.birch.tree/t8707";
lt.plugins.birch.tree.t8707.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"lt.plugins.birch.tree/t8707");
});
lt.plugins.birch.tree.t8707.prototype.lt$plugins$birch$tree$TreeNode$ = true;
lt.plugins.birch.tree.t8707.prototype.lt$plugins$birch$tree$TreeNode$branches$arity$1 = (function (_){var self__ = this;
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
lt.plugins.birch.tree.t8707.prototype.lt$plugins$birch$tree$TreeNode$unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return clojure.zip.node.call(null,self__.node);
});
lt.plugins.birch.tree.t8707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8709){var self__ = this;
var _8709__$1 = this;return self__.meta8708;
});
lt.plugins.birch.tree.t8707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8709,meta8708__$1){var self__ = this;
var _8709__$1 = this;return (new lt.plugins.birch.tree.t8707(self__.node,self__.reify_zipper,self__.obj,self__.make,meta8708__$1));
});
lt.plugins.birch.tree.__GT_t8707 = (function __GT_t8707(node__$1,reify_zipper__$1,obj__$1,make__$1,meta8708){return (new lt.plugins.birch.tree.t8707(node__$1,reify_zipper__$1,obj__$1,make__$1,meta8708));
});
}
return (new lt.plugins.birch.tree.t8707(node,reify_zipper,obj,make,null));
});
return reify_zipper.call(null,clojure.zip.zipper.call(null,(function (p__8710){var vec__8711 = p__8710;var _ = cljs.core.nth.call(null,vec__8711,0,null);var v = cljs.core.nth.call(null,vec__8711,1,null);return lt.plugins.birch.tree.branchable_QMARK_.call(null,v);
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
goog.require('crate.binding');
goog.require('lt.plugins.birch.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('crate.binding');
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
lt.plugins.birch.ui.CssClass = (function (){var obj8738 = {};return obj8738;
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
lt.plugins.birch.ui.type_class = (function type_class(obj){if((function (){var G__8740 = obj;if(G__8740)
{var bit__7014__auto__ = null;if(cljs.core.truth_((function (){var or__6364__auto__ = bit__7014__auto__;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return G__8740.lt$plugins$birch$ui$CssClass$;
}
})()))
{return true;
} else
{if((!G__8740.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.ui.CssClass,G__8740);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,lt.plugins.birch.ui.CssClass,G__8740);
}
})())
{return lt.plugins.birch.ui.css_class.call(null,obj);
} else
{return cljs.core.get.call(null,lt.plugins.birch.ui._STAR_type_key__GT_class_STAR_,lt.plugins.birch.core.type_key.call(null,obj));
}
});
lt.plugins.birch.ui.key_ui = (function key_ui(this$,value){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.br-tree-node.key","span.br-tree-node.key",584414363),value], null));var seq__8747_8835 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click!","click!",3951157003),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouseover!","mouseover!",2036544442),e);
});})(e__7755__auto__))
], null)));var chunk__8748_8836 = null;var count__8749_8837 = 0;var i__8750_8838 = 0;while(true){
if((i__8750_8838 < count__8749_8837))
{var vec__8751_8839 = cljs.core._nth.call(null,chunk__8748_8836,i__8750_8838);var ev__7756__auto___8840 = cljs.core.nth.call(null,vec__8751_8839,0,null);var func__7757__auto___8841 = cljs.core.nth.call(null,vec__8751_8839,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8840,func__7757__auto___8841);
{
var G__8842 = seq__8747_8835;
var G__8843 = chunk__8748_8836;
var G__8844 = count__8749_8837;
var G__8845 = (i__8750_8838 + 1);
seq__8747_8835 = G__8842;
chunk__8748_8836 = G__8843;
count__8749_8837 = G__8844;
i__8750_8838 = G__8845;
continue;
}
} else
{var temp__4092__auto___8846 = cljs.core.seq.call(null,seq__8747_8835);if(temp__4092__auto___8846)
{var seq__8747_8847__$1 = temp__4092__auto___8846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8747_8847__$1))
{var c__7112__auto___8848 = cljs.core.chunk_first.call(null,seq__8747_8847__$1);{
var G__8849 = cljs.core.chunk_rest.call(null,seq__8747_8847__$1);
var G__8850 = c__7112__auto___8848;
var G__8851 = cljs.core.count.call(null,c__7112__auto___8848);
var G__8852 = 0;
seq__8747_8835 = G__8849;
chunk__8748_8836 = G__8850;
count__8749_8837 = G__8851;
i__8750_8838 = G__8852;
continue;
}
} else
{var vec__8752_8853 = cljs.core.first.call(null,seq__8747_8847__$1);var ev__7756__auto___8854 = cljs.core.nth.call(null,vec__8752_8853,0,null);var func__7757__auto___8855 = cljs.core.nth.call(null,vec__8752_8853,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8854,func__7757__auto___8855);
{
var G__8856 = cljs.core.next.call(null,seq__8747_8847__$1);
var G__8857 = null;
var G__8858 = 0;
var G__8859 = 0;
seq__8747_8835 = G__8856;
chunk__8748_8836 = G__8857;
count__8749_8837 = G__8858;
i__8750_8838 = G__8859;
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
lt.plugins.birch.ui.value_ui = (function value_ui(this$,value){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.br-tree-node.value","span.br-tree-node.value",601021741),value], null));var seq__8759_8860 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click!","click!",3951157003),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__7755__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouseover!","mouseover!",2036544442),e);
});})(e__7755__auto__))
], null)));var chunk__8760_8861 = null;var count__8761_8862 = 0;var i__8762_8863 = 0;while(true){
if((i__8762_8863 < count__8761_8862))
{var vec__8763_8864 = cljs.core._nth.call(null,chunk__8760_8861,i__8762_8863);var ev__7756__auto___8865 = cljs.core.nth.call(null,vec__8763_8864,0,null);var func__7757__auto___8866 = cljs.core.nth.call(null,vec__8763_8864,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8865,func__7757__auto___8866);
{
var G__8867 = seq__8759_8860;
var G__8868 = chunk__8760_8861;
var G__8869 = count__8761_8862;
var G__8870 = (i__8762_8863 + 1);
seq__8759_8860 = G__8867;
chunk__8760_8861 = G__8868;
count__8761_8862 = G__8869;
i__8762_8863 = G__8870;
continue;
}
} else
{var temp__4092__auto___8871 = cljs.core.seq.call(null,seq__8759_8860);if(temp__4092__auto___8871)
{var seq__8759_8872__$1 = temp__4092__auto___8871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8759_8872__$1))
{var c__7112__auto___8873 = cljs.core.chunk_first.call(null,seq__8759_8872__$1);{
var G__8874 = cljs.core.chunk_rest.call(null,seq__8759_8872__$1);
var G__8875 = c__7112__auto___8873;
var G__8876 = cljs.core.count.call(null,c__7112__auto___8873);
var G__8877 = 0;
seq__8759_8860 = G__8874;
chunk__8760_8861 = G__8875;
count__8761_8862 = G__8876;
i__8762_8863 = G__8877;
continue;
}
} else
{var vec__8764_8878 = cljs.core.first.call(null,seq__8759_8872__$1);var ev__7756__auto___8879 = cljs.core.nth.call(null,vec__8764_8878,0,null);var func__7757__auto___8880 = cljs.core.nth.call(null,vec__8764_8878,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8879,func__7757__auto___8880);
{
var G__8881 = cljs.core.next.call(null,seq__8759_8872__$1);
var G__8882 = null;
var G__8883 = 0;
var G__8884 = 0;
seq__8759_8860 = G__8881;
chunk__8760_8861 = G__8882;
count__8761_8862 = G__8883;
i__8762_8863 = G__8884;
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
lt.plugins.birch.ui.__BEH__tree_node__DOT__on_destroy = (function __BEH__tree_node__DOT__on_destroy(this$){var temp__4092__auto___8885 = new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8885))
{var children_8886 = temp__4092__auto___8885;var seq__8769_8887 = cljs.core.seq.call(null,children_8886);var chunk__8770_8888 = null;var count__8771_8889 = 0;var i__8772_8890 = 0;while(true){
if((i__8772_8890 < count__8771_8889))
{var c_8891 = cljs.core._nth.call(null,chunk__8770_8888,i__8772_8890);lt.object.destroy_BANG_.call(null,c_8891);
{
var G__8892 = seq__8769_8887;
var G__8893 = chunk__8770_8888;
var G__8894 = count__8771_8889;
var G__8895 = (i__8772_8890 + 1);
seq__8769_8887 = G__8892;
chunk__8770_8888 = G__8893;
count__8771_8889 = G__8894;
i__8772_8890 = G__8895;
continue;
}
} else
{var temp__4092__auto___8896__$1 = cljs.core.seq.call(null,seq__8769_8887);if(temp__4092__auto___8896__$1)
{var seq__8769_8897__$1 = temp__4092__auto___8896__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8769_8897__$1))
{var c__7112__auto___8898 = cljs.core.chunk_first.call(null,seq__8769_8897__$1);{
var G__8899 = cljs.core.chunk_rest.call(null,seq__8769_8897__$1);
var G__8900 = c__7112__auto___8898;
var G__8901 = cljs.core.count.call(null,c__7112__auto___8898);
var G__8902 = 0;
seq__8769_8887 = G__8899;
chunk__8770_8888 = G__8900;
count__8771_8889 = G__8901;
i__8772_8890 = G__8902;
continue;
}
} else
{var c_8903 = cljs.core.first.call(null,seq__8769_8897__$1);lt.object.destroy_BANG_.call(null,c_8903);
{
var G__8904 = cljs.core.next.call(null,seq__8769_8897__$1);
var G__8905 = null;
var G__8906 = 0;
var G__8907 = 0;
seq__8769_8887 = G__8904;
chunk__8770_8888 = G__8905;
count__8771_8889 = G__8906;
i__8772_8890 = G__8907;
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
var temp__4092__auto___8908 = new cljs.core.Keyword("lt.plugins.birch.ui","key","lt.plugins.birch.ui/key",3766042312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8908))
{var kobj_8909 = temp__4092__auto___8908;lt.object.destroy_BANG_.call(null,kobj_8909);
} else
{}
return lt.object.destroy_BANG_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","value","lt.plugins.birch.ui/value",3882111446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.on-destroy","lt.plugins.birch.ui/tree-node.on-destroy",3029972526),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__on_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.birch.ui.children_ui = (function children_ui(children){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.children","ul.children",1596370664),(function (){var iter__7081__auto__ = (function iter__8783(s__8784){return (new cljs.core.LazySeq(null,(function (){var s__8784__$1 = s__8784;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8784__$1);if(temp__4092__auto__)
{var s__8784__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8784__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8784__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8786 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8785 = 0;while(true){
if((i__8785 < size__7080__auto__))
{var c = cljs.core._nth.call(null,c__7079__auto__,i__8785);cljs.core.chunk_append.call(null,b__8786,lt.object.__GT_content.call(null,c));
{
var G__8910 = (i__8785 + 1);
i__8785 = G__8910;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8786),iter__8783.call(null,cljs.core.chunk_rest.call(null,s__8784__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8786),null);
}
} else
{var c = cljs.core.first.call(null,s__8784__$2);return cljs.core.cons.call(null,lt.object.__GT_content.call(null,c),iter__8783.call(null,cljs.core.rest.call(null,s__8784__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,children);
})()], null));var seq__8787_8911 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8788_8912 = null;var count__8789_8913 = 0;var i__8790_8914 = 0;while(true){
if((i__8790_8914 < count__8789_8913))
{var vec__8791_8915 = cljs.core._nth.call(null,chunk__8788_8912,i__8790_8914);var ev__7756__auto___8916 = cljs.core.nth.call(null,vec__8791_8915,0,null);var func__7757__auto___8917 = cljs.core.nth.call(null,vec__8791_8915,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8916,func__7757__auto___8917);
{
var G__8918 = seq__8787_8911;
var G__8919 = chunk__8788_8912;
var G__8920 = count__8789_8913;
var G__8921 = (i__8790_8914 + 1);
seq__8787_8911 = G__8918;
chunk__8788_8912 = G__8919;
count__8789_8913 = G__8920;
i__8790_8914 = G__8921;
continue;
}
} else
{var temp__4092__auto___8922 = cljs.core.seq.call(null,seq__8787_8911);if(temp__4092__auto___8922)
{var seq__8787_8923__$1 = temp__4092__auto___8922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8787_8923__$1))
{var c__7112__auto___8924 = cljs.core.chunk_first.call(null,seq__8787_8923__$1);{
var G__8925 = cljs.core.chunk_rest.call(null,seq__8787_8923__$1);
var G__8926 = c__7112__auto___8924;
var G__8927 = cljs.core.count.call(null,c__7112__auto___8924);
var G__8928 = 0;
seq__8787_8911 = G__8925;
chunk__8788_8912 = G__8926;
count__8789_8913 = G__8927;
i__8790_8914 = G__8928;
continue;
}
} else
{var vec__8792_8929 = cljs.core.first.call(null,seq__8787_8923__$1);var ev__7756__auto___8930 = cljs.core.nth.call(null,vec__8792_8929,0,null);var func__7757__auto___8931 = cljs.core.nth.call(null,vec__8792_8929,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8930,func__7757__auto___8931);
{
var G__8932 = cljs.core.next.call(null,seq__8787_8923__$1);
var G__8933 = null;
var G__8934 = 0;
var G__8935 = 0;
seq__8787_8911 = G__8932;
chunk__8788_8912 = G__8933;
count__8789_8913 = G__8934;
i__8790_8914 = G__8935;
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
var __BEH__tree_node__DOT__open__delegate = function (this$,p__8794){var vec__8800 = p__8794;var depth = cljs.core.nth.call(null,vec__8800,0,null);var node = new cljs.core.Keyword(null,"node","node",1017291124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var children = cljs.core.map.call(null,((function (node,vec__8800,depth){
return (function (p1__8793_SHARP_){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node","lt.plugins.birch.ui/tree-node",3755733174),node,p1__8793_SHARP_);
});})(node,vec__8800,depth))
,lt.plugins.birch.tree.branches.call(null,node));if((1 < (function (){var or__6364__auto__ = depth;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 0;
}
})()))
{var seq__8801_8936 = cljs.core.seq.call(null,children);var chunk__8802_8937 = null;var count__8803_8938 = 0;var i__8804_8939 = 0;while(true){
if((i__8804_8939 < count__8803_8938))
{var c_8940 = cljs.core._nth.call(null,chunk__8802_8937,i__8804_8939);lt.object.raise.call(null,c_8940,new cljs.core.Keyword(null,"open","open",1017321916),(depth - 1));
{
var G__8941 = seq__8801_8936;
var G__8942 = chunk__8802_8937;
var G__8943 = count__8803_8938;
var G__8944 = (i__8804_8939 + 1);
seq__8801_8936 = G__8941;
chunk__8802_8937 = G__8942;
count__8803_8938 = G__8943;
i__8804_8939 = G__8944;
continue;
}
} else
{var temp__4092__auto___8945 = cljs.core.seq.call(null,seq__8801_8936);if(temp__4092__auto___8945)
{var seq__8801_8946__$1 = temp__4092__auto___8945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8801_8946__$1))
{var c__7112__auto___8947 = cljs.core.chunk_first.call(null,seq__8801_8946__$1);{
var G__8948 = cljs.core.chunk_rest.call(null,seq__8801_8946__$1);
var G__8949 = c__7112__auto___8947;
var G__8950 = cljs.core.count.call(null,c__7112__auto___8947);
var G__8951 = 0;
seq__8801_8936 = G__8948;
chunk__8802_8937 = G__8949;
count__8803_8938 = G__8950;
i__8804_8939 = G__8951;
continue;
}
} else
{var c_8952 = cljs.core.first.call(null,seq__8801_8946__$1);lt.object.raise.call(null,c_8952,new cljs.core.Keyword(null,"open","open",1017321916),(depth - 1));
{
var G__8953 = cljs.core.next.call(null,seq__8801_8946__$1);
var G__8954 = null;
var G__8955 = 0;
var G__8956 = 0;
seq__8801_8936 = G__8953;
chunk__8802_8937 = G__8954;
count__8803_8938 = G__8955;
i__8804_8939 = G__8956;
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
var p__8794 = null;if (arguments.length > 1) {
  p__8794 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__tree_node__DOT__open__delegate.call(this,this$,p__8794);};
__BEH__tree_node__DOT__open.cljs$lang$maxFixedArity = 1;
__BEH__tree_node__DOT__open.cljs$lang$applyTo = (function (arglist__8957){
var this$ = cljs.core.first(arglist__8957);
var p__8794 = cljs.core.rest(arglist__8957);
return __BEH__tree_node__DOT__open__delegate(this$,p__8794);
});
__BEH__tree_node__DOT__open.cljs$core$IFn$_invoke$arity$variadic = __BEH__tree_node__DOT__open__delegate;
return __BEH__tree_node__DOT__open;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.open","lt.plugins.birch.ui/tree-node.open",2161626160),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__open,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.plugins.birch.ui.__BEH__tree_node__DOT__close = (function __BEH__tree_node__DOT__close(this$){lt.util.dom.remove.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.children","ul.children",1596370664),lt.object.__GT_content.call(null,this$)));
var seq__8809_8958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8810_8959 = null;var count__8811_8960 = 0;var i__8812_8961 = 0;while(true){
if((i__8812_8961 < count__8811_8960))
{var c_8962 = cljs.core._nth.call(null,chunk__8810_8959,i__8812_8961);lt.object.destroy_BANG_.call(null,c_8962);
{
var G__8963 = seq__8809_8958;
var G__8964 = chunk__8810_8959;
var G__8965 = count__8811_8960;
var G__8966 = (i__8812_8961 + 1);
seq__8809_8958 = G__8963;
chunk__8810_8959 = G__8964;
count__8811_8960 = G__8965;
i__8812_8961 = G__8966;
continue;
}
} else
{var temp__4092__auto___8967 = cljs.core.seq.call(null,seq__8809_8958);if(temp__4092__auto___8967)
{var seq__8809_8968__$1 = temp__4092__auto___8967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8809_8968__$1))
{var c__7112__auto___8969 = cljs.core.chunk_first.call(null,seq__8809_8968__$1);{
var G__8970 = cljs.core.chunk_rest.call(null,seq__8809_8968__$1);
var G__8971 = c__7112__auto___8969;
var G__8972 = cljs.core.count.call(null,c__7112__auto___8969);
var G__8973 = 0;
seq__8809_8958 = G__8970;
chunk__8810_8959 = G__8971;
count__8811_8960 = G__8972;
i__8812_8961 = G__8973;
continue;
}
} else
{var c_8974 = cljs.core.first.call(null,seq__8809_8968__$1);lt.object.destroy_BANG_.call(null,c_8974);
{
var G__8975 = cljs.core.next.call(null,seq__8809_8968__$1);
var G__8976 = null;
var G__8977 = 0;
var G__8978 = 0;
seq__8809_8958 = G__8975;
chunk__8810_8959 = G__8976;
count__8811_8960 = G__8977;
i__8812_8961 = G__8978;
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
var __BEH__tree_node__DOT__toggle__delegate = function (this$,p__8813){var vec__8815 = p__8813;var depth = cljs.core.nth.call(null,vec__8815,0,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
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
var p__8813 = null;if (arguments.length > 1) {
  p__8813 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__tree_node__DOT__toggle__delegate.call(this,this$,p__8813);};
__BEH__tree_node__DOT__toggle.cljs$lang$maxFixedArity = 1;
__BEH__tree_node__DOT__toggle.cljs$lang$applyTo = (function (arglist__8979){
var this$ = cljs.core.first(arglist__8979);
var p__8813 = cljs.core.rest(arglist__8979);
return __BEH__tree_node__DOT__toggle__delegate(this$,p__8813);
});
__BEH__tree_node__DOT__toggle.cljs$core$IFn$_invoke$arity$variadic = __BEH__tree_node__DOT__toggle__delegate;
return __BEH__tree_node__DOT__toggle;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node.toggle","lt.plugins.birch.ui/tree-node.toggle",4378728054),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__tree_node__DOT__toggle,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle","toggle",4440567494),null], null), null));
lt.plugins.birch.ui.create_display_node_BANG_ = (function create_display_node_BANG_(this$,k,parent,node){var obj = lt.object.create.call(null,k,parent,node);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent-id","parent-id",3084183696),lt.object.__GT_id.call(null,this$)], null));
return obj;
});
lt.plugins.birch.ui.display_key_QMARK_ = (function display_key_QMARK_(parent,node){var vec__8817 = lt.plugins.birch.tree.unwrap.call(null,parent);var pk = cljs.core.nth.call(null,vec__8817,0,null);var pv = cljs.core.nth.call(null,vec__8817,1,null);return !((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),lt.plugins.birch.core.type_key.call(null,pv))) || (lt.plugins.birch.tree.root_QMARK_.call(null,node)) || (lt.plugins.birch.tree.atom_QMARK_.call(null,node)));
});
lt.plugins.birch.ui.display_ui = (function display_ui(this$,parent,node){var e__7755__auto__ = crate.core.html.call(null,((lt.plugins.birch.ui.display_key_QMARK_.call(null,(function (){var or__6364__auto__ = parent;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return node;
}
})(),node))?(function (){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.birch.ui","key","lt.plugins.birch.ui/key",3766042312),lt.plugins.birch.ui.create_display_node_BANG_.call(null,this$,new cljs.core.Keyword("lt.plugins.birch.ui","tree-node-key","lt.plugins.birch.ui/tree-node-key",4620890564),parent,node)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.display","span.display",681650576),lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","key","lt.plugins.birch.ui/key",3766042312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))," ",lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","value","lt.plugins.birch.ui/value",3882111446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.display","span.display",681650576),lt.object.__GT_content.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","value","lt.plugins.birch.ui/value",3882111446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null)));var seq__8824_8980 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"toggle","toggle",4440567494));
});})(e__7755__auto__))
], null)));var chunk__8825_8981 = null;var count__8826_8982 = 0;var i__8827_8983 = 0;while(true){
if((i__8827_8983 < count__8826_8982))
{var vec__8828_8984 = cljs.core._nth.call(null,chunk__8825_8981,i__8827_8983);var ev__7756__auto___8985 = cljs.core.nth.call(null,vec__8828_8984,0,null);var func__7757__auto___8986 = cljs.core.nth.call(null,vec__8828_8984,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8985,func__7757__auto___8986);
{
var G__8987 = seq__8824_8980;
var G__8988 = chunk__8825_8981;
var G__8989 = count__8826_8982;
var G__8990 = (i__8827_8983 + 1);
seq__8824_8980 = G__8987;
chunk__8825_8981 = G__8988;
count__8826_8982 = G__8989;
i__8827_8983 = G__8990;
continue;
}
} else
{var temp__4092__auto___8991 = cljs.core.seq.call(null,seq__8824_8980);if(temp__4092__auto___8991)
{var seq__8824_8992__$1 = temp__4092__auto___8991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8824_8992__$1))
{var c__7112__auto___8993 = cljs.core.chunk_first.call(null,seq__8824_8992__$1);{
var G__8994 = cljs.core.chunk_rest.call(null,seq__8824_8992__$1);
var G__8995 = c__7112__auto___8993;
var G__8996 = cljs.core.count.call(null,c__7112__auto___8993);
var G__8997 = 0;
seq__8824_8980 = G__8994;
chunk__8825_8981 = G__8995;
count__8826_8982 = G__8996;
i__8827_8983 = G__8997;
continue;
}
} else
{var vec__8829_8998 = cljs.core.first.call(null,seq__8824_8992__$1);var ev__7756__auto___8999 = cljs.core.nth.call(null,vec__8829_8998,0,null);var func__7757__auto___9000 = cljs.core.nth.call(null,vec__8829_8998,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8999,func__7757__auto___9000);
{
var G__9001 = cljs.core.next.call(null,seq__8824_8992__$1);
var G__9002 = null;
var G__9003 = 0;
var G__9004 = 0;
seq__8824_8980 = G__9001;
chunk__8825_8981 = G__9002;
count__8826_8982 = G__9003;
i__8827_8983 = G__9004;
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
/**
* @param {...*} var_args
*/
lt.plugins.birch.ui.__BEH__simple_viewer__DOT__set_BANG_ = (function() { 
var __BEH__simple_viewer__DOT__set_BANG___delegate = function (this$,obj,p__8830){var vec__8832 = p__8830;var depth = cljs.core.nth.call(null,vec__8832,0,null);var temp__4092__auto___9005 = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9005))
{var old_9006 = temp__4092__auto___9005;lt.object.destroy_BANG_.call(null,old_9006);
} else
{}
var make_tree_node_9007 = lt.object.raise_reduce.call(null,this$,new cljs.core.Keyword(null,"make+","make+",1117563759),lt.plugins.birch.ui.make_tree_node);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",4285503153),make_tree_node_9007.call(null,null,lt.plugins.birch.tree.make.call(null,obj))], null));
lt.object.raise.call(null,new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (){var or__6364__auto__ = depth;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 1;
}
})());
return lt.objs.tabs.add_or_focus_BANG_.call(null,this$);
};
var __BEH__simple_viewer__DOT__set_BANG_ = function (this$,obj,var_args){
var p__8830 = null;if (arguments.length > 2) {
  p__8830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return __BEH__simple_viewer__DOT__set_BANG___delegate.call(this,this$,obj,p__8830);};
__BEH__simple_viewer__DOT__set_BANG_.cljs$lang$maxFixedArity = 2;
__BEH__simple_viewer__DOT__set_BANG_.cljs$lang$applyTo = (function (arglist__9008){
var this$ = cljs.core.first(arglist__9008);
arglist__9008 = cljs.core.next(arglist__9008);
var obj = cljs.core.first(arglist__9008);
var p__8830 = cljs.core.rest(arglist__9008);
return __BEH__simple_viewer__DOT__set_BANG___delegate(this$,obj,p__8830);
});
__BEH__simple_viewer__DOT__set_BANG_.cljs$core$IFn$_invoke$arity$variadic = __BEH__simple_viewer__DOT__set_BANG___delegate;
return __BEH__simple_viewer__DOT__set_BANG_;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","simple-viewer.set!","lt.plugins.birch.ui/simple-viewer.set!",1559510181),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__simple_viewer__DOT__set_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set!","set!",1017430897),null], null), null));
lt.plugins.birch.ui.__BEH__simple_viewer__DOT__close = (function __BEH__simple_viewer__DOT__close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","simple-viewer.close","lt.plugins.birch.ui/simple-viewer.close",661679040),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.ui.__BEH__simple_viewer__DOT__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","birch.simple-viewer","lt.plugins.birch.ui/birch.simple-viewer",816626104),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"birch.simple-viewer","birch.simple-viewer",4500794177),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Birch",new cljs.core.Keyword(null,"object","object",4285503153),null,new cljs.core.Keyword(null,"init","init",1017141378),(function() { 
var G__9009__delegate = function (this$,p__8833){var vec__8834 = p__8833;var name = cljs.core.nth.call(null,vec__8834,0,null);if(cljs.core.truth_(name))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),name], null));
} else
{}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.br-tree-node.root","div.br-tree-node.root",3355399249),crate.binding.bound.call(null,this$,((function (vec__8834,name){
return (function (_){var temp__4090__auto__ = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4090__auto__))
{var data = temp__4090__auto__;return lt.object.__GT_content.call(null,data);
} else
{return "No data to display";
}
});})(vec__8834,name))
)], null);
};
var G__9009 = function (this$,var_args){
var p__8833 = null;if (arguments.length > 1) {
  p__8833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9009__delegate.call(this,this$,p__8833);};
G__9009.cljs$lang$maxFixedArity = 1;
G__9009.cljs$lang$applyTo = (function (arglist__9010){
var this$ = cljs.core.first(arglist__9010);
var p__8833 = cljs.core.rest(arglist__9010);
return G__9009__delegate(this$,p__8833);
});
G__9009.cljs$core$IFn$_invoke$arity$variadic = G__9009__delegate;
return G__9009;
})()
);
lt.plugins.birch.ui.make_simple_viewer = (function() {
var make_simple_viewer = null;
var make_simple_viewer__0 = (function (){return make_simple_viewer.call(null,"Birch");
});
var make_simple_viewer__1 = (function (name){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.birch.ui","birch.simple-viewer","lt.plugins.birch.ui/birch.simple-viewer",816626104),name);
});
make_simple_viewer = function(name){
switch(arguments.length){
case 0:
return make_simple_viewer__0.call(this);
case 1:
return make_simple_viewer__1.call(this,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_simple_viewer.cljs$core$IFn$_invoke$arity$0 = make_simple_viewer__0;
make_simple_viewer.cljs$core$IFn$_invoke$arity$1 = make_simple_viewer__1;
return make_simple_viewer;
})()
;
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
lt.plugins.birch.reader.read_string_cljs_atom_BANG_ = (function read_string_cljs_atom_BANG_(s){return cljs.core.atom.call(null,lt.plugins.birch.reader.read_string_BANG_.call(null,lt.plugins.birch.reader.atom_str_value.call(null,s)));
});
lt.plugins.birch.reader._STAR_parsers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"can-parse?","can-parse?",2527637499),lt.plugins.birch.reader.atom_str_QMARK_,new cljs.core.Keyword(null,"fun","fun",1014006001),lt.plugins.birch.reader.read_string_cljs_atom_BANG_], null)], null);
lt.plugins.birch.reader.find_unreadable_forms = (function find_unreadable_forms(s){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"capture","capture",1566489272),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"final","final",1111340264),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"#?","#?",1013905390),false,new cljs.core.Keyword(null,"level","level",1116770038),0], null);var c = cljs.core.first.call(null,cljs.core.seq.call(null,s));var r = cljs.core.rest.call(null,cljs.core.seq.call(null,s));while(true){
var prevHash_QMARK_ = new cljs.core.Keyword(null,"#?","#?",1013905390).cljs$core$IFn$_invoke$arity$1(state);var c_is_hash = cljs.core._EQ_.call(null,"#",c);var c_is_start = cljs.core._EQ_.call(null,"<",c);var c_is_end = cljs.core._EQ_.call(null,">",c);var next_c = cljs.core.first.call(null,r);var next_r = cljs.core.rest.call(null,r);if((c == null))
{return new cljs.core.Keyword(null,"final","final",1111340264).cljs$core$IFn$_invoke$arity$1(state);
} else
{if((c_is_hash) && (cljs.core.not.call(null,prevHash_QMARK_)))
{{
var G__8631 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),true);
var G__8632 = next_c;
var G__8633 = next_r;
state = G__8631;
c = G__8632;
r = G__8633;
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
var G__8634 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),false);
var G__8635 = next_c;
var G__8636 = next_r;
state = G__8634;
c = G__8635;
r = G__8636;
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
var G__8637 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"#?","#?",1013905390),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,"#<"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.inc);
var G__8638 = next_c;
var G__8639 = next_r;
state = G__8637;
c = G__8638;
r = G__8639;
continue;
}
} else
{if(((0 < new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (!(c_is_end)))
{{
var G__8640 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,c);
var G__8641 = next_c;
var G__8642 = next_r;
state = G__8640;
c = G__8641;
r = G__8642;
continue;
}
} else
{if((cljs.core._EQ_.call(null,1,new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (c_is_end))
{{
var G__8643 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"final","final",1111340264)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,new cljs.core.Keyword(null,"capture","capture",1566489272).cljs$core$IFn$_invoke$arity$1(state),c))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.dec),new cljs.core.Keyword(null,"capture","capture",1566489272),cljs.core.PersistentVector.EMPTY);
var G__8644 = next_c;
var G__8645 = next_r;
state = G__8643;
c = G__8644;
r = G__8645;
continue;
}
} else
{if(((1 < new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (c_is_end))
{{
var G__8646 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",1566489272)], null),cljs.core.conj,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1116770038)], null),cljs.core.dec);
var G__8647 = next_c;
var G__8648 = next_r;
state = G__8646;
c = G__8647;
r = G__8648;
continue;
}
} else
{if((cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not.call(null,prevHash_QMARK_)))
{{
var G__8649 = state;
var G__8650 = next_c;
var G__8651 = next_r;
state = G__8649;
c = G__8650;
r = G__8651;
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
lt.plugins.birch.reader.read_string_BANG_ = (function read_string_BANG_(s){var temp__4090__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__8626_SHARP_){return p1__8626_SHARP_.call(null,s);
}),new cljs.core.Keyword(null,"can-parse?","can-parse?",2527637499)),lt.plugins.birch.reader._STAR_parsers_STAR_));if(cljs.core.truth_(temp__4090__auto__))
{var map__8628 = temp__4090__auto__;var map__8628__$1 = ((cljs.core.seq_QMARK_.call(null,map__8628))?cljs.core.apply.call(null,cljs.core.hash_map,map__8628):map__8628);var fun = cljs.core.get.call(null,map__8628__$1,new cljs.core.Keyword(null,"fun","fun",1014006001));return fun.call(null,s);
} else
{return cljs.reader.read_string.call(null,lt.plugins.birch.reader.santize_pr_str.call(null,s));
}
});
lt.plugins.birch.reader.try_read_string_BANG_ = (function try_read_string_BANG_(s){try{return lt.plugins.birch.reader.read_string_BANG_.call(null,s);
}catch (e8630){if((e8630 instanceof Error))
{var e = e8630;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8630;
} else
{return null;
}
}
}});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.birch.eval')) {
goog.provide('lt.plugins.birch.eval');
goog.require('cljs.core');
goog.require('lt.plugins.birch.reader');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.birch.reader');
goog.require('lt.plugins.birch.ui');
goog.require('lt.util.dom');
goog.require('lt.plugins.birch.ui');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.birch.eval.ir__GT_result = (function ir__GT_result(this$){var or__6364__auto__ = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"last-result","last-result",1581948582).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
}
});
lt.plugins.birch.eval.viewer = lt.plugins.birch.ui.make_simple_viewer.call(null,"Eval Viewer");
lt.plugins.birch.eval.__BEH__inline_watch__DOT__store_last_result = (function __BEH__inline_watch__DOT__store_last_result(this$,res){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-result","last-result",1581948582),res], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.eval","inline-watch.store-last-result","lt.plugins.birch.eval/inline-watch.store-last-result",4059092616),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.eval.__BEH__inline_watch__DOT__store_last_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.plugins.birch.eval.__BEH__inline_result__DOT__menu_compat_PLUS_ = (function __BEH__inline_result__DOT__menu_compat_PLUS_(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Remove result",new cljs.core.Keyword(null,"order","order",1119910592),1,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Copy result",new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"copy","copy",1016963815));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.eval","inline-result.menu-compat+","lt.plugins.birch.eval/inline-result.menu-compat+",4145662915),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.eval.__BEH__inline_result__DOT__menu_compat_PLUS_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu+","menu+",1117686302),null], null), null));
lt.plugins.birch.eval.__BEH__inline_result__DOT__menu_PLUS_ = (function __BEH__inline_result__DOT__menu_PLUS_(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open in viewer",new cljs.core.Keyword(null,"order","order",1119910592),3,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var temp__4092__auto__ = lt.plugins.birch.reader.read_string_BANG_.call(null,lt.plugins.birch.eval.ir__GT_result.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var data = temp__4092__auto__;return lt.object.raise.call(null,lt.plugins.birch.eval.viewer,new cljs.core.Keyword(null,"set!","set!",1017430897),data);
} else
{return null;
}
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.birch.eval","inline-result.menu+","lt.plugins.birch.eval/inline-result.menu+",863859982),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.birch.eval.__BEH__inline_result__DOT__menu_PLUS_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu+","menu+",1117686302),null], null), null));
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
lt.plugins.birch.aleph.__BEH__aleph_object_viewer__DOT__set_BANG_ = (function __BEH__aleph_object_viewer__DOT__set_BANG_(this$,obj){var temp__4092__auto___8070 = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8070))
{var old_8071 = temp__4092__auto___8070;lt.object.destroy_BANG_.call(null,old_8071);
} else
{}
var make_tree_node_8072 = lt.object.raise_reduce.call(null,this$,new cljs.core.Keyword(null,"make+","make+",1117563759),lt.plugins.birch.ui.make_tree_node);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",4285503153),make_tree_node_8072.call(null,null,lt.plugins.birch.tree.make.call(null,obj))], null));
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