import { useRouter } from "next/router";

const IndexPage = () => {
  const { query } = useRouter();
  const { username } = query;
  return (
    <div className="flex flex-col">
      <ComponentProfile />
      <ComponentExperience />
      <ComponentEducation />
      <ComponentSkill />
      <ComponentLicenseCertificate />
    </div>
  );
};

const ComponentProfile = () => {
  return <div className="min-h-screen bg-watanasa-primary"></div>;
};
const ComponentExperience = () => {
  return <div className="min-h-screen bg-watanasa-shade-2"></div>;
};
const ComponentEducation = () => {
  return <div className="min-h-screen bg-watanasa-shade-3"></div>;
};
const ComponentSkill = () => {
  return <div className="min-h-screen bg-watanasa-shade-4"></div>;
};
const ComponentLicenseCertificate = () => {
  return <div className="min-h-screen bg-watanasa-shade-5"></div>;
};
const ComponentPortfolio = () => {
  return <div className="min-h-screen bg-watanasa-accent"></div>;
};

export default IndexPage;
