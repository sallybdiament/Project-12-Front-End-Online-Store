import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import createUser from '../services/localStorage';

class Card extends React.Component {
  handleClick = async () => {
    const { produtoId, nome, preco } = this.props;
    await createUser({
      titleProduct: nome,
      priceProduct: preco,
      quantityProduct: 1,
      productId: produtoId });
    console.log('clicou');
  }

  render() {
    const { nome, imagem, preco, produtoId } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/DetalhesProduto/${produtoId}` }
          data-testid="product-detail-link"
        >
          <p>{nome}</p>
          <img src={ imagem } alt={ nome } />
          <p>{ preco }</p>
        </Link>
        <Link to={ `/CarrinhoDeCompras/${produtoId}` }>
          <button
            type="submit"
            data-testid="product-add-to-cart"
            onClick={ this.handleClick }
          >
            Adicionar ao carrinho
          </button>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  nome: PropTypes.string,
  imagem: PropTypes.string,
  preco: PropTypes.number,
  produtoId: PropTypes.string,
}.isRequired;

export default Card;
