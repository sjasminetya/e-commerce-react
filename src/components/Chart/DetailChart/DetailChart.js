import React from 'react'
import { Button, Container, Row } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import {addQty, reduceQty} from '../../../redux/action'
import './DetailChart.css'

function DetailChart() {
    const chartState = useSelector(state => state.product.cart)
    const totalQty = chartState.reduce((a, b) => a + b.qty, 0)
    const totalPrice = chartState.reduce((a, b) => a + b.qty * b.price, 0)
    const dispatch = useDispatch()
    const add = (id) => {
        dispatch(addQty(id))
    }

    const reduce = (id) => {
        dispatch(reduceQty(id))
    }

    console.log(chartState)
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-8">
                        <h4>Keranjang</h4>
                        <section className="delete-list-cart d-flex shadow p-3 bg-body justify-content-between">
                            <h6 className="p-1">Pilih Semua Produk</h6>
                            <h6 className="p-1 text-green">Hapus</h6>
                        </section>
                        {chartState.map(item => (
                            <section className="list-product shadow p-3 mb-5 bg-body" key={item.id}>
                                <div className="d-flex">
                                    <div className="image-list">
                                        <img src={item.imgUrl} alt=""/>
                                    </div>
                                    <div className="detail pl-3">
                                        <h5>{item.title}</h5>
                                        <p className="text-danger">Rp {item.price}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-green pt-3">Tulis Catatan untuk Toko</h6>
                                    <div className="d-flex pt-3">
                                        <Button className="btn-qty btn-sm btn-secondary mr-4" onClick={() => reduce(item.id)}>-</Button>
                                            {item.qty}
                                        <Button className="btn-qty btn-sm btn-secondary ml-4" onClick={() => add(item.id)}>+</Button>
                                    </div>
                                </div>
                            </section>
                        ))}
                        
                    </div>
                    <div className="col-lg-4">
                        <section className="shopping shadow p-3 mb-5 bg-body">
                            <h4>Ringkasan Belanja</h4>
                            <hr/>
                            <div className="price d-flex justify-content-between">
                                <h6>Total Harga</h6>
                                <h5>Rp. {totalPrice}</h5>
                            </div>
                            <Button className="btn-buy mt-2">Beli ({totalQty})</Button>
                        </section>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default DetailChart
