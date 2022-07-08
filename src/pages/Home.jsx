import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Categorias:</p>
        <Categories />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Search />
      </div>
    );
  }
}

export default Home;
