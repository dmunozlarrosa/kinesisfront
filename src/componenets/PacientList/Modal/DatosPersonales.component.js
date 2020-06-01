import React, { Component } from 'react';
import { chunkifyObject, getFilteredObject } from '../../../Helpers.js';
import { Modal, Table, Item, Grid, Segment } from 'semantic-ui-react';

export default class DatosPersonales extends Component {
    constructor(props){
        super(props);
        this.getTableRows      = this.getTableRows.bind(this);
    }
    
    getTableRows(data, labels){
        const rows = [];
        Object.keys(labels).forEach(x => { 
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

    render() {
        let pacientData    = getFilteredObject(this.props.pacient, "_id",  "contact",   "picture", "ficha" ); 
        let pacientLabels  = getFilteredObject(this.props.labels, "_id",  "contact",   "picture", "ficha"); 
        let pacientsMatrix = chunkifyObject(pacientData  , 2);
        let labelsMatrix   = chunkifyObject(pacientLabels, 2);
        let tableRows = [];
        tableRows.push(this.getTableRows(this.props.pacient.contact, this.props.labels.contact));
        tableRows.push(this.getTableRows(pacientsMatrix[0], labelsMatrix[0]));
        tableRows.push(this.getTableRows(pacientsMatrix[1], labelsMatrix[1]));
        return (
            <Modal.Description>
                <Item.Group>
                    <Item>
                        <Item.Image avatar size='medium'  src={this.props.pacient.picture}  />
                        <Item.Content>
                            <Table definition unstackable>
                                {tableRows[0]}          
                            </Table>
                        </Item.Content>
                    </Item>
                    <Segment basic>
                        <Grid doubling columns={2} stretched>
                            <Grid.Column>
                                <Table basic='very' unstackable>
                                    {tableRows[1]}          
                                </Table>
                            </Grid.Column>
                            <Grid.Column>
                                <Table basic='very' unstackable>
                                    {tableRows[2]}          
                                </Table>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Item.Group>  
            </Modal.Description>
        );
    }
}