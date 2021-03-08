import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarText,
    InputGroup, 
    InputGroupText, 
    Input
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStoreAlt, faEnvelope, faBell, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './HeaderComponent.css'

function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const chartState = useSelector(state => state.product.cart)
    const totalQty = chartState.reduce((a, b) => a + b.qty, 0)

    return (
        <div>
            <Navbar color="white" light expand="md" className="shadow-sm p-3 mb-5 bg-body rounded">
                <div className="ml-3 mr-3 pt-1 brand">
                    <Link to="/"><h5 className="text-dark pt-2 pb-3 pl-3">ECOMMERCE</h5></Link>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <NavbarText>Kategori</NavbarText>
                    <InputGroup style={{width: "50%"}} className="ml-3">
                        <Input placeholder="search product" />
                        <InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
                    </InputGroup>
                    <div className="ml-auto">
                        {totalQty !== 0 ? (
                                <Link to="/cart">
                                <span className="icon-cart">{totalQty}</span>
                                    <FontAwesomeIcon className="ml-5 mr-4" style={{color: "rgba(0,0,0,.5)"}} icon={faShoppingCart} />
                                </Link>
                        ) : (
                            <Link to="/cart">
                                <FontAwesomeIcon className="ml-5 mr-4" style={{color: "rgba(0,0,0,.5)"}} icon={faShoppingCart} />
                            </Link>
                        )}
                        <FontAwesomeIcon className="ml-4 mr-5" style={{color: "rgba(0,0,0,.5)"}} icon={faBell} />
                        <FontAwesomeIcon className="mr-3" style={{color: "rgba(0,0,0,.5)"}} icon={faEnvelope} />
                        <span className="line"></span>
                        <NavbarText className="ml-3 mr-5"><FontAwesomeIcon icon={faStoreAlt} /> Toko</NavbarText>
                        <NavbarText className="mr-3"><FontAwesomeIcon icon={faUser} /> Muhammad</NavbarText>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderComponent
