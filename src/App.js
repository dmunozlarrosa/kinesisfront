import React, { Component } from 'react'
import PacientList from './componenets/PacientList/PacientList.component'
import { pacientData, pacientLabels } from './Data/data'

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
    return (
      <div className='App'>
        <PacientList pacients={pacientData}
                     labels  ={pacientLabels} />
      </div>
    )
  }
}

export default App