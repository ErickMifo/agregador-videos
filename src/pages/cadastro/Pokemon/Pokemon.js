import React from 'react';
import PageDefault from '../../../componentes/PageDefault/PageDefault'
import { Link } from 'react-router-dom'

const cadastroPokemon = () => {
    return (
        <PageDefault>
            <h1> cadastro de Pokemon </h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default cadastroPokemon;