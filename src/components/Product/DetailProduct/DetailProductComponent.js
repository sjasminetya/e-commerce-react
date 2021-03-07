import React, {useState} from 'react'
import { Button, Container, Row, } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import CartComponent from '../../Chart/CartComponent'
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
                        <div className="main">
                            <div className="track">
                                <ul>
                                    <li id="slide1"><img src={detailState.imgUrl} alt=""/></li>
                                    <li id="slide2"><img src={detailState.slide2} alt=""/></li>
                                    <li id="slide3"><img src={detailState.slide3} alt=""/></li>
                                </ul>
                            </div>
                            <div className="slides">
                                <a href="#slide1"><img src={detailState.imgUrl} alt=""/></a>
                                <a href="#slide2"><img src={detailState.slide2} alt=""/></a>
                                <a href="#slide3"><img src={detailState.slide3} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="description-product">
                            <h5>{detailState.title}</h5>
                            <div className="d-flex">
                                <h5 className="pt-5" style={{color: "rgba(0,0,0,.5)"}}>HARGA</h5>
                                <h4 className="pl-5 text-orange">Rp{changeRupiah(detailState.price)}</h4>
                            </div>
                            <hr/>
                            <div className="d-flex mt-2">
                                <h5 className="pt-3" style={{color: "rgba(0,0,0,.5)"}}>WARNA</h5>
                                <div>
                                    <h5 className="pl-5 variant-text" style={{paddingTop: "15px", color: "rgba(0,0,0,.5)"}}>Pilih Variant</h5>
                                    <div className="variant-warna ml-5">
                                        <h6 style={{color: "rgba(0,0,0,.5)"}}>Black</h6>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="d-flex mt-2">
                                <h5 className="pt-3" style={{color: "rgba(0,0,0,.5)"}}>UKURAN</h5>
                                <div>
                                    <h5 className="pl-5 variant-text" style={{paddingTop: "15px", color: "rgba(0,0,0,.5)"}}>Pilih Variant</h5>
                                    <div className="variant-warna ml-5">
                                        <h6 style={{color: "rgba(0,0,0,.5)"}}>M</h6>
                                    </div>
                                </div>
                            </div>
                            <Button className="btn-tambah mt-5" onClick={() => toggle(detailState.id)}>Tambah ke keranjang</Button>
                            {modal ? (
                                <CartComponent modal={modal} toggle={closeToggle} chart={chartState} />
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
