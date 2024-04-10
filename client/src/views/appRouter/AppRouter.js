import React from 'react'
import Sidebar from '../../components/layout/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../homePage/HomePage'

const AppRouter = () => {
  return (
    <div className='flex divide-x'>
      <div className=''>
        <Sidebar/>
      </div>
      <div className=''>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter