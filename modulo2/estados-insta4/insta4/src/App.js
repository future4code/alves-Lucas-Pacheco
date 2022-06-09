import { findByLabelText } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-bottom: 3%;

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
   
   
   
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""


}

adicionaPost = () => {

  const preparacaoDoPost = {
    nomeUsuario: this.state.valorInputNome,

    fotoUsuario: this.state.valorInputFotoUsuario,

    fotoPost: this.state.valorInputFotoPost
  }

  const novoPost = [...this.state.pessoa, preparacaoDoPost]
   
  this.setState({
    pessoa: novoPost,
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  })

}
  onChangeInputNome = (event) => {
    this.setState({
      valorInputNome: event.target.value
    })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({
      valorInputFotoUsuario: event.target.value
    })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({
      valorInputFotoPost: event.target.value
    })
  }



  render() {
    const listaDePost = this.state.pessoa.map((post, indice) => {
      return <Post key={indice}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}/>   
      
    })
    return (
      <MainContainer>

        <h1> Criação de Post</h1>
       
       <Formulario>
         

         <input
         value= {this.state.valorInputNome}
         onChange={this.onChangeInputNome}
         placeholder={"Nome Usuario"} />

        <input
         value= {this.state.valorInputFotoUsuario}
         onChange={this.onChangeInputFotoUsuario}
         placeholder={"Link Foto Usuário"} />

        <input
         value= {this.state.valorInputFotoPost}
         onChange={this.onChangeInputFotoPost}
         placeholder={"Link Foto do Post"} />

         <button onClick={this.adicionaPost}>Adicionar</button>
                  
        </Formulario>
             
        {listaDePost}

      </MainContainer>
    );
  }
}

export default App;
