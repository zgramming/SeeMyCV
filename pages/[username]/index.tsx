import { Button } from "antd";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { env } from "process";
import { ReactElement } from "react";
import CustomLayout from "../../components/layout/custom_layout";

import WatanasaTemplate from "../../components/template/1_watanasa/watanasa_template";
import DefaultTemplateWebsite from "../../components/template/default/default_template_website";
import { Users } from "../../interface/main_interface";

interface Props {
  user?: Users;
}

const chooseTemplate = (codeTemplate: string) => {};

const Page = (props: Props) => {
  const { query, replace, asPath } = useRouter();
  if (!props.user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center space-y-5 bg-watanasa-accent">
        <div className="text-5xl text-white text-center ">
          Username {query.username} tidak ditemukan
        </div>
        <Button
          size="large"
          type="primary"
          className="bg-watanasa-spot-1 hover:bg-red-400 border-0"
          onClick={(e) => replace("/")}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  const { CVProfile, name, username } = props.user;
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/${username}`;
  const imageUrl = `${process.env.NEXT_PUBLIC_BASEURL}/images/logo_primary.png`;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={CVProfile?.description} />
        <meta property="og:title" content={name} />
        <meta property="og:type" content={CVProfile?.motto} />
        <meta property="og:url" content={url} />
        <meta property="og:image:url" content={imageUrl} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="SeeMyCV" />
        <meta property="og:description" content={CVProfile?.description} />
      </Head>

      {/* <DefaultTemplateWebsite user={props.user} /> */}
      <WatanasaTemplate user={props.user} />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <CustomLayout>{page}</CustomLayout>;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const params = context.params;
    const username = params?.username;
    const response = await axios.get(`${env.BASEAPIURL}/v1/user/${username}`);
    const {
      success,
      message,
      data,
    }: { success: boolean; message: string; data: Users } = response.data;

    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null,
      },
    };
  }
};
