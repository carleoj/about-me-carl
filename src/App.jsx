import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';

const App = () => {
  return <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Form />
        <Contact />
      </main>
      <Footer />
  </div>
}

export default App