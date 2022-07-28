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
padding-left: 10px;
font-family: 'IBM Plex Sans', sans-serif;
font-style: normal;
background-color: #EDEDED;
border-radius: 12px;
width: 22.438rem;
margin-bottom: 1rem;`

export const InputBody = styled.input`
height:8.125rem;
border: none;
padding-left: 10px;
width: 22.438rem;
font-family: 'IBM Plex Sans', sans-serif;
font-style: normal;
background-color: #EDEDED;
border-radius: 12px;
margin-bottom: 2rem;` 

export const ButtonPost = styled.button`
width: 22.438rem;
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
margin-right: 0.6rem;
`