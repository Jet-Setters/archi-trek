import React from 'react';
import Card from 'react-bootstrap/Card';

class DayPlanner extends React.Component {
 

  render() {
    console.log("props", this.props.planner)
    return(
    <>
      {/* {this.props.planner.map((element, idx) => */}
          <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src={this.props.planner[0].poi.images[0].sizes.medium.url} /> */}
          <Card.Body>
            {/* <Card.Title>{this.props.planner[0].description}</Card.Title> */}
          </Card.Body>
        </Card>
        {/* ) */}
      {/* } */}
    </>
      
   )
}}
 
export default DayPlanner;



