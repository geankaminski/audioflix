import React from 'react';

function ButtonLink(props){
	// props = { className: "classe", href: "endereço", children: "conteúdo"}  > Menu
	return(
		<a href={props.href} className={props.className}>
			{props.children}
		</a>
		)
}

export default ButtonLink;