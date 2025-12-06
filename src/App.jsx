import AnnouncementBar from "./AnnouncementBar"
import Navigation from "./common/Navigation"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom"
import SignUp from "./Pages/Sign-Up"


const App = () => {

  let allRout = createBrowserRouter ([
    {path:'/',
      element: <Home/>
    },
    {path:'/contact',
      element:<Contact/>
    },
    {path:'/about',
      element:<About/>
    },
    {path:'/SignUp',
      element:<SignUp/>
    },
  
  ])

  return (

    <div>
      <AnnouncementBar/>
     <RouterProvider router={allRout}/>
      
    </div>
  )
}

export default App