import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Error from './components/Error'
import {home, aboutme, contact} from './routes/path'




function App() {
  


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home/>}/>
        <Route path={aboutme} element={<AboutMe/>}/>
        <Route path={contact} element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
