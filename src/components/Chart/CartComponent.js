import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import {useParams, useHistory} from 'react-router-dom'
import { Button } from 'reactstrap'
import './CartComponent.css'

function CartComponent(props) {
    const {id} = useParams()
    const history = useHistory()

    const goChart = () => {
        history.push('/cart')
    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} className="modal-lg">
                <ModalHeader toggle={props.toggle} style={{color: "rgba(0,0,0,.5)"}}>Berhasil Ditambahkan</ModalHeader>
                <ModalBody style={{minHeight: "200px"}}>
                    {props.chart.map(item => (
                        item.id === Number(id) ? (
                            <div className="d-flex cart-modal-detail" key={item.id}>
                                <div className="cart-modal">
                                    <div className="image-chart">
                                        <img src={item.imgUrl} alt=""/>
                                    </div>
                                    <h5 className="ml-2 title" style={{color: "rgba(0,0,0,.5)", border: "1px solid red"}}>{item.title}</h5>
                                </div>
                                <Button className="btn-success float-right mr-3 mt-4" style={{height: "fit-content", borderRadius: "7px"}} onClick={goChart}>Lihat Keranjang</Button>
                            </div>
                        ) : null
                    ))}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default CartComponent
