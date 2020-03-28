import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import ReactMarkdown from "react-markdown";

import AppContext from "../../store";

const Default = () => {
  const context = useContext(AppContext);
  const { cv } = context;

  return (
    <div>
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-3 flex items-center">{cv.data.title}</div>
      </div>
    </div>
  );
};

export default Default;
