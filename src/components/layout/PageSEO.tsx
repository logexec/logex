import { Helmet } from "react-helmet-async";

const SITE_NAME = "LogeX";
const BASE_URL = "https://www.logex.com.ec";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
}

export const PageSEO = ({ title, description, path }: PageSEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};
