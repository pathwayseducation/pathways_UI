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
              Welcome to Pathways Beta v0.2.1!
            </h1><br></br>
            <h2>
                Enter your beta login below.
            </h2><br></br>
            <Link href="/"><Button>
                Back to the Pathways Portal
            </Button></Link><br></br>
            <ButtonGroup>
                <LogInPopup/>
                <SignUpPopup/>
            </ButtonGroup>
              <br></br><br></br>
              <h2>Release Notes</h2>
              <h3>v0.2.1 - public STEM expo beta release</h3>
              <p>Notes: Added beta testing portal, published to a public URL for STEM expo viewing</p>
              <p>NOTE TO STEM EXPO VIEWERS: This is a prototype of the Pathways user interface. Most of the component functionality has been disabled as it is currently under development.</p>
              <p>To see a full overview of the public beta, follow the steps below:</p>
              <ol>
                  <li>Either log-in (with credentials username: samarjitk password: password) to view a full profile page, or sign-up using your own info to view the interactivity of the website.</li>
                  <li>Once you signup/log in, you will be redirected to the profile page, where you can hover over sections to interact with the UI. Please not that button functionality has been disabled for public access.</li>
                  <li>Navigate to the Forums page in the top navbar. Here, you can hover over categories and posts and explore the range Pathways has to offer.</li>
                  <li>Finally, navigate back to the profile page. You will see that authentication persists, and you still remain signed in.</li>
                  <li>Use the settings dropdown in the navbar, and click sign out. Once you do this and refresh the page, you will see that data will not load, prvoing the functionality of signing out.</li>
                  <li>Once you've finished navigating through the beta version, feel free to give us feedback on the UI by emailing pathwayseducation2020@gmail.com</li>
                  <li>As always, please note that the majority of interactivity is disabled/under development as this is still a prototype.</li>
                  <li>Thank you! If you liked this demo, consider signing up for our public beta by registering at <Link href="https://pathwayslandingpage.netlify.app/">our landing page</Link> (currently under construction).</li>
              </ol><br></br><br></br>
              <h3>v0.1.1 - Authentication</h3>
              <p>Notes: Made profile page dynamic, info from the currently signed in user is displayed on the profile page..</p><br></br><br></br>
              <h3>v0.1.0 - Authentication</h3>
              <p>Notes: Added authentication in preparation for the STEM expo, and created a forums page.</p><br></br><br></br>
              <h3>v0.0.1 - Profile</h3>
              <p>Notes: Created Profile page on the front end</p><br></br><br></br>
              <h3>v0.0.0 - Set up</h3>
              <p>Pathways Beta has been set up and published! This web app was made possible using the Next JS framework, Vercel, React JS, Shards React, MongoDB, and Heroku.</p>
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
