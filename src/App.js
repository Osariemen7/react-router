import React from "react";
import "./App.css";
import { Routes, Route, Link} from "react-router-dom";
import About from "./products/About";
import Users from "./user";
import Error from "./error";
import Product from "./products/Aboutproduct";
import Service from "./products/Aboutservice";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="./products/About" className="nav">
          About
        </Link>
        <Link to="./user" className="nav">
          Users
        </Link>
      </nav>
      <h1>Home</h1>
      <p>Welcome to my home page</p>
      <h2>Altschool React Router Assignment</h2>
      <p>Enjoy the ride!</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/About" element={<About />} >
            <Route path=":id" element={<Product />} />
            <Route path="Aboutservice" element= {<Service />} />
          </Route>
          <Route path="/user" element={<Users />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
