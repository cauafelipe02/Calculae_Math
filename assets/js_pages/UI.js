//Variáveis e constantes gerais para manipulação do DOM e controle de cenas, organizados em um objeto
export const UI = {
    appContainer: document.querySelector('.app-container'),
    sprite: document.getElementById('professor-sprite'),
    fala: document.getElementById('fala-professor'),
    balaoFala: document.getElementById('balao-fala-professor'),
    professorArea: document.getElementById('professor-area'),
    menu: document.getElementById('menu-opcoes'),
    form: document.getElementById('form-calculo'),
    resumo: document.getElementById('resumo-teoria'),
    inputs: document.getElementById('inputs-dinamicos'),
    resultado: document.getElementById('resultado-matematico'),
    btnVoltarPagina: document.querySelector('.btn-voltar')
};