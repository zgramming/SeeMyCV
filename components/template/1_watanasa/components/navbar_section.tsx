import { Drawer } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { NavigationMenuInterface } from "../../../../interface/navigation_menu";
import BarSVG from "../../../../public/template/watanasa/bar.svg";
import navigationScrollToComponent from "../../../../repository/navigation_scrollto_component";

const menus: NavigationMenuInterface[] = [
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
          <div
            className="text-watanasa-primary-500 font-medium hover:cursor-pointer"
            onClick={(e) => navigationScrollToComponent.scrollTo("profile")}
          >
            SeeMyCV
          </div>
        }
        placement="right"
        onClose={(e) => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        {menus.map((val, index) => {
          return (
            <p
              className="font-medium text-base text-watanasa-gray-3 hover:cursor-pointer"
              key={val.code}
              onClick={(e) => navigationScrollToComponent.scrollTo(val.code)}
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
              onClick={(e) => navigationScrollToComponent.scrollTo(val.code)}
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
  const { query, push } = useRouter();
  const { slug, username } = query;
  return (
    <div
      className={`sticky top-0 z-50 bg-white shadow py-5 px-5 md:px-12 lg:py-12 lg:px-24`}
    >
      <div className="flex flex-row justify-between items-center">
        <div
          className={`
            font-medium text-2xl text-watanasa-primary-500 lg:text-4xl
            hover:cursor-pointer
        `}
          onClick={(e) => {
            // Jika terdapat query `slug`, redirect ke index
            if (slug) {
              push(`/${username}`);
              return;
            }
            navigationScrollToComponent.scrollTo("profile");
          }}
        >
          SeeMyCV
        </div>
        <NavbarDrawerSection />
        <NavbarItems />
      </div>
    </div>
  );
};

export default NavbarSection;
