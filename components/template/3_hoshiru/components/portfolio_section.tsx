import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

import { CVPortfolioInterface } from "../../../../interface/cv/cvportfolio_interface";
import Logo from "../../../../public/images/logo_primary.png";
import { portfolioRoute } from "../../../../utils/routes";

const PortfolioItem = ({ portfolio }: { portfolio: CVPortfolioInterface }) => {
  const { push, query } = useRouter();
  const { username } = query;
  return (
    <Row key={portfolio.id} gutter={24}>
      <Col md={24} lg={8} xl={8} xxl={4} className="w-full">
        <div className="relative w-full h-80 mb-10 lg:h-60 lg:mb-0">
          <Image
            alt="Image Portfolio"
            src={portfolio.thumbnail ?? Logo}
            className="rounded-lg shadow-lg"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </Col>
      <Col md={24} lg={16} xl={16} xxl={20} className="w-full">
        <div className="flex flex-col space-y-5">
          <div className="text-hoshiru-gray-1 text-2xl font-bold">
            {portfolio.title}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: portfolio.description }}
            className="h-52 overflow-clip lg:h-32"
          />
          <Button
            type="primary"
            size="large"
            className="self-start bg-hoshiru-primary-600 border-none rounded-lg hover:bg-hoshiru-primary-700"
            onClick={(e) => {
              push(portfolioRoute(`${username}`, portfolio.slug));
            }}
          >
            View Detail
          </Button>
        </div>
      </Col>
    </Row>
  );
};

const PortfolioSection = ({
  portfolios,
}: {
  portfolios: CVPortfolioInterface[];
}) => {
  return (
    <div className="flex flex-col space-y-5 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="font-semibold text-xl text-hoshiru-primary-600">
        PORTFOLIO
      </div>
      <div className="font-semibold text-3xl text-hoshiru-primary-900">
        LATEST PROJECTS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
        {portfolios.map((val, index) => (
          <PortfolioItem key={val.id} portfolio={val} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
