import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault/PageDefault';
import FormField from '../../../componentes/FormField/FormField';

function CadastroCategoria() {
  
    const valoresIniciais = {
      nome:'',
      descrição:'',
      cor:'',
    };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = (e) => {
    setValue(
     e.target.getAttribute('name'),
     e.target.value
    );
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form 
      onSubmit={(e) =>
        {e.preventDefault()
        setCategorias([
        ...categorias, values
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField 
        label='Nome da Categoria'
        type='text'
        name='nome'
        value={values.nome}
        onChange={handleChange}
        />


            <FormField 
        label='Descrição'
        type='textarea'
        name='descrição'
        value={values.descrição}
        onChange={handleChange}
        />


            <FormField 
        label='Cor'
        type='color'
        name='cor'
        value={values.cor}
        onChange={handleChange}
        />


        <button>
          Cadastrar
        </button>
        </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;