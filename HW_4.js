

let services = 
{
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: price,
    minPrice: minPrice,
    maxPrice: maxPrice
};


services['Розбити скло'] = "400 грн";
services['Побриті пахви'] = "700 грн";
services['Підстригти нігті'] = "50.50 грн";
services['Побрити дупу)))'] = "3000 грн";
services['Покрасити нігті ноги'] = 4000;
services['Покрасити нігті'] = "dsafsasas";


function price (){
    let sum = 0;

    for (key in this){
        if (typeof this[key] === "string" || typeof this[key] === "number"){
            
            let price = parseFloat(this[key]);
            if (!isNaN(price)){
                sum += price
            }
        }
    }
    return sum
}

console.log(services.price())



function minPrice (){
    let min = Infinity;
    

    for (key in this) {
        if(typeof this[key] === "string" || typeof this[key]){
            let price = parseFloat(this[key]);
            if (price < min){
                min = price
            }
        }
    }
    return min
}

console.log(services.minPrice())


function maxPrice (){
    let max = -Infinity;

    for (key in this){
        if (typeof this[key] === "string" || typeof this[key] === "number")
        {
            let price = parseFloat(this[key]);
            if (price > max){
                max = price
            }
        }
    }
    return max
}

console.log(services.maxPrice());





// function maxPrice (){
//     let max = -Infinity;

//     for (key in this) {
//         if (typeof this[key] === "string"){
//             let price = parseFloat(this[key]);
//             if (price > max){
//                 max = price;
//             } 
//         }
//     }
//     return max
// }

// console.log(services.maxPrice())

// function price (){
//     let sum = 0;

//     for (key in this){
//         if (typeof this[key] === "string"){
//             sum += parseFloat(this[key])
            
//         }
//     }
//     return sum
// }

// console.log(services.price())
