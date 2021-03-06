import React, {useState} from 'react'
import { Button, Container, Row, } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import ChartComponent from '../../Chart/ChartComponent'
import {addToChart} from '../../../redux/action'
import {changeRupiah} from '../../../utils/changeRupiah'
import './DetailProductComponent.css'

function DetailProductComponent() {
    const detailState = useSelector(state => state.product.detailProduct)
    const chartState = useSelector(state => state.product.cart)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    
    const toggle = (id) => {
        dispatch(addToChart(id))
        setModal(!modal)
    }
    const closeToggle = () => {
        setModal(!modal)
    }

    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-5">
                        <div className="image-product">
                            <img src={detailState.imgUrl} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="description-product">
                            <h5>{detailState.title}</h5>
                            <h4 className="pt-5">HARGA Rp{changeRupiah(detailState.price)}</h4>
                            <Button className="btn-tambah mt-5" onClick={() => toggle(detailState.id)}>Tambah ke keranjang</Button>
                            {modal ? (
                                <ChartComponent modal={modal} toggle={closeToggle} chart={chartState} />
                            ) : null}
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     addToChart: (data) => dispatch(addToChart(data))
// })

export default DetailProductComponent
