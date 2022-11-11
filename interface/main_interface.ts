import { CVEducationInterface } from "./cv/cveducation_interface";
import { CVExperienceInterface } from "./cv/cvexperience_interface";
import { CVLicenseCertificateInterface } from "./cv/cvlicensecertificate_interface";
import { CVPortfolioInterface } from "./cv/cvportfolio_interface";
import { CVProfileInterface } from "./cv/cvprofile_interface";
import { CVSkillInterface } from "./cv/cvskill_interface";
import { CvTemplatePDFInterface } from "./cv/cvtemplate_pdf_interface";
import { CvTemplateWebsiteInterface } from "./cv/cvtemplate_website_interface";

export interface Users {
  id: number;
  app_group_user_id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  created_by?: any;
  updated_by?: any;
  CVSkill: CVSkillInterface[];
  CVProfile?: CVProfileInterface;
  CVPortfolio: CVPortfolioInterface[];
  CVLicenseCertificate: CVLicenseCertificateInterface[];
  CVExperience: CVExperienceInterface[];
  CVEducation: CVEducationInterface[];
  CVTemplateWebsite?: CvTemplateWebsiteInterface;
  CVTemplatePDF?: CvTemplatePDFInterface;
}

export interface MasterCategory {
  id: number;
  master_category_id: string;
  code: string;
  name: string;
  description: string;
  status: string;

  created_at: Date;
  updated_at: Date;
  created_by?: number;
  updated_by?: number;

  master_category_parent?: MasterCategory;
  master_category_children: MasterCategory[];
  master_datas: MasterData[];
}

export interface MasterData {
  id: number;
  master_data_id: number;
  master_category_id: number;
  master_category_code: string;
  code: string;
  name: string;
  description?: string;
  status: string;
  parameter1_key?: string;
  parameter1_value?: string;
  parameter2_key?: string;
  parameter2_value?: string;
  parameter3_key?: string;
  parameter3_value?: string;

  created_at: Date;
  updated_at: Date;
  created_by?: number;
  updated_by?: number;

  master_category?: MasterCategory;
  master_data_parent?: MasterData;
  master_data_children: MasterData[];
}
