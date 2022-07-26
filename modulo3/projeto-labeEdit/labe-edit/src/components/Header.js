import { useEffect } from "react"
import React  from 'react'
import { goToLogin, goBack } from "../routes/cordinator"
import { useNavigate } from "react-router-dom"

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
            <>
            <img />
            <button onClick={() => goToLogin(navigate)}>Entrar</button>
           </> 
        )
     
     } else if (window.location.pathname === "/") {
        return (
            <>
            <img />
            <button onClick={onClickClearCache}>Logout</button>
           </> 
        )
     } else if (window.location.pathname === "/Postes/:id") {
        return (
            <>
            <button onClick={() => goBack(navigate)}>X</button>
            <img />
            <button onClick={onClickClearCache}>Logout</button>
           </> 
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
