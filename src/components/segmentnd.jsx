import React, { Component } from 'react'
import { Grid, List, Button, Header, Image, Icon } from 'semantic-ui-react'

import Accordionbar from '../components/accordion'

export class segmentnd extends Component {
    render() {
        return (
            <div className='Segment-second'>
                <div className='Text-title'>
                    <div >Select Your Plan</div>
                </div>
                <Grid >
                    <Grid columns={3} >
                        <Grid.Column className='Colum-Image'>
                            <Image
                                fluid
                                label={{
                                    color: 'red',
                                    icon: 'dollar',
                                    content: '12.99/12 month',
                                    ribbon: true,
                                    size: 'huge'
                                }}
                                src='https://www.10wallpaper.com/wallpaper/medium/1804/Johnny_English_Strikes_Again_2018_Film_medium.jpg'
                            />
                            <Header as='h2'>YUHU + LIVE TV</Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Get 1 month free, then starts at 12.99/12 month
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
                                <Icon name='video play' /> Get This Plan
                            </Button>

                        </Grid.Column>


                        <Grid.Column className='Colum-Imagescnd'>
                            <Image
                                fluid
                                label={{
                                    color: 'blue',
                                    content: '2.99/month',
                                    icon: 'dollar',
                                    ribbon: true,
                                    size: 'huge'
                                }}
                                src='https://www.10wallpaper.com/wallpaper/medium/1703/Justice_League_Superheroes_2017_Movies_HD_Wallpaper_medium.jpg'
                            />

                            <Header as='h2'>YUHU</Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Get 7 days free, then starts at 2.99/month
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
                                <Icon name='video play' /> Get This Plan
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default segmentnd
