import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { MissingForm } from "./components/MissingForm";
import { ToastPop } from "./components/ToastPop";
import keikoImg from "./assets/keikoImg.jpg";
import "./App.css";

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <Container className="main-wrapper">
      <div className="content-box">
        <h1 className="text-center mb-4">Missing: Keiko</h1>
        <div className="mb-4 text-start sunken-dark poster-info">
          <p>
            Have you seen this dog? Please provide any information you have
            about Keiko's whereabouts.
          </p>
          <p>
            <strong>REWARD:</strong> $1,000
          </p>
          <p>
            <strong>LAST SEEN:</strong> Near the park on 5th and Elm
          </p>
          <p>
            <strong>CONTACT:</strong> 555-555-5555
          </p>
        </div>
        <Image
          src={keikoImg}
          alt="Keiko IMG"
          fluid
          rounded
          className="poster-img mb-4"
        />
        <MissingForm
          onToast={(msg: string) => {
            setToastMessage(msg);
            setShowToast(true);
          }}
        />
        <ToastPop
          show={showToast}
          onClose={() => setShowToast(false)}
          message={toastMessage}
          variant="success"
        />
      </div>
    </Container>
  );
};

export default App;
