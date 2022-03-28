import React from "react";

const Title = (props) => {
  return (
    <h1 className="text-3xl underline underline-offset-8 mb-10">
      {props.title}
    </h1>
  );
};

export default Title;
