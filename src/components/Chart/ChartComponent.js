import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import {useParams} from 'react-router-dom'

function ChartComponent(props) {
    const {id} = useParams()
    // console.log(id)

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Berhasil Ditambahkan</ModalHeader>
                <ModalBody>
                    {props.chart.map(item => (
                        item.id === Number(id) ? (
                            <div className="content d-flex" key={item.id}>
                                <div className="image-chart">
                                    <img src={item.imgUrl} alt=""/>
                                </div>
                                <h5>{item.title}</h5>
                            </div>
                        ) : null
                    ))}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ChartComponent
