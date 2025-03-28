import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { MissingForm } from "./components/MissingForm";
import { ToastPop } from "./components/ToastPop";
import keikoImg from "./assets/keikoImg.jpg";
import "./App.css";

/**
 * Main application component for the missing dog poster app.
 *
 * @description
 * The `App` component serves as the main layout and logic container for the Missing Dog Poster application.
 * It displays the poster with information about a missing dog named Keiko, including the dog's image,
 * last known location, and contact information. It also integrates a form (`MissingForm`) for submitting tips
 * and a toast notification component (`ToastPop`) to show confirmation messages when users interact with the form.
 *
 * State Management:
 * - `showToast`: A boolean that determines if the toast notification should be displayed.
 * - `toastMessage`: The message to display inside the toast.
 *
 * @example
 * // Renders the main App layout inside your root component:
 * <App />
 *
 * @see {@link MissingForm} For the user input form where tips can be submitted.
 * @see {@link ToastPop} For the notification popup used to confirm actions.
 */

const App: React.FC = () => {
  // state syntax: const [state, setState] = useState(initialState);
  // useState is a React hook that allows you to add state to functional components.
  const [showToast, setShowToast] = useState(false); // State to control the visibility of the toast notification
  const [toastMessage, setToastMessage] = useState(""); // State to hold the message for the toast notification

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
            <strong>REWARD:</strong> $300
          </p>
          <p>
            <strong>LAST SEEN:</strong> Near Millsboro, DE in Plantation Lakes
          </p>
          <p>
            <strong>CONTACT:</strong> 302-228-8022
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
