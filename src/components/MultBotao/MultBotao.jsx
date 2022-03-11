import Botoes from "../Botoes/Botoes";

function Multiplicacao(primeiroNumeroDigitado, segundoNumeroDigitado) {

    segundoNumeroDigitado == 0 || primeiroNumeroDigitado == 0 ? 
    0 : primeiroNumeroDigitado/segundoNumeroDigitado

}

function MultBotao(){

    return (

        <Botoes onClick={() => Multiplicacao()} >
            ❌
        </Botoes>

    )

}

export default MultBotao;