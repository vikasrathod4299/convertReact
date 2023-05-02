import React from 'react'

import About from './About'
import Contact from './Contact'
import ProstfolioList from './ProstfolioList'

const Section = () => {
  return (
    <div>
      <ProstfolioList/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Section