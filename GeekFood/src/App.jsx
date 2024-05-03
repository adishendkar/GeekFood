import './App.css'
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import CardSection from './components/CardSection.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CardSection />
      <Footer />  
    </div>
  );
}


export default App
