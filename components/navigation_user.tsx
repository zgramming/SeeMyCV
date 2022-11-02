import { Drawer } from "antd";
import { useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavigationMenu {
  code: string;
  name: string;
}
const menus: NavigationMenu[] = [
  { code: "experience", name: "Experience" },
  { code: "education", name: "Education" },
  { code: "skill", name: "Skill" },
  { code: "l&c", name: "L&C" },
  { code: "portfolio", name: "Portfolio" },
];

const NavigationUser = () => {
  return (
    <div
      className={`sticky top-0 z-50 h-32  bg-watanasa-scaffold mx-auto shadow-lg px-5 md:px-12 lg:px-24 xl:px-80`}
    >
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between">
          <div className="font-bold font-poppins text-2xl tracking-widest">
            SeeMyCV
          </div>
          <div className="block lg:hidden ">
            <NavigationDrawerCustom menus={menus} />
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-wrap space-x-10 list-none font-poppins tracking-widest">
              {menus.map((val) => (
                <span key={val.code}>{val.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationDrawerCustom = (props: { menus: NavigationMenu[] }) => {
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
