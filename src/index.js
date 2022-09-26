import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Main from "./components/main.js"
import Header from "./components/header.js"
const root = createRoot(document.getElementById('root'));

root.render(
  <div>
    <Header/>
    <Main/>
  </div>
);