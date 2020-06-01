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

export default class UserExperiencesCard extends React.Component{
    constructor(props) {
        super(props);

        this.addExperience = this.addExperience.bind(this);
    }

    addExperience() {
    }

    render() {
        return (
            <>
                <Card className="comfortaa mt-4 mx-4 p-0 cardbg">
                    <CardHeader className="border-bottom">
                        <Row>
                            <Col md="12">
                                <CardTitle className="comfortaa">Experiences</CardTitle>
                                <CardSubtitle  className="comfortaa">6 experiences</CardSubtitle>
                            </Col>
                        </Row>

                    </CardHeader>
                    <CardBody>
                        <ListGroup className="experiencesList">
                            <ListGroupItem className="p-1 m-0 experience-item">
                                <Row className="p-0 m-0">
                                    <Col md="11" className="px-1 m-0">
                                        <ListGroupItemHeading className="comfortaa p-1 m-0">Bing Visual Search Internship</ListGroupItemHeading>
                                        <h6 className="comfortaa p-1 py-0 m-0">Microsoft | November 2019 - April 2020</h6>
                                        <p className="comfortaa m-0">
                                            Part of a team of 12 Tesla STEM students selected for the internship, I worked with the Bing Visual Search team at Microsoft, learning the fundamentals of Bing Visual Search, and using these skills to create a ProduceClassifier skill that used Azure and Bing to identify fresh produce visually.
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
                                        <ListGroupItemHeading className="comfortaa p-1 m-0">Garcia Center High School Summer Program</ListGroupItemHeading>
                                        <h6 className="comfortaa p-1 py-0 m-0">Stony Brook University | June 2020 - August 2020</h6>
                                        <p className="comfortaa m-0">
                                            Admitted to a highly selective summer program at the Garcia Center for Polymers at Engineered Interfaces.
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
                            <Col md="4" onClick={this.addExperience} className="colbutton footerButtons border-right py-2">
                                Add experience
                            </Col>
                            <Col md="4" className="colbutton footerButtons border-right py-2">
                                Rearrange experiences
                            </Col>
                            <Col md="4" className="colbutton footerButtons py-2">
                                Remove experience
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