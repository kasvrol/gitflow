import React from 'react'
import Botoes from "../Botoes/Botoes";

function SubBotao() {

    const Subtracao = (primeiroNumeroDigitado, segundoNumeroDigitado) => {

        return primeiroNumeroDigitado-segundoNumeroDigitado;
    
    }

    return (

        <Botoes onClick={() => Subtracao ()} >
            --
        </Botoes>

    )

}

export default SubBotao;