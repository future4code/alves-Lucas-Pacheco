import styled from 'styled-components'
import ImageCreate from '../assents/ImagemCreate.png'

export const PaginaCreate = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 800px;
 position: absolute;
 background-image: url(${ImageCreate}) ;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center; 
 object-fit: cover, contain;
`

export const FormCreate = styled.form`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;`

export const InputForm = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;`

export const ContainerButtonsCreate = styled.div`
display: flex;
justify-content: space-around;
width: 500px;
margin-top: 10px;
margin-bottom: 10px;` 