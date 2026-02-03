import React from 'react'
import Nav from './components/nav.jsx'
import Card from './components/card.jsx'
import AmazonPNG from './assets/amazonLogo.png'

const App = () => {
  const NavARR = {
    logo: 'Job Postings',
    linkedIn: 'https://www.linkedin.com/in/abdul-hannan-929a762b8/',
    gitHub: 'https://github.com/Ab-dul-Hannan',
  }

  const CardContent = {
    imgSrc: AmazonPNG,
    imgAlt: 'Amazon Logo',
    company: 'Amazon',
    time: '2 days ago',
    jobTitle: 'Frontend Developer',
    jobType: 'Full-time',
    jobSitting: 'Remote',
    price: '$12000',
    location: 'San Francisco, CA',
    applyBtn: 'Apply Now',
  }

  return (
    <>
      <Nav {...NavARR} />

      <div className="cardSection">
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
        <Card {...CardContent}/>
      </div>
    </>
  )
}

export default App