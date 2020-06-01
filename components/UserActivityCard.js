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
import EditIcon from '@material-ui/icons/Edit';

export default class UserActivityCard extends React.Component{
    render() {
        return (
            <>
                <Card className="comfortaa mt-4 mx-4 p-0 mb-4 cardbg">
                    <CardHeader className="border-bottom">
                        <Row>
                            <Col md="12">
                                <CardTitle className="comfortaa">Activity</CardTitle>
                                <CardSubtitle  className="comfortaa">1 post, 1 reply</CardSubtitle>
                            </Col>
                        </Row>

                    </CardHeader>
                    <CardBody>
                        <ListGroup className="experiencesList">
                            <ListGroupItem className="p-1 m-0 experience-item">
                                <Row className="p-0 m-0">
                                    <Col md="11" className="px-1 m-0">
                                        <ListGroupItemHeading className="comfortaa p-1 m-0">Post: What good virtual programs are there this summer?</ListGroupItemHeading>
                                        <h6 className="comfortaa p-1 py-0 m-0">Chemistry | May 2nd, 12:19AM</h6>
                                        <p className="comfortaa m-0">
                                            Since we're all staying home this summer, what virtual opportunities in chemistry are still open?
                                        </p>
                                    </Col>
                                    <Col md="1" className="p-0 m-0">
                                        <Button size="sm" className="p-1 m-0 edit"><EditIcon fontSize="small"></EditIcon></Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="p-1 m-0 experience-item">
                                <Row className="p-0 m-0">
                                    <Col md="11" className="px-1 m-0">
                                        <ListGroupItemHeading className="comfortaa p-1 m-0">Reply to post: What good virtual programs are there this summer?</ListGroupItemHeading>
                                        <h6 className="comfortaa p-1 py-0 m-0">Chemistry | May 3rd, 2:10PM</h6>
                                        <p className="comfortaa m-0">
                                            Thanks for all the responses! I'll look into these.
                                        </p>
                                    </Col>
                                    <Col md="1" className="p-0 m-0">
                                        <Button size="sm" className="p-1 m-0 edit"><EditIcon fontSize="small"></EditIcon></Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                    <CardFooter className="p-0 m-0 footerbg">
                        <Row className="p-0 m-0">
                            <Col md="6" className="colbutton footerButtons border-right py-2">
                                Delete posts
                            </Col>
                            <Col md="6" className="colbutton footerButtons py-2">
                                Hide posts
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
                        opacity:50%;
                    }
                    .footerButtons:hover{
                        opacity:100%;
                    }
                    
                    .experiencesList{
                        overflow-x:auto;
                        max-height:75vh;
                    }    
                    .edit{
                        visibility:hidden;
                        position:absolute;
                    }    
                    .experiencesList:hover .edit{
                        visibility:visible;
                    }
                    .cardbg:hover .footerbg{
                        background-color: #ff8c00;
                    }    
                    .footerbg{
                        transition: background-color .6s;
                    }                
                    .colbutton {
                        cursor: pointer;
                    }
                `}</style>
            </>
        );
    }
}