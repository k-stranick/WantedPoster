import React, { useState } from "react";

const MissingForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
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
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
      </div>
      <button type="submit" style={{ padding: "10px 20px" }}>
        Send Info
      </button>

      {submitted && (
        <p style={{ color: "green", marginTop: "15px" }}>
          Your information was sent! Someone will get back to you shortly.
        </p>
      )}
    </form>
  );
};

export default MissingForm;
