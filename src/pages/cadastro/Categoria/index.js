import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
	return (
		<PageDefault>
			<h1>Página de cadastro de categoria</h1>

			<Link to="/">
				Ir para Home
			</Link>
		</PageDefault>
		)
}

export default CadastroCategoria;