import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./home-page-banner.module.scss";
import mountainPic from "../../images/mountains.png";

export const HomePageBanner: FC = () => {
  return (
    <div className={styles.homePageBanner}>
      <Link href={"/"} className={styles.logoAndTitleWrapper}>
        <Image
          src={mountainPic}
          alt={"mountain image"}
          height={40}
          width={40}
          style={{ cursor: "pointer" }}
        />
        <div className={styles.title}>{"The footsteps of a curious mind"}</div>
      </Link>
    </div>
  );
};
