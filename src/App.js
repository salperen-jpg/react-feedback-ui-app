import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Error, Home } from './pages';
import Navbar from './components/Navbar';
import { useFeedbackContext } from './context';
import Loading from './components/UI/Loading';
function App() {
  const { isLoading } = useFeedbackContext();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
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
