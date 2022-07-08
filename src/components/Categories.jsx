import React from 'react';
import { getCategories } from '../services/api';
import ItemCategory from './ItemCategory';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      objCategory: [],
    };
  }

  componentDidMount() {
    this.returnCategories();
  }

    returnCategories = async () => {
      const categories = await getCategories();
      this.setState({
        objCategory: categories,
      });
    }

    render() {
      const { objCategory } = this.state;
      return (
        <div>
          <ul>
            { objCategory.map((category) => (
              <ItemCategory
                key={ category.key }
                name={ category.name }
              />
            ))}
          </ul>
        </div>
      );
    }
}

export default Categories;
