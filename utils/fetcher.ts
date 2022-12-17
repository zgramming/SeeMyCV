import axios from "axios";

import { CvTemplateWebsiteInterface } from "../interface/cv/cvtemplate_website_interface";
import { baseAPIURL } from "./constant";

export const templateWebsiteFetcher = async (url: string) => {
  const request = await axios.get(`${baseAPIURL}/${url}`);
  const { data }: { data: CvTemplateWebsiteInterface } = request.data;
  return data;
};
