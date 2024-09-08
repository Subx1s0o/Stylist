export interface Service {
  _id: string;
  title: {
    uk: string;
    en: string;
  };
  result: {
    uk: string;
    en: string;
  };
  imageUrl: string;
  attention?: {
    uk: string;
    en: string;
  };
  duration_work: {
    uk: string;
    en: string;
  };
  duration_consultation: {
    uk: string;
    en: string;
  };
  format: string;
  price: number;
}
