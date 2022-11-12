import { ReactNode } from "react";

import { Users } from "../../interface/main_interface";
import FooterSection from "../template/1_watanasa/components/footer_section";
import NavbarSection from "../template/1_watanasa/components/navbar_section";

const CustomLayout = ({
  children,
  user,
}: {
  children: ReactNode;
  user?: Users;
}) => {
  return (
    <>
      <NavbarSection />
      {children}
      <FooterSection />
    </>
  );
};

export default CustomLayout;
