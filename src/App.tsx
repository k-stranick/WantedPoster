import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { MissingForm } from "./components/MissingForm";
import { ToastPop } from "./components/ToastPop";
import { MissingDetails } from "./components/MissingDetails";
import keikoImg from "./assets/keikoImg.jpg";
import { POSTER_INFO } from "./lib/constants";
import "./css/App.css";

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

export const App: React.FC = () => {
  // state syntax: const [state, setState] = useState(initialState);
  // useState is a React hook that allows you to add state to functional components.
  const [showToast, setShowToast] = useState(false); // State to control the visibility of the toast notification
  const [toastMessage, setToastMessage] = useState(""); // State to hold the message for the toast notification
  const { name, description, reward, lastSeen, contact } = POSTER_INFO; // Destructuring the POSTER_INFO object for easier access to its properties
  const handleToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
  }; // Function to set the toast message and show the toast notification

  return (
    <>
      <Container className="main-wrapper">
        <div className="content-box">
          <MissingDetails
            name={name}
            description={description}
            reward={reward}
            lastSeen={lastSeen}
            contact={contact}
            image={keikoImg}
          />
          <MissingForm onToast={handleToast} />
        </div>
      </Container>
      <ToastPop
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        variant="success"
      />
    </>
  );
};
