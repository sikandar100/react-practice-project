import React from "react";

const Hello = () => {
    //returning JSX in react
  //   return (
  //     <div className='dummyClass'>
  //       <h1>Hello Sikandar</h1>
  //     </div>
  //   );

    //working without JSX using createElement
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Sikandar without JSX")
  );
};

export default Hello;
