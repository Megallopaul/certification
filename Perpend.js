class Prepend
{
  constructor(){
    this.quantity=0;
  }
  getQuantity(){
    return this.quantity;
  }
  addQuantity(numbre){
    this.quantity = this.quantity + numbre;
  }

  show(){
    console.log(" - " + this.quantity + " perpend palets");
  }
}
module.exports = (Prepend);
