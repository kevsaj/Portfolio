import React from 'react';
import './App.css';

function App() {
  return (
    <div className="logo flex flex-col w-full h-full">
      <header className="logo pt-20 mx-auto">
        <div className="logo w-full h-8 text-xl font-bold text-white hover:text-black hover:bg-pink-200">
          <a
            className="p-10 py-20 items-center logo hover:transform hover:scale-150"
            href="https://github.com/kevsaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kevin Sajan
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
