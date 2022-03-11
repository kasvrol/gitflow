import React from 'react'
import Botoes from "../Botoes/Botoes";
import Numeros from "../NumBotoes/NumBotoes"

function MultBotao () {

    const Multiplicacao = (primeiroNumeroDigitado, segundoNumeroDigitado) => {

        segundoNumeroDigitado == 0 || primeiroNumeroDigitado == 0 ? 
        0 : primeiroNumeroDigitado/segundoNumeroDigitado
    
    }

    return (

        <Botoes onClick={() => Multiplicacao()} >
            ❌
        </Botoes>

    )

}

export default MultBotao;