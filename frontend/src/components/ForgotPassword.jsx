import React, { useState } from "react";
import { sendResetPin } from "../services/authService";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendResetPin({ email });
      setMessage("Reset PIN sent to your email");
    } catch (error) {
      setMessage("Error sending reset PIN");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Forgot Password</h2>

        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send Reset PIN</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;