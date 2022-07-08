import React from 'react';
import PropTypes from 'prop-types';

class ItemCategory extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <label htmlFor="category">
        <input data-testid="category" type="button" value={ name } />
      </label>
    );
  }
}

ItemCategory.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default ItemCategory;
