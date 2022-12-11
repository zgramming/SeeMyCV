import { Button, Card } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { CVPortfolioInterface } from '../../../../interface/cv/cvportfolio_interface';
import LogoPrimary from '../../../../public/images/logo_primary.png';
import { portfolioRoute } from '../../../../utils/routes';

const PortfolioItem = ({ portfolio }: { portfolio: CVPortfolioInterface }) => {
  const { push, query } = useRouter();
  const { username } = query;

  const createdAt = new Date(portfolio.created_at);
  const readableCreatedAt = createdAt.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return (
    <Card
      key={portfolio.id}
      style={{
        padding: 0,
        margin: 0,
      }}
      bodyStyle={{
        padding: 0,
        margin: 0,
      }}
      className="rounded-xl"
    >
      <div className="flex flex-col space-y-5 pb-6">
        <div className="relative h-64">
          <Image
            alt="Image Portfolio"
            src={portfolio.thumbnail ? portfolio.thumbnail : LogoPrimary}
            className="shadow-lg rounded-tl-xl rounded-tr-xl"
            style={{
              objectFit: "cover",
            }}
            fill
          />
        </div>
        <div className="flex flex-col space-y-5 px-4">
          <div className="text-naraai-gray-1 text-base font-medium line-clamp-1">
            {portfolio.title}
          </div>
          <div className="self-start bg-naraai-primary-100 text-naraai-primary-500 text-xs font-medium rounded-xl p-2">
            {readableCreatedAt}
          </div>
          <div
            className="text-naraai-gray-3 text-base h-24 overflow-hidden"
            dangerouslySetInnerHTML={{ __html: portfolio.description }}
          />
          <Button
            className="self-start text-naraai-primary-500 font-bold"
            type="link"
            onClick={(e) => push(portfolioRoute(`${username}`, portfolio.slug))}
          >
            Continue Reading
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
    <div className="flex flex-col px-5 md:px-12 lg:px-24">
      <div className="font-semibold text-naraai-gray-3 text-2xl text-center pb-3">
        PORTFOLIO
      </div>
      <div className="text-center text-naraai-primary-500 text-4xl font-bold pb-8">
        LATEST PROJECT
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {portfolios.map((val) => {
          return <PortfolioItem key={val.id} portfolio={val} />;
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;
