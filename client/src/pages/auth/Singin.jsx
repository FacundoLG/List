import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/UserContex";
import { InputContainer, Container, Form } from "./styles";

const Singin = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const HandleSingIn = () => {
    fetch("http://localhost:3500/users/singin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message) {
          setUser(data.message);
          history.push("/home");
        }
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
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="error"></p>
          </InputContainer>
        </div>
        <div>
          <button onClick={HandleSingIn}>Sing-In</button>
          <p className="text">
            You don't have an acount{" "}
            <span>
              <Link className="link" to="singup">
                Sing-Up
              </Link>
            </span>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Singin;
