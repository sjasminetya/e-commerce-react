import React from 'react'
import { Button, Col, Container, Row, } from 'reactstrap'
import {useSelector} from 'react-redux'
import './DetailProductComponent.css'

function DetailProductComponent() {
    const detailState = useSelector(state => state.product.detailProduct)
    console.log(detailState)
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
                            <Button className="btn-danger">Tambah ke keranjang</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailProductComponent
