import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class FilterUser extends Component {
  render () {
    return (
        <Input fluid
               action={{ icon: 'search' }} 
               
               placeholder='Buscar paciente...'
               value={this.props.filter}
               onChange = {this.props.handleFilterUser}>
               <input />
               <Button icon='search' color='gray'/>
               <Button icon='plus'   color='green'/>
        </Input>       
    )
  }
}

export default FilterUser;
