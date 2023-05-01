import { FC, useState } from "react";
import { HamburgerMenuIcon } from "./hamburger-menu-icon";
import Link from "next/link";
import styles from "./hamburger-menu.module.scss";
import { AvailableLinks } from "../home-page-banner/home-page-banner";

export const HamburgerMenu: FC<{ listOfPageLinks: AvailableLinks[] }> = ({
  listOfPageLinks,
}) => {
  const [isHamburgerMenuOpen, setIsHamburgerOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={styles.hamburger}
        onClick={() => setIsHamburgerOpen(!isHamburgerMenuOpen)}>
        <HamburgerMenuIcon hamburgerOpen={isHamburgerMenuOpen} />
      </div>
      {isHamburgerMenuOpen && (
        <div className={styles.hamburgerSideBar}>
          {listOfPageLinks.map((link) => {
            return (
              <Link
                href={"/"}
                className={styles.hamburgerLink}
                key={link}
                onClick={() => setIsHamburgerOpen(false)}>
                {link}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
