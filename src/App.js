import React, { Component } from 'react';

import Header from './components/molecules/Header'
import MedicationOrdersScreen from './components/organisms/MedicationOrdersScreen'
import { getMedicationOrders } from './services/bffClient'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRouteName: "Medication Orders",
      medicationOrders: []
    }
  }

  componentDidMount() {
    getMedicationOrders()
      .then((res) => this.setState({
        medicationOrders: res.medicationOrders
      }))
  }


  render() {
    return (
      <div>
        <Header title={this.state.currentRouteName}/>
        <MedicationOrdersScreen medicationOrders={this.state.medicationOrders}/>
      </div>
    )
  }
}

export default App;
