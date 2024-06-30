alert('Seja bem-vindo ao jogo do número secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto);
let numeroDigitado = parseInt(prompt('Me fale um número de 0 a 30 e descubra o número secreto'));

if (numeroDigitado != numeroSecreto){
    alert('Você errou');
} else{
    alert('Acertou!');
}