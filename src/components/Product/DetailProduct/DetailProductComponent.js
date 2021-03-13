import React, {useState} from 'react'
import { Button, Container, Row, } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import CartComponent from '../../Chart/CartComponent'
import {addToChart} from '../../../redux/action'
import {changeRupiah} from '../../../utils/changeRupiah'
import './DetailProductComponent.css'

function DetailProductComponent() {
    const detailState = useSelector(state => state.product.detailProduct)
    const [modal, setModal] = useState(false)
    const [warna, setWarna] = useState("")
    const [ukuran, setUkuran] = useState("")
    const dispatch = useDispatch()

    const clickWarna = () => setWarna('Black')
    const clickUkuran = () => setUkuran('M')
    
    const toggle = () => {
        const data = {
            ...detailState,
            warna: warna,
            ukuran: ukuran
        }
        dispatch(addToChart(data))
        setModal(!modal)
    }
    const closeToggle = () => {
        setModal(!modal)
    }

    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-5 col-md-7">
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
                    <div className="col-lg-7 col-md-5">
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
                                    <div className="variant-warna ml-5" onClick={clickWarna}>
                                        <h6 style={{color: "rgba(0,0,0,.5)", cursor: "pointer"}}>Black</h6>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="d-flex mt-2">
                                <h5 className="pt-3" style={{color: "rgba(0,0,0,.5)"}}>UKURAN</h5>
                                <div>
                                    <h5 className="pl-5 variant-text" style={{paddingTop: "15px", color: "rgba(0,0,0,.5)"}}>Pilih Variant</h5>
                                    <div className="variant-warna ml-5" onClick={clickUkuran}>
                                        <h6 style={{color: "rgba(0,0,0,.5)", cursor: "pointer"}}>M</h6>
                                    </div>
                                </div>
                            </div>
                            <Button className="btn-tambah mt-5" onClick={() => toggle(detailState.id)}>Tambah ke keranjang</Button>
                            {modal ? (
                                <CartComponent modal={modal} toggle={closeToggle} cart={detailState} />
                            ) : null}
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default DetailProductComponent
