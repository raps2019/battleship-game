import styled from 'styled-components/macro'


export const GameboardContainer = styled.div`
display: grid;
height: 500px;
width: 500px;
grid-gap: 5px;
grid-template-columns: repeat( 10, 1fr );
`

export const GameboardGrid = styled.div`
border: black 1px solid;
background-color: lightblue;
`

export const GameboardGridMissed = styled(GameboardGrid)`
background-color: green;
`

export const GameboardGridHit = styled(GameboardGrid)`
background-color: red;
`
export const GameboardGridOccupied = styled(GameboardGrid)`
background-color: grey;
`