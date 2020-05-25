import React, { Component } from 'react'
import ItemContent from './ItemContent.component'
import ModalContent from './ModalContent.component'
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
            <ItemContent pacient={pacient}/> 
          </List.Item>}>
        <Modal.Header> 
          <Header as='h2'>
            <Image circular size = 'huge' src={pacient.picture} />
            {pacient.contact.name} {pacient.contact.lastname} 
          </Header>
        </Modal.Header>
        <ModalContent pacient = {pacient}></ModalContent>
        <ModalContent pacient = {pacient}></ModalContent>
      </Modal>
    )
  }
}

export default Item
// <Header as='h2'>
//     <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
//   </Header>