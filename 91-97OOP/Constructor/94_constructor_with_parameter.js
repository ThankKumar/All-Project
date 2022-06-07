function mobile(model_no){
      this.model=model_no,
      this.price=function(){
            console.log(this.model+'\n'+"Price Rs.12020 "+'\n');
      };
}
let samsung = new mobile("Glaxy");
var nokia = new mobile('Nokia3310');
samsung.price();
nokia.price();