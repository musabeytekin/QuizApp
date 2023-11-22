import React from 'react'
import AdminMenu from '../../Components/AdminMenu/AdminMenu'
import { Outlet } from 'react-router-dom'
import './adminpanel.css'
const Panel = () => {
  return (
    <div className='panel-root'>
        <AdminMenu />
        <Outlet />
    </div>
  )
}

export default Panel