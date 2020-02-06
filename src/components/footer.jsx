import React, { Component } from 'react'
import {
    Button
} from 'semantic-ui-react'


class footer extends Component {
    render() {
        return (
            <div className='Footer-style' >
                <div className='Footer-content'>
                    <p> FAQ | T&C | Privacy Policy | </p>
                    <p>PARTNER WITH US</p>

                    <Button circular color='facebook' icon='facebook' />
                    <Button circular color='twitter' icon='twitter' />
                    <Button circular color='linkedin' icon='linkedin' />
                    <Button circular color='google plus' icon='google plus' />
                </div>

            </div>
        )
    }
}

export default footer


