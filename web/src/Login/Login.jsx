import { useState } from "react";
import { call } from "../api/callApi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    console.log(await call(`/login/${username}/${password}`));
  };

  return (
    <div>
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
      <input type={"submit"} onClick={onSubmit} />
    </div>
  );
}
