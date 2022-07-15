import styled from 'styled-components'
import ImageHome from '../assents/HomePage.png'

export const PaginaHome = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 1110px;
 position: absolute;
 background-image: url(${ImageHome}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 object-fit: cover, contain;
`

export const SectionPage = styled.section`
display: grid;
justify-items: center;
justify-content: center;
grid-template-columns:400px;
grid-template-rows: 50px 500px;
margin-right: 8%;

h1 {
 color: #52C0D9;
}
`

export const ContainerButton = styled.section`
display: flex;
flex-direction:column;
justify-content: space-around;
width: 150px;
height: 60px;
padding-top: 450px;`

export const Button  = styled.button`
height: 3rem;
width: 12rem;
color: #52C0D9;
border-radius: 1rem;
margin-bottom: 2%;
:hover {
  color: #F2F2F2;
  background-color: #4478A6;
}`
