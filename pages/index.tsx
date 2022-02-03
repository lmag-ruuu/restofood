import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "./Hero";
import About from "./About";
import Menu from "./SpecialMenu";
import Chef from "./Chef";
import Intro from "./Intro";
import Awards from "./Awards";
import Gallery from "./Gallery";

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
      <Chef />
      {/* <Intro /> */}
      <Awards />
      <Gallery />
    </div>
  );
};

export default Home;
