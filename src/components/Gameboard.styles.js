import styled from 'styled-components/macro'

// const { gridStatus } = props;



export const GameboardContainer = styled.div`
padding: 25px;
display: grid;
height: 500px;
width: 500px;
grid-gap: 5px;
grid-template-columns: repeat( 10, 1fr );
`

export const GameboardGrid = styled.div`
border: black 1px solid;
background-color: ${props => props.gridColor};
`

// export const GameboardGridMiss = styled(GameboardGridBlank)`
// background-color: green;
// `

// export const GameboardGridHit = styled(GameboardGridBlank)`
// background-color: red;
// `

// export const GameboardGridSunk = styled(GameboardGridBlank)`
// background-color: maroon;
// `
// export const GameboardGridOccupied = styled(GameboardGridBlank)`
// background-color: grey;
// `