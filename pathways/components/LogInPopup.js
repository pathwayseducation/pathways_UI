import React from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormInput,
    FormGroup,
    ModalFooter
} from "shards-react";
import Router from 'next/router'

export default class LogInPopup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            error: false,
            username: '',
            password: '',
        };

        this.toggle = this.toggle.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const body = {
            username: this.state.username,
            password: this.state.password
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const request = new Request('https://www.pathwaysserver.herokuapp.com/login', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        fetch(request)
            .then((response) => response.text())
            .then((data) => {
                if(data === 'OK') {
                    this.setState({
                        error: false 
                    });
                    Router.push('/profile');
                } else {
                    this.setState({
                        error: true
                    });
                }
            });
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;
        return (
            <>
                <Button onClick={this.toggle}>Log In</Button>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Log into your Pathways account</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#username">Username</label>
                                <FormInput value={this.state.username} onChange={this.handleUsernameChange} id="#username" placeholder="Username" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#password">Password</label>
                                <FormInput value={this.state.password} onChange={this.handlePasswordChange} type="password" id="#password" placeholder="Password" />
                            </FormGroup>
                            {this.state.error && <p style={{color: "red", marginTop: "20px"}}>There was an error with authentication</p>}
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleSubmit}>Log in</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}