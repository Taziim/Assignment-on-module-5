function App() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#61dafb', fontSize: '3.5rem' }}>
        Hello World! 👋
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#888' }}>
        Welcome to my Vite React App
      </p>
      <p style={{ marginTop: '30px', fontSize: '1.1rem' }}>
        This project is built for GitHub Actions Assignment
      </p>
      
      <div style={{ marginTop: '50px' }}>
        <p>✅ CI/CD Pipeline Ready</p>
        <p>✅ Self-hosted Runner Configured</p>
      </div>
    </div>
  )
}

export default App