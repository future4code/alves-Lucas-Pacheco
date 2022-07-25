export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToregistry = (navigate) => {
    navigate("/Registro")
}

export const  goToFeed = (navigate) => {
    navigate('/Publicações')
}

export const goToPost = (navigate, id) => {
navigate(`/Postes/${id}`)
}


export const goBack = (navigate) => {
    navigate(-1)
}

