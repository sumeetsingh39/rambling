import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";
import Article from "./Components/Article/Article";
import { data } from "./data";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [search, setSearch] = useState(null);
  const [menu_class, setMenuClass] = useState("menu hidden");
  const notify = (msg, type = "default") => {
    if (type == "info") {
      toast.info(msg);
    } else if (type == "success") {
      toast.success(msg);
    } else if (type == "warning") {
      toast.warn(msg);
    } else if (type == "error") {
      toast.error(msg);
    } else {
      toast(msg);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          setSearch={setSearch}
          notify={notify}
          setMenuClass={setMenuClass}
        ></Header>

        <Routes>
          <Route path="/" element={<Posts data={data} />} />
          <Route path="rambling" element={<Posts data={data} />} />
          <Route path="rambling/blog/:id" element={<Article />} />
          <Route path="rambling/search" element={<Posts data={data} />} />
          <Route
            path="rambling/search/:string"
            element={<Search search={search} notify={notify} />}
          />
          <Route path="rambling/error" element={<h2>Error</h2>} />
          <Route path="*" element={<h2>Error</h2>} />
        </Routes>

        <Footer />
        <div className={menu_class}>
          <Sidebar setSearch={setSearch} notify={notify} />
        </div>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
