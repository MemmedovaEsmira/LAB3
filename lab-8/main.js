// function getReverse(word) {
//     let result ="";
//   for(let i = word.length - 1; i >= 0; i --){
//     result = result + word[i];
//   }  
//   return result ;
// }

// console.log( getReverse("salam"))

// function calculateLetter (sentence) {
//     let count = 0
//     for (let i=0 ; i<sentence.length ; i++){
//           if(sentence[i] =="e"){      
//               count++;
//             }
//        }
//        return count;
//     }
// console.log(calculateLetter("Never give up"))
   
// const cars = [
//     {
//         color: "red",
//         type: "mercedes",
//         capacity: 5,
//         price: 120,
//     },
//     {
//         color: "blue",
//         type: "bmw",
//         capacity: 2,
//         price: 70,
//     },
//     {
//         color: "blue",
//         type: "ford",
//         capacity: 6,
//         price: 220,
//     },
//     {
//         color: "blue",
//         type: "bmw",
//         capacity: 6,
//         price: 400,
//     },
// ];


// const sizeCars = cars.map((car) =>{
//     if (car.capacity<=3){
//         return `small ${car.type}`
//     }
//     if (car.capacity<=5){
//         return `medium ${car.type}`
//     }
//      else{
//         return `large ${car.type}`
//      }
  
// })
// console.log(sizeCars)



//   const discountedCars = cars.filter((car)=>car.color=="blue").map((car)=>{
// let discount = car.price - (car.price*30)/100;
// return `new price ${discount} $ car model ${ car.type}`
//   })
// console.log(discountedCars)




