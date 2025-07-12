import React from 'react'
import { createBrowserRouter } from 'react-router'
import Main from '../Layout/Main'
import Home from '../component/Home/Home'
import About from '../component/About/About'
import Projects from '../component/Projects/Projects'
import Resume from '../component/Resume/Resume'
import Contact from '../component/Contact/Contact'

export const router =createBrowserRouter ([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/resume',
        element:<Resume></Resume>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

