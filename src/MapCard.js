import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class MapCard extends React.Component {

  render() {
    return (

      <Container >
        <Row>
          <Col>
            <Card.Img variant="top" src={this.props.map} />
          </Col>
          <Col>
            <Card.Body >
              <Card.Title>{this.props.location.display_name}</Card.Title>
              <Card.Text>Lat: {this.props.location.lat}</Card.Text>
              <Card.Text>Lon: {this.props.location.lon}</Card.Text>
              <Button variant="primary">Bookmark Location</Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    
    )
  }
}

export default MapCard