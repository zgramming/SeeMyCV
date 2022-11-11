import { Button } from "antd";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { env } from "process";

import DefaultTemplateWebsite from "../../components/template/default/default_template_website";
import { Users } from "../../interface/main_interface";

interface Props {
  user?: Users;
}

const Page = (props: Props) => {
  const { query, replace } = useRouter();
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

  return (
    <>
      <Head>
        <title>{props.user.name}</title>
      </Head>
      <DefaultTemplateWebsite user={props.user} />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const params = context.params;
    const username = params?.username;
    const response = await axios.get(`${env.BASEAPIURL}/user/${username}`);
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
