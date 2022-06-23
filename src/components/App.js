import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<PublicOutlet />}>
              <Route path='signup' element={<SignUp />} />
              <Route path='login' element={<Login />} />
            </Route>
            <Route path='/*' element={<PrivateOutlet />}>
              <Route path='quiz/:id' element={<Quiz />} />
              <Route path='result/:id' element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;