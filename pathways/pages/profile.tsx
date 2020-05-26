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
import useSWR from 'swr';

const fetcher = url => fetch(url, {
    method: 'GET',
    headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(r => r.json());

function Profile() {
    /*componentDidMount() {
        const headers = new Headers();
        if(localStorage.getItem('token') === null) 
            this.setState({error: true});
        else {
            this.setState({error: false});
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
                        opportunities: data.opportunities,
                        profilePic: data.profilePic
                    });
                });
        }
    }*/

    const { data, error } = useSWR('http://pathwaysserver.herokuapp.com/getUserInfo', fetcher);
    
    if(error) return <div>Error loading data.</div>;
    if(!data) return <div>Loading...</div>;
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
                        <UserInfoCard bio={data.bio} education={data.education} classOf={data.classOf} username={data.username} profilePic={data.profilePic} />
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
    );
}

export default Profile;