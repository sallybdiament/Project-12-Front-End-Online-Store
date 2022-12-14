import React from 'react';
import BotaoCarrinho from '../components/BotaoCarrinho';
import Search from '../components/Search';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <BotaoCarrinho />
        <Search />
        <p>Categorias:</p>
        <Categories />
      </div>
    );
  }
}

export default Home;
