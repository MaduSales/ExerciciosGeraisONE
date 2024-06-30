alert('Seja bem-vindo ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // TRAZ NÚMEROS ALEATÓRIOS
let numeroDigitado;
let tentativas = 1;

while (numeroSecreto != numeroDigitado){
    numeroDigitado = parseInt(prompt(`Me fale um número de 0 a ${numeroMaximo} e descubra o número secreto`));

    if (numeroDigitado == numeroSecreto){
        break;
    } else{
        if (numeroDigitado > numeroSecreto){
            alert(`O número secreto é menor do que ${numeroDigitado}`);
        } else{
            alert(`O número secreto é maior do que ${numeroDigitado}`)
        }
        tentativas++;
    }
}

//OPERADOR TERNÁRIO
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou! O número secreto era ${numeroSecreto}. Você realizou ${tentativas} ${palavraTentativa}`);



