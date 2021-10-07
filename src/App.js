import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Swal from 'sweetalert2';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
      size: '',
      sort: '',
    };
  }
  createOrder = (order) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems });
    cartItems.length = 0;

    Swal.fire({
      title: 'Gracias por Comprar a ZamsClu moda',
      text: 'Orden creada para ' + order.name,
      icon: 'success',
      confirmButtonColor: '352f50',
      confirmButtonText: 'Seguir Comprando',
    });
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count--;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    cartItems.forEach((item) => {
      if (item.count < 1) {
        this.setState({
          cartItems: cartItems.filter((x) => x._id !== product._id),
        });
      }
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(
        cartItems.filter((x) => x._id && x.count !== product._id && x.count)
      )
    );
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === 'lowest'
            ? a.price > b.price
              ? 1
              : -1
            : sort === 'highest'
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === '') {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>Moda Femenina ZamsClu</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className='sidebar' id='form'>
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>Todos los derechos reservados</footer>
      </div>
    );
  }
}

export default App;
