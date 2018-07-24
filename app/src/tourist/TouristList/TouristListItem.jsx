import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';

class TouristListItem extends Component {
  render() {
    const {Tourist, onTouristOpen, deleteTourist} = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">{Tourist.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{Tourist.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {Tourist.date}|
            <Icon name="marker" /> {Tourist.venue}
          </span>
        </Segment>
        <Segment clearing>
          <Button onClick={deleteTourist(Tourist.id)} as="a" color="red" floated="right" content="Delete" />
          <Button onClick={onTouristOpen(Tourist)} as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default TouristListItem;
