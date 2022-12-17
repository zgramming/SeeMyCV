import { useEffect, useRef } from "react";

import { Users } from "../../../interface/main_interface";
import navigationScrollToComponent from "../../../repository/navigation_scrollto_component";
import EducationSection from "./components/education_section";
import ExperienceSection from "./components/experience_section";
import LicenseAndCertificateSection from "./components/license_certificate_section";
import PortfolioSection from "./components/portfolio_section";
import ProfileSection from "./components/profile_section";
import SkillSection from "./components/skill_section";

const YamakoTemplate = ({ user }: { user: Users }) => {
  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const licenseCertificateRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    navigationScrollToComponent.setRefs([
      { code: "profile", ref: profileRef },
      {
        code: "experience",
        ref: experienceRef,
      },
      {
        code: "education",
        ref: educationRef,
      },
      {
        code: "skill",
        ref: skillRef,
      },
      {
        code: "l&c",
        ref: licenseCertificateRef,
      },
      {
        code: "portfolio",
        ref: portfolioRef,
      },
    ]);
    return () => {};
  }, []);

  return (
    <div className="font-poppins">
      <div ref={profileRef}>
        <ProfileSection user={user} />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection experience={user.CVExperience} />
      </div>
      <div ref={educationRef}>
        <EducationSection educations={user.CVEducation} />
      </div>
      <div ref={skillRef}>
        <SkillSection skills={user.CVSkill} />
      </div>
      <div ref={portfolioRef}>
        <PortfolioSection portfolios={user.CVPortfolio} />
      </div>
      <div ref={licenseCertificateRef}>
        <LicenseAndCertificateSection licenses={user.CVLicenseCertificate} />
      </div>
    </div>
  );
};

export default YamakoTemplate;
