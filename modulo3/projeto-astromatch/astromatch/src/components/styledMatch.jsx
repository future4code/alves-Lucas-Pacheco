import styled from "styled-components";

export const ScrollCard = styled.section`
height: 300px;
width: 95%;
margin-top: 0.5rem;
overflow-y: scroll;

&::-webkit-scrollbar {
  width: 0.5rem;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;

}

&::-webkit-scrollbar-thumb {
  background-color: rgb(196, 126, 242);
  border-radius: 1rem;
}
`

 export const ContainerMatches = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-height: 250px;
height: 3.5rem;
width:300px;
border-radius: 1rem;
border: 1px solid rgb(206, 133, 255);
margin-left: 2%;
margin-top: 2%;

img {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-left: 2%;
}

p {
  font-size: 1rem;
  color: #905db3 ;
  margin-right: 2%;
}`