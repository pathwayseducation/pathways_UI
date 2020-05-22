import React from "react";
import {
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormInput,
    FormGroup,
    ModalFooter
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
                                <FormInput type="email" id="#email" placeholder="Email Address" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#username">Username</label>
                                <FormInput id="#username" placeholder="Username" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#password">Password</label>
                                <FormInput type="password" id="#password" placeholder="Password" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button>Sign up</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}