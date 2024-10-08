import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <h1 style={titleStyle}>React News</h1>
        <ul style={navStyle}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories/sports">Sports</Link></li>
          <li><Link to="/categories/technology">Technology</Link></li>
          <li><Link to="/categories/entertainment">Entertainment</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// const headerStyle = {
//   backgroundColor: '#333',
//   color: '#fff',
//   padding: '10px',
//   textAlign: 'center',
// };

const titleStyle = {
  fontSize: '2rem',
  margin: '0',
};

const navStyle = {
  listStyleType: 'none',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  display: 'none',
};

export default Header;
