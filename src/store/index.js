import React, { createContext, useReducer } from "react";

const initialState = {
  cv: {
    personal: {
      title: "Personal Personal",
      firstName: "Elektra",
      lastName: "Bilali Simou",
      jobTitle: "Front End Developer",
      photo: "",
      address: "",
      social: [
        { key: "phone", value: "1111111", icon: "" },
        { key: "website", value: "https://elektracodes.com", icon: "" },
        { key: "email", value: "ebilali.simou@gmail.com", icon: "" },
        { key: "linkdin", value: "https://lindedin.com", icon: "" },
        { key: "twitter", value: "https://lindedin.com", icon: "" },
      ],
    },
    summary: {
      title: "Summary",
      text: "",
    },
    jobs: {
      title: "Experience",
      items: [],
    },
    projects: {
      title: "Projects",
      items: [],
    },
    education: {
      title: "Educations",
      items: [],
    },
    certifications: {
      title: "Certificates",
      items: [],
    },
    languages: {
      title: "Languages",
      items: [],
    },
  },
  template: {
    name: "Default",
    font: {
      family: "",
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
    },
    colors: {
      primary: "",
      secondary: "",
    },
  },
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "load_dummy_data":
      return {
        ...state,
      };
    case "reset":
      return initialState;
    default:
      throw state;
  }
};

const AppContext = createContext(initialState);
const { Provider } = AppContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const AppProvider = StateProvider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;
