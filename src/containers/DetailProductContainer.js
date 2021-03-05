import React, { Component } from 'react'
import DetailProductComponent from '../components/Product/DetailProduct/DetailProductComponent'
import {detailProduct} from '../redux/action'
import {connect} from 'react-redux'

class DetailProductContainer extends Component {
    componentDidMount () {
        const { id } = this.props.match.params;
        this.props.detailProduct(id)
        console.log(id)
    }
    render() {
        return (
            <div>
                <DetailProductComponent />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    detailProduct: (id) => dispatch(detailProduct(id))
})

export default connect(null, mapDispatchToProps)(DetailProductContainer)
