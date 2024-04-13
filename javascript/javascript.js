const input = document.querySelector('#input');
const arr = [];
function zero(){
    input.value += 0;
    arr.push(0);
}
function um(){
    input.value += 1;
    arr.push(1);
}
function dois(){
    input.value += 2;
    arr.push(2);
}
function tres(){
    input.value += 3;
    arr.push(3);
}
function quatro(){
    input.value += 4;
    arr.push(4);
}
function cinco(){
    input.value += 5;
    arr.push(5);
}
function seis(){
    input.value += 6;
    arr.push(6);
}
function sete(){
    input.value += 7;
    arr.push(7);
}
function oito(){
    input.value += 8;
    arr.push(8);
}
function nove(){
    input.value += 9;
    arr.push(9);
}
function soma(){
    input.value += '+'
    arr.push('+');
}
function subtracao(){
    input.value += '-'
    arr.push('-');
}
function multiplicacao(){
    input.value += '*'
    arr.push('*');
}
function divisao(){
    input.value += '/'
    arr.push('/');
}
function apagar(){
    arr.length = '';
    input.value = '';
}
function igualdade(){
    input.value = eval(input.value);
}