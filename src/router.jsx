import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import App from './App'

const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])
