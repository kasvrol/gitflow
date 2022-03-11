import React from 'react'
import Botoes from "../Botoes/Botoes";

function NumBotoes () {

    const Numeros = (valor) => valor

    return (

        <div className="btn-numeros">
            <section>
                <Botoes onClick={() => Numeros('1')} > 1 </Botoes>
                <Botoes onClick={() => Numeros('2')}> 2 </Botoes>
                <Botoes onClick={() => Numeros('3')} > 3 </Botoes>
            </section>
            <section>
                <Botoes onClick={() => Numeros('4')}> 4 </Botoes>
                <Botoes onClick={() => Numeros('5')}> 5 </Botoes>
                <Botoes onClick={() => Numeros('6')}> 6 </Botoes>
            </section>
            <section>
                <Botoes onClick={() => Numeros('7')}> 7 </Botoes>
                <Botoes onClick={() => Numeros('8')}> 8 </Botoes>
                <Botoes onClick={() => Numeros('9')}> 9 </Botoes>
            </section>
            <section>
                <Botoes onClick={() => Numeros('0')}> 0 </Botoes>
            </section>
        </div>
        
    )

}

export default NumBotoes;