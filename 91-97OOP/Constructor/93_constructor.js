// Constructor with Parameter

function Mobile(){
      this.model='3310';
      this.price=function(){
            console.log(this.model+" \n Price is INR=12008");
      }
}
let samsung = new Mobile('Samsung');
let lg=new Mobile('Lg');
samsung.price();
lg.price();