import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyTourist = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
}

class TouristForm extends Component {

  state = {
    Tourist: emptyTourist
  }

  componentDidMount() {
    if (this.props.selectedTourist !== null) {
      this.setState({
        Tourist: this.props.selectedTourist
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTourist !== this.props.selectedTourist) {
      this.setState({
        Tourist: nextProps.selectedTourist || emptyTourist
      })
    }
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.Tourist.id) {
      this.props.updateTourist(this.state.Tourist);
    } else {
      this.props.createTourist(this.state.Tourist)
    }

  }

  onInputChange = (evt) => {
    const newTourist = this.state.Tourist;
    newTourist[evt.target.name] = evt.target.value
    this.setState({
      Tourist: newTourist
    })
  }

  render() {

    const {handleCancel} = this.props;
    const {Tourist} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Tourist Name</label>
            <input name='title' onChange={this.onInputChange} value={Tourist.title} placeholder="Tourist Name" />
          </Form.Field>
          <Form.Field>
            <label>Tourist Date</label>
            <input name='date' onChange={this.onInputChange} value={Tourist.date} type="date" placeholder="Tourist Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={Tourist.city} placeholder="City Tourist is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={Tourist.venue} placeholder="Enter the Venue of the Tourist" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.onInputChange} value={Tourist.hostedBy} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default TouristForm;
