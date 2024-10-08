import React from 'react'
import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams();
  // Fetch and display full article using the id

  return (
    <div>
      <h1>Article {id}</h1>
      {/* Add full article content here */}
    </div>
  );
};

export default ArticlePage;
