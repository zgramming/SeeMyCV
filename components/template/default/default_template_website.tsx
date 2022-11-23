import { useEffect, useRef } from "react";

import { Users } from "../../../interface/main_interface";
import navigationScrollToComponent from "../../../repository/navigation_scrollto_component";
import EducationSection from "./components/education_section";
import ExperienceSection from "./components/experience_section";
import LicenseAndCertificateSection from "./components/license_certificate_section";
import DefaultTemplateNavbar from "./components/navigationbar";
import PortfolioSection from "./components/portfolio_section";
import ProfileSection from "./components/profile_section";
import SkillSection from "./components/skill_section";

const DefaultTemplateWebsite = ({ user }: { user: Users }) => {
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
    <div className="font-josefin-sans bg-default-scaffold">
      <ProfileSection
        ref={profileRef}
        profile={user.CVProfile}
        email={user.email}
        name={user.name}
      />
      <ExperienceSection ref={experienceRef} experience={user.CVExperience} />
      <EducationSection ref={educationRef} education={user.CVEducation} />
      <SkillSection ref={skillRef} skill={user.CVSkill} />
      <LicenseAndCertificateSection
        ref={licenseCertificateRef}
        licenseCertificate={user.CVLicenseCertificate}
      />
      <PortfolioSection ref={portfolioRef} portfolio={user.CVPortfolio} />
    </div>
  );
};

export default DefaultTemplateWebsite;
