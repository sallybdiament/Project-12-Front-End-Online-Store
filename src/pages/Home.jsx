import React from 'react';
import BotaoCarrinho from '../Components/BotaoCarrinho';
import Categories from './components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search">
          Buscar:
          <input
            type="text"
            name="search"
            id="search"
          />
        </label>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <BotaoCarrinho />
        <div>
          <p>Categorias:</p>
          <Categories />
        </div>
      </div>
    );
  }
}

export default Home;
