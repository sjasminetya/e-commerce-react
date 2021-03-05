import React from 'react'
import { Container, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStoreAlt, faArchive, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import './Product.css'

function ProductComponent() {
    const productState = useSelector(state => state.product.listProduct)
    console.log(productState)
    return (
        <div>
            <Container>
                <div className="breadcrumbs-icon d-flex">
                    <div className="icon active">
                        <FontAwesomeIcon className="ml-5" icon={faArchive} /> Produk
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon className="ml-5" icon={faStoreAlt} /> Toko
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon className="ml-5" icon={faUser} /> Profil
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon className="ml-5" icon={faClipboardList} /> Katalog
                    </div>
                </div>
                <div className="line"></div>
                <div className="active-line"></div>
                <div className="list-product">
                    <div className="row">
                    {productState.map(item => (
                        <div className="col-lg-3" key={item.id}>
                            <Card className="shadow p-3 mb-5 bg-body" style={{borderRadius: "10px", height: "400px"}}>
                                <CardImg top width="100%" src={item.imgUrl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h6" className="text-left">{item.title}</CardTitle>
                                    <CardText className="text-danger">Rp {item.price}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}



export default ProductComponent
