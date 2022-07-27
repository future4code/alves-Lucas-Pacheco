import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL, HEADER } from '../constants/credentiais'
import { useGetData } from '../hooks/useGetData'
const CardDetalhes = (props) => {
    

    const commentsCard = props.dados && props.dados.map((comentarios) => {
        return (
            <div key={comentarios.id}>
                <p>Enviado por {comentarios.username}</p>
                <p>{comentarios.body}</p>
                <p>{comentarios.voteSum}</p>

            </div>
        )
    })
  return (
    <div>{commentsCard}</div>
  )

}

export default CardDetalhes
