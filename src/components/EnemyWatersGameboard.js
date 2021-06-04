// import React from 'react';
// import * as Styled from './Gameboard.styles';

// const EnemyWatersGameboard = (props) => {
//   const { player, cpu, handlePlayerAttack } = props;

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
//       return 'lightblue';
//     }
//   };

//   return (
//     <Styled.GameboardContainer>
//       {cpu.gameboard.gameboardArray.map((grid) => (
//         <Styled.GameboardGrid
//           key={`x${grid.xCoord}y${grid.yCoord}`}
//           gridColor={gridColor(grid)}
//           onClick={() => handlePlayerAttack(grid.xCoord, grid.yCoord)}
//         ></Styled.GameboardGrid>
//       ))}
//     </Styled.GameboardContainer>
//   );
// };

// export default EnemyWatersGameboard;
