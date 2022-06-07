
// SyntaX

// function mobile(model_no){

//       return{
//             model:model_no,
//             price:function(){
//                   return('Price Is Rs.300')
//             }
//       };

// }
// let samsung=mobile('Galaxy');
// let nokia=mobile('7310C');
// console.log(samsung.model+samsung.price);
// console.log(nokia.model+nokia.price);

// ?Programing:-
// let samsung ={model:'Glaxy'};
// let lg={model:'nokia'};
// let nokia ={model:'3310'};

function mobile(model_no){
      return{
            model:model_no,
            price:function(){
            return('Price = 12000');
            }
      };
}
let samsung=mobile('Galaxy');
let nokia=mobile('7310C');
let lg=mobile('Lemborgani#');
console.log(samsung.model+samsung.price());
console.log(nokia.model+nokia.price());
console.log(lg.model+lg.price());


