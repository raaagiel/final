import React, { Component } from 'react'
import { Grid, List, Button, Header, Image, Icon } from 'semantic-ui-react'

import Accordionbar from '../components/accordion'

class segmentnd extends Component {
    render() {
        return (
            <div className='Segment-second'>
                <div className='Text-title'>
                    <div >Select Your Plan</div>
                </div>
                <Grid >
                    <Grid columns={2} centered>
                        <Grid.Column className='Colum-Image'>
                            <Image
                                fluid
                                label={{
                                    color: 'red',
                                    icon: 'dollar',
                                    content: '4.99/Invitation',
                                    ribbon: true,
                                    size: 'huge'
                                }}
                                src='https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            />
                            <Header as='h2'>WEDDING INVITATION</Header>
                            <p style={{ fontSize: '1.33em' }}>
                                1 undangan kirim untuk semua tamu Anda.
                            </p>
                            <List size='large'>
                                <List.Item>
                                    <List.Icon color='green' name='checkmark' /> Get unlimited access
                            </List.Item>
                                <List.Item>
                                    <List.Icon color='green' name='checkmark' /> Get unlimited access
                            </List.Item>
                                <List.Item>
                                    <List.Icon color='green' name='checkmark' /> Get unlimited access
                            </List.Item>
                                <List.Item>
                                    <List.Icon color='green' name='checkmark' /> Get unlimited access
                            </List.Item>
                                <Accordionbar />
                            </List>

                            <Button fluid className='Color-Bar' size='large' >
                                <Icon name='calendar alternate outline' /> Get This Plan
                            </Button>

                        </Grid.Column>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default segmentnd
