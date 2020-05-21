import React, { Component } from 'react'
import PacientListCard from './PacientListCard.component'
import FilterUser from './FilterUser.component'
import { List,Button, Input, Container } from 'semantic-ui-react'

class PacientList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pacientFilterUser: ''
    }
    this.handleFilterUser = this.handleFilterUser.bind(this);
  }
  handleFilterUser(e){
    this.setState({pacientFilterUser: e.target.value})
  }

  getPacientList () {
    const rows = []
    // const filterInput = this.props.filterInput.toLowerCase()
    let pacients = this.props.pacients
    if (!pacients) return ''
    pacients.forEach(p => {
      let lowerName = p.contact.name.toLowerCase()
      let lowerLastName = p.contact.lastname.toLowerCase()
      //   .replace(p.contact.name[0], p.contact.name[0].toUpperCase)
      if (lowerName.indexOf(    this.state.pacientFilterUser.toLowerCase()) != -1 ||
          lowerLastName.indexOf(this.state.pacientFilterUser.toLowerCase()) != -1 ) 
          rows.push(<PacientListCard pacient={p} />)
    })
    return rows;
  }

  render () {
    let pacientList = this.getPacientList()
    return (
      <Container text style={{ marginTop: '7em' }}>
        <FilterUser filter           = {this.state.pacientFilterUser}
                    handleFilterUser = {this.handleFilterUser}/>
        
        <List divided relaxed>
          {pacientList}
        </List>
      </Container>
    )
  }
}

export default PacientList
