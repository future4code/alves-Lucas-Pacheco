import React from "react";
import "./CardMenor.css"

function CardMenor(props) {
    return (
        <div className="cardPequeno">
            <img src={ props.imagem } />
            <div>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardMenor
