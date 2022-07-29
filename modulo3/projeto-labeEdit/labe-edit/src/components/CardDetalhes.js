import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL, HEADER } from '../constants/credentiais'
import { useGetData } from '../hooks/useGetData'
import Like from '../assets/cima.svg'
import dislike from '../assets/baixo.svg'
import { PrincipalContainer, SectionCardFeed, SectionClick, SectionLike, TextBody, TextName } from '../style/StyleadCardFeed'
const CardDetalhes = (props) => {
    

    const commentsCard = props.dados && props.dados.map((comentarios) => {
        return (<SectionCardFeed key={comentarios.id}>
                <TextName>Enviado por: {comentarios.username}</TextName>
                <TextBody>{comentarios.body}</TextBody>
                <SectionClick>
                <SectionLike>
                  <button onClick={() => {props.like(comentarios.id)}}>
                    <img src={Like} alt="Like"/>
                  </button>
                <p>{comentarios.voteSum}</p>
                  <button onClick={() => {props.dislike(comentarios.id)}}>
                   <img src={dislike} alt="Dislike"/>
                  </button>
                 </SectionLike>

                </SectionClick>
            </SectionCardFeed>
        )
    })
  return (
    <PrincipalContainer>{commentsCard}</PrincipalContainer>
  )

}

export default CardDetalhes
