import React, { useState, useEffect } from 'react'
import { useGetData } from '../hooks/useGetData'
import useForm from '../hooks/useForm'
import { BASE_URL, HEADER } from '../constants/credentiais'
import { useNavigate } from 'react-router-dom'
import Cat from '../assets/cat.gif'
import { goToPost } from '../routes/cordinator'
import axios from 'axios'
import { useContext } from 'react'
import GlobalContext from '../global/GlobalContext'
import { PrincipalContainer, SectionCardFeed, SectionClick, SectionLike, SecttionComment, TextBody, TextName, ScrollCard } from '../style/StyleadCardFeed'
import UpVote from '../assets/cima.svg'
import Downvote from '../assets/baixo.svg'
import comentario from '../assets/comentarios.svg'
import UpVoteGreen from '../assets/cimaColorido.svg'
import DownVoteRed from '../assets/baixoColorido.svg'


const CardFeed = ({ stateLike, setStateLike, dados, loading, erro, like, dislike }) => {


    const navigate = useNavigate()



    const handleOnClick = (post, id) => {
        localStorage.setItem("post", JSON.stringify(post))
        goToPost(navigate, id)
    }

    const displayPosts = dados && dados.map((posts) => {
        const UpVoteColored = () => {
            if (posts.userVote === 1) {
                return UpVoteGreen
            } else  {
                return UpVote

            }
        }

        const DownVoteColored = () => {
            if (posts.userVote === -1) {
                return DownVoteRed
            } else {
                return Downvote

            }
        }
        return (<SectionCardFeed key={posts.id}>
            <TextName>Enviado por: {posts.username}</TextName>
            <TextBody>{posts.body}</TextBody>
            <SectionClick>
                <SectionLike>
                    <button onClick={() => like(posts.id)}> <img src={UpVoteColored()} alt="like" /></button>
                    <p>{posts.voteSum}</p>
                    <button onClick={() => dislike(posts.id)}> <img src={DownVoteColored()} alt="Dislike" /></button>
                </SectionLike>

                <SecttionComment onClick={() => { handleOnClick(posts, posts.id) }}>
                    <img src={comentario} alt="Caixinha de Comentario" />
                    <p>{posts.comentCount}</p>
                </SecttionComment>
            </SectionClick>
        </SectionCardFeed>
        )
    })

    



    return (
        <PrincipalContainer>

            {displayPosts}

        </PrincipalContainer>
    )

}

export default CardFeed