import React from "react";
import personal from "./sections/personal";
import summary from "./sections/summary";

const Components = {
  personal,
  summary,
};

export default (comp, i) => {
  if (typeof Components[comp] !== "undefined") {
    const Section = Components[comp];
    return <Section key={i} item={i} />;
  }
};
