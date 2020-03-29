import React, { useContext } from "react";

import Sidebar from "../sidebar/Sidebar";
import AppContext from "../../store/index";
import Default from "../../cv-templates/default/index";

const App = () => {
  const context = useContext(AppContext);
  const {
    state: { template, sidebarOptions },
  } = context;

  const renderTemplate = () => {
    switch (template.name) {
      case "Default":
        return <Default />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen grid grid-cols-4 overflow-hidden">
      <Sidebar />
      <div className="h-screen col-span-3 flex justify-center items-center overflow-scroll">
        <div>{renderTemplate()}</div>
      </div>
    </div>
  );
};

export default App;
