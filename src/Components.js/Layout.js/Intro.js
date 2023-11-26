import React from "react";

function Intro() {
  return (
    <>
      <strong>
        <u>Introduction :-</u>
      </strong>

      <p>
        React was created by Jordan Walke, a software engineer at Meta, who
        released an early prototype of React called "FaxJS". He was influenced
        by XHP, an HTML component library for PHP. It was first deployed on
        Facebook's News Feed in 2011 and later on Instagram in 2012. It was
        open-sourced at JSConf US in May 2013.
      </p>
      <p>
        React code is made of entities called components. These components are
        modular and reusable. React applications typically consist of many
        layers of components. The components are rendered to a root element in
        the DOM using the React DOM library. When rendering a component, values
        are passed between components through props (short for "properties").
        Values internal to a component are called its state.
      </p>
    </>
  );
}
export default Intro;
