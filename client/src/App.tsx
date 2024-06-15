import { useState } from "react";
import Login from "./components/Login";

const App = () => {
  const [id, setId] = useState<string | undefined>();
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
};

export default App;
