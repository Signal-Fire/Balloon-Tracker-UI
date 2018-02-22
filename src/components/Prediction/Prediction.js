import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';

export default class Prediciton extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            position: {}
        }
    }
    componentDidMount() {
        return fetch('http://localhost:8080/predict', {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              position: this.populatePosition(responseJson)
            }, function() {
            });
          })
          .catch((error) => {
            console.error(error);
          });
    }

    populatePosition(json) {
        var position = {};

        position.lat = json.lat;
        position.lon = json.lon;
        
        return position;
    }

    render() {
        return (
            <Segment>
                <Grid.Row>
                    <h2>Predicted Location</h2>
                </Grid.Row>
                <Grid.Row columns = {2}>
                    <Grid.Column>
                        <p><strong>Lat:</strong> {this.state.position.lat}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Lon:</strong> {this.state.position.lon}</p>
                    </Grid.Column>
                    <br />
                </Grid.Row>
            </Segment>
        )
    }
}
