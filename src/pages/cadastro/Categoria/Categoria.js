import React from 'react';
import PageDefault from '../../../componentes/PageDefault/PageDefault'
import { Link } from 'react-router-dom'

const cadastroCategoria = () => {
    return (
        <PageDefault>
            <h1> Cadastro de categoria </h1>

            <Link to="/">
                Ir para a Home
            </Link>
        </PageDefault>
    );
}

export default cadastroCategoria;