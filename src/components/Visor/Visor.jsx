import React, {useState} from "react";
import Numeros from '../NumBotoes/NumBotoes'

function Visor () {

    const [ numeros, setNumeros ] = useState(0)

    const visorNumeroDigitado = ( NumeroDigitado ) => {

        NumeroDigitado = Numeros.NumeroDigitado

        setNumeros[NumeroDigitado]

    }

    return (

        <section className="visor-da-calculadora">
            <spam>{ numeros }</spam>
            <spam>{ visorNumeroDigitado }</spam>
        </section>

    )

}

export default Visor;