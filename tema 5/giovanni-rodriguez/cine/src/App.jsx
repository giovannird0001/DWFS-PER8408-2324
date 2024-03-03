import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
 
return (
  <>   
     <Header />
      <div className="container mt-4">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<MovieDetailsPage />} />
          </Routes>
    
      </div>

  </>
)
};


export default App
