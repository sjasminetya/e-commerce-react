import React from 'react'
import { Button, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import {addQty, reduceQty, removeItem} from '../../../redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
import './DetailChartComponent.css'

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

    const remove = (id) => {
        dispatch(removeItem(id))
    }

    console.log(chartState)
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-8">
                        <h4>Keranjang</h4>
                        <section className="delete-list-cart d-flex shadow p-3 bg-body justify-content-between">
                            <Form>
                                <FormGroup check inline>
                                    <Input id="InlineCheckboxes-checkbox-1" type="checkbox" style={{fontSize: "20px"}} />
                                    <Label for="InlineCheckboxes-checkbox-1" check>
                                        <h6 className="pt-1 pl-1">Pilih Semua Produk</h6>
                                    </Label>
                                </FormGroup>
                            </Form>
                            <h6 className="pt-1 pl-1 text-green">Hapus</h6>
                        </section>
                        {chartState.map(item => (
                            <section className="list-product shadow p-3 mb-5 bg-body" key={item.id}>
                                <div className="d-flex">
                                    <Form className="mt-5">
                                        <FormGroup check inline>
                                            <Input id="InlineCheckboxes-checkbox-1" type="checkbox" />
                                        </FormGroup>
                                    </Form>
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
                                    <div className="d-flex">
                                        <FontAwesomeIcon icon={faHeart} className="mr-4 mt-3" style={{color: "rgba(0,0,0,.5)"}} />
                                        <FontAwesomeIcon icon={faTrash} onClick={() => remove(item.id)} className="mr-4 mt-3" style={{color: "rgba(0,0,0,.5)", cursor: "pointer"}} />
                                        {item.qty === 0 ? (
                                            <div className="d-flex">
                                                <Button className="btn-qty btn-sm btn-secondary mr-4 mt-2" disabled onClick={() => reduce(item.id)}>-</Button>
                                                    <p className="pt-2" disabled>{item.qty}</p>
                                                <Button className="btn-qty btn-sm btn-secondary ml-4 mt-2" onClick={() => add(item.id)}>+</Button>
                                            </div>
                                            
                                        ) : (
                                            <div className="d-flex">
                                                <Button className="btn-qty btn-sm btn-secondary mr-4 mt-2" onClick={() => reduce(item.id)}>-</Button>
                                                    <p className="pt-2">{item.qty}</p>
                                                <Button className="btn-qty btn-sm btn-secondary ml-4 mt-2" onClick={() => add(item.id)}>+</Button>
                                            </div>
                                        )}
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
