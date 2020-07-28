import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  	<Switch>
  		<Route path="/cadastro/video" component={CadastroVideo} />
  		<Route path="/cadastro/categoria" component={CadastroCategoria} />
    	<Route path="/" component={Home} exact />
    	<Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


