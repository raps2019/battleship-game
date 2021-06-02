import React from 'react';
import * as Styled from './Gameboard.styles';

const Gameboard = (props) => {
  const { player1 } = props;
  console.log(player1.gameboard.gameboardArray);

  

  return (
    <Styled.GameboardContainer>
      {player1.gameboard.gameboardArray.map((grid) => {
        if (grid.shipPresent) {
          if (grid.isAttacked) {
            if (grid.sunkShipPresent) {
              return <Styled.GameboardGridSunk></Styled.GameboardGridSunk>
            } else {
              return <Styled.GameboardGridHit></Styled.GameboardGridHit>;
            }
          } else {
            return <Styled.GameboardGridOccupied></Styled.GameboardGridOccupied>;
          }
        } else {
          if (grid.isAttacked) {
            return<Styled.GameboardGridMissed></Styled.GameboardGridMissed>;
          } else {
            return <Styled.GameboardGrid></Styled.GameboardGrid>;
          }
        }
      })}
    </Styled.GameboardContainer>
  );
};

export default Gameboard;
