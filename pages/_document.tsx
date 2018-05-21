// tslint:disable import-name
import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
					<title>Awesome Title</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
          <link
            rel="stylesheet"
            href="/_next/static/style.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
