import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz2-BnBVaM5juERP614OG5zqMqehvJElazNIWKL0SnCGDAwsM4lVEy5rbKPMyW4gAVS/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await response.text();

      if (text.trim() === "OK") {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error(text);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong.");
    }
  };

  return (
    <form className="php-email-form" onSubmit={handleSubmit}>
      <div
        className="loading"
        style={{ display: status === "loading" ? "block" : "none" }}
      >
        Loading
      </div>
      <div
        className="error-message"
        style={{ display: status === "error" ? "block" : "none" }}
      >
        {errorMessage}
      </div>
      <div
        className="sent-message"
        style={{ display: status === "success" ? "block" : "none" }}
      >
        You’ve successfully subscribed!
      </div>

      <div className="newsletter-form">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Subscribe" />
      </div>
    </form>
  );
};

export default NewsletterForm;
