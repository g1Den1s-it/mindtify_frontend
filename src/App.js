import {Main, Profile, SignIn, SignUp} from "./pages";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login/" element={<SignIn />} />
          <Route path="/sign-up/" element={<SignUp />} />
          <Route path="/profile/" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
