import styled from "styled-components";

export const Image = styled.img`
width:85%;
height:19rem;
object-fit:cover, contain;
border-radius:0.6rem;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; margin-top:0.5rem;
margin-left: 0.3rem ;
`

export const SectionPeople = styled.section`
 display: flex;
 flex-direction: column;
 height: 550px;
 margin-left: 1.1rem;

p {
    font-size: 1rem;
    color: #905db3
}
`

export const SectionButton = styled.section`
display: flex;
justify-content: space-between;
height: 50px;
width: 280px;
border-top: 1px solid  rgb(196, 126, 242);
align-items: center;


Button {
   background-color: transparent;
   border: none;
}`

