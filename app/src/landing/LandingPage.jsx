import React, { Component } from "react";
import { Responsive, Segment, Grid, Label, Button } from "semantic-ui-react";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Responsive as={Grid}>
          <Grid>
            <Grid.Column width={16}>
              <Segment.Group>
                <Segment clearing>
                  <Label as="a" color="teal" tag>
                    Select Language:
                  </Label>

                  <Button.Group>
                    <Button size="massive">
                      <i class="us flag" />
                      English
                    </Button>

                    <Button.Or />

                    <Button size="massive">
                      <i class="fr flag" />
                      French
                    </Button>

                    <Button.Or />

                    <Button size="massive">
                      <i class="de flag" />
                      German
                    </Button>

                    <Button.Or />

                    <Button size="massive">
                      <i class="it flag" />
                      Italian
                    </Button>

                    <Button.Or />

                    <Button size="massive">
                      <i class="ru flag" />
                      Russian
                    </Button>

                    <Button.Or />

                    <Button size="massive">
                      <i class="es flag" />
                      Spanish
                    </Button>
                  </Button.Group>
                </Segment>
                <Segment clearing>
                  <Label as="a" color="teal" tag>
                    Select Slot:
                  </Label>

                  <Button.Group>
                    <Button floated="left" size="massive">
                      8 AM
                    </Button>

                    <Button.Or />

                    <Button floated="left" size="massive">
                      10 AM
                    </Button>

                    <Button.Or />

                    <Button floated="left" size="massive">
                      12 AM
                    </Button>

                    <Button.Or />

                    <Button floated="left" size="massive">
                      2 PM
                    </Button>

                    <Button.Or />

                    <Button floated="left" size="massive">
                      4 PM
                    </Button>

                    <Button.Or />

                    <Button floated="left" size="massive">
                      6 PM
                    </Button>
                  </Button.Group>
                </Segment>
                <Segment fluid>
                  <Label as="a" color="teal" tag>
                    Select Date:
                  </Label>

                  <input name="date" type="date" placeholder="Select Date" />
                </Segment>
                <Segment fluid>
                  <Button fluid size="massive" color="green">
                    Book Tickets
                  </Button>
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        </Responsive>
      </div>
    );
  }
}

export default LandingPage;
