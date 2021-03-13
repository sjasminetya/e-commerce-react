import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import {useHistory} from 'react-router-dom'
import { Button } from 'reactstrap'
import './CartComponent.css'

function CartComponent(props) {
    const history = useHistory()

    const goChart = () => {
        history.push('/cart')
    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} className="modal-lg">
                <ModalHeader toggle={props.toggle} style={{color: "rgba(0,0,0,.5)"}}>Berhasil Ditambahkan</ModalHeader>
                <ModalBody style={{minHeight: "200px"}}>
                    <div className="d-flex cart-modal-detail">
                        <div className="cart-modal">
                            <div className="image-chart">
                                <img src={props.cart.imgUrl} alt=""/>
                            </div>
                            <h5 className="ml-2 title" style={{color: "rgba(0,0,0,.5)"}}>{props.cart.title}</h5>
                        </div>
                        <Button className="btn-success float-right mr-3 mt-4" style={{height: "fit-content", borderRadius: "7px"}} onClick={goChart}>Lihat Keranjang</Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default CartComponent
