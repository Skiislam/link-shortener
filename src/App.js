import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shortcode_redirect from './pages/Shortcode_redirect';
import RedirectPage from './pages/redirectpage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/shortcode_redirect' element={<Shortcode_redirect/>} />
      <Route path='/:shortcode' element={<RedirectPage/>} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;
