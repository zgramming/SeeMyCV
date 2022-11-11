import EducationSection from "./components/education_section";
import ExperienceSection from "./components/experience_section";
import FooterSection from "./components/footer_section";
import LicenseCertificateSection from "./components/license_certificate_section";
import NavbarSection from "./components/navbar_section";
import PortfolioSection from "./components/portfolio_section";
import ProfileSection from "./components/profile_section";
import SkillSection from "./components/skill_section";

const WatanasaTemplate = () => {
  return (
    <div className="font-poppins">
      <NavbarSection />
      <ProfileSection />
      <ExperienceSection />
      <EducationSection />
      <SkillSection />
      <PortfolioSection />
      <LicenseCertificateSection />
      <FooterSection />
    </div>
  );
};

export default WatanasaTemplate;
