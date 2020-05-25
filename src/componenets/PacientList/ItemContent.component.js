import React, { Component } from 'react'
import { List, Divider } from 'semantic-ui-react'

export default class ItemContent extends Component {
  render () {
    const pacient = this.props.pacient;
    return (        
        <List.Content>
          <List.Header fluid as='h3'>
            {pacient.contact.lastname} {pacient.contact.name}
            <Divider fitted hidden />
          </List.Header>
          <List.Description fluid>
            <i>{pacient.contact.email}</i> <br></br>
            <b>Trauma:</b> {pacient.trauma}<br></br>
            <b>Motivo de consulta:</b> {pacient.background}
          </List.Description>
        </List.Content>      
    )
  }
}
