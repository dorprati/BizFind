import './App.css';
import Footer from './footer';
import MenuBar from './MenuBar';
import Home from './home';
import RecentReviews from './RecentReviews';
import PrivacyPolicy from './PrivacyPolicy';
import AllRestaurants from './AllResturants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllShops from './AllShops';
import AllServices from './AllServices';
import ContactPage from './ContactPage';
import BusinessDetail from './BusinessDetail';
import SearchResults from './SearchResults';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <RecentReviews />
              </>
            } 
          />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/restaurants" element={<AllRestaurants />} />
          <Route path="/shops" element={<AllShops />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/:name" component={BusinessDetail} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
