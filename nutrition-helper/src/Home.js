import Navbar from "./NavBar";
import "./Home.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>What can we do? </h1>
          Through the process of using OCR we can utilize the information of a nutrition label...
        </article>
      </div>
    </div>
  );
}

export default App;