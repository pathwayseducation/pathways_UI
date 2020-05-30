import Head from 'next/head'
import React from 'react';
import { Container, Row, Col } from 'shards-react';
import Navbar from '../components/Navbar';
import UserInfoCard from '../components/UserInfoCard';
import SocialInfoCard from '../components/SocialInfoCard';
import UserExperiencesCard from '../components/UserExperiencesCard';
import UserActivityCard from '../components/UserActivityCard';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

function Profile() {
    const { data, error } = useSWR('https://pathwaysserver.herokuapp.com/getUserInfo', fetcher('GET', r => r.json()));
    
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
                        <UserInfoCard bio={data.bio} firstName={data.firstName} lastName={data.lastName} education={data.education} classOf={data.classOf} username={data.username} profilePic={data.profilePic} />
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