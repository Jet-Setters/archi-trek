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
import HistoryCovid from './HistoryCovid.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      map: "",
      weather: [],
      covidOverview: [],
      covidDaily: [],
      error: "",
      searchQuery: ""
    }
  }

  getLocation = async (e) => {
    const local = "http://localhost:3002";
    // const heroku = "https://archi-trek.herokuapp.com/"
    
      
    e.preventDefault();
      try {
      const locationAPI = `${local}/location?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(locationAPI)
      this.setState({ location: response.data[0] })
      
      const mapAPI = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API}&center=${response.data[0].lat},${response.data[0].lon}&zoom=10`;
      this.setState({ map: mapAPI })
      
      const weatherAPI = `${local}/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&searchQuery=${this.state.searchQuery}`;
      const weatherResponse = await axios.get(weatherAPI);
      const shorterWeather = weatherResponse.data.slice(0, 8)
      this.setState({ weather: shorterWeather })
  
      const covidAPI = `${local}/covid?address=${this.state.location.display_name}`
      const covidResponse = await axios.get(covidAPI);
      this.setState({ covidOverview: covidResponse.data.data.latest_data })
      console.log("State", this.state.covidOverview)
      this.setState({ covidDaily: covidResponse.data.data.today })
      console.log(covidResponse.data)
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
              <HistoryCovid covidOverview={this.state.covidOverview}/>
            </Col>
          </Row>
        </Container>
        <WeatherGroup weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
