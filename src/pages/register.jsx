import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Icon, Message } from 'semantic-ui-react'

class register extends Component {
    state = {
        dataRegister: {},
        registerStatus: true
    }

    registerClick = () => {
        this.setState({ registerStatus: false })
        console.log(this.state.registerStatus)
    }


    render() {

        if (this.state.registerStatus === false) {
            return <Redirect to='/login' />
        }
        return (
            <div className="signup-form">
                <Message
                    attached
                    header='Welcome to our site!'
                    content='Fill out the form below to sign-up for a new account'
                />
                <Form className='attached fluid segment'>
                    <Form.Input label='Username' placeholder='Username' type='text' />
                    <Form.Input label='Email' placeholder='Email' type='text' />
                    <Form.Input label='Password' type='password' />
                    <Form.Checkbox inline label='I agree to the terms and conditions' />
                    <Button color='blue' onClick={this.registerClick}>Submit</Button>
                </Form>
                <Message attached='bottom'>
                    <Icon name='help' />
                    Already signed up?&nbsp;<a href='/login'>Login here</a>&nbsp;instead.
                    </Message>
            </div>
        )
    }
}

export default register
