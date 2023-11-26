import React from "react";

function FirstFunc(props) {
  return <li> {props.msg}</li>;
}

export default function LAside() {
  const leftdata = [
    "Home",
    " Login",
    "Register",
    "CDN link",
    "Next Steps",
    "JS Components",
    " Important Globals",
    "HTML5 Doctype",
    "Box-sizing",
    "Reboot",
    "Community",
    "ViewportMeta",
  ];
  return (
    <>
      <aside className="col-2 a_leftaside tbdr h-100 ">
        <ul>
          {leftdata.map((data1) => (
            <FirstFunc msg={data1} />
          ))}
        </ul>
      </aside>
    </>
  );
}
