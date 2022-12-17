import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { CVPortfolioInterface } from "../../../../interface/cv/cvportfolio_interface";
import { portfolioRoute } from "../../../../utils/routes";

const PortfolioItem = ({ portfolio }: { portfolio: CVPortfolioInterface }) => {
  const { query } = useRouter();
  const { username } = query;
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {
    try {
      if (portfolio.tags) {
        setTags(JSON.parse(portfolio.tags) as string[]);
      }
    } catch (error) {}
    return () => {};
  }, [portfolio.tags]);
  return (
    <div className="flex flex-col gap-3 font-dm-sans">
      <Link href={portfolioRoute(`${username}`, portfolio.slug)}>
        <div className="text-gray-1 font-medium text-xl 2xl:text-2xl">
          {portfolio.title}
        </div>
      </Link>
      <div
        className="text-gray-7 leading-loose line-clamp-3 2xl:text-lg"
        dangerouslySetInnerHTML={{ __html: portfolio.description }}
      />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => {
          return (
            <div
              key={`${tag}_${index}`}
              className="rounded-full bg-gray-1 text-white py-1 px-2 2xl:text-xs"
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PortfolioSection = ({
  portfolios,
}: {
  portfolios: CVPortfolioInterface[];
}) => {
  return (
    <div className="flex flex-col gap-10 px-5 py-12 md:px-12 lg:py-12 lg:px-24">
      <div className="text-gray-1 font-medium font-outfit text-3xl 2xl:text-4xl">
        Latest Project
      </div>
      <div className="grid grid-cols-1 gap-10">
        {portfolios.map((portfolio, index) => {
          return <PortfolioItem key={portfolio.id} portfolio={portfolio} />;
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;
