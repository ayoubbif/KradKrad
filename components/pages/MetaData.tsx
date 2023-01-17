import React from 'react';
import Head from 'next/head';
import packageInfo from '../../package.json';

const MetaData = (): JSX.Element => (
  <Head>
    <title>The Basement</title>
    <link rel="icon" href="/favicon.ico"></link>
    <meta name="description" content={packageInfo.description} />
  </Head>
);

export default MetaData;
