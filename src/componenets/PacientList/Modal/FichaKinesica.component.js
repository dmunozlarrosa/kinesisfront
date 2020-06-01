import React, { Component } from 'react'
import { Image, ModalDescription, Item, Segment } from 'semantic-ui-react'

export default class FichaKinesica extends Component {
    
    render () {
    // const Example = ({ data }) => <img src={`data:image/png;base64,${data}`} />
    return (
      <ModalDescription>
        <Item.Group>
          <Item>
            <Item.Image rounded size='big' src={this.props.ficha.examenDinamico}/>    
              <Item.Content >
                <Segment basic = "very">
                    <p>
                    Thereasda are many breeds of dogs. Each breed varies in size and
                    temperament. Owners often select a breed of dog that they find to be
                    compatible with their own lifestyle and desires from a companion.
                    </p>
                </Segment>
              </Item.Content>
          </Item>
          <Item>
            <Item.Image rounded size='big' src={this.props.ficha.examenEstatico}/>    
                <Item.Content >
                    <Segment basic = "very">
                        <p>
                        Thereasda are many breeds of dogs. Each breed varies in size and
                        temperament. Owners often select a breed of dog that they find to be
                        compatible with their own lifestyle and desires from a companion.
                        </p>
                    </Segment>
                </Item.Content>
            </Item>
        </Item.Group>
      </ModalDescription>
    )
  }
}
