import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { InputContainer, Container, Form } from "./styles";
const Singup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const createUser = () => {
    fetch("http://localhost:3500/users/singup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmationPassword,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        } else {
          history.push("/singin");
        }
      })
      .catch((message) => {
        setError(message.message);
      });
  };

  return (
    <Container>
      <Form action="">
        <div>
          <h2>
            <span>Shoping_List</span>
          </h2>
          <InputContainer>
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="">ConfirmPassword</label>
            <input
              type="password"
              value={confirmationPassword}
              onChange={(e) => {
                setConfirmationPassword(e.target.value);
              }}
            />
            <p className="error">{error}</p>
          </InputContainer>
        </div>
        <div>
          <button onClick={createUser}>Sing-Up</button>
          <p className="text">
            Already have and account{" "}
            <span>
              <Link className="link" to="/singin">
                Sing-In
              </Link>
            </span>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Singup;
