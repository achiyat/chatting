import React from "react";
import { Provider } from "react-redux";
import { Welcome } from "./Components";
import store from "./Redux/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
};

export default App;
