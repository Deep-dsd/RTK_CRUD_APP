import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import SingleUser from "./pages/SingleUser";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreatePost />} />
        <Route path="/:userId" element={<SingleUser />} />
        <Route path="edit/:userId" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
