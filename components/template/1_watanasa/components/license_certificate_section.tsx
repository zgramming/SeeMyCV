import { Button, Card, Carousel } from "antd";
import { useState } from "react";

import { CalendarOutlined, LinkOutlined } from "@ant-design/icons";

import useBreakpoint from "../../../../hooks/use_breakpoint";

const LicenseCertificateItem = () => {
  const [isGrabIcon, setIsGrabIcon] = useState(false);
  return (
    <div
      onMouseDown={(e) => setIsGrabIcon(true)}
      onMouseUp={(e) => setIsGrabIcon(false)}
    >
      <Card className={`mx-5 rounded-xl ${isGrabIcon && "cursor-grabbing"}`}>
        <div className="flex flex-col space-y-3">
          <div className="text-watanasa-primary-800 text-base font-medium">
            Dicoding
          </div>
          <div className="font-medium text-base text-watanasa-gray-1">
            Menjadi Flutter Developer Expert (MFDE)
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CalendarOutlined />
            <div>November 2019</div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <LinkOutlined />
            <a href="#" className="underline font-medium text-watanasa-gray-3">
              Credential : GRX5KW0DYZ0M
            </a>
          </div>
          <div className="flex flex-row justify-start">
            <Button type="primary">Download File</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const LicenseCertificateSection = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className="flex flex-col bg-watanasa-primary-100 space-y-10 py-24 px-5 md:px-12 lg:px-24">
      <div className="text-watanasa-primary-900 text-4xl font-semibold">
        LICENSE & CERTIFICATION
      </div>
      {/* TODO: Check apakah jumlah license kurang dari 3, Jika kurang gunakan card biasa */}
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
        {Array.from<number>({ length: 10 }).map((val, index) => {
          return <LicenseCertificateItem key={val} />;
        })}
      </Carousel>
    </div>
  );
};

export default LicenseCertificateSection;
