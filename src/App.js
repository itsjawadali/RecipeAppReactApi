import { BrowserRouter } from "react-router-dom";
import Categories from "./Components/Categories";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Pages from "./Pages/Pages";

function App() {
  return (
    <>
    <div className="container">
    <div className="container-fluid">
  <BrowserRouter>
  <Navbar/>
  <Search/>
  <Categories/>
    <Pages/>
  </BrowserRouter>
     
    </div>
    </div>
    </>
  );
}

export default App;
