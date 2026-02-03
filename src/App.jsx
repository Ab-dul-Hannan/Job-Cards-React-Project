import React from 'react'
import Nav from './components/nav.jsx'
import {Linkedin} from 'lucide-react'

const App = () => {
  const NavARR = {
    logo: 'Job Postings',
    linkedIn: 'https://www.linkedin.com/in/abdul-hannan-929a762b8/',
    gitHub: 'https://github.com/Ab-dul-Hannan',
  }

  return (
    <>
      <Nav {...NavARR} />
    </>
  )
}

export default App