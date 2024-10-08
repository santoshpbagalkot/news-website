import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';
import ArticlePage from './components/ArticlePage';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar'; // Import the SearchBar
import './App.css'; // Import the App.css file

function App() {
  return (
    <Router>
      <Header />
      <main>
        <SearchBar /> {/* Add SearchBar under the Header */}
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
