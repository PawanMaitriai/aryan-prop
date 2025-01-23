import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Table from './components/Table'




const App = () => {
  return (
    <div className='flex'>
      
      <Sidebar/>
      <div className='w-full'>
      <Header/>
      <Table/>
      </div>
    
      
    </div>
  )
}

export default App
