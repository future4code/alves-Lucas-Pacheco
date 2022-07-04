import styled from 'styled-components'

export const DivFather = styled.div `
background-color: lightcyan;
height: 100%;
width: 100%;`

 export const ContainerPrincipal = styled.div `
 display: flex;
 flex-direction: Column;
 justify-content: center;
 align-items: center;
 background-color: lightcyan;
 
 `
 export const ContainerInputs = styled.div `
 border-radius: 1rem;
 border: 1px solid orange;
 margin-top: 3%;
 margin-bottom: 3%;
 background-color: lightcyan;
 li {
    margin-top: 2%;
    margin-bottom: 5%;
    color: purple;
    font-size: 1.5rem ;
    text-align: center;
    
 }
`

 export const ContainerInputsButton = styled.div `
display: flex;
flex-direction: column;
button {
    margin-right: 2%;
    background-color: lightblue;
    font-size: 1rem;
    text-align: center;
    align-items: center;

 }
 button:hover {
    background-color: purple;
    color: red;
 }
 button:active {
    background: lightyellow;
    color: darkblue;
 }`

 export const ViewPlaylist = styled.div `
 border: 3px solid orange;
 border-radius: 1rem;
 background-color: lightcyan;
 h1 {
    color: lightpink;
    text-align: center;
 }

 p {
    font-size: 2rem;
    text-align: center;
    color: purple
 }
 `

  export const ContainerPlaylist = styled.div `
 background-color: lightcyan;
 display: flex;
 flex-direction: column;
 justify-content: center;
 font-size: 2rem;

h2 {
    color: purple;
    text-align: center;
 }
 
label {
    display: none;
}

input {
 background-color: orange;
 margin-bottom: 3%;

}`