import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#F5F0E1', // Using a background color from your theme
      color: '#5D4037', // Using a primary color from your theme
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{
        border: '8px solid #8D6E63', // primary-light
        borderTop: '8px solid #FFD54F', // secondary
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }}></div>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Loading Barakah Hideworks...</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;