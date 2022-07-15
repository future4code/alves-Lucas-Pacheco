import styled from 'styled-components'


 export const HeaderStyled = styled.div`
 display: flex;
 justify-content:space-between;
 background-color: #52c0D9;
 width:100%;
 height:15vh;
 align-items: center; `

 export const Image = styled.img`
 width:6rem;
 height: 6rem;
 margin-left: 0.5rem;
 ` 
export const Center = styled.div`
text-align:center;

h1{
  padding-left:6rem ;
  color: #3f488C;
}`

export const Button = styled.button`
height: 3rem;
width: 5rem;
color: #52C0D9;
border-radius: 1rem;
:hover {
  color: #F2F2F2;
  background-color: #4478A6;
}
margin-left: 0.3rem;
`