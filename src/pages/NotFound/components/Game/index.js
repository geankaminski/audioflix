import React from 'react';
import styled from 'styled-components';

const Page404 = styled.div`
  background: var(--black);
  min-height: 100vh;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
  & > iframe {
    overflow: hidden;
    border: none;
    margin-top: -40px;
`;



function Game(){
  return(
    <Page404>
    	<iframe
              title="AngryBirds"
              src="https://mariosouto.com/flappy-bird-devsoutinho/"
              width="340px"
              height="600px"
              scrolling="no"
              border="0"
            ></iframe>  
    </Page404>
    );
}



export default Game;