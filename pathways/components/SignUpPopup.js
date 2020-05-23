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
    FormTextarea
} from "shards-react";

export default class LogInPopup extends React.Component{
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
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
                <Button onClick={this.toggle} theme="success">Sign Up</Button>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Create a Pathways Account</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#email">Email Address</label>
                                <FormInput type="email" id="#email" placeholder="What is your email address?" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#username">Username</label>
                                <FormInput id="#username" placeholder="Choose a username" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#password">Password</label>
                                <FormInput type="password" id="#password" placeholder="Choose a password" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#education">Education / School</label>
                                <FormInput id="#education" placeholder="What school do you attend?" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#classof">Class Of</label>
                                <FormInput type="number" id="#classof" placeholder="When do you graduate?" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#bio">Bio</label>
                                <FormTextarea id="#bio" placeholder="Write a short bio." />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Link href="/profile"><Button>Sign up</Button></Link>
                        <Button onClick={this.handleSubmit}>Log in</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}