import React from 'react'
import Sidebar from '../../components/layout/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../homePage/HomePage'
import Profile from '../profile/Profile'
import './AppRouter.scss'


const AppRouter = () => {
  return (
    <section className='flex divide-x'>
      <div className=''>
        <Sidebar/>
      </div>
      <main className='bg-zinc-50 app-body'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </main>
    </section>
  )
}

export default AppRouter