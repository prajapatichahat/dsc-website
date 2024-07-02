import React, { useEffect } from "react";
import Banner from "./Banner";
import Features from "./Features";
import Contact from "./Contact";

export default function Index() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Banner />
      {/* <Features />
      <Contact /> */}
    </>
  );
}
