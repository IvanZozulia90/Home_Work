function checkProbabilityTheory(count){
    let eventCouter = 0;
    let oddCouter =0;

    for (let i=0; i<count; i++){
        let max = 1000;
        let min = 100;

        let rnd = Math.floor(Math.random()* (max - min+1)) + min;

        if (rnd % 2 === 0){
            eventCouter++
        }else{
            oddCouter++
        }
    }
    let evenPercentage = (eventCouter/ count) * 100;
    let oddPercentage = (oddCouter/ count) * 100;
    
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + eventCouter);
    console.log("Не парних чисел: " + oddCouter);
    console.log((eventCouter/ count).toFixed(2) + "%");
    console.log((oddCouter/ count).toFixed(2) + "%")

}


checkProbabilityTheory(1000)






