import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "./Hero";
import About from "./About";
import Menu from "./SpecialMenu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RestoFood</title>
        <meta
          name="description"
          content="The best prices in food, Order Now!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Menu />
    </div>
  );
};

export default Home;
