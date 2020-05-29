import React, { Component } from 'react';
import { Modal, Header,  Image,Table, Item, Grid, Segment, Button, Icon, Divider, Accordion } from 'semantic-ui-react'
export default class ModalContent extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index  
      this.setState({ activeIndex: newIndex })

      this.getTableRows      = this.getTableRows.bind(this);
      this.getAcordionObject = this.getAcordionObject.bind(this);
    }

    getAcordionObject(name, title, index){
        const { activeIndex } = this.state;
        return(
        <Accordion.Title active={activeIndex === 0} index={index} onClick={this.handleClick}>
            <Divider horizontal>
                <Header as='h4'>
                    <i><Icon name='dropdown' color = 'grey' />
                    <Icon size = 'big' name={name} color='grey'/></i>
                    {title}
                </Header>
            </Divider>
        </Accordion.Title>)
    }

    getTableRows(data, labels){
        const rows = [];
        Object.keys(labels).forEach(x => { 
            if(x != "_id")
                rows.push(
                    <Table.Row>
                        <Table.Cell width={2}>
                            <span class="ui grey tiny header">{labels[x]}</span>
                        </Table.Cell>
                        <Table.Cell>
                            {data[x]}
                        </Table.Cell>
                    </Table.Row>
                )
        }) 
        return  rows;
    }

    getTableRows2(data, labels){
        const rows = [];
        let dataSize = labels.length/2;
        if(dataSize == 0) return("") 
        Object.keys(labels).forEach((x,i, keys) => { 
            if(x != "contact" && x != "_id" && x != "picture" && i % 2 == 0)
                rows.push(
                    <Table.Row>
                        <Table.Cell collapsing width={2}>
                            <span class="ui grey tiny header">{labels[x]?labels[x]:""}</span>
                        </Table.Cell>
                        <Table.Cell width={6}>
                            {data[x]?data[x]:""}
                        </Table.Cell>
                        <Table.Cell disabled  width={2}>
                            <span class="ui grey tiny header">{labels[keys[i+1]]?labels[keys[i+1]]:""}</span>
                        </Table.Cell>
                        <Table.Cell>
                            {data[keys[i+1]]?data[keys[i+1]]:""}
                        </Table.Cell>
                    </Table.Row>
                )
        }) 
        return  rows;
    }
  
    render() {
        const { activeIndex } = this.state;
        const tableRows = this.getTableRows(this.props.pacient.contact, this.props.labels.contact);
        const tableRows2 = this.getTableRows2(this.props.pacient, this.props.labels);
        const acordionDatosPersonales = this.getAcordionObject("address card outline","Datos Personales",0)
        const acordionFichaKinesica = this.getAcordionObject("boy","Ficha Kinesica",1)
        return (
            <Modal.Content image>
                <Accordion fluid >
                    {acordionDatosPersonales}
                    <Accordion.Content active={activeIndex === 0}>
                        <Modal.Description >
                            <Item.Group>
                                <Item>
                                    <Item.Image avatar size='medium'  src={this.props.pacient.picture}  />
                                    <Item.Content>
                                        <Table definition>
                                            {tableRows}          
                                        </Table>
                                    </Item.Content>
                                </Item>
                                <Item>
                                    <Item.Content>
                                    <Table stackable very basic >
                                        {tableRows2}          
                                    </Table>
                            
                                    </Item.Content>
                                </Item>  
                            </Item.Group>  
                            <Item.Description>
                            </Item.Description>  
                        </Modal.Description>
                    </Accordion.Content>
                    {acordionFichaKinesica}
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                        There are many breeds of dogs. Each breed varies in size and
                        temperament. Owners often select a breed of dog that they find to be
                        compatible with their own lifestyle and desires from a companion.
                        </p>
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