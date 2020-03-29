import React, { useContext } from "react";
import { Accordion, AccordionItem } from "react-sanfona";

import LoadingSections from "./LoadingSections";
import AppContext from "../../store";

import "./Sidebar.css";

const Sidebar = () => {
  const context = useContext(AppContext);
  const {
    state: { cv },
  } = context;

  const templateOptions = Object.keys(cv);

  return (
    <div>
      <Accordion className="accordion">
        {templateOptions.map((comp, i) => LoadingSections(comp, i))}
      </Accordion>
      <Accordion>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <AccordionItem title={`Item ${item}`}>
              <div>{`Item ${item} content`}</div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
export default Sidebar;
