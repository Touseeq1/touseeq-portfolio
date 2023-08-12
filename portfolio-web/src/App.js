import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Project from './pages/Project';
import Aboute from './pages/Aboute';
import Service from './pages/Service';
import Team from './pages/Team';
import ProjectSlider from './components/ProjectSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route exact path='/project' element={<Project />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/about' element={<Aboute />} />
        <Route exact path='/team' element={<Team />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
