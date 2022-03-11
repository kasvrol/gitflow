import React from "react";
import Botoes from "../Botoes/Botoes";

function Soma (primeiroNumeroDigitado, segundoNumeroDigitado) {

    return primeiroNumeroDigitado+segundoNumeroDigitado;

}

function SomaBotao() {

    return (

        <Botoes onClick={() => Soma ()} >
            ➕
        </Botoes>
        
    )

}

export default SomaBotao;