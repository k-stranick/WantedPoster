import React, { useState } from "react";
import styles from "./MissingForm.module.css";
import { Form } from "react-bootstrap";

/**
 * Props for the `MissingForm` component.
 *
 * @property {(message: string) => void} onToast - A callback function triggered on form submission,
 * used to display a toast message with the given text.
 */
interface MissingFormProps {
  onToast: (message: string) => void;
}

/**
 * `MissingForm` is a reusable form component for submitting tips or contact information
 * related to the missing dog poster.
 *
 * @description
 * The form includes two input fields: one for an email address and one for additional comments.
 * When submitted, it triggers the `onToast` callback with a success message and resets both fields.
 *
 * State Management:
 * - `email`: The user's email input.
 * - `comments`: The user's comment or tip input.
 *
 * Styling:
 * - Custom CSS module styles are applied via `MissingForm.module.css`.
 * - Uses Bootstrap's `Form` and form control components for consistent UI.
 *
 * @example
 * <MissingForm onToast={(msg) => showToast(msg)} />
 *
 * @see {@link https://react-bootstrap.github.io/forms/overview/} React-Bootstrap Form Docs
 * @see {@link React.FC} for typing functional components in TypeScript
 */

export const MissingForm: React.FC<MissingFormProps> = ({ onToast }) => {
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onToast("Your information has been submitted!");
    setEmail("");
    setComments("");
  };

  // <> is a shorthand for React.Fragment which is used to group elements without adding extra nodes to the DOM.
  return (
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
  );
};
