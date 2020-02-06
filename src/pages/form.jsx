import React from 'react'
import { Button, Checkbox, Form, Container, Header, Segment, Grid, TextArea } from 'semantic-ui-react'

const form = () => (
    <Container>
        <div style={{ width: '100%', display: 'flex' }}>
            <Segment style={{ margin: '0 auto' }}>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Header style={{ padding: '0.5em 0em' }} textAlign='center' as='h2'>ISI FORM ANDA</Header>
                        <Form size='mini'>
                            <Form.Field>
                                <label>Nama Laki-Laki</label>
                                <input placeholder='Nama mempelai pria' />
                            </Form.Field>
                            <Form.Field>
                                <label>Nama Wanita</label>
                                <input placeholder='Nama mempwlai wanita' />
                            </Form.Field>
                            <Form.Field>
                                <label>Nama Orang Tua (Wanita)</label>
                                <input placeholder='Tuliskan seperti ini (Anak dari bapak & ibu)' />
                            </Form.Field>
                            <Form.Field>
                                <label>Nama Orang Tua (Pria)</label>
                                <input placeholder='Tuliskan seperti ini (Anak dari bapak & ibu)' />
                            </Form.Field>
                            <Form.Field>
                                <label>Venue</label>
                                <input placeholder='Nama gedung atau lokasi acara' />
                            </Form.Field>
                            <Form.Field>
                                <label>Date</label>
                                <input type='date' placeholder='' />
                            </Form.Field>
                            <Form.Field>
                                <label>Time (WIB)</label>
                                <input type='time' placeholder='Waktu acara' />
                            </Form.Field>
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Form size='mini'>
                            <Form.Field>
                                <label>Foto (Wanita)</label>
                                <input type='file' />
                            </Form.Field>
                            <Form.Field>
                                <label>Foto (pria)</label>
                                <input type='file' />
                            </Form.Field>
                            <Form.Field>
                                <label>Galeri Foto (12 Foto)</label>
                                <input type='file' />
                            </Form.Field>
                            <Form.Field>
                                <label>Story</label>
                                <TextArea placeholder='Tell us more' />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    </Container>
)

export default form