import React from "react";
import Botoes from "../Botoes/Botoes";

function NumBotoes(){
return(
    <div className="btn-numeros">
        <section>
            <Botoes onClick={() => console.log('You just clicked')} >
                1
            </Botoes>
            <Botoes onClick={() => console.log('You just clicked')} >
                2
            </Botoes>
            <Botoes onClick={() => console.log('You just clicked')} >
                3
            </Botoes>
        </section>
        <section>
            <Botoes onClick={() => console.log('You just clicked')} >
                4
            </Botoes>
            <Botoes onClick={() => console.log('You just clicked')} >
                5
            </Botoes>
            <Botoes onClick={() => console.log('You just clicked')} >
                6
            </Botoes>
        </section>
        <section>
            <Botoes onClick={() => console.log('You just clicked')} >
                7
            </Botoes>
            <Botoes onClick={() => console.log('You just clicked')} >
                8
            </Botoes>
            <Botoes onClick={() => console.log('You just clicked')} >
                9
            </Botoes>
        </section>
        <section>
            <Botoes onClick={() => console.log('You just clicked')} >
                0
            </Botoes>
        </section>
    </div>
)

}

export default NumBotoes;