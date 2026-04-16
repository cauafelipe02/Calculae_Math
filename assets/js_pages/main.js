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