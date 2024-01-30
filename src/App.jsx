import "./App.css";
import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo"
import Error from "./pages/Error";

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark)
  }
  return (
    <main className={dark ? "dark" : undefined}>
      <Nav  toggleTheme={toggleTheme} dark={dark}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country/:name" element={<CountryInfo/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </main>
  );
}

export default App;
