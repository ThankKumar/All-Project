
function mobile(model_no){
      this.model=model_no;
      this.color='White';
}
let samsung = new mobile('Glaxy');

let nokia = new mobile('3310');

if (nokia.hasOwnProperty('color')) {
      console.log('Avaliable');
}else{
      console.log("!!Not Avaliable");
}