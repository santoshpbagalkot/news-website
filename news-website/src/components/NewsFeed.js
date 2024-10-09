import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    console.log("Component Mounted, fetching news...");
    setLoading(true);
    setError(null); // Reset error before fetching
    axios.get(`https://newsdata.io/api/1/latest?apikey=pub_55727b99c8698a0e65e9479841ab26143feac`)
      .then(response => {
        if (response.data.status == "success") {
          setArticles(response.data.results);
        } else {
          setError("Rate limit exceeded. Please try your request again later.");
        }

        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching the news: ", error);
        setLoading(false);
        setError('Failed to load news. Please try again later.');
      });
  }, []);

  return (
    <div className="news-feed">
      {loading && <p>Loading news...</p>}
      {error && <p className="error-message">{error}</p>} {/* Error message */}
      <div style={newsFeedGridStyle}>
        {!loading && !error && articles.map((article, index) => (
          <div key={index} className="card" style={cardStyle}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p style={infoStyle}>Source: {article.source_name}</p>
            { article.creator && 
              <p style={infoStyle}>Author: {article.creator}</p>
            }
            <p style={infoStyle}>Published At: {article.pubDate}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer" style={readMoreStyle}>
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

export default NewsFeed;
