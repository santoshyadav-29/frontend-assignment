import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import Header from "./Components/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route
        path="*"
        element={
          <>
            <Header />
            <h1>Not Found</h1>
          </>
        }
      />
    </Routes>
  );
};

export default App;
