import Head from 'next/head'
import React from 'react';
import { Container, Row, Col } from 'shards-react';
import fetch from 'node-fetch';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import UserInfoCard from '../components/UserInfoCard';
import SocialInfoCard from '../components/SocialInfoCard';
import UserExperiencesCard from '../components/UserExperiencesCard';
import UserActivityCard from '../components/UserActivityCard';

export default class Profile extends React.Component<{}, {bio: string, username: string, email: string, education: string, classOf: number, friendIds: [string], postIds: [string], opportunities: [string]}> {
    constructor(props) {
        super(props);
        this.state = {
            bio: '',
            username: '',
            email: '',
            education: '',
            classOf: new Date().getFullYear(),
            friendIds: [''],
            postIds: [''],
            opportunities: ['']
        };
    }
    
    componentDidMount() {
        const headers = new Headers();
        headers.append('authorization', 'Bearer ' + localStorage.getItem('token'));
        const request = new Request('http://pathwaysserver.herokuapp.com/getUserInfo', {
            method: 'GET',
            headers: headers
        });
        fetch(request)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    bio: data.bio,
                    username: data.username,
                    email: data.email,
                    education: data.education,
                    classOf: data.classOf,
                    friendIds: data.friendIds,
                    postIds: data.postIds,
                    opportunities: data.opportunities
                });
            });
    }

    render(){
        return (
            <div className="everything">
                <Head>
                    <title>Profile screen</title>
                </Head>
                <Navbar/>
                <Container fluid className="">
                    <Row>

                    </Row>
                    <Row>
                        <Col lg="4">
                            <UserInfoCard bio={this.state.bio} education={this.state.education} classOf={this.state.classOf} username={this.state.username} />
                            <SocialInfoCard/>
                        </Col>
                        <Col lg="1">

                        </Col>
                        <Col lg="7">
                            <UserExperiencesCard/>
                            <UserActivityCard/>
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
        .comfortaa{
        
      `}</style>
            </div>
        )
    }

}
