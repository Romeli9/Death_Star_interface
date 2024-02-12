import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from '../widgets/Sidebar'

import RepairTeam from '../pages/RepairPage';
import EnergySystem from '../pages/EnergySystemPage';
import AtmosferSystem from '../pages/AtmosferSystemPage';


const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/repairteampage' element={<RepairTeam />} />            
          <Route path='/energysystempage' element={<EnergySystem />} />    
          <Route path='/atmosfersystempage' element={<AtmosferSystem />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
