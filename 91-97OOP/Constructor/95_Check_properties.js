function mobile(model_no){
      this.model=model_no;
      this.memory=6;

}
var samsung=new mobile('Glaxy');
var nokia = new mobile('3310');
if(typeof samsung.memory!=='undefined'){
console.log("Avaliable");
}else{
      console.log('Not Avaliable!!')
}