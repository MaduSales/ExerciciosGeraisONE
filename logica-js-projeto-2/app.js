alert('Seja bem-vindo ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let numeroDigitado = parseInt(prompt('Me fale um número de 0 a 30 e descubra o número secreto'));

if (numeroDigitado == numeroSecreto){
    alert(`Acertou! O número secreto era ${numeroSecreto}`);
} else{
    if (numeroDigitado > numeroSecreto){
        alert(`O número secreto era ${numeroSecreto}, ou seja, menor do que ${numeroDigitado}`);
    } else{
        alert(`O número secreto era ${numeroSecreto}, ou seja, maior do que ${numeroDigitado}`)
    }
}