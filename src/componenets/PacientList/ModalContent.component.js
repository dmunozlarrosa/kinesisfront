import React, { Component } from 'react';
import { Modal, Image, Grid, Segment, Button, Icon, Divider, Label } from 'semantic-ui-react'
export default class ModalContent extends Component {
    render() {
        const labels = this.props.labels;
        const pacient = this.props.pacient;
        return (
            <Modal.Content image>
                <Image wrapped size='medium' src={pacient.picture} />
                <Modal.Description>
                    <Grid columns={2} stretched>
                        <Grid.Column width='8'>
                        <Segment compact basic>
                            <p>
                            <span class="ui grey tiny header">{labels.contact.age}    </span><br/>{pacient.contact.age}<br/>
                            <Divider fitted/>
                            <span class="ui grey tiny header">{labels.contact.address}</span><br/>{pacient.contact.address}
                            </p>
                        </Segment>
                        </Grid.Column>
                        <Grid.Column width='8'>
                        <Segment compact basic>
                            <p>
                            <span class="ui grey tiny header">{labels.contact.phone}</span><br/>{pacient.contact.phone}<br/>
                            <Divider fitted/>
                            <span class="ui grey tiny header">{labels.contact.email}</span><br/>{pacient.contact.email}
                            </p>
                        </Segment>
                        </Grid.Column>
                    </Grid>
                    <Segment basic>
                        <b>Deporte: </b>            {pacient.sports} <br></br>
                        <b>Antecedentes: </b>       {pacient.background}<br></br>
                        <b>Trauma: </b>             {pacient.trauma} <br></br>
                        <b>Cirugias: </b>           {pacient.surgery} <br></br>
                        <b>Enfermedades: </b>       {pacient.disease} <br></br>
                        <b>Referencia: </b>         {pacient.reference} <br></br>
                        <b>Motivo de consulta: </b> {pacient.reason} <br></br>
                        <b>Evolution: </b>          {pacient.evolution}
                    </Segment>
                    <Button.Group floated='right'>
                        <Button basic color='green'>
                        <Icon name='edit' />
                        Editar
                        </Button>
                        <Button basic color='red' >
                        <Icon name='close' />
                        Eliminar
                        </Button>
                    </Button.Group>
                </Modal.Description>
          </Modal.Content>
        );
    }
}