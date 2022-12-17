import { CVEducationInterface } from "../../../../interface/cv/cveducation_interface";

const EducationItem = ({ education }: { education: CVEducationInterface }) => {
  const startDate = new Date(education.start_date);
  const endDate = education.end_date && new Date(education.end_date);
  const readableStartDate = startDate.toLocaleDateString("id-ID", {
    year: "numeric",
  });
  const readableEndDate = endDate?.toLocaleDateString("id-ID", {
    year: "numeric",
  });

  const rangeDate = `${readableStartDate} - ${
    endDate ? readableEndDate : "Present"
  }`;

  return (
    <div className="flex flex-col space-y-3 font-dm-sans">
      <div className="text-gray-1 font-medium 2xl:text-lg">
        {education.name}
      </div>
      <div className="text-gray-1 font-medium 2xl:text-xl">{`${education.major} - ${education.field_of_study}`}</div>
      <div className="text-gray-7 2xl:text-sm">{rangeDate}</div>
    </div>
  );
};

const EducationSection = ({
  educations,
}: {
  educations: CVEducationInterface[];
}) => {
  return (
    <div className="flex flex-col gap-10 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="text-gray-1 font-medium font-outfit text-3xl 2xl:text-4xl">
        Education
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:grid-cols-3">
        {educations.map((val, index) => {
          return <EducationItem key={val.id} education={val} />;
        })}
      </div>
    </div>
  );
};

export default EducationSection;
