import styled from "styled-components";
import ImageListTrip from '../assents/ListTrip.png'

export const PaginaListTrip = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 1110px;
 position: absolute;
 background-image: url(${ImageListTrip}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 object-fit: cover, contain;
`

export const DivTrip = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
box-shadow: rgb(206, 133, 255) 0px 4px 8px 0px;
padding: 10px 20px;
border-radius: 4px;
margin: 10px 0px;
max-width: 500px;
width: 100%;
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #52c0D9;
}

b {
    color: white;
}
`

export const ContainerButtonsList = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 50px 0px 10px;`

export const ButtonListTrip = styled.button`
height: 3rem;
width: 10rem;
color: #52C0D9;
border-radius: 1rem;
align-items: center;
:hover {
  color: #F2F2F2;
  background-color: #4478A6;
}
margin-left: 0.3rem;
`