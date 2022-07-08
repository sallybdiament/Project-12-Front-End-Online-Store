import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategory } from '../services/api';
import Card from './Card';

class ItemCategory extends React.Component {
  state = {
    cartProduto: [],
  }

  handleClick = async (event) => {
    const categoryName = event.target.id;
    const objeto = await getProductsFromCategory(categoryName);
    const cartProduto = objeto.results;
    console.log(objeto);
    this.setState({ cartProduto });
  }

  render() {
    const { name, categoryId } = this.props;
    const { cartProduto } = this.state;
    return (
      <div>
        <label htmlFor="category">
          <input
            data-testid="category"
            type="button"
            value={ name }
            id={ categoryId }
            onClick={ (event) => {
              this.handleClick(event);
            } }
          />
        </label>
        {cartProduto.map((produto) => (
          <div key={ produto.id }>
            <Card
              nome={ produto.title }
              imagem={ produto.thumbnail }
              preco={ produto.price }
            />
          </div>
        ))}
      </div>
    );
  }
}

ItemCategory.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default ItemCategory;
