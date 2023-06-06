import React from "react";
import Link from "next/link";
import { NextPage } from "next";

import Layout from "../components/Layout";
import useWindowSize from "../hooks/useWindowSize";

const Home: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-semibold text-headline mb-2 ml-2 mt-4">
          Howdy, my name is
        </h1>
        <h1 className="text-6xl font-bold text-headline">Sumit Nalavade.</h1>

        <div className="text-paragraph mt-8 max-w-3xl font-light">
          <p className="my-2">
            I'm an engineering student at Texas A&amp;M University '26!
          </p>

          <p className="my-2">
            My interests include software design and development, machine
            learning and artificial intelligence.
          </p>

          <p className="my-2">
            Currently, I'm focused on earning my bachelor's degree in Computer
            Engineering on the Computer Science track.
          </p>
        </div>

        <Link
          href="/about"
          className="border-tertiary border rounded-lg max-w-sm text-tertiary font-medium px-6 py-2 my-6 text-center"
        >
          Discover More
        </Link>
      </div>

      <div className={` flex justify-center items-center ${width < 1184 ? "order-first" : ""}`}>
        <img
          src={`https://avatars.githubusercontent.com/u/48499839?v=4`}
        />
      </div>
    </Layout>
  );
};

export default Home;
