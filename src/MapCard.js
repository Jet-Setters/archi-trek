import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class MapCard extends React.Component {

  render() {
    return (

      <Container >
          <Col>
            <Card.Img variant="top" src={this.props.map} />
            <Card.Body >
              <Card.Title>{this.props.location.display_name}</Card.Title>
              <Row>
                <Col>
              <Card.Text>Lat: {this.props.location.lat}</Card.Text>
              </Col>
              <Col>
              <Card.Text>Lon: {this.props.location.lon}</Card.Text>
              </Col>
              </Row>
              {/* <Button variant="dark">Bookmark Location</Button> */}
            </Card.Body>
          </Col>
      </Container>
    
    )
  }
}

export default MapCard