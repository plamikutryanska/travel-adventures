import { FC } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import styles from "./landing-page.module.scss";
import { HomePageBanner } from "../home-page-banner/home-page-banner";

export const LandingPage: FC = () => {
  return (
    <div>
      <div className={styles.landingPageShape}>
        <Image
          src={logo}
          alt={"the footsteps of a curious mind logo"}
          width={"300"}
          height={"300"}
        />
      </div>
    </div>
  );
};
