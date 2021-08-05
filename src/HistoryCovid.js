import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class HistoryCovid extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataPie: {}
      }
    }
  

  
  componentDidMount() {
    delete this.props.covidOverview.calculated;
    const chartData = Object.values(this.props.covidOverview);
    const chartObj = {
      labels: ["Confirmed", "Critical", "Deaths", "Recovered"],
        datasets: [
          {
            data: chartData,
            backgroundColor: [
              "#46BFBD",
              "#FDB45C",
              "#F7464A",
              "#AC64AD",
              "#4D5360",
              "#949FB1",
            ],
            hoverBackgroundColor: [
              "#5AD3D1",
              "#FFC870",
              "#FF5A5E",
              "#DA92DB",
              "#616774",
              "#A8B3C5",
            ]
          }
        ]
      }
    console.log("in child", this.props.covidOverview)
    console.log("chart datas", chartData)
    this.setState({ dataPie: chartObj })
    console.log("datapie", this.state.dataPie)
  }
  
      
  
  render() {
    console.log("datapie", this.state.dataPie)
    return (
      <MDBContainer>
        <h3 className="mt-5">COVID OVERVIEW</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default HistoryCovid;