import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return(

    this.props.weather.map((value, idx) => 
    <tr key={idx}>
      <td><img 
        src={value.icon}
        alt="Weather on Date"
      /></td>
      <td>{value.date}</td>
      <td>{value.description}</td>
      <td>{value.mintemp}°F</td>
      <td>{value.maxtemp}°F</td>
    </tr>

    )
  )
}}

export default Weather