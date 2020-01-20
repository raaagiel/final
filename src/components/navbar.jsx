import React, { Component } from 'react'
import { Image, Input, Icon, } from 'semantic-ui-react'

import Logo from '../image/video-ezy-logo.png'


class navbar extends Component {
    render() {
        return (
            <div>
                <div className="container-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand navbar-logo" href="#">
                            <Image src={Logo} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link" href="#">Home</a>
                                    <a className="nav-item nav-link" href="#">Features</a>

                                    <div className="nav-sign ">
                                        <a className="nav-item nav-link" href="#">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div >

                <div className="Search-style">
                    <div className='Title-style'>
                        Tokovidio
                    </div>
                    <div className='search-bar'>
                        <Input size='huge'
                            icon={<Icon name='search' circular link />}
                            placeholder='Search...'
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default navbar



