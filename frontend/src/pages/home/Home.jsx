import React from 'react'
import Catalogue from './Catalogue'
import Recommened from './Recommened'
import Banner from './Banner'

const Home = () => {
  return (
    <>
    <Banner/>
    <Recommened />
      <Catalogue />
    </>
  )
}

export default Home