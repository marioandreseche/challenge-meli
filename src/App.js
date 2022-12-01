import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import ProductDetail from "./page/product-detail/ProductDetail";
import SearchResult from "./page/search-result/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/items" element={<SearchResult />} />
        <Route path="/items/:id" element={<ProductDetail />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
