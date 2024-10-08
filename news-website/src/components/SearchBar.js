import { useState } from 'react';
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=7b00236891de4093b215eac6ecf1c4c7`)
      .then(response => {
        setResults(response.data.articles);
      })
      .catch(error => {
        console.error("Error searching for news: ", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search news..."
      />
      <button onClick={handleSearch}>Search</button>

      <div style={newsFeedGridStyle}>
        {results.map((article, index) => (
          <div key={index} className="card" style={cardStyle}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p style={infoStyle}>Source: {article.source.name}</p>
            <p style={infoStyle}>Author: {article.author}</p>
            <p style={infoStyle}>Published At: {article.publishedAt}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={readMoreStyle}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Optional styles for the NewsFeed container
const newsFeedStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// CSS Grid layout for the NewsFeed container
const newsFeedGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Create responsive columns
  gap: '20px', // Space between cards
  padding: '0px 20px 20px 20px',
};

// Style for each card
const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease', // Add a smooth transition for hover effects
};



// Style for the additional info
const infoStyle = {
  fontSize: '14px',
  color: '#555555',
  margin: '4px 0',
};

// Style for the "Read More" link
const readMoreStyle = {
  marginTop: '10px',
  color: '#007BFF', // Link color
  textDecoration: 'none', // Remove underline
  fontWeight: 'bold',
};


export default SearchBar;
