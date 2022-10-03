import "./App.css";
import { Router } from "@reach/router";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const PublicRoute = [
  { name: "Home", Path:Home },
  { name: "Services", Path:Services  },
  { name: "About", Path:About },
  { name: "Contact", Path:Contact }
];
console.log(PublicRoute.Path)
function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="app">
      <Navbar />
      {PublicRoute.map((route) => {
        <Router key={route.name} path={<route.Path/>}/> ;
      })}
    </div>
  );
}

export default App;
