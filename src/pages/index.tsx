import { Inter } from "next/font/google";
import type { NextPage } from "next";
import { LandingPage } from "@/components/landing-page/landing-page";
import styles from "../styles/shared-styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className={styles.commonContainer}>
      <LandingPage />
    </div>
  );
};

export default Home;
