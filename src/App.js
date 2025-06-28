
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ServicePages from './Components/ServicePages';
import SuccesStories from './Components/SuccesStories';
import WhyChoose from './Components/WhyChoose';
import FooterPage from './Components/FooterPage';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9fa', height: 'auto' }}>
     <NavBar />
     <main>
       <HomePage/>
     <AboutPage/>
     <ServicePages/>
     <SuccesStories/>
     <WhyChoose/>
     <FooterPage/>
     </main>
    
    </div>
  );
}

export default App;
