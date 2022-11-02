import { Button, Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";

import BG1 from "../public/images/bg_index_1.png";
import BG2 from "../public/images/bg_index_2.png";
import BG3 from "../public/images/bg_index_3.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>See My CV</title>
      </Head>
      <div
        className={`sticky top-0 z-50 h-32 bg-watanasa-scaffold mx-auto shadow px-5 md:px-12 lg:px-24 xl:px-80`}
      >
        <div className="h-full flex flex-col justify-center items-center text-4xl font-poppins font-bold tracking-widest">
          SeeMyCV
        </div>
      </div>
      <BannerSection />
      <FCCSection />
      <CreatePreviewSection />
      <FooterSection />
    </>
  );
}

const FooterSection = () => {
  return (
    <div className="h-24 flex flex-col justify-center items-center bg-watanasa-spot-1 text-white text-xl font-bold p-5">
      See My CV | All Right Reserved
    </div>
  );
};

const CreatePreviewSection = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col justify-center px-5 xl:px-32 ">
      <Row align="middle" gutter={24}>
        <Col
          md={24}
          lg={10}
          className="w-96 lg:w-full order-2 lg:order-1 pt-10 lg:pt-0"
        >
          <div className="flex flex-col space-y-5">
            <div className="font-poppins font-bold text-4xl tracking-widest">
              Create Then Preview
            </div>
            <div className="font-light text-xl">
              You can easily see the website layout that will be formed by our
              system, besides that you can also generate PDFs based on your
              custom content.{" "}
              <u>
                <b>
                  <i>This feature still phase development</i>
                </b>
              </u>
            </div>
            <div className="flex flex-wrap space-x-5">
              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                Preview Website
              </Button>

              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                Preview PDF
              </Button>
            </div>
          </div>
        </Col>
        <Col md={24} lg={14} className="w-[100vw] order-1 lg:order-2">
          <div className="relative w-full h-[20rem] lg:h-[30rem]">
            <Image
              src={BG3}
              alt="Image background index 2"
              className="rounded-xl shadow-lg"
              fill
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const FCCSection = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col justify-center px-5 xl:px-32">
      <Row align="middle" gutter={24}>
        <Col md={24} lg={14} className="w-[100vw] ">
          <div className="relative w-full h-[20rem] lg:h-[30rem]">
            <Image
              src={BG2}
              alt="Image background index 2"
              className="rounded-xl shadow-lg"
              fill
            />
          </div>
        </Col>
        <Col md={24} lg={10} className="w-full pt-10 lg:pt-0">
          <div className="flex flex-col space-y-5">
            <div className="font-poppins font-bold text-4xl tracking-widest">
              Fully Customize Content
            </div>
            <div className="font-light text-xl">
              We have some content that you can customize to make your personal
              branding more attractive, including:
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start space-x-5">
              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                Profile
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                Experience
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                Education
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                Skill
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                L & C
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-watanasa-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-watanasa-spot-2"
              >
                Portfolio
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const BannerSection = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-row items-center text-white bg-watanasa-spot-1 space-x-10 py-24 px-5 xl:px-32">
      <Row align="middle">
        <Col md={24} lg={12} className="w-full order-2 lg:order-1">
          <div className="flex flex-col space-y-10">
            <div className="font-poppins font-semibold text-3xl pt-10 lg:pt-0 lg:text-5xl">
              Show off your personal branding and skills to the world
            </div>
            <div className="font-normal text-lg lg:text-xl">
              We do our best to provide a platform for you to create and be
              creative to showcase your personal branding so that the world can
              see more of it
            </div>
            <div className="flex flex-row justify-center space-x-5 lg:justify-start">
              <Button
                type="primary"
                className="h-16 w-40 bg-watanasa-primary border-none shadow rounded-lg hover:bg-red-800"
              >
                <span className="font-bold text-lg">SIGN UP</span>
              </Button>
              <Button
                type="ghost"
                className="h-16 w-40 bg-white border border-watanasa-primary text-watanasa-primary shadow rounded-lg"
              >
                <span className="font-bold text-lg">SIGN IN</span>
              </Button>
            </div>
          </div>
        </Col>
        <Col md={24} lg={12} className="w-[100vw] order-1 lg:order-2">
          <div className="relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
            <Image
              src={BG1}
              alt="Image Background First"
              className="rounded-xl shadow-lg"
              fill
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
