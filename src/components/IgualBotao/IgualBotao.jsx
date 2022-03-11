import React from "react";
import Botoes from "../Botoes/Botoes";

function IgualBotao(){
return(
    <Botoes onClick={() => console.log('You just clicked')} >
        🤷
    </Botoes>
)

}

export default IgualBotao;