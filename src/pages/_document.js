// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head> 
        <link rel='canonical' href='https://www.professionalresumefree.com/' /> 
        {/* Cloudflare Web Analytics */}
        <script 
          defer 
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "4d89ae0dc5ad4c328cc8fbb0a0699c50"}'
        />
        {/* End Cloudflare Web Analytics */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}