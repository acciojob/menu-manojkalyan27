import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createContext } from 'react';
import styles from './mainpage.module.css';
import { dishes } from './list';
import CategoryPage from './categorypage';

export const APPContext = createContext();

const MainPage = () => {
  return (
    <div>
      <h1>Our Menu</h1>
      <APPContext.Provider value={{ dishes }}>
        <Router>
          <div className={styles.links}>
            <Link to="/home">All</Link>
            <Link to="/category/breakfast">Breakfast</Link>
            <Link to="/category/lunch">Lunch</Link>
            <Link to="/category/shakes">Shakes</Link>
          </div>
          <Routes>
            <Route path="/home" element={<CategoryPage category="all" />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </Router>
      </APPContext.Provider>
    </div>
  );
};

export default MainPage;
