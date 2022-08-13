import { BrowserRouter, Link, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { Random } from "./pages/Random";
// import { Login } from "./pages/Login";
// import { Contact } from "./pages/Contact";
import { Recipes } from "./pages/Recipes";

function Home() {
  return (
    <>
      <header className="header">
        <span style={{ color: "#4ade80 " }}>Food</span>
        <span style={{ color: "#f1f5f9 " }}>ubix</span>
      </header>
      <nav className="nav-container">
        <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="recipes" style={{ display: "flex", textDecoration: "none" }}>
          Recipes
        </Link>
        <Link to="random" style={{ display: "flex", textDecoration: "none" }}>
          Random
        </Link>
        {/* <Link to="contact">Contact Us</Link>
        <Link to="login">Login</Link> */}
      </nav>
      <Outlet />
    </>
  );
}

// const randomFetchUrl =
//   "https://api.spoonacular.com/recipes/random?apiKey=531bc52fc1d248b88284fd0fd70fa373&number=6";

function App() {
  // const [randomRecipe, setRrandomRecipe] = useState([]);
  // useEffect(() => {
  //   fetch(randomFetchUrl)
  //     .then((res) => res.json())
  //     .then((jsonData) => setRrandomRecipe(jsonData.recipes))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="recipes" element={<Recipes />} />
          <Route path="random" element={<Random />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
