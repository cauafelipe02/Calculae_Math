// Funções que processam dados ou calculam resultados
import { UI } from './UI.js';
import { mostrarSucesso, 
        mostrarFrustracao, 
        mostrarNeutro, 
        criarBotaoTentarNovamente, 
        validarInputsEBotao } from './engine.js';

export function calcularAND() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    // Validação dos inputs e limpeza do botão
    if (validarInputsEBotao(aRaw, bRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);

    if (a === 1 && b === 1) {
        UI.resultado.innerText = "Resultado: (1) Verdadeiro."
        mostrarSucesso(); // chama a função que mostra a imagem de sucesso
    } else {
        UI.resultado.innerText = "Resultado: (0) Falso."
        mostrarFrustracao(); // chama a função que mostra a imagem de frustração
    }
    // adiciona botão no final do bloco de inputs
    criarBotaoTentarNovamente();
}

export function calcularSoma() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    if (validarInputsEBotao(aRaw, bRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);
    let soma = a + b;
    UI.resultado.innerText = `Resultado: ${soma}`;
    mostrarSucesso();

    criarBotaoTentarNovamente();
}