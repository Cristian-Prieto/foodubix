import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Random } from "./pages/Random";
import { RecipeDetail } from "./pages/RecipeDetail";

// import { Login } from "./pages/Login";
// import { Contact } from "./pages/Contact";
import { Search } from "./pages/Search";

function Home() {
  const location = useLocation();

  const isActive = (path) => {
    if (location.pathname === path) {
      return "disabled";
    } else return "enabled";
  };
  return (
    <>
      <header className="header">
        <span style={{ color: "#4ade80 " }}>Food</span>
        <span style={{ color: "#f1f5f9 " }}>ubix</span>
      </header>
      <nav className="nav-container">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="recipes/search" className={isActive("/recipes/search")}>
          Search
        </Link>
        <Link to="random" className={isActive("/random")}>
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
