// Compiled by ClojureScript 1.10.339 {}
goog.provide('koompi.reagent.validation');
goog.require('cljs.core');
/**
 * Returns true if v is truthy and not an empty string.
 */
koompi.reagent.validation.has_value_QMARK_ = (function koompi$reagent$validation$has_value_QMARK_(v){
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,v,"");
} else {
return and__3938__auto__;
}
});
/**
 * Returns true if all members of the collection has-value? This works on maps as well.
 */
koompi.reagent.validation.has_values_QMARK_ = (function koompi$reagent$validation$has_values_QMARK_(coll){
var vs = ((cljs.core.map_QMARK_.call(null,coll))?cljs.core.vals.call(null,coll):coll);
return cljs.core.every_QMARK_.call(null,koompi.reagent.validation.has_value_QMARK_,vs);
});
/**
 * Returns true if v is not nil
 */
koompi.reagent.validation.not_nil_QMARK_ = (function koompi$reagent$validation$not_nil_QMARK_(v){
return cljs.core.boolean$.call(null,(function (){var or__3949__auto__ = v;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return v === false;
}
})());
});
/**
 * Returns true if v is greater than or equal to the given len
 */
koompi.reagent.validation.min_length_QMARK_ = (function koompi$reagent$validation$min_length_QMARK_(v,len){
return (cljs.core.count.call(null,v) >= len);
});
/**
 * Returns true if v is less than or equal to the given len
 */
koompi.reagent.validation.max_length_QMARK_ = (function koompi$reagent$validation$max_length_QMARK_(v,len){
return (cljs.core.count.call(null,v) <= len);
});
/**
 * Returns true if the string matches the given regular expression
 */
koompi.reagent.validation.matches_regex_QMARK_ = (function koompi$reagent$validation$matches_regex_QMARK_(v,regex){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,regex,v));
});
/**
 * Returns true if v is an email address
 */
koompi.reagent.validation.is_email_QMARK_ = (function koompi$reagent$validation$is_email_QMARK_(v){
if((v == null)){
return false;
} else {
return koompi.reagent.validation.matches_regex_QMARK_.call(null,v,/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);
}
});
/**
 * Returns true if the string can be parsed to a Long
 */
koompi.reagent.validation.valid_number_QMARK_ = (function koompi$reagent$validation$valid_number_QMARK_(v){
try{parseFloat(v);

return true;
}catch (e32532){var e = e32532;
return false;
}});
/**
 * Returns true if the string represents a number > given.
 */
koompi.reagent.validation.greater_than_QMARK_ = (function koompi$reagent$validation$greater_than_QMARK_(v,n){
var and__3938__auto__ = koompi.reagent.validation.valid_number_QMARK_.call(null,v);
if(cljs.core.truth_(and__3938__auto__)){
return (parseFloat(v) > n);
} else {
return and__3938__auto__;
}
});
/**
 * Returns true if the string represents a number < given.
 */
koompi.reagent.validation.less_than_QMARK_ = (function koompi$reagent$validation$less_than_QMARK_(v,n){
var and__3938__auto__ = koompi.reagent.validation.valid_number_QMARK_.call(null,v);
if(cljs.core.truth_(and__3938__auto__)){
return (parseFloat(v) < n);
} else {
return and__3938__auto__;
}
});
/**
 * Returns true if the string represents a number = given.
 */
koompi.reagent.validation.equal_to_QMARK_ = (function koompi$reagent$validation$equal_to_QMARK_(v,n){
var and__3938__auto__ = koompi.reagent.validation.valid_number_QMARK_.call(null,v);
if(cljs.core.truth_(and__3938__auto__)){
return (parseFloat(v) === n);
} else {
return and__3938__auto__;
}
});

//# sourceMappingURL=validation.js.map?rel=1551156893602
