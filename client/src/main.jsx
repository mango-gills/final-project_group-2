import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import MainContainerPage from './pages/MainContainerPage';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainContainerPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
