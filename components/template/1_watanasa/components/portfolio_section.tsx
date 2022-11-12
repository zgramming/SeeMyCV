import { Button, Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

import { CVPortfolioInterface } from "../../../../interface/cv/cvportfolio_interface";
import BGGradient from "../../../../public/template/watanasa/bg_gradient.png";

const PortfolioItem = ({ portfolio }: { portfolio: CVPortfolioInterface }) => {
  const { push, query } = useRouter();
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
      className="shadow rounded-xl"
      onClick={(e) => push(`/${username}/portfolio/${portfolio.slug}`)}
      hoverable
    >
      <div className="relative h-72">
        <Image
          alt="Image Portfolio"
          src={portfolio.thumbnail ?? BGGradient}
          className={`rounded-tl-xl rounded-tr-xl border-none`}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="flex flex-col bg-watanasa-primary-900 text-white space-y-5 rounded-br-xl rounded-bl-xl p-5">
        <div className="font-semibold text-xl line-clamp-2">
          {portfolio.title}
        </div>
        <div
          className="font-light text-xs line-clamp-2"
          dangerouslySetInnerHTML={{ __html: portfolio.description }}
        />
        <div className="flex justify-start">
          <Button type="primary" className="rounded-lg">
            View Project
          </Button>
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
