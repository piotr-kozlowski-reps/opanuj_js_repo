import React from "react";

const AppContext = React.createContext({
  isShowPokedex: false,
  toggleIsShowPokedex: () => {},
});

export default AppContext;
