import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';

console.log(<booksPage />);

const App = () => (
  <Router>
    <header>
      <nav>
        <h1>
          Bookstore
        </h1>
        <div className="nav-links">
          <Link to="/"> Books </Link>
          <Link to="/categories">Categories</Link>
        </div>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />

    </Routes>

  </Router>
);

export default App;
