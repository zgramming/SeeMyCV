import { Drawer } from "antd";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavigationMenuInterface } from "../interface/navigation_menu";
import activeNavigationBar, {
  ActiveNavigationBarStore,
} from "../repository/active_navigationbar";
import { useRouter } from "next/router";

const menus: NavigationMenuInterface[] = [
  { code: "experience", name: "Experience" },
  { code: "education", name: "Education" },
  { code: "skill", name: "Skill" },
  { code: "l&c", name: "L&C" },
  { code: "portfolio", name: "Portfolio" },
];

const NavigationUser = () => {
  const { push } = useRouter();
  return (
    <div
      className={`sticky top-0 z-50 h-32  bg-watanasa-scaffold mx-auto shadow-lg px-5 md:px-12 lg:px-24 xl:px-80`}
    >
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between">
          <div
            className="font-bold font-poppins text-2xl tracking-widest hover:cursor-pointer"
            onClick={(e) => push("/")}
          >
            SeeMyCV
          </div>
          <div className="block lg:hidden ">
            <NavigationDrawerCustom menus={menus} />
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-wrap space-x-10 list-none font-poppins tracking-widest">
              {menus.map((val) => (
                <NavigationUserItem
                  key={val.code}
                  item={val}
                  store={activeNavigationBar}
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
  (props: {
    item: NavigationMenuInterface;
    store: ActiveNavigationBarStore;
  }) => {
    const item = props.item;
    const isActive = props.store.activeMenuCode === item.code;
    return (
      <>
        {isActive ? (
          <span className="font-bold underline" key={item.code}>
            {item.name}
          </span>
        ) : (
          <span key={item.code}>{item.name}</span>
        )}
      </>
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
