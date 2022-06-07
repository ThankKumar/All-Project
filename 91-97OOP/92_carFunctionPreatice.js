function _car(_model_no){
      return{
            model:_model_no,
            price:function(){
                  return('Price=1.2Cr');
            }
            
      };
}
let BMW=_car('BMW');
let JaguAd=_car('JaguAd');
let LamborgaNi=_car('LamborgaNi');
console.log(BMW.model+BMW.price());
console.log(JaguAd.model+JaguAd.price());
console.log(LamborgaNi.model+LamborgaNi.price());

function hello(a){
console.log(...arguments);
}hello(hello);