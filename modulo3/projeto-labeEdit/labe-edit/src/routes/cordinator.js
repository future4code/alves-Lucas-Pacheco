export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToregistry = (navigate) => {
    navigate("/Registro")
}

export const  goToFeed = (navigate) => {
    navigate('/')
}

export const goToPost = (navigate, id) => {
navigate(`/Postes/${id}`)
}


export const goBack = (navigate) => {
    navigate(-1)
}

