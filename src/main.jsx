import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes.jsx'
import FriendsDataProvider from './context/FriendsDataProvider.jsx';
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <FriendsDataProvider>
     <RouterProvider router={router} />

     {/* React Toastify */}
     <ToastContainer />
  </FriendsDataProvider>,
)
