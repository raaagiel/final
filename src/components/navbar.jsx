import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

import Logo from '../image/logoku.png'


class navbar extends Component {
    render() {
        return (
            <div>
                <Navbar className='Nav-color' expand="xl" fixed="top">
                    <Navbar.Brand href="#home">
                        <Image className='Nav-text' src={Logo} />
                    </Navbar.Brand>
                    <Nav className='Nav-textcolor'>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>

                <div className="Search-style">
                    <div className='Title-style'>
                        UNDANGIN
                    </div>
                    <p className='Sub-style'>
                        Beritahu Hari Spesial Anda Dengan Undangin
                    </p>
                </div>
            </div>
        )
    }
}

export default navbar



