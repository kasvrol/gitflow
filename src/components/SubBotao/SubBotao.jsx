import React from "react";
import Botoes from "../Botoes/Botoes";

function SubBotao(){
return(
    <Botoes onClick={() => console.log('You just clicked')} >
        ➖
    </Botoes>
)

}

export default SubBotao;