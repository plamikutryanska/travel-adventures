import { FC } from "react";
import styles from "./home-page-footer.module.scss";
import Image from "next/image";
import linkedInLogo from "../../images/linkedin.svg";
import instagramLogo from "../../images/instagram.svg";
import copyRightImg from "../../images/copyright.png";

const openSocialMediaLink = (socialMediaLink: string) => {
  return window.open(socialMediaLink, "_blank");
};

export const HomePageFooter: FC = () => {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.leftSideFooter}>
          <Image
            src={copyRightImg}
            alt={"copyright image"}
            width={10}
            height={10}
          />
          <div className={styles.name}>{"PK"}</div>
        </div>
        <div className={styles.rightSideFooter}>
          <Image
            src={linkedInLogo}
            alt={"LinkedIn logo"}
            width={14}
            height={14}
            onClick={() =>
              openSocialMediaLink("https://www.linkedin.com/in/pkutryanska/")
            }
          />
          <Image
            src={instagramLogo}
            alt={"instagram logo"}
            width={20}
            height={20}
            onClick={() =>
              openSocialMediaLink("https://www.instagram.com/plamenak_")
            }
          />
        </div>
      </div>
    </>
  );
};
