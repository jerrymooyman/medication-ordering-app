import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class MedicationOrderStateStepper extends React.Component {

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'New medication order waiting to be processed'
      case 1:
        return 'What needs to be done to process this order? i.e. check patient profile, etc'
      case 2:
        return 'Order has been processed and is now available. Pickup or deliver?'
      case 3:
        return 'The order has been delivered'
      default:
        return 'Please call pharmacy for status';
    }
  }

  render() {
    // const {finished, stepIndex} = this.state;
    const { stepIndex, isFinished } = this.props.status.currentStatus
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>New Order Received</StepLabel>
          </Step>
          <Step>
            <StepLabel>Order in process</StepLabel>
          </Step>
          <Step>
            <StepLabel>Order Available</StepLabel>
          </Step>
          <Step>
            <StepLabel>Order Delivered to Ward</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {isFinished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  // this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.props.transitionBack}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'next'}
                  primary={true}
                  onTouchTap={this.props.transitionNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MedicationOrderStateStepper

