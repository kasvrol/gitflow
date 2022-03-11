import React from "react";
import DivBotao from "../DivBotao/DivBotao";
import SomaBotao from "../SomaBotao/SomaBotao";
import SubBotao from "../SubBotao/SubBotao";
import NumBotoes from "../NumBotoes/NumBotoes";
import Visor from "../Visor/Visor"
import MultBotao from "../MultBotao/MultBotao"
import IgualBotao from "../IgualBotao/IgualBotao"

function CascoDaCalculadora(){
return(
    <div className="casco-da-calculadora">
        <Visor/>
        <div className="botoes-da-calculadora">
            <NumBotoes/>
            <section className="btn-funcoes-da-calculadora">
                <SomaBotao/>
                <SubBotao/>
                <MultBotao/>
                <DivBotao/>
                <IgualBotao/>
            </section>
        </div>
    </div>
)

}

export default CascoDaCalculadora;