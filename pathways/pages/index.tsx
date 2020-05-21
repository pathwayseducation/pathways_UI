import Head from 'next/head'
import React from 'react';
import fetch from 'node-fetch';

export default class Home extends React.Component {
  static async getInitialProps(ctx){
    const data = {
      username: 'test123',
      email: 'test123@gmail.com',
      password: 'meme',
      bio: 'test bio',
      education: 'princeton',
      classOf: '2021'
    };
    const response = await fetch('https://pathwaysserver.herokuapp.com/createUser', {
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    return {};
  }
  render(){
    return (
        <div className="container">
          <Head>
            <title>Pathways</title>
          </Head>

          <main>
            <h1 className="title">
              Pathways
            </h1>
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
