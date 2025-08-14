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
        ultimoResultado.textContent = "BOA! CÊ ACERTOU!";
        ultimoResultado.style.backgroundColor = "green!"
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else if (contagemPalpites === 10)
        ultimo resultado.textcontent = "CÊ É BURRO"
        baixoOuAlto.textcontent = "";
        finalizarJogo();
} else {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = "O ÚLTIMO PALPITE FOI MUITO BAIXO!";
    } else if (palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = "O ÚLTIMO PALPITE FOI MUITO ALTO!";
    }
}
