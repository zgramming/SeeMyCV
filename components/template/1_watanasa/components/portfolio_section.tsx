import { Button, Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { WarningOutlined } from "@ant-design/icons";

import { CVPortfolioInterface } from "../../../../interface/cv/cvportfolio_interface";
import BGGradient from "../../../../public/template/watanasa/bg_gradient.png";

const PortfolioItem = ({ portfolio }: { portfolio: CVPortfolioInterface }) => {
  const { push, query } = useRouter();
  const [isImageError, setIsImageError] = useState(false);

  const { username } = query;
  return (
    <Card
      style={{
        padding: 0,
        margin: 0,
      }}
      bodyStyle={{
        padding: 0,
        margin: 0,
      }}
      className="shadow rounded-xl bg-watanasa-primary-900"
      onClick={(e) => push(`/${username}/portfolio/${portfolio.slug}`)}
      hoverable
    >
      <div className="flex flex-col">
        <div className="relative h-72">
          {!isImageError ? (
            <Image
              alt="Image Portfolio"
              src={portfolio.thumbnail ?? BGGradient}
              className={`rounded-tl-xl rounded-tr-xl border-none`}
              style={{ objectFit: "cover" }}
              onError={(e) => setIsImageError(true)}
              fill
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <WarningOutlined className="text-4xl text-white" />
            </div>
          )}
        </div>
        <div className="flex flex-col text-white space-y-5 rounded-br-xl rounded-bl-xl p-5">
          <div className="font-semibold text-xl line-clamp-2">
            {portfolio.title}
          </div>
          <div
            className="h-12 font-light text-xs overflow-y-clip"
            dangerouslySetInnerHTML={{ __html: portfolio.description }}
          />
          <div className="flex justify-start">
            <Button type="primary" className="rounded-lg">
              View Project
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const PortfolioSection = ({
  portfolios,
}: {
  portfolios: CVPortfolioInterface[];
}) => {
  return (
    <div className="py-24 px-5 md:px-12 lg:px-24">
      <div className="flex flex-col space-y-5">
        <div className="text-watanasa-primary-500 text-2xl font-semibold">
          PORTFOLIO
        </div>
        <div className="text-watanasa-primary-900 text-4xl font-semibold">
          LATEST PROJECT
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolios.map((val, index) => {
            return <PortfolioItem key={val.id} portfolio={val} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
