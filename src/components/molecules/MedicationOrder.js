import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import debounce from 'lodash.debounce'
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle';
import MedicationOrderStateStepper from './MedicationOrderStateStepper'
import WorkOrderStatus from '../../services/workOrderStatus'

injectTapEventPlugin();

class MedicationOrderCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      status: new WorkOrderStatus()
    }
    this.handleExpandChange = this.handleExpandChange.bind(this)
    this.handleTransitionBack = this.handleTransitionBack.bind(this)
    this.handleTransitionNext = this.handleTransitionNext.bind(this)
  }

  handleExpandChange(expanded) {
    this.setState({expanded})
  }

  handleTransitionBack() {
    const status = this.state.status
    status.back()
    this.setState({ status })
  }

  handleTransitionNext() {
    const status = this.state.status
    status.next()
    this.setState({ status })
  }

  render() {
    const {id, medication, dose, priority, patient, requestedBy} = this.props.medicationOrder
    const title = `${patient.lastName.toUpperCase()}, ${patient.firstName} (${patient.age}yo)`
    const subtitle = `${medication.name}`
    const isUrgent = priority === 'URGENT'
    const urgentIcon = isUrgent ? <FaExclamationCircle style={{ height: '2em', width: '2em', color: '#D50000'}} /> : null
    return (
      <Card
        style={styles.card}
        expanded={this.state.expanded}
        onExpandChange={debounce(this.handleExpandChange)}
      >
        <CardHeader
          title={title}
          titleStyle={styles.headerTitle}
          avatar={urgentIcon}
          subtitle={subtitle}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <MedicationOrderStateStepper
          status={this.state.status}
          transitionBack={this.handleTransitionBack}
          transitionNext={this.handleTransitionNext}
        />
      </Card>
    )
  }
}

const styles = {
  card: {
    padding: '1em',
    marginTop: '1em'
  },
  headerTitle: {
    fontSize: '2em'
  }
}

export default MedicationOrderCard;
