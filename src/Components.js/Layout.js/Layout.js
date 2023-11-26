import React from "react";
import Header from "./Header";
import Section from "../Section";
import Footer from "./Footer";
import Page1 from "../Pages.js/Page1";
import Page2 from "../Pages.js/Page2";
import RAside from "./RAside";
import LAside from "./LAside";
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className="container   h-100 a_count">
          <div className="row h-100 ">
            <LAside />
            <Section>
              <Page1 /> <br />
              <Page2 />
            </Section>
            <RAside />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
