import { ReactNode } from "react";

import userStore from "../../repository/user_store";
import FooterSection from "../template/1_watanasa/components/footer_section";
import NavbarSection from "../template/1_watanasa/components/navbar_section";

const CustomLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarSection userStore={userStore} />
      {children}
      <FooterSection userStore={userStore} />
    </>
  );
};

export default CustomLayout;
