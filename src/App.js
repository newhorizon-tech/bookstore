import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';
import './App.css';

const sampleList = [{ id: 1, title: 'Great Circle', author: 'Maggie Shipstead' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }];

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
      <Route path="/" element={<BooksPage bookList={sampleList} />} />
      <Route path="/categories" element={<CategoriesPage />} />

    </Routes>

  </Router>
);

export default App;
