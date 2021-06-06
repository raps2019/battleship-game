import React, { useState, useContext, useEffect } from 'react';
import { store } from '../../StateProvider';
import * as Styled from './ShipPlacementGameboard.styles';

const ShipPlacementGameboard = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;
  const [orientation, setOrientation] = useState('xAxis');
  const [ hoveredGrids, setHoveredGrids ] = useState([])
  const [ships, setShips] = useState(playerGameboard.shipTypes)
   const [message, setMessage] = useState(
    `PLACE YOUR ${ships[0].type.toUpperCase()}`
  );

  const handleOnClick = ({ xCoord, yCoord }) => {
    const currentShip = ships[0].type;

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

  const handleOnMouseEnter = ({ xCoord, yCoord }) => {
    console.log('hovering')
    const currentShipLength = ships[0].length;
    
    const hovered = [];

    if ( orientation === 'xAxis') {
      for ( let i = 0; i < currentShipLength; i ++) {
        hovered.push( {xCoord: xCoord + i , yCoord})
      }
    } else if ( orientation === 'yAxis') {
      for ( let i = 0; i < currentShipLength; i ++) {
        hovered.push( {xCoord: xCoord, yCoord: yCoord + i})
      }
    }
    setHoveredGrids(hovered)
    console.log(hovered)
  }

  // const checkHoveredGrid = (grid) => {

  //   if (hoveredGrids.some( hoveredGrid => hoveredGrid.xCoord === grid.xCoord && hoveredGrid.yCoord === grid.yCoord )) {
  //     console.log('true')

  //     return true
  //   } else {
  //     console.log('false')

  //     return false
  //   }
    
  // }


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
    <Styled.ShipPlacementContainer>
      <Styled.MessageText>{message}</Styled.MessageText>
      <Styled.ToggleOrientationButton onClick={() => handleChangeOrientation()}>
        {orientation === 'xAxis' ? 'X-AXIS' : 'Y-AXIS'}
      </Styled.ToggleOrientationButton>
      <Styled.Gameboard>
        {playerGameboard.gameboardArray.map((grid, index) => (
          <Styled.Grid 
          key={index} 
          onClick={() => handleOnClick(grid)}
          onMouseEnter={() => handleOnMouseEnter(grid)}
          gridOccupied = {grid.shipPresent !== false ? true : null}
          gridHovered = {hoveredGrids.some( hoveredGrid => hoveredGrid.xCoord === grid.xCoord && hoveredGrid.yCoord === grid.yCoord) === true ? true : null}
          >
            {grid.xCoord} {grid.yCoord}
          </Styled.Grid>
        ))}
      </Styled.Gameboard>
    </Styled.ShipPlacementContainer>
  );
};

export default ShipPlacementGameboard;
