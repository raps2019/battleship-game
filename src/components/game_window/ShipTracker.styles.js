import styled from 'styled-components/macro';

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
row-gap: 5px;
`;

export const RowContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 0 10px;
`;

export const SquaresContainer = styled.div`
display: flex;
gap: 5px;
`

export const Square = styled.div`
height: 10px;
width: 10px;
background-color: ${(props) => ( props.showHits === true && props.sectorHit === true ? 'red' : 'white')};
background-color: ${(props) => (props.shipSunk === true ? 'maroon' : null)};
opacity: 0.6;
`
export const Text = styled.p`
font-family: 'Cairo', sans-serif;
font-size: 12px;
letter-spacing: 0.3rem;
color: whitesmoke;
text-decoration: ${(props) => (props.shipSunk === true ? 'line-through' : null)};
`;

export const Heading = styled.h5`
font-family: 'Cairo', sans-serif;
font-size: 14px;
letter-spacing: 0.3rem;
color: whitesmoke;
`;