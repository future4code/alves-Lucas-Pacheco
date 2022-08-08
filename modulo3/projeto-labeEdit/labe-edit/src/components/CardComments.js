import React, {useState, useEffect} from 'react'
import { PrincipalContainer, SectionCardFeed, SectionClick, SectionLike, SecttionComment, TextBody, TextName } from '../style/StyleadCardFeed'
import UpVote from '../assets/cima.svg'
import Downvote from '../assets/baixo.svg'
import comentario from '../assets/comentarios.svg'

 const CardComments = () => {
 const [post, setPost] = useState({})
  
 useEffect(() => {
    const postLocal = JSON.parse(localStorage.getItem("post"))
    postLocal && setPost(postLocal)
  },[])

  return (
    <PrincipalContainer>
      <SectionCardFeed key={post.id}>
            <TextName>Enviado por: {post.username}</TextName>
            <TextBody>{post.body}</TextBody>
            <SectionClick>
                <SectionLike>
                <button > <img src={UpVote}  alt="like"/></button>
                <p>{post.voteSum}</p>
                <button > <img  src={Downvote} alt="Dislike"/></button>
                </SectionLike>
            
            <SecttionComment >
                <img src={comentario} alt="Caixinha de Comentario"/>
                <p>{post.comentCount}</p>
            </SecttionComment>
            </SectionClick>
        </SectionCardFeed>
        </PrincipalContainer>
  )
}

export default CardComments