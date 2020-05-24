import React from "react";
import Link from "next/link";
import {
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormInput,
    FormGroup,
    ModalFooter,
    FormTextarea,
} from "shards-react";

export default class LogInPopup extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
            email: '',
            username: '',
            password: '',
            education: '',
            classOf: new Date().getFullYear(),
            bio: '',
            signedUp: false,
            error: false
        };
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    onChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // FORM VALIDATION

        const body = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            education: this.state.education,
            classOf: new Date().getFullYear(),
            bio: this.state.bio
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const request = new Request('https://pathwaysserver.herokuapp.com/createUser', {
            method: 'POST', 
            headers: headers,
            body: JSON.stringify(body)
        });

        fetch(request)
            .then((response) => response.text())
            .then((data) => {
                if(data === 'OK') {
                    this.setState({
                        signedUp: true
                    });
                } else {
                    this.setState({
                        error: true
                    })
                }
            });
    }

    render() {
        const { open, signedUp, error } = this.state;
        return (
            <>
                <Button onClick={this.toggle} theme="success">Sign Up</Button>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Create a Pathways Account</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <label htmlFor="email">Email Address</label>
                                <FormInput onChange={this.onChange} value={this.state.email} type="email" id="email" placeholder="What is your email address?" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="username">Username</label>
                                <FormInput onChange={this.onChange} value={this.state.username}  id="username" placeholder="Choose a username" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <FormInput onChange={this.onChange} value={this.state.password} type="password" id="password" placeholder="Choose a password" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="education">Education / School</label>
                                <FormInput onChange={this.onChange} value={this.state.education}id="education" placeholder="What school do you attend?" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="classOf">Class Of</label>
                                <FormInput onChange={this.onChange} value={this.state.classOf}type="number" id="classof" placeholder="When do you graduate?" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="bio">Bio</label>
                                <FormTextarea onChange={this.onChange} value={this.state.bio} id="bio" placeholder="Write a short bio." />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {error && <p>There was an error. Please try again.</p>}
                        {signedUp && <p>Success! Please login.</p>}
                        <Button onClick={this.handleSubmit}>Sign up</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}