import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';

export default class PredictorSettings extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            prediction: {}
        }
    }
    componentDidMount() {
        return fetch('http://90.240.40.70:8080/predict', {
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
              prediction: this.predict(responseJson)
            }, function() {
            });
          })
          .catch((error) => {
            console.error(error);
          });
    }

    predict(json) {
        var prediction = {};

        prediction.burst_alt = json.burst;
        prediction.ascent = json.ascent;
        prediction.descent = json.drag;
        prediction.launch_alt = json.launch_alt;

        return prediction;
    }

    render() {
        return (
            <Segment>
                <Grid.Row>
                    <h2>Predictor Parameters</h2>
                </Grid.Row>
                <Grid.Row columns = {3}>
                    <Grid.Column>
                        <p><strong>Launch Altitude:</strong> {this.state.prediction.launch_alt} <small>m</small></p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Burst Altitude:</strong> {this.state.prediction.burst_alt} <small>m</small></p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Ascent Rate:</strong> {this.state.prediction.ascent} <small>m/s</small></p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Descent Rate:</strong> {this.state.prediction.descent} <small>m/s</small></p>
                    </Grid.Column>
                </Grid.Row>
            </Segment>   
        )
    }
}
