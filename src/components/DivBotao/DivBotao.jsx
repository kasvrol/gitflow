import React from 'react'
import Botoes from "../Botoes/Botoes";

function DivBotao() {

    const Divisao = (primeiroNumeroDigitado, segundoNumeroDigitado) => {

        segundoNumeroDigitado == 0? "Não existe" : primeiroNumeroDigitado/segundoNumeroDigitado
    
    }

    return (

        <Botoes onClick={() => Divisao()} >
            ➗
        </Botoes>

    )

}

export default DivBotao;