import styled from "styled-components";

export const ContainerPrincipal = styled.div `
display: flex;
flex-direction: Column;
justify-content: center;
align-items: center;
background-color: lightcyan;

`

 export const  ContainerSongs = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border: 2px orange solid;
background-color: lightcyan;
border-radius: 1rem;
margin-bottom: 0.5%;

h1 {
   color: pink;
   text-align: center;
   font-size: 1.4rem;
}

h4 {
   color: purple;
   text-align: center;
   font-size: 1.3rem;
}

button {
   margin-right: -3%;
   background-color: lightblue;
   font-size: 1rem;
   text-align: center;
   align-items: center;
   margin-top: 3%;
   width: 20%;
   font-size: 1.3rem;
   border-radius: 1rem;

}
button:hover {
   background-color: purple;
   color: red;
}
button:active {
   background: lightyellow;
   color: darkblue;
}
audio {
   align-items: center;
}
`


 export const  ContainerInicial = styled.div `
color: pink;
text-align:center;

button {
   background-color: lightblue;
   border: 1px solid black;
   border-radius: 1rem;
   font-size: 1rem;

}

button:hover {
   background-color: pink;
   color: red;
}

p {
    color: purple;
    font-size: 1.2rem;
}`

 export const ContainerAdicionarMusica = styled.div `
background-color: lightcyan;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 2rem;
margin-bottom: 2%;

h1 {
   text-align: center;
   color: pink;
}

input {
background-color: lightcyan;
margin-bottom: 3%;
font-size: 1rem;

}
button {
   margin-right: 2%;
   background-color: lightblue;
   font-size: 1.5rem;
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

 export const InformationAdd = styled.div `
 text-align:center;
 border : 1px solid orange;
 border-radius: 1rem;
 h3 {
   color: pink;
   font-size: 1.5rem;
 }
 
 p {
   color: purple;
   font-size: 1.2rem;
 }`

 export const DivLarge = styled.div `
background-color: lightcyan;
height: 100%;
`