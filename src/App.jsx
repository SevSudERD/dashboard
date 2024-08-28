/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/basic/Sidebar"
import SettingsPage from "./pages/SettingsPage"
import OverviewPage from "./pages/OverviewPage"
import SalesPage from "./pages/SalesPage"
import UsersPage from "./pages/UsersPage"
import AnalyticsPage from "./pages/AnalyticsPage"

const App = () => {
  return (
    <>

    <div className="flex h-screen bg-purple-900 text-gray-100 overflow-hidden">
   
      {/* background */}
      <div className="fixed inset-0 z-0  ">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-900 to-purple-700 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      
      <Sidebar />
      <Routes>
				<Route path='/' element={<OverviewPage />}  />
				<Route path='/users' element={<UsersPage />}  />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
      
    </div>
    </>
  )
}

export default App
