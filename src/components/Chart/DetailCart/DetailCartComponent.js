import React, {useState, useEffect} from 'react'
import { Button, Container, Row } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import {addQty, reduceQty, removeItem} from '../../../redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
import {changeRupiah} from '../../../utils/changeRupiah'
import {readyBuy, reduceReadyBuy, emptyReadyBuy, emptyCart} from '../../../redux/action'
import './DetailCartComponent.css'

function DetailCart() {
    const chartState = useSelector(state => state.product.cart)
    const readyState = useSelector(state => state.product.readyBuy)
    const totalQty = readyState.reduce((a, b) => a + b.qty, 0)
    const totalPrice = readyState.reduce((a, b) => a + b.qty * b.price, 0)
    const [checking, setChecking] = useState(false)
    const [checkEl, setCheckEl] = useState(false)
    const dispatch = useDispatch()
    const add = (id) => {
        dispatch(addQty(id))
    }

    const reduce = (id) => {
        dispatch(reduceQty(id))
    }

    const remove = (id) => {
        dispatch(removeItem(id))
        dispatch(reduceReadyBuy(id))
    }

    const click = () => {
        if (chartState.length === readyState.length || chartState.length === readyState.length + 1) {
            console.log(true)
            setChecking(!checking)
        } else {
            setChecking(!checking)
        }
    }

    const handleClickAll = (event) => {
        let cart = chartState
        dispatch(emptyReadyBuy())
        cart.forEach(el => {
            el.isChecked = event.target.checked
            if (el.isChecked) {
                el.isChecked = true
                setChecking(!checking)
                dispatch(readyBuy(el.id))
            } else {
                el.isChecked = false
                setChecking(!checking)
                dispatch(emptyReadyBuy())
            }
        })
        
    }

    const handleClickElement = (event) => {
        let cart = chartState
        cart.forEach(el => {
            if (el.title === event.target.value) {
                el.isChecked = event.target.checked
                if (event.target.checked) {
                    click()
                    setCheckEl(true)
                    dispatch(readyBuy(el.id))
                } else {
                    dispatch(reduceReadyBuy(el.id))
                    if (readyState.length !== 0) {
                        setCheckEl(true)
                    } else {
                        setCheckEl(false)
                    }
                }
            }
        })
    }

    const handleDelete = () => {
        if (checking === true) {
            dispatch(emptyCart())
            dispatch(emptyReadyBuy())
        } else {
            let readyBuy = readyState[0]
            chartState.forEach(item => {
                if (item.id === readyBuy.id) {
                    dispatch(reduceReadyBuy(readyBuy.id))
                    dispatch(removeItem(item.id))
                }
            })
            
        }
    }

    console.log('cart', chartState)
    console.log('ready', readyState)

    useEffect(() => {
        click()
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-8">
                        <h4>Keranjang</h4>
                        <section className="delete-list-cart d-flex shadow p-3 bg-body justify-content-between">
                            <form className="d-flex">
                                <input type="checkbox" className="pl-1" checked={checking} value="checkedall" onChange={handleClickAll} style={{marginTop: "10px"}} />
                                <label className="pt-1 pl-3">Pilih Semua Produk</label>
                            </form>
                            { readyState.length !== 0 ? <h6 className="pt-1 pl-1 text-green" onClick={handleDelete}>Hapus</h6> : null }
                        </section>
                        {chartState.map(item => (
                            <section className="list-product shadow p-3 mb-5 bg-body" key={item.id}>
                                <div className="d-flex">
                                    <input key={item.id} type="checkbox" checked={item.isChecked} value={item.title} onChange={handleClickElement} style={{marginTop: "50px", marginRight: "10px"}} />
                                    <div className="image-list">
                                        <img src={item.imgUrl} alt=""/>
                                    </div>
                                    <div className="detail pl-3">
                                        <h5>{item.title}</h5>
                                        <p className="text-danger">Rp {changeRupiah(item.price)}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-green pt-3">Tulis Catatan untuk Toko</h6>
                                    <div className="d-flex">
                                        <FontAwesomeIcon icon={faHeart} className="mr-4 mt-3" style={{color: "rgba(0,0,0,.5)"}} />
                                        <FontAwesomeIcon icon={faTrash} onClick={() => remove(item.id)} className="mr-4 mt-3" style={{color: "rgba(0,0,0,.5)", cursor: "pointer"}} />
                                        {item.qty === 1 ? (
                                            <div className="d-flex">
                                                <Button className="btn-qty btn-sm btn-secondary mr-4 mt-2 disabled" disabled onClick={() => reduce(item.id)}>-</Button>
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
                    <div className="col-lg-4 mt-2">
                        {checking || checkEl ? (
                            <section className="shopping shadow p-3 mb-5 bg-body">
                                <h4>Ringkasan Belanja</h4>
                                <hr/>
                                <div className="price d-flex justify-content-between">
                                    <h6>Total Harga</h6>
                                    <h5>Rp. {changeRupiah(totalPrice)}</h5>
                                </div>
                                <Button className="btn-buy mt-2">Beli ({totalQty})</Button>
                            </section>
                        ) : 
                            <section className="shopping shadow p-3 mb-5 bg-body">
                                <h4>Ringkasan Belanja</h4>
                                <hr/>
                                <div className="price d-flex justify-content-between">
                                    <h6>Total Harga</h6>
                                    <h5>Rp. 0</h5>
                                </div>
                                <Button className="btn-buy mt-2">Beli (0)</Button>
                            </section>
                        }
                        
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default DetailCart
