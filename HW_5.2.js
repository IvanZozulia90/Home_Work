let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];




function searchMail () {
    let mail = [];
    let validator = /^\w+(\.\w+)@(gmail\.com|yahoo\.com)$/
    
    for (let i = 0; i < arr.length; i++){
        if(validator.test(arr[i].email)){
            mail.push(arr[i].email);
        }
    }
    return mail
}

console.log(searchMail());