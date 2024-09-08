type Translations = {
  uk: string;
  en: string;
};

export interface Service {
  _id: string;
  title: Translations;
  result: Translations;
  imageUrl: string;
  attention?: Translations;
  duration_work: Translations;
  duration_consultation?: Translations;
  format: string;
  price: number;
  stages?: {
    1?: Translations;
    2?: Translations;
    3?: Translations;
    4?: Translations;
    5?: Translations;
    6?: Translations;
  };
}
