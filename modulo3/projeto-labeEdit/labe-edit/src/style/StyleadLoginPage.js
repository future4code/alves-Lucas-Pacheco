import styled from "styled-components";

export const ImageLogin = styled.div`
display:flex;
justify-content: center;
flex-direction: column;

align-items: center;
margin-top: 5rem;
position: relative;
img{
    width: 10rem;
    height: 12rem;
}
@media (max-width: 480px) {
    margin-top: 89px;
    img{
        width: 152px;
        height: 142px;
    }
    p{
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 300;
        font-size: 16px;
        align-items: center;
    }
    
}`

export const DivForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0.813rem 8.313rem;

label{
    display: none;
}

form{
    padding-top: 5.5rem;
}

input{
    width: 18rem;
    height: 3.75rem;
    margin-top: 2%;
    border-radius: 4px;
    border: 1px solid #D5D8DE;
    font-weight: 400;
    font-size: 16px;
    color: #323941;
    opacity: 0.8;
    margin-top: 0.5rem;

}

button {
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 2rem;
    width: 18rem;
    height: 3rem;
    margin-top: 10%;
    color: white;
    border:none;
}
`

export const LineImg = styled.img`
margin-left: 1.5%`


export const ButtonForm = styled.button`
background: white;
border-radius: 2rem;
width: 18rem;
height: 3rem;

margin-left: 11%;
margin-top: 5%;
color: #FE7E02;
border: #FE7E02 1px solid;
`