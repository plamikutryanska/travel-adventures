import { FC } from "react";
import { HomePageBanner } from "../home-page-banner/home-page-banner";
import styles from "../home-page-banner/home-page-banner.module.scss";

type PageLayout = {
  children: React.ReactNode;
};

export const PageLayout: FC<PageLayout> = ({ children }) => {
  return (
    <>
      <div style={{ height: "120px" }}>
        <HomePageBanner />
      </div>
      <div>{children}</div>
      <div style={{ height: "60px" }}>{"FOOTERS"}</div>
    </>
  );
};
