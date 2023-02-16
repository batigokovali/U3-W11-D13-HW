import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/" element={<MainPage></MainPage>}>
          </Route>
          <Route path="/details/:id" element={<DetailsPage></DetailsPage>}>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
