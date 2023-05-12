import { FC } from "react";
import stylesv2 from "../../styles/shared-styles.module.scss";
import Postcard from "../post-card/post-card";
import ExploreByDestination from "../explore-by-destination/explore-by-destination";
import GetToKnowMe from "../get-to-know-me/get-to-know-me";
import LandingPageTopPart from "./landing-page-top-part";

export const LandingPage: FC = () => {
  return (
    <div className={stylesv2.commonContainer}>
      <LandingPageTopPart />
      <GetToKnowMe />
      <Postcard />
      <ExploreByDestination />
    </div>
  );
};
