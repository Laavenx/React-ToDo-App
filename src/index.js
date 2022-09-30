import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import Main from "./components/main.js"
import Header from "./components/header.js"
const root = createRoot(document.getElementById('root'));

root.render(
  <div className="App">
    <Header/>
    <Main/>
  </div>
);