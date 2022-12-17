import { CVLicenseCertificateInterface } from "../../../../interface/cv/cvlicensecertificate_interface";

const LicenseAndCertificateItem = ({
  item,
}: {
  item: CVLicenseCertificateInterface;
}) => {
  const startDate = new Date(item.start_date);
  const endDate = item.end_date && new Date(item.end_date);

  const readableStartDate = startDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
  });
  const readableEndDate = endDate?.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
  });
  const date = `${readableStartDate} - ${
    endDate ? readableEndDate : "Present"
  }`;
  return (
    <div className="flex flex-col font-dm-sans gap-3">
      <div className="text-gray-1 font-medium 2xl:text-lg">
        {item.publisher}
      </div>
      <div className="text-gray-1 font-medium 2xl:text-xl">{item.name}</div>
      <div className="text-gray-7 2xl:text-sm">{date}</div>
      {item.credential && (
        <div
          className={`text-gray-7 2xl:text-sm ${
            item.url && "underline hover:cursor-pointer"
          }`}
          onClick={(e) => {
            if (!item.url) return false;
            window.open(item.url);
          }}
        >
          {`Credential : ${item.credential}`}
        </div>
      )}
    </div>
  );
};

const LicenseAndCertificateSection = ({
  licenses,
}: {
  licenses: CVLicenseCertificateInterface[];
}) => {
  return (
    <div className="flex flex-col gap-10 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="text-gray-1 font-medium font-outfit text-3xl 2xl:text-4xl">
        License & Certificate
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {licenses.map((val, index) => {
          return <LicenseAndCertificateItem key={val.id} item={val} />;
        })}
      </div>
    </div>
  );
};

export default LicenseAndCertificateSection;
