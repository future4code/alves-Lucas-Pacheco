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

const CardFeed = ({stateLike, setStateLike, dados, loading, erro}) => {
    
    // const {displayPosts, stateLike, setStateLike} = useContext(GlobalContext)
    // const [stateLike, setStateLike] = useState(false)

    const navigate = useNavigate()
    // const { dados, loading, erro } = useGetData(stateLike,"/posts")

    const likeAndDeslikePost = (id, choice) => {
        console.log(id)
        const body = {
            direction: choice
        }
        axios.put(`${BASE_URL}/posts/${id}/votes`, body, HEADER)
            .then((res) => {
                if (choice === +1) {
                    alert("Curtido")
                   
                } else {
                    alert("Descurtido")
                  
                  
                }
                setStateLike(!stateLike)
                
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleOnClick = (post, id) => {
        localStorage.setItem("post", JSON.stringify(post))
        goToPost(navigate, id)
    }

    const displayPosts = dados && dados.map((posts) => {
        return (<section key={posts.id}>
            <p>Enviado por: {posts.username}</p>
            <h3>{posts.body}</h3>
            <div>
                <button onClick={() => likeAndDeslikePost(posts.id, +1)}> like</button>
                <p>{posts.voteSum}</p>
                <button onClick={() => likeAndDeslikePost(posts.id, -1)}> Deslike</button>
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

    const finalDisplay = () => {
        if (loading) {
            return <img src={Cat} alt="Gatinho do Carregamento" />
        } else if (!loading && erro) {
            return <h4>Veja sua Conexão com seu computador</h4>
        } else if (displayPosts && displayPosts.length > 0) {
            return <div>{displayPosts}</div>
        } else {
            return <h1>Não existe Post Disponível crie o seu!</h1>
        }
    }


    return (
        <div>
            {finalDisplay()}
        </div>
    )

}

export default CardFeed