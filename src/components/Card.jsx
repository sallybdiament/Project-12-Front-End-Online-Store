import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { nome, imagem, preco } = this.props;
    return (
      <div data-testid="product">
        <p>{nome}</p>
        <img src={ imagem } alt={ nome } />
        <p>{ preco }</p>
      </div>
    );
  }
}
Card.propTypes = {
  nome: PropTypes.string,
  imagem: PropTypes.string,
  preco: PropTypes.number,
}.isRequired;
export default Card;
