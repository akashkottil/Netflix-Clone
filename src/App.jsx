import { useState } from 'react'

import './App.css'

import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banners/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action, orginals, Comedy, Horror } from './Constants/Urls.js'



function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={Comedy} title='Comedy' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />

    </div>

  )
}

export default App
