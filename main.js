const numeroSenha = document.querySelector (".parametro-senha___texto")


tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll(document".parametro-senha___botao")


botoes[1].onclick = diminuir;

function diminuir() {
    tamanhoSenha;
    numeroSenha.textContent = tamanhoSenha;
}

botoes[1].onclick = aumentar;

function aumentar() {
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
}