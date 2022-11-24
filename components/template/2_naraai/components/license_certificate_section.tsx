import { Button, Card } from "antd";
import saveAs from "file-saver";

import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CVLicenseCertificateInterface } from "../../../../interface/cv/cvlicensecertificate_interface";

const LicenseCertificateSectionItem = ({
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
    <Card key={license.id} className="rounded-xl">
      <div className="flex flex-col justify-center min-h-[14rem]">
        <div className="self-center bg-naraai-primary-100 text-center rounded-xl border-solid border border-naraai-primary-500 p-4 mb-4">
          <FontAwesomeIcon
            icon={faBook}
            className="text-naraai-primary-500 h-8 w-8"
          />
        </div>
        <div className="flex flex-row justify-between items-center mb-2">
          <div className="text-naraai-primary-500 font-medium text-sm">
            {license.publisher}
          </div>
          <div className="text-naraai-gray-3 text-xs">
            {`${readableStartDate} - ${endDate ? readableEndDate : "Present"}`}
          </div>
        </div>
        <div className="text-naraai-gray-1 font-medium text-base mb-2">
          {license.name}
        </div>
        {license.credential && (
          <div
            className="text-sm text-naraai-gray-3 underline font-medium mb-4 hover:cursor-pointer"
            onClick={(e) => {
              if (license.url) {
                window.open(license.url);
              }
            }}
          >
            Credential : GRX5KW0DYZ0M
          </div>
        )}
        {license.file && (
          <Button
            type="primary"
            size="large"
            className="w-full rounded text-xs bg-naraai-primary-500 border-none shadow hover:bg-naraai-primary-500"
            onClick={(e) => saveAs(license.file!, license.name)}
          >
            Download File
          </Button>
        )}
      </div>
    </Card>
  );
};

const LicenseCertificateSection = ({
  licenses,
}: {
  licenses: CVLicenseCertificateInterface[];
}) => {
  return (
    <div className="flex flex-col bg-naraai-primary-100 py-24 px-5 md:px-12 lg:px-24">
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-14">
        LICENSE & CERTIFICATION
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {licenses.map((val) => {
          return <LicenseCertificateSectionItem key={val.id} license={val} />;
        })}
      </div>
    </div>
  );
};

export default LicenseCertificateSection;
