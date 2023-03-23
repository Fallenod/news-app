import { Routes, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./MainLayout";
import MainPage from "./components/MainPage";
import categoryProps from "./categoryProps";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {categoryProps?.map((item) => {
          return <Route path={item.url} element={<MainPage data={item} />} />;
        })}
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
