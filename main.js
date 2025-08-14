let numeroAleatorio = Math.florr(Math.random() *100) +1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const envioPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {}
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
      palpites.textContent = "Palpites anteriores: ";
    }

    palpiteUsuario.textContent += palpiteUsuario + " ";

    if(palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parebens! Você Acertou!";
        ultimoResultado.style.backgroundColor = "green!"
        baixoOuAlto.textContent = "";
        finalizarJogo();
    }
