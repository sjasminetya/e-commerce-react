import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import ProductContainer from './containers/ProductContainer'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BrowserRouter>
          <Route to="/" exact component={ProductContainer} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
