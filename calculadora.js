const [,,operacion, opA, opB]=proccess.argv;

function sumar(paramA, paramB){
    return paramA + paramB;
}

function sumarM(...operandos){
        return operandos.reduce((res,elem)=>{
            return res + elem;
        })
}

function restar(paramA, paramB){

}

function multiplicar(paramA, paramB){

}

function dividir(paramA, paramB){

}

switch(operacion){
    case 'sumar':
        resultado = sumar(Number(opA),Number(opB));
        console.log(resultado);
        break;
    case 'restar':
        resultado = restar(Number(opA),Number(opB));
        console.log(resultado);
        break;
}