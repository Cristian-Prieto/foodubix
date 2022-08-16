import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Random } from "./pages/Random";
import { Index } from "./components/Index";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Search } from "./pages/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/recipes/search" element={<Search />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
