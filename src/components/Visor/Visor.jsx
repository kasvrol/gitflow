import React from "react";
import Numeros from '../NumBotoes/NumBotoes'

function Visor () {

    const visorValor = ( valor ) => {

        valor

    }

    const visorResultado = ( resultado ) => {

        resultado

    }

    return (

        <section className="visor-da-calculadora">
            <spam>{ visorValor() }</spam>
            <spam>{ visorResultado() }</spam>
        </section>

    )

}

export default Visor;