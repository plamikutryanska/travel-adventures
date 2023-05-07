import { FC } from "react";
import { HomePageBanner } from "../home-page-banner/home-page-banner";
import { HomePageFooter } from "../home-page-footer/home-page-footer";

type PageLayout = {
  children: React.ReactNode;
};

export const PageLayout: FC<PageLayout> = ({ children }) => {
  return (
    <>
      <div style={{ height: "120px" }}>
        <HomePageBanner />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </div>
      <div style={{ height: "60px" }}>
        <HomePageFooter />
      </div>
    </>
  );
};
