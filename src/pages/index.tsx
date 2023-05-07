import { Inter } from "next/font/google";
import type { NextPage } from "next";
import { LandingPage } from "@/components/landing-page/landing-page";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default Home;
