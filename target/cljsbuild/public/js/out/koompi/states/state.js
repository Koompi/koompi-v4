// Compiled by ClojureScript 1.10.339 {}
goog.provide('koompi.states.state');
goog.require('cljs.core');
goog.require('reagent.core');
koompi.states.state.atom_order_koompi = reagent.core.atom.call(null,"");
koompi.states.state.atom_fname = reagent.core.atom.call(null,"");
koompi.states.state.atom_lname = reagent.core.atom.call(null,"");
koompi.states.state.atom_phone_number = reagent.core.atom.call(null,"");
koompi.states.state.atom_email = reagent.core.atom.call(null,"");
koompi.states.state.atom_order_number = reagent.core.atom.call(null,"");
koompi.states.state.atom_province = reagent.core.atom.call(null,"");
koompi.states.state.atom_gray_color = reagent.core.atom.call(null,"");
koompi.states.state.atom_rose_gold = reagent.core.atom.call(null,"");
koompi.states.state.atom_money = reagent.core.atom.call(null,"");
koompi.states.state.atom_payment = reagent.core.atom.call(null,"");
koompi.states.state.atom_ngos = reagent.core.atom.call(null,"");
koompi.states.state.atom_message = reagent.core.atom.call(null,"");
koompi.states.state.atom_laptop_color = reagent.core.atom.call(null,"");
koompi.states.state.atom_order = reagent.core.atom.call(null,"");
koompi.states.state.gray_num_order = reagent.core.atom.call(null,"");
koompi.states.state.rose_gold_num_order = reagent.core.atom.call(null,"");
koompi.states.state.alertSMS = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alertsms","alertsms",1767514623),false], null));
koompi.states.state.rose_gold = ((cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0)) - (cljs.core.deref.call(null,koompi.states.state.gray_num_order) | (0)));
koompi.states.state.grayColor = ((cljs.core.deref.call(null,koompi.states.state.atom_order_number) | (0)) - (cljs.core.deref.call(null,koompi.states.state.rose_gold_num_order) | (0)));

//# sourceMappingURL=state.js.map?rel=1551156909546
