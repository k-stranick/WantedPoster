import React, { useState } from "react";
import styles from "./MissingForm.module.css";
import { Form } from "react-bootstrap";
import { MissingFormProps } from "../../lib/types";
import { FORM_INSTRUCTIONS, FORM_LABELS } from "../../lib/constants";

/**
 * `MissingForm` is a reusable form component for submitting tips or contact information
 * related to the missing dog poster.
 * @component
 * @param {MissingFormProps} props - Component props.
 * @see {@link MissingFormProps} Defined in core/types.ts
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
  // state syntax: const [state, setState] = useState(initialState);
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { submit, missing } = FORM_INSTRUCTIONS; // Destructuring the FormInstructions object for easier access to its properties
  const { nameLabel, emailLabel, commentsLabel, phoneNumberLabel } =
    FORM_LABELS;
  const { sunkenDark, formWrapper, submitButton } = styles;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onToast("Your information has been submitted!");
    setEmail("");
    setComments("");
  };

  // <> is a shorthand for React.Fragment which is used to group elements without adding extra nodes to the DOM.
  return (
    <Form onSubmit={handleSubmit} className={`${formWrapper} ${sunkenDark}`}>
      <h2 className="text-center mb-4">{submit}</h2>
      <p className="text-center mb-4">{missing}</p>

      <Form.Group controlId="formName" className="mb-3 row">
        <Form.Label className="col-sm-3 col-form-label">{nameLabel}</Form.Label>
        <div className="col-sm-9">
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={name}
            required
            aria-label="Name of the person submitting the tip"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="formEmail" className="mb-3 row">
        <Form.Label className="col-sm-3 col-form-label">
          {emailLabel}
        </Form.Label>
        <div className="col-sm-9">
          <Form.Control
            type="email"
            placeholder="email@domain.com"
            value={email}
            required
            aria-label="Email address to be contacted"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="formPhone" className="mb-3 row">
        <Form.Label className="col-sm-3 col-form-label">
          {phoneNumberLabel}
        </Form.Label>
        <div className="col-sm-9">
          <Form.Control
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            title="Format: 123-456-7890"
            value={phoneNumber}
            required
            aria-label="Phone number to be contacted"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="formComments" className="mb-3 row">
        <Form.Label className="col-sm-3 col-form-label">
          {commentsLabel}
        </Form.Label>
        <div className="col-sm-9">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please provide any information you have about Keiko's whereabouts."
            value={comments}
            required
            aria-label="Comment about where the dog was last seen"
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group className="row mt-4">
        <div className="col-sm-9 offset-sm-3 d-flex justify-content-end">
          <button
            type="submit"
            className={submitButton}
            aria-label="Submit tip about missing dog"
          >
            Submit
          </button>
        </div>
      </Form.Group>
    </Form>
  );
};
