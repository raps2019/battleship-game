import React, { useState, useContext, useEffect } from 'react';
import { store } from '../../StateProvider';
import * as Styled from './ShipPlacementGameboard.styles';

const ShipPlacementGameboard = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;
  const [orientation, setOrientation] = useState('xAxis');
  const [ships, setShips] = useState(playerGameboard.shipTypes)
   const [message, setMessage] = useState(
    `PLACE YOUR ${ships[0].type.toUpperCase()}`
  );

  const handleOnClick = ({ xCoord, yCoord }) => {
    const currentShip = ships[0].type;
    const currentShipLength = ships[0].length

    if (
      !playerGameboard.isShipWithinBoundaries(
        currentShip,
        xCoord,
        yCoord,
        orientation
      )
    ) {
      alert('Out of bounds');
    } else if (
      playerGameboard.isShipAlreadyPresent(
        currentShip,
        xCoord,
        yCoord,
        orientation
      )
    ) {
      alert('Cells occupied by Ship');
    } else {
      playerGameboard.placeShip(currentShip, xCoord, yCoord, orientation);
      const shipsCopy = [...ships]
      shipsCopy.shift();
      setShips(shipsCopy)
    }
  };
  const handleChangeOrientation = () => {
    let newOrientation;
    if (orientation === 'xAxis') {
      newOrientation = 'yAxis';
    } else {
      newOrientation = 'xAxis';
    }
    setOrientation(newOrientation);
  };

  useEffect(() => {
    setMessage(`PLACE YOUR ${ships[0].type.toUpperCase()}`)
  }, [ships])

  return (
    <div>
      <Styled.MessageText>{message}</Styled.MessageText>
      <Styled.ToggleOrientationButton onClick={() => handleChangeOrientation()}>
        {orientation === 'xAxis' ? 'X-AXIS' : 'Y-AXIS'}
      </Styled.ToggleOrientationButton>
      <Styled.Gameboard>
        {playerGameboard.gameboardArray.map((grid, index) => (
          <Styled.Grid 
          key={index} 
          onClick={() => handleOnClick(grid)}
          gridColor = {
            grid.shipPresent !== false
            ? 'red'
            : 'black'
          }
          >
            {grid.xCoord} {grid.yCoord}
          </Styled.Grid>
        ))}
      </Styled.Gameboard>
    </div>
  );
};

export default ShipPlacementGameboard;
