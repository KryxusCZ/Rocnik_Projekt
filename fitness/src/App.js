import React, { useState } from "react";
import { signInWithGoogle, logout } from "./Auth";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Fitness App</h1>
      {user ? (
        <>
          <p>Přihlášený uživatel: {user.displayName}</p>
          <button onClick={logout}>Odhlásit</button>
        </>
      ) : (
        <button onClick={handleLogin}>Přihlásit se pomocí Google</button>
      )}
    </div>
  );
}

export default App;
