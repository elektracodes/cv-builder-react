import React, { useContext } from "react";

import Sidebar from "../sidebar/Sidebar";
import AppContext from "../../store/index";
import Default from "../../cv-templates/default/index";

const App = () => {
  const context = useContext(AppContext);

  const { template } = context;

  const renderTemplate = () => {
    switch (template.name) {
      case "Default":
        return <Default />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Sidebar />
      <div>
        <div>{renderTemplate()}</div>
      </div>
    </div>
  );
};

export default App;
