/* jshint esversion: 6 */
import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Segment, Grid } from 'semantic-ui-react';
import { GRAPH_URL } from '../../config';

import axios from 'axios';

export default class Graph extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            graphData: []
        };
    }

    componentDidMount() {
        axios.get(GRAPH_URL).then(res => {
            if (res.status === 200) {
                this.setState( { 
                    isLoading: false,
                    graphData: res.data
                });
            } else {
                this.forceUpdate();
            }
        }).catch(err => {
            console.log("Error getting Graphing Data");
        });
    }

    render() {
        return (
            <Segment loading = {this.state.isLoading}>
                <Grid.Row>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={this.state.graphData}
                                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <XAxis dataKey="time"/>
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Area type='monotone' dataKey='alt' stroke='#8884d8' fill='#8884d8' />
                        </AreaChart>
                    </ResponsiveContainer>
                </Grid.Row>
            </Segment> 
        )
    }
}
