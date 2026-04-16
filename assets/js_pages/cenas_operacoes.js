// Guarda as diferentes cenas do site, cada função é responsável por configurar a cena de um conteúdo específico
import {UI} from './UI.js';
import {prepararCena} from './engine.js';
import { calcularSoma } from './formulas.js';

export function fazerSoma() {
    prepararCena('pose-inicial', "Beleza, vamos somar!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Vamos realizar algumas somas:</p>`;
    UI.inputs.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="font-weight: 500; ">Insira os números:</label>
            <input type="number" id="valA" placeholder="a">
            <input type="number" id="valB" placeholder="b">
            <button type="button" class="btn-js" id="btn-somar">Somar</button>
        </div>
    `;

    document.getElementById('btn-somar')
        .addEventListener('click', calcularSoma);
}

export function fazerSubtracao() {
    prepararCena('pose-inicial', "Beleza, vamos subtrair!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números que deseja subtrair:</p>`;
    UI.inputs.innerHTML = ``;
}

export function fazerMultiplicacao() {
    prepararCena('pose-inicial', "Beleza, vamos multiplicar!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números que deseja multiplicar:</p>`;
    UI.inputs.innerHTML = ``;
}

export function fazerDivisao() {
    prepararCena('pose-inicial', "Beleza, vamos dividir!!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números que deseja dividir:</p>`;
    UI.inputs.innerHTML = ``;
}

export function fazerExpressao() {
    prepararCena('pose-inicial', "Beleza, vamos resolver uma expressão!");

    UI.resumo.innerHTML = `<p style="font-weight: 600;">Informe os números da expressão:</p>`;
    UI.inputs.innerHTML = ``;
}