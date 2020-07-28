import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import cadastroPokemon from './pages/cadastro/Pokemon/Pokemon';
import cadastroCategoria from './pages/cadastro/Categoria/Categoria';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cadastro/pokemon' component={cadastroPokemon} />
    <Route path='/cadastro/categoria' component={cadastroCategoria} />
    <Route component={() => (<h1> pagina 404 </h1>)} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

