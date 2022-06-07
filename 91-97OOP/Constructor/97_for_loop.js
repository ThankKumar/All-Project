function mobile(model_no){
      this.model=model_no;
      this.color='White';
      this.ram='4gb';
      this.price= function(){
            console.log(this.model+' price Rs=3000 ');
      }
}
var samsung = new mobile('Glaxy');
var nokia = new mobile('3310');
for(var space in nokia){
console.log(nokia[space]);
}
console.log(nokia.price())