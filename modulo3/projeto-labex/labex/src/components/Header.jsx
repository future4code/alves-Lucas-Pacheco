import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToLoginPage, goToPreviousPage, goToHomePage } from '../routes/cordinator'
import Logo from "../assents/labexlogo.png"
import styled from 'styled-components'


 const HeaderStyled = styled.div`
 display: flex;
 justify-content:space-between;
 background-color: #52c0D9;
 width:100%;
 height:15vh;
 align-items: center; `

 const Image = styled.img`
 width:6.5rem;
 height: 6.5rem;
 margin-left: 0.5rem;
 ` 
const Center = styled.div`
text-align:center;

h2{
  padding-left:6rem ;
  color: #3f488C;
}`

const Button = styled.button`
height: 3rem;
width: 5rem;
color: blue;
border-radius: 1rem;
hover {
  color: greenyellow;
}
margin-left: 0.3rem;
`

export default function Header() {
    const navigate = useNavigate()

  return (
    
    <HeaderStyled >
        <a onClick={() => goToHomePage(navigate)}><Image src={Logo} alt='Logo Foguetinho E Botão Home'/></a>
        <Center>
          <h2 pl='6rem' color='teal.400'>LABE X</h2>
        </Center>
        <div>
        <Button onClick={() => goToLoginPage(navigate)}>Login</Button>
        <Button onClick={() => goToHomePage(navigate)}> Home </Button>
        <Button nClick={() => goToPreviousPage(navigate)}>Voltar</Button>
        </div>
    </HeaderStyled>

    
  )
}
