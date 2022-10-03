let casasTabuleiro = {
    'a8':undefined,'b8':undefined,'c8':undefined,'d8':undefined,'e8':undefined,'f8':undefined,'g8':undefined,'h8':undefined,
    'a7':undefined,'b7':undefined,'c7':undefined,'d7':undefined,'e7':undefined,'f7':undefined,'g7':undefined,'h7':undefined,
    'a6':undefined,'b6':undefined,'c6':undefined,'d6':undefined,'e6':undefined,'f6':undefined,'g6':undefined,'h6':undefined,
    'a5':undefined,'b5':undefined,'c5':undefined,'d5':undefined,'e5':undefined,'f5':undefined,'g5':undefined,'h5':undefined,
    'a4':undefined,'b4':undefined,'c4':undefined,'d4':undefined,'e4':undefined,'f4':undefined,'g4':undefined,'h4':undefined,
    'a3':undefined,'b3':undefined,'c3':undefined,'d3':undefined,'e3':undefined,'f3':undefined,'g3':undefined,'h3':undefined,
    'a2':undefined,'b2':undefined,'c2':undefined,'d2':undefined,'e2':undefined,'f2':undefined,'g2':undefined,'h2':undefined,
    'a1':undefined,'b1':undefined,'c1':undefined,'d1':undefined,'e1':undefined,'f1':undefined,'g1':undefined,'h1':undefined
}

let coresTabuleiro = [ // 1 = branco, 2 = preto
    1,2,1,2,1,2,1,2,
    2,1,2,1,2,1,2,1,
    1,2,1,2,1,2,1,2,
    2,1,2,1,2,1,2,1,
    1,2,1,2,1,2,1,2,
    2,1,2,1,2,1,2,1,
    1,2,1,2,1,2,1,2,
    2,1,2,1,2,1,2,1,
]

const drawTabuleiro = function() {
    const parent = document.querySelector('.tabuleiro');
    let corCont = 0;
    for (const casa in casasTabuleiro) {
        const divCasa = document.createElement('div');
        if (coresTabuleiro[corCont] % 2 === 1) {
            divCasa.className = 'tabuleiro__casa branca';
        } else {
            divCasa.className = 'tabuleiro__casa preta';
        }
        divCasa.innerText = `${casa}`;
        parent.appendChild(divCasa);
        corCont++;
    }
}

drawTabuleiro();

export { casasTabuleiro };