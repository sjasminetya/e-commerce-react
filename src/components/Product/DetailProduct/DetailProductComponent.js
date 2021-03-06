import React, {useState} from 'react'
import { Button, Col, Container, Row, } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import './DetailProductComponent.css'
import ChartComponent from '../../Chart/ChartComponent'
import {addToChart} from '../../../redux/action'

function DetailProductComponent(props) {
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
                    <Col>
                        <div className="image-product">
                            <img src={detailState.imgUrl} alt=""/>
                        </div>
                    </Col>
                    <Col>
                        <div className="description-product">
                            <h5>{detailState.title}</h5>
                            <h3>Rp {detailState.price}</h3>
                            <Button className="btn-danger" onClick={() => toggle(detailState.id)}>Tambah ke keranjang</Button>
                            {modal ? (
                                <ChartComponent modal={modal} toggle={closeToggle} chart={chartState} />
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     addToChart: (data) => dispatch(addToChart(data))
// })

export default DetailProductComponent
