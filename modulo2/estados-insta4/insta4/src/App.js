import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
   pessoa: [
     {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150',
     },

     {
      nomeUsuario: 'Joao',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150',
     },

     {
      nomeUsuario: 'Lucas',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150 ',
     },
   
   
   
]


}

  render() {
    const listaDePost = this.state.pessoa.map((post) => {
      return <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}/> 


      
       
      
    })
    return (
      <MainContainer>
        {listaDePost}

      </MainContainer>
    );
  }
}

export default App;
