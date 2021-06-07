import styled from 'styled-components/macro'
import { Button } from '../../GlobalStyles'

export const Form = styled.form`
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100%;
  transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);

&.css-transition--appear {
  transform: scale(0);
}

&.css-transition--appear-active {
  transform: scale(1);
}

&.css-transition--appear-done {
  transform: scale(1);
}

&.css-transition--enter {
  transform: rotateX(90deg);
  opacity: 0;
}

&.css-transition--enter-active {
}

&.css-transition--enter-done {
}

&.css-transition--exit {
  transform: scale(1);
}

&.css-transition--exit-active {
  transform: scale(0);
}

&.css-transition--exit-done {
  transform: scale(0);
}
`

export const Label = styled.label`
font-family: 'Russo One', sans-serif;
letter-spacing: 5px;
font-size: 1.8rem;
color: white;
`

export const Input = styled.input`
font-family: 'Istok Web', sans-serif;
font-size: 2rem;
margin: 30px 0 50px 0;
color: white;
text-align: center;
border-radius: 0.5rem;
background: none;
box-shadow: 0 0 15px 5px transparent;
border: darkorange 1px solid;
padding: 10px 20px;
transition: all 0.3s ease-in-out;

&:hover {
	/* transition: box-shadow 0.3s ease-in-out; */
	box-shadow: 0 0 15px 5px darkorange;
	border: 1px solid darkorange;
}

&:focus {
  /* transition: box-shadow 0.3s ease-in-out; */
	box-shadow: 0 0 15px 5px darkorange;
	border: 1px solid darkorange;
  outline: none;
}
`
export const SubmitButton = styled(Button)`

&:hover {

}
`

// .btn-design3 {
// 	margin: 16px auto;
// 	padding: 16px;
// 	color: #fff !important;
// 	overflow: hidden;
// 	position: relative;
// 	background: none;
// 	box-shadow: 0 0 0 0 #22AFCA;
// 	border: 1px solid #22AFCA;
// }
// .btn-design3::after {
//  background: #0c75d7 none repeat scroll 0 0;
//  content: "";
//  height: 155px;
//  left: -75px;
//  opacity: 0.2;
//  position: absolute;
//  top: -50px;
//  transform: rotate(35deg);
//  transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
//  width: 50px;
//  z-index: 10000000000000000000000;
// }
// .btn-design3:hover {
// 	transition: all 0s ease-in-out 0s;
// 	box-shadow: 0 0 5px 0 #0c75d7;
// }
// .btn-design3:hover::after {
//  left: 120%;
//  background: #0c75d7;
//  transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
// }
