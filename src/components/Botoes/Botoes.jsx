import React from "react";

function Botoes({ children, onClick, type = 'button' }){
return(
    <button type={type} className='btn' onClick={onClick}> {children} </button>
)

}

export default Botoes;