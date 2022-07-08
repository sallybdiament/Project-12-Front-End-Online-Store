import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../components/Card';

class DetalhesProduto extends React.Component {
    componentDidMount = async () => {
      const { objeto } = this.props;
      console.log(objeto);
      const { match } = this.props;
      console.log(match.params);
      const idProduto = match.params.id;
      console.log(idProduto);
    //   const result = await getMusics(idAlbum);
    //   // console.log(result[0].wrapperType);
    //   const musicsInfo = result[0];
    //   const musics = result.filter((music, i) => i > 0);
    //   // console.log(musics);
    //   // console.log(musicsInfo);
    //   const favorites = await getFavoriteSongs();
    //   console.log(favorites);
    //   const favoriteSongs = favorites;
    //   this.setState({ musicsInfo, musics, favoriteSongs, isLoading: false });
    }

    render() {
      const { nome, imagem, preco, produtoId } = this.props;
      return (
        <div>
          <p data-testid="product-detail-name">nome</p>
          {/* <img src={ imagem } alt={ nome } />
          <p>{ preco }</p> */}
          <Link to="/">Voltar</Link>
          <Card
            nome={ nome }
            imagem={ imagem }
            preco={ preco }
            produtoId={ produtoId }
          />
        </div>
      );
    }
}

DetalhesProduto.propTypes = {
}.isRequired;
DetalhesProduto.propTypes = {
  nome: PropTypes.string,
  imagem: PropTypes.string,
  preco: PropTypes.number,
  produtoId: PropTypes.string,
  match: PropTypes.objectOf(PropTypes.any),
  objeto: PropTypes.shape({
    produtoId: PropTypes.string,
  }),
}.isRequired;

export default DetalhesProduto;
