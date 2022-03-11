import React from 'react'
import Botoes from "../Botoes/Botoes";

function NumBotoes () {

    const NumeroDigitado = ( numero ) => {

        return numero.target.value

    }

    return (

        <div className="btn-numeros">
            <section>
                <Botoes onClick={NumeroDigitado} value = {1}> 1 </Botoes>
                <Botoes onClick={NumeroDigitado} value = {2}> 2 </Botoes>
                <Botoes onClick={NumeroDigitado} value = {3}> 3 </Botoes>
            </section>
            <section>
                <Botoes onClick={NumeroDigitado} value = {4}> 4 </Botoes>
                <Botoes onClick={NumeroDigitado} value = {5}> 5 </Botoes>
                <Botoes onClick={NumeroDigitado} value = {6}> 6 </Botoes>
            </section>
            <section>
                <Botoes onClick={NumeroDigitado} value = {7}> 7 </Botoes>
                <Botoes onClick={NumeroDigitado} value = {8}> 8 </Botoes>
                <Botoes onClick={NumeroDigitado} value = {9}> 9 </Botoes>
            </section>
            <section>
                <Botoes onClick={NumeroDigitado} value = {0}> 0 </Botoes>
            </section>
        </div>
        
    )

}

export default NumBotoes;