import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL, HEADER } from '../constants/credentiais'
import { useGetData } from '../hooks/useGetData'
import Like from '../assets/cima.svg'
import dislike from '../assets/baixo.svg'
import LikeGreen from '../assets/cimaColorido.svg'
import dislikeRed from '../assets/baixoColorido.svg'

import { PrincipalContainer, SectionCardFeed, SectionClick, SectionLike, TextBody, TextName } from '../style/StyleadCardFeed'
const CardDetalhes = (props) => {
    

    const commentsCard = props.dados && props.dados.map((comentarios) => {
      const UpVoteColored = () => {
        if (comentarios.userVote === 1) {
            return LikeGreen
        } else  {
            return Like

        }
    }

    const DownVoteColored = () => {
        if (comentarios.userVote === -1) {
            return dislikeRed
        } else {
            return dislike

        }
    }
        return (<SectionCardFeed key={comentarios.id}>
                <TextName>Enviado por: {comentarios.username}</TextName>
                <TextBody>{comentarios.body}</TextBody>
                <SectionClick>
                <SectionLike>
                  <button onClick={() => {props.like(comentarios.id)}}>
                    <img src={UpVoteColored()} alt="Like"/>
                  </button>
                <p>{comentarios.voteSum}</p>
                  <button onClick={() => {props.dislike(comentarios.id)}}>
                   <img src={DownVoteColored()} alt="Dislike"/>
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
