import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Posts from "./views/posts/Posts";
import Todos from "./views/Todos/Todos";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Posts />} />
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
