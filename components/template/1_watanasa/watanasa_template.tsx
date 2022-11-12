import { Users } from "../../../interface/main_interface";
import EducationSection from "./components/education_section";
import ExperienceSection from "./components/experience_section";
import FooterSection from "./components/footer_section";
import LicenseCertificateSection from "./components/license_certificate_section";
import NavbarSection from "./components/navbar_section";
import PortfolioSection from "./components/portfolio_section";
import ProfileSection from "./components/profile_section";
import SkillSection from "./components/skill_section";

const WatanasaTemplate = ({ user }: { user: Users }) => {
  return (
    <div className="font-poppins">
      <NavbarSection />
      {user.CVProfile && <ProfileSection user={user} />}
      {user.CVExperience.length !== 0 && (
        <ExperienceSection experiences={user.CVExperience} />
      )}

      {user.CVEducation.length !== 0 && (
        <EducationSection educations={user.CVEducation} />
      )}
      {user.CVSkill.length !== 0 && <SkillSection skills={user.CVSkill} />}
      {user.CVPortfolio.length !== 0 && (
        <PortfolioSection portfolios={user.CVPortfolio} />
      )}
      {user.CVLicenseCertificate.length !== 0 && (
        <LicenseCertificateSection licenses={user.CVLicenseCertificate} />
      )}
      <FooterSection />
    </div>
  );
};

export default WatanasaTemplate;
