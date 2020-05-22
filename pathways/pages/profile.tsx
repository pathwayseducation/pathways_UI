import Head from 'next/head'
import React from 'react';
import { Button, ButtonGroup, Modal, ModalBody, ModalHeader } from 'shards-react';
import fetch from 'node-fetch';
import Link from 'next/link';
import Navbar from '../components/Navbar';


export default class Login extends React.Component {
    render(){
        return (
            <div className="">
                <Head>
                    <title>Profile screen</title>
                </Head>
                <Navbar/>

                <style jsx>{`
        

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

                <style jsx global>{`
        
      `}</style>
            </div>
        )
    }

}
