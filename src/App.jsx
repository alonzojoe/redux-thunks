import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Posts from "./views/posts/Posts";
import Todos from "./views/Todos/Todos";
import SpecificTodo from "./views/Todos/SpecificTodo";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Posts />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<SpecificTodo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
