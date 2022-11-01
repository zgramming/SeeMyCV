import "antd/dist/antd.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBarCustom />
      <div className="py-24">
        <Component {...pageProps} />
      </div>
      <FooterCustom />
    </>
  );
}

const NavigationBarCustom = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-32 bg-watanasa-scaffold mx-auto shadow-lg px-80">
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between">
          <div className="font-bold font-poppins text-2xl tracking-widest">
            Zeffry Reynando
          </div>
          <ul className="flex flex-wrap space-x-10 font-poppins tracking-widest">
            <li>Experience</li>
            <li>Education</li>
            <li>Skill</li>
            <li>L&C</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const FooterCustom = () => {
  return <></>;
};
