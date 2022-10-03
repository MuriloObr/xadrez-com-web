import { casasTabuleiro } from './draw.js'

const iniciar = function() {
    const tabuleiro = Array.from(document.querySelectorAll('.tabuleiro__casa'));
    const pawnsBrancos = tabuleiro.filter((casa) => casa.innerText.at(-1) === '2');
    console.log(JSON.stringify(pawnsBrancos), pawnsBrancos[2]);
    for (let wht in pawnsBrancos) {
        const peaoBranco = document.createElement('div');
        peaoBranco.className = 'whtPawn';
        pawnsBrancos[wht].appendChild(peaoBranco);
    }

    for (var i = 0; i > 0 ; i++) {
        const t = 2;
    }
}

iniciar();