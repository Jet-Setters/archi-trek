const axios = require('axios')

getLocation = async (e) => {
  const local = "http://localhost:3002"
    
  e.preventDefault();
    try {
    const locationAPI = `${local}/location?&searchQuery=${this.state.searchQuery}`;
    const response = await axios.get(locationAPI)
    this.setState({ location: response.data[0] })
    
    const mapAPI = `${local}/map?lat=${this.state.lat}&lon=${this.state.lon}`;
    const mapResponse = await axios.get(mapAPI);
    this.setState({ map: mapResponse.config.url })
    
    const weatherAPI = `${local}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}&searchQuery=${this.state.searchQuery}`;
    const weatherResponse = await axios.get(weatherAPI);
    this.setState({ weather: weatherResponse.data })

    const covidAPI = `${local}/covid?address=${this.state.location.display_name}`
    const covidResponse = await axios.get(covidAPI);
    this.setState({ covid: covidResponse.data })
   
    } catch (error) {
      this.setState({errors: error.response.data.error, showError: true})
    }
  }

  module.exports = getLocation;