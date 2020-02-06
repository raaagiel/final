import React, { Component } from 'react'
import Maps from '../components/maps'

class map extends Component {
    render() {
        return (
            <div style={{ margin: '100px' }}>
                <Maps
                    google={this.props.google}
                    center={{ lat: 18.5204, lng: 73.8567 }}
                    height='300px'
                    zoom={15}
                />
            </div>
        )
    }
}

export default map
