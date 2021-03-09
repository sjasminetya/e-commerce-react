import React from 'react'
import { Container, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStoreAlt, faArchive, faClipboardList, faStar } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {changeRupiah} from '../../utils/changeRupiah'
import './ProductComponent.css'

function ProductComponent() {
    const productState = useSelector(state => state.product.listProduct)
    const history = useHistory()
    function goDetailProduct (id) {
        history.push(`/detail-product/${id}`)
    }
    return (
        <div>
            <Container>
                <div className="breadcrumbs-icon d-flex" style={{color: "rgba(0,0,0,.5)"}}>
                    <div className="icon active">
                        <FontAwesomeIcon icon={faArchive} /> Produk
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faStoreAlt} /> Toko
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} /> Profil
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faClipboardList} /> Katalog
                    </div>
                </div>
                <div className="home-line"></div>
                <div className="active-line"></div>
                <div className="list-product">
                    <div className="row">
                    {productState.map(item => (
                        <div className="col-lg-3 col-md-4 col-sm-5 col-12 product-card" key={item.id} onClick={() => goDetailProduct(item.id)}>
                            <Card className="shadow p-3 mb-5 bg-body height-card" style={{borderRadius: "10px", height: "450px"}}>
                                <CardImg top width="100%" src={item.imgUrl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h6">{item.title}</CardTitle>
                                    <CardText className="text-danger" style={{fontWeight: "bold"}}>Rp {changeRupiah(item.price)}</CardText>
                                    <span className="checked"><FontAwesomeIcon icon={faStar} /></span>
                                    <span className="checked"><FontAwesomeIcon icon={faStar} /></span>
                                    <span className="checked"><FontAwesomeIcon icon={faStar} /></span>
                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                    <span><FontAwesomeIcon icon={faStar} /></span>
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
