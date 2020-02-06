import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'



class segment extends Component {
    state = {
        center: { lat: -6.2675685, lng: 106.8142109 },
        zoom: 10
    }

    render() {
        return (
            <div className='segment-first' >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD-wRkKa4-XEfSC0VoqawjWZqYvURynpqA' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}>
                    {/* <Marker lat={-6.2675685} lng={106.8142109} text='My Marker' /> */}
                </GoogleMapReact>
            </div >
        )
    }
}

export default segment
