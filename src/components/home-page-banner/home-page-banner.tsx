import { FC, useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./home-page-banner.module.scss";
import mountainPic from "../../images/mountains.png";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu";

export type AvailableLinks = "home" | "gallery";

export const GetLinksToDisplay = (
  href: AvailableLinks,
  setSelectedLink: Dispatch<SetStateAction<AvailableLinks>>,
  selectedLink: AvailableLinks,
  setHamburgerOpen?: Dispatch<SetStateAction<boolean>>
) => {
  const router = useRouter();
  return (
    <Link
      href={"/"} //change that
      onClick={() => (
        setSelectedLink(href), setHamburgerOpen && setHamburgerOpen(false)
      )}
      className={classNames(styles.link, {
        [styles.selected]:
          selectedLink === href || router.pathname.includes(href),
      })}>
      {href}
    </Link>
  );
};

export const HomePageBanner: FC = () => {
  const [selectedLink, setSelectedLink] = useState<AvailableLinks>("home");

  const listOfPageLinks: AvailableLinks[] = [
    "home",
    // "about",
    "gallery",
    // "contact",
  ];

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
      <HamburgerMenu listOfPageLinks={listOfPageLinks} />
      <div className={styles.pageLinks}>
        {listOfPageLinks.map((link) =>
          GetLinksToDisplay(link, setSelectedLink, selectedLink)
        )}
      </div>
    </div>
  );
};
