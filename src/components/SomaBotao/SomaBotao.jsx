import React from 'react'
import Botoes from "../Botoes/Botoes";

function SomaBotao() {

    const Soma = (primeiroNumeroDigitado, segundoNumeroDigitado) => {

        return primeiroNumeroDigitado+segundoNumeroDigitado;
    
    }

    return (

        <Botoes onClick={() => Soma ()} >
            +
        </Botoes>

    )

}

export default SomaBotao;