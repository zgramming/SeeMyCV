import { Button, Col, Form, Input, Modal, notification, Row, Spin } from "antd";
import Search from "antd/lib/input/Search";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import BG1 from "../public/images/bg_index_1.png";
import BG2 from "../public/images/bg_index_2.png";
import BG3 from "../public/images/bg_index_3.png";
import BG4 from "../public/images/bg_index_4.png";

const NavbarIndex = () => {
  const { push } = useRouter();
  return (
    <div
      className={`sticky top-0 z-50 h-32 bg-default-scaffold mx-auto shadow px-5 md:px-12 lg:px-24 xl:px-80`}
    >
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between">
          <div className="text-4xl font-poppins font-bold tracking-widest">
            SeeMyCV
          </div>
          <div>
            <Search
              placeholder="Cari username"
              onSearch={(e) => push(`/${e}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonSignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async () => {
    try {
      setIsLoading(true);
      const url = process.env.NEXT_PUBLIC_BASEAPIURL + `/v1/user/signup`;
      const { email, username, password } = await form.validateFields();
      const { data, status } = await axios.post(url, {
        username,
        password,
        email,
      });

      const { success, message, data: dataResponse } = data;

      console.log({
        email,
        username,
        password,
      });

      notification.success({
        message: "Success Sign Up",
        description: message,
      });

      setIsModalOpen(false);
    } catch (e: any) {
      const { message, status, type } = e?.response?.data || {};
      const errorNotification = {
        duration: 0,
        message: "Error",
        description: "Unknown Error Message",
      };
      if (type === "VALIDATION_ERROR") {
        const errors = (message as Array<any>).map(
          (val, index) => `${val.message}`
        );
        notification.error({
          ...errorNotification,
          description: (
            <ul className="list-decimal">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ),
        });
        return;
      }

      notification.error({ ...errorNotification, description: message });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Button
        type="primary"
        className="h-16 w-40 bg-default-primary border-none shadow rounded-lg hover:bg-red-800"
        onClick={(e) => setIsModalOpen(true)}
      >
        <span className="font-bold text-lg">SIGN UP</span>
      </Button>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          title="Sign Up"
          maskClosable={false}
          keyboard={false}
          closable={false}
          onCancel={(e) => setIsModalOpen(false)}
          footer={
            <Spin spinning={isLoading}>
              <Button type="text" onClick={(e) => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                type="primary"
                form="form_validation"
                htmlType="submit"
                className="border-0 bg-default-spot-1 hover:bg-red-400"
              >
                Sign Up
              </Button>
            </Spin>
          }
        >
          <Spin spinning={isLoading}>
            <Form
              form={form}
              name="form_validation"
              id="form_validation"
              layout="vertical"
              onFinish={onFinish}
              preserve={false}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true }]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
            </Form>
          </Spin>
        </Modal>
      )}
    </>
  );
};

const ButtonSignIn = () => {
  return (
    <>
      <Button
        type="ghost"
        className="h-16 w-40 bg-white border-solid border-2 border-default-primary text-default-primary shadow rounded-lg hover:bg-gray-200 hover:text-default-primary hover:border-default-primary"
        onClick={(e) => window.open(process.env.NEXT_PUBLIC_WEBADMINURL)}
      >
        <span className="font-bold text-lg">SIGN IN</span>
      </Button>
    </>
  );
};

const FooterSection = () => {
  return (
    <div className="h-24 flex flex-col justify-center items-center bg-default-spot-1 text-white text-xl font-bold p-5">
      See My CV | All Right Reserved
    </div>
  );
};

const BannerSection = () => {
  return (
    <div className="flex flex-row items-center text-white bg-default-spot-1 space-x-10 py-24 px-5 xl:px-32 xl:min-h-[calc(100vh-8rem)]">
      <Row align="middle">
        <Col
          sm={24}
          md={24}
          lg={12}
          xl={10}
          className="w-full order-2 lg:order-1"
        >
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
              <ButtonSignUp />
              <ButtonSignIn />
            </div>
          </div>
        </Col>
        <Col
          sm={24}
          md={24}
          lg={12}
          xl={14}
          className="w-screen order-1 lg:order-2 "
        >
          <div className="relative w-full h-[15rem] md:h-[25rem] xl:h-[30rem]">
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

const FCCSection = () => {
  return (
    <div className="flex flex-col justify-center py-24 px-5 xl:px-32 xl:h-[calc(100vh-8rem)]">
      <Row align="middle" gutter={24}>
        <Col sm={24} md={24} lg={12} xl={14} className="w-full ">
          <div className="relative w-full h-[15rem] md:h-[25rem] xl:h-[30rem]">
            <Image
              src={BG2}
              alt="Image background index 2"
              className="rounded-xl shadow-lg"
              fill
            />
          </div>
        </Col>
        <Col sm={24} md={24} lg={12} xl={10} className="w-full pt-10 lg:pt-0">
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
                className="bg-default-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-default-spot-2"
              >
                Profile
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-default-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-default-spot-2"
              >
                Experience
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-default-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-default-spot-2"
              >
                Education
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-default-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-default-spot-2"
              >
                Skill
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-default-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-default-spot-2"
              >
                L & C
              </Button>
              <Button
                type="primary"
                size="large"
                className="bg-default-spot-1 border-0 shadow rounded-xl mb-5 hover:bg-default-spot-2"
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

const PreviewWebsiteSection = () => {
  return (
    <div className="flex flex-col justify-center py-24 px-5 xl:px-32 xl:h-[calc(100vh-8rem)]">
      <Row align="middle" gutter={24}>
        <Col
          sm={24}
          md={24}
          lg={12}
          xl={10}
          className="w-full lg:w-full order-2 lg:order-1 pt-10 lg:pt-0"
        >
          <div className="flex flex-col space-y-5">
            <div className="font-poppins font-bold text-4xl tracking-widest">
              Preview Website
            </div>
            <div className="font-light text-xl">
              You can easily customize and preview the appearance of your
              website using the templates we have provided before you release
              your website to the world
            </div>
          </div>
        </Col>
        <Col
          sm={24}
          md={24}
          lg={12}
          xl={14}
          className="w-full order-1 lg:order-2"
        >
          <div className="relative w-full h-[15rem] md:h-[25rem] xl:h-[30rem]">
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

const PreviewPDFSection = () => {
  return (
    <div className="flex flex-col justify-center py-24 px-5 xl:px-32 xl:h-[calc(100vh-8rem)]">
      <Row align="middle" gutter={24}>
        <Col sm={24} md={24} lg={12} xl={14} className="w-full">
          <div className="relative w-full h-[15rem] md:h-[25rem] xl:h-[30rem]">
            <Image
              src={BG4}
              alt="Image background index 2"
              className="rounded-xl shadow-lg"
              fill
            />
          </div>
        </Col>
        <Col sm={24} md={24} lg={12} xl={10} className="w-full pt-5 lg:pt-0">
          <div className="flex flex-col space-y-5">
            <div className="font-poppins font-bold text-4xl tracking-widest">
              Preview PDF
            </div>
            <div className="font-light text-xl">
              You can easily <b>choose Template</b>, <b>Preview</b> and
              <b>Download</b> your own Curriculum Vitae (CV) file based on the
              information already stored on your admin page
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>SeeMyCV</title>
      </Head>
      <div className="font-josefin-sans">
        <NavbarIndex />
        <BannerSection />
        <FCCSection />
        <PreviewWebsiteSection />
        <PreviewPDFSection />
        <FooterSection />
      </div>
    </>
  );
}
