import React, { Component } from 'react'
// import { Card, Feed } from 'semantic-ui-react'
import { List, Image, Divider,Icon, Modal, Button, Header } from 'semantic-ui-react'

class PacientListCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShopping: true
    }
    // this.getPicture = this.getPicture.bind(this)
  }

  render () {
    const pacient = this.props.pacient
    return (
      <Modal
        trigger={
          <List.Item fluid>
            <Image avatar size='tiny' src={pacient.picture} />
            <List.Content >
              <List.Header fluid as='h3'>
                {pacient.contact.lastname} {pacient.contact.name}
                <Divider fitted hidden />
              </List.Header>
              <List.Description fluid>
                <i>{pacient.contact.email}</i>
                <br></br>
                <b>Trauma:</b> {pacient.trauma}
                <br></br>
                <b>Motivo de consulta:</b> {pacient.background}
                </List.Description>
                </List.Content>
                <Button  floated='right' size = 'mini' circular basic icon='close' color='red'></Button>
                <Button  floated='right' size = 'mini' circular basic icon='edit' color='green'></Button>
          </List.Item>
      }>
        <Modal.Header>Ficha Kinesica</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={pacient.picture} />
          <Modal.Description>
            <Header>Datos Personales</Header>
            <p>
              <b>Edad: </b>
              {pacient.contact.age} <br></br>
              <b>Direccion: </b>
              {pacient.contact.address}
              <br></br>
              <b>Telefono: </b>
              {pacient.contact.phone}
              <br></br>
              <b>Email: </b>
              {pacient.contact.email}{' '}
            </p>
            <Divider />
            
            
              <b>Deporte: </b>sports
              {pacient.sports} <br></br>
              <b>Antecedentes: </b>
              {pacient.background}
              <br></br>
              <b>Trauma: </b>
              {pacient.trauma}
              <br></br>
              <b>Sirugias: </b>
              {pacient.surgery}
              <br></br>
              <b>Enfermedades: </b>
              {pacient.disease}
              <br></br>
              <b>Referencia: </b>
              {pacient.reference}
              <br></br>
              <b>Motivo de consulta: </b>
              {pacient.reason}
              <b>Evolution: </b>
              {pacient.evolution}
              <Divider hidden/>
              <Button.Group floated='right'>
              <Button    icon='edit' color='green'><Icon name= 'edit'/>Editar</Button>
              <Button   color='red'><Icon name = 'close'/>Eliminar</Button>
              </Button.Group>
            </Modal.Description>
            </Modal.Content>
      </Modal>
    )
  }
}

export default PacientListCard
