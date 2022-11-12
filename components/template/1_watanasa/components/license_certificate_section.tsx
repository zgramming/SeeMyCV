import { Button, Card, Carousel } from "antd";
import { saveAs } from "file-saver";
import { useState } from "react";

import { CalendarOutlined, LinkOutlined } from "@ant-design/icons";

import useBreakpoint from "../../../../hooks/use_breakpoint";
import { CVLicenseCertificateInterface } from "../../../../interface/cv/cvlicensecertificate_interface";
import { dateToyMd } from "../../../../utils/function";

const LicenseCertificateItem = ({
  license,
}: {
  license: CVLicenseCertificateInterface;
}) => {
  const [isGrabIcon, setIsGrabIcon] = useState(false);
  const startDate = new Date(license.start_date);
  const endDate = license.end_date && new Date(license.end_date);
  return (
    <div
      onMouseDown={(e) => setIsGrabIcon(true)}
      onMouseUp={(e) => setIsGrabIcon(false)}
    >
      <Card className={`mx-5 rounded-xl ${isGrabIcon && "cursor-grabbing"}`}>
        <div className="flex flex-col space-y-3">
          <div className="text-watanasa-primary-800 text-base font-medium">
            {license.publisher}
          </div>
          <div className="font-medium text-base text-watanasa-gray-1">
            {license.name}
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CalendarOutlined />
            <div>{dateToyMd(startDate)}</div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <LinkOutlined />
            <div
              onClick={(e) => {
                if (!license.url) return;
                window.open(license.url);
              }}
              className="font-medium text-watanasa-gray-3"
              style={{
                ...(license.url && {
                  textDecoration: "underline",
                  cursor: "pointer",
                }),
              }}
            >
              Credential : {license.credential}
            </div>
          </div>
          {license.file && (
            <div className="flex flex-row justify-start">
              <Button
                type="primary"
                onClick={(e) => saveAs(license.file ?? "", license.name)}
              >
                Download File
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

const LicenseCertificateSection = ({
  licenses,
}: {
  licenses: CVLicenseCertificateInterface[];
}) => {
  const breakpoint = useBreakpoint();

  return (
    <div className="flex flex-col bg-watanasa-primary-100 space-y-10 py-24 px-5 md:px-12 lg:px-24">
      <div className="text-watanasa-primary-900 text-4xl font-semibold">
        LICENSE & CERTIFICATION
      </div>
      {/* TODO: Check apakah jumlah license kurang dari 3, Jika kurang gunakan card biasa */}
      {licenses.length < 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {licenses.map((val, index) => (
            <LicenseCertificateItem key={val.id} license={val} />
          ))}
        </div>
      )}
      {licenses.length >= 3 && (
        <Carousel
          slidesToShow={
            breakpoint == "mobile" ? 1 : breakpoint == "laptop" ? 2 : 3
          }
          slidesToScroll={
            breakpoint == "mobile" ? 1 : breakpoint == "laptop" ? 2 : 3
          }
          centerPadding={"60px"}
          autoplaySpeed={3000}
          draggable
          swipeToSlide
          centerMode
          infinite
          autoplay
          focusOnSelect
          appendDots={(dots) => (
            <div
              style={{
                margin: "-70px auto",
              }}
            >
              <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
          )}
        >
          {licenses.map((val, index) => {
            return <LicenseCertificateItem key={val.id} license={val} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

export default LicenseCertificateSection;
