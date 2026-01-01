import axios from 'axios';
import { BaseUrl } from "@/utils/global.mjs";

export interface Partner {
  id: number;
  title: string;
  image: {
    url: string;
  };
}

export const fetchPartners = async (): Promise<Partner[]> => {
  const response = await axios.get(`${BaseUrl}//Our-partner?populate=*`);
  return response.data;
};
