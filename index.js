
const calcular = document.getElementById('calcular');


function imc (){
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if (nome !== ''&& altura !== '' && peso !==''){
    const valorIMC= (peso/ (altura * altura)).toFixed(1);
    resultado.textContent = valorIMC;
    let classificação = " ";
if(valorIMC <18.5){
    classificação='Abaixo do peso !';
 }else if (valorIMC <25){
    classificação ='com o peso ideal. Parabéns!';
 }else if (valorIMC< 30){
    classificação = 'levemente acima do peso .';
 }else if  (valorIMC <  35){
    classificação='Você está com obesidade grau i.';
 }else if (valorIMC<40){
    classificação= 'com obesidade grau II';
 }else{
    classificação= 'com obesidade grau  III. cuidado!!';
 }
    resultado.textContent=`${nome} seu IMC é ${valorIMC} e você está ${classificação}`;
}else{
    resultado.textContent= 'Preencha todos os campos !!!';
}
}



calcular.addEventListener('click',imc);


