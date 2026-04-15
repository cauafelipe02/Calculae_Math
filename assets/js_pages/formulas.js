// Funções que processam dados ou calculam resultados
import { UI } from './UI.js';
import { mostrarSucesso, mostrarFrustracao, mostrarNeutro, tentarNovamente } from './engine.js';

export function calcularAND() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    // Remove o botão de tentar novamente caso ele exista para evitar múltiplos botões
    document.getElementById("btn-tentar-novamente")?.remove();

    // Verifica se os campos estão vazios
    if(aRaw === "" || bRaw === ""){
        UI.resultado.innerText = "Por favor, insira um valor válido.";
        mostrarNeutro();
        criarBotaoTentarNovamente();
        return;
    }

    const a = parseInt(aRaw);
    const b = parseInt(bRaw);

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

// Função auxiliar (interna deste arquivo) para criar o botão sem poluir o cálculo
function criarBotaoTentarNovamente() {
    let botao = document.createElement("button");
    botao.id = "btn-tentar-novamente";
    botao.classList.add("btn-tentar-novamente-style");
    botao.textContent = "Tentar novamente";
    
    // Como estamos em módulos, usamos a referência direta da função importada
    botao.onclick = tentarNovamente; 
    UI.inputs.appendChild(botao);
}