import { Users } from "../../../interface/main_interface";
import EducationSection from "./components/education_section";
import ExperienceSection from "./components/experience_section";
import LicenseCertificateSection from "./components/license_certificate_section";
import PortfolioSection from "./components/portfolio_section";
import ProfileSection from "./components/profile_section";
import SkillSection from "./components/skill_section";

const NaraaiTemplate = ({ user }: { user: Users }) => {
  return (
    <div className="font-poppins space-y-40">
      <ProfileSection user={user} />
      <ExperienceSection experience={user.CVExperience} />
      <EducationSection educations={user.CVEducation} />
      <SkillSection skills={user.CVSkill} />
      <PortfolioSection portfolios={user.CVPortfolio} />
      <LicenseCertificateSection licenses={user.CVLicenseCertificate} />
    </div>
  );
};

export default NaraaiTemplate;
