import { Inter } from "next/font/google";
import type { NextPage } from "next";
import { LandingPage } from "@/components/landing-page/landing-page";
import styles from "../components/landing-page/landing-page.module.scss";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black !important",
      }}>
      <LandingPage />
    </div>
  );
};

export default Home;
