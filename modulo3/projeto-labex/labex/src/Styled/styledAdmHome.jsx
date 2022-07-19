import styled from "styled-components";
import ImageAdm from "../assents/AdminHome.jpg"

export const PaginaAdm = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 800px;
 position: absolute;
 background-image: url(${ImageAdm}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center; 
 object-fit: cover, contain;
`

export const DivAdm = styled.section`
 display: flex;
 box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
 padding: 10px 20px;
 border-radius: 4px;
 margin: 10px 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 460px;
:hover {
    background-color: rgb(180, 18, 126);

    }
`

export const DivName = styled.div`
color: #52C0D9;`


export const ButtonDelete = styled.button`
background-color: transparent;
border: none;`

export const Image = styled.img`
height: 3rem;
width: 3rem;
`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin-top: 10px;
    margin-bottom: 10px;` 


export const ButtonList = styled.button`
height: 3rem;
width: 8rem;
color: #3f488C;
border-radius: 0.8rem;
:hover {
  color: #F2F2F2;
  background-color: #4478A6;
}
margin-left: 0.3rem;
`

export const H1 = styled.h1`
text-align:center;
color:#52C0D9; `