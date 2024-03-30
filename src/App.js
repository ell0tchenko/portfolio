import Navbar from './Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Project from './pages/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/works' Component={Works} />
            <Route path='/about' Component={About} />
            <Route path='/works/:projectName' Component={Project} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
