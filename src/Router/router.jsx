import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import Navigation from '../components/Navigation/Navigation'
import SignIn from '../components/auth/SignIn'

const Shop = () => {
  return <h1>shop page</h1>
}

const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<Shop />} /> {/* ---- sub route ---- */}
          <Route path='sign-in' element={<SignIn />} /> {/* ---- sub route ---- */}
        </Route>
      </Routes>
    </Fragment>
  )
}

export default AppRouter
