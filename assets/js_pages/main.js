// Código geral que chama as funções e estrutura a navegação entre as cenas, importando as funções específicas de cada cena
import { mudarBooleana, 
    mudarCalculo, 
    mudarConjunto, 
    mudarFuncoes,
} from './cenas.js';

import { fazerSoma, 
    fazerSubtracao, 
    fazerMultiplicacao,
    fazerDivisao,
    fazerExpressao
} from './cenas_operacoes.js';
import {resetar, tentarNovamente, escolherOperacao} from './engine.js';
import { calcularAND } from './formulas.js';

// Arrow function que o HTML vai chamar
window.mudarCena = (tipo) => {
    const cenas = {
        booleana: mudarBooleana,
        calculo: mudarCalculo,
        teoriaConjunto: mudarConjunto,
        funcoesMatematicas: mudarFuncoes,
        soma: fazerSoma,
        subtracao: fazerSubtracao,
        multiplicacao: fazerMultiplicacao,
        divisao: fazerDivisao,
        expressao: fazerExpressao
    };
    if(cenas[tipo]) {
        cenas[tipo]();
    }
}

// Por causa do type=modulo precisamos expor as funções globais (que mexem diretamente com o DOM) para que o HTML 
// execute elas, como o resetar e tentarNovamente, que são usadas em várias cenas diferentes, e a função de 
// escolher operação, que é usada na cena de cálculos

window.resetar = resetar;
window.tentarNovamente = tentarNovamente;
window.calcularAND = calcularAND;
window.escolherOperacao = escolherOperacao;
