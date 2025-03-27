import React, { useState } from "react";
import styles from "./MissingForm.module.css";
import { SuccessModal } from "../SuccessModal";
import { Form } from "react-bootstrap";
import { ToastPop } from "../ToastPop";

interface MissingFormProps {
  onToast: (message: string) => void;
}

export const MissingForm: React.FC<MissingFormProps> = ({ onToast }) => {
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [showToast, setShowToast] = useState<boolean>(false);
  // const [toastMessage, setToastMessage] = useState<string>("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // setShowModal(true);
  //   setToastMessage("Your information has been submitted!");
  //   setShowToast(true);
  //   setEmail("");
  //   setComments("");
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onToast("Your information has been submitted!");
    setEmail("");
    setComments("");
  };

  // <> is a shorthand for React.Fragment which is used to group elements without adding extra nodes to the DOM.
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className={`${styles.formWrapper} ${styles.sunkenDark}`}
      >
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formComments" className="mb-3">
          <Form.Label>Comments:</Form.Label>
          <Form.Control
            as="textarea"
            value={comments}
            required
            onChange={(e) => setComments(e.target.value)}
          />
        </Form.Group>

        <button type="submit" className={styles.submitButton}>
          Send Info
        </button>
      </Form>

      {/* <SuccessModal show={showModal} onClose={() => setShowModal(false)} /> */}
    </>
  );
};

// export default MissingForm;
