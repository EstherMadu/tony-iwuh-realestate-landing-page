import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
