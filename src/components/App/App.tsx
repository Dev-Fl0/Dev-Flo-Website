import Header from './Header/Header';
import Skills from './Skills/Skills';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

import './App.scss';
import Course from './Course/Course';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  // const [scrollTop, setScrollTop] = useState(0);

  return (
    <div className="App flex flex-col justify-around gap-72 px-16 ">
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
