import React from "react";
import Botoes from "../Botoes/Botoes";

function Subtracao (primeiroNumeroDigitado, segundoNumeroDigitado) {

    return primeiroNumeroDigitado-segundoNumeroDigitado;

}

function SubBotao(){
return(
    <Botoes onClick={() => Subtracao ()} >
        ➖
    </Botoes>
)

}

export default SubBotao;