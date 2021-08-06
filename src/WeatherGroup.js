import React from 'react';
// import styles from './index.css';
import Table from 'react-bootstrap/Table'
import Weather from './Weather.js'


class WeatherGroup extends React.Component {
  
  
  render() {
    return(
    <div id="weatherBox"> 
    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Forecast</th>
          <th>Temperatures</th>
        </tr>
      </thead>
      <tbody>
      <Weather weather={this.props.weather} addItem={this.addItem}/>
      </tbody>
    </Table>
    </div>
  )}
}

export default WeatherGroup