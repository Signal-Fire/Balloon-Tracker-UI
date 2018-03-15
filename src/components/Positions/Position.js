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
            if (res.status === 200) {
                this.setState( { 
                    isLoading: false,
                    position: res.data
                });
            } else {
                this.forceUpdate();
            }
        }).catch(err => {
            console.log("OH NOOO");
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
                        <p><strong>Lon:</strong> {this.state.position.long}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p><strong>Alt:</strong> {this.state.position.alt} <small>m</small></p>
                    </Grid.Column>
                </Grid.Row>
            </Segment> 
        )
    }
}
