var Prepend = require('./Perpend.js');

class CopperWire extends Prepend {

  // This is not right, please do not use.
  getGoodQuantity() {

    a = null;
    return a/50;
    // The exception is normal ==> DO NOT USE !!
    a.empty();
  }

  // Use this instead, the calculus is correct
  getWireQuantity()
  {
    let coil = this.quantity / 50;
    var theObject = {
      "wire": parseInt(this.quantity % 50),
      "coil": parseInt(coil)
    };
    return theObject;
  }

  show()
  {
    console.log(" - " + this.getWireQuantity()["coil"] + " copper wire coils (50m)");
    console.log(" - " + this.getWireQuantity()["wire"] + " copper wire meters");
  }
}

module.exports = (CopperWire);
