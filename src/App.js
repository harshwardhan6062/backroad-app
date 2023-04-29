import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Tours } from './components/Tours';
import { Services } from './components/Services';
import { Explore } from './components/Explore';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Explore />
    <About />
    <Services />
    <Tours />
    <Footer />
    </>
  );
}

export default App;
