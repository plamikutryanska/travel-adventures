import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./home-page-banner.module.scss";
import mountainPic from "../../images/mountains.png";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu";
import { useSelector, useDispatch } from "react-redux";
import selectedTabSlice from "../../data/selectedTabSlice";

export type AvailableLinks = "home" | "gallery";

export const GetLinksToDisplay = (
  href: AvailableLinks,
  selectedTab: AvailableLinks,
  setHamburgerOpen?: Dispatch<SetStateAction<boolean>>
) => {
  const router = useRouter();
  const hrefToUse = href === "home" ? "/" : href;

  const { goToSelectedTab } = selectedTabSlice.actions;
  const dispatch = useDispatch();

  return (
    <Link
      href={hrefToUse}
      key={href}
      onClick={() => (
        dispatch(goToSelectedTab(href)),
        setHamburgerOpen && setHamburgerOpen(false)
      )}
      className={classNames(styles.link, {
        [styles.selected]: href === selectedTab,
        // router.pathname.includes(href) || hrefToUse.includes(selectedTab),
      })}>
      {href}
    </Link>
  );
};

export const HomePageBanner: FC = () => {
  const { selectedTab } = useSelector((state: any) => state.selectedTab);
  const { goToSelectedTab } = selectedTabSlice.actions;
  const dispatch = useDispatch();

  const listOfPageLinks: AvailableLinks[] = ["home", "gallery"];

  return (
    <div className={styles.homePageBanner}>
      <Link href={"/"} className={styles.logoAndTitleWrapper}>
        <Image
          src={mountainPic}
          alt={"mountain image - part of logo"}
          height={40}
          width={40}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(goToSelectedTab("home"))}
        />
        <div className={styles.title}>{"The footsteps of a curious mind"}</div>
      </Link>
      <HamburgerMenu listOfPageLinks={listOfPageLinks} />
      <div className={styles.pageLinks}>
        {listOfPageLinks.map((link) => GetLinksToDisplay(link, selectedTab))}
      </div>
    </div>
  );
};
