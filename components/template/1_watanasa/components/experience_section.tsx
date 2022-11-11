import { CalendarOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Card, Row, Col, Tag, Button } from "antd";
import Image from "next/image";

const ExperienceHeader = ({ title }: { title: string }) => {
  return (
    <div
      className={`
  absolute top-[-50px] right-[50%] left-0 bg-watanasa-primary-100 rounded-tr-xl rounded-br-xl py-5 px-5 
  md:px-12 md:right-[70%]
  lg:px-24 lg:top-[-50px]
  `}
    >
      <div className="font-semibold text-2xl text-watanasa-primary-900 xl:text-3xl">
        {title ?? "Zeffry"}
      </div>
    </div>
  );
};

const ExperienceItem = () => {
  return (
    <Card className={"rounded-xl"} hoverable>
      <Row align="top">
        <Col sm={24} md={24} lg={4} className="w-full hidden lg:block">
          <div className="relative w-full h-16 bg-red-50 xl:h-20">
            <Image
              alt="Image Experience"
              src={`https://picsum.photos/900`}
              className={"rounded-xl shadow-xl"}
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </Col>
        <Col sm={24} md={24} lg={20} className="w-full lg:pl-5">
          <div className="flex flex-col space-y-1 text-watanasa-gray-1">
            <div className="font-semibold text-xl">
              PT Sinergi Cakra Sinatria
            </div>
            <div className="font-medium text-watanasa-gray-3 text-base">
              Web Developer
            </div>
            <div className="flex flex-row items-center text-xs space-x-2">
              <CalendarOutlined />
              <div>01 Jun 2019 - 01 Jun 2022 (3 Tahun)</div>
            </div>
            <div className="text-sm pt-3 line-clamp-3 ">
              Lorem ipsum dolor sit amet consectetur. Sed mi est consectetur
              tristique massa quis. Aliquam aliquam mauris nunc amet elit.
              Commodo odio enim mattis vulputate mattis auctor sed id. Aenean
              eget tempor tincidunt arcu montes neque urna.
            </div>
            <div className="flex flex-wrap pt-2">
              {Array.from<number>({ length: 5 }).map((val, index) => {
                return (
                  <Tag
                    key={val}
                    className="bg-watanasa-primary-100 text-watanasa-primary-500 font-bold my-1 p-1 rounded border-none"
                  >
                    #2db7f5
                  </Tag>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <div className="min-h-screen relative py-24 px-5 md:px-12 lg:px-24 bg-watanasa-primary-500 ">
      <ExperienceHeader title="EXPERIENCE" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from<number>({ length: 12 }).map((val, index) => {
          return <ExperienceItem key={val} />;
        })}
      </div>
      <div className="flex flex-row justify-end pt-5">
        <Button type="text" className="text-white">
          <span>View More</span>
          <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};
export default ExperienceSection;
