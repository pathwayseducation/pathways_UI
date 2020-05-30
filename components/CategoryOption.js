import React from "react";
import {Card, CardBody, CardSubtitle, CardTitle} from "shards-react";

export default function CategoryOptions () {
    return (
        <div className="inline">
            <Card className="comfortaa m-1 p-0 cardbg transition" style={{ width:"fit-content" }}>
                <CardBody className="m-0 p-0 transition">
                    <CardTitle className="comfortaa title px-2">{this.props.category}</CardTitle>
                    <CardSubtitle className="comfortaa subtitle">{this.props.postCount}{this.props.postCount == 1 && ` post`}{this.props.postCount != 1 && ` posts`}</CardSubtitle>
                </CardBody>
            </Card>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
                .comfortaa{
                    font-weight: 300;
                }
                .cardbg:hover .subtitle{
                    display: block;
                }
                .cardbg:hover{
                    background-color: #ffbb00;
                    opacity:70%;
                    transition: background-color .5s, opacity .5s;
                }
                .cardbg{
                    opacity: 100%;
                }    
                .title{
                    display: inline-block;
                }
                .subtitle{
                    display: none;
                }
                .transition{
                    transition: width 1s;
                }
                .inline{
                    display: inline-block;
                }
            `}</style>
        </div>
    );
}