import React from 'react';
import styled from 'styled-components';

const canvas = styled.canvas`
	border: 1px solid #000;
    display: block;
    margin: 0 auto;
`;

function Game(){
  return(
    <div>
    	<canvas id="game-canvas" width="320" height="480"></canvas>
    </div>
    );
}



export default Game;