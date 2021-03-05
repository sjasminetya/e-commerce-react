import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import DetailProductContainer from './containers/DetailProductContainer'
import ProductContainer from './containers/ProductContainer'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BrowserRouter>
          <Route path="/" exact component={ProductContainer} />
          <Route path="/detail-product/:id" component={DetailProductContainer} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
