import { ReactNode } from "react";

import FooterSection from "../template/1_watanasa/components/footer_section";
import NavbarSection from "../template/1_watanasa/components/navbar_section";

const CustomLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarSection />
      {children}
      <FooterSection />
    </>
  );
};

export default CustomLayout;
