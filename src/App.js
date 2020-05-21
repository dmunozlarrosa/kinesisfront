import React, { Component } from 'react'
// import {Col, Card} from 'semantic-ui-react';
import { Image,Card, Divider} from 'semantic-ui-react'
import PacientList from './componenets/PacientList.component'
import { pacientData } from './data'
import UserComponent from './UserComponent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pacientFilterUser: ''
    }
    this.handleFilterUser = this.handleFilterUser.bind(this);
  }

  // componentDidMount () {
  //   // this.pacient = pacientData
  //   this.setState({ pacientList: pacientData })
  // }
  
  handleFilterUser(e){
    this.setState({filterText: e.target.value})
  }

  // getPacient = number => {
  //   const { pacient } = this.state
  //   return pacient[number]
  // }

  // getUsersJSX = () => {
  //   let response;

  //   return ( response );
  // }

  render () {
    var src = "https://react.semantic-ui.com/images/avatar/large/steve.jpg";
    return (
      <div className='App'>
        <PacientList pacients={pacientData}> </PacientList>
      </div>
    )
  }
}

export default App
// <Col m={12} s={14}>
// <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
//   {this.state.pacientList.map(item => (
//      <UserComponent user = {item}/>
//   ))}
// </Card>
// </Col>
