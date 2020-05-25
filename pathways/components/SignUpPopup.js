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
import validator from 'validator';

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
            error: false,
            
            emailError: '',
            usernameError: '',
            passwordError: '',
            educationError: '',
            classOfError: '',
            bioError: ''
        };
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
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

    validate() {
        let emailError = '';
        let usernameError = '';
        let passwordError = '';
        let educationError = '';
        let classOfError = '';
        let bioError = '';

        if(!validator.isEmail(this.state.email))
            emailError = 'Invalid email.'

        const uname = this.state.username;
        if(validator.isEmpty(uname) || !(/^[a-z0-9]+$/i.test(uname)) || !(uname.length > 0 && uname.length <= 20))
            usernameError = 'Invalid username. Must be 1 to 20 characters & alphanumeric.';
        
        const pw = this.state.password;
        if(validator.isEmpty(pw) || !(/^[a-z0-9]+$/i.test(pw)) || !(pw.length > 0 && pw.length <= 20))
            passwordError = 'Invalid username. Must be 1 to 20 characters & alphanumeric.';

        const ed = this.state.education;
        if(validator.isEmpty(ed) || !(pw.length > 0 && pw.length <= 50))
            educationError = 'Invalid education. Must be 1 to 50 characters.'

        const co = this.state.classOf;
        if(co.toString().length <= 0)
            classOfError = 'Class of cannot be empty.';

        const bio = this.state.bio;
        if(validator.isEmpty(bio) || !(bio.length > 0 && bio.length <= 500))
            bioError = 'Invalid bio. Must be 1 to 500 characters.';

        let failed = false;
        if(emailError) {
            this.setState({ emailError: emailError });
            failed = true;
        }
        if(usernameError) {
            this.setState({ usernameError: usernameError});
            failed = true;
        }
        if(passwordError) {
            this.setState({ passwordError: passwordError});
            failed = true;
        }
        if(educationError) {
            this.setState({ educationError: educationError});
            failed = true;
        }
        if(classOfError) {
            this.setState({ classOfError: classOfError});
            failed = true;
        }
        if(bioError) {
            this.setState({ bioError: bioError});
            failed = true;
        }
        if(failed) return false;

        this.setState({
            emailError: '',
            usernameError: '',
            passwordError: '',
            educationError: '',
            classOfError: '',
            bioError: ''
        });
        return true;
    }

    handleSubmit(e) {
        e.preventDefault();

        const isValid = this.validate();

        if(isValid) {
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
                                <p>{this.state.emailError}</p>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="username">Username</label>
                                <FormInput onChange={this.onChange} value={this.state.username}  id="username" placeholder="Choose a username" />
                                <p>{this.state.usernameError}</p>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <FormInput onChange={this.onChange} value={this.state.password} type="password" id="password" placeholder="Choose a password" />
                                <p>{this.state.passwordError}</p>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="education">Education / School</label>
                                <FormInput onChange={this.onChange} value={this.state.education}id="education" placeholder="What school do you attend?" />
                                <p>{this.state.educationError}</p>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="classOf">Class Of</label>
                                <FormInput onChange={this.onChange} value={this.state.classOf}type="number" id="classof" placeholder="When do you graduate?" />
                                <p>{this.state.classOfError}</p>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="bio">Bio</label>
                                <FormTextarea onChange={this.onChange} value={this.state.bio} id="bio" placeholder="Write a short bio." />
                                <p>{this.state.bioError}</p>
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