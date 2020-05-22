import Head from 'next/head'
import React from 'react';
import { Button, ButtonGroup, Modal, ModalBody, ModalHeader } from 'shards-react';
import fetch from 'node-fetch';
import Link from 'next/link';
import LogInPopup from '../components/LogInPopup';
import SignUpPopup from '../components/SignUpPopup';

export default class Login extends React.Component {
  render(){
    return (
        <div className="container">
          <Head>
            <title>Log-in screen</title>
          </Head>

          <main>
            <h1 className="title">
              Welcome to Pathways!
            </h1><br></br>
            <h2>
                Enter below.
            </h2><br></br>
            <Link href="/"><Button>
                Home
            </Button></Link><br></br>
            <ButtonGroup>
                <LogInPopup/>
                <SignUpPopup/>
            </ButtonGroup>
          </main>

          <footer>
          </footer>

          <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

          <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
  }

}
