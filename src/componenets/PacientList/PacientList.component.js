import React, { Component } from 'react'
import Item from './Item.component'
import FilterPacient from './FilterPacient.component'
import { List,Button, Input, Container } from 'semantic-ui-react'

class PacientList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pacientFilterPacient: ''
    }
    this.handleFilterPacient = this.handleFilterPacient.bind(this);
  }
  handleFilterPacient(e){
    this.setState({pacientFilterPacient: e.target.value})
  }

  getPacientList () {
    const rows = []
    // const filterInput = this.props.filterInput.toLowerCase()
    let pacients = this.props.pacients
    let labels= this.props.labels
    if (!pacients) return ''
    pacients.forEach(p => {
      let lowerName = p.contact.name.toLowerCase()
      let lowerLastName = p.contact.lastname.toLowerCase()
      //   .replace(p.contact.name[0], p.contact.name[0].toUpperCase)
      if (lowerName.indexOf(    this.state.pacientFilterPacient.toLowerCase()) != -1 ||
          lowerLastName.indexOf(this.state.pacientFilterPacient.toLowerCase()) != -1 ) 
          rows.push(
            <Item pacient = {p} 
                  labels  = {labels}/>
          );
    })
    return rows;
  }

  render () {
    let pacientList = this.getPacientList()
    return (
      <Container text style={{ marginTop: '7em' }}>
        <FilterPacient filter           = {this.state.pacientFilterPacient}
                    handleFilterPacient = {this.handleFilterPacient}/>
        
        <List divided relaxed>
          {pacientList}
        </List>
      </Container>
    )
  }
}

export default PacientList
