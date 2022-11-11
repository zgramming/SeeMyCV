import { Drawer } from "antd";
import Image from "next/image";
import { useState } from "react";

import BarSVG from "../../../../public/template/watanasa/bar.svg";

const menus: { code: string; name: string }[] = [
  { name: "Experience", code: "experience" },
  { name: "Education", code: "education" },
  { name: "Skill", code: "skill" },
  { name: "Portfolio", code: "portfolio" },
  { name: "License & Certification", code: "l&c" },
];

const NavbarDrawerSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <div
        className="relative hover:cursor-pointer"
        onClick={(e) => {
          setIsDrawerOpen(true);
        }}
      >
        <Image alt="Icon" src={BarSVG} width={60} height={60} />
      </div>
      <Drawer
        title={
          <div className="text-watanasa-primary-500 font-medium">SeeMyCV</div>
        }
        placement="right"
        onClose={(e) => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        {menus.map((val, index) => {
          return (
            <p
              className="font-medium text-base text-watanasa-gray-3"
              key={val.code}
            >
              {val.name}
            </p>
          );
        })}
      </Drawer>
    </div>
  );
};

const NavbarItems = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-wrap items-center space-x-10 list-none text-watanasa-gray-3 lg:text-base xl:text-xl">
        {menus.map((val) => {
          return (
            <div
              key={val.code}
              className="hover:cursor-pointer hover:text-watanasa-primary-500  hover:border-solid hover:border-0 hover:border-b-2"
            >
              {val.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const NavbarSection = () => {
  return (
    <div
      className={`sticky top-0 z-50 bg-white shadow py-5 px-5 md:px-12 lg:py-12 lg:px-24`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="font-medium text-2xl text-watanasa-primary-500 lg:text-4xl">
          SeeMyCV
        </div>
        <NavbarDrawerSection />
        <NavbarItems />
      </div>
    </div>
  );
};

export default NavbarSection;
