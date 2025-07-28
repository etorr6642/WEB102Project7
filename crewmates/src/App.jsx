import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ShowCrew from './pages/ShowCrew'
import CreateCrew from './pages/CreateCrew';
import EditCrew from './pages/EditCrew'
import { Link } from 'react-router-dom'


const App = () => {
  
  const descr = 'Red'

  const posts = [
      {'id':'1', 
      'name': ' Chelsea 🤸🏽‍♀️',
      'power':'Harvey Milian', 
      'color': descr},
      {'id':'2', 
      'name': ' Paris 🔒',
      'power':'Beauford Delaney', 
      'color':descr},
      {'id':'3', 
      'name': 'Pink',
      'power':'Onika Tonya', 
      'color':descr},
      {'id':'4', 
      'name': ' Dog 🐶',
      'power':'Denise Michelle', 
      'color':descr},
  ]


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ShowCrew data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditCrew data={posts} />
    },
    {
      path:"/new",
      element: <CreateCrew />
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

