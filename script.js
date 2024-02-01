const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoProximo = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
}

function pausarFaixa() {
    audioCapitulo.pause();
}

function tocarOuPausar() {
    if (taTocando === false) {
        tocarFaixa();
        taTocando = true;
        botaoPlayPause.className = 'bi bi-pause-circle-fill'
    } else {
        pausarFaixa();
        taTocando = false;
        botaoPlayPause.className = 'bi bi-play-circle-fill'
    }
}

function proximaFaixa() {
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    nomeCapitulo.innerHTML = 'Capitulo ' + capituloAtual;
    audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual +".mp3";
    tocarFaixa();
    taTocando = true;

}

function voltarFaixa() {
    if(capituloAtual === 1){
        capituloAtual = 10;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    nomeCapitulo.innerHTML = 'Capitulo ' + capituloAtual;
    audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual +".mp3";
    tocarFaixa();
    taTocando = true;

}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);