import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class DayPlanner extends React.Component {
  constructor(props) {
    super(props);

    
  }
  render() {
    return(
      {this.props.planner.map( (value, i) => {
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{value.date}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </Card>
      })}
    )
  }
}
