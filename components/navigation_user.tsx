import { Drawer } from "antd";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavigationMenuInterface } from "../interface/navigation_menu";
import activeNavigationBar, {
  ActiveNavigationBarStore,
} from "../repository/active_navigationbar";
import navigationScrollToComponent, {
  NavigationScrollToComponent,
} from "../repository/navigation_scrollto_component";

const menus: NavigationMenuInterface[] = [
  { code: "experience", name: "Experience" },
  { code: "education", name: "Education" },
  { code: "skill", name: "Skill" },
  { code: "l&c", name: "L&C" },
  { code: "portfolio", name: "Portfolio" },
];

const LogoWebsite = observer(
  ({
    storeNavigationScrollTo,
  }: {
    storeNavigationScrollTo: NavigationScrollToComponent;
  }) => {
    const { push } = useRouter();

    return (
      <div
        className="font-bold font-poppins text-2xl tracking-widest hover:cursor-pointer"
        onClick={(e) => storeNavigationScrollTo.scrollTo("profile")}
      >
        SeeMyCV
      </div>
    );
  }
);

const NavigationUser = () => {
  return (
    <div
      className={`sticky top-0 z-50 h-32  bg-watanasa-scaffold mx-auto shadow-lg px-5 md:px-12 lg:px-24 xl:px-80`}
    >
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between">
          <LogoWebsite storeNavigationScrollTo={navigationScrollToComponent} />
          <div className="block lg:hidden ">
            <NavigationDrawerCustom menus={menus} />
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-wrap space-x-10 list-none font-poppins tracking-widest">
              {menus.map((val) => (
                <NavigationUserItem
                  key={val.code}
                  item={val}
                  storeActiveNavigation={activeNavigationBar}
                  storeNavigationScrollTo={navigationScrollToComponent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationUserItem = observer(
  ({
    item,
    storeActiveNavigation,
    storeNavigationScrollTo,
  }: {
    item: NavigationMenuInterface;
    storeActiveNavigation: ActiveNavigationBarStore;
    storeNavigationScrollTo: NavigationScrollToComponent;
  }) => {
    const isActive = storeActiveNavigation.activeMenuCode === item.code;
    return (
      <div
        onClick={(e) => storeNavigationScrollTo.scrollTo(item.code)}
        className="hover:cursor-pointer"
      >
        {isActive ? (
          <span className="font-bold underline" key={item.code}>
            {item.name}
          </span>
        ) : (
          <span key={item.code}>{item.name}</span>
        )}
      </div>
    );
  }
);

const NavigationDrawerCustom = (props: {
  menus: NavigationMenuInterface[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="text-xl hover:cursor-pointer"
        onClick={(e) => setOpen(true)}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={(e) => setOpen(false)}
        open={open}
      >
        {props.menus.map((val) => {
          return <p key={val.code}>{val.name}</p>;
        })}
      </Drawer>
    </>
  );
};
export default NavigationUser;
