import { Users } from "../../../interface/main_interface";
import EducationSection from "./components/education_section";
import ExperienceSection from "./components/experience_section";
import LicenseAndCertificateSection from "./components/license_certificate_section";
import PortfolioSection from "./components/portfolio_section";
import ProfileSection from "./components/profile_section";
import SkillSection from "./components/skill_section";

const DefaultTemplateWebsite = ({ user }: { user: Users }) => {
  return (
    <>
      <ProfileSection
        profile={user.CVProfile}
        email={user.email}
        name={user.name}
      />
      <ExperienceSection experience={user.CVExperience} />
      <EducationSection education={user.CVEducation} />
      <SkillSection skill={user.CVSkill} />
      <LicenseAndCertificateSection
        licenseCertificate={user.CVLicenseCertificate}
      />
      <PortfolioSection portfolio={user.CVPortfolio} />
    </>
  );
};

export default DefaultTemplateWebsite;
