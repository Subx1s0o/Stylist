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
  duration_work?: Translations;
  duration_consultation: Translations;
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
  createdAt: Date;
  updatedAt: Date;
}

export interface ServicesPageProps extends ServiceslistProps {
  format?: "online" | "offline";
}

export interface ServiceslistProps {
  services: {
    services: Service[];
    totalPages: number;
  };
  locale: Locale;
  category: "Style" | "Makeup";
  format?: "online" | "offline";
}

export interface ServiceCardProps {
  service: Service;
  category: "Style" | "Makeup";
  number: number;
  locale: Locale;
}
