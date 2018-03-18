/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Position, Prediction, Predictor, Telnet, Graph } from '../Exports/Components';

export default class Home extends Component {
    
    render() {
        return (
            <div>
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
                        <Graph />
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
