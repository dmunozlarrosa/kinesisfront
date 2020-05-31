import React, { Component } from 'react'
import ItemContent from './ItemContent.component'
import PacientModal from './Modal/PacientModal.component'
import { List,  Image,  Modal, Header} from 'semantic-ui-react'

class Item extends Component {
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
      <Modal trigger={
          <List.Item fluid>    
            <Image avatar size='tiny' src={pacient.picture} />
            <ItemContent pacient={pacient}
                         labels ={this.props.labels}/> 
          </List.Item>}>
        <Modal.Header> 
          <Header as='h2'>
            <Image circular src={pacient.picture}></Image>
            <Header.Content>
              {pacient.contact.name} {pacient.contact.lastname}
              <Header.Subheader>{pacient.contact.age} años - {pacient.trauma} </Header.Subheader>       
            </Header.Content>    
          </Header>
        </Modal.Header>
        <PacientModal pacient = {pacient}
                      labels  = {this.props.labels}></PacientModal>
      </Modal>
    )
  }
}

export default Item
// <Header as='h2'>
//     <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
//   </Header>