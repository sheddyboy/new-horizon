import React, { useContext, useRef, useState } from "react";
import styles from "../styles/Email.module.scss";
import { useNavigate } from "react-router-dom";
import Wrapper from "../mqtt_wrapper";
import { CreateCtx } from "../context/CreateProvider";

const Email = () => {
  const { height } = useContext(CreateCtx);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(
      emailRef.current?.value.includes("@") &&
        emailRef.current?.value.includes(".")
        ? false
        : true
    );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/sent");
  };

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      style={{ height: height < 690 ? "100vh" : "", transition: "all 0.5s" }}
    >
      <div className={styles.top}>
        <div className={styles.inputWrapper}>
          <input
            ref={emailRef}
            required
            type="email"
            placeholder="Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {!error && (
            <p className={styles.info}>
              NIO will not store or use the email for any other purpose than
              sending the artwork.
            </p>
          )}
          {error && (
            <p className={styles.error}>Please type the right email address.</p>
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.cancel}
          onClick={() => {
            try {
              Wrapper.send("Cancel", "");
            } catch (err) {
              console.log(err);
            }
            navigate("/share");
          }}
        >
          Cancel
        </div>
        <button
          disabled={disabled}
          type="submit"
          className={styles.send}
          onClick={() => {
            try {
              Wrapper.send("Send", emailRef.current?.value);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Email;
