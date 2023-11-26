import React from "react";

export default function Section(props) {
  return (
    <>
      <section className="col-8 tbdr h-100 ">
        <> {props.children}</>
      </section>
    </>
  );
}
