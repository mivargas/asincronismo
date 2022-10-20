function sum(num1, num2){
    return num1 + num2;
}


function calc(num1, num2, callback){
    return callback(num1, num2);
};


console.log(calc(2, 2, sum));


setTimeout(function(){
    console.log('hola Miguel ');
}, 2000);


//con callback
function saludo(nombre){
    console.log(`hola ${nombre}`)
}

setTimeout(saludo, 3000, 'Miguel Vargas'); //funcion tiempo y argumentos