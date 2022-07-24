import { useState } from "react";
import { call } from "../api/callApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const onSubmit = async () => {
    const response = await call(`/login/${username}/${password}`);
    if (!response) {
      console.error("server error");
    }
    if (response.response.status === "success") {
      setIncorrectPassword(false);
      navigate("/home");
    } else {
      setIncorrectPassword(true);
    }
  };

  return (
    <div>
      {incorrectPassword && <div>username or password was incorrect</div>}
      <input
        type={"text"}
        placeholder={"username"}
        autoComplete={"false"}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type={"text"}
        autoComplete={"false"}
        placeholder={"password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type={"submit"}
        disabled={!(username && password)}
        onClick={onSubmit}
      />
    </div>
  );
}
