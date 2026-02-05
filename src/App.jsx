import React from 'react'
import Nav from './components/nav.jsx'
import Card from './components/card.jsx'
import { NavARR, CardContent } from './Data/data.jsx'

const App = () => {
  

  return (
    <>
      <Nav {...NavARR} />

      <div className="cardSection">
        {CardContent.map((job) => (
          <Card {...job} />
        ))}
      </div>
    </>
  )
}

export default App