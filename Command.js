var CopperWire = require('./CopperWire.js');
let moment = require('moment');
var Prepend = require('./Perpend.js');
let uuidv1 = require('uuid/v1');


class Command {

  constructor()
  {
    this.prepend = new Prepend();
    this.copperWire = new CopperWire();
  }

  addPrepend(quantity){
    this.prepend.addQuantity(quantity);
  }

  show(){
    console.log("\nThe order contains:\n");
    this.prepend.show();
    this.copperWire.show();
  }


  save(){
    var id = uuidv1();
    let header = "id; Date;Perpend Palets;Copper Wire Coils;Copper Wire Meters;";
    let jour = moment().format('YYYY-MM-DD');
    var File_Name = "./" + jour + "-orders.csv";

    try {
      var fs = require('fs');

      var file = fs.openSync(File_Name, 'ax')
      //Write the CSV file header
      fs.appendFileSync(file, header);
      //Add a new line separator after the header
      fs.appendFileSync(file, "\n");

      //Write a the order to the CSV file
      fs.appendFileSync(file, id);
      fs.appendFileSync(file, ";");
      fs.appendFileSync(file, jour);
      fs.appendFileSync(file, ";");
      fs.appendFileSync(file, this.prepend.getQuantity());
      fs.appendFileSync(file, ";");
      fs.appendFileSync(file, this.copperWire.getWireQuantity()["coil"]);
      fs.appendFileSync(file, ";");
      fs.appendFileSync(file, this.copperWire.getWireQuantity()["wire"]);
      fs.appendFileSync(file, "\n");
    }
    catch (e)
    {
      console.error(e);
    }
    finally {
      try{
        console.log("Order Saved");
        fs.closeSync(file)
      }
      catch(e){
        console.log("Error !!!");
        console.log(e);
      }
    }

  }
  addCopperWire( quantity) {
    this.copperWire.addQuantity(quantity);
  }
}

module.exports = (Command);
