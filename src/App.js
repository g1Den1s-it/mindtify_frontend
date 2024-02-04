import {Main, SignIn, SignUp} from "./pages";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login/" element={<SignIn />} />
          <Route path="/sign-up/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
