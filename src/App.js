import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.js';
import FormSearch from './FormSearch.js';
import WeatherGroup from './WeatherGroup.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HistoryCovid from './HistoryCovid.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapBox from './MapBox.js'
import ImgBar from './ImgBar.js'
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
      searchQuery: "",
      dateValue: "",
      formattedDateValue: "",
      startDate: "",
      endDate: "",
      locationImages: []
    }
  }
    
  getFormSubmit = async(e) => {
    e.preventDefault();
    const local = "http://localhost:3002";
    // const heroku = "https://archi-trek.herokuapp.com/"
    try {
      const locationAPI = `${local}/location?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(locationAPI)

      console.log("Search", this.state.searchQuery)
      
      const weatherAPI = `${local}/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&searchQuery=${this.state.searchQuery}`;
      const weatherResponse = await axios.get(weatherAPI);
      
      const shorterWeather = weatherResponse.data.slice(0, 8)
      
      const dayPlannerAPI = `${local}/planner?searchQuery=${this.state.searchQuery}&start_date=${this.state.startDate}&end_date=${this.state.endDate}`;
      const plannerResponse = await axios.get(dayPlannerAPI);
      console.log(plannerResponse)
      
      
      const covidAPI = `${local}/covid?address=${response.data[0].display_name}`
      console.log(response.data[0].display_name)
      const covidResponse = await axios.get(covidAPI);
      
      const imgBarArray = [plannerResponse.data.results[0].days[0].itinerary_items[0].poi.images[0].sizes.medium.url, plannerResponse.data.results[0].days[0].itinerary_items[1].poi.images[0].sizes.medium.url, plannerResponse.data.results[0].days[0].itinerary_items[2].poi.images[0].sizes.medium.url, plannerResponse.data.results[0].days[0].itinerary_items[3].poi.images[0].sizes.medium.url]

      this.setState({ 
        location: response.data[0],
        lat: response.data[0].lon,
        lng: response.data[0].lat,
        // planner: plannerResponse.data.results[0].days[0].itinerary_items,
        weather: shorterWeather,
        locationImages: imgBarArray,
        covidOverview: covidResponse.data.data.latest_data,
        covidDaily: covidResponse.data.data.today
      })
      console.log("Planner images", this.state.planner[0].poi.images[0].sizes.medium.url)
      console.log("Planner State", this.state.planner)
    } catch (error) {
      // this.setState({errors: error.response.data.error, showError: true})
    }
  }
  
  handleStartDateChange = async (e) => {
  this.setState({
    startDate: e.target.value
    });
  }

  handleEndDateChange = async (e) => {
    this.setState({
      endDate: e.target.value
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
            </Col>
            <div id="mapBox">
              <MapBox lat={this.state.lat} lng={this.state.lng}/>
            </div>
          </Row>
        </Container>
        <div className="imgbar">
            <ImgBar locationImages={this.state.locationImages}/>
        </div>
        <Container>
          <Row>
            <Col >
              <HistoryCovid covidOverview={this.state.covidOverview}/>
            </Col>
            <Col >
              <WeatherGroup weather={this.state.weather} />
            </Col>
          </Row>
              {/* <DayPlanner planner={this.state.planner} /> */}
        </Container>
      </div>
    );
  }
}

export default App;
