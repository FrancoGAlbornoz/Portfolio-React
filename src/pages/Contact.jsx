import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContact from '../components/MainContact'
import useTheme from '../store/useTheme'
import "../styles/contact.css"

const Contact = () => {
  const { darkMode } = useTheme()

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header />
      <MainContact />
      <Footer />
    </div>
  )
}

export default Contact