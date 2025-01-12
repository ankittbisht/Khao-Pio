import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import useOnlineStatus from "../utils/useOnlineStatus";

function Layout() {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <Header />
      {!onlineStatus ? <h1 className="font-protest text-3xl md:text-4xl lg:text-6xl font-bold text-center h-[50vh] flex items-center justify-center">Looks like you are offline</h1> : <Outlet />}

      <Footer />
    </>

  )
}

export default Layout