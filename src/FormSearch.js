import React from 'react';
import styles from './index.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';


class FormSearch extends React.Component {
  
  render() {
    return(
      <Form onSubmit={this.props.getLocation} className={styles.searchbar}>
        <InputGroup className="mb-3">
          <FormControl 
            placeholder="Enter City Name"
            aria-label="Enter City Name"
            aria-describedby="basic-addon2"
            onChange={this.props.onChange}></FormControl>
          <Button type="submit" variant="dark" id="button-addon2">
            Explore!
          </Button>
        </InputGroup>
        </Form>
    )
  }

}


export default FormSearch;