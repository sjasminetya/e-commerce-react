import React, { Component } from 'react'
import ProductComponent from '../components/Product/ProductComponent'
import {connect} from 'react-redux'
import {getProduct, emptyReadyBuy} from '../redux/action'

class ProductContainer extends Component {
    componentDidMount () {
        this.props.getProduct()
        this.props.emptyReadyBuy()
    }
    render() {
        return (
            <div>
                <ProductComponent />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct: () => dispatch(getProduct()),
        emptyReadyBuy: () => dispatch(emptyReadyBuy()) 
    }
}

export default connect(null, mapDispatchToProps)(ProductContainer)
