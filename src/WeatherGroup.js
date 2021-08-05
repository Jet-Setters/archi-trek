import React from 'react';
import Card from 'react-bootstrap/Card'
import styles from './Weather.module.css';

class Weather extends React.Component {
    
  render() {
    return(
    <div id="weatherBox">
    {this.props.weather.map((value, idx) => 
      <Card key={idx} border="dark" className={styles.weatherCard}>
        <Card.Img variant="top" src={value.icon} />
          <Card.Title >{value.date}</Card.Title>
        <Card.Body>
          <Card.Text>
          High: {value.maxtemp}°F
          </Card.Text>
          <Card.Text>
          Low: {value.mintemp}°F
          </Card.Text>
          <Card.Text>
          Forecast: {value.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )}
    </div>
  )}
}

export default Weather