import styled from "styled-components";
import Gif from  "../../../src/estilizacao/imagens/AgPd.gif"

 export const Background =  styled.div `
  background-image: url(${Gif});
  background-size:cover;
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100%; `

 export const ButtonBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
button {
  color: purple;
  opacity: 0.6;
  width: 50%;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 50%;

  
}

button:hover {
  background-color: blue;
  color: yellow;
}

button:active  {
 background-color: purple;
 color: orange;
}

h1 {
  color: blueviolet;
}

  `