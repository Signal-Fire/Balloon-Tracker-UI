/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import { PREDICT_URL } from '../../config';

import axios from 'axios';

export default class Prediciton extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            position: {}
        };
    }

    componentDidMount() {
        axios.get(PREDICT_URL).then(prediction => {
            if (prediction.status === 200) {
                this.setState({
                    isLoading: false,
                    position: prediction.data
                }, function() {
                });
            } else {
                this.forceUpdate();
            }
        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <Segment loading = {this.state.isLoading}>
                <Grid.Row>
                    <h2>Predicted Location</h2>
                </Grid.Row>
                <Grid.Row columns = {2}>
                    <Grid.Column>
                        <p><strong>Lat:</strong> {this.state.position.lat}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Lon:</strong> {this.state.position.lat}</p>
                    </Grid.Column>
                    <br />
                </Grid.Row>
            </Segment>
        )
    }
}
