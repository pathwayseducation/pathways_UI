import React from "react";
import {
    ButtonGroup,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardTitle,
    Col,
    Row,
    ListGroup, ListGroupItem, ListGroupItemHeading
} from "shards-react";

export default class UserInfoCard extends React.Component{
    render() {
        return (
            <>
                <Card className="comfortaa mt-4 mx-4 p-0 cardbg">
                    <CardHeader className="border-bottom">
                        <Row>
                            <Col md="8">
                                <CardTitle className="comfortaa">@samarjit</CardTitle>
                                <CardSubtitle  className="comfortaa">50 followers | 30 following</CardSubtitle>
                            </Col>
                            <Col md="4">
                                30 connections
                            </Col>
                        </Row>

                    </CardHeader>
                    <CardBody>
                        <CardSubtitle className="comfortaa">Connections</CardSubtitle>
                        <ListGroup className="peopleList">
                            <ListGroupItem className="p-1 m-0">
                                <Row className="p-0 m-0 username">
                                    <Col md="9" className="px-1 m-0">
                                        John Doe | @john
                                    </Col>
                                    <Col md="3" className="p-0 m-0">
                                        <Button size="sm" className="p=0 m-0">Unfollow</Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="p-1 m-0">
                                <Row className="p-0 m-0 username">
                                    <Col md="9" className="px-1 m-0">
                                        Elon Musk | @xaea-12
                                    </Col>
                                    <Col md="3" className="p-0 m-0">
                                        <Button size="sm" className="p=0 m-0">Unfollow</Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="p-1 m-0">
                                <Row className="p-0 m-0 username">
                                    <Col md="9" className="px-1 m-0">
                                        Zark Muckerberg | @zark
                                    </Col>
                                    <Col md="3" className="p-0 m-0">
                                        <Button size="sm" className="p=0 m-0">Unfollow</Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                    <CardFooter className="p-0 m-0 footerbg">
                        <Row className="p-0 m-0">
                            <Col md="4" className="footerButtons border-right py-2 tabbed">
                                Connections
                            </Col>
                            <Col md="4" className="footerButtons border-right py-2">
                                Followers
                            </Col>
                            <Col md="4" className="footerButtons py-2">
                                Following
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
                    .tabbed{
                        color: #0044ff;
                        opacity: 100%;
                    }
                    .peopleList{
                        overflow-x: auto;
                        height: 150px;
                    }
                    .username{
                        align-items:center;
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