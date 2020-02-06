import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'


class fitur extends Component {
    render() {
        return (
            <div className='Fitur-role'>
                <Grid columns='four' centered >
                    <Grid.Row  >
                        <Grid.Column textAlign='center'>
                            <Icon className='Fitur-color' circular name='computer' size='huge' />
                            <h2 className='Fitur-text'>Futuristik</h2>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Icon className='Fitur-color' circular name='mobile alternate' size='huge' />
                            <h2 className='Fitur-text'>Responsive</h2 >
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Icon className='Fitur-color' circular name='images outline' size='huge' />
                            <h2 className='Fitur-text'>Galeri Foto</h2 >
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Icon className='Fitur-color' circular name='map marker alternate' size='huge' />
                            <h2 className='Fitur-text'>Location Unknow</h2 >
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default fitur
