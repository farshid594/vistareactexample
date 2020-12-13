import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Routes from './routes'
import Theme from './theme'
import RTL from './components/Rtl'
import { getDirection } from './localization'
import MasterLayout from './pages/MasterLayout'
import AlertProvider from './components/Alert'

function App() {
  return (
    <Theme>
      {getDirection() === "rtl" ? (
        <RTL>
          <AlertProvider >
            <Router>
              <MasterLayout />
            </Router>
          </AlertProvider>
        </RTL>
      ) : (
          <AlertProvider>
            <Router>
              <MasterLayout />
            </Router>
          </AlertProvider>
        )}
    </Theme>
  )
}

export default App;

