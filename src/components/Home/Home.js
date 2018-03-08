/* jshint esversion: 6 */
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { Position, Prediction, Predictor, Telnet } from '../Exports/Components';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <h1>Balloon Tracker</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={2}>
                    <Grid.Column>
                        <Position />
                    </Grid.Column>
                    <Grid.Column>
                        <Prediction />
                    </Grid.Column>
                </Grid>
                <Grid columns={2}>
                    <Grid.Column>
                        
                    </Grid.Column>
                    <Grid.Column>
                        <Predictor />
                    </Grid.Column>
                </Grid>
                <Grid columns={2}>
                    <Grid.Column>
                        
                    </Grid.Column>
                    <Grid.Column>
                        <Telnet />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
