import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';

export default class Position extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            position: {}
        }
    }
    componentDidMount() {
        return fetch('http://90.240.40.70:8080/find', {
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
              position: this.populatePositions(responseJson)
            }, function() {
            });
          })
          .catch((error) => {
            console.error(error);
          });
    }

    populatePositions(json) {
        let pos = json.length - 5;
        var position = {};

        position.lat = json[pos].lat;
        position.lon = json[pos].long;
        position.alt = json[pos].alt;
        
        return position;
    }

    render() {
        return (
            <Segment>
                <Grid.Row>
                    <h2>Current Location</h2>
                </Grid.Row>
                <Grid.Row columns = {3}>
                    <Grid.Column>
                        <p><strong>Lat:</strong> {this.state.position.lat}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Lon:</strong> {this.state.position.lon}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Alt:</strong> {this.state.position.alt} <small>m</small></p>
                    </Grid.Column>
                </Grid.Row>
            </Segment> 
        )
    }
}
