/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Segment, Grid, Form, Button, Input, Radio } from 'semantic-ui-react';

import { TELNET_IP, TELNET_PORT, NAVIGATE_URL, AUTO_NAV_URL } from '../../config';

import axios from 'axios';

import Toggle from 'react-toggle';

import './react-toggle-css.css';

export default class Telnet extends Component {
    constructor() {
        super();

        this.state = {
            telnet_ip : TELNET_IP,
            telnet_port : TELNET_PORT,
            checkbox_value: true,
            autoNavEnabled : false
        };

        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePortChange = this.handlePortChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAutoChange = this.handleAutoChange.bind(this);
    }

    handleAddressChange(event) {
        this.setState({
            telnet_ip: event.target.value
        });
    }

    handleAutoChange() {
        this.setState({
            autoNavEnabled : !this.state.autoNavEnabled
        });

        axios.post(AUTO_NAV_URL, {
            curr : this.state.checkbox_value,
            ip : this.state.telnet_ip,
            port : this.state.telnet_port,
            activate : !this.state.autoNavEnabled 
        }).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    }

    handlePortChange(event) {
        this.setState({
            telnet_port: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post(NAVIGATE_URL, {
            curr : this.state.checkbox_value,
            ip_address : this.state.telnet_ip,
            port : this.state.telnet_port
        }).then(navigation => {
            console.log('Navigate');
        }).catch(error => {
            console.error(error);
        });
    }

    handleChange() {
        this.setState({
            checkbox_value : !this.state.checkbox_value
        });
    }

    render() {
        return (
            <Segment>
                <Grid.Row>
                <Form stackable onSubmit = {this.handleSubmit}>
                    <Form.Group grouped>
                        <Form.Field id='form-input-control-first-name' control={Input} label='IP' placeholder='Telnet IP' value = {this.state.telnet_ip} onChange = {this.handleAddressChange} />
                        <Form.Field id='form-input-control-last-name' control={Input} label='Port' placeholder='Telnet Port' value = {this.state.telnet_port} onChange = {this.handlePortChange}/>                        
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Field>
                        <Radio
                            label='Use Current Location'
                            name='radioGroup'
                            value='current'
                            checked={this.state.checkbox_value}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Use Predicted Location'
                            name='radioGroup'
                            value='predictor'
                            checked={!this.state.checkbox_value}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    </Form.Group>
                    <Form.Group widths = 'equal'>
                        <Form.Field 
                            id='form-button-control-public' 
                            control={Button} 
                            content='Navigate' />
                        <Form.Field>
                            <label>
                                <Toggle
                                    defaultChecked={this.state.autoNavEnabled}
                                    onChange={this.handleAutoChange} />
                                <span>Auto Navigation</span>
                                </label>
                        </Form.Field>
                    </Form.Group>
                </Form>
                </Grid.Row>
            </Segment>
        )
    }
}
