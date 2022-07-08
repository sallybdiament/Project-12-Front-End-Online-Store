import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

class Search extends React.Component {
  state = {
    search: '',
    produtos: [],
  }

  onHandleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  handleClick = async () => {
    const { search } = this.state;
    const objeto = await getProductsFromCategoryAndQuery(null, search);
    const produtos = objeto.results;
    this.setState({ produtos });
  }

  render() {
    const { search, produtos } = this.state;
    return (
      <div>
        <label htmlFor="search">
          Buscar:
          <input
            id="search"
            name="search"
            type="text"
            value={ search }
            onChange={ this.onHandleChange }
            data-testid="query-input"
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Buscar
        </button>
        {produtos.map((produto) => (
          <div key={ produto.id }>
            <Card
              nome={ produto.title }
              imagem={ produto.thumbnail }
              preco={ produto.price }
              produtoId={ produto.id }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
