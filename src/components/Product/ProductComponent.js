import React from 'react'
import { Container, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStoreAlt, faArchive, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

function ProductComponent() {
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
                        <div className="col-lg-3">
                            <Card className="shadow p-3 mb-5 bg-body" style={{borderRadius: "10px"}}>
                                <CardImg top width="100%" src="https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/29/4a62d109-9107-4acf-8425-9785b1f33368.jpg.webp" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h6">JACKET COUGLE SNOWDOPE WOLV ORIGINAL1 - army, M</CardTitle>
                                    <CardText className="text-danger">Rp 120.000</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="shadow p-3 mb-5 bg-body" style={{borderRadius: "10px"}}>
                                <CardImg top width="100%" src="https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/29/4a62d109-9107-4acf-8425-9785b1f33368.jpg.webp" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h6">JACKET COUGLE SNOWDOPE WOLV ORIGINAL1 - army, M</CardTitle>
                                    <CardText className="text-danger">Rp 120.000</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="shadow p-3 mb-5 bg-body" style={{borderRadius: "10px"}}>
                                <CardImg top width="100%" src="https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/29/4a62d109-9107-4acf-8425-9785b1f33368.jpg.webp" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h6">JACKET COUGLE SNOWDOPE WOLV ORIGINAL1 - army, M</CardTitle>
                                    <CardText className="text-danger">Rp 120.000</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="shadow p-3 mb-5 bg-body" style={{borderRadius: "10px"}}>
                                <CardImg top width="100%" src="https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/29/4a62d109-9107-4acf-8425-9785b1f33368.jpg.webp" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h6">JACKET COUGLE SNOWDOPE WOLV ORIGINAL1 - army, M</CardTitle>
                                    <CardText className="text-danger">Rp 120.000</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="shadow p-3 mb-5 bg-body" style={{borderRadius: "10px"}}>
                                <CardImg top width="100%" src="https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/29/4a62d109-9107-4acf-8425-9785b1f33368.jpg.webp" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h6">JACKET COUGLE SNOWDOPE WOLV ORIGINAL1 - army, M</CardTitle>
                                    <CardText className="text-danger">Rp 120.000</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductComponent
