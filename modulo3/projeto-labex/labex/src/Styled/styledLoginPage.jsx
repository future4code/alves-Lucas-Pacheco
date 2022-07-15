import styled from 'styled-components'
import ImageLogin from '../assents/LoginPage.jpg'

export const PaginaLogin = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 800px;
 position: absolute;
 background-image: url(${ImageLogin}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center; 
 object-fit: cover, contain;
`

export const DivLogin = styled.div`
 display: flex;
 justify-content:center;
 align-items: center;
 flex-direction: column;
 height: 100%;
 width: 100%;
 max-width: 400px;
 max-height: 800px;
 border: 1px rgb(206, 133, 255) solid;
 border-radius: 10px;
 box-shadow: 5px 5px 7px 5px rgb(206, 133, 255);
 margin-top: 2%;`

 export const FormContainer = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;` 

export const ContainerTituloCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 40%;
`

export const Title = styled.h1` color: #52c0D9; 
`

export const InputForm = styled.input`
height: 1rem;
width: 350px;
border: 1px solid rgb(206, 133, 255);
border-radius: 1rem;
padding: 8px;
font-size: 16px;
margin-bottom: 5%;

`

export const ButtonForm = styled.button`
height: 3rem;
width: 5rem;
color: #52C0D9;
border-radius: 1rem;
margin-bottom: 1rem;
:hover {
  color: #F2F2F2;
  background-color: #4478A6;
}

`