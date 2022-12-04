import React, { useRef, useState } from "react";
import styles from "../styles/Email.module.scss";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setEmail(e.target.value);
    setDisabled(emailRef.current?.value === "" ? true : false);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
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
        </div>
      </div>
      <div className={styles.bottom}>
        <button
          className={styles.cancel}
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </button>
        <button disabled={disabled} type="submit" className={styles.send}>
          Send
        </button>
      </div>
    </form>
  );
};

export default Email;
