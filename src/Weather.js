import React from 'react';
import styles from './index.css';


class Weather extends React.Component {
  
  render() {
    return(

    this.props.weather.map((value, idx) => 
    <tr key={idx}>
      <td><img className={styles.weathericon}
        src={value.icon}
        alt="Weather on Date"
      /></td>
      <td>{value.date}</td>
      <td>High: {value.maxtemp}°F | Low: {value.mintemp}°F</td>
      <td>{value.description}</td>
    </tr>

    )
  )
}}

export default Weather

