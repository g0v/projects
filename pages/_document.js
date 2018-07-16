import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    color: #02f694;
    background-color: #111111;
    padding-top: 3rem;
  }

  * {
    &:before, &:after {
      box-sizing: border-box;
    }
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <html lang="zh-TW">
        <Head>
          <title>
            g0v tools
          </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Barlow:400,500,700" rel="stylesheet" />
          <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
