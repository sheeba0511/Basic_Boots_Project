import React from "react";

function SecFunc(props) {
  return <li>{props.msg}</li>;
}
function RAside() {
  const rightdata = [
    "Introduction",
    " Components",
    "Forms",
    "Content",
    "Layout",
    "Customize",
    "Helper",
    "Utilities",
    "Extend",
  ];

  return (
    <>
      <aside className={"col-2 a_rightaside tbdr h-100 "}>
        {/* <ul>
          {leftdata.map((data1) => (
            <FirstFunc msg={data1} />
          ))}
        </ul> */}
        <ul>
          {rightdata.map((data1) => (
            <SecFunc msg={data1} />
          ))}
        </ul>
      </aside>
    </>
  );
}
export default RAside;
