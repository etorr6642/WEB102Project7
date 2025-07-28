import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ShowCrew from './pages/ShowCrew'
import CreateCrew from './pages/CreateCrew';
import EditCrew from './pages/EditCrew'
import CrewSummary from './pages/CrewSummary'
import { Link } from 'react-router-dom'


const App = () => {
  

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ShowCrew />
    },
    {
      path:"/edit/:id",
      element: <EditCrew  />
    },
    {
      path:"/new",
      element: <CreateCrew />
    },
    {
      path:"/summary/:id",
      element: <CrewSummary/>
    }

  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Build Your Crew</h1>
        <Link to="/"><button className="headerBtn"> Show Crew🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Add Crew Member 🏆 </button></Link>
      </div>
        {element}
    </div>

  )
}

export default App

