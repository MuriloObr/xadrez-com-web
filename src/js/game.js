import { casasTabuleiro } from './draw.js'

const iniciar = function() {
    const tabuleiro = Array.from(document.querySelectorAll('.tabuleiro__casa'));
    
    //Peões
    const pawnsBrancos = tabuleiro.filter((casa) => casa.innerText.at(-1) === '2');
    const pawnsPretos  = tabuleiro.filter((casa) => casa.innerText.at(-1) === '7');


    for (let whtP in pawnsBrancos) {
        const peaoBranco = document.createElement('div');
        peaoBranco.className = 'whtPawn';
        pawnsBrancos[whtP].appendChild(peaoBranco);
    }
    for (let blkP in pawnsPretos) {
        const peaoPreto = document.createElement('div');
        peaoPreto.className = 'blkPawn';
        pawnsPretos[blkP].appendChild(peaoPreto);
    }

    //Cavalos
    const knightsBrancos = tabuleiro.filter((casa) => casa.innerText === 'b1' || casa.innerText === 'g1');
    const knightsPretos = tabuleiro.filter((casa) => casa.innerText === 'b8' || casa.innerText === 'g8');

    for (let kntWht in knightsBrancos) {
        const knightBranco = document.createElement('div');
        knightBranco.className = 'kntWhite';
        knightsBrancos[kntWht].appendChild(knightBranco);
    }
    for (let kntBlk in knightsPretos) {
        const knightPreto = document.createElement('div');
        knightPreto.className = 'kntBlack';
        knightsPretos[kntBlk].appendChild(knightPreto);
    }

    //Bispos
    const bishopsBrancos = tabuleiro.filter((casa) => casa.innerText === 'c1' || casa.innerText === 'f1');
    const bishopsPretos = tabuleiro.filter((casa) => casa.innerText === 'c8' || casa.innerText === 'f8');

    for (let bspWht in bishopsBrancos) {
        const bishopBranco = document.createElement('div');
        bishopBranco.className = 'bspWhite';
        bishopsBrancos[bspWht].appendChild(bishopBranco);
    }
    for (let bspBlk in bishopsPretos) {
        const bishopPreto = document.createElement('div');
        bishopPreto.className = 'bspBlack';
        bishopsPretos[bspBlk].appendChild(bishopPreto);
    }

    //Torres
    const rooksBrancas = tabuleiro.filter((casa) => casa.innerText === 'a1' || casa.innerText === 'h1');
    const rooksPretas = tabuleiro.filter((casa) => casa.innerText === 'a8' || casa.innerText === 'h8');

    for (let rksWht in rooksBrancas) {
        const rookBranca = document.createElement('div');
        rookBranca.className = 'rksWhite';
        rooksBrancas[rksWht].appendChild(rookBranca);
    }
    for (let rksBlk in rooksPretas) {
        const rookPreta = document.createElement('div');
        rookPreta.className = 'rksBlack';
        rooksPretas[rksBlk].appendChild(rookPreta);
    }

    //Rei e Dama
    const kingBranco = tabuleiro.filter((casa) => casa.innerText === 'e1');
    const kingPreto = tabuleiro.filter((casa) => casa.innerText === 'e8');

    const queenBranca = tabuleiro.filter((casa) => casa.innerText === 'd1');
    const queenPreta = tabuleiro.filter((casa) => casa.innerText === 'd8');

    criarPieces(kingBranco, 'kingWhite');
    criarPieces(kingPreto, 'kingBlack');

    criarPieces(queenBranca, 'queenWhite');
    criarPieces(queenPreta, 'queenBlack');
 
}

function criarPieces(lista_pecas, nome_peca) {
    for (let piece in lista_pecas) {
        const newPiece = document.createElement('div');
        newPiece.className = `${nome_peca}`;
        lista_pecas[piece].appendChild(newPiece);
    }
}

iniciar();