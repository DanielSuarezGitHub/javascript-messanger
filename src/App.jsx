import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import { AuthContext } from "./context/AuthContext.jsx";
Main;
function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login"/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute> <Main /> </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
