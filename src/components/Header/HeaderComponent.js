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
import './Header.css'

function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const chartState = useSelector(state => state.product.chart)

    const totalQty = chartState.reduce((a, b) => a + b.qty, 0)

    console.log(totalQty)

    return (
        <div>
            <Navbar color="white" light expand="md" className="shadow-sm p-3 mb-5 bg-body rounded">
                    <div className="ml-3 mr-3 pt-1 brand">
                        <h5 className="text-dark pt-2 pb-3 pl-3">ECOMMERCE</h5>
                    </div>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <NavbarText>Kategori</NavbarText>
                        <InputGroup style={{width: "55%"}} className="ml-3">
                            <Input placeholder="search product" />
                            <InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
                        </InputGroup>
                        <div className="ml-auto">
                            <FontAwesomeIcon className="ml-4" icon={faShoppingCart} /> {totalQty}
                            <FontAwesomeIcon className="ml-4 mr-4" icon={faBell} />
                            <FontAwesomeIcon className="mr-5" icon={faEnvelope} />
                            <NavbarText className="mr-5"><FontAwesomeIcon icon={faStoreAlt} /> Toko</NavbarText>
                            <NavbarText className="mr-3"><FontAwesomeIcon icon={faUser} /> Muhammad</NavbarText>
                        </div>
                    </Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderComponent
