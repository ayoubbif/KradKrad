import type { FC } from "react";
import Head from "next/head";
import packageInfo from "../../package.json";
import { MetaDataProps } from "../../types/components/MetaData";

const MetaData: FC<MetaDataProps> = ({
  title = packageInfo.name,
  description = packageInfo.description,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default MetaData;
