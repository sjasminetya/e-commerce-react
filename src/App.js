import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import Cart from './containers/Cart'
import DetailProductContainer from './containers/DetailProductContainer'
import ProductContainer from './containers/ProductContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <HeaderComponent />
          <Route path="/" exact component={ProductContainer} />
          <Route path="/detail-product/:id" component={DetailProductContainer} />
          <Route path="/cart" component={Cart} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
