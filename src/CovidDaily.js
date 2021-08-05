import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class CovidDaily extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataPie: {
        labels: ["Confirmed", "Critical", "Deaths", "Recovered"],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#AC64AD"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#DA92DB"
            ]
          }
        ]
    }}
  }
  
  // importData = () => {
  //   const data = []
  //   data[0] = this.props.covid.latest_data.confirmed
  //   data[1] = this.props.covid.latest_data.critical
  //   data[2] = this.props.covid.latest_data.deaths
  //   data[3] = this.props.covid.latest_data.recovered
  //   console.log(data)
  //   this.setState({ data: data })
  // }

  // importData

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Pie chart</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default CovidDaily;