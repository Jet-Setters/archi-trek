import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.js'
import MapCard from './MapCard.js';
import FormSearch from './FormSearch.js';
import WeatherGroup from './WeatherGroup.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      map: "",
      weather: [],
      covid: [],
      error: "",
      searchQuery: ""
    }
  }

  getLocation = async (e) => {
    const local = "http://localhost:3002";
    
      
    e.preventDefault();
      try {
      const locationAPI = `${local}/location?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(locationAPI)
      this.setState({ location: response.data[0] })
      
      const mapAPI = `${local}/map?lat=${this.state.lat}&lon=${this.state.lon}`;
      const mapResponse = await axios.get(mapAPI);
      this.setState({ map: mapResponse.config.url })
      
      const weatherAPI = `${local}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}&searchQuery=${this.state.searchQuery}`;
      const weatherResponse = await axios.get(weatherAPI);
      this.setState({ weather: weatherResponse.data })
  
      // const covidAPI = `${local}/covid?address=${this.state.location.display_name}`
      // const covidResponse = await axios.get(covidAPI);
      // this.setState({ covid: covidResponse.data })
    //  console.log(this.state.searchQuery);
      } catch (error) {
        // this.setState({errors: error.response.data.error, showError: true})
      }
    }

    onChange = async (e) => {
      this.setState({ searchQuery: e.target.value })
    }

  render() {
    return (
      <div>
        <Navbar className = "App"/>
        <Container fluid="lg" className="heroDiv">
          <Row>
            <Col>
              <FormSearch getLocation={this.getLocation} onChange={this.onChange} />
            
              <MapCard map={this.state.map} location={this.state.location} lat={this.state.lat} lon={this.state.lon} />
            
            </Col>
            <Col>
              <WeatherGroup weather={this.state.weather} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
