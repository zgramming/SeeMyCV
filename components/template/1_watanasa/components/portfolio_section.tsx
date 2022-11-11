import { Button, Card } from "antd";
import Image from "next/image";

const PortfolioItem = () => {
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
    >
      <div className="relative h-72">
        <Image
          alt="Image Portfolio"
          src={"https://picsum.photos/800"}
          className={`rounded-tl-xl rounded-tr-xl border-none`}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="flex flex-col bg-watanasa-primary-900 text-white space-y-5 rounded-br-xl rounded-bl-xl p-5">
        <div className="font-semibold text-xl line-clamp-2">
          Need Food App Design
        </div>
        <div className="font-light text-xs line-clamp-3">
          Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed
          blanditiis Lom ipsum dolo, sit amet consectetu adpisicing elit, rem
          voluptas sed blanditiis Lom ipsum dolo, sit amet consectetu adpisicing
          elit, rem voluptas sed blanditiis
        </div>
        <div className="flex justify-start">
          <Button type="primary" className="rounded-lg">
            View Demo
          </Button>
        </div>
      </div>
    </Card>
  );
};

const PortfolioSection = () => {
  return (
    <div className="min-h-screen py-24 px-5 md:px-12 lg:px-24">
      <div className="flex flex-col space-y-5">
        <div className="text-watanasa-primary-500 text-2xl font-semibold">
          PORTFOLIO
        </div>
        <div className="text-watanasa-primary-900 text-4xl font-semibold">
          LATEST PROJECT
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from<number>({ length: 13 }).map((val, index) => {
            return <PortfolioItem key={val} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
