import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Something went wrong.</h1>
          <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>We're sorry for the inconvenience. Please try refreshing the page.</p>
          {this.props.showDetails && this.state.error && (
            <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left', maxWidth: '80%', overflow: 'auto', border: '1px solid #f5c6cb', padding: '15px', borderRadius: '5px', backgroundColor: '#f8f8f8', color: '#495057' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>Error Details</summary>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '30px',
              padding: '10px 20px',
              fontSize: '1em',
              cursor: 'pointer',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;