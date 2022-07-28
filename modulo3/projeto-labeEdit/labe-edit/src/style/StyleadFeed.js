import styled from "styled-components";

export const DisplayForms = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 145px;

`


export const InputTitle = styled.input`
height: 2.188em;
border: none;
padding-left: 1rem;
font-family: 'IBM Plex Sans', sans-serif;
font-style: normal;
background-color: #EDEDED;
border-radius: 12px;
width: 21rem;
margin-bottom: 1rem;
margin-left: 0.5rem;
 `

export const InputBody = styled.textarea`
height:8.125rem;
border: none;
padding-left: 10px;
width: 22rem;
font-family: 'IBM Plex Sans', sans-serif;
font-style: normal;
background-color: #EDEDED;
border-radius: 12px;
margin-bottom: 0.5rem;
margin-left: 0.7rem;` 

export const ButtonPost = styled.button`
width: 22rem;
height: 2.938rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
border-radius: 12px;
border: none;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #FFFFFF;
margin-left: 0.5rem;
`

export const LineIMG = styled.img`
margin-top: 2%;
margin-bottom: 2%;
margin-left: 2%;
`