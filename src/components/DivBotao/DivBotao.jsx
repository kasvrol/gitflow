import Botoes from "../Botoes/Botoes";

function Divisao(primeiroNumeroDigitado, segundoNumeroDigitado) {

    segundoNumeroDigitado == 0? "Não existe" : primeiroNumeroDigitado/segundoNumeroDigitado

}

function DivBotao() {

    return (

        <Botoes onClick={() => Divisao()} >
            ➗
        </Botoes>
        
    )

}

export default DivBotao;