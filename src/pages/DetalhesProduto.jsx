import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Card from '../components/Card';

class DetalhesProduto extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="product-detail-name">nome</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

// DetalhesProduto.propTypes = {
// }.isRequired;
// DetalhesProduto.propTypes = {
//   nome: PropTypes.string,
//   imagem: PropTypes.string,
//   preco: PropTypes.number,
//   produtoId: PropTypes.string,
//   match: PropTypes.objectOf(PropTypes.any),
//   objeto: PropTypes.shape({
//     produtoId: PropTypes.string,
//   }),
// }.isRequired;

export default DetalhesProduto;
