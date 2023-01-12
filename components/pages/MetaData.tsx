import React from 'react';
import Head from 'next/head';
import packageInfo from '../../package.json';

const MetaData = (): JSX.Element => (
  <Head>
    <title>{packageInfo.name}</title>
    <meta name="description" content={packageInfo.description} />
  </Head>
);

export default MetaData;
