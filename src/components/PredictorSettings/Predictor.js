/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import { PREDICT_URL } from '../../config';

import axios from 'axios';

export default class PredictorSettings extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            prediction: {}
        };
    }
    componentDidMount() {
        axios.get(PREDICT_URL).then(prediction => {           
            if (prediction.status === 200) {
                this.setState({
                    isLoading: false,
                    prediction: prediction.data
                });
            } else {
                this.forceUpdate();
            }
        }).catch(error => {
            this.forceUpdate();
        });
    }

    render() {
        return (
            <Segment loading = {this.state.isLoading}>
                <Grid.Row>
                    <h2>Predictor Parameters</h2>
                </Grid.Row>
                <Grid.Row columns = {3}>
                    <Grid.Column>
                        <p><strong>Burst Altitude:</strong> {this.state.prediction.burst} <small>m</small></p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Ascent Rate:</strong> {this.state.prediction.ascent} <small>m/s</small></p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Descent Rate:</strong> {this.state.prediction.drag} <small>m/s</small></p>
                    </Grid.Column>
                </Grid.Row>
            </Segment>   
        )
    }
}
