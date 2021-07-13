var COMMAND = require('./Command.js');

var prompt = require('synchro-prompt');

class CLI {
  constructor(s)
  {
    // TODO FIXME !!!!!!!! Decomment the line after this one if you want to run tests !!!!!!!!!
    // prompt = s;
    this.COMMANDS = ["quit - quit the program",                     "order - create a new command",                     "help - " + "displays the help"];
    this.showDivider("Welcome to Efficent Command System 2.0");
}

  main()
  {

    this.loop();
  };

  loop(){
    var n = prompt('Enter command : ');

    switch (n) {
    case "quit" :
      this.showDivider("System stopped");
      process.exit();
      break;
    case "order":
      this.createOrder();
      break;
    default:
      this.showHelp();
      this.loop();
    };

  }

  createOrder()
  {
    this.order = new COMMAND();

    this.showDivider("Order Menu");

    console.log("New order created.");
    console.log("Add new elements to your order");
    this.addStuff(this.order);
    this.orderLoop();
  }

  addStuff(order){
    var v = prompt("\nWhat do you want to add to order: ");
    var  quantity=0;
    switch (v) {
    case "prepend" :
      console.log("\nHow many perpends palets do you need ?");
      quantity = prompt("Enter quantity : ");
      this.order.addPrepend(quantity);
      break;
    case "wire":
      console.log("\nHow many copper wire meters do you need ?");
      quantity = prompt("Enter quantity : ");
      this.order.addCopperWire(quantity);
      break;
    default:
      console.info("\nNothing added");
    }
  };


  orderLoop(){
    var c = prompt("\nEnter order command : ");

    switch (c.trim()) {
    case "show":
      this.showOrder();
      break;
    case "add":
      this.addStuff(this.order);
      break;
    case "save":
      this.order.save();
    case "stop":
      console.log("\nQuit Order Menu\n");
      this.loop();
      return;
    default:
      this.showHelp();
    };
    this.orderLoop();
  }
  showOrder()
  {
    this.order.show();
  }
  showHelp() {
    console.log("\nUnknown command\nThe available commands are the following : \n");
    for (var i = 0; i < this.COMMANDS.length; i++)
    {
      console.log(this.COMMANDS[i]);
    }
    console.log("");

   }

  showDivider(title){
    console.log("\n--------------------------------------------------------------------------------");
    console.log("          "+title);
    console.log("--------------------------------------------------------------------------------\n");
  }

}


module.exports = (CLI);
