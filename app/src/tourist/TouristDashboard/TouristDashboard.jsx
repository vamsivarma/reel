import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import TouristList from '../TouristList/TouristList';
import TouristForm from '../TouristForm/TouristForm';

const touristDashboard = [];

class TouristDashboard extends Component {
  state = {
    Tourists: touristDashboard,
    isOpen: false,
    selectedTourist: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedTourist: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateTourist = (updatedTourist) => {
    this.setState({
      Tourists: this.state.Tourists.map(Tourist => {
        if (Tourist.id === updatedTourist.id) {
          return Object.assign({}, updatedTourist)
        } else {
          return Tourist
        }
      }),
      isOpen: false,
      selectedTourist: null
    })
  }

  handleOpenTourist = (TouristToOpen) => () => {
    this.setState({
      selectedTourist: TouristToOpen,
      isOpen: true
    })
  } 
  

  handleCreateTourist = (newTourist) => {
    newTourist.id = cuid();
    newTourist.hostPhotoURL = 'assets/user.png';
    const updatedTourists = [...this.state.Tourists, newTourist];
    this.setState({
      Tourists: updatedTourists,
      isOpen: false
    })
  }

  handleDeleteTourist = (TouristId) => () => {
    const updatedTourists = this.state.Tourists.filter(e => e.id !== TouristId);
    this.setState({
      Tourists: updatedTourists
    })
  }

  render() {
    const {selectedTourist} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <TouristList deleteTourist={this.handleDeleteTourist} Tourists={this.state.Tourists} onTouristOpen={this.handleOpenTourist} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Add Tourist"
          />

          {this.state.isOpen && <TouristForm updateTourist={this.handleUpdateTourist} selectedTourist={selectedTourist} handleCancel={this.handleCancel} createTourist={this.handleCreateTourist} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default TouristDashboard;
