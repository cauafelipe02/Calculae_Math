// Guarda as diferentes cenas do site, cada função é responsável por configurar a cena de um conteúdo específico
import {UI} from './UI.js';
import {prepararCena, voltarCalculo} from './engine.js';

export function fazerSoma() {
    prepararCena('pose-inicial', "Beleza, vamos somar!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números que deseja somar:</p>`;
    UI.inputs.innerHTML = ``;

    voltarCalculo();
}

export function fazerSubtracao() {
    prepararCena('pose-inicial', "Beleza, vamos subtrair!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números que deseja subtrair:</p>`;
    UI.inputs.innerHTML = ``;

    voltarCalculo();
}

export function fazerMultiplicacao() {
    prepararCena('pose-inicial', "Beleza, vamos multiplicar!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números que deseja multiplicar:</p>`;
    UI.inputs.innerHTML = ``;

    voltarCalculo();
}

export function fazerDivisao() {
    prepararCena('pose-inicial', "Beleza, vamos dividir!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números que deseja dividir:</p>`;
    UI.inputs.innerHTML = ``;

    voltarCalculo();
}

export function fazerExpressao() {
    prepararCena('pose-inicial', "Beleza, vamos resolver uma expressão!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números da expressão:</p>`;
    UI.inputs.innerHTML = ``;

    voltarCalculo();
}