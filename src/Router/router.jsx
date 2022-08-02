import React, { Fragment} from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const AppRouter = () => {
  return (
    <Fragment>
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
    </Fragment>
  )
}

export default AppRouter