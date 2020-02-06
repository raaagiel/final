import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class login extends Component {

    state = {
        dataLogin: {},
        loginStatus: true,
        modal: false
    }

    loginClick = () => {
        this.setState({ loginStatus: false })
    }

    onClickLogin = () => {
        this.setState({ modal: true })
        console.log(this.state.modal)
    }

    render() {
        if (this.state.loginStatus === false) {
            return <Redirect to='/register' />
        }

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={() => this.setState({ modal: false })} >
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
                    <ModalFooter>
                        <Button color="primary" >Do Something</Button>{' '}
                        <Button color="secondary" >Cancel</Button>
                    </ModalFooter>
                </Modal>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application<br /> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="button" className="btn btn-black" onClick={this.onClickLogin}>Login</button>
                                <button type="submit" className="btn btn-secondary" onClick={this.loginClick}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }ß
}

export default login
