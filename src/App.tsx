import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
