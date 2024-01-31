import Header from './Header/Header';
import Skills from './Skills/Skills';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

import Course from './Course/Course';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import './App.scss';

function App() {
  // const [scrollTop, setScrollTop] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Course />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
