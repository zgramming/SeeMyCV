import { Drawer } from "antd";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { CvTemplateWebsiteInterface } from "../../../../interface/cv/cvtemplate_website_interface";
import { NavigationMenuInterface } from "../../../../interface/navigation_menu";
import BarSVG from "../../../../public/template/1_watanasa/bar.svg";
import navigationScrollToComponent from "../../../../repository/navigation_scrollto_component";
import userStore, { UserStore } from "../../../../repository/user_store";
import {
  CODE_TEMPLATE_WEB_HOSHIRU,
  CODE_TEMPLATE_WEB_NARAAI,
  CODE_TEMPLATE_WEB_WATANASA,
} from "../../../../utils/constant";

const menus: NavigationMenuInterface[] = [
  { name: "Experience", code: "experience" },
  { name: "Education", code: "education" },
  { name: "Skill", code: "skill" },
  { name: "Portfolio", code: "portfolio" },
  { name: "License & Certification", code: "l&c" },
];

type NavbarSetting = {
  backgroundColor: string;
  textColor: string;
};

const handlerNavbarSetting = (
  templateWebsite?: CvTemplateWebsiteInterface
): NavbarSetting => {
  switch (templateWebsite?.template_website?.code) {
    case CODE_TEMPLATE_WEB_WATANASA:
      return {
        backgroundColor: "bg-watanasa-primary-600",
        textColor: "text-watanasa-primary-600",
      };
    case CODE_TEMPLATE_WEB_NARAAI:
      return {
        backgroundColor: "bg-naraai-primary-600",
        textColor: "text-naraai-primary-600",
      };
    case CODE_TEMPLATE_WEB_HOSHIRU:
      return {
        backgroundColor: "bg-hoshiru-primary-600",
        textColor: "text-hoshiru-primary-600",
      };
    default:
      return {
        backgroundColor: "bg-default-spot-1",
        textColor: "text-default-spot-1",
      };
  }
};

const NavbarDrawerSection = ({ setting }: { setting?: NavbarSetting }) => {
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
            className={`${setting?.textColor} font-medium hover:cursor-pointer`}
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

const NavbarItems = ({ setting }: { setting?: NavbarSetting }) => {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-wrap items-center space-x-10 list-none text-watanasa-gray-3 lg:text-base xl:text-xl">
        {menus.map((val) => {
          return (
            <div
              key={val.code}
              className={`hover:cursor-pointer hover:${setting?.textColor} hover:border-solid hover:border-0 hover:border-b-2`}
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

const NavbarSection = observer(({ userStore }: { userStore: UserStore }) => {
  const { query, push } = useRouter();
  const { slug, username } = query;
  const [navbarSetting, setNavbarSetting] = useState<
    NavbarSetting | undefined
  >();

  useEffect(() => {
    if (userStore.item?.CVTemplateWebsite) {
      setNavbarSetting(handlerNavbarSetting(userStore.item.CVTemplateWebsite));
    }
    return () => {};
  }, [userStore.item?.CVTemplateWebsite]);
  return (
    <div
      className={`sticky top-0 z-50 bg-white shadow py-5 px-5 md:px-12 lg:py-12 lg:px-24 font-poppins`}
    >
      <div className="flex flex-row justify-between items-center">
        <div
          className={`
            font-medium text-2xl ${navbarSetting?.textColor} lg:text-4xl
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
        <NavbarDrawerSection setting={navbarSetting} />
        <NavbarItems setting={navbarSetting} />
      </div>
    </div>
  );
});

export default NavbarSection;
