import React from "react";
import {ButtonGroup, Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardTitle, Col, Row} from "shards-react";

export default class UserInfoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Card className="comfortaa mt-4 mx-4 p-0 cardbg">
                    <CardHeader className="border-bottom headerbg">
                        <Row>
                            <Col md="8">
                                <CardTitle className="comfortaa">@{this.props.username}</CardTitle>
                                <CardSubtitle  className="comfortaa">{this.props.education}</CardSubtitle>
                            </Col>
                            
                            <Col md="4">
                                <img style={{width: '100%', height: 'auto'}} src={this.props.profilePic} className="rounded-circle" alt="profile picture"></img>
                            </Col>
                        </Row>

                    </CardHeader>
                    <CardBody>
                        <CardSubtitle className="comfortaa">{this.props.classOf}</CardSubtitle>
                        <p className="px-2">
                            {this.props.bio}
                        </p>
                    </CardBody>
                    <CardFooter className="p-0 m-0 footerbg">
                        <Row className="p-0 m-0">
                            <Col md="6" className="footerButtons border-right py-2">
                                Edit Profile
                            </Col>
                            <Col md="6" className="footerButtons py-2">
                                Account Settings
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
                    .comfortaa{
                        font-weight: 300;
                    }
                    .footerButtons{
                        text-align: center;
                        opacity:50%
                    }
                    .footerButtons:hover{
                        opacity:100%;
                    }
                    .cardbg:hover .footerbg{
                        background-color: #ff8c00;
                    }    
                    .footerbg{
                        transition: background-color .6s;
                    }
                `}</style>
            </>
        );
    }
}