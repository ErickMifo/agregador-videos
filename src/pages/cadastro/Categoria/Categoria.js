import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault/PageDefault';
import FormField from '../../../componentes/FormField/FormField';
import Button from '../../../componentes/Button/Button';
import useForm from '../../../componentes/hooks/useForm';

function CadastroCategoria() {
  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://agregador-videos.herokuapp.com/categorias';

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const history = useHistory();

  async function handleNewcategoria(e) {
    e.preventDefault();

    await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    setCategorias([...categorias, values]);
    history.push('/');
    clearForm();

  }

  useEffect(() => {
    fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          setCategorias(result);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <div>
        <h1>
          Cadastro de Categoria:
          {values.titulo}
        </h1>

        <form onSubmit={handleNewcategoria}>

          <FormField
            label="Titulo da Categoria"
            name="titulo"
            type="text"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            name="descricao"
            type="textarea"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>Cadastrar</Button>
        </form>
      </div>

      <div className="container">

        <h1>Categorias cadastradas</h1>

        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.titulo}>
              <p>{categoria.titulo}</p>

            </li>
          ))}

        </ul>
      </div>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
