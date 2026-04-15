// Funções de "Máquinas repetitivas", faxina e transição de cenas
//importa as variaveis gerais do UI para manipulação do DOM
import { UI } from './UI.js';

// Função para limpar as cenas
export function limparPalco() {
    UI.menu.classList.add('escondido');
    UI.form.classList.remove('escondido');
    
    // Limpa os conteúdos dinâmicos para a nova aba
    UI.resumo.innerHTML = "";
    UI.inputs.innerHTML = "";
    UI.resultado.innerText = "";

    // Limpa o botão de voltar para tela de seleção de operação (calculo) e reseta ele para a função padrão
    UI.btnVoltarPagina.onclick = resetar;
    UI.btnVoltarPagina.textContent = "Voltar ao Inicio";
}

// 2. A função de transição de cenas (que usa a faxina)
export function prepararCena(pose, textoFala) {
    limparPalco(); // Primeiro limpa tudo...
    
    // ...depois configura o Professor
    UI.sprite.className = '';
    UI.sprite.classList.add(pose);
    UI.fala.innerText = textoFala;
}

// Função para o botão de tentar novamente
export function tentarNovamente() {
    document.getElementById('valA').value = "";
    document.getElementById('valB').value = "";
    UI.resultado.innerText = "";

    UI.sprite.className = 'pose-inicial';
    UI.balaoFala.style.cssText = `
        width: 250px;
        margin-right: 15px;
        margin-top: 5px;
    `;
    UI.fala.innerHTML = `<p>Entender a lógica é o primeiro passo, vamos tentar novamente?</p>`;

    document.getElementById("btn-tentar-novamente")?.remove();
}

// Funções de mudar de imagem
export function mostrarSucesso() {
    UI.sprite.className = 'pose-sucesso';
    UI.fala.innerText = "Excelente! Você dominou essa lógica!";
}

export function mostrarFrustracao() {
    UI.sprite.className = 'pose-triste';
    UI.fala.innerText = "Ops, vamos tentar de novo?";
}

export function mostrarNeutro() {
    UI.sprite.className = 'pose-neutra';
    UI.fala.innerText = "Hmm, parece que algo não está certo. Tente novamente!";
}

// Função de Reset
export function resetar() {
    location.reload(); 
}

// função de escolher operação

// ela armazena o valor capturado no input que está selecionado e chama 
// a função de mudarCena passando esse valor para que a cena correta seja exibida
export function escolherOperacao() {
    const operacao = document.querySelector('input[name="operacao"]:checked');

    if (operacao) {
        window.mudarCena(operacao.value);
    } else {
        alert("Por favor, selecione uma operação para continuar.");
    }
}

// Função do botão de Voltar para tela de seleção de operação ( mudarCena('calculo') )
export function voltarCalculo() {
    UI.btnVoltarPagina.textContent = "Voltar";
    UI.btnVoltarPagina.onclick = () => mudarCena('calculo');
}