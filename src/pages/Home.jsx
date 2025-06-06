import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/Mainhome'
import Footer from '../components/Footer'
import useTheme from '../store/useTheme'
import "../styles/home.css"

const Home = () => {

  const { darkMode } = useTheme()
    


  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header/>
        <MainHome/>
        <Footer/>
    </div>
  )
}

export default Home