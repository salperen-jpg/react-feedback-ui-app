import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Error, Home } from './pages';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
