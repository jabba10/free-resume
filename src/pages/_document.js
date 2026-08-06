// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head> 
        <link rel='canonical' href='https://professionalresumefree.com' /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}