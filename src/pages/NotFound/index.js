import React from 'react';
import PageDefault from '../../components/PageDefault'
import Game from './components/Game';

function NotFound(){
	return(
		<PageDefault>
			<h1> Página não encontrada :{'('} </h1>
			<p>Verifique se o endereço digitado está correto e tente novamente. </p>
			<Game />
		</PageDefault>
		);
}


export default NotFound;