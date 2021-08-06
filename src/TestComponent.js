import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
    
    <MDBContainer>
      <h3 id="h3covid" className="mt-5">HISTORICAL COVID DATA</h3>
      <Pie data={this.props.dataPie} options={{ responsive: true }} />
    </MDBContainer >
    </>
    )
  }
}

export default Test