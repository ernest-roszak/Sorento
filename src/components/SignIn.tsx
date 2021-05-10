import React, { useState } from "react";
import { auth } from "../firebase";

function login(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password);
}

function SingIn() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  // const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(password, email);
    try {
      const result = await login(email, password);
      console.log(result);
    } catch {
      console.log("błąd");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        name="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SingIn;
