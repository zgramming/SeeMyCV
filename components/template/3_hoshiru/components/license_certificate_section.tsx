import { Button, Card } from "antd";
import saveAs from "file-saver";

import { CVLicenseCertificateInterface } from "../../../../interface/cv/cvlicensecertificate_interface";

const LicenseAndCertificateItem = ({
  license,
}: {
  license: CVLicenseCertificateInterface;
}) => {
  const startDate = new Date(license.start_date);
  const endDate = license.end_date && new Date(license.end_date);

  const readableStartDate = startDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
  });
  const readableEndDate = endDate?.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
  });
  return (
    <Card key={license.id} className="rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center space-y-3 text-center min-h-[10rem]">
        <div className="text-hoshiru-primary-600 text-lg font-semibold ">
          {license.name}
        </div>
        <div className="text-hoshiru-gray-1 text-base font-semibold">
          {license.publisher}
        </div>
        <div className="text-hoshiru-gray-1 text-sm">
          {`${readableStartDate} - ${endDate ? readableEndDate : "Present"}`}
        </div>
        {license.credential && (
          <div
            className={`text-hoshiru-gray-2 text-sm ${
              license.url && "underline hover:cursor-pointer"
            }`}
            onClick={(e) => {
              if (!license.url) return false;
              window.open(license.url);
            }}
          >
            {`Credential : ${license.credential}`}
          </div>
        )}
        {license.file && (
          <Button
            type="ghost"
            size="large"
            className="text-hoshiru-primary-600 font-semibold border border-hoshiru-primary-600"
            onClick={(e) => saveAs(license.file ?? "", license.name)}
          >
            Download File
          </Button>
        )}
      </div>
    </Card>
  );
};
const LicenseAndCertificateSection = ({
  licenses,
}: {
  licenses: CVLicenseCertificateInterface[];
}) => {
  return (
    <div className="flex flex-col space-y-10 bg-hoshiru-primary-100 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="font-semibold text-3xl text-hoshiru-primary-900">
        LICENSE & CERTIFICATION
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {licenses.map((val, index) => {
          return <LicenseAndCertificateItem key={val.id} license={val} />;
        })}
      </div>
    </div>
  );
};

export default LicenseAndCertificateSection;
