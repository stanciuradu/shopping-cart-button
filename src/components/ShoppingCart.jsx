import React, { Component } from "react";
import "../components/ShoppingCart.scss";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";

export class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  handleIncrementButton() {
    this.setState({ number: this.state.number + 1 });
  }
  handleDecrementButton() {
    if (this.state.number === 0) {
      return this.state.number;
    } else {
      return this.setState({ number: this.state.number - 1 });
    }
  }
  render() {
    return (
      <div className="shopping-cart">
        <div className="icon">
          <p className="counter">{this.state.number}</p>
          <div className="cart-buttons">
            <Cart />
            <div className="buttons">
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => this.handleDecrementButton()}
              >
                -
              </button>
              <button
                className="tn btn-outline-success"
                type="button"
                onClick={() => this.handleIncrementButton()}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
