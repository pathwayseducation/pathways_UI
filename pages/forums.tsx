import Head from 'next/head';
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardHeader, CardSubtitle } from 'shards-react';
import fetch from 'node-fetch';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import CategoryOption from '../components/CategoryOption';
import PostPreviewCard from '../components/PostPreviewCard';


export default class Forums extends React.Component {
    render(){
        return (
            <div className="everything">
                <Head>
                    <title>Forums screen</title>
                </Head>
                <Navbar/>
                <Container fluid className="">
                    <Card className="m-4">
                        <CardHeader>
                            <CardTitle>Forums</CardTitle>
                            <CardSubtitle>Explore forums from hundreds of categories</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <CategoryOption className="inline" category="Chemistry" postCount="1"/>
                            <CategoryOption className="inline" category="Science Fairs" postCount="4"/>
                            <CategoryOption className="inline" category="Robotics" postCount="8"/>
                            <CategoryOption className="inline" category="Medical Research" postCount="12"/>
                            <CategoryOption className="inline" category="Coding" postCount="7"/>
                            <CategoryOption className="inline" category="Future Business Leaders of America (FBLA)" postCount="3"/>
                            <CategoryOption className="inline" category="Biology" postCount="5"/>
                            <CategoryOption className="inline" category="HOSA (Future Health Professionals)" postCount="4"/>
                            <CategoryOption className="inline" category="Mathematics" postCount="8"/>
                            <CategoryOption className="inline" category="Physics" postCount="12"/>
                            <CategoryOption className="inline" category="Astronomy" postCount="7"/>
                            <CategoryOption className="inline" category="Model UN" postCount="3"/>
                            <CategoryOption className="inline" category="Speech and Debate" postCount="5"/>
                            <CategoryOption className="inline" category="College essays" postCount="4"/>
                            <CategoryOption className="inline" category="Journalism" postCount="8"/>
                            <CategoryOption className="inline" category="Neuroscience" postCount="12"/>
                            <CategoryOption className="inline" category="Web Design" postCount="7"/>
                            <CategoryOption className="inline" category="Technology Student Association (TSA)" postCount="3"/>
                        </CardBody>
                    </Card>
                    <Row className="p-4">
                        <Col md="4">
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>Trending</CardTitle>
                                    <CardSubtitle>View recent top-voted posts</CardSubtitle>
                                </CardHeader>
                                <CardBody className="p-1">
                                    <PostPreviewCard postTitle="Resources for USNCO" postCategory="Chemistry" postContent="What books are useful for USNCO studying?" upvotes="42" downvotes="4"/>
                                    <PostPreviewCard postTitle="Books/resources for AIME prep?" postCategory="Math" postContent="Does anyone have any good resources for scoring well on the AIME exam?" upvotes="65" downvotes="2"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>Newest</CardTitle>
                                    <CardSubtitle>View latest posts in categories you follow</CardSubtitle>
                                </CardHeader>
                                <CardBody className="p-1">
                                    <PostPreviewCard postTitle="Any good linguistics summer programs?" postCategory="Linguistics" postContent="I'm a high school freshman interested in linguistics and I was curious as to what summer camps or programs there are for learning more about it." upvotes="4" downvotes="0"/>
                                    <PostPreviewCard postTitle="A curated list of resources to begin programming [2020]" postCategory="Programming" postContent="I noticed that there weren't very many good lists of beginner resources on here. So, I chose and linked a few of my recommended tutorials/books/videos." upvotes="23" downvotes="9"/>
                                    <PostPreviewCard postTitle="Anyone experienced with oil pastels?" postCategory="Art" postContent="I'm a beginner to oil pastels and I was wondering if anyone could give me a little guidance on how to start/get better. I'm fine with links to tutorials, or just back and forth messaging on here. Thanks!" upvotes="12" downvotes="3"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>Your posts</CardTitle>
                                    <CardSubtitle>View your most recent posts</CardSubtitle>
                                </CardHeader>
                                <CardBody className="p-1">
                                    <PostPreviewCard postTitle="Need help setting up centOS server on EC2!" postCategory="Web Development" postContent="If anyone is experienced with setting up servers, can you help me with my EC2 instance? My package manager is all messed up and it seems like I can't install anything. I'll post the logs as a reply." upvotes="5" downvotes="0"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <style jsx global>{`
           
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        .everything{
            min-height: 100vh;
            background: linear-gradient(to bottom, rgba(255,140, 0,1) 20%, rgba(252,191,116,1) 100%);
            background-position: fixed;
        }
        .inline{
            display: inline-block;
        }
      `}</style>
    </div>
        )
    }

}
