import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Stats from './components/Stats.tsx'
import { StatsProvider } from './components/StatsContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/stats',
    element: <Stats />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StatsProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StatsProvider>
  </React.StrictMode>
)
