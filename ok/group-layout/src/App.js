import React from 'react';
import Header from './components/Header';
import GroupList from './components/GroupList';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      
      <main className="container py-4">
        {/* Optional: React logo section (you can remove if not needed) */}
        <div className="text-center my-4">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>

        <GroupList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
