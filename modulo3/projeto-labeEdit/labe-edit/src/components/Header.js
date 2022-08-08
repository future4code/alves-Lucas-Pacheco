import { useEffect } from "react"
import React  from 'react'
import { goToLogin, goBack } from "../routes/cordinator"
import { useNavigate } from "react-router-dom"
import Logo from '../assets/Logo2.svg'
import Logout from '../assets/Logout.svg'
import Fechar from '../assets/fechar.svg'
import Entrar from '../assets/Entrar.svg'
import { ImageEntrar, ImageHeader, SectionHeader, SectionHeader2, ImageGoBack, ImageHeader2 } from "../style/StyleadHeader"

export default function Header() {
    const navigate = useNavigate()
    
    const onClickClearCache = () => {
        localStorage.clear("token")
        goToLogin(navigate)
        alert("Você foi deslogado")
    }
     
    useEffect(() => {
        HeaderButton()
    }, [navigate])

    const HeaderButton = () => {
    if (window.location.pathname === "/Registro") {
        return (
            <SectionHeader>
            <ImageHeader src={Logo} alt="loguinho"/>
            <ImageEntrar src={Entrar} alt="Entrar" onClick={() => goToLogin(navigate)}/>
           </SectionHeader> 
        )
     
     } else if (window.location.pathname === "/") {
        return (
            <SectionHeader>
            <ImageHeader src={Logo} alt="loguinho" />
            <ImageEntrar  src={Logout} alt='Logout'onClick={onClickClearCache} />
           </SectionHeader> 
        )
     } else if (window.location.pathname.includes("/Postes")) {
        return (
            <SectionHeader2>
            <ImageGoBack src={Fechar} alt="Voltar" onClick={() => goBack(navigate)} />
            <ImageHeader2 src={Logo} alt="loguinho"/>
            <ImageEntrar src={Logout} alt="logout" onClick={onClickClearCache} />
           </SectionHeader2> 
        )
     } else {
        return (
            <>


            </>
        )
     }
  }
  return (
    <>
    {HeaderButton()}
    </>
  )
}
