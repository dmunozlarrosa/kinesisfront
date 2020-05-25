import React, { Component } from 'react'
import PacientList from './componenets/PacientList/PacientList.component'
import { pacientData, pacientLabels } from './data'
import UserComponent from './UserComponent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pacientFilterPacient: ''
    }
    this.handleFilterPacient = this.handleFilterPacient.bind(this);
  }

  // componentDidMount () {
  //   // this.pacient = pacientData
  //   this.setState({ pacientList: pacientData })
  // }
  
  handleFilterPacient(e){
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
        <PacientList pacients={pacientData}
                     labels  ={pacientLabels} > </PacientList>
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
