// import React from 'react';
// import * as Styled from './Gameboard.styles';

// const FriendlyWatersGameboard = (props) => {
//   const { player, cpu } = props;

//   const gridColor = (grid) => {
//     if (grid.isAttacked) {
//       if (grid.shipPresent) {
//         if (grid.sunkShipPresent) {
//           return 'maroon';
//         } else {
//           return 'red';
//         }
//       } else {
//         return 'blue';
//       }
//     } else {
//       if (grid.shipPresent) {
//         return 'grey';
//       } else {
//         return 'lightblue';
//       }
//     }
//   };

//   return (
//     <Styled.GameboardContainer>
//       {player.gameboard.gameboardArray.map((grid) => (
//         <Styled.GameboardGrid
//           key={`x${grid.xCoord}y${grid.yCoord}`}
//           gridColor={gridColor(grid)}
//         ></Styled.GameboardGrid>
//       ))}
//     </Styled.GameboardContainer>
//   );
// };

// export default FriendlyWatersGameboard;
