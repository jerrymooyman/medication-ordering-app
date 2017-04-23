import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MedicationOrderCard = ({ medicationOrder }) => {
  const { id, medication, dose, patient, requestedBy } = medicationOrder
  const title = `${patient.lastName.toUpperCase()}, ${patient.firstName} (${patient.age}yo)`
  const subtitle = `${medication.name}`
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={subtitle}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
}

export default MedicationOrderCard;
