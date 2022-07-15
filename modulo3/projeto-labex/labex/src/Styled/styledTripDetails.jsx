import styled from "styled-components";
import ImageDetails from '../assents/TripDetails.png'

export const PaginaDetails = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 800px;
 position: absolute;
 background-image: url(${ImageDetails}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center; 
 object-fit: cover, contain;
`

export const DivDetails  =  styled.div`
    padding: 10px 20px;
    border-radius: 4px;
    margin: 15px 0px;
    max-width: 500px;
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #52C0D9;   
}

b {
    color: White;
    margin-right: 1%;
}`

export const ButtonDetails  = styled.button`
height: 2rem;
width: 12rem;
color: #52C0D9;
border-radius: 1rem;
margin-bottom: 2%;
align-items: center;
:hover {
  color: #F2F2F2;
  background-color: #4478A6;
}`
