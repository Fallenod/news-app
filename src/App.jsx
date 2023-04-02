import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './MainLayout';
import MainPage from './components/MainPage';
import categoryProps from './categoryProps';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import BookmarksPage from './components/BookmarksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {categoryProps?.map((item) => <Route path={item.url} element={<MainPage data={item} />} />)}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
