import React from "react";
import {Estilo, ImagemMenor, divSegunda} from "./styled"

function CardMenor(props) {
    return (
        <Estilo>
            < ImagemMenor src={ props.imagem } />
            <div>
                <h4>{props.nome}</h4>
                <p>{ props.descricao }</p>
            </div>
        </Estilo>
    )
}

export default CardMenor
