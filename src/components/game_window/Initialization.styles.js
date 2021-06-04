import styled from 'styled-components/macro'

export const Form = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100%;
`

export const Label = styled.label`
font-family: 'Istok Web', sans-serif;
font-size: 2rem;
color: white;
`

export const Input = styled.input`
font-family: 'Istok Web', sans-serif;
font-size: 2rem;
margin: 30px 0;
background: none;
border: none;

border: solid 10px transparent;
background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
background-origin: border-box;
background-clip: content-box, border-box;
box-shadow: 2px 1000px 1px #fff inset;
transition: all 300ms ease-in-out;

&:focus {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #fa709a 0%, #fee140 100%);
  outline: none;
}
`


// background-image: ;

export const SubmitButton = styled.button`
font-family: 'Istok Web', sans-serif;
font-size: 1.5rem;
/* border-radius: 100rem; */
padding: 0.25rem 0.75rem;
box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
border: solid 3px transparent;
background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #78e4ff, #ff48fa);
background-origin: border-box;
background-clip: content-box, border-box;
box-shadow: 2px 1000px 1px #fff inset;
transition: all 300ms ease-in-out;

&:hover {
  box-shadow: none;
  color: white;
}
`
