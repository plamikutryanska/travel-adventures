import { FC } from "react";
import styles from "./hamburger-menu-icon.module.scss";
import classNames from "classnames";

export const HamburgerMenuIcon: FC<{ hamburgerOpen: boolean }> = ({
  hamburgerOpen,
}) => {
  return (
    <div>
      <div
        className={classNames(styles.hamburgerMenu, {
          [styles.active]: hamburgerOpen,
        })}>
        <span className={styles.hamburgerSlice}></span>
        <span className={styles.hamburgerSlice}></span>
        <span className={styles.hamburgerSlice}></span>
      </div>
    </div>
  );
};
