// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Default fallback meta tags (overridden by individual pages using next/head) */}
        <title>Professional Resume Free - Build Your Perfect Resume</title>
        <meta 
          name="description" 
          content="Create professional resumes for free. Build, customize, and download your perfect resume in minutes with our easy-to-use resume builder." 
        />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}