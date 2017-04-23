import React, { Component } from 'react'
import MedicationOrder from '../molecules/MedicationOrder'

class MedicationOrdersScreen extends Component {
  render() {
    return (
      <div>
        {this.props.medicationOrders.map(mo => <MedicationOrder key={mo.id} medicationOrder={mo} />)}
      </div>
    )
  }
}

export default MedicationOrdersScreen
