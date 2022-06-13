import React from 'react';
import {EstiloCard, Carta, Titulo, DivFinal } from "./styled"

function CardGrande(props) {
    return (
        <EstiloCard >
            < Carta src={ props.imagem } />
            <DivFinal>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </DivFinal>
        </EstiloCard>
    )
}

export default CardGrande;