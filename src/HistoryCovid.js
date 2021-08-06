import React, { useState, useEffect } from "react";
// import { Pie } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";
import Test from './TestComponent.js'

const HistoryCovid = (props) => {
  
  const [dataPie, setDataPie] = useState({});
  const [savedChartData, setSavedChartData] = useState({});
  
  useEffect(() => {
    console.log("in child", props.covidOverview)
    delete props.covidOverview.calculated;
    const chartData = Object.values(props.covidOverview);
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
    console.log("chart data", chartData)
    // setTimeout(function() {
      console.log("Work")
      setSavedChartData(chartObj)
      setDataPie(savedChartData)
      // }, 2000)
      // }
    }, [props.covidOverview])
    
    return (
    <>

    <Test covidSearch={props.covidSearch} dataPie={dataPie} />
    {/* {props.covidSearch.length > 0 ?
    <MDBContainer>
      <h3 id="h3covid" className="mt-5">HISTORICAL COVID DATA</h3>
      <Pie data={dataPie} options={{ responsive: true }} />
    </MDBContainer> : ""
    } */}
    </>
  );
}


export default HistoryCovid;