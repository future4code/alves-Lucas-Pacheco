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

const CardFeed = ({stateLike, setStateLike, dados, loading, erro, like, dislike}) => {
    
    // const {displayPosts, stateLike, setStateLike} = useContext(GlobalContext)
    // const [stateLike, setStateLike] = useState(false)

    const navigate = useNavigate()
    // const { dados, loading, erro } = useGetData(stateLike,"/posts")

    

    const handleOnClick = (post, id) => {
        localStorage.setItem("post", JSON.stringify(post))
        goToPost(navigate, id)
    }

    const displayPosts = dados && dados.map((posts) => {
        return (<section key={posts.id}>
            <p>Enviado por: {posts.username}</p>
            <h3>{posts.body}</h3>
            <div>
                <button onClick={() => like(posts.id)}> like</button>
                <p>{posts.voteSum}</p>
                <button onClick={() => dislike(posts.id)}> Deslike</button>
            </div>
            <div onClick={() => { handleOnClick(posts, posts.id) }}>
                <img />
                <p>comentários
                    {posts.comentCount}
                </p>
            </div>
        </section>
        )
    })




    return (
        <div>
            {displayPosts}
        </div>
    )

}

export default CardFeed