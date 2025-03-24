import React from "react";
import MissingForm from "./components/MissingForms/MissingForm";
import keiko from "./assets/keiko.jpg";

const App: React.FC = () => {
  return (
    <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Wanted: Keiko</h1>
      <img
        src={keiko}
        alt="Keiko IMG"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
      />
      <MissingForm />
    </div>
  );
};

export default App;
