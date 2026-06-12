import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='prajjval' age='89' father='Om Prakash Maurya'/>
      <Card user='omp' age='50' father='GSM'/>
      {Card({user:'prince', age:'20', father:'Ravi Kumar Maurya'})}
    </div>
  )
}

export default App
