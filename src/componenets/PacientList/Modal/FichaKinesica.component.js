import React, { Component } from 'react';
import { Modal, ModalDescription} from 'semantic-ui-react'

export default class FichaKinesica extends Component {
    render() {
        return (
            <ModalDescription>
                <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
                </p>
            </ModalDescription>
        );
    }
}