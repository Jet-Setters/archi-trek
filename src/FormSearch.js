import React from 'react';
import styles from './index.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { FormLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'


class FormSearch extends React.Component {
  
  render() {
    return(
      <Form onSubmit={this.props.getFormSubmit} className={styles.searchbar}>
        <InputGroup className="mb-3">
          <Col>
            <FormLabel>BUILD A TRIP BLUEPRINT</FormLabel>
            <FormControl 
              placeholder="Enter City Name"
              aria-label="Enter City Name"
              aria-describedby="basic-addon2"
              onChange={this.props.onChangeLocation}></FormControl>
            </Col>
            <Col sm={3}>
              <FormLabel>START DATE</FormLabel>
              <FormControl  type="date"
              aria-describedby="basic-addon2"
              onChange={this.props.handleStartDateChange}></FormControl>
            </Col>
            <Col sm={3}>
              <FormLabel>END DATE</FormLabel>
              <FormControl  type="date"
              aria-describedby="basic-addon2"
              onChange={this.props.handleEndDateChange}></FormControl>
            </Col>
              <Button type="submit" variant="dark" id="button-addon2">
                Explore!
              </Button>
        </InputGroup>
        </Form>
    )
  }

}


export default FormSearch;