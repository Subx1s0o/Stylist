type MetadataDetails = {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    images: string;
  };
};

export type MetadataConfig = {
  [locale: string]: MetadataDetails;
};
