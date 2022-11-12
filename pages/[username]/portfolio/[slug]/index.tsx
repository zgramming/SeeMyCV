import { Tag } from "antd";
import axios from "axios";
import { GetServerSideProps } from "next";
import { env } from "process";
import { ReactElement } from "react";

import CustomLayout from "../../../../components/layout/custom_layout";
import { CVPortfolioInterface } from "../../../../interface/cv/cvportfolio_interface";

const Page = ({ portfolio }: { portfolio: CVPortfolioInterface }) => {
  const createdDate = new Date(portfolio.created_at);
  return (
    <div className="min-h-[50vh] flex flex-col space-y-5 py-12 px-5 md:px-12 lg:px-24">
      <div className="text-watanasa-gray-3 text-base">
        {createdDate.toLocaleDateString("id-ID", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })}
      </div>
      <div className="font-medium text-4xl">{portfolio.title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: portfolio.description }}
        className={"text-base font-normal text-justify leading-relaxed"}
      />
      <div className="flex flex-col space-y-3">
        <div className="font-medium text-xl">Social Media</div>
        <div className="flex flex-wrap items-center space-x-5">
          {portfolio.urls.map((val, index) => {
            return (
              <a
                key={val.id}
                className="font-medium underline text-watanasa-gray-1 text-base"
                onClick={(e) => window.open(val.url)}
              >
                {val.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="font-medium text-xl">Tags</div>
        <div className="flex flex-wrap items-center space-x-3">
          {portfolio.urls.map((val, index) => {
            return (
              <Tag
                key={val.id}
                className="bg-watanasa-primary-100 text-watanasa-primary-500 text-base font-semibold border-none shadow rounded mb-1 p-2"
              >
                {val.name}
              </Tag>
            );
          })}
        </div>
      </div>
    </div>
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
    const slug = params?.slug;
    console.log({ params });
    const response = await axios.get(
      `${env.BASEAPIURL}/v1/portfolio/username/${username}/slug/${slug}`
    );

    const {
      success,
      message,
      data,
    }: { success: boolean; message: string; data: CVPortfolioInterface } =
      response.data;

    return {
      props: {
        portfolio: data,
      },
    };
  } catch (error) {
    return {
      props: {
        portfolio: null,
      },
    };
  }
};
