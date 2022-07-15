import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToLoginPage, goToHomePage } from '../routes/cordinator'
import Logo from "../assents/labexlogo.png"
import styled from 'styled-components'
import { HeaderStyled, Image, Center, Button } from '../Styled/styledHeader'


export default function Header() {
    const navigate = useNavigate()

  return (
    
    <HeaderStyled >
        <Image src={Logo} alt='Logo Foguetinho E Botão Home'/>
        <Center>
          <h1>LABE X</h1>
        </Center>
        <div>
        <Button onClick={() => goToLoginPage(navigate)}>Login</Button>
        <Button onClick={() => goToHomePage(navigate)}> Home </Button>
        </div>
    </HeaderStyled>

    
  )
}
