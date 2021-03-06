import React, {useState} from 'react'
import { Button, Col, Container, Row, } from 'reactstrap'
import {useSelector} from 'react-redux'
import './DetailProductComponent.css'
import ChartComponent from '../../Chart/ChartComponent'
import {useDispatch} from 'react-redux'
import {addToChart} from '../../../redux/action'

function DetailProductComponent(props) {
    const detailState = useSelector(state => state.product.detailProduct)
    const chartState = useSelector(state => state.product.chart)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    let currentProduct = ''

    chartState.map(item => currentProduct = item)
    
    const toggle = (data) => {
        if (!currentProduct) {
            dispatch(addToChart(data))
        } else {
            currentProduct.id === data.id ? currentProduct.qty++ : dispatch(addToChart(data))
        }
        setModal(!modal)
    }
    const closeToggle = () => {
        setModal(!modal)
    }
    console.log(chartState)
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
                            <Button className="btn-danger" onClick={() => toggle(detailState)}>Tambah ke keranjang</Button>
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
