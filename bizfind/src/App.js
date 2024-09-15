import './App.css';
import Footer from './footer';
import MenuBar from './MenuBar';
import Home from './home';
import RecentReviews from './RecentReviews'


function App() {
  return (
    <div className="App">
      <MenuBar />
      <Home />
      <RecentReviews />
      <Footer />
    </div>
  );
}

export default App;
