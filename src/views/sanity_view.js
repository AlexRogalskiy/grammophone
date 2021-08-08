var template = require("../templates/sanity.ejs");
var Helpers = require('../helpers');
var Sets = require('../sets');

module.exports = class SanityView {
  constructor(element) {

  this._element = element;

}

setDelegate(delegate) {

  this._delegate = delegate;

}

reload() {

  this._element.innerHTML = template({
    unreachable: this._delegate.getCalculation("grammar.unreachable"),
    unrealizable: this._delegate.getCalculation("grammar.unrealizable"),
    cycle: this._delegate.getCalculation("grammar.cycle"),
    nullAmbiguity: this._delegate.getCalculation("grammar.nullAmbiguity"),
    ambiguous: this._delegate.getCalculation("grammar.ambiguous"),
    productions: this._delegate.getCalculation("grammar.productions"),
    info: this._delegate.getCalculation("grammar.symbolInfo"),
    Helpers: Helpers,
    Sets: Sets
  });

}

}
