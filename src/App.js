import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.js'
// import MapCard from './MapCard.js';
import FormSearch from './FormSearch.js';
import WeatherGroup from './WeatherGroup.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HistoryCovid from './HistoryCovid.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapBox from './MapBox.js'
// import DayPlanner from './components/DayPlanner';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      lat: "",
      lon: "",
      weather: [],
      planner: [],
      covidOverview: [],
      covidDaily: [],
      error: "",
      searchQuery: "Seattle",
      dateValue: "",
      formattedDateValue: ""
    }
  }

  
  getLocation = async() => {
    const local = "http://localhost:3002";
    // const heroku = "https://archi-trek.herokuapp.com/"
    try {
      const locationAPI = `${local}/location?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(locationAPI)
      
      // const mapAPI = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API}&center=${response.data[0].lat},${response.data[0].lon}&zoom=10`;
      
      const weatherAPI = `${local}/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&searchQuery=${this.state.searchQuery}`;
      const weatherResponse = await axios.get(weatherAPI);
      
      const dayPlannerAPI = `${local}/dayPlanner?searchQuery=${this.state.searchQuery}&start_date=${this.state.start_date}&end_date=${this.state.end_date}`;
      const plannerResponse = await axios.get(dayPlannerAPI);
      
      const shorterWeather = weatherResponse.data.slice(0, 8)
      
      const covidAPI = `${local}/covid?address=${this.state.location.display_name}`
      const covidResponse = await axios.get(covidAPI);
      this.setState({ 
        location: response.data[0],
        lat: response.data[0].lon,
        lng: response.data[0].lat,
        weather: weatherResponse.data,
        planner: plannerResponse.results,
        weather: shorterWeather,
        covidOverview: covidResponse.data.data.latest_data,
        covidDaily: covidResponse.data.data.today
      })
    } catch (error) {
      // this.setState({errors: error.response.data.error, showError: true})
    }
  }
  
  componentDidMount() {
    this.getLocation()
  }
  
  getFormSubmit = async (e) => {
    e.preventDefault()
    this.getLocation()
  }
  
  handleStartDateChange = async (e) => {
    this.setState({
        startdate: e.target.value
      });
    }

    handleEndDateChange = async (e) => {
      this.setState({
        startdate: e.target.value
      });
    }

    onChangeLocation = async (e) => {
      this.setState({ searchQuery: e.target.value })
    }

  render() {
    return (
      <div>
        <Navbar className = "App"/>
        <div id="formLine"></div>
        <Container fluid="lg" className="heroDiv">
          <Row>
            <Col>
              <FormSearch getFormSubmit={this.getFormSubmit} onChangeLocation={this.onChangeLocation} handleStartDateChange={this.handleStartDateChange} handleEndDateChange={this.handleEndDateChange}/>
              {/* <MapCard map={this.state.map} location={this.state.location} lat={this.state.lat} lon={this.state.lon} /> */}
            </Col>
            <div id="mapBox">
              <MapBox lat={this.state.lat} lng={this.state.lng}/>
            </div>
            <Col>
              <HistoryCovid covidOverview={this.state.covidOverview}/>
            </Col>
            <Col>
              {/* <DayPlanner planner={this.state.planner} /> */}
            </Col>
          </Row>

        </Container>
        <WeatherGroup weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
