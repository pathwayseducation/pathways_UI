import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardTitle,
    Col,
    Row, CardText
} from "shards-react";

export default class PostPreviewCard extends React.Component{
    render() {
        return (
            <>
                <Card className="comfortaa m-2 p-0 cardbg">
                    <CardHeader className="border-bottom p-1">
                        <CardTitle className="p-0">{this.props.postTitle}</CardTitle>
                        <CardSubtitle  className="p-0">In {this.props.postCategory}</CardSubtitle>
                    </CardHeader>
                    <CardBody className="p-1">
                        <CardText>{this.props.postContent}</CardText>
                    </CardBody>
                    <CardFooter className="p-0 m-0 footerbg">
                        <Row className="p-0 m-0">
                            <Col md="4" className="footerButtons border-right py-2">
                                View Post
                            </Col>
                            <Col md="4" className="border-right py-2">
                                {this.props.upvotes} upvotes
                            </Col>
                            <Col md="4" className="py-2">
                                {this.props.downvotes} downvotes
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