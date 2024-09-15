import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Featured from './pages/Featured';
import Headphone from './pages/Headphone';
import Speaker from './pages/Speaker';
import Footer from './components/Footer';
import Error from './pages/Error';
import { Navigate } from 'react-router-dom';
import Props from './pages/Props';



function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/headphone" element={<Headphone />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path='/Error' element={<Error />} />
        <Route path='/*' element={<Navigate to="/Error" />} />
        <Route path='/props' element={<Props age="21"  phone="123456678"/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
