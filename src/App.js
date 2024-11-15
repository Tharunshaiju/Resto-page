import './App.css';
import About from './compounds/About';
import Feedback from './compounds/Feedback';
import Navbar from './compounds/Navbar';
import Hero from './compounds/Hero';
import Menu from './compounds/Menu';
import Support from './compounds/Support';
import Footer from './compounds/Footer';



function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Feedback />
    <Support />
    <Footer />
    </div>

  );
} 

export default App;
