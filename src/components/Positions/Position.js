/* jshint esversion: 6 */
import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import { FIND_URL } from '../../config';

import axios from 'axios';

export default class Position extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            position: {}
        };
    }

    componentDidMount() {
        axios.get(FIND_URL).then(res => {
            var pos = res.data.length - 1;
            this.setState( { 
                isLoading: false,
                position: res.data[pos]
             });
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <Segment loading = {this.state.isLoading}>
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
