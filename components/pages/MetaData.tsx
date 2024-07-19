import React from 'react';
import Head from 'next/head';
import packageInfo from '../../package.json';

const MetaData = (): JSX.Element => (
  <Head>
    <title>The Basement</title>
    <link rel="icon" href="/favicon.ico"></link>
    <meta name="description" content={packageInfo.description} />
    <meta name="google-site-verification" content="N9Dt3r0gaJII2ppcjPn7lP79g3G_hqvl38yve7JYnDE" />
  </Head>
);

export default MetaData;
