import React, { Component } from 'react';
import  DatosPersonales from './DatosPersonales.component.js';
import  FichaKinesica from './FichaKinesica.component.js';
import { Modal, Header,Button, Icon, Divider, Accordion} from 'semantic-ui-react'

export default class PacientModal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
        this.getAcordionObject = this.getAcordionObject.bind(this);  
    }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index  
      this.setState({ activeIndex: newIndex })

    }

    getAcordionObject(name, title, index){
        const { activeIndex } = this.state;
        return(
        <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
            <Divider horizontal>
                <Header as='h4'>
                    <i><Icon name='dropdown' color = 'grey' />
                    <Icon size = 'big' name={name} color='grey'/></i>
                    {title}
                </Header>
            </Divider>
        </Accordion.Title>)
    }

    render() {
        const { activeIndex } = this.state;
        const acordionDatosPersonales = this.getAcordionObject("address card outline","Datos Personales",0)
        const acordionFichaKinesica = this.getAcordionObject("child","Ficha Kinesica",1)
        return (
            <Modal.Content image>
                <Accordion fluid >
                    {acordionDatosPersonales}
                    <Accordion.Content active={activeIndex === 0}>
                        <DatosPersonales pacient = {this.props.pacient} labels  = {this.props.labels}/>
                    </Accordion.Content>
                    {acordionFichaKinesica}
                    <Accordion.Content active={activeIndex === 1}>
                        <FichaKinesica ficha={this.props.ficha}/>
                    </Accordion.Content>
                    <Button.Group floated='right'>
                        <Button basic color='green'>
                            <Icon name='edit' /> Editar
                        </Button>
                        <Button basic color='red' > 
                            <Icon name='close' />Eliminar
                        </Button>
                    </Button.Group>  
                </Accordion>
            </Modal.Content>
        );
    }
}