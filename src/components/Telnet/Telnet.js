import React, { Component } from 'react'
import { Segment, Grid, Form, Button, Input } from 'semantic-ui-react';

export default class Telnet extends Component {
    constructor() {
        super();

        this.state = {
            telnet_ip : "192.168.1.25",
            telnet_port : "4242"
        }

        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePortChange = this.handlePortChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAddressChange(event) {
        this.setState({
            telnet_ip: event.target.value
        })
    }

    handlePortChange(event) {
        this.setState({
            telnet_port: event.target.value
        })
    }

    handleSubmit(event) {
        return fetch('http://90.240.40.70:8080/navigate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ip_address: this.state.telnet_ip,
                port: this.state.telnet_port
            })
        });
    }

    render() {
        return (
            <Segment>
                <Grid.Row>
                    <h2>Telnet IP</h2>
                </Grid.Row>
                <Grid.Row>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-first-name' control={Input} label='IP' placeholder='Telnet Device IP' value = {this.state.telnet_ip} onChange = {this.handleAddressChange} />
                    <Form.Field id='form-input-control-last-name' control={Input} label='Port' placeholder='Telnet Device Port' value = {this.state.telnet_port} onChange = {this.handlePortChange}/>
                    </Form.Group>
                    <Form.Field id='form-button-control-public' control={Button} content='Navigate' />
                </Form>
                </Grid.Row>
            </Segment>
        )
    }
}
