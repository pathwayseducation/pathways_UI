import Head from 'next/head';
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardHeader, CardSubtitle } from 'shards-react';
import fetch from 'node-fetch';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import CategoryOption from '../components/CategoryOption';


export default class Forums extends React.Component {
    render(){
        return (
            <div className="everything">
                <Head>
                    <title>Forums screen</title>
                </Head>
                <Navbar/>
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
                        <CategoryOption className="inline" category="Chemistry" postCount="5"/>
                        <CategoryOption className="inline" category="Science Fairs" postCount="4"/>
                        <CategoryOption className="inline" category="Robotics" postCount="8"/>
                        <CategoryOption className="inline" category="Medical Research" postCount="12"/>
                        <CategoryOption className="inline" category="Coding" postCount="7"/>
                        <CategoryOption className="inline" category="Future Business Leaders of America (FBLA)" postCount="3"/>
                        <CategoryOption className="inline" category="Chemistry" postCount="5"/>
                        <CategoryOption className="inline" category="Science Fairs" postCount="4"/>
                        <CategoryOption className="inline" category="Robotics" postCount="8"/>
                        <CategoryOption className="inline" category="Medical Research" postCount="12"/>
                        <CategoryOption className="inline" category="Coding" postCount="7"/>
                        <CategoryOption className="inline" category="Future Business Leaders of America (FBLA)" postCount="3"/>
                    </CardBody>
                </Card>

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
        }
        .inline{
            display: inline-block;
        }
      `}</style>
            </div>
        )
    }

}
