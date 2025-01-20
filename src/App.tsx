import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/Button";

function App() {
  const [alertvisible, setalertvisibilty] = useState(false);
  return (
    <div>
      {alertvisible && (
        <Alert onClose={() => setalertvisibilty(false)}>Hello!</Alert>
      )}
      <Button onClick={() => setalertvisibilty(true)}>Sign up</Button>
    </div>
  );
}

export default App;
