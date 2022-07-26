import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useNavigate, useParams } from 'react-router-dom'
import CardDetalhes from '../components/CardDetalhes'
import CardCreatePost from '../components/CardCreatePost'
import { useGetData } from '../hooks/useGetData'

const PostPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    useProtectedPage()
    const { dados, loading, erro } = useGetData("/posts")
    const displayPost = dados && dados.find(post => post.id === params.id)

    const displayPostFinale = displayPost && displayPost.map((post) => {
     return (
        <section key={post.id}>
            <p>Enviado por: {post.username}</p>
            <h4>{post.title}</h4>
            <h3>{post.body}</h3>
            </section>
     )
    })

    

    
  return (
    <div>
        <CardCreatePost params={params.id} />
        <CardDetalhes params={params.id}/>
    </div>
  )
}
export default PostPage