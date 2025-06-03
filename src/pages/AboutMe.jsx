import React from 'react'
import useTheme from '../store/useTheme'
import Header from '../components/Header'
import MainAboutMe from '../components/MainAboutMe'
import Footer from '../components/Footer'
import "../styles/aboutme.css" 

const AboutMe = () => {
  const { darkMode } = useTheme()
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header/>
      <MainAboutMe/>
      <Footer/>
    </div>
  )
}

export default AboutMe
