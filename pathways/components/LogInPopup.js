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
import Link from "next/link";

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
                <Button onClick={this.toggle}>Log In</Button>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Log into your Pathways account</ModalHeader>
                    <ModalBody>
                        <Form>
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
                        <Link href="/profile"><Button>Log in</Button></Link>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}