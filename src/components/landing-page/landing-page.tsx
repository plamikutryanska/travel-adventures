import { FC, useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import styles from "./landing-page.module.scss";

export const LandingPage: FC = () => {
  const [widthAndHeight, setWidthAndHeight] = useState<number>(300);

  useEffect(() => {
    if (window) {
      const widthToUse = window.innerWidth <= 600 ? 200 : 300;
      return setWidthAndHeight(widthToUse);
    } else setWidthAndHeight(300);
  }, []);

  return (
    <div>
      <div className={styles.landingPageShape}>
        <Image
          src={logo}
          alt={"the footsteps of a curious mind logo"}
          width={widthAndHeight}
          height={widthAndHeight}
          style={{ marginTop: "46px" }}
        />
      </div>
    </div>
  );
};
