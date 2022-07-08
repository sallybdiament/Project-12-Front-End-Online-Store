import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
