import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/Layout";
import useWindowSize from "../hooks/useWindowSize";

const About: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <Layout>
      <div className="flex flex-col justify-center font-light">
        <h1 className="text-5xl font-bold text-stroke my-4">About Me</h1>

        <div className="text-paragraph mt-4 max-w-3xl">
          <p className="my-3">
            Howdy! My name is Sumit, I'm an engineering student at Texas A&M
            University with a passion for building things!
          </p>

          <p className="my-3">
            My interest in software development began when I was in high school
            and was exposed to web development with HTML, CSS, and JavaScript.
          </p>

          <p className="my-3">
            Fast forward to today, I've worked on various projects across the
            stack with technologies including React, React Native, Next.js,
            Node.js, GraphQL, MongoDB, PostgreSQL, and more!
          </p>

          <p className="my-3">
            In addition, I've had the privilege of serving as a project manager
            and lead developer for the Aggie Coding Club at Texas A&M!
          </p>

          <p className="my-3">
            Feel free to take a look at some of my work here and on my GitHub,
            and don't be afraid to reach out to me via email or Instagram.
          </p>
        </div>

        <Link
          href="/projects"
          className="border-tertiary border rounded-lg max-w-sm text-tertiary font-medium px-6 py-2 my-6 text-center"
        >
          Check Out My Work!
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

export default About;
