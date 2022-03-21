import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Sections from '../components/Sections'
import ServicesHome from '../components/ServicesHome'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Sections />
        <ServicesHome />
        <Footer />
    </>
  )
}

export default Home