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
            <Modal isOpen={props.modal} toggle={props.toggle} className="modal-lg" style={{borderRadius: "10px"}}>
                <ModalHeader toggle={props.toggle} className="mr-0">Berhasil Ditambahkan</ModalHeader>
                <ModalBody>
                    {props.chart.map(item => (
                        item.id === Number(id) ? (
                            <div className="content d-flex" key={item.id}>
                                <div className="image-chart">
                                    <img src={item.imgUrl} alt=""/>
                                </div>
                                <h5 className="ml-3" style={{color: "rgba(0,0,0,.5)"}}>{item.title}</h5>
                                <Button className="btn-success float-right mr-3" style={{height: "fit-content"}} onClick={goChart}>Lihat Keranjang</Button>
                            </div>
                        ) : null
                    ))}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default CartComponent
