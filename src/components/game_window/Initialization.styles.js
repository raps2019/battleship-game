import styled from 'styled-components/macro';
import { Button } from '../../GlobalStyles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5%;
  height: 100%;

  @media only screen and (min-device-width: 540px) and (max-device-width: 1024px) {
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 540px) {
  }
`;

export const Label = styled.label`
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0.3rem;
  font-weight: 600;
  font-size: 16px;
  color: whitesmoke;
`;

export const Input = styled.input`
  font-family: 'Cairo', sans-serif;
  font-size: 15px;
  letter-spacing: 0.3rem;
  /* margin: 30px 0 50px 0; */
  color: white;
  text-align: center;
  border-radius: 0.5rem;
  background: none;
  box-shadow: 0 0 15px 5px transparent;
  border: darkorange 1px solid;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
  width: 250px;

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
`;
export const SubmitButton = styled(Button)`
  &:hover {
  }
`;
