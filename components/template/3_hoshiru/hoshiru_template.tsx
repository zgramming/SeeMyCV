import { useEffect, useRef } from "react";
import { CVEducationInterface } from "../../../interface/cv/cveducation_interface";

import { Users } from "../../../interface/main_interface";
import navigationScrollToComponent from "../../../repository/navigation_scrollto_component";
import ExperienceSection from "./components/experience_section";
import ProfileSection from "./components/profile_section";

const EducationSection = ({
  educations,
}: {
  educations: CVEducationInterface[];
}) => {
  return (
    <div className="flex flex-col space-y-10 bg-hoshiru-primary-100 px-5 md:px-12 lg:py-12 lg:px-24"></div>
  );
};

const HoshiruTemplate = ({ user }: { user: Users }) => {
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
    </div>
  );
};
export default HoshiruTemplate;
