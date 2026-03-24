import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="h-screen w-full overflow-hidden bg-hero-pattern select-none relative">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
