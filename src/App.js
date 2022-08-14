import { BrowserRouter, Link, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { Random } from "./pages/Random";
import { RecipeDetail } from "./pages/RecipeDetail";
// import { Login } from "./pages/Login";
// import { Contact } from "./pages/Contact";
import { Search } from "./pages/Search";

function Home() {
  return (
    <>
      <header className="header">
        <span style={{ color: "#4ade80 " }}>Food</span>
        <span style={{ color: "#f1f5f9 " }}>ubix</span>
      </header>
      <nav className="nav-container">
        <Link
          to="/"
          style={{
            color: "#4ade80",
            textDecoration: "none",
            borderBottom: "4px solid #4ade80",
          }}
        >
          Home
        </Link>
        <Link
          to="recipes/search"
          style={{ color: "#f1f5f9", display: "flex", textDecoration: "none" }}
        >
          Search
        </Link>
        <Link
          to="random"
          style={{ color: "#f1f5f9", display: "flex", textDecoration: "none" }}
        >
          Random
        </Link>
        {/* <Link to="contact">Contact Us</Link>
        <Link to="login">Login</Link> */}
      </nav>
      <Outlet />
      <footer className="footer">Cristian Prieto, España 2022</footer>
    </>
  );
}

function App() {
  // const [randomRecipe, setRrandomRecipe] = useState([]);
  // useEffect(() => {
  //   fetch(randomFetchUrl)
  //     .then((res) => res.json())
  //     .then((jsonData) => setRrandomRecipe(jsonData.recipes))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="routes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="recipes">
              <Route path=":id" element={<RecipeDetail />} />
              <Route path="search" element={<Search />} />
            </Route>
            <Route path="random" element={<Random />} />
            {/* <Route path="login" element={<Login />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
