import { Card } from "antd";
import Image from "next/image";
import { forwardRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";

import { EyeOutlined } from "@ant-design/icons";

import { CVPortfolioInterface } from "../../../../interface/cv/cvportfolio_interface";
import activeNavigationBarStore from "../../../../repository/active_navigationbar";

const PortfolioSectionItem = (props: { portfolio: CVPortfolioInterface }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isShowMenu ? 1 : 0 },
  });

  const portfolio = props.portfolio;
  return (
    <Card
      bodyStyle={{ padding: 0, margin: 0 }}
      style={{
        padding: 0,
        margin: 0,
      }}
      className="hover:cursor-pointer"
      onMouseEnter={(e) => setIsShowMenu(true)}
      onMouseLeave={(e) => setIsShowMenu(false)}
    >
      <div className="w-full h-80">
        <Image src={`${portfolio.thumbnail}`} alt="Image Portfolio" fill />
      </div>
      <animated.div
        style={springProps}
        className="absolute bottom-0 left-0 right-0 top-0 bg-watanasa-spot-1 flex flex-col justify-center items-center"
      >
        <EyeOutlined className="text-4xl text-white" />
      </animated.div>

      <animated.div
        style={springProps}
        className="absolute bottom-0 left-0 right-0 bg-black/25 px-5 py-2 "
      >
        <div className="text-center font-semibold text-white line-clamp-2">
          {portfolio.title}
        </div>
      </animated.div>
    </Card>
  );
};

const PortfolioSection = forwardRef<
  HTMLDivElement,
  { portfolio: CVPortfolioInterface[] }
>((props, ref) => {
  return (
    <div ref={ref}>
      <Waypoint
        onEnter={(e) => activeNavigationBarStore.setActiveMenu("portfolio")}
        onLeave={(e) => ""}
        bottomOffset={"50%"}
        topOffset={"20%"}
      >
        <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
          <div className={`flex flex-col px-5 md:px-12 lg:px-24 xl:px-80`}>
            <div className="font-bold font-poppins text-5xl text-center tracking-widest py-24">
              PORTFOLIO
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {props.portfolio.map((val, index) => {
                return <PortfolioSectionItem key={val.id} portfolio={val} />;
              })}
            </div>
          </div>
        </div>
      </Waypoint>
    </div>
  );
});

PortfolioSection.displayName = "Portfolio Section";
export default PortfolioSection;
