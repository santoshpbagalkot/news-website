import React from 'react'
import ReactDOM from 'react-dom'


const Footer = () => {
  return (
    <footer>
      <p style={copyRightsStyle}>&copy; 2024 React News. All Rights Reserved.</p>
      <p>
        <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Powered by NewsAPI</a>
      </p>
    </footer>
  );
};

// const footerStyle = {
//   backgroundColor: '#333',
//   color: '#fff',
//   padding: '10px',
//   textAlign: 'center',
//   position: 'absolute',
//   bottom: '0',
//   width: '100%',
// };

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const copyRightsStyle = {
  display: 'none',
};

export default Footer;
