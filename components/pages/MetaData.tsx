import type { FC } from "react";
import Head from "next/head";
import { MetaDataProps } from "../../types/components/pages/MetaData";

const MetaData: FC<MetaDataProps> = ({
  title,
  description
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default MetaData;
