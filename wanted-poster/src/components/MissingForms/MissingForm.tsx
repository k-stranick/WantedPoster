import React, { useState } from "react";
import styles from "./MissingForm.module.css";

const MissingForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <br />
        <textarea
          id="comments"
          value={comments}
          required
          onChange={(e) => setComments(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Send Info
      </button>

      {submitted && (
        <p className={styles.successMessage}>
          Your information was sent! Someone will get back to you shortly.
        </p>
      )}
    </form>
  );
};

export default MissingForm;
