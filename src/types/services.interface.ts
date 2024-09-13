import { Locale } from "@/utils/config";

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

export interface ServicesPageProps extends ServiceslistProps {
  isFormat: boolean;
}

export interface ServiceslistProps {
  services: {
    services: Service[];
    totalPages: number;
  };
  locale: Locale;
  category: "Style" | "Makeup";
}

export interface ServiceCardProps {
  service: Service;
  category: "Style" | "Makeup";
  number: number;
  locale: Locale;
}
