import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="nome">
          Nome:
          <input
            id="nome"
            name="nome"
            type="text"
            // value={ name }
            // onChange={ this.onHandleChange }
            data-testid="checkout-fullname"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            name="email"
            type="email"
            // value={ name }
            // onChange={ this.onHandleChange }
            data-testid="checkout-email"
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            id="cpf"
            name="cpf"
            type="text"
            // value={ name }
            // onChange={ this.onHandleChange }
            data-testid="checkout-cpf"
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            id="phone"
            name="phone"
            type="text"
            // value={ name }
            // onChange={ this.onHandleChange }
            data-testid="checkout-phone"
          />
        </label>
        <label htmlFor="cep">
          CEP:
          <input
            id="cep"
            name="cep"
            type="text"
            // value={ name }
            // onChange={ this.onHandleChange }
            data-testid="checkout-cep"
          />
        </label>
        <label htmlFor="endereco">
          Endereço:
          <input
            id="endereco"
            name="endereco"
            type="text"
            // value={ name }
            // onChange={ this.onHandleChange }
            data-testid="checkout-address"
          />
        </label>
      </div>
    );
  }
}

export default Checkout;
