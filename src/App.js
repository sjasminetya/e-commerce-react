import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import Chart from './containers/Chart'
import DetailProductContainer from './containers/DetailProductContainer'
import ProductContainer from './containers/ProductContainer'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <HeaderComponent />
          <Route path="/" exact component={ProductContainer} />
          <Route path="/detail-product/:id" component={DetailProductContainer} />
          <Route path="/cart" component={Chart} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
