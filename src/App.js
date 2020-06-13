import React from "react";

import "./App.css";
import Form from "./components/Form";
import EssayForm from "./components/EssayForm";
import FlavorForm from "./components/FlavorForm";
import Reservation from "./components/Reservation ";

function App() {
  return (
    <div className="App">
      <Form />
      <EssayForm />
      <FlavorForm />
      <Reservation />
    </div>
  );
}

export default App;
