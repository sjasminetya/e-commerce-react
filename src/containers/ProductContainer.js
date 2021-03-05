import React, { Component } from 'react'
import ProductComponent from '../components/Product/ProductComponent'
import {connect} from 'react-redux'
import {getProduct} from '../redux/action'

class ProductContainer extends Component {
    componentDidMount () {
        this.props.getProduct()
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
        getProduct: () => dispatch(getProduct())
    }
}

export default connect(null, mapDispatchToProps)(ProductContainer)
