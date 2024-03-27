const calculate = document.getElementById('calculate');
const altura =document.getElementById('altura');
const peso = document.getElementById('peso');
const nome = document.getElementById('name');
const result = document.getElementById('result');
let classificacao ='';

function imc(){
  if(nome.value !== '' && peso.value !== '' && altura.value !== ''){
    
    const valorimc = (peso.value/(altura.value*altura.value)).toFixed(2);

      if(valorimc < 18.5){
        classificacao = 'abaixo do peso';
      }else if(valorimc < 25){
        classificacao = 'com o peso ideal';
      }else if(valorimc < 30){
        classificacao = 'levemente acima do peso';
      }else if(valorimc < 35){
        classificacao = 'com obesidade grau I.';
      }else if(valorimc < 40){
        classificacao = 'com obesidade grau II.';
      }else{
        classificacao = 'com obesidade grau III.'
      }

    result.textContent = `${nome.value} seu IMC é de ${valorimc}, você está ${classificacao} `;
  }else{
    result.textContent = 'Por favor preencher todos os campos!!'
  }
  
}

calculate.addEventListener('click', imc)
