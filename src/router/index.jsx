import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from '../views/login'
import Home from '../views/home'

function RouterConfig() {
  return <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
}

export default RouterConfig