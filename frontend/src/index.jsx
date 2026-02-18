import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { AlertProvider } from './functions/AlertProvider'

import './styles/index.css'
import './styles/scrollbar.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import MotionWrapper from "./functions/MotionWrapper"
import Icons from './pages/Icons'
import Docs from './pages/Docs'

function AppRoutes(){
  const location = useLocation()

  return(
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<MotionWrapper> <Home /> </MotionWrapper>}/>
        <Route path='/icons' element={<MotionWrapper> <Icons /> </MotionWrapper>}/>
        <Route path='/docs' element={<MotionWrapper> <Docs /> </MotionWrapper>}/>
      </Route>
    </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AlertProvider>
  </StrictMode>,
)
